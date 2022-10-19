'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3fb718cf2e96b8e483f9bbd3e9cecb62",
".git/config": "0f63d856f2c3ab37b95cc34aa72e9078",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fa16094f8eb0c1618842cab99bc72743",
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
".git/index": "3226bac7573cd25d3036a802d0f90787",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "747eae8e3957aff483b8b69b39974479",
".git/logs/refs/heads/main": "747eae8e3957aff483b8b69b39974479",
".git/logs/refs/remotes/origin/HEAD": "15a8b2b428973c5f74b282ffa213deaa",
".git/logs/refs/remotes/origin/main": "024fe848c3e9c88882f18aced93144a5",
".git/objects/0f/70b5b85f40fc4cc9b500403c1f4b42d9395f12": "dd030f38bcfb01fcf6daa37397862ccb",
".git/objects/14/b09394bdc9380c35169fd5e6a5b122b1378b64": "0f4193912efba21646ee53e74bcf2610",
".git/objects/27/42ffae2bb23b36614b1543a04030f84ebdd74c": "65b7de77724d73f78e02a1ce7f8cdf40",
".git/objects/44/f9ff04f0144f493b3d99c0a3e834acc9c18caf": "ab399348dd72476bbfc710570f0b4112",
".git/objects/4d/ab25253ec8e281a4a3ec3f81a78b35b5c63ec7": "6e5db05c25eb6b200bd49e36491cb500",
".git/objects/4e/23df12b1a3147ca5d3acd6d041d13d05c557b9": "1cafa4879e5a95426ca631c7cf0e0782",
".git/objects/69/abd8f491a68df1681c70854842a83f6239708a": "539cad9935b028afa20dcf27e5936c18",
".git/objects/79/554748958afadf4cf60ff7df12ce3a361a9d29": "6dceb283c77d270da694af95bce7d970",
".git/objects/88/a7381e5bf538532816b2aa9e3f288b826c1f8c": "a455edc8a71e93acfc24e6a4587a36b9",
".git/objects/94/aa2ce95938d8a8119c73712260803602170804": "526e7021259ac78d6b77c317d91196dd",
".git/objects/a7/276b7127f31441c2eb4d029283fa4e21a2799d": "db4bc1c78685f62a1fd3c22b48018532",
".git/objects/c0/c17a9d316f45f2777137e68a6da287955a12b0": "de484d10b74e627d5e10364420e4b159",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d7/9125cf7ae597f38fba59603c365354d3f5a9d4": "4c09e91c6537f6ae8424d9621c6b00c9",
".git/objects/f4/9a38cdd18bdba96c79a7fe379cf3739458cdb9": "03f85cc0d4c644f22353521f4cf25529",
".git/objects/pack/pack-41c13c8fc74e4fdf2ccaf5d3fca779141242a621.idx": "0285b25cc41ae59e8b0017f3c508c540",
".git/objects/pack/pack-41c13c8fc74e4fdf2ccaf5d3fca779141242a621.pack": "1479169f4b55c6713f381b5c4295ef76",
".git/ORIG_HEAD": "94759507a219b9e907f9b11977abec56",
".git/packed-refs": "f5754721a5d533fa26b1ffa5aa116d0d",
".git/refs/heads/main": "86d7e61241cbe148217e84e15063ec78",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "86d7e61241cbe148217e84e15063ec78",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "5790ce5430c4e69c6b89426d4f9c09b5",
"assets/assets/appwrite_logo.png": "a3bcc0d167970a0a55702a90894e0959",
"assets/assets/built_with_appwrite.png": "b4af4651c3abfa56b831dea24480b730",
"assets/assets/built_with_firebase.png": "ccad480e8f050c3ddea1c88cf63dff28",
"assets/assets/collection_hycop_delta.json": "54903c6db18584b0481b935d8e033de6",
"assets/assets/collection_hycop_user.json": "2e4c37e145f783e47381a242f08c8265",
"assets/assets/decrypted_hycop_config.json": "a0250196a224ed3bd5e2da98e63c26b2",
"assets/assets/file_icon.png": "26852c09439c84e335e93aaade12949f",
"assets/assets/firebase_logo.png": "e642c7556d83be574ae3929c34ead074",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/hourglass.gif": "8506cfb24e5afa948db8f64bd2871518",
"assets/assets/hycop_config.json": "a21e4ea9eb57bc1e5133d79635e834f8",
"assets/assets/hycop_config.json.org": "c71e1b9eb9f553469a4520ce7a48e526",
"assets/assets/hycop_config_example.json": "3195875166011caed95bd48dfaefe12e",
"assets/assets/hycop_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/hycop_intro.jpg": "f1a4cc18b298e9b3efb49970a4501437",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/jisoo.png": "9ace106768f007748c3ecf8708615871",
"assets/assets/logo.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/logo_kr.png": "cda01abeeea89c5a4330b703a2ee6670",
"assets/assets/logo_kr_color.png": "5ea10ed50e75b23108d9d05bad7a91e4",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/publish.png": "6f95739a5c4edbc0b8574f99571b98c7",
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
"assets/assets/text_hycop_config.json": "d4f54682aa66163f3d8dd0f883eb0ef1",
"assets/assets/video_icon.png": "496663a7b68e93be01718a08b7603de0",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "30b38ecf4dc01e4c432259d9dd0628ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6acc4bb946ad86d438ab6e6920b2d14f",
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
"index.html": "27adcc3368755eeaac694c135999c037",
"/": "27adcc3368755eeaac694c135999c037",
"main.dart.js": "ceaedb99d1b0ca9a19465250b7155e54",
"manifest.json": "8d7f71a384bcf31e61957075ed1770dc",
"version.json": "ff966ab969ba381b900e61629bfb9789"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
