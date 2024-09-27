/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/styles/index.css
var styles = __webpack_require__(767);
;// CONCATENATED MODULE: ./src/styles/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/Renderer.js
class Renderer{
    constructor(){
    }
    initialize(elementObjArray){
        this.frag = document.createDocumentFragment();
        this.fragObject={docFrag:this.frag,elementName:"docFrag"};
        this.fragArray =[this.fragObject];
        this.body = document.querySelector("body");
        this.bodyObject={body:this.body,elementName:"body"};
        this.bodyArray =[this.bodyObject];
        this.firstGenChild =[];
        this.firstGenParent=[];
        this.secondGenChild=[];
        this.secondGenParent=[];
        this.startCreate(elementObjArray);
    }
    detachAll(){
        this.startDetach([...this.firstGenParent,...this.secondGenParent],this.secondGenChild);
        this.startDetach([...this.firstGenParent,...this.secondGenParent],this.secondGenParent);
        this.startDetach(this.bodyArray,[...this.firstGenChild,...this.firstGenParent]);
    }
    appendChild(...args){
        if(args.length===2 && args !==null){
            args[0][args[0].elementName].appendChild(args[1][args[1].elementName]);
        }
    }
    appendAll(){
        this.startAppend([...this.firstGenParent,...this.secondGenParent],this.secondGenChild);
        this.startAppend([...this.firstGenParent,...this.secondGenParent],this.secondGenParent);
        this.startAppend(this.fragArray,[...this.firstGenChild,...this.firstGenParent]);
        this.startAppend(this.bodyArray,this.fragArray)

    }
    startAppend(parents,children){ 
        let i=0;
        while(children.length>i){
            if(parents[0].elementName==='docFrag' || parents[0].elementName==='body'){
                this.appendChild(parents[0],children[i]);
            }
            else{
                const found = parents.find((element, index)=>{
                    element.elementName===children[i].childOf;
                    if(element.elementName===children[i].childOf){
                        return element;
                    }
                });
                if(found){
                    this.appendChild(found,children[i]);
                }
            }
            i++;
        }
    }
    detachChild(...args){
        if(args.length===2 && args !==null){
            args[0][args[0].elementName].removeChild(args[1][args[1].elementName]);
        }
    }
    startDetach(parents,children){ 
        let i=0;
        while(children.length>i){
            if(parents[0].elementName==='docFrag' || parents[0].elementName==='body'){
                this.detachChild(parents[0],children[i]);
            }
            else{
                const found = parents.find((element, index)=>{
                    element.elementName===children[i].childOf;
                    if(element.elementName===children[i].childOf){
                        return element;
                    }
                });
                if(found){
                    this.detachChild(found,children[i]);
                }
            }
            i++;
        }
    }
    startCreate(elementObjArray){
        let i=0;
        while(elementObjArray.length>i){
            this.createElement(elementObjArray[i]);
            i++;
        }
    }
    createElement(elementObject){
        const {elementName} = elementObject;
        const {tagName,className, content, ...rest}=elementObject;
        rest[elementName]=document.createElement(tagName);
        if(className ?? "" !==""){
            rest[elementName].className +=`${className}`;
        }
        if(content ?? "" !==""){
            rest[elementName].textContent =`${content}`;
        }
        this.storeElement(rest);
    }
    storeElement(elementObject){
        const {childOf,isParent,}=elementObject;
        if(childOf==='body' && isParent){  
            this.firstGenParent.push(elementObject);
        }
        else if(childOf==='body' && !isParent){
            this.firstGenChild.push(elementObject)
        }
        else if(childOf!=='body' && isParent){
            this.secondGenParent.push(elementObject);
        }
        else if(childOf!=='body' && !isParent){
            this.secondGenChild.push(elementObject);
        }
    }

}
;// CONCATENATED MODULE: ./src/component/Display.js

