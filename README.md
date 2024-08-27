## Настройка PWA приложение

Для настройки PWA приложения использовалась библиотека @ducanh2912/next-pwa.

```bash
npm i @ducanh2912/next-pwa
```

Меняем файл `next.config.js`

```bash
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: true,
  },
};

export default withPWA(nextConfig);
```

Дальше все делать по [Документации](https://ducanh-next-pwa.vercel.app/docs/next-pwa/getting-started)

## PUSH-Уведомеления

[Документация](https://reetesh.in/blog/push-notification-in-react-and-next.js-app-using-node.js) используемая при разработке

Библиотеки: `web-push, body-parser`

`npm install web-push body-parser`

Для начала нужно изменить `next.config.js` как показано выше.

Создаем `Service Worker` в файле `push-sw.js` в папке `public`, отвечающий за создание функций генерации сообщения.

```self.addEventListener("push", function (event) {
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
```

Регистрация `Service Worker`

```
export function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/push-sw.js")
        .then((registration) => {
          console.log(
            "Push Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Push Service Worker registration failed:", error);
        });
    });
  }
  return navigator.serviceWorker.register("/push-sw.js");
}
```

После этого создаем в `app` папку `api`, в ней еще одну папку `send-notification`, уже в ней нужно создать файл `route.ts`, отвечающий ща обработку запросов на сервер next.js для отправки сообщений

```import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const body = await req.json();
  const { subscription, title, body: messageBody } = body;

  if (!subscription || !subscription.endpoint) {
    return NextResponse.json({ success: false, error: "Invalid subscription" });
  }

  const payload = JSON.stringify({ title, body: messageBody });

  webpush.setVapidDetails(
    `mailto:${process.env.VAPID_EMAIL}`,
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );

  await webpush.sendNotification(subscription, payload);

  return NextResponse.json({ success: true });
}
```

Создаем фунцию для создания запроса на сервер

```import { registerServiceWorker } from "./registerServiceWorker";
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
```

а вместе с ней функцию которая обрабатывает код из файла env

```export function urlBase64ToUint8Array(base64String: string) {
 const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
 const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

 const rawData = window.atob(base64);
 const outputArray = new Uint8Array(rawData.length);

 for (let i = 0; i < rawData.length; ++i) {
   outputArray[i] = rawData.charCodeAt(i);
 }
 return outputArray;
}
```

После это можно использовать функцию `readingMessage` для того чтобы отправлять сообщения
