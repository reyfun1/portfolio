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
})({"img/projects/cigars-bay-store/cigarsbay-pic-1.jpg":[function(require,module,exports) {
module.exports = "/cigarsbay-pic-1.b20ac081.jpg";
},{}],"img/projects/cigars-bay-store/cigarsbay-pic-2.jpg":[function(require,module,exports) {
module.exports = "/cigarsbay-pic-2.076680ca.jpg";
},{}],"img/projects/cigars-bay-store/cigarsbay-pic-3.jpg":[function(require,module,exports) {
module.exports = "/cigarsbay-pic-3.74d29c40.jpg";
},{}],"img/projects/graphic-design/booth-promo-500.jpg":[function(require,module,exports) {
module.exports = "/booth-promo-500.bb401a75.jpg";
},{}],"img/projects/graphic-design/brotherscigars-design-500.jpg":[function(require,module,exports) {
module.exports = "/brotherscigars-design-500.9accd87a.jpg";
},{}],"img/projects/graphic-design/booth-promo-min.jpg":[function(require,module,exports) {
module.exports = "/booth-promo-min.9cfc8577.jpg";
},{}],"img/projects/graphic-design/brotherscigars-design-min.jpg":[function(require,module,exports) {
module.exports = "/brotherscigars-design-min.d1d04945.jpg";
},{}],"img/projects/graphic-design/galaxy-airplane-min.jpg":[function(require,module,exports) {
module.exports = "/galaxy-airplane-min.d06f0b43.jpg";
},{}],"img/projects/graphic-design/galaxy-binoculars-500.jpg":[function(require,module,exports) {
module.exports = "/galaxy-binoculars-500.9999dabf.jpg";
},{}],"img/projects/graphic-design/galaxy-airplane-500.jpg":[function(require,module,exports) {
module.exports = "/galaxy-airplane-500.e0ac23e0.jpg";
},{}],"img/projects/graphic-design/galaxy-motorcycle-500.jpg":[function(require,module,exports) {
module.exports = "/galaxy-motorcycle-500.fe5f6827.jpg";
},{}],"img/projects/graphic-design/galaxy-binoculars-min.jpg":[function(require,module,exports) {
module.exports = "/galaxy-binoculars-min.4e2b31af.jpg";
},{}],"img/projects/graphic-design/galaxy-motorcycle-min.jpg":[function(require,module,exports) {
module.exports = "/galaxy-motorcycle-min.a1df69b5.jpg";
},{}],"img/projects/graphic-design/no1-cigar-promo-min.jpg":[function(require,module,exports) {
module.exports = "/no1-cigar-promo-min.41d3137a.jpg";
},{}],"img/projects/graphic-design/no1-cigar-promo-500.jpg":[function(require,module,exports) {
module.exports = "/no1-cigar-promo-500.90a8874f.jpg";
},{}],"img/projects/crm-web-app/accountpage-500.jpg":[function(require,module,exports) {
module.exports = "/accountpage-500.ea2c3d4a.jpg";
},{}],"img/projects/crm-web-app/accountpage-min.jpg":[function(require,module,exports) {
module.exports = "/accountpage-min.6dbbc581.jpg";
},{}],"img/projects/shopify/home-screen-500.jpg":[function(require,module,exports) {
module.exports = "/home-screen-500.e6400b86.jpg";
},{}],"img/projects/shopify/home-screen-min.jpg":[function(require,module,exports) {
module.exports = "/home-screen-min.8c1f3e79.jpg";
},{}],"img/projects/rating-cigars/home-page-1.jpg":[function(require,module,exports) {
module.exports = "/home-page-1.28a7e445.jpg";
},{}],"img/projects/**/*.jpg":[function(require,module,exports) {
module.exports = {
  "cigars-bay-store": {
    "cigarsbay-pic-1": require("./..\\cigars-bay-store\\cigarsbay-pic-1.jpg"),
    "cigarsbay-pic-2": require("./..\\cigars-bay-store\\cigarsbay-pic-2.jpg"),
    "cigarsbay-pic-3": require("./..\\cigars-bay-store\\cigarsbay-pic-3.jpg")
  },
  "graphic-design": {
    "booth-promo-500": require("./..\\graphic-design\\booth-promo-500.jpg"),
    "brotherscigars-design-500": require("./..\\graphic-design\\brotherscigars-design-500.jpg"),
    "booth-promo-min": require("./..\\graphic-design\\booth-promo-min.jpg"),
    "brotherscigars-design-min": require("./..\\graphic-design\\brotherscigars-design-min.jpg"),
    "galaxy-airplane-min": require("./..\\graphic-design\\galaxy-airplane-min.jpg"),
    "galaxy-binoculars-500": require("./..\\graphic-design\\galaxy-binoculars-500.jpg"),
    "galaxy-airplane-500": require("./..\\graphic-design\\galaxy-airplane-500.jpg"),
    "galaxy-motorcycle-500": require("./..\\graphic-design\\galaxy-motorcycle-500.jpg"),
    "galaxy-binoculars-min": require("./..\\graphic-design\\galaxy-binoculars-min.jpg"),
    "galaxy-motorcycle-min": require("./..\\graphic-design\\galaxy-motorcycle-min.jpg"),
    "no1-cigar-promo-min": require("./..\\graphic-design\\no1-cigar-promo-min.jpg"),
    "no1-cigar-promo-500": require("./..\\graphic-design\\no1-cigar-promo-500.jpg")
  },
  "crm-web-app": {
    "accountpage-500": require("./..\\crm-web-app\\accountpage-500.jpg"),
    "accountpage-min": require("./..\\crm-web-app\\accountpage-min.jpg")
  },
  "shopify": {
    "home-screen-500": require("./..\\shopify\\home-screen-500.jpg"),
    "home-screen-min": require("./..\\shopify\\home-screen-min.jpg")
  },
  "rating-cigars": {
    "home-page-1": require("./..\\rating-cigars\\home-page-1.jpg")
  }
};
},{"./..\\cigars-bay-store\\cigarsbay-pic-1.jpg":"img/projects/cigars-bay-store/cigarsbay-pic-1.jpg","./..\\cigars-bay-store\\cigarsbay-pic-2.jpg":"img/projects/cigars-bay-store/cigarsbay-pic-2.jpg","./..\\cigars-bay-store\\cigarsbay-pic-3.jpg":"img/projects/cigars-bay-store/cigarsbay-pic-3.jpg","./..\\graphic-design\\booth-promo-500.jpg":"img/projects/graphic-design/booth-promo-500.jpg","./..\\graphic-design\\brotherscigars-design-500.jpg":"img/projects/graphic-design/brotherscigars-design-500.jpg","./..\\graphic-design\\booth-promo-min.jpg":"img/projects/graphic-design/booth-promo-min.jpg","./..\\graphic-design\\brotherscigars-design-min.jpg":"img/projects/graphic-design/brotherscigars-design-min.jpg","./..\\graphic-design\\galaxy-airplane-min.jpg":"img/projects/graphic-design/galaxy-airplane-min.jpg","./..\\graphic-design\\galaxy-binoculars-500.jpg":"img/projects/graphic-design/galaxy-binoculars-500.jpg","./..\\graphic-design\\galaxy-airplane-500.jpg":"img/projects/graphic-design/galaxy-airplane-500.jpg","./..\\graphic-design\\galaxy-motorcycle-500.jpg":"img/projects/graphic-design/galaxy-motorcycle-500.jpg","./..\\graphic-design\\galaxy-binoculars-min.jpg":"img/projects/graphic-design/galaxy-binoculars-min.jpg","./..\\graphic-design\\galaxy-motorcycle-min.jpg":"img/projects/graphic-design/galaxy-motorcycle-min.jpg","./..\\graphic-design\\no1-cigar-promo-min.jpg":"img/projects/graphic-design/no1-cigar-promo-min.jpg","./..\\graphic-design\\no1-cigar-promo-500.jpg":"img/projects/graphic-design/no1-cigar-promo-500.jpg","./..\\crm-web-app\\accountpage-500.jpg":"img/projects/crm-web-app/accountpage-500.jpg","./..\\crm-web-app\\accountpage-min.jpg":"img/projects/crm-web-app/accountpage-min.jpg","./..\\shopify\\home-screen-500.jpg":"img/projects/shopify/home-screen-500.jpg","./..\\shopify\\home-screen-min.jpg":"img/projects/shopify/home-screen-min.jpg","./..\\rating-cigars\\home-page-1.jpg":"img/projects/rating-cigars/home-page-1.jpg"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../img/projects/**/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navLinks = document.querySelectorAll('.nav-link');
var sidebarOpenBtn = document.querySelector('#sidebar-btn');
var sidebarCloseBtn = document.querySelector('#sidebar-close');
var sidebarContainer = document.querySelector('.sidebar-container');
var sectionTitles = document.querySelectorAll('.section-title');
var sections = document.querySelectorAll('.web-section');
var projectSelectors = document.querySelectorAll('.item-selector-header button');
var projectsArr = document.querySelectorAll('.project');
var modal = document.querySelector('.modal'); // Navlink method to switch active

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    navLinks.forEach(function (navlink) {
      return navlink.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});
/****** SIDE BAR FUNCTION *****/

var toggleContainer = function toggleContainer() {
  return sidebarContainer.classList.toggle('active');
}; // Btn click that open / close of sidebar


sidebarOpenBtn.addEventListener('click', toggleContainer);
sidebarCloseBtn.addEventListener('click', toggleContainer);
sidebarContainer.querySelectorAll('li a').forEach(function (link) {
  link.addEventListener('click', toggleContainer);
}); // Touch outside of sidebar container causes it to close 

window.addEventListener('touchstart', function (e) {
  var xPosition = e.touches[0].clientX;
  var screenWidth = screen.width; // only if the touch is on the regulat app area and if container is active, then remove class

  if (sidebarContainer.classList.contains('active') && xPosition < screenWidth - 180) {
    sidebarContainer.classList.remove('active');
  }
});
/******  IMAGE CAROUSEL *****/
// Window is smaller than 900px

var widthMatch = window.matchMedia("(max-width: 900px)"); // get card container, cards array & buttons 

var cardContainer = document.querySelector('.card-container');
var cardsArr = document.querySelectorAll('.card');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev'); // declare index of card and interval 

var cardIndex = 0;
var TIME = 2500; // Add an interval so it runs every 2seconds

var interval = setInterval(run, TIME);

function run() {
  if (widthMatch.matches) {
    cardIndex++;
    changeCard();
  }
} // Change the transform property on the card 
// Check the index for edges (first and last)


function changeCard() {
  // if index is at end of list 
  if (cardIndex > cardsArr.length - 1) {
    cardIndex = 0;
  } // if index is negative, switch to 1st
  else if (cardIndex < 0) {
      cardIndex = cardsArr.length - 1;
    } // change the x positon of the card conmtainer


  cardContainer.style.transform = "translateX(".concat(-cardIndex * 300, "px)");
} // event listeners for buttons 


nextBtn.addEventListener('click', function () {
  cardIndex++;
  changeCard();
  clearInterval(interval);
});
prevBtn.addEventListener('click', function () {
  cardIndex--;
  changeCard();
  clearInterval(interval);
  setInterval(interval, TIME);
}); // mm in the function arg is the matchMedia object, passed back into the function

widthMatch.addEventListener('change', function (mm) {
  cardIndex = 0;
  changeCard();
});
/***** SCROLL NAVIGATION FUNCTIONALLITY  */

function isSectionOnTheTop() {
  // Grab the height and y position
  sections.forEach(function (el, i) {
    var vHeight = window.innerHeight || document.documentElement.clientHeight;
    var yPositionInScreen = el.getBoundingClientRect().y;
    var yPercentage = yPositionInScreen / vHeight; // active range to be 0 => 40%

    if (yPercentage >= 0 && yPercentage <= 0.40) {
      navLinks.forEach(function (navlink) {
        return navlink.classList.remove('active');
      });
      document.querySelector(".".concat(el.id, "-link")).classList.add('active');
    }
  });
}

window.addEventListener('scroll', function () {
  isSectionOnTheTop();
});
/*******PROJECT SELECTOR FUNCTIONALITY */

projectSelectors.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var clickedTabType = e.target.getAttribute('tab'); // remove the active class from all the btns and add it to the clicked btn

    projectSelectors.forEach(function (navlink) {
      return navlink.classList.remove('active');
    });
    e.target.classList.add('active');
    projectsArr.forEach(function (project) {
      var projectType = project.getAttribute('type'); // if project has matching type, then add the show class 

      if (projectType === clickedTabType) {
        project.classList.add('active');
      } // else if type is all, add active class
      else if (clickedTabType === 'all') {
          project.classList.add('active');
        } // else, remove the active class
        else {
            project.classList.remove('active');
          }
    });
  });
});
/*******MODAL FUNCTIONALITY */

