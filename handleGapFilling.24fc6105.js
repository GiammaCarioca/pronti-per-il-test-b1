// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"solutions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var allSolutions = {
  prova01: {
    es01: {
      answer01: "c"
    },
    es02: {
      answer01: "true",
      answer02: "false",
      answer03: "true",
      answer04: "false",
      answer05: "false",
      answer06: "true",
      answer07: "true",
      answer08: "false",
      answer09: "false",
      answer10: "false",
      answer11: "true",
      answer12: "true"
    },
    es03: {
      answer01: "ero",
      answer02: "andavo",
      answer03: "siamo andati",
      answer04: "era",
      answer05: "aveva",
      answer06: "aveva",
      answer07: "si è arrabbiato",
      answer08: "correva",
      answer09: "è caduta",
      answer10: "ha preso",
      answer11: "ha dovuto",
      answer12: "avevo",
      answer13: "ho ricevuto",
      answer14: "ero",
      answer15: "volevo",
      answer16: "conoscevo",
      answer17: "avevate",
      answer18: "vi siete sposati",
      answer19: "ho studiato",
      answer20: "ho iniziato"
    },
    es04: {
      answer01: "era",
      answer02: "sono arrivati",
      answer03: "erano",
      answer04: "esistevano",
      answer05: "usavano",
      answer06: "scrivevano",
      answer07: "telefonavano",
      answer08: "potevi",
      answer09: "ho aspettato"
    },
    es05: {
      answer01: "a",
      answer02: "c",
      answer03: "b",
      answer04: "a",
      answer05: "c",
      answer06: "b",
      answer07: "b",
      answer08: "a",
      answer09: "a",
      answer10: "c"
    },
    es06: {
      answer01: "la",
      answer02: "gli",
      answer03: "mi",
      answer04: "ci",
      answer05: "ne"
    },
    es07: {
      answer01: "c",
      answer02: "c",
      answer03: "b",
      answer04: "c",
      answer05: "a",
      answer06: "c",
      answer07: "a",
      answer08: "b"
    },
    es08: {
      answer01: "false",
      answer02: "true",
      answer03: "false",
      answer04: "true",
      answer05: "false",
      answer06: "true",
      answer07: "false",
      answer08: "true",
      answer09: "false",
      answer10: "true"
    },
    es09: {
      answer01: "true",
      answer02: "false",
      answer03: "true",
      answer04: "false",
      answer05: "true",
      answer06: "false",
      answer07: "true",
      answer08: "true"
    }
  },
  prova02: {
    es01: {
      answer01: "b"
    },
    es02: {
      answer01: "false",
      answer02: "false",
      answer03: "true",
      answer04: "true",
      answer05: "false",
      answer06: "false",
      answer07: "true",
      answer08: "true",
      answer09: "false",
      answer10: "true",
      answer11: "false",
      answer12: "true"
    },
    es03: {
      answer01: "la",
      answer02: "le",
      answer03: "ne",
      answer04: "lo",
      answer05: "lo",
      answer06: "li"
    },
    es04: {
      answer01: "le",
      answer02: "gli",
      answer03: "gli",
      answer04: "ti",
      answer05: "mi",
      answer06: "vi"
    },
    es05: {
      answer01: "glieli",
      answer02: "te lo",
      answer03: "glielo",
      answer04: "tele",
      answer05: "gliela",
      answer06: "me lo"
    },
    es06: {
      answer01: "c",
      answer02: "b",
      answer03: "a",
      answer04: "c",
      answer05: "a",
      answer06: "c",
      answer07: "a",
      answer08: "b",
      answer09: "b",
      answer10: "a"
    },
    es07: {
      answer01: "li",
      answer02: "le",
      answer03: "gliel'",
      answer04: "ne",
      answer05: "ci",
      answer06: "vi",
      answer07: "ne",
      answer08: "ci",
      answer09: "glielo",
      answer10: "l'"
    },
    es08: {
      answer01: "c",
      answer02: "b",
      answer03: "a",
      answer04: "b",
      answer05: "a",
      answer06: "c",
      answer07: "b",
      answer08: "b"
    },
    es09: {
      answer01: "true",
      answer02: "false",
      answer03: "false",
      answer04: "false",
      answer05: "true",
      answer06: "true",
      answer07: "true",
      answer08: "false",
      answer09: "false",
      answer10: "true"
    },
    es10: {
      answer01: "false",
      answer02: "true",
      answer03: "true",
      answer04: "false",
      answer05: "true",
      answer06: "false",
      answer07: "true",
      answer08: "true"
    }
  },
  prova03: {
    es01: {
      answer01: "c"
    },
    es02: {
      answer01: "true",
      answer02: "true",
      answer03: "false",
      answer04: "true",
      answer05: "false",
      answer06: "false",
      answer07: "false",
      answer08: "true",
      answer09: "false",
      answer10: "false",
      answer11: "true",
      answer12: "true"
    },
    es03: {
      answer01: "marco la prepara",
      answer02: "elena le scrive",
      answer03: "mio figlio ne ha mangiati quattro",
      answer04: "digli che gli saluto",
      answer05: "comprane due chili",
      answer06: "li hai visti?",
      answer07: "voglio regalargli una bambola",
      answer08: "ne prendo ancora una fetta",
      answer09: "mi sono dimenticata di telefonarle",
      answer10: "posso averne ancora un po'?",
      answer11: "le chiedo un'informazione"
    },
    es04: {
      answer01: "mi",
      answer02: "mi",
      answer03: "gli",
      answer04: "lo",
      answer05: "ti",
      answer06: "ci",
      answer07: "vi",
      answer08: "ne",
      answer09: "li",
      answer10: "ti",
      answer11: "me le",
      answer12: "ne",
      answer13: "gliela"
    },
    es05: {
      answer01: "a",
      answer02: "b",
      answer03: "a",
      answer04: "c",
      answer05: "c",
      answer06: "b",
      answer07: "a",
      answer08: "b",
      answer09: "b",
      answer10: "c"
    },
    es06: {
      answer01: "ti",
      answer02: "gli",
      answer03: "glielo",
      answer04: "ne",
      answer05: "ci"
    },
    es07: {
      answer01: "b",
      answer02: "c",
      answer03: "a",
      answer04: "a",
      answer05: "a",
      answer06: "a",
      answer07: "c",
      answer08: "b"
    },
    es08: {
      answer01: "false",
      answer02: "false",
      answer03: "true",
      answer04: "false",
      answer05: "true",
      answer06: "true",
      answer07: "false",
      answer08: "true",
      answer09: "false",
      answer10: "false",
      answer11: "true",
      answer12: "true"
    },
    es09: {
      answer01: "false",
      answer02: "false",
      answer03: "true",
      answer04: "true",
      answer05: "true",
      answer06: "false",
      answer07: "true",
      answer08: "false"
    }
  }
};
var _default = allSolutions;
exports.default = _default;
},{}],"scripts/machine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _XState = XState,
    Machine = _XState.Machine,
    interpret = _XState.interpret; // global variable: window.XState

