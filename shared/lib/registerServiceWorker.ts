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
