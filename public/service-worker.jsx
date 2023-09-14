
self.addEventListener('push', function (e) {
    const options = {
      body: e.data.text(),
      icon: 'logo.png', // our tasty drop logo icon
      badge: 'badge.png', // our tasty drop badge
    };
  
    e.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });

// Export the 'register' function
export function register() {
    if ('serviceWorker' in navigator) {
      return navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    } else {
      console.warn('Service Worker is not supported in this browser.');
      return Promise.resolve();
    }
  }
    