var modalFeed = document.querySelector('.modal .picture-feed');
var modalClose = document.querySelector('.modal .close-btn');
var modalNext = document.querySelector('.modal .next');
var modalPrev = document.querySelector('.modal .prev');
var modalPictureCounter = document.querySelector('#modal-pic-number');
var modalIndex = 0; // Add event listener to all of the images under the projects

document.querySelectorAll('.project .project-images img').forEach(function (img) {
  img.addEventListener('click', function (e) {
    // get parent of clicked target
    var parent = e.target.parentElement; // select the minified img element

    var minImageEl = parent.querySelector('[minVersion]'); // extract the file name of the min file

    var fileName = minImageEl.getAttribute('minVersion');
    var assetType = minImageEl.getAttribute('assetType'); // console.log(assetType,fileName)

    console.log(_.default); // console.log(imgAssets[assetType][fileName])
    // change the src of the image to the new filename 

    minImageEl.src = _.default[assetType][fileName]; // move the inside of parent to the modal

    modalFeed.innerHTML = parent.innerHTML; // inser the html for the picture counter 

    modalPictureCounter.innerHTML = "1/".concat(parent.children.length); // make the modal active 

    modal.classList.add('active');
  });
});
modalClose.addEventListener('click', function () {
  modal.classList.remove('active');
});
modalNext.addEventListener('click', function () {
  changePictureInModal(1);
});
modalPrev.addEventListener('click', function () {
  changePictureInModal(-1);
}); // loop each image and set active the image that has the index 

function changePictureInModal(change) {
  modalIndex += change;
  var modalPictures = document.querySelectorAll('.modal .picture-feed img'); //If number is out of bounds, correct it 

  if (modalIndex > modalPictures.length - 1) modalIndex = 0;
  if (modalIndex < 0) modalIndex = modalPictures.length - 1;
  modalPictures.forEach(function (img, arrindex) {
    if (arrindex === modalIndex) {
      img.classList.add('active');
      modalPictureCounter.innerHTML = "".concat(arrindex + 1, "/").concat(modalPictureCounter.innerHTML.split('/')[1]);
    } else {
      img.classList.remove('active');
    }
  });
}
},{"../img/projects/**/*.jpg":"img/projects/**/*.jpg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55683" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map