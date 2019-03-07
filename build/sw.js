/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/favicons/android/android-launchericon-144-144.png",
    "revision": "51a8d5141bd01950c160c4e408bb0c22"
  },
  {
    "url": "assets/favicons/android/android-launchericon-192-192.png",
    "revision": "370be99e46904d4b28cf9aaef87a591e"
  },
  {
    "url": "assets/favicons/android/android-launchericon-48-48.png",
    "revision": "472383827a7419a54e90a7de2070a092"
  },
  {
    "url": "assets/favicons/android/android-launchericon-512-512.png",
    "revision": "c8c6d0564fed2e4b1f58463fed268464"
  },
  {
    "url": "assets/favicons/android/android-launchericon-72-72.png",
    "revision": "fcd13e6d638f99c743d2a2c0eba541fb"
  },
  {
    "url": "assets/favicons/android/android-launchericon-96-96.png",
    "revision": "e0d5a49b0c8dcf2433c363586fe26677"
  },
  {
    "url": "assets/favicons/chrome/chrome-extensionmanagementpage-48-48.png",
    "revision": "472383827a7419a54e90a7de2070a092"
  },
  {
    "url": "assets/favicons/chrome/chrome-favicon-16-16.png",
    "revision": "f3c1e56b1f07497b93982043430e1729"
  },
  {
    "url": "assets/favicons/chrome/chrome-installprocess-128-128.png",
    "revision": "58f16728465eef5f1448d1f28168f783"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-128-128.png",
    "revision": "58f16728465eef5f1448d1f28168f783"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-16-16.png",
    "revision": "f3c1e56b1f07497b93982043430e1729"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-256-256.png",
    "revision": "85fe40096823521b3af582e7d3f03218"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-32-32.png",
    "revision": "54bdfabf5697d3dedc4f88aa6638bab2"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-48-48.png",
    "revision": "472383827a7419a54e90a7de2070a092"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-64-64.png",
    "revision": "329bf2c0671278048972f15f30927e11"
  },
  {
    "url": "assets/favicons/firefox/firefox-general-90-90.png",
    "revision": "22751fd7803026e77a0b8126be5976ed"
  },
  {
    "url": "assets/favicons/firefox/firefox-marketplace-128-128.png",
    "revision": "58f16728465eef5f1448d1f28168f783"
  },
  {
    "url": "assets/favicons/firefox/firefox-marketplace-512-512.png",
    "revision": "c8c6d0564fed2e4b1f58463fed268464"
  },
  {
    "url": "assets/favicons/icons.json",
    "revision": "172142be2f4df9510ea5bcefb86e72a5"
  },
  {
    "url": "assets/favicons/ios/ios-appicon-1024-1024.png",
    "revision": "3e5d2d1dce092a94bdaa254f328e1fa1"
  },
  {
    "url": "assets/favicons/ios/ios-appicon-120-120.png",
    "revision": "df62708fc3a9760b15bced245f124fd8"
  },
  {
    "url": "assets/favicons/ios/ios-appicon-152-152.png",
    "revision": "e282ff602db7d256e3515e9a4c850323"
  },
  {
    "url": "assets/favicons/ios/ios-appicon-180-180.png",
    "revision": "af6c79212bcb39ded8efa491d0613114"
  },
  {
    "url": "assets/favicons/ios/ios-appicon-76-76.png",
    "revision": "e60783b77b188f1f86ac8f7f908b0cdc"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-1024-768.png",
    "revision": "ced6a801cf857ed52b826567d40831b0"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-1242-2208.png",
    "revision": "f141779cc3f1c58318811eabe74afce0"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-1334-750.png",
    "revision": "8041426f493d60e4aed90a986bdb178c"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-1536-2048.png",
    "revision": "2b28ba0d6de0437de5d3f4e00276fe5e"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-2048-1536.png",
    "revision": "1521631a76881b85ac672a7654e4f99d"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-2208-1242.png",
    "revision": "29dc06b4b2083353edc4f90987f4699a"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-640-1136.png",
    "revision": "7f9b04ff68ae85453f6409c4294a8e99"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-640-960.png",
    "revision": "d99c45f95fcb4cf0620687fb606fb0c3"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-750-1334.png",
    "revision": "ffb8724c64b40fed7f6f2d8a9f2fb00d"
  },
  {
    "url": "assets/favicons/ios/ios-launchimage-768-1024.png",
    "revision": "6637065c0cec54ac3e30a37761d16e9d"
  },
  {
    "url": "assets/favicons/windows/windows-smallsquare-24-24.png",
    "revision": "d4ffa4f0286fd4e46067eb5df5f8b8ac"
  },
  {
    "url": "assets/favicons/windows/windows-smallsquare-30-30.png",
    "revision": "f59ca8313eb2a2c456d0cff430dadfcf"
  },
  {
    "url": "assets/favicons/windows/windows-smallsquare-42-42.png",
    "revision": "7e65b6014db89ead5de52e342806e495"
  },
  {
    "url": "assets/favicons/windows/windows-smallsquare-54-54.png",
    "revision": "945751a3fbfdd9bbdf3e64442e4f8bcd"
  },
  {
    "url": "assets/favicons/windows/windows-splashscreen-1116-540.png",
    "revision": "0293c5a4df3ecef99e19e8064332de08"
  },
  {
    "url": "assets/favicons/windows/windows-splashscreen-620-300.png",
    "revision": "ddd773a34ae7a1cba398c7bcf0047bd6"
  },
  {
    "url": "assets/favicons/windows/windows-splashscreen-868-420.png",
    "revision": "f8c07140e58b60b13ed8d25b2e1f5760"
  },
  {
    "url": "assets/favicons/windows/windows-squarelogo-120-120.png",
    "revision": "df62708fc3a9760b15bced245f124fd8"
  },
  {
    "url": "assets/favicons/windows/windows-squarelogo-150-150.png",
    "revision": "f16d775d99e61be9bcff6b3ba3c67c09"
  },
  {
    "url": "assets/favicons/windows/windows-squarelogo-210-210.png",
    "revision": "7ca2ca5f34d2375fd7843ba72913f7f8"
  },
  {
    "url": "assets/favicons/windows/windows-squarelogo-270-270.png",
    "revision": "8acf83e79af8da49e0d5dbb42979f0f9"
  },
  {
    "url": "assets/favicons/windows/windows-storelogo-50-50.png",
    "revision": "342e0650cdacedb37fc9a1ab4bb8615a"
  },
  {
    "url": "assets/favicons/windows/windows-storelogo-70-70.png",
    "revision": "87a91e75fc60a5d637cea9131ec091c4"
  },
  {
    "url": "assets/favicons/windows/windows-storelogo-90-90.png",
    "revision": "22751fd7803026e77a0b8126be5976ed"
  },
  {
    "url": "assets/favicons/windows/windowsphone-appicon-106-106.png",
    "revision": "0d75ab342cd8f5868ff506f1fe16c3b8"
  },
  {
    "url": "assets/favicons/windows/windowsphone-appicon-44-44.png",
    "revision": "8ec79e3e3fb4460fd9c76f3229b7080d"
  },
  {
    "url": "assets/favicons/windows/windowsphone-appicon-62-62.png",
    "revision": "7487c9c7b4f9c44386cbb8d0f0a9bd2b"
  },
  {
    "url": "assets/favicons/windows/windowsphone-mediumtile-150-150.png",
    "revision": "f16d775d99e61be9bcff6b3ba3c67c09"
  },
  {
    "url": "assets/favicons/windows/windowsphone-mediumtile-210-210.png",
    "revision": "7ca2ca5f34d2375fd7843ba72913f7f8"
  },
  {
    "url": "assets/favicons/windows/windowsphone-mediumtile-360-360.png",
    "revision": "67901ce09aa13232e3eda1c0dc8c2d96"
  },
  {
    "url": "assets/favicons/windows/windowsphone-smalltile-170-170.png",
    "revision": "5c7b1bbbe2f46b45b29aa970cab430f9"
  },
  {
    "url": "assets/favicons/windows/windowsphone-smalltile-71-71.png",
    "revision": "fa457ac7e0664b796bbfd8ac701471dd"
  },
  {
    "url": "assets/favicons/windows/windowsphone-smalltile-99-99.png",
    "revision": "68ea0712ec1477d092d13dded6fcbc8b"
  },
  {
    "url": "assets/favicons/windows/windowsphone-storelogo-120-120.png",
    "revision": "df62708fc3a9760b15bced245f124fd8"
  },
  {
    "url": "assets/favicons/windows/windowsphone-storelogo-50-50.png",
    "revision": "342e0650cdacedb37fc9a1ab4bb8615a"
  },
  {
    "url": "assets/favicons/windows/windowsphone-storelogo-70-70.png",
    "revision": "87a91e75fc60a5d637cea9131ec091c4"
  },
  {
    "url": "assets/favicons/windows10/SplashScreen.scale-100.png",
    "revision": "ddd773a34ae7a1cba398c7bcf0047bd6"
  },
  {
    "url": "assets/favicons/windows10/SplashScreen.scale-125.png",
    "revision": "3decee17dacf10d8ab8bf7d3bb48b231"
  },
  {
    "url": "assets/favicons/windows10/SplashScreen.scale-150.png",
    "revision": "5f62f5099927b82d8969ea4cbf83ef69"
  },
  {
    "url": "assets/favicons/windows10/SplashScreen.scale-200.png",
    "revision": "b38618407e4a02467226b129513db6ae"
  },
  {
    "url": "assets/favicons/windows10/SplashScreen.scale-400.png",
    "revision": "50009b7db9c541029fc1556f1c17afed"
  },
  {
    "url": "assets/favicons/windows10/Square150x150Logo.scale-100.png",
    "revision": "f16d775d99e61be9bcff6b3ba3c67c09"
  },
  {
    "url": "assets/favicons/windows10/Square150x150Logo.scale-125.png",
    "revision": "3e333be6c55f739d4048eb58fb0ab4b3"
  },
  {
    "url": "assets/favicons/windows10/Square150x150Logo.scale-150.png",
    "revision": "822fa3755422bc0ae7fe5081a5d10f6a"
  },
  {
    "url": "assets/favicons/windows10/Square150x150Logo.scale-200.png",
    "revision": "04527f87208d9c42f68be3f355c6aea7"
  },
  {
    "url": "assets/favicons/windows10/Square150x150Logo.scale-400.png",
    "revision": "893d71276544a28fd204cc1ad85ef707"
  },
  {
    "url": "assets/favicons/windows10/Square310x310Logo.scale-100.png",
    "revision": "651b4aeff6385ba94c1894ec202dd57a"
  },
  {
    "url": "assets/favicons/windows10/Square310x310Logo.scale-125.png",
    "revision": "3a0396fc171303089b35050fe1888587"
  },
  {
    "url": "assets/favicons/windows10/Square310x310Logo.scale-150.png",
    "revision": "646c7a2fd5c2122ec9531b3f6d0a77ff"
  },
  {
    "url": "assets/favicons/windows10/Square310x310Logo.scale-200.png",
    "revision": "98eac924693bfc63f577da0f8ecc9a17"
  },
  {
    "url": "assets/favicons/windows10/Square310x310Logo.scale-400.png",
    "revision": "21e169e8d3e51fd934496e5504714b7e"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.scale-100.png",
    "revision": "8ec79e3e3fb4460fd9c76f3229b7080d"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.scale-125.png",
    "revision": "564c3eaa9207abd2648fb03df3e5a224"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.scale-150.png",
    "revision": "645823bc488ace05ab84449dc087ff81"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.scale-200.png",
    "revision": "7498a15407cc8cf49b860b170a886903"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.scale-400.png",
    "revision": "e83bd1cc60dcb8313c04cbfc71d17bca"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-16_altform-unplated.png",
    "revision": "f3c1e56b1f07497b93982043430e1729"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-16.png",
    "revision": "f3c1e56b1f07497b93982043430e1729"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-24_altform-unplated.png",
    "revision": "d4ffa4f0286fd4e46067eb5df5f8b8ac"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-24.png",
    "revision": "d4ffa4f0286fd4e46067eb5df5f8b8ac"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-256_altform-unplated.png",
    "revision": "85fe40096823521b3af582e7d3f03218"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-256.png",
    "revision": "85fe40096823521b3af582e7d3f03218"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-48_altform-unplated.png",
    "revision": "472383827a7419a54e90a7de2070a092"
  },
  {
    "url": "assets/favicons/windows10/Square44x44Logo.targetsize-48.png",
    "revision": "472383827a7419a54e90a7de2070a092"
  },
  {
    "url": "assets/favicons/windows10/Square71x71Logo.scale-100.png",
    "revision": "fa457ac7e0664b796bbfd8ac701471dd"
  },
  {
    "url": "assets/favicons/windows10/Square71x71Logo.scale-125.png",
    "revision": "2c9b96bd22f179bff7bc81e8d2ded139"
  },
  {
    "url": "assets/favicons/windows10/Square71x71Logo.scale-150.png",
    "revision": "749afc26cbd1d1771a8a8114383a1609"
  },
  {
    "url": "assets/favicons/windows10/Square71x71Logo.scale-200.png",
    "revision": "e6bb7f4ad34ac1cbf9aacf3ec0bd327c"
  },
  {
    "url": "assets/favicons/windows10/Square71x71Logo.scale-400.png",
    "revision": "170cf3826ff055e66a062248541c3a81"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.png",
    "revision": "342e0650cdacedb37fc9a1ab4bb8615a"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.scale-100.png",
    "revision": "342e0650cdacedb37fc9a1ab4bb8615a"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.scale-125.png",
    "revision": "a2185824fb531eccb5e92c1365219dab"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.scale-150.png",
    "revision": "4baa83c50625d35db64ef0a48e927344"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.scale-200.png",
    "revision": "4e6516a4fbc171c37ff22696bef5cb41"
  },
  {
    "url": "assets/favicons/windows10/StoreLogo.scale-400.png",
    "revision": "097db33a8110a7a42b705b90f476dbe5"
  },
  {
    "url": "assets/favicons/windows10/Wide310x150Logo.scale-100.png",
    "revision": "1aa1d60f2a18b2e05fa103d0f616cb6f"
  },
  {
    "url": "assets/favicons/windows10/Wide310x150Logo.scale-125.png",
    "revision": "7318e7f3db349e603cc00f6f98c4349e"
  },
  {
    "url": "assets/favicons/windows10/Wide310x150Logo.scale-150.png",
    "revision": "ffece81e31b309347cb26d303c6122de"
  },
  {
    "url": "assets/favicons/windows10/Wide310x150Logo.scale-200.png",
    "revision": "ddd773a34ae7a1cba398c7bcf0047bd6"
  },
  {
    "url": "assets/favicons/windows10/Wide310x150Logo.scale-400.png",
    "revision": "b38618407e4a02467226b129513db6ae"
  },
  {
    "url": "assets/logo-892x892.png",
    "revision": "e31ef8c3dcdcedc216fb8c07011500c5"
  },
  {
    "url": "assets/screenshot.png",
    "revision": "56602a7553312bd269486d8aaf427b86"
  },
  {
    "url": "index.html",
    "revision": "ba1fe8f1ce7bdf0d9f65a3e2127f382d"
  },
  {
    "url": "styles.css",
    "revision": "bfcd5bf9e3982c5e6c07064d0fb67825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
