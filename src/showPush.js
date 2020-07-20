function showNotification(name) {
    if (document.hidden) {
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('New Message!', {
            body: `from: ${name}`,
          });
        });
      }
    });
    }
}

export default showNotification