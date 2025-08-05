self.addEventListener("push", (event) => {
    const data = event.data?.json() || {};
    const title = data.title || "New Notification";
    const options = {
        body: data.body || "You have a new message.",
        icon: "/icons/icon-512x512.png",
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener("notificationclick", (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("/")
    );
});
