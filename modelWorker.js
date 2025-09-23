// modelWorker.js - Web Worker for progressive on-device ML
// No external network calls; mock load/compute to keep main thread free.

let tinyModelLoaded = false;
let fullModelLoaded = false;
let isInferencing = false;

function sleep(ms){ return new Promise(res => setTimeout(res, ms)); }

self.onmessage = async (e) => {
    const { type, payload } = e.data || {};
    switch (type) {
        case 'load-tiny-model': {
            if (tinyModelLoaded) return;
            // Simulate small model load (e.g., 5-10MB)
            await sleep(150);
            tinyModelLoaded = true;
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
            // Simulate inference cost: tiny: ~12ms, full: ~6ms
            const cost = fullModelLoaded ? 6 : 12;
            await sleep(cost);
            const latency = Date.now() - started;
            isInferencing = false;
            self.postMessage({ type: 'infer-result', payload: { latency, model: fullModelLoaded ? 'full' : 'tiny' } });
            break;
        }
        default:
            break;
    }
};


