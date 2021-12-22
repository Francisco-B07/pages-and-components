// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _router = require("./router");
var _header = require("./component/header");
var _titulo = require("./component/titulo");
var _parrafo = require("./component/parrafo");
var _large = require("./component/large");
var _input = require("./component/input");
var _button = require("./component/button");
var _footer = require("./component/footer");
var _inputSelect = require("./component/input-select");
var _outlined = require("./component/outlined");
(function() {
    _header.init();
    _titulo.init();
    _parrafo.init();
    _large.init();
    _input.init();
    _button.init();
    _footer.init();
    _inputSelect.init();
    _outlined.init();
    const root = document.querySelector("#root");
    _router.initRouter(root);
})();

},{"./router":"6Aetg","./component/header":"fVcss","./component/titulo":"4UB1C","./component/parrafo":"fF8YS","./component/large":"bLm7v","./component/input":"g5HdN","./component/button":"78nA4","./component/footer":"2chPt","./component/input-select":"c4LYA","./component/outlined":"khYYP"}],"6Aetg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _pageA = require("./pages/page-a");
var _pageB = require("./pages/page-b");
var _pageC = require("./pages/page-c");
const routes = [
    {
        path: /\/welcome/,
        component: _pageA.initPageA
    },
    {
        path: /\/step-1/,
        component: _pageB.initPageB
    },
    {
        path: /\/thankyou/,
        component: _pageC.initPageC
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./pages/page-a":"hR4gO","./pages/page-b":"eEthC","./pages/page-c":"epSje"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hR4gO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageA", ()=>initPageA
);
function initPageA(params) {
    const div = document.createElement("div");
    div.innerHTML = `
  <custom-header>Header </custom-header>
  <div class="page--container">
    <div class="page--titulo">
      <custom-titulo >Te damos la bienvenida a esta página </custom-titulo>
    </div>
    <div class="page--parrafo">
      <custom-parrafo >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem? </custom-parrafo>
    </div>
    <div class="page--large">
      <custom-large >Para continuar ingresá tu nombre </custom-large>
    </div>
    <div class="contenedor-input">
      <div class="page--input">
        <custom-input placeholder="Ingresá tu nombre"  label="Nombre"></custom-input>
      </div>
      <div class="page--boton"> 
        <custom-button >Comenzar</custom-button>
      </div>
    </div>
  </div>
  <div class="page--footer">
  <custom-footer >Footer</custom-footer>
  </div>
  `;
    var style = document.createElement("style");
    style.textContent = `
    .page--container {
      padding: 30px;
    }
    .page--titulo {
      margin-top: 41px;
    }
    .page--parrafo {
      margin-top: 21px;
    }
    .page--large {
      margin-top: 73px;
    }
    .contenedor-input {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page--input {
      margin-top: 29px;
    }
    .page--boton {
      margin-top: 16px;
    }
    .page--footer {
      margin-top: 113px;
    }
  
 `;
    div.append(style);
    var botonEl = div.querySelector(".page--boton");
    botonEl.addEventListener("click", ()=>{
        params.goTo("/step-1");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eEthC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageB", ()=>initPageB
);
function initPageB(params) {
    const div = document.createElement("div");
    div.innerHTML = `
  <custom-header>Header </custom-header>
  <div class="page--container">
    <div class="page--titulo">
      <custom-titulo >Necesitamos algunos datos más </custom-titulo>
    </div>
    <div class="contenedor-input">
      <div class="page--input">
        <custom-input label="Email"></custom-input>
      </div>
      <div class="page--input">
        <custom-input label="Comida Favorita"></custom-input>
      </div>
      <div class="page--input">
        <custom-input-select label="Alguna de estas tres opciones" value1="Piedra" value2="Papel" value3="Tijera"></custom-input-select>
      </div>          
      <div class="page--boton-comenzar"> 
        <custom-button >Comenzar</custom-button>
      </div>
      <div class="page--boton-volver"> 
        <custom-outlined >Volver</custom-outlined>
      </div>
    </div>
  </div>
  <div class="page--footer">
    <custom-footer >Footer</custom-footer>
  </div>
  `;
    var style = document.createElement("style");
    style.textContent = `
    .page--container {
      padding: 30px;
    }
    .page--titulo {
      margin-top: 41px;
    }
    
    .contenedor-input {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page--input {
      margin-top: 41px;
    }
    .page--boton-comenzar {
      margin-top: 54px;
    }
    .page--boton-volver {
      margin-top: 54px;
    }
    .page--footer {
      margin-top: 135px;
    }
  
 `;
    div.append(style);
    var botonComenzarEl = div.querySelector(".page--boton-comenzar");
    botonComenzarEl.addEventListener("click", ()=>{
        params.goTo("/thankyou");
    });
    var botonVolverEl = div.querySelector(".page--boton-volver");
    botonVolverEl.addEventListener("click", ()=>{
        params.goTo("/welcome");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"epSje":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageC", ()=>initPageC
);
function initPageC(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <custom-header>Header </custom-header>
    <div class="page--container">
      <div class="page--titulo">
        <custom-titulo >Gracias </custom-titulo>
      </div>
      <div class="page--large">
        <custom-large >Toda la información que nos brindaste es muy importante </custom-large>
      </div>
      <div class="contenedor-input">
              
        <div class="page--boton"> 
          <custom-button >De Nada</custom-button>
        </div>
        
      </div>
    </div>
    <div class="page--footer">
      <custom-footer >Footer</custom-footer>
    </div>
    `;
    var style = document.createElement("style");
    style.textContent = `
      .page--container {
        padding: 30px;
      }
      .page--titulo {
        margin-top: 41px;
      }
      .page--large{
        margin-top: 25px;
      }
      .contenedor-input {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .page--boton {
        margin-top: 54px;
      }
      
      .page--footer {
        margin-top: 312px;
      }
    
   `;
    div.append(style);
    var botonEl = div.querySelector(".page--boton");
    botonEl.addEventListener("click", ()=>{
        params.goTo("/welcome");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fVcss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Header extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
      .root{
          background-color: #FF8282;
          Height:60px;
          width: 100vw;
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;          
        }        

        @media (min-width: 600px) {
            .root{
                Height:80px;
            }
        }
        `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var div = document.createElement("div");
            div.classList.add("root");
            div.textContent = textoOriginal;
            shadow.append(div);
        }
    }
    customElements.define("custom-header", Header);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4UB1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Titulo extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
      .root{
          font-weight: 700;
          font-size: 52px;  
        }        
        `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var titulo = document.createElement("h1");
            titulo.classList.add("root");
            titulo.textContent = textoOriginal;
            shadow.append(titulo);
        }
    }
    customElements.define("custom-titulo", Titulo);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fF8YS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Parrafo extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
          .root{
              font-weight: 400;
              font-size: 18px;
            }        
            `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var parrafo = document.createElement("h1");
            parrafo.classList.add("root");
            parrafo.textContent = textoOriginal;
            shadow.append(parrafo);
        }
    }
    customElements.define("custom-parrafo", Parrafo);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bLm7v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Large extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
          .root{
              font-weight: 500;
              font-size: 22px;   
              padding: 20px;  
            }        
            `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var large = document.createElement("h3");
            large.classList.add("root");
            large.textContent = textoOriginal;
            shadow.append(large);
        }
    }
    customElements.define("custom-large", Large);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g5HdN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Input extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoLabel = this.getAttribute("label");
            const textoInput = this.getAttribute("placeholder");
            const tipoInput = this.getAttribute("type");
            var style = document.createElement("style");
            style.textContent = `
      .input{
          border: 2px solid #000000;
          border-radius: 4px;
          Width: 312px;
          Height: 55px;
          font-family: Roboto;
          font-size: 18px;
          color: #000000;
          margin-top: 5px              

          
        }
        @media (min-width: 600px) {
          .input{
            Width: 353px;
          }
        }
        
        .label{
        font-family: Roboto;
        font-size: 18px;
        display: block;
      }
     `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var labelEL = document.createElement("label");
            labelEL.textContent = textoLabel;
            labelEL.classList.add("label");
            var inputEL = document.createElement("input");
            inputEL.placeholder = textoInput || "";
            inputEL.type = tipoInput;
            inputEL.classList.add("input");
            shadow.append(labelEL);
            shadow.append(inputEL);
        }
    }
    customElements.define("custom-input", Input);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"78nA4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Button extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
        .root{
          display: flex;
          align-items: center;
          justify-content: center; 
          background-color: #9CBBE9;
          border-radius: 4px;
          Width: 312px;
          Height: 55px;  
          font-family: Roboto;
          font-weight: 500;
          font-size: 22px;
          }
  
        @media (min-width: 600px) {
              .root{
                Width: 353px;
              }
          }
          `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var div = document.createElement("button");
            div.textContent = textoOriginal;
            div.classList.add("root");
            shadow.append(div);
        }
    }
    customElements.define("custom-button", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2chPt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Footer extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
        .root{
            background-color: #FFA0EA;
            Height:233px;
            width: 100vw;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;          
          }        
  
          `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var div = document.createElement("div");
            div.classList.add("root");
            div.textContent = textoOriginal;
            shadow.append(div);
        }
    }
    customElements.define("custom-footer", Footer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"c4LYA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class InputSelect extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoLabel = this.getAttribute("label");
            const nameInput = this.getAttribute("name");
            const value1 = this.getAttribute("value1");
            const value2 = this.getAttribute("value2");
            const value3 = this.getAttribute("value3");
            var style = document.createElement("style");
            style.textContent = `
        .input{
            border: 2px solid #000000;
            border-radius: 4px;
            Width: 312px;
            Height: 55px;
            font-family: Roboto;
            font-size: 18px;       
            margin-top: 5px              
          }

          @media (min-width: 600px) {
            .input{
              Width: 353px;
            }
          }
          
          .label{
          font-family: Roboto;
          font-size: 18px;
          display: block;
          
        }
       `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var labelEL = document.createElement("label");
            labelEL.textContent = textoLabel;
            labelEL.classList.add("label");
            const inputEL = document.createElement("select");
            inputEL.name = nameInput;
            inputEL.classList.add("input");
            inputEL.innerHTML = `
     
      <option value=${value1}>${value1}</option>
      <option value=${value2}>${value2}</option>
      <option value=${value3}>${value3}</option>
      
      
      `;
            shadow.appendChild(labelEL);
            shadow.appendChild(inputEL);
        }
    }
    customElements.define("custom-input-select", InputSelect);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"khYYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class Outlined extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const textoOriginal = this.textContent;
            var style = document.createElement("style");
            style.textContent = `
      .root{
        display: flex;
        align-items: center;
        justify-content: center; 
        border: 2px solid #000000;
        border-radius: 4px;
        Width: 312px;
        Height: 55px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 22px;
        
        
        }

      @media (min-width: 600px) {
            .root{
              Width: 353px;

            }
        }
        `;
            var shadow = this.attachShadow({
                mode: "open"
            });
            shadow.append(style);
            var div = document.createElement("div");
            div.textContent = textoOriginal;
            div.classList.add("root");
            shadow.append(div);
        }
    }
    customElements.define("custom-outlined", Outlined);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire64c4")

//# sourceMappingURL=index.bdea7d65.js.map
