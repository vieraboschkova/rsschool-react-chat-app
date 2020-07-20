import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'
import './primitive.css'
import './style.css'
import 'react-notifications/lib/notifications.css';
import * as sw from './service-worker'

function initApp () {
    ReactDOM.render(<App />, document.getElementById('root'))
    Notification.requestPermission(status => {
        console.log('Notification permission status:', status);
      });
}

initApp()

export default initApp