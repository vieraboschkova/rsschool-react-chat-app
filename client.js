if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('sw.js')
             .then(function() { console.log('Service Worker Registered'); });
}

if (!('Notification' in window)) {
    console.log('This browser does not support notifications!');
    // return;
  } else {console.log('Notifications OK')}

  if ('caches' in window) {
    console.log('has cache support')
  }