// src/components/PushNotification.js

import { useState } from 'react';

const PushNotification = () => {
  const [subscription, setSubscription] = useState(null);

  const handlePermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'your-public-key',
        });
        setSubscription(subscription);
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const handlePush = () => {
    if (subscription) {
      fetch('/api/send-push-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),
      });
    }
  };

  return (
    <div className='text-center pt-40'>
      <button className='bg-red-400 block' onClick={handlePush}>Send Push Notification</button>
      <button className='bg-red-400 ' onClick={handlePermission}>Request Notification Permission</button>
    </div>
  );
};

export default PushNotification;