class Display{
    constructor(data){
        this.data =data;
        this.display = new Renderer();
    }
    init(){
        this.display.initialize(this.data);
    } 
    add(){
        this.display.appendAll();
    }
    refresh(){
        this.display.render();
    }
    remove(){
        this.display.detachAll();
    }
}
;// CONCATENATED MODULE: ./src/component/JSON/header.json
const header_namespaceObject = /*#__PURE__*/JSON.parse('[{"elementName":"parentHeader","tagName":"header","className":"header","isParent":true,"childOf":"body"},{"elementName":"childDiv","tagName":"div","isParent":false,"className":"restaurant-icon icon","childOf":"parentHeader"},{"elementName":"childH1One","tagName":"h1","isParent":false,"childOf":"parentHeader","content":"Neptune\'s"},{"elementName":"childH1Two","tagName":"h1","isParent":false,"className":"crab-color","childOf":"parentHeader","content":"Crab House"},{"elementName":"childNav","tagName":"nav","isParent":true,"childOf":"parentHeader"},{"elementName":"buttonOne","tagName":"button","isParent":false,"childOf":"childNav","content":"Home"},{"elementName":"buttonTwo","tagName":"button","isParent":false,"childOf":"childNav","content":"Menu"},{"elementName":"buttonFour","tagName":"button","isParent":false,"childOf":"childNav","content":"About"}]');
;// CONCATENATED MODULE: ./src/component/Header.js


const header = new Display(header_namespaceObject);
/* harmony default export */ const Header = (header);
;// CONCATENATED MODULE: ./src/component/JSON/heroBanner.json
const heroBanner_namespaceObject = /*#__PURE__*/JSON.parse('[{"elementName":"parentDiv","tagName":"div","className":"wrapper hero-banner","isParent":true,"childOf":"body"},{"elementName":"childH2","tagName":"h2","isParent":false,"childOf":"parentDiv","content":"Welcome! "},{"elementName":"childSpan","tagName":"span","className":"crab-icon icon","isParent":false,"childOf":"parentDiv"}]');
;// CONCATENATED MODULE: ./src/component/HeroBanner.js


const heroBanner = new Display(heroBanner_namespaceObject);
/* harmony default export */ const HeroBanner = (heroBanner);
;// CONCATENATED MODULE: ./src/component/JSON/homePage.json
const homePage_namespaceObject = /*#__PURE__*/JSON.parse('[{"elementName":"parentDiv","tagName":"div","className":"content","isParent":true,"childOf":"body"},{"elementName":"childDiv","tagName":"div","isParent":true,"className":"grid","childOf":"parentDiv"},{"elementName":"grandChildDivOne","tagName":"div","isParent":true,"className":"message home-page","childOf":"childDiv"},{"elementName":"greatGrandChildHone","tagName":"h1","isParent":false,"childOf":"grandChildDivOne","content":"Neptune\'s Crab House"},{"elementName":"greatGrandChildP","tagName":"p","isParent":false,"childOf":"grandChildDivOne","content":"Dive into a culinary adventure where the ocean\'s finest flavors meet exceptional hospitality. At Neptune Crab House, we pride ourselves on serving the freshest seafood, prepared with love and creativity. Whether you\'re here for our famous crab cakes, a hearty seafood boil, or a refreshing cocktail, we promise an unforgettable dining experience."},{"elementName":"grandChildDivTwo","tagName":"div","isParent":true,"className":"message home-page","childOf":"childDiv"},{"elementName":"greatGrandChildHtwo","tagName":"h2","isParent":false,"childOf":"grandChildDivTwo","content":"Join us for"},{"elementName":"greatGrandChildUl","tagName":"ul","isParent":true,"childOf":"grandChildDivTwo"},{"elementName":"greatGreatGrandChildLiOne","tagName":"li","isParent":true,"childOf":"greatGrandChildUl"},{"elementName":"greatGreatGreatGrandChildPone","tagName":"p","isParent":false,"childOf":"greatGreatGrandChildLiOne","content":"Daily Specials unique dishes crafted with the freshest catch of the day."},{"elementName":"greatGreatGrandChildLiTwo","tagName":"li","isParent":true,"childOf":"greatGrandChildUl"},{"elementName":"greateGreatGreatGrandChildPTwo","tagName":"p","isParent":false,"childOf":"greatGreatGrandChildLiTwo","content":"Happy Hour enjoy discounted drinks and appetizers from 4 PM to 6 PM."},{"elementName":"greatGreatGrandChildLiThree","tagName":"li","isParent":true,"childOf":"greatGrandChildUl"},{"elementName":"greateGreatGreatGrandChildPThree","tagName":"p","isParent":false,"childOf":"greatGreatGrandChildLiThree","content":"Weekend Brunch indulge in our special brunch menu every Saturday and Sunday from 10 AM to 2 PM."},{"elementName":"grandChildDivThree","tagName":"div","isParent":true,"className":"message home-page","childOf":"childDiv"},{"elementName":"greatGrandChildDivOne","tagname":"div","isParent":true,"childOf":"grandChildDivThree"},{"elementName":"greatGreatGrandChildHTwoOne","tagName":"h2","isParent":false,"className":"contact","childOf":"grandChildDivThree","content":"Contact Us"},{"elementName":"greatGreatGrandChildHTwoTwo","tagName":"h2","isParent":false,"className":"location","childOf":"grandChildDivThree","content":"Location"},{"elementName":"greatGreatGrandChildPFour","tagName":"p","isParent":false,"childOf":"grandChildDivThree","content":"123 Atlantis Street, Outer Solar System, SS 54321"},{"elementName":"greatGreatGrandChildPSix","tagName":"p","isParent":false,"childOf":"grandChildDivThree","content":"(123)456-7890"},{"elementName":"greatGreatGrandChildPSeven","tagName":"p","isParent":false,"childOf":"grandChildDivThree","content":"info@neptuneskitchen.com"}]');
;// CONCATENATED MODULE: ./src/component/HomePage.js


