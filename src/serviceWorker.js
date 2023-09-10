self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "./logo.png", //our tasty drop logo
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification Title", options)
  );
});
