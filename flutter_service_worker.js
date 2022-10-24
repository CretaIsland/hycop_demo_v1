'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "72cdc9bad120f5d89c937adcd252a548",
".git/config": "0f63d856f2c3ab37b95cc34aa72e9078",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8cb582b5d21d81434e7f0cb83dc8225d",
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
".git/index": "6f4a853efa55fcc1db375f043e6f9a6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed7607fb65250cab4c2b2921754510d2",
".git/logs/refs/heads/main": "1c603e064809b79a2946e503b552f644",
".git/logs/refs/remotes/origin/HEAD": "15a8b2b428973c5f74b282ffa213deaa",
".git/logs/refs/remotes/origin/main": "3d9b9fd60f0c8cca61dc39eff96301f8",
".git/objects/02/97203fa1a55c775b189bb90aeb460898180f5a": "f9665fef0f83e3b60a6a903cd98a6f05",
".git/objects/0c/69ccfa356f8eac58174312b5324a955b57df05": "71bab9de14d0b9f9cd035162b6df4402",
".git/objects/0f/70b5b85f40fc4cc9b500403c1f4b42d9395f12": "dd030f38bcfb01fcf6daa37397862ccb",
".git/objects/12/a91f47366b762b759bb3f35b567e3cb4ae0052": "c00336a2aede05d71ca77a4173436a1f",
".git/objects/14/b09394bdc9380c35169fd5e6a5b122b1378b64": "0f4193912efba21646ee53e74bcf2610",
".git/objects/15/354570795011d4829ed44e14518043a81ed265": "90cd11d2f2b0e578c89d633a5569cf74",
".git/objects/1b/6832d06d1515f4322ed4b58a1d85a3b53ef22c": "8c589915ee5e9a722f5a6b1afc7d0822",
".git/objects/26/3f64c3e17baea27d76be8b70a08811e4581512": "1a9fed6d917e62eb4bcdf183812bad2d",
".git/objects/27/42ffae2bb23b36614b1543a04030f84ebdd74c": "65b7de77724d73f78e02a1ce7f8cdf40",
".git/objects/28/6253ac6e49959a6ee42b3d942a5956a509fc0f": "bd7a3bbb574c8e16f6d4526450005293",
".git/objects/2c/09186d83b8f4bc71a8beb2aadc3ded544166f5": "b4aa684da9671683c95e4334f30b81ab",
".git/objects/35/fd65bc824341bd562d3e8343bb9643d2cfea41": "ef4342e75f577a6b927c77ebe89b540c",
".git/objects/36/484f86e7994b35a4e272ada7333d1463c05f9a": "315e3d026ed8e68a1b18880f8d56f2f2",
".git/objects/36/a9fe0f62a050120fc5519a33f1ecc49af6bc98": "41f831fbbb2c30b1635e9505cc1940ee",
".git/objects/37/845f1e886e5198589668b3b09f8aea370389c8": "a688d0f4aae77a58ae5c803cd7c09101",
".git/objects/39/443b50e10b8aba794832ebd99ca10a0908f72d": "1903becfa14153e5d8536ace5f9c410e",
".git/objects/39/9bfa45323bd0a7d612cffc1db55bf3dec09259": "f6de2ca8272ceefb1d408aff4599b8a3",
".git/objects/3b/2c6fc9af9e28425fb2586cffb90737e248c199": "01dfa0607cd961c67ca45b2d7055057d",
".git/objects/41/b29065db6cdaba78fae27a2834ab5fc5c7f7af": "0ade77624535d0180440d8afe92e42bf",
".git/objects/44/f9ff04f0144f493b3d99c0a3e834acc9c18caf": "ab399348dd72476bbfc710570f0b4112",
".git/objects/45/fef950bcbaf06a37229d2a22e8bfcaf80a8fa5": "10250307be94a6e239b6d04a5d138d5c",
".git/objects/4d/ab25253ec8e281a4a3ec3f81a78b35b5c63ec7": "6e5db05c25eb6b200bd49e36491cb500",
".git/objects/4e/23df12b1a3147ca5d3acd6d041d13d05c557b9": "1cafa4879e5a95426ca631c7cf0e0782",
".git/objects/52/3134083d64382ec7ab784ae9f8156d2e4b59c2": "e656a12086d463d8f24a224720015ddb",
".git/objects/52/7f01a3438cb69785df7686ea7ae41aa74a649d": "fad359e7b2a5dd30ef0d53c98584e76d",
".git/objects/57/1b4a0ac7aee7d3465e40ed1299e255e5c8e6d1": "17ef23e6ad830e1c5e40c3fa84b8c599",
".git/objects/57/b2a2e8f3a33ce0b4f15c43f45f9b96d181d2d9": "8c10cbd47933c28348ba0c442746f443",
".git/objects/58/c96e7f0f8421f6ed3dca59516ccc7ba815ac85": "531241a2b43d67a2921726aaac72639e",
".git/objects/5d/c2ba793057ab9e258cc051f51fabb094f980b4": "e2e992e018d9fa3f8adb298180fb3311",
".git/objects/66/a5fc215a528aab7d7ca9091d1792580e526982": "214d49a86cdf30edd08c9715c2e0642e",
".git/objects/69/abd8f491a68df1681c70854842a83f6239708a": "539cad9935b028afa20dcf27e5936c18",
".git/objects/6c/baccf2964918b71318bcf98e78a476eafb3da2": "b3d71fe8ce9d23d6c18497398caefec2",
".git/objects/6e/ba0178104ef50a1f6ac048a0913af993a60125": "b7d8fdbcc0c6b344504ae1c0900accf1",
".git/objects/71/429bfcc476a3e39a71ab5d49bcda3e55e3e168": "51d90f3fae3a74589eafc9fb3b3038e0",
".git/objects/74/f9c72ba436e00b08e0d8a185295a307b239cbc": "ae5bc48277532d2a0d8d22dda8fa078d",
".git/objects/76/7b6350bc061d395013cf446fdfee416bcaf82c": "99cf3a2da6400e68003597c777eb3437",
".git/objects/79/554748958afadf4cf60ff7df12ce3a361a9d29": "6dceb283c77d270da694af95bce7d970",
".git/objects/79/ddedce203ad4a03fa90aa94862748a892154fc": "853a1225f1f84f231bdb53a85bc52fdb",
".git/objects/7a/179c22cca9e7a9bf70884a896b386041bc2301": "8074e9d420ce076f8ccb3d8acfbd7734",
".git/objects/7c/cab378a1c6c82b33532b0e0443ade28b35654c": "de300a193ebba6ab39ffb05c205b6c7c",
".git/objects/88/a7381e5bf538532816b2aa9e3f288b826c1f8c": "a455edc8a71e93acfc24e6a4587a36b9",
".git/objects/94/aa2ce95938d8a8119c73712260803602170804": "526e7021259ac78d6b77c317d91196dd",
".git/objects/97/43a0e252b7237e6748bdd1265f0df3839e6554": "cbe43c36f6825b54067a0c91074ac5ef",
".git/objects/98/0ffe76e9a16fb8ecaed64461a1f333b7f507a8": "bd3fc8ef4f7bd40ceafbece14eeb1fdc",
".git/objects/a7/276b7127f31441c2eb4d029283fa4e21a2799d": "db4bc1c78685f62a1fd3c22b48018532",
".git/objects/ad/d1e394b9bd096d85ecfb1578d97be22cbaea3f": "ff053d80d65450bb350e2fcf3ac2c776",
".git/objects/af/7ef369a79f9491ffcc0d49ac12306e6b7ab798": "c8d4d14373bfb49e5ab8da891662e09c",
".git/objects/b0/38b1e6010dfb5285618203df3b7166963b61d2": "5b8ede66d893ba48729017cf0d58a8c7",
".git/objects/b4/54b9d823665fa2e226234cfa7be6cd67ce9610": "9a2f2d80cc056e07c45660aeee86cbb6",
".git/objects/b6/4af16a11924ed989428f27c8da07765f30c2a2": "e6de722080a2d6d62bcce522b9f0f308",
".git/objects/ba/170cb051a51358c8d7768f307aa9b4b404b1ae": "5f73657dc590151e3b38d0e19dc2a4b1",
".git/objects/be/1de5851228ab989c7c961cd093762bcadbf928": "1711201c4cfe9ed44ead2a5f7902b4cd",
".git/objects/c0/c17a9d316f45f2777137e68a6da287955a12b0": "de484d10b74e627d5e10364420e4b159",
".git/objects/c2/33a58a20565d9e2a6a61a6235d06a9951a5989": "1fe3636721703e6d0ea1439e2b46eb1c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/d03b804af65529c024b9adedd815fd5768212d": "e3ebe61daddcb6fadddb1fd322f4a4c2",
".git/objects/d0/256b9cbde375a5127c66af6aca8956bfc9cd4a": "9338dc42c1804b8d56558a70192361d2",
".git/objects/d7/435231a7d3c6fb1c128be80f125e125643ad91": "61830a3301911307fbc299eb1a4aba5b",
".git/objects/d7/626c25be8a8f725a8a7bed133446d5b34a9766": "19f94ea5eefe9d19a1263a2809b5ec6e",
".git/objects/d7/9125cf7ae597f38fba59603c365354d3f5a9d4": "4c09e91c6537f6ae8424d9621c6b00c9",
".git/objects/d8/f580e04d98555474e3c22eb4f9cecdb08dcd12": "670d82896c641ee72a76585bf7b2ec10",
".git/objects/de/b80ad8fd0553aa6d0f52798a5347cca892dd16": "2a9c904726a850d47bd2b970d07a7e20",
".git/objects/e3/74c79dded1eb03ffee465d21f6263f8bc26f40": "2a5844b69da59487bf3749b5cd672ed3",
".git/objects/eb/4a51cdc4fe3fff15b5cc9e117e51f18e9e2af6": "1fc752e40fc2076b6416bbf81ff502f3",
".git/objects/ef/64213bf3b510646faf07a26247a0b70f21c0f8": "4fc718c912ebdc251190e3d319adcc52",
".git/objects/f1/e88877aa72bb8b8ad5970c71269be72a00c887": "33ccb3979484ff46c77c17658f57f64a",
".git/objects/f4/9a38cdd18bdba96c79a7fe379cf3739458cdb9": "03f85cc0d4c644f22353521f4cf25529",
".git/objects/f7/2f7a6c43ec53c1ec0c094e730941459239ae96": "162c283f7f3afcd6f8437eb6739c1797",
".git/objects/f9/79951a9894ce000a79343f49eace6afa7056d6": "48785b03f87fe958f3a956e6555c94c3",
".git/objects/fe/72ac06cb7cfa992146f596765477d9560b0953": "b66060a5b106f7db07257432c8179668",
".git/objects/pack/pack-41c13c8fc74e4fdf2ccaf5d3fca779141242a621.idx": "0285b25cc41ae59e8b0017f3c508c540",
".git/objects/pack/pack-41c13c8fc74e4fdf2ccaf5d3fca779141242a621.pack": "1479169f4b55c6713f381b5c4295ef76",
".git/ORIG_HEAD": "282314840913957ffd060b8a7595fa3d",
".git/packed-refs": "f5754721a5d533fa26b1ffa5aa116d0d",
".git/refs/heads/main": "282314840913957ffd060b8a7595fa3d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "282314840913957ffd060b8a7595fa3d",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "5790ce5430c4e69c6b89426d4f9c09b5",
"assets/assets/appwrite_logo.png": "a3bcc0d167970a0a55702a90894e0959",
"assets/assets/built_with_appwrite.png": "b4af4651c3abfa56b831dea24480b730",
"assets/assets/built_with_firebase.png": "ccad480e8f050c3ddea1c88cf63dff28",
"assets/assets/collection_hycop_delta.json": "54903c6db18584b0481b935d8e033de6",
"assets/assets/collection_hycop_user.json": "2e4c37e145f783e47381a242f08c8265",
"assets/assets/file_icon.png": "26852c09439c84e335e93aaade12949f",
"assets/assets/firebase_logo.png": "e642c7556d83be574ae3929c34ead074",
"assets/assets/hourglass.gif": "8506cfb24e5afa948db8f64bd2871518",
"assets/assets/hycop_config.json": "12a9bca4a519926a976783f5397c76d7",
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
"assets/NOTICES": "c0a1b3a69daa9a75a7d82e583ac347b8",
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
"index.html": "1c7e0e0ab0d614edff451aa9d42c9f04",
"/": "1c7e0e0ab0d614edff451aa9d42c9f04",
"main.dart.js": "ee4fb54932ad6fbcddd6474e673674fe",
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
