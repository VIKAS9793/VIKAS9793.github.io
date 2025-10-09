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

// Critical images to cache aggressively
const CRITICAL_IMAGES = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
];

// All project images
const ALL_IMAGES = [
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1485827404703-5b1c458d8c6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
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