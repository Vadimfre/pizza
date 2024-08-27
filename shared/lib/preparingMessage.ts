import { registerServiceWorker } from "./registerServiceWorker";
import { urlBase64ToUint8Array } from "./urlBase64ToUint8Array";

export async function readingMessage(text: string, title: string) {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      registerServiceWorker().then((registration) => {
        const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey!);

        registration.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidKey,
          })
          .then((subscription) => {
            const notificationData = {
              subscription: subscription,
              title: `${title}`,
              body: `${text}`,
            };

            fetch("/api/send-notification", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(notificationData),
            }).then((response) => response.json());
          });
      });
    } else {
      console.error("Notification permission denied");
    }
  });
}
