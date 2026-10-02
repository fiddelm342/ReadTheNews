// This dummy fetch listener is required by Chrome to trigger the PWA install prompt
self.addEventListener('fetch', function(event) {
    // Just lets the browser do its default network request
});
