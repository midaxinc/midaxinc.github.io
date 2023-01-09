'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ce88d1d03fa47d65b06914fb4f5d9f67",
".git/config": "806c338ff8162ca3f628c2667105eab6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "789059819394f5af9e526434ebd24a62",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "f05408fadb23d761a0d8c03ab7275b20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3855b0826a0bc2f3d02aa9fd7fd0c94e",
".git/logs/refs/heads/master": "3855b0826a0bc2f3d02aa9fd7fd0c94e",
".git/logs/refs/remotes/origin/main": "b7c58bf45779d34680edd6bc7eb5ef05",
".git/logs/refs/remotes/origin/master": "ba16e8fb6d022b4048691e9ff58912fb",
".git/objects/31/bffacb5da0ee3c73b55cd4a5dd2f0680848b3a": "aefb6196f718b2b9dd9358a07466987e",
".git/objects/pack/pack-2b3997a48d02b5a1e27595cfe5e158e4a202966f.idx": "a9f2f2e598608a002ac03f1ea150de18",
".git/objects/pack/pack-2b3997a48d02b5a1e27595cfe5e158e4a202966f.pack": "057dedaa25dedc78a682eb1107ec7970",
".git/refs/heads/master": "e11d5068b1245d330cd518abea587ed8",
".git/refs/remotes/origin/main": "34cad007b24e66655669f05cac5b8bee",
".git/refs/remotes/origin/master": "e11d5068b1245d330cd518abea587ed8",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "1ac72d734cbfb28975e2a8689b7b3922",
"assets/assets/images/albums/artist1-album1.jpg": "e3c638f3224befe15ef586ac6e4eab62",
"assets/assets/images/albums/artist1-album2.jpg": "0c6ae0ed4da4322ccc70c28badad24ba",
"assets/assets/images/albums/artist1-album3.jpg": "1f9bba3eb6278d6e2124d39245197abd",
"assets/assets/images/albums/artist2-album2.jpg": "58f5ca0d0b3d55aa245398d42aa2a6a4",
"assets/assets/images/albums/artist3-album1.jpg": "aa75283b933825fdd182324663d07199",
"assets/assets/images/albums/artist4-album1.jpg": "892497aa9c5ff3b69704fb550cb55382",
"assets/assets/images/albums/artist4-album2.jpg": "452591d89aab864cdcfe4046ab1f640a",
"assets/assets/images/albums/artist4-album3.jpg": "9ce4743258737789bb6b16d7700f364a",
"assets/assets/images/albums/artist5-album1.jpg": "3481d728309cf6c2d12cb268d217acef",
"assets/assets/images/albums/artist5-album2.jpg": "8df8c3e53049b64fd5e102300115ae96",
"assets/assets/images/albums/artist6-album1.jpg": "facd77f516e55d7228b957b847a36183",
"assets/assets/images/albums/artist6-album2.jpg": "f0a90dc14f77f39827c0c96584e06a8e",
"assets/assets/images/albums/artist6-album3.jpg": "48de276497ff499db33fe0cdff50546a",
"assets/assets/images/artists/joe.jpg": "33f82d8797fac06e1b331ead0f3216f3",
"assets/assets/images/artists/woman.jpeg": "1e57bebd66657027a8c1daef46e390d3",
"assets/assets/images/news/concert.jpeg": "9835c73420b012928c9df7462cb42c06",
"assets/assets/images/news/concert_heart.jpg": "cd982ab501396249dcf152e0dafa0625",
"assets/assets/images/news/recording_studio.jpg": "bd9d567b08da6a755b99bf549c4e6176",
"assets/assets/images/playlists/austin.jpg": "0ff29c128e837735e4790f50b57e4eae",
"assets/assets/images/playlists/calm.jpg": "e5c9c5704ef271f693648847f9f393ac",
"assets/assets/images/playlists/coffee.jpg": "51fa79f5cc3110e9e68dbe572741dc9b",
"assets/assets/images/playlists/favorite.jpg": "ff6e391bb66c0bc48af9cd026a0ad30a",
"assets/assets/images/playlists/jazz.jpg": "75d85b15ac4d4e0f8852c7f1c366ce6a",
"assets/assets/images/playlists/piano.jpg": "833ab1aea554ded53fb95c26eafecba3",
"assets/assets/images/playlists/reading.jpg": "96f5204e07f7b1af3eba58732fccb338",
"assets/assets/images/playlists/studying.jpg": "d90bd4097a7ff363c12abbabe7d619fe",
"assets/assets/images/playlists/workout.jpg": "a08b4c838dfc63890a848b38932aed0a",
"assets/assets/images/record.jpeg": "556686c5027a6e9d77d2bfe7627067d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "02fc4f34881cb79dec05a5247e1ecb83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9e0cb8ce811b7378f26e354004ef7770",
"/": "9e0cb8ce811b7378f26e354004ef7770",
"main.dart.js": "a0ebb3996730f6284d8826b71de281c3",
"manifest.json": "b679d6c98d3e48c713bf585221be7b56",
"version.json": "4186c308404b2739791b46744c44a90a"
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
