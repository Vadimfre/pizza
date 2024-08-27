self.addEventListener("push", function (event) {
  console.log("Push event received:", event);
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: "icons/icon-192x192.png",
    badge: "icons/icon-192x192.png",
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received:", event);
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
