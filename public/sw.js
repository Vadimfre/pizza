if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const d=e=>t(e,n),r={module:{uri:n},exports:c,require:d};s[n]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(a(...e),c)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1imACxhRSdOR1SkdkO4t-/_buildManifest.js",revision:"5a773c1f02204b3d704d1c74570c875d"},{url:"/_next/static/1imACxhRSdOR1SkdkO4t-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/231-21f0d14a2b97cc0c.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/403-f57c68a0db92757f.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/61-7c702769b667c74a.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/634-336a787511049c38.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/657-661af400824fcb86.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/663-9026e2679421bc18.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/726-2a1b08e8c1d0971e.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/733-eebbde2f725bd1ef.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/768-3256f7d206db490b.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/937-e20dde789ef03664.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/954-97197d6663182790.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/998-7fc2bd58b330025d.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(checkout)/checkout/page-a992942b8718bb40.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(checkout)/layout-d17bf642fc16a80d.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/@modal/%5B...catchAll%5D/page-587e84f8e340e62e.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/@modal/(.)product/%5Bid%5D/page-a611cafcc811a9db.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/@modal/default-e3e5d9a007aab4f1.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/layout-1c87caf1a2b54be2.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/not-auth/page-5ef24c517a8e73db.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/page-885faf4b57963945.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/product/%5Bid%5D/page-a3919d38ca7c4f2d.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/(root)/profile/page-a988f431aac13efb.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/_not-found/page-60862dff0d0cae4c.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/app/layout-85e880adacf9b2d3.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/fd9d1056-f23d40d3dcfe772d.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/main-a8888aecc8add9a8.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/main-app-99c006267aee1153.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d97eb45c7f073f9b.js",revision:"1imACxhRSdOR1SkdkO4t-"},{url:"/_next/static/css/96728a656739ecae.css",revision:"96728a656739ecae"},{url:"/_next/static/css/df671aca90871fe2.css",revision:"df671aca90871fe2"},{url:"/_next/static/media/0610ebff456d6cfc-s.woff2",revision:"8786f06e95694337521729d147b3f669"},{url:"/_next/static/media/21ed5661b47f7f6d-s.woff2",revision:"91c3bc1f55db641843550a62e39f0031"},{url:"/_next/static/media/8a9e72331fecd08b-s.p.woff2",revision:"f8a4d4cec8704b696ec245377c0e188e"},{url:"/_next/static/media/bde16c1724335d95-s.woff2",revision:"c56527d8c69315a82039a810338fd378"},{url:"/_next/static/media/e3b8d441242e07fb-s.woff2",revision:"8699475078b0c1b86dbe7ad907bb4e81"},{url:"/icons/icon-192x192.png",revision:"f9fd57e5af1495fb27da316ca8a26034"},{url:"/icons/icon-512x512.png",revision:"3820c4fe600542469dfdef92b1c11a4b"},{url:"/logo.png",revision:"6d2bf414ddd70ebae4a9b9b24103e098"},{url:"/manifest.json",revision:"ce236779b6e3cb1894e84315f70207d6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/push-sw.js",revision:"e85e8780137ad0163c7f98e47e8a7698"},{url:"/screenshots/screenshot1.png",revision:"3820c4fe600542469dfdef92b1c11a4b"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
