"use strict";
(() => {
var exports = {};
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/coment/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ./src/app/api/coment/route.js


async function POST(request, response) {
    const data = await request.formData();
    const directoryJson = external_path_default().join(process.cwd(), "src/db/coments.json");
    const contentJson = await (0,promises_namespaceObject.readFile)(directoryJson, "utf8");
    const arr = JSON.parse(contentJson);
    const name = data.get("name");
    const country = data.get("country");
    const com = data.get("com");
    const objSave = {
        name,
        country,
        com
    };
    arr.push(objSave);
    (0,promises_namespaceObject.unlink)(directoryJson);
    (0,promises_namespaceObject.writeFile)(directoryJson, JSON.stringify(arr));
    return response.redirect(204, "/comentario");
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcoment%2Froute&name=app%2Fapi%2Fcoment%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcoment%2Froute.js&appDir=%2Fhome%2Fdemon%2FDocuments%2Funerg%2F0tosennior%2Fsrc%2Fapp&appPaths=%2Fapi%2Fcoment%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/coment",
    resolvedPagePath: "/home/demon/Documents/unerg/0tosennior/src/app/api/coment/route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/coment/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,981], () => (__webpack_exec__(6020)));
module.exports = __webpack_exports__;

})();