const homePage = new Display(homePage_namespaceObject);
/* harmony default export */ const HomePage = (homePage);
;// CONCATENATED MODULE: ./src/component/JSON/aboutPage.json
const aboutPage_namespaceObject = /*#__PURE__*/JSON.parse('[{"elementName":"parentDiv","tagName":"div","className":"content","isParent":true,"childOf":"body"},{"elementName":"childDivOne","tagName":"div","isParent":true,"className":"grid","childOf":"parentDiv"},{"elementName":"childDivTwo","tagName":"div","className":"message about-page","isParent":true,"childOf":"childDivOne"},{"elementName":"childH2One","tagName":"h1","isParent":false,"childOf":"childDivTwo","content":"About"},{"elementName":"childPOne","tagName":"p","isParent":false,"childOf":"childDivTwo","content":"Neptune\'s Crab house, where the oceans\'s bounty meets culinary excellence! Located in the heart of Atlantis, our restaurant is offers wide variety of seafood in our menu that all seafood lovers can enjoy."},{"elementName":"childDivThree","tagName":"div","className":"message about-page","isParent":true,"childOf":"childDivOne"},{"elementName":"childH2Two","tagName":"h2","isParent":false,"childOf":"childDivThree","content":"Our Atmosphere"},{"elementName":"childPTwo","tagName":"p","isParent":false,"childOf":"childDivThree","content":"At Neptune\'s Crab House, we pride ourselves on our signature crab dishes.From succulent steamed crabs to our famous crab cakes, each dish is crafted with the freshest ingredients and a touch of culinary magic. Our menu also features a variety of other seafood delights, ensuring there\'s something for everyone."},{"elementName":"childDivFour","tagName":"div","className":"message about-page","isParent":true,"childOf":"childDivOne"},{"elementName":"childH2Three","tagName":"h2","isParent":false,"childOf":"childDivFour","content":"Our Specialty"},{"elementName":"childPThree","tagName":"p","isParent":false,"childOf":"childDivFour","content":"Step into Neptune\'s Crab House and be transported to an underwater paradise. Our nautical-themed decor, complete with oceanic murals and ambient lighting, creates a relaxing and inviting atmosphere perfect for family dinners, romantic dates, or casual get-togethers with friends."},{"elementName":"childDivFive","tagName":"div","className":"message about-page","isParent":true,"childOf":"childDivOne"},{"elementName":"childH2Four","tagName":"h2","isParent":false,"childOf":"childDivFive","content":"Join Us"},{"elementName":"childPFour","tagName":"p","isParent":false,"childOf":"childDivFive","content":"Whether you\'re a local or a visitor, we invite you to dive into an unforgettable dining experience at Neptune\'s Crab House. Come and savor the flavors of the sea, where every meal is a celebration of the ocean\'s treasures."}]');
;// CONCATENATED MODULE: ./src/component/AboutPage.js