var correctionMachine = Machine({
  // Initial state
  initial: "unanswered",
  // State definitions
  states: {
    unanswered: {
      on: {
        // state transition (shorthand)
        // this is equivalent to { target: 'answered' }
        // INPUT is an event
        INPUT: {
          target: "answered"
        }
      }
    },
    answered: {
      on: {
        SUBMIT: "corrected"
      }
    },
    corrected: {
      type: "final"
    }
  }
}); // Interpret the machine, and add a listener for whenever a transition occurs.

var service = interpret(correctionMachine).onTransition(function (state) {
  console.log(state.value);

  if (state.matches("unanswered")) {
    document.querySelector(".btn").classList.add("disabled");
    document.querySelector(".btn").setAttribute("disabled", true);
  }

  if (state.matches("answered")) {
    document.querySelector(".btn").classList.remove("disabled");
    document.querySelector(".btn").removeAttribute("disabled");
  }
});
var _default = service;
exports.default = _default;
},{}],"scripts/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "service", {
  enumerable: true,
  get: function () {
    return _machine.default;
  }
});
exports.esercizio = exports.solutions = void 0;

var _solutions = _interopRequireDefault(require("../solutions.js"));

var _machine = _interopRequireDefault(require("./machine.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathArray = window.location.pathname.split("/");
var filePath = pathArray[pathArray.length - 1].substring(0, 4);
var directoryPath = pathArray[pathArray.length - 2];

var solutions = _solutions.default["".concat(directoryPath)][filePath];

exports.solutions = solutions;
var form = "".concat(filePath);
var esercizio = document.getElementById(form);
exports.esercizio = esercizio;
},{"../solutions.js":"solutions.js","./machine.js":"scripts/machine.js"}],"scripts/handleGapFilling.js":[function(require,module,exports) {
"use strict";

var _main = require("./main.js");

var answers = {};

var normalizeAnswer = function normalizeAnswer(answer) {
  return answer.trim().toLowerCase();
};

var checkAnswers = function checkAnswers(answers, solutions) {
  if (!answers || !solutions) return;
  var fields = Array.from(_main.esercizio.querySelectorAll("input[type='text']"));
  var textFields = fields.filter(function (field) {
    return field.value;
  });
  textFields === null || textFields === void 0 ? void 0 : textFields.forEach(function (field) {
    field.classList.remove("right");
    field.classList.remove("error");
    answers[field.name] === solutions[field.name] ? field.classList.add("right") : field.classList.add("error");
  });
};

_main.esercizio === null || _main.esercizio === void 0 ? void 0 : _main.esercizio.addEventListener("keyup", function (e) {
  answers[e.target.name] = normalizeAnswer(e.target.value); // Send event

  _main.service.send("INPUT");
});
_main.esercizio === null || _main.esercizio === void 0 ? void 0 : _main.esercizio.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswers(answers, _main.solutions);

  _main.service.send("SUBMIT"); // Stop the service when you are no longer using it.


  _main.service.stop();
}); // Start the service

_main.service.start();
},{"./main.js":"scripts/main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58093" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/handleGapFilling.js"], null)
//# sourceMappingURL=/handleGapFilling.24fc6105.js.map