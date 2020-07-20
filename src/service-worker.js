const sw = 
// (
  () => {
  
    let pushSubscribe = false;
    let swRegistration = null;
  
    function initializeUI() {
      console.log('subscribing')
            if (pushSubscribe) {
              unsubscribeUser();
            } else {
              subscribeUser();
              console.log('trying to subscribe')
            }
          
          swRegistration.pushManager.getSubscription()
          .then(subscription => {
            pushSubscribe = (subscription !== null);
            if (pushSubscribe) {
              console.log('User IS subscribed.');
            } else {
              console.log('User is NOT subscribed.');
            }
          });
  
    }
  
    const applicationServerPublicKey = 'BNPSV1bxg9Va-S8hCCvuj3rTV_kiMZoq5iPalZF_msFaKpw8h8bERC19Ka_NC1JtKBFix8b1ARH1ZqKlnpSDJv4'
  
    function subscribeUser() {
      const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
      swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(subscription => {
        console.log('User is subscribed:', subscription);
        pushSubscribe = true;
      })
      .catch(err => {
        if (Notification.permission === 'denied') {
          console.warn('Permission for notifications was denied');
        } else {
          console.error('Failed to subscribe the user: ', err);
        }
      });
    }
  
    function unsubscribeUser() {
  
      // TODO 3.5 - unsubscribe from the push service
  
    }
  
    function urlB64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
  
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
  
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }
  
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        console.log('Service Worker and Push is supported');
        navigator.serviceWorker.register('sw.js')
        .then(swReg => {
          console.log('Service Worker is registered', swReg);
          swRegistration = swReg;
          initializeUI()
        })
        .catch(err => {
          console.error('Service Worker Error', err);
        });
      });
    } else {
      console.warn('Push messaging is not supported');
  }
  
}

export default sw;