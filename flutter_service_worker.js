'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ad0f84938e69cc4a127d82d9a9692980",
".git/config": "0f63d856f2c3ab37b95cc34aa72e9078",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "157af745ab59d8a6fd03b3dbf2106bd1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8fbc32837f92f9935f85e5298ece11b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0a75a2f739689fbdd887e3e91eebb12",
".git/logs/refs/heads/main": "b08a621070f298a82c0eba1e8e91821e",
".git/logs/refs/remotes/origin/main": "bb33624759d90f916425f00a24b9b30b",
".git/objects/14/572fc87c804fd93f1aff396a3ec0926d7dc2b3": "68ddf98dd6dca3e05d9230228f98776c",
".git/objects/1f/b56179bdcf6f0d9fb72690f110e9add66401b2": "e7d78c80df3de4c57bea7be406d3032b",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/34/c3cecbafc2821c6b55254d027e537a7eff7a9b": "9be45eb453ab139a9e6b3f0e17810a99",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/57/cba719b8a2e879415ef4174a1243243959be3b": "bd0175b0ef849a80cb159729f62345cb",
".git/objects/5b/07760ab92aba834c8414743d20873a5c75ca41": "46bdd68b293b40f22b9979e33cf4b1cb",
".git/objects/76/720e15188ac8aba4f835e35ca95629346c3ecb": "b506f006c6b81a77417dba3e2dc7d261",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/85/e72d8a7ed33d40d54de53711eeab8ae09f9917": "73e9984420eade59bbad40de6a46b86d",
".git/objects/8b/fc56de10b711d029e124ce5359fd8b5bfc1ad2": "f94b2800f120e74d8c71c5ef00f08ce0",
".git/objects/96/e8be8b15ffa28bb396173822c1920225c3cc1a": "2631d772659bdf1181cfbae1fff79352",
".git/objects/99/7445caefc1100f2e94f41baf948d11f86245d9": "0df1dd8d303ad08962d009909cafaafa",
".git/objects/9c/453639dc025c32b729bd8abeb2a0c923fdaef0": "dcc729cfa7c1f59fa029c93a43f385b4",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/b9/cd34693c504fee8c76a7a3ae86062be1387fdd": "a3f67ac4d2c144c3fc14c140b6590a36",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/eb/1309bee99ad6fafa6531a9a02f1ea93ca97205": "2e2c32132acd283e2abd035d2adfbabb",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/pack/pack-6a1f612e7393bf5da02e7f6ff139be12e3dd3176.idx": "daebccf376f80a95807aebda784768ce",
".git/objects/pack/pack-6a1f612e7393bf5da02e7f6ff139be12e3dd3176.pack": "6bda8755813c6a27f95d7fef8f991a05",
".git/refs/heads/main": "5d021e449edb5276c8ec3e644d29b29c",
".git/refs/remotes/origin/main": "5d021e449edb5276c8ec3e644d29b29c",
"assets/AssetManifest.json": "5790ce5430c4e69c6b89426d4f9c09b5",
"assets/assets/appwrite_logo.png": "a3bcc0d167970a0a55702a90894e0959",
"assets/assets/built_with_appwrite.png": "b4af4651c3abfa56b831dea24480b730",
"assets/assets/built_with_firebase.png": "ccad480e8f050c3ddea1c88cf63dff28",
"assets/assets/collection_hycop_delta.json": "54903c6db18584b0481b935d8e033de6",
"assets/assets/collection_hycop_user.json": "2e4c37e145f783e47381a242f08c8265",
"assets/assets/file_icon.png": "26852c09439c84e335e93aaade12949f",
"assets/assets/firebase_logo.png": "e642c7556d83be574ae3929c34ead074",
"assets/assets/hourglass.gif": "8506cfb24e5afa948db8f64bd2871518",
"assets/assets/hycop_config.json": "4783e66585b4e580742f3c3f01f593a1",
"assets/assets/hycop_config_example.json": "3195875166011caed95bd48dfaefe12e",
"assets/assets/hycop_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/hycop_intro.jpg": "f1a4cc18b298e9b3efb49970a4501437",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/sample0.jpg": "9299a7208283958616819d28e1ad0ef3",
"assets/assets/sample1.jpg": "0b0fcf415b3ba923ae8d971937baccca",
"assets/assets/sample2.jpg": "573bfc6707869d24c745848ef81fb46b",
"assets/assets/sample3.jpg": "5e63593badc13ff929f8fa9b3ab895c5",
"assets/assets/sample4.jpg": "567c498a4b1e6be8bdd15731f11e100b",
"assets/assets/sample5.jpg": "c8ecc46c33a1e10758c18eb0c8f02e86",
"assets/assets/sample6.jpg": "b66b36c7adc5a6a22c30068420f00f6f",
"assets/assets/sample7.jpg": "395f4ae1a52add6a76de946414635694",
"assets/assets/sample8.jpg": "b564befa86d7f51176efb86e8a770740",
"assets/assets/sample9.jpg": "da074e9a24368995a5f2615031a35cb2",
"assets/assets/text_hycop_config.json": "f10255cacdd8de5f5c49307e50579fe1",
"assets/assets/video_icon.png": "496663a7b68e93be01718a08b7603de0",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "abeefba6c2a912d9e79ec1acdadefd8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "00624fe51d8b3b9f3df75aea9ed00b15",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"cors.json": "a424ddce070cec46479430f0290c300c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "848907c171a39b27783349b5f200b1fe",
"/": "848907c171a39b27783349b5f200b1fe",
"main.dart.js": "3d582e1aec5b0cdca9b295bb83c7bfcd",
"manifest.json": "8d7f71a384bcf31e61957075ed1770dc",
"version.json": "ff966ab969ba381b900e61629bfb9789"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