const aboutPage = new Display(aboutPage_namespaceObject);
/* harmony default export */ const AboutPage = (aboutPage);
;// CONCATENATED MODULE: ./src/component/JSON/menuPage.json
const menuPage_namespaceObject = /*#__PURE__*/JSON.parse('[{"elementName":"parentDiv","tagName":"div","className":"content","isParent":true,"childOf":"body"},{"elementName":"childDivOne","tagName":"div","isParent":true,"className":"grid","childOf":"parentDiv"},{"elementName":"childDivTwo","tagName":"div","className":"message menu-page","isParent":true,"childOf":"childDivOne"},{"elementName":"childH1One","tagName":"h1","isParent":false,"childOf":"childDivTwo","content":"Menu"},{"elementName":"childDivThree","tagName":"div","isParent":true,"childOf":"childDivTwo"},{"elementName":"childH2Two","tagName":"h2","isParent":false,"childOf":"childDivThree","content":"Starters"},{"elementName":"childUlOne","tagName":"ul","isParent":true,"childOf":"childDivThree"},{"elementName":"grandChildLiOne","tagName":"li","isParent":false,"childOf":"childUlOne","content":"Crab Bisque - A creamy soup made with fresh crab meat, herbs, and a touch of sherry. $8.99"},{"elementName":"grandChildLiTwo","tagName":"li","isParent":false,"childOf":"childUlOne","content":"Calamari Rings - Lightly breaded and fried to golden perfection, served with marinara sauce. $10.99"},{"elementName":"grandChildLiThree","tagName":"li","isParent":false,"childOf":"childUlOne","content":"Seafood Pasta - A medley of shrimp, scallops, and crab meat tossed in a creamy Alfredo sauce over fettuccine. $22.99"},{"elementName":"childDivFour","tagName":"div","isParent":true,"childOf":"childDivTwo"},{"elementName":"childH2Three","tagName":"h2","isParent":false,"childOf":"childDivFour","content":"Main Courses"},{"elementName":"childUlTwo","tagName":"ul","isParent":true,"childOf":"childDivFour"},{"elementName":"grandChildLiFour","tagName":"li","isParent":false,"childOf":"childUlTwo","content":"Neptune\'s Crab Feast - A generous platter of steamed crabs, crab legs,and crab cakes, served with corn on the cob and coleslaw. $34.99"},{"elementName":"grandChildLiFive","tagName":"li","isParent":false,"childOf":"childUlTwo","content":"Crab Cakes - Two jumbo lump crab cakes, pan-seared and served with a side of garlic mashed potatoes and seasonal vegetables. $24.99"},{"elementName":"grandChildLiSix","tagName":"li","isParent":false,"childOf":"childUlTwo","content":"Oysters Rockefeller - Fresh oysters topped with spinach, bacon, and hollandaise sauce, then baked. $12.99"},{"elementName":"childDivFive","tagName":"div","isParent":true,"childOf":"childDivTwo"},{"elementName":"childH2Four","tagName":"h2","isParent":false,"childOf":"childDivFive,","content":"Sides"},{"elementName":"childUlThree","tagName":"ul","isParent":true,"childOf":"childDivFive"},{"elementName":"grandChildLiSeven","tagName":"li","isParent":false,"childOf":"childUlThree","content":"Garlic Mashed Potatoes - $4.99"},{"elementName":"grandChildLiEight","tagName":"li","isParent":false,"childOf":"childUlThree","content":"Seasonal Vegetables - $4.99"},{"elementName":"grandChildLiNine","tagName":"li","isParent":false,"childOf":"childUlThree","content":"Corn on the Cob - $3.99"},{"elementName":"childDivSix","tagName":"div","isParent":true,"childOf":"childDivTwo"},{"elementName":"childH2Five","tagName":"h2","isParent":false,"childOf":"childDivSix","content":"Beverages"},{"elementName":"childUlFour","tagName":"ul","isParent":true,"childOf":"childDivSix"},{"elementName":"grandChildLiTen","tagName":"li","isParent":false,"childOf":"childUlFour","content":"Soft Drinks - $2.99"},{"elementName":"grandChildLiEleven","tagName":"li","isParent":false,"childOf":"childUlFour","content":"Iced Tea - $2.99"},{"elementName":"grandChildLiTwelve","tagName":"li","isParent":false,"childOf":"childUlFour","content":"Craft Beer - $5.99 per pint"},{"elementName":"childDivSeven","tagName":"div","isParent":true,"childOf":"childDivTwo"},{"elementName":"childH2Six","tagName":"h2","isParent":false,"childOf":"childDivSeven","content":"Dessert"},{"elementName":"childUlFive","tagName":"ul","isParent":true,"childOf":"childDivSeven"},{"elementName":"grandChildLiThirteen","tagName":"li","isParent":false,"childOf":"childUlFive","content":"Key Lime Pie - A tangy and sweet pie with a graham cracker crust. $6.99"},{"elementName":"grandChildLiFourteen","tagName":"li","isParent":false,"childOf":"childUlFive","content":"Chocolate Lava Cake - A rich chocolate cake with a molten center, served with vanilla ice cream. $7.99"},{"elementName":"grandChildLiFifteen","tagName":"li","isParent":false,"childOf":"childUlFive","content":"Cheesecake - Classic New York-style cheesecake with a berry compote. $6.99"}]');
;// CONCATENATED MODULE: ./src/component/MenuPage.js


