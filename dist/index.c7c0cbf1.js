// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7uMQQ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "3bd4ad11d6efe311e65336e3c7c0cbf1";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
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
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
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
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"2jXUA":[function(require,module,exports) {
var _jobsJs = require("./jobs.js");
var _projectsJs = require("./projects.js");
var _skillsJs = require("./skills.js");
// ///////////////////////////////////////////////////////////////////////
// ///////////Global variables///////////////////////////////////////////
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
let showMenu = false;
// ///////////////////////////////////////////////////////////////////////
// /////////////////Funtions/////////////////////////////////////////////
// Toggle the hamburger menu for mobile screen
const toggleMenu = function () {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNav.classList.toggle("open");
  navItems.forEach(item => item.classList.toggle("open"));
  showMenu = !showMenu;
};
// /////////////////////////////////////////////////////////////////////////
// ////////////////Events//////////////////////////////////////////////////
// Listening to the click events from hamburger button or each section of the page to toggle for displaying the menu
menuBtn.addEventListener("click", toggleMenu);
menuNav.addEventListener("click", toggleMenu);
// Map through the array of objects to render skills to HTML
_skillsJs.skills.forEach(skill => {
  const skillsElem = document.querySelector(".skills-container");
  const skillsHtml = `
    <div class="skill-item">
        <div aria-label="${skill.name} icon"><i class="${skill.icon}" aria-hidden></i></div>
        <p>${skill.name}</p>
    </div>
    `;
  skillsElem.insertAdjacentHTML("beforeend", skillsHtml);
});
// Map through the array of objects to render jobs to HTML
_jobsJs.jobs.forEach(job => {
  const jobElem = document.querySelector(".jobs");
  let jobHtml = `
    <div class="jobs__container">
    <h3>${job.title}</h3>
    <h4>${job.company}</h4>
    <h5>${job.date}</h5>
    <ul class="jobs__description">
    `;
  // Loop through the array of each job duties
  for (let i = 0; i < job.duties.length; i++) {
    jobHtml += `
        <li class="jobs__description-item">
            ${job.duties[i]}
        </li>
        `;
  }
  jobHtml += `
    </ul>
    </div>
    `;
  jobElem.insertAdjacentHTML("beforeend", jobHtml);
});
// Map through the array of objects to render projects to HTML
_projectsJs.projects.forEach(project => {
  const projectsElem = document.querySelector(".projects__items");
  const projectsHtml = `
    <div class="projects__item">
        <img
            src=${project.imgPath}
            alt="${project.title}"
        />
        <h4>${project.title}</h4>
        <h5>${project.description}</h5>
        <h5>Technology: ${project.technologies}</h5>
        <div class="projects__btns">
            <a
                href=${project.siteUrl}
                class="projects__btn"
                aria-label="Go to the live site of the project"
            >
                <i class="fas fa-eye" aria-hidden></i> Live
            </a>
            <a
                href=${project.githubUrl}
                class="projects__btn"
                aria-label="Go to the GitHub repository to view the codes of the project"
            >
                <i class="fab fa-github" aria-hidden></i> View Code
            </a>
        </div>
    </div>
    `;
  projectsElem.insertAdjacentHTML("beforeend", projectsHtml);
});

},{"./jobs.js":"6nOBd","./projects.js":"52IGj","./skills.js":"6WASR"}],"6nOBd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "jobs", function () {
  return jobs;
});
const jobs = [{
  title: "food & beverage facilitating manager",
  company: "Ripley's Aquarium of Canada",
  date: "Apr 2019 - Jan 2021",
  duties: ["Managed a team of 30 members by training and building a workplace that is inclusive and supportive to everyone.", "Experienced working in fast-paced environments serving an average of 300 customers daily and troubleshoot the customer’s requests.", "Collaborated with technical team to solve software issues for Point-of-sales system.", "Controlled inventory and managed products in the internal data system to maintain organized and accurate management."]
}, {
  title: "assistant event coordinator",
  company: "Strategy Institute",
  date: "Jan 2018 - Jul 2018",
  duties: ["Collaborated with Graphic Designers and the Marketing team to work on materials and promote events.", "Experienced working with Salesforce platform to manage the internal data system of speakers and sponsors for the events.", "Arranged the conference technical equipment for the event with an average of 500 participants."]
}, {
  title: "legal consultant",
  company: "Lien Viet Law Ltd.",
  date: "Aug 2014 - Aug 2016",
  duties: ["Managed filing systems by creating the internal data system for preparing, monitoring, and following-up process.", "Supervised and trained new hire staff in procedures and in the use of current software to increase the overall organizational performance."]
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"52IGj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "projects", function () {
  return projects;
});
const projects = [{
  imgPath: "src/images/road-radar-app.png",
  title: "Road Radar App",
  siteUrl: "https://christie-tran-paulo-wu-project-three.netlify.app/",
  githubUrl: "https://github.com/RoadRadar/christie-tran-paulo-wu-project-three",
  description: "A React-based road app that generate public services info for travellers within Ontario. Used an API call to fetch the data as well as used React Hook and other JS libraries to efficiently update and render just the right components when the data changes. ",
  technologies: "React | Hook | REST API  | CSS3"
}, {
  imgPath: "src/images/summer-movies-react-app.png",
  title: "Summer Movies React App",
  siteUrl: "https://compassionate-gates-9c348a.netlify.app/",
  githubUrl: "https://github.com/Juno-project-4/box-office-boffo",
  description: "A React-based movie app that lets users predict the list of top 10 grossing summer movies for a particular year! Used an API call to fetch the data. Used React Hook to efficiently update and render just the right components when the data changes. Used Firebase to store data when users save the list of movie.",
  technologies: "React | Hook | Firebase | REST API  | CSS3 "
}, {
  imgPath: "src/images/go-fetch-app.png",
  title: "Go Fetch App",
  siteUrl: "https://go-fetch-app.github.io/go-fetch-app/",
  githubUrl: "https://github.com/go-fetch-app/go-fetch-app",
  description: "A vanilla JS-based app for searching the information of the different dog breeds and watching dog GIFs. Used two API calls to fetch data of the dog information, fun GIFs by user interaction input.",
  technologies: "JavaScript | REST API | HTML5 | SASS"
}, {
  imgPath: "src/images/pokemon-game-app.png",
  title: "Pokemon Matching Card Game",
  siteUrl: "https://christiesunnie.github.io/pokemon-match-game-app/",
  githubUrl: "https://github.com/christiesunnie/pokemon-match-game-app",
  description: "A jQuery-based Pokemon matching cards game that lets users play by memorizing pairs of card under the pressure of time. Used JavaScript library's methods to create the logic for the game.",
  technologies: "jQuery | HTML5 | CSS3"
}, {
  imgPath: "src/images/hero-villain-app.png",
  title: "Heroes vs Villians App",
  siteUrl: "https://christiesunnie.github.io/heroes-vs-villains-app/",
  githubUrl: "https://github.com/christiesunnie/heroes-vs-villains-app",
  description: "A jQuery-based comic characters information app for comparing superheroes and villains’ strength. Used an API call to fetch the data of the comic characters by user interaction input.",
  technologies: "jQuery | REST API | HTML5 | CSS3"
}, {
  imgPath: "src/images/riding-motorcycle-page.png",
  title: "Riding motorbike page",
  siteUrl: "https://christiesunnie.github.io/riding-motorbike-page-project/",
  githubUrl: "https://github.com/christiesunnie/riding-motorbike-page-project",
  description: "A JavaScript-based web page that is created from my personal hobby. Riding is my favorite hobby which I will do when I dont code.",
  technologies: "JavaScript| HTML5 | CSS3"
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6WASR":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "skills", function () {
  return skills;
});
const skills = [{
  icon: "fab fa-html5",
  name: "HTML5"
}, {
  icon: "fab fa-css3-alt",
  name: "CSS3"
}, {
  icon: "fab fa-sass",
  name: "SASS"
}, {
  icon: "fab fa-js",
  name: "JavaScript"
}, {
  icon: "fab fa-react",
  name: "React"
}, {
  icon: "fab fa-git-alt",
  name: "Git"
}, {
  icon: "fab fa-github",
  name: "GitHub"
}, {
  icon: "fas fa-universal-access",
  name: "Terminal"
}, {
  icon: "fas fa-database",
  name: "Firebase"
}, {
  icon: "fas fa-cloud-download-alt",
  name: "Restful API"
}];

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["7uMQQ","2jXUA"], "2jXUA", "parcelRequire862f")

//# sourceMappingURL=index.c7c0cbf1.js.map
