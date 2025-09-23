// modelWorker.js - Web Worker for progressive on-device ML
// No external network calls; mock load/compute to keep main thread free.

let tinyModelLoaded = false;
let fullModelLoaded = false;
let isInferencing = false;
let tinyModel;
let agentRunning = false;

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
        case 'agent-start': {
            if (agentRunning) return;
            agentRunning = true;
            // Very small demo agent: parse goal -> plan 2-3 steps -> emit progress
            (async () => {
                const goal = (payload && payload.goal) || 'analyze portfolio';
                self.postMessage({ type: 'agent-status', payload: { state: 'planning', goal } });
                await sleep(60);
                const steps = [`Understand goal: ${goal}`, 'Retrieve relevant context', 'Summarize findings'];
                self.postMessage({ type: 'agent-plan', payload: { steps } });
                for (let i = 0; i < steps.length; i++) {
                    self.postMessage({ type: 'agent-status', payload: { state: 'executing', step: i, total: steps.length } });
                    await sleep(120);
                }
                self.postMessage({ type: 'agent-result', payload: { summary: `Completed: ${goal}`, tokens: 64, timeMs: 200 } });
                agentRunning = false;
            })();
            break;
        }
        case 'agent-cancel': {
            agentRunning = false; // cooperative cancel for demo
            self.postMessage({ type: 'agent-status', payload: { state: 'cancelled' } });
            break;
        }
        default:
            break;
    }
};


