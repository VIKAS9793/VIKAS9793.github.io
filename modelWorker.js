// modelWorker.js - Web Worker for progressive on-device ML
// No external network calls; mock load/compute to keep main thread free.

let tinyModelLoaded = false;
let fullModelLoaded = false;
let isInferencing = false;
let tinyModel;

function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }

self.onmessage = async (e) => {
    const { type, payload } = e.data || {};
    switch (type) {
        case 'load-tiny-model': {
            if (tinyModelLoaded) return;
            try {
                const res = await fetch('tiny_model.json');
                tinyModel = await res.json();
                tinyModelLoaded = true;
            } catch (e) {
                // Fallback: mark as loaded with defaults
                tinyModel = { version: 1, intents: { general_inquiry: { weights: { fallback: 1 } } } };
                tinyModelLoaded = true;
            }
            self.postMessage({ type: 'model-status', payload: { tiny: true, full: fullModelLoaded } });
            break;
        }
        case 'load-full-model': {
            if (fullModelLoaded) return;
            // Load only when idle; caller should gate with requestIdleCallback
            await sleep(600);
            fullModelLoaded = true;
            self.postMessage({ type: 'model-status', payload: { tiny: true, full: true } });
            break;
        }
        case 'infer': {
            if (!tinyModelLoaded) {
                self.postMessage({ type: 'error', payload: 'Model not loaded' });
                return;
            }
            if (isInferencing) return; // throttle
            isInferencing = true;
            const started = Date.now();
            let intent = 'general_inquiry';
            try {
                const text = (payload && payload.text ? String(payload.text) : '').toLowerCase();
                // Tiny scoring: sum of keyword weights per intent
                let bestScore = -1;
                for (const [name, obj] of Object.entries(tinyModel.intents || {})) {
                    let score = 0;
                    const weights = (obj && obj.weights) || {};
                    for (const [kw, w] of Object.entries(weights)) {
                        if (text.includes(kw)) score += w;
                    }
                    if (score > bestScore) { bestScore = score; intent = name; }
                }
            } catch (e) {}
            const cost = fullModelLoaded ? 6 : 10;
            await sleep(cost);
            const latency = Date.now() - started;
            isInferencing = false;
            self.postMessage({ type: 'infer-result', payload: { latency, model: fullModelLoaded ? 'full' : 'tiny', intent } });
            break;
        }
        default:
            break;
    }
};