const menuPage = new Display(menuPage_namespaceObject);
/* harmony default export */ const MenuPage = (menuPage);
;// CONCATENATED MODULE: ./src/index.js







class MyComponent {
    constructor(){
        Header.init();
        Header.add();
        HeroBanner.init();
        HeroBanner.add();
        this.header = document.querySelector('.header');
        this.home=document.querySelector("nav > button:nth-of-type(1");
        this.menu=document.querySelector("nav > button:nth-of-type(2)");
        this.about=document.querySelector("nav > button:nth-of-type(3)");
        this.addWindowListener();
        this.addButtonListener();
        this.activePage=[];
        this.activeButton=[];
        this.changeActivePage(HomePage);
        this.changeButtonColor(this.home);
    }
    addWindowListener(){
        this.scrollOpacity = this.scrollOpacity.bind(this);
        window.addEventListener('scroll',this.scrollOpacity);
        this.removeAllListener = this.removeAllListener.bind(this); 
        window.addEventListener('beforeunload',this.removeAllListener);
    }
    addButtonListener(){
        const home = "renderHomePage"
        this.renderHomePage = this.renderHomePage.bind(this);
        this.renderMenuPage = this.renderMenuPage.bind(this);
        this.renderAboutPage = this.renderAboutPage.bind(this);
        this.home.addEventListener("click",this.renderHomePage);
        this.menu.addEventListener("click",this.renderMenuPage);
        this.about.addEventListener("click",this.renderAboutPage);
    }
    removeAllListener(event){
        event.preventDefault();
        window.removeEventListener('scroll',this.scrollOpacity);
        window.removeEventListener('beforeunload',this.removeAllListener);
        this.home.removeEventListener("click",this.renderHomePage);
        this.menu.removeEventListener("click",this.renderMenuPage);
        this.about.removeEventListener("click",this.renderAboutPage);
    }
    scrollOpacity(){
        let scrollPos = window.scrollY;
        if(scrollPos>300){
            this.header.style.backgroundColor= `rgba(35, 32, 28,1)`;
        }
        else{
            this.header.style.backgroundColor=`rgba(35, 32, 28,0.3)`;
        }
    }
    changeActivePage(currentPage){
        if(this.activePage.length !==0){
            this.activePage.pop().remove();
        }
        currentPage.init();
        currentPage.add();
        this.activePage.push(currentPage);
    }
    changeButtonColor(currentButton){
        if(this.activeButton.length !==0){
            this.activeButton.pop().style.color="rgb(255,255,255)";
        }
        currentButton.style.color="rgb(149, 1, 1)";
        this.activeButton.push(currentButton);
    }
    renderHomePage(){
        this.changeActivePage(HomePage);
        this.changeButtonColor(this.home);
    }
    renderMenuPage(){
        this.changeActivePage(MenuPage);
        this.changeButtonColor(this.menu);
    }
    renderAboutPage(){
        this.changeActivePage(AboutPage);
        this.changeButtonColor(this.about);
    }
}

new MyComponent();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map