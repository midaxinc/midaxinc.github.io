'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "219448ce32236abd7f28603436c9c3d9",
".git/config": "8b0f9657918a51b58943c3bbd0b53e04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4d0a12697a056f09ac9f826f6d1bc72b",
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
".git/index": "12feca608661cb6efd509e85e49c6073",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89fde24103f6d09ea84e2ecc751f53dd",
".git/logs/refs/heads/main": "fe3c9fb20da3634539d46959b35a8bee",
".git/logs/refs/heads/master": "997afc4a97b6f60318c1243bd38fa693",
".git/logs/refs/remotes/origin/main": "dfad36e78145fadfeff4a103cbfe6821",
".git/logs/refs/remotes/origin/master": "72f7126dcd96fe015043d1c73c7e63f3",
".git/objects/31/bffacb5da0ee3c73b55cd4a5dd2f0680848b3a": "aefb6196f718b2b9dd9358a07466987e",
".git/objects/32/436a1c8293d61f2b07cb416f4e7012f2f69f89": "368e2998f56bcbda04766784d7f02ce7",
".git/objects/4f/95e09aca5ab6044f5995e7810cee2b89ea7f2d": "3735b2bfe7b8d07b1396b1bce6881d52",
".git/objects/7f/9a773a2ec863088fba0c6401c9181868c52723": "243913e726626307b89692b2cf079bd4",
".git/objects/83/0d34f9118732c122caf34e2eb969781e78ac5a": "06d74a8308c2cab15fa0fcf19a640203",
".git/objects/ba/b252a6e28807dd3b0e7fbd339ca5fb98602a45": "3a9cd00c18b113e5d8acb0fbe8dc7081",
".git/objects/c8/d0f95355dbd1270b34f0adbbd89a1e2299fbc2": "999c41b7f536875244b0f2f603bdd133",
".git/objects/cc/962197a6ab0a7ac04f83469b88b515369999a0": "fd9f4503ce2289777e39ae9370f79212",
".git/objects/db/9caa36d9159b63b65c55e675d0c9b6fc4e0a6b": "776ea12f95419c7bd4f834684905f749",
".git/objects/ea/110933b32a244ad04b6bc0238e7ebe84be7f74": "bb9614a9d48b5104d566a645a6dd247a",
".git/objects/ef/c98356efcfa00f2e2967dad4d0dab719bbc7a8": "d4e439887eef4df9a6a77709d08c1ba7",
".git/objects/pack/pack-2b3997a48d02b5a1e27595cfe5e158e4a202966f.idx": "a9f2f2e598608a002ac03f1ea150de18",
".git/objects/pack/pack-2b3997a48d02b5a1e27595cfe5e158e4a202966f.pack": "057dedaa25dedc78a682eb1107ec7970",
".git/ORIG_HEAD": "34cad007b24e66655669f05cac5b8bee",
".git/refs/heads/main": "b313aa07ca97aaf8a84714afd544d9b9",
".git/refs/heads/master": "82fb0756b2ab781d0715bd60fc822537",
".git/refs/remotes/origin/main": "b313aa07ca97aaf8a84714afd544d9b9",
".git/refs/remotes/origin/master": "82fb0756b2ab781d0715bd60fc822537",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
".git/tortoisegit.data": "bbba1646f682ebbfdc916dd94f15a205",
".git/tortoisegit.index": "cd6918f77cc3545f548c1160ac272e9c",
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
"index.html": "153fbf039969dce13b206168262d0af0",
"/": "153fbf039969dce13b206168262d0af0",
"main.dart.js": "a6e8a42f358b209e972cd414d62200ca",
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
