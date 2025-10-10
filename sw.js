// [ENHANCE: Service Worker for persistent image caching and consistent visibility]
const CACHE_NAME = 'portfolio-cache-v1';
const IMAGE_CACHE_NAME = 'portfolio-images-v1';

// Critical resources to cache
const CRITICAL_RESOURCES = [
    '/',
    '/index.html',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

// Critical images to cache aggressively - [FIX: Updated with correct project-image mappings]
const CRITICAL_IMAGES = [
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/portfolio banner.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/saralpolicy.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/charactercraft-pro.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/ai-interview-system.jpg',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/eduvault.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/moatmetrics.png'
];

// All project images - [FIX: Updated with correct project-image mappings]
const ALL_IMAGES = [
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/portfolio banner.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/saralpolicy.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/charactercraft-pro.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/ai-interview-system.jpg',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/eduvault.png',
    'https://raw.githubusercontent.com/VIKAS9793/VIKAS9793.github.io/main/images/moatmetrics.png',
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME).then(cache => {
                console.log('Caching critical resources...');
                return cache.addAll(CRITICAL_RESOURCES);
            }),
            caches.open(IMAGE_CACHE_NAME).then(cache => {
                console.log('Caching critical images...');
                return cache.addAll(CRITICAL_IMAGES);
            })
        ])
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Handle image requests with aggressive caching
    if (request.destination === 'image' || url.hostname === 'images.unsplash.com') {
        event.respondWith(
            caches.open(IMAGE_CACHE_NAME).then(cache => {
                return cache.match(request).then(response => {
                    if (response) {
                        console.log('Serving image from cache:', request.url);
                        return response;
                    }
                    
                    // If not in cache, fetch and cache it
                    return fetch(request).then(fetchResponse => {
                        if (fetchResponse.ok) {
                            cache.put(request, fetchResponse.clone());
                            console.log('Cached new image:', request.url);
                        }
                        return fetchResponse;
                    }).catch(() => {
                        // Return a fallback response if network fails
                        return new Response('', { status: 404 });
                    });
                });
            })
        );
        return;
    }
    
    // Handle other requests
    event.respondWith(
        caches.match(request).then(response => {
            if (response) {
                console.log('Serving from cache:', request.url);
                return response;
            }
            
            return fetch(request).then(fetchResponse => {
                // Cache successful responses
                if (fetchResponse.ok) {
                    const responseClone = fetchResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseClone);
                    });
                }
                return fetchResponse;
            }).catch(() => {
                // Return cached version if available
                return caches.match(request);
            });
        })
    );
});

// Background sync for image preloading
self.addEventListener('sync', event => {
    if (event.tag === 'preload-images') {
        event.waitUntil(
            caches.open(IMAGE_CACHE_NAME).then(cache => {
                return Promise.all(
                    ALL_IMAGES.map(imageUrl => {
                        return fetch(imageUrl).then(response => {
                            if (response.ok) {
                                return cache.put(imageUrl, response);
                            }
                        }).catch(error => {
                            console.log('Failed to preload image:', imageUrl, error);
                        });
                    })
                );
            })
        );
    }
});

// Message handling for cache management
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'PRELOAD_IMAGES') {
        event.waitUntil(
            caches.open(IMAGE_CACHE_NAME).then(cache => {
                return Promise.all(
                    ALL_IMAGES.map(imageUrl => {
                        return cache.match(imageUrl).then(response => {
                            if (!response) {
                                return fetch(imageUrl).then(fetchResponse => {
                                    if (fetchResponse.ok) {
                                        return cache.put(imageUrl, fetchResponse);
                                    }
                                });
                            }
                        });
                    })
                );
            })
        );
    }
});