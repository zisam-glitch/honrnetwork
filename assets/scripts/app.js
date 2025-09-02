(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __pow = Math.pow;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
    var __spreadValues = (a5, b4) => {
        for (var prop in b4 || (b4 = {}))
            if (__hasOwnProp.call(b4, prop))
                __defNormalProp(a5, prop, b4[prop]);
        if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b4)) {
                if (__propIsEnum.call(b4, prop))
                    __defNormalProp(a5, prop, b4[prop]);
            }
        return a5;
    };
    var __spreadProps = (a5, b4) => __defProps(a5, __getOwnPropDescs(b4));
    var __objRest = (source, exclude) => {
        var target = {};
        for (var prop in source)
            if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
                target[prop] = source[prop];
        if (source != null && __getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(source)) {
                if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
                    target[prop] = source[prop];
            }
        return target;
    };
    var __esm = (fn, res) => function __init() {
        return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    var __commonJS = (cb, mod) => function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
        for (var name in all)
            __defProp(target, name, {
                get: all[name],
                enumerable: true
            });
    };
    var __copyProps = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
            for (let key of __getOwnPropNames(from))
                if (!__hasOwnProp.call(to, key) && key !== except)
                    __defProp(to, key, {
                        get: () => from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
        }
        return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target,
        mod
    ));
    var __publicField = (obj, key, value) => {
        __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
        return value;
    };
    var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
            var fulfilled = (value) => {
                try {
                    step(generator.next(value));
                } catch (e5) {
                    reject(e5);
                }
            };
            var rejected = (value) => {
                try {
                    step(generator.throw(value));
                } catch (e5) {
                    reject(e5);
                }
            };
            var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
            step((generator = generator.apply(__this, __arguments)).next());
        });
    };

    // node_modules/svg4everybody/dist/svg4everybody.js
    var require_svg4everybody = __commonJS({
        "node_modules/svg4everybody/dist/svg4everybody.js" (exports, module) {
            ! function(root, factory) {
                "function" == typeof define && define.amd ? (
                    // AMD. Register as an anonymous module unless amdModuleId is set
                    define([], function() {
                        return root.svg4everybody = factory();
                    })
                ) : "object" == typeof module && module.exports ? (
                    // Node. Does not work with strict CommonJS, but
                    // only CommonJS-like environments that support module.exports,
                    // like Node.
                    module.exports = factory()
                ) : root.svg4everybody = factory();
            }(exports, function() {
                function embed(parent, svg, target) {
                    if (target) {
                        var fragment = document.createDocumentFragment(),
                            viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
                        viewBox && svg.setAttribute("viewBox", viewBox);
                        for (var clone = target.cloneNode(true); clone.childNodes.length;) {
                            fragment.appendChild(clone.firstChild);
                        }
                        parent.appendChild(fragment);
                    }
                }

                function loadreadystatechange(xhr) {
                    xhr.onreadystatechange = function() {
                            if (4 === xhr.readyState) {
                                var cachedDocument = xhr._cachedDocument;
                                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                                    xhr._embeds.splice(0).map(function(item) {
                                        var target = xhr._cachedTarget[item.id];
                                        target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), // embed the target into the svg
                                            embed(item.parent, item.svg, target);
                                    });
                            }
                        }, // test the ready state change immediately
                        xhr.onreadystatechange();
                }

                function svg4everybody2(rawopts) {
                    function oninterval() {
                        for (var index = 0; index < uses.length;) {
                            var use = uses[index],
                                parent = use.parentNode,
                                svg = getSVGAncestor(parent),
                                src = use.getAttribute("xlink:href") || use.getAttribute("href");
                            if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), svg && src) {
                                if (polyfill) {
                                    if (!opts.validate || opts.validate(src, svg, use)) {
                                        parent.removeChild(use);
                                        var srcSplit = src.split("#"),
                                            url = srcSplit.shift(),
                                            id = srcSplit.join("#");
                                        if (url.length) {
                                            var xhr = requests[url];
                                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                                xhr._embeds.push({
                                                    parent,
                                                    svg,
                                                    id
                                                }), // prepare the xhr ready state change event
                                                loadreadystatechange(xhr);
                                        } else {
                                            embed(parent, svg, document.getElementById(id));
                                        }
                                    } else {
                                        ++index, ++numberOfSvgUseElementsToBypass;
                                    }
                                }
                            } else {
                                ++index;
                            }
                        }
                        (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame2(oninterval, 67);
                    }
                    var polyfill, opts = Object(rawopts),
                        newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
                        webkitUA = /\bAppleWebKit\/(\d+)\b/,
                        olderEdgeUA = /\bEdge\/12\.(\d+)\b/,
                        edgeUA = /\bEdge\/.(\d+)\b/,
                        inIframe = window.top !== window.self;
                    polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
                    var requests = {},
                        requestAnimationFrame2 = window.requestAnimationFrame || setTimeout,
                        uses = document.getElementsByTagName("use"),
                        numberOfSvgUseElementsToBypass = 0;
                    polyfill && oninterval();
                }

                function getSVGAncestor(node) {
                    for (var svg = node;
                        "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode);) {}
                    return svg;
                }
                return svg4everybody2;
            });
        }
    });

    // assets/scripts/utils/grid-helper.js
    var grid_helper_exports = {};
    __export(grid_helper_exports, {
        gridHelper: () => gridHelper
    });

    function gridHelper({
        gutterCssVar = GRID_HELPER_GUTTER_CSS_VAR,
        marginCssVar = GRID_HELPER_MARGIN_CSS_VAR,
        rgbaColor = GRID_HELPER_RGBA_COLOR
    } = {}) {
        const $gridContainer = document.createElement("div");
        document.body.append($gridContainer);
        setGridHelperColumns($gridContainer, rgbaColor);
        setGridHelperStyles($gridContainer, gutterCssVar, marginCssVar);
        setGridEvents($gridContainer, rgbaColor);
    }

    function setGridHelperStyles($container, gutterCssVar, marginCssVar) {
        const elStyles = $container.style;
        elStyles.zIndex = "10000";
        elStyles.position = "fixed";
        elStyles.top = "0";
        elStyles.left = "0";
        elStyles.display = "flex";
        elStyles.width = "100%";
        elStyles.height = "100%";
        elStyles.columnGap = `var(${gutterCssVar}, 0)`;
        elStyles.paddingLeft = `var(${marginCssVar}, 0)`;
        elStyles.paddingRight = `var(${marginCssVar}, 0)`;
        elStyles.pointerEvents = "none";
        elStyles.visibility = "hidden";
    }

    function setGridHelperColumns($container, rgbaColor) {
        $container.innerHTML = "";
        const columns = Number(
            window.getComputedStyle($container).getPropertyValue("--grid-columns")
        );
        let $col;
        for (var i6 = 0; i6 < columns; i6++) {
            $col = document.createElement("div");
            $col.style.flex = "1 1 0";
            $col.style.backgroundColor = rgbaColor;
            $container.appendChild($col);
        }
    }

    function setGridEvents($container, rgbaColor) {
        window.addEventListener(
            "resize",
            setGridHelperColumns($container, rgbaColor)
        );
        let ctrlDown = false;
        let isActive = false;
        document.addEventListener("keydown", (e5) => {
            if (e5.key == "Control") {
                ctrlDown = true;
            } else {
                if (ctrlDown && e5.key == "g") {
                    if (isActive) {
                        $container.style.visibility = "hidden";
                    } else {
                        $container.style.visibility = "visible";
                    }
                    isActive = !isActive;
                }
            }
        });
        document.addEventListener("keyup", (e5) => {
            if (e5.key == "Control") {
                ctrlDown = false;
            }
        });
    }
    var GRID_HELPER_GUTTER_CSS_VAR, GRID_HELPER_MARGIN_CSS_VAR, GRID_HELPER_RGBA_COLOR;
    var init_grid_helper = __esm({
        "assets/scripts/utils/grid-helper.js" () {
            GRID_HELPER_GUTTER_CSS_VAR = "--grid-gutter";
            GRID_HELPER_MARGIN_CSS_VAR = "--grid-margin";
            GRID_HELPER_RGBA_COLOR = "rgba(255, 0, 0, .1)";
        }
    });

    // node_modules/modujs/dist/main.esm.js
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj2) {
                return typeof obj2;
            };
        } else {
            _typeof = function(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
        }
        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i6 = 0; i6 < props.length; i6++) {
            var descriptor = props[i6];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    function _slicedToArray(arr, i6) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i6) || _unsupportedIterableToArray(arr, i6) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
            return arr;
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i6) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e2 = void 0;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i6 && _arr.length === i6)
                    break;
            }
        } catch (err) {
            _d = true;
            _e2 = err;
        } finally {
            try {
                if (!_n && _i["return"] != null)
                    _i["return"]();
            } finally {
                if (_d)
                    throw _e2;
            }
        }
        return _arr;
    }

    function _unsupportedIterableToArray(o6, minLen) {
        if (!o6)
            return;
        if (typeof o6 === "string")
            return _arrayLikeToArray(o6, minLen);
        var n6 = Object.prototype.toString.call(o6).slice(8, -1);
        if (n6 === "Object" && o6.constructor)
            n6 = o6.constructor.name;
        if (n6 === "Map" || n6 === "Set")
            return Array.from(o6);
        if (n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6))
            return _arrayLikeToArray(o6, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
            len = arr.length;
        for (var i6 = 0, arr2 = new Array(len); i6 < len; i6++)
            arr2[i6] = arr[i6];
        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var _default = /* @__PURE__ */ function() {
        function _default2(options) {
            _classCallCheck(this, _default2);
            this.mAttr = "data-" + options.dataName;
            this.mCaptureEvents = ["mouseenter", "mouseleave"];
            this.el = options.el;
        }
        _createClass(_default2, [{
            key: "mInit",
            value: function mInit(modules) {
                var _this = this;
                this.modules = modules;
                this.mCheckEventTarget = this.mCheckEventTarget.bind(this);
                if (this.events) {
                    Object.keys(this.events).forEach(function(event2) {
                        return _this.mAddEvent(event2);
                    });
                }
            }
        }, {
            key: "mUpdate",
            value: function mUpdate(modules) {
                this.modules = modules;
            }
        }, {
            key: "mDestroy",
            value: function mDestroy() {
                var _this2 = this;
                if (this.events) {
                    Object.keys(this.events).forEach(function(event2) {
                        return _this2.mRemoveEvent(event2);
                    });
                }
            }
        }, {
            key: "mAddEvent",
            value: function mAddEvent(event2) {
                var capture = this.mCaptureEvents.includes(event2) ? true : false;
                this.el.addEventListener(event2, this.mCheckEventTarget, capture);
            }
        }, {
            key: "mRemoveEvent",
            value: function mRemoveEvent(event2) {
                var capture = this.mCaptureEvents.includes(event2) ? true : false;
                this.el.removeEventListener(event2, this.mCheckEventTarget, capture);
            }
        }, {
            key: "mCheckEventTarget",
            value: function mCheckEventTarget(e5) {
                var event2 = this.events[e5.type];
                if (typeof event2 === "string") {
                    this[event2](e5);
                } else {
                    var data = "[" + this.mAttr + "]";
                    var target = e5.target;
                    if (this.mCaptureEvents.includes(e5.type)) {
                        if (target.matches(data)) {
                            this.mCallEventMethod(e5, event2, target);
                        }
                    } else {
                        while (target && target !== document) {
                            if (target.matches(data)) {
                                if (this.mCallEventMethod(e5, event2, target) != "undefined") {
                                    break;
                                }
                            }
                            target = target.parentNode;
                        }
                    }
                }
            }
        }, {
            key: "mCallEventMethod",
            value: function mCallEventMethod(e5, event2, target) {
                var name = target.getAttribute(this.mAttr);
                if (event2.hasOwnProperty(name)) {
                    var method = event2[name];
                    if (!e5.hasOwnProperty("currentTarget")) {
                        Object.defineProperty(e5, "currentTarget", {
                            value: target
                        });
                    }
                    if (!e5.hasOwnProperty("curTarget")) {
                        Object.defineProperty(e5, "curTarget", {
                            value: target
                        });
                    }
                    this[method](e5);
                }
            }
        }, {
            key: "$",
            value: function $4(query, context) {
                var classIndex = query.indexOf(".");
                var idIndex = query.indexOf("#");
                var attrIndex = query.indexOf("[");
                var indexes = [classIndex, idIndex, attrIndex].filter(function(index2) {
                    return index2 != -1;
                });
                var index = false;
                var name = query;
                var more = "";
                var parent = this.el;
                if (indexes.length) {
                    index = Math.min.apply(Math, _toConsumableArray(indexes));
                    name = query.slice(0, index);
                    more = query.slice(index);
                }
                if (_typeof(context) == "object") {
                    parent = context;
                }
                return parent.querySelectorAll("[" + this.mAttr + "=" + name + "]" + more);
            }
        }, {
            key: "parent",
            value: function parent(query, context) {
                var data = "[" + this.mAttr + "=" + query + "]";
                var parent2 = context.parentNode;
                while (parent2 && parent2 !== document) {
                    if (parent2.matches(data)) {
                        return parent2;
                    }
                    parent2 = parent2.parentNode;
                }
            }
        }, {
            key: "getData",
            value: function getData(name, context) {
                var target = context || this.el;
                return target.getAttribute(this.mAttr + "-" + name);
            }
        }, {
            key: "setData",
            value: function setData(name, value, context) {
                var target = context || this.el;
                return target.setAttribute(this.mAttr + "-" + name, value);
            }
        }, {
            key: "call",
            value: function call(func, args, mod, id) {
                var _this3 = this;
                if (args && !mod) {
                    mod = args;
                    args = false;
                }
                if (this.modules[mod]) {
                    if (id) {
                        if (this.modules[mod][id]) {
                            this.modules[mod][id][func](args);
                        }
                    } else {
                        Object.keys(this.modules[mod]).forEach(function(id2) {
                            _this3.modules[mod][id2][func](args);
                        });
                    }
                }
            }
        }, {
            key: "on",
            value: function on(e5, mod, func, id) {
                var _this4 = this;
                if (this.modules[mod]) {
                    if (id) {
                        this.modules[mod][id].el.addEventListener(e5, function(o6) {
                            return func(o6);
                        });
                    } else {
                        Object.keys(this.modules[mod]).forEach(function(i6) {
                            _this4.modules[mod][i6].el.addEventListener(e5, function(o6) {
                                return func(o6);
                            });
                        });
                    }
                }
            }
        }, {
            key: "init",
            value: function init2() {}
        }, {
            key: "destroy",
            value: function destroy() {}
        }]);
        return _default2;
    }();
    var _default$1 = /* @__PURE__ */ function() {
        function _default2(options) {
            _classCallCheck(this, _default2);
            this.app;
            this.modules = options.modules;
            this.currentModules = {};
            this.activeModules = {};
            this.newModules = {};
            this.moduleId = 0;
        }
        _createClass(_default2, [{
            key: "init",
            value: function init2(app2, scope) {
                var _this = this;
                var container = scope || document;
                var elements = container.querySelectorAll("*");
                if (app2 && !this.app) {
                    this.app = app2;
                }
                this.activeModules["app"] = {
                    "app": this.app
                };
                elements.forEach(function(el) {
                    Array.from(el.attributes).forEach(function(i6) {
                        if (i6.name.startsWith("data-module")) {
                            var moduleExists = false;
                            var dataName = i6.name.split("-").splice(2);
                            var moduleName = _this.toCamel(dataName);
                            if (_this.modules[moduleName]) {
                                moduleExists = true;
                            } else if (_this.modules[_this.toUpper(moduleName)]) {
                                moduleName = _this.toUpper(moduleName);
                                moduleExists = true;
                            }
                            if (moduleExists) {
                                var options = {
                                    el,
                                    name: moduleName,
                                    dataName: dataName.join("-")
                                };
                                var module = new _this.modules[moduleName](options);
                                var id = i6.value;
                                if (!id) {
                                    _this.moduleId++;
                                    id = "m" + _this.moduleId;
                                    el.setAttribute(i6.name, id);
                                }
                                _this.addActiveModule(moduleName, id, module);
                                var moduleId = moduleName + "-" + id;
                                if (scope) {
                                    _this.newModules[moduleId] = module;
                                } else {
                                    _this.currentModules[moduleId] = module;
                                }
                            }
                        }
                    });
                });
                Object.entries(this.currentModules).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        id = _ref2[0],
                        module = _ref2[1];
                    if (scope) {
                        var split = id.split("-");
                        var moduleName = split.shift();
                        var moduleId = split.pop();
                        _this.addActiveModule(moduleName, moduleId, module);
                    } else {
                        _this.initModule(module);
                    }
                });
            }
        }, {
            key: "initModule",
            value: function initModule(module) {
                module.mInit(this.activeModules);
                module.init();
            }
        }, {
            key: "addActiveModule",
            value: function addActiveModule(name, id, module) {
                if (this.activeModules[name]) {
                    Object.assign(this.activeModules[name], _defineProperty({}, id, module));
                } else {
                    this.activeModules[name] = _defineProperty({}, id, module);
                }
            }
        }, {
            key: "update",
            value: function update2(scope) {
                var _this2 = this;
                this.init(this.app, scope);
                Object.entries(this.currentModules).forEach(function(_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        id = _ref4[0],
                        module = _ref4[1];
                    module.mUpdate(_this2.activeModules);
                });
                Object.entries(this.newModules).forEach(function(_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2),
                        id = _ref6[0],
                        module = _ref6[1];
                    _this2.initModule(module);
                });
                Object.assign(this.currentModules, this.newModules);
            }
        }, {
            key: "destroy",
            value: function destroy(scope) {
                if (scope) {
                    this.destroyScope(scope);
                } else {
                    this.destroyModules();
                }
            }
        }, {
            key: "destroyScope",
            value: function destroyScope(scope) {
                var _this3 = this;
                var elements = scope.querySelectorAll("*");
                elements.forEach(function(el) {
                    Array.from(el.attributes).forEach(function(i6) {
                        if (i6.name.startsWith("data-module")) {
                            var id = i6.value;
                            var dataName = i6.name.split("-").splice(2);
                            var moduleName = _this3.toCamel(dataName) + "-" + id;
                            var moduleExists = false;
                            if (_this3.currentModules[moduleName]) {
                                moduleExists = true;
                            } else if (_this3.currentModules[_this3.toUpper(moduleName)]) {
                                moduleName = _this3.toUpper(moduleName);
                                moduleExists = true;
                            }
                            if (moduleExists) {
                                _this3.destroyModule(_this3.currentModules[moduleName]);
                                delete _this3.currentModules[moduleName];
                            }
                        }
                    });
                });
                this.activeModules = {};
                this.newModules = {};
            }
        }, {
            key: "destroyModules",
            value: function destroyModules() {
                var _this4 = this;
                Object.entries(this.currentModules).forEach(function(_ref7) {
                    var _ref8 = _slicedToArray(_ref7, 2),
                        id = _ref8[0],
                        module = _ref8[1];
                    _this4.destroyModule(module);
                });
                this.currentModules = [];
            }
        }, {
            key: "destroyModule",
            value: function destroyModule(module) {
                module.mDestroy();
                module.destroy();
            }
        }, {
            key: "toCamel",
            value: function toCamel(arr) {
                var _this5 = this;
                return arr.reduce(function(a5, b4) {
                    return a5 + _this5.toUpper(b4);
                });
            }
        }, {
            key: "toUpper",
            value: function toUpper(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }]);
        return _default2;
    }();
    var main_esm_default = _default$1;

    // assets/scripts/modules.js
    var modules_exports = {};
    __export(modules_exports, {
        Accordion: () => Accordion_default,
        Anchors: () => Anchors_default,
        BabillardForm: () => BabillardForm_default,
        Breadcrumb: () => Breadcrumb_default,
        Calendar: () => Calendar_default,
        Carousel: () => Carousel_default,
        CheckboxMultiple: () => CheckboxMultiple_default,
        CookieConsent: () => CookieConsent_default,
        Datepicker: () => ModalDatepicker,
        DatepickerToggler: () => DatepickerToggler_default,
        Dialog: () => Dialog_default,
        Expandable: () => Expandable,
        Filters: () => Filters,
        Form: () => Form,
        GeocodableForm: () => GeocodableForm,
        InputFile: () => InputFile_default,
        Jobs: () => Jobs_default,
        Load: () => Load_default,
        Map: () => GMap,
        ModalAlert: () => ModalAlert,
        ModalParking: () => ModalParking,
        ModalSearch: () => ModalSearch,
        ModalShare: () => ModalShare,
        Nav: () => Nav,
        Photoswipe: () => Photoswipe_default,
        Scroll: () => Scroll_default,
        Search: () => Search,
        SelectFilter: () => SelectFilter_default,
        SkipLink: () => SkipLink_default,
        Tabs: () => Tabs_default,
        VideoInview: () => VideoInview_default,
        Wysiwyg: () => Wysiwyg_default
    });

    // assets/scripts/modules/Accordion.js
    var Accordion_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.onClickBind = this.onClick.bind(this);
            this.$summary = this.$("summary")[0];
            this.$content = this.$("content")[0];
            this.$parent = this.el.closest("[data-accordion-parent]") || null;
            this.animation = null;
            this.isClosing = false;
            this.isExpanding = false;
        }
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        bindEvents() {
            this.$summary.addEventListener("click", this.onClickBind);
        }
        unbindEvents() {
            this.$summary.removeEventListener("click", this.onClickBind);
        }
        onClick(e5) {
            e5.preventDefault();
            this.el.style.overflow = "hidden";
            if (this.isClosing || !this.el.open) {
                this.open();
            } else if (this.isExpanding || this.el.open) {
                this.shrink();
            }
        }
        shrink() {
            var _a;
            this.isClosing = true;
            this.el.classList.remove("is-active");
            if (this.$parent)
                this.$parent.classList.remove("is-active");
            const startHeight = `${this.el.offsetHeight}px`;
            const endHeight = `${this.$summary.offsetHeight}px`;
            if (this.animation) {
                this.animation.cancel();
            }
            this.animation = this.el.animate({
                height: [startHeight, endHeight]
            }, {
                duration: 300,
                easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
            });
            this.animation.onfinish = () => this.onAnimationFinish(false);
            this.animation.oncancel = () => {
                this.isClosing = false;
                this.el.classList.add("is-active");
            };
            (_a = this.onShrink) == null ? void 0 : _a.call(this, this.el);
        }
        open() {
            var _a;
            this.el.style.height = `${this.el.offsetHeight}px`;
            this.el.open = true;
            window.requestAnimationFrame(() => this.expand());
            (_a = this.onOpen) == null ? void 0 : _a.call(this, this.el);
        }
        expand() {
            this.isExpanding = true;
            this.el.classList.add("is-active");
            if (this.$parent)
                this.$parent.classList.add("is-active");
            const startHeight = `${this.el.offsetHeight}px`;
            const endHeight = `${this.$summary.offsetHeight + this.$content.offsetHeight}px`;
            if (this.animation) {
                this.animation.cancel();
            }
            this.animation = this.el.animate({
                height: [startHeight, endHeight]
            }, {
                duration: 300,
                easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
            });
            this.animation.onfinish = () => this.onAnimationFinish(true);
            this.animation.oncancel = () => {
                this.isExpanding = false;
                this.el.classList.remove("is-active");
            };
        }
        onAnimationFinish(open) {
            this.el.open = open;
            this.animation = null;
            this.isClosing = false;
            this.isExpanding = false;
            this.el.style.height = this.el.style.overflow = "";
        }
        setCallbacks({
            onOpen = () => {},
            onShrink = () => {}
        }) {
            this.onOpen = onOpen;
            this.onShrink = onShrink;
        }
    };

    // assets/scripts/config.js
    var NODE_ENV = "development";
    var IS_MOBILE = window.matchMedia("(any-pointer:coarse)").matches;
    var ENV = Object.freeze({
        // Node environment
        NAME: NODE_ENV,
        IS_PROD: NODE_ENV === "production",
        IS_DEV: NODE_ENV === "development",
        // Device
        IS_MOBILE,
        IS_DESKTOP: !IS_MOBILE
    });
    var CSS_CLASS = Object.freeze({
        LOADING: "is-loading",
        LOADED: "is-loaded",
        FIRST_LOADED: "is-first-loaded",
        READY: "is-ready",
        NO_JS: "has-no-js",
        MODAL_OPEN: "has-modal-open",
        FONTS_LOADED: "fonts-loaded",
        LAZY_CONTAINER: "c-lazy",
        LAZY_LOADED: "-lazy-loaded"
        // ...
    });
    var CUSTOM_EVENT = Object.freeze({
        RESIZE_END: "loco.resizeEnd",
        FORM_RESET: "loco.formReset",
        VISIT_START: "loco.visitStart",
        VISIT_END: "loco.visitEnd"
        // ...
    });
    var FONT = Object.freeze({
        EAGER: [{
                family: "Labil Grotesk",
                style: "normal",
                weight: 400
            },
            {
                family: "Labil Grotesk",
                style: "normal",
                weight: 500
            },
            {
                family: "Labil Grotesk",
                style: "normal",
                weight: 700
            },
            {
                family: "Manuka",
                style: "normal",
                weight: 700
            }
        ]
    });
    var BREAKPOINTS = Object.freeze({
        FROM_TINY: 500,
        TO_TINY: 499,
        FROM_SMALL: 700,
        TO_SMALL: 699,
        FROM_MEDIUM: 1e3,
        TO_MEDIUM: 999,
        FROM_LARGE: 1200,
        TO_LARGE: 1199,
        FROM_BIG: 1400,
        TO_BIG: 1399,
        FROM_HUGE: 1600,
        TO_HUGE: 1599,
        FROM_ENORMOUS: 1800,
        TO_ENORMOUS: 1799,
        FROM_GIGANTIC: 2e3,
        TO_GIGANTIC: 1999,
        FROM_COLOSSAL: 2400,
        TO_COLOSSAL: 2399
    });

    // assets/scripts/modules/Anchors.js
    var Anchors_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$buttons = this.$("button");
            this.$sections = this.$("section");
            this.events = {
                "click": {
                    "button": "onButtonClick"
                }
            };
        }
        init() {}
        onButtonClick(e5) {
            const $button = e5.currentTarget;
            const id = this.getData("id", $button);
            if (!id)
                return;
            const $section = Array.from(this.$sections).find(($section2) => $section2.id === id);
            $section && this.call("scrollTo", {
                target: $section,
                options: {
                    offset: -100
                }
            }, "Scroll");
        }
        onSectionInview(args) {
            if (window.innerWidth < BREAKPOINTS.FROM_MEDIUM)
                return;
            const {
                target,
                way,
                from
            } = args;
            const $targetButton = Array.from(this.$buttons).find(($button) => this.getData("id", $button) === target.id);
            if (way == "enter") {
                this.$buttons.forEach(($button) => $button.classList.remove("is-active"));
                $targetButton.classList.add("is-active");
            } else {
                $targetButton.classList.remove("is-active");
            }
        }
    };

    // assets/scripts/modules/BabillardForm.js
    var BabillardForm_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$selects = this.$("select");
            this.$forms = this.$("form");
            this.onSelectChangeBind = this.onSelectChange.bind(this);
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
            this.selectValues = [];
            this.$selects.forEach(($select) => {
                this.selectValues.push($select.value);
            });
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            this.$selects.forEach(($select) => {
                $select.addEventListener("change", this.onSelectChangeBind);
            });
        }
        unbindEvents() {
            this.$selects.forEach(($select) => {
                $select.removeEventListener("change", this.onSelectChangeBind);
            });
        }
        //////////////
        // Callbacks
        //////////////
        onSelectChange(e5) {
            const $select = e5.target;
            const value = $select.value;
            const $selectedForm = Array.from(this.$forms).find(($form) => $form.id == `form-${value}`);
            $selectedForm && this.$forms.forEach(($form) => {
                if ($form !== $selectedForm) {
                    $form.classList.add("is-hidden");
                } else {
                    $form.classList.remove("is-hidden");
                }
            });
            requestAnimationFrame(() => {
                const index = Array.from(this.$selects).indexOf($select);
                const oldValue = this.selectValues[index];
                $select.value = oldValue;
            });
        }
    };

    // assets/scripts/modules/Breadcrumb.js
    var Breadcrumb_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$sublist = this.$("sublist")[0];
            this.$details = this.$("details")[0];
            this.$summary = this.$("summary")[0];
            this.onMouseEnterBind = this.onMouseEnter.bind(this);
            this.onMouseLeaveBind = this.onMouseLeave.bind(this);
            this.onClickBind = this.onClick.bind(this);
            this.onKeyDownBind = this.onKeyDown.bind(this);
            this.isOpen = false;
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            if (this.$summary) {
                this.$details.addEventListener("mouseenter", this.onMouseEnterBind);
                this.$details.addEventListener("mouseleave", this.onMouseLeaveBind);
                this.$summary.addEventListener("click", this.onClickBind);
            }
        }
        unbindEvents() {
            if (this.$summary) {
                this.$details.removeEventListener("mouseenter", this.onMouseEnterBind);
                this.$details.removeEventListener("mouseleave", this.onMouseLeaveBind);
                this.$summary.removeEventListener("click", this.onClickBind);
            }
        }
        //////////////
        // Callbacks
        //////////////
        onMouseEnter() {
            this.$summary.click();
        }
        onMouseLeave() {
            this.isOpen && this.$summary.click();
        }
        onClick(e5) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                window.addEventListener("keydown", this.onKeyDownBind);
            } else {
                window.removeEventListener("keydown", this.onKeyDownBind);
            }
            requestAnimationFrame(() => {
                this.el.classList.toggle("is-open");
                this.isOpen && this.computeMetrics();
            });
        }
        onKeyDown(e5) {
            if (e5.key === "Escape")
                this.$summary.click();
        }
        //////////////
        // Methods
        //////////////
        computeMetrics() {
            if (this.$sublist) {
                const width = this.$sublist.clientWidth;
                const height = this.$sublist.clientHeight;
                this.el.style.setProperty("--list-width", `${width}px`);
                this.el.style.setProperty("--list-height", `${height}px`);
            }
        }
    };

    // assets/scripts/modules/Calendar.js
    var Calendar_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$container = this.$("container")[0];
            this.baseUrl = this.getData("url") || window.location.pathname;
            this.category = this.getData("category") || null;
            this.events = this.getData("events") || [];
            this.selectedDate = this.getData("date") || /* @__PURE__ */ new Date();
            this.options = {
                selectedDate: this.selectedDate,
                startDate: this.selectedDate,
                // No need to defined the startDate if it has to be today
                displayEventsNumber: false,
                translations: {
                    nextMonthLabel: {
                        fr: '<span class="u-screen-reader-text">Mois suivant</span>'
                    },
                    prevMonthLabel: {
                        fr: '<span class="u-screen-reader-text">Mois pr\xE9c\xE9dent</span>'
                    }
                },
                callbacks: {
                    onDayClick: (args) => {
                        const date = args.date;
                        const year = date.getFullYear();
                        const month = ("0" + (date.getMonth() + 1)).slice(-2);
                        const day = ("0" + date.getDate()).slice(-2);
                        let url = this.baseUrl;
                        if (this.category) {
                            url += "/categorie/" + this.category;
                        }
                        url += `/${year}/${month}/${day}`;
                        this.call("goTo", url, "Load");
                    }
                }
            };
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            if (this.events) {
                this.options = __spreadProps(__spreadValues({}, this.options), {
                    events: JSON.parse(this.events)
                });
            }
            this.calendar = new bCalendar(this.$container, this.options);
        }
        destroy() {
            super.destroy();
            this.calendar.destroy();
        }
    };

    // node_modules/swiper/shared/ssr-window.esm.mjs
    function isObject(obj) {
        return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
    }

    function extend(target, src) {
        if (target === void 0) {
            target = {};
        }
        if (src === void 0) {
            src = {};
        }
        Object.keys(src).forEach((key) => {
            if (typeof target[key] === "undefined")
                target[key] = src[key];
            else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
                extend(target[key], src[key]);
            }
        });
    }
    var ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function getDocument() {
        const doc = typeof document !== "undefined" ? document : {};
        extend(doc, ssrDocument);
        return doc;
    }
    var ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent2() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return "";
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === "undefined") {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === "undefined") {
                return;
            }
            clearTimeout(id);
        }
    };

    function getWindow() {
        const win = typeof window !== "undefined" ? window : {};
        extend(win, ssrWindow);
        return win;
    }

    // node_modules/swiper/shared/utils.mjs
    function classesToTokens(classes2) {
        if (classes2 === void 0) {
            classes2 = "";
        }
        return classes2.trim().split(" ").filter((c5) => !!c5.trim());
    }

    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach((key) => {
            try {
                object[key] = null;
            } catch (e5) {}
            try {
                delete object[key];
            } catch (e5) {}
        });
    }

    function nextTick(callback, delay3) {
        if (delay3 === void 0) {
            delay3 = 0;
        }
        return setTimeout(callback, delay3);
    }

    function now() {
        return Date.now();
    }

    function getComputedStyle2(el) {
        const window2 = getWindow();
        let style;
        if (window2.getComputedStyle) {
            style = window2.getComputedStyle(el, null);
        }
        if (!style && el.currentStyle) {
            style = el.currentStyle;
        }
        if (!style) {
            style = el.style;
        }
        return style;
    }

    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = "x";
        }
        const window2 = getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = getComputedStyle2(el);
        if (window2.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(",").length > 6) {
                curTransform = curTransform.split(", ").map((a5) => a5.replace(",", ".")).join(", ");
            }
            transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
            matrix = transformMatrix.toString().split(",");
        }
        if (axis === "x") {
            if (window2.WebKitCSSMatrix)
                curTransform = transformMatrix.m41;
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[12]);
            else
                curTransform = parseFloat(matrix[4]);
        }
        if (axis === "y") {
            if (window2.WebKitCSSMatrix)
                curTransform = transformMatrix.m42;
            else if (matrix.length === 16)
                curTransform = parseFloat(matrix[13]);
            else
                curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    }

    function isObject2(o6) {
        return typeof o6 === "object" && o6 !== null && o6.constructor && Object.prototype.toString.call(o6).slice(8, -1) === "Object";
    }

    function isNode(node) {
        if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
            return node instanceof HTMLElement;
        }
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend2() {
        const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
        const noExtend = ["__proto__", "constructor", "prototype"];
        for (let i6 = 1; i6 < arguments.length; i6 += 1) {
            const nextSource = i6 < 0 || arguments.length <= i6 ? void 0 : arguments[i6];
            if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== void 0 && desc.enumerable) {
                        if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend2(to[nextKey], nextSource[nextKey]);
                            }
                        } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend2(to[nextKey], nextSource[nextKey]);
                            }
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    }

    function setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
        let {
            swiper,
            targetPosition,
            side
        } = _ref;
        const window2 = getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = "none";
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? "next" : "prev";
        const isOutOfBound = (current, target) => {
            return dir === "next" && current >= target || dir === "prev" && current <= target;
        };
        const animate = () => {
            time = ( /* @__PURE__ */ new Date()).getTime();
            if (startTime === null) {
                startTime = time;
            }
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) {
                currentPosition = targetPosition;
            }
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = "hidden";
                swiper.wrapperEl.style.scrollSnapType = "";
                setTimeout(() => {
                    swiper.wrapperEl.style.overflow = "";
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                });
                window2.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
        };
        animate();
    }

    function elementChildren(element, selector) {
        if (selector === void 0) {
            selector = "";
        }
        return [...element.children].filter((el) => el.matches(selector));
    }

    function showWarning(text) {
        try {
            console.warn(text);
            return;
        } catch (err) {}
    }

    function createElement(tag, classes2) {
        if (classes2 === void 0) {
            classes2 = [];
        }
        const el = document.createElement(tag);
        el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
        return el;
    }

    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling;
            if (selector) {
                if (prev.matches(selector))
                    prevEls.push(prev);
            } else
                prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }

    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling;
            if (selector) {
                if (next.matches(selector))
                    nextEls.push(next);
            } else
                nextEls.push(next);
            el = next;
        }
        return nextEls;
    }

    function elementStyle(el, prop) {
        const window2 = getWindow();
        return window2.getComputedStyle(el, null).getPropertyValue(prop);
    }

    function elementIndex(el) {
        let child = el;
        let i6;
        if (child) {
            i6 = 0;
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1)
                    i6 += 1;
            }
            return i6;
        }
        return void 0;
    }

    function elementParents(el, selector) {
        const parents = [];
        let parent = el.parentElement;
        while (parent) {
            if (selector) {
                if (parent.matches(selector))
                    parents.push(parent);
            } else {
                parents.push(parent);
            }
            parent = parent.parentElement;
        }
        return parents;
    }

    function elementOuterSize(el, size, includeMargins) {
        const window2 = getWindow();
        if (includeMargins) {
            return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
        }
        return el.offsetWidth;
    }

    function makeElementsArray(el) {
        return (Array.isArray(el) ? el : [el]).filter((e5) => !!e5);
    }

    // node_modules/swiper/shared/swiper-core.mjs
    var support;

    function calcSupport() {
        const window2 = getWindow();
        const document2 = getDocument();
        return {
            smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
            touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
        };
    }

    function getSupport() {
        if (!support) {
            support = calcSupport();
        }
        return support;
    }
    var deviceCached;

    function calcDevice(_temp) {
        let {
            userAgent
        } = _temp === void 0 ? {} : _temp;
        const support2 = getSupport();
        const window2 = getWindow();
        const platform = window2.navigator.platform;
        const ua = userAgent || window2.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window2.screen.width;
        const screenHeight = window2.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === "Win32";
        let macos = platform === "MacIntel";
        const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
        if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad)
                ipad = [0, 1, "13_0_0"];
            macos = false;
        }
        if (android && !windows) {
            device.os = "android";
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = "ios";
            device.ios = true;
        }
        return device;
    }

    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }
        if (!deviceCached) {
            deviceCached = calcDevice(overrides);
        }
        return deviceCached;
    }
    var browser;

    function calcBrowser() {
        const window2 = getWindow();
        const device = getDevice();
        let needPerspectiveFix = false;

        function isSafari3() {
            const ua = window2.navigator.userAgent.toLowerCase();
            return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
        }
        if (isSafari3()) {
            const ua = String(window2.navigator.userAgent);
            if (ua.includes("Version/")) {
                const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
        const isSafariBrowser = isSafari3();
        const need3dFix = isSafariBrowser || isWebView && device.ios;
        return {
            isSafari: needPerspectiveFix || isSafariBrowser,
            needPerspectiveFix,
            need3dFix,
            isWebView
        };
    }

    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }
        return browser;
    }

    function Resize(_ref) {
        let {
            swiper,
            on,
            emit
        } = _ref;
        const window2 = getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized)
                return;
            emit("beforeResize");
            emit("resize");
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized)
                return;
            observer = new ResizeObserver((entries) => {
                animationFrame = window2.requestAnimationFrame(() => {
                    const {
                        width,
                        height
                    } = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach((_ref2) => {
                        let {
                            contentBoxSize,
                            contentRect,
                            target
                        } = _ref2;
                        if (target && target !== swiper.el)
                            return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });
                    if (newWidth !== width || newHeight !== height) {
                        resizeHandler();
                    }
                });
            });
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) {
                window2.cancelAnimationFrame(animationFrame);
            }
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized)
                return;
            emit("orientationchange");
        };
        on("init", () => {
            if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
                createObserver();
                return;
            }
            window2.addEventListener("resize", resizeHandler);
            window2.addEventListener("orientationchange", orientationChangeHandler);
        });
        on("destroy", () => {
            removeObserver();
            window2.removeEventListener("resize", resizeHandler);
            window2.removeEventListener("orientationchange", orientationChangeHandler);
        });
    }

    function Observer(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const observers = [];
        const window2 = getWindow();
        const attach = function(target, options) {
            if (options === void 0) {
                options = {};
            }
            const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
            const observer = new ObserverFunc((mutations) => {
                if (swiper.__preventObserver__)
                    return;
                if (mutations.length === 1) {
                    emit("observerUpdate", mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate2() {
                    emit("observerUpdate", mutations[0]);
                };
                if (window2.requestAnimationFrame) {
                    window2.requestAnimationFrame(observerUpdate);
                } else {
                    window2.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                childList: typeof options.childList === "undefined" ? true : options.childList,
                characterData: typeof options.characterData === "undefined" ? true : options.characterData
            });
            observers.push(observer);
        };
        const init2 = () => {
            if (!swiper.params.observer)
                return;
            if (swiper.params.observeParents) {
                const containerParents = elementParents(swiper.hostEl);
                for (let i6 = 0; i6 < containerParents.length; i6 += 1) {
                    attach(containerParents[i6]);
                }
            }
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach((observer) => {
                observer.disconnect();
            });
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on("init", init2);
        on("destroy", destroy);
    }
    var eventsEmitter = {
        on(events2, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (typeof handler !== "function")
                return self;
            const method = priority ? "unshift" : "push";
            events2.split(" ").forEach((event2) => {
                if (!self.eventsListeners[event2])
                    self.eventsListeners[event2] = [];
                self.eventsListeners[event2][method](handler);
            });
            return self;
        },
        once(events2, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (typeof handler !== "function")
                return self;

            function onceHandler() {
                self.off(events2, onceHandler);
                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events2, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (typeof handler !== "function")
                return self;
            const method = priority ? "unshift" : "push";
            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (!self.eventsAnyListeners)
                return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }
            return self;
        },
        off(events2, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (!self.eventsListeners)
                return self;
            events2.split(" ").forEach((event2) => {
                if (typeof handler === "undefined") {
                    self.eventsListeners[event2] = [];
                } else if (self.eventsListeners[event2]) {
                    self.eventsListeners[event2].forEach((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event2].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed)
                return self;
            if (!self.eventsListeners)
                return self;
            let events2;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            if (typeof args[0] === "string" || Array.isArray(args[0])) {
                events2 = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events2 = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
            eventsArray.forEach((event2) => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                    self.eventsAnyListeners.forEach((eventHandler) => {
                        eventHandler.apply(context, [event2, ...data]);
                    });
                }
                if (self.eventsListeners && self.eventsListeners[event2]) {
                    self.eventsListeners[event2].forEach((eventHandler) => {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = el.clientWidth;
        }
        if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
            height = swiper.params.height;
        } else {
            height = el.clientHeight;
        }
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        }
        width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
        height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
        if (Number.isNaN(width))
            width = 0;
        if (Number.isNaN(height))
            height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        const swiper = this;

        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {
            wrapperEl,
            slidesEl,
            size: swiperSize,
            rtlTranslate: rtl,
            wrongRTL
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === "function") {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === "function") {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === "undefined") {
            return;
        }
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
        } else if (typeof spaceBetween === "string") {
            spaceBetween = parseFloat(spaceBetween);
        }
        swiper.virtualSize = -spaceBetween;
        slides.forEach((slideEl) => {
            if (rtl) {
                slideEl.style.marginLeft = "";
            } else {
                slideEl.style.marginRight = "";
            }
            slideEl.style.marginBottom = "";
            slideEl.style.marginTop = "";
        });
        if (params.centeredSlides && params.cssMode) {
            setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
            setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) {
            swiper.grid.initSlides(slides);
        } else if (swiper.grid) {
            swiper.grid.unsetSlides();
        }
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
            return typeof params.breakpoints[key].slidesPerView !== "undefined";
        }).length > 0;
        for (let i6 = 0; i6 < slidesLength; i6 += 1) {
            slideSize = 0;
            let slide2;
            if (slides[i6])
                slide2 = slides[i6];
            if (gridEnabled) {
                swiper.grid.updateSlide(i6, slide2, slides);
            }
            if (slides[i6] && elementStyle(slide2, "display") === "none")
                continue;
            if (params.slidesPerView === "auto") {
                if (shouldResetSlideSize) {
                    slides[i6].style[swiper.getDirectionLabel("width")] = ``;
                }
                const slideStyles = getComputedStyle(slide2);
                const currentTransform = slide2.style.transform;
                const currentWebKitTransform = slide2.style.webkitTransform;
                if (currentTransform) {
                    slide2.style.transform = "none";
                }
                if (currentWebKitTransform) {
                    slide2.style.webkitTransform = "none";
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
                } else {
                    const width = getDirectionPropertyValue(slideStyles, "width");
                    const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                    const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                    const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                    const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                    const boxSizing = slideStyles.getPropertyValue("box-sizing");
                    if (boxSizing && boxSizing === "border-box") {
                        slideSize = width + marginLeft + marginRight;
                    } else {
                        const {
                            clientWidth,
                            offsetWidth
                        } = slide2;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) {
                    slide2.style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide2.style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths)
                    slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths)
                    slideSize = Math.floor(slideSize);
                if (slides[i6]) {
                    slides[i6].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
            }
            if (slides[i6]) {
                slides[i6].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i6 !== 0)
                    slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i6 === 0)
                    slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1e3)
                    slidePosition = 0;
                if (params.roundLengths)
                    slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0)
                    snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths)
                    slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
                    snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
            wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (params.setWrapperSize) {
            wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid);
        }
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i6 = 0; i6 < snapGrid.length; i6 += 1) {
                let slidesGridItem = snapGrid[i6];
                if (params.roundLengths)
                    slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i6] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i6 = 0; i6 < groups; i6 += 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
            }
            for (let i6 = 0; i6 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i6 += 1) {
                if (params.slidesPerGroup === 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                }
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0)
            snapGrid = [0];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
            slides.filter((_4, slideIndex) => {
                if (!params.cssMode || params.loop)
                    return true;
                if (slideIndex === slides.length - 1) {
                    return false;
                }
                return true;
            }).forEach((slideEl) => {
                slideEl.style[key] = `${spaceBetween}px`;
            });
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue) => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map((snap) => {
                if (snap <= 0)
                    return -offsetBefore;
                if (snap > maxSnap)
                    return maxSnap + offsetAfter;
                return snap;
            });
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach((slideSizeValue) => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            if (allSlidesSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
            setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map((v3) => v3 + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map((v3) => v3 + addToSlidesGrid);
        }
        if (slidesLength !== previousSlidesLength) {
            swiper.emit("slidesLengthChange");
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow)
                swiper.checkOverflow();
            swiper.emit("snapGridLengthChange");
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit("slidesGridLengthChange");
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        swiper.emit("slidesUpdated");
        if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded)
                    swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) {
                swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
    }

    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i6;
        if (typeof speed === "number") {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        const getSlideByIndex = (index) => {
            if (isVirtual) {
                return swiper.slides[swiper.getSlideIndexByData(index)];
            }
            return swiper.slides[index];
        };
        if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                (swiper.visibleSlides || []).forEach((slide2) => {
                    activeSlides.push(slide2);
                });
            } else {
                for (i6 = 0; i6 < Math.ceil(swiper.params.slidesPerView); i6 += 1) {
                    const index = swiper.activeIndex + i6;
                    if (index > swiper.slides.length && !isVirtual)
                        break;
                    activeSlides.push(getSlideByIndex(index));
                }
            }
        } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex));
        }
        for (i6 = 0; i6 < activeSlides.length; i6 += 1) {
            if (typeof activeSlides[i6] !== "undefined") {
                const height = activeSlides[i6].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }
        if (newHeight || newHeight === 0)
            swiper.wrapperEl.style.height = `${newHeight}px`;
    }

    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i6 = 0; i6 < slides.length; i6 += 1) {
            slides[i6].swiperSlideOffset = (swiper.isHorizontal() ? slides[i6].offsetLeft : slides[i6].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
    }

    function updateSlidesProgress(translate2) {
        if (translate2 === void 0) {
            translate2 = this && this.translate || 0;
        }
        const swiper = this;
        const params = swiper.params;
        const {
            slides,
            rtlTranslate: rtl,
            snapGrid
        } = swiper;
        if (slides.length === 0)
            return;
        if (typeof slides[0].swiperSlideOffset === "undefined")
            swiper.updateSlidesOffset();
        let offsetCenter = -translate2;
        if (rtl)
            offsetCenter = translate2;
        slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
        });
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
        } else if (typeof spaceBetween === "string") {
            spaceBetween = parseFloat(spaceBetween);
        }
        for (let i6 = 0; i6 < slides.length; i6 += 1) {
            const slide2 = slides[i6];
            let slideOffset = slide2.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) {
                slideOffset -= slides[0].swiperSlideOffset;
            }
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i6];
            const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i6];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide2);
                swiper.visibleSlidesIndexes.push(i6);
                slides[i6].classList.add(params.slideVisibleClass);
            }
            if (isFullyVisible) {
                slides[i6].classList.add(params.slideFullyVisibleClass);
            }
            slide2.progress = rtl ? -slideProgress : slideProgress;
            slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }

    function updateProgress(translate2) {
        const swiper = this;
        if (typeof translate2 === "undefined") {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {
            progress,
            isBeginning,
            isEnd,
            progressLoop
        } = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate2 - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded)
                progress = 0;
            if (isEndRounded)
                progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate2);
            if (translateAbs >= firstSlideTranslate) {
                progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
            } else {
                progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            }
            if (progressLoop > 1)
                progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
            swiper.updateSlidesProgress(translate2);
        if (isBeginning && !wasBeginning) {
            swiper.emit("reachBeginning toEdge");
        }
        if (isEnd && !wasEnd) {
            swiper.emit("reachEnd toEdge");
        }
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit("fromEdge");
        }
        swiper.emit("progress", progress);
    }

    function updateSlidesClasses() {
        const swiper = this;
        const {
            slides,
            params,
            slidesEl,
            activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const getFilteredSlide = (selector) => {
            return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        };
        slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
        });
        let activeSlide;
        let prevSlide;
        let nextSlide;
        if (isVirtual) {
            if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0)
                    slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length)
                    slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else {
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
            }
        } else {
            if (gridEnabled) {
                activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
                nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
                prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
            } else {
                activeSlide = slides[activeIndex];
            }
        }
        if (activeSlide) {
            activeSlide.classList.add(params.slideActiveClass);
            if (gridEnabled) {
                if (nextSlide) {
                    nextSlide.classList.add(params.slideNextClass);
                }
                if (prevSlide) {
                    prevSlide.classList.add(params.slidePrevClass);
                }
            } else {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) {
                    nextSlide = slides[0];
                }
                if (nextSlide) {
                    nextSlide.classList.add(params.slideNextClass);
                }
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) {
                    prevSlide = slides[slides.length - 1];
                }
                if (prevSlide) {
                    prevSlide.classList.add(params.slidePrevClass);
                }
            }
        }
        swiper.emitSlidesClasses();
    }
    var processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params)
            return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) {
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                } else {
                    requestAnimationFrame(() => {
                        if (slideEl.shadowRoot) {
                            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                            if (lazyEl)
                                lazyEl.remove();
                        }
                    });
                }
            }
            if (lazyEl)
                lazyEl.remove();
        }
    };
    var unlazy = (swiper, index) => {
        if (!swiper.slides[index])
            return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl)
            imageEl.removeAttribute("loading");
    };
    var preload = (swiper) => {
        if (!swiper || swiper.destroyed || !swiper.params)
            return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0)
            return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [activeColumn - amount];
            preloadColumns.push(...Array.from({
                length: amount
            }).map((_4, i6) => {
                return activeColumn + slidesPerView + i6;
            }));
            swiper.slides.forEach((slideEl, i6) => {
                if (preloadColumns.includes(slideEl.column))
                    unlazy(swiper, i6);
            });
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) {
            for (let i6 = activeIndex - amount; i6 <= slideIndexLastInView + amount; i6 += 1) {
                const realIndex = (i6 % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView)
                    unlazy(swiper, realIndex);
            }
        } else {
            for (let i6 = Math.max(activeIndex - amount, 0); i6 <= Math.min(slideIndexLastInView + amount, len - 1); i6 += 1) {
                if (i6 !== activeIndex && (i6 > slideIndexLastInView || i6 < activeIndex)) {
                    unlazy(swiper, i6);
                }
            }
        }
    };

    function getActiveIndexByTranslate(swiper) {
        const {
            slidesGrid,
            params
        } = swiper;
        const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i6 = 0; i6 < slidesGrid.length; i6 += 1) {
            if (typeof slidesGrid[i6 + 1] !== "undefined") {
                if (translate2 >= slidesGrid[i6] && translate2 < slidesGrid[i6 + 1] - (slidesGrid[i6 + 1] - slidesGrid[i6]) / 2) {
                    activeIndex = i6;
                } else if (translate2 >= slidesGrid[i6] && translate2 < slidesGrid[i6 + 1]) {
                    activeIndex = i6 + 1;
                }
            } else if (translate2 >= slidesGrid[i6]) {
                activeIndex = i6;
            }
        }
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === "undefined")
                activeIndex = 0;
        }
        return activeIndex;
    }

    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex
        } = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = (aIndex) => {
            let realIndex2 = aIndex - swiper.virtual.slidesBefore;
            if (realIndex2 < 0) {
                realIndex2 = swiper.virtual.slides.length + realIndex2;
            }
            if (realIndex2 >= swiper.virtual.slides.length) {
                realIndex2 -= swiper.virtual.slides.length;
            }
            return realIndex2;
        };
        if (typeof activeIndex === "undefined") {
            activeIndex = getActiveIndexByTranslate(swiper);
        }
        if (snapGrid.indexOf(translate2) >= 0) {
            snapIndex = snapGrid.indexOf(translate2);
        } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length)
            snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex && !swiper.params.loop) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit("snapIndexChange");
            }
            return;
        }
        if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
            swiper.realIndex = getVirtualRealIndex(activeIndex);
            return;
        }
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) {
            realIndex = getVirtualRealIndex(activeIndex);
        } else if (gridEnabled) {
            const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
            let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
            if (Number.isNaN(activeSlideIndex)) {
                activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
            }
            realIndex = Math.floor(activeSlideIndex / params.grid.rows);
        } else if (swiper.slides[activeIndex]) {
            const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
            if (slideIndex) {
                realIndex = parseInt(slideIndex, 10);
            } else {
                realIndex = activeIndex;
            }
        } else {
            realIndex = activeIndex;
        }
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) {
            preload(swiper);
        }
        swiper.emit("activeIndexChange");
        swiper.emit("snapIndexChange");
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            if (previousRealIndex !== realIndex) {
                swiper.emit("realIndexChange");
            }
            swiper.emit("slideChange");
        }
    }

    function updateClickedSlide(el, path) {
        const swiper = this;
        const params = swiper.params;
        let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
        if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
            [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
                if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
                    slide2 = pathEl;
                }
            });
        }
        let slideFound = false;
        let slideIndex;
        if (slide2) {
            for (let i6 = 0; i6 < swiper.slides.length; i6 += 1) {
                if (swiper.slides[i6] === slide2) {
                    slideFound = true;
                    slideIndex = i6;
                    break;
                }
            }
        }
        if (slide2 && slideFound) {
            swiper.clickedSlide = slide2;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
            } else {
                swiper.clickedIndex = slideIndex;
            }
        } else {
            swiper.clickedSlide = void 0;
            swiper.clickedIndex = void 0;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }
    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? "x" : "y";
        }
        const swiper = this;
        const {
            params,
            rtlTranslate: rtl,
            translate: translate2,
            wrapperEl
        } = swiper;
        if (params.virtualTranslate) {
            return rtl ? -translate2 : translate2;
        }
        if (params.cssMode) {
            return translate2;
        }
        let currentTranslate = getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl)
            currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate2, byController) {
        const swiper = this;
        const {
            rtlTranslate: rtl,
            params,
            wrapperEl,
            progress
        } = swiper;
        let x3 = 0;
        let y4 = 0;
        const z2 = 0;
        if (swiper.isHorizontal()) {
            x3 = rtl ? -translate2 : translate2;
        } else {
            y4 = translate2;
        }
        if (params.roundLengths) {
            x3 = Math.floor(x3);
            y4 = Math.floor(y4);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x3 : y4;
        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x3 : -y4;
        } else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) {
                x3 -= swiper.cssOverflowAdjustment();
            } else {
                y4 -= swiper.cssOverflowAdjustment();
            }
            wrapperEl.style.transform = `translate3d(${x3}px, ${y4}px, ${z2}px)`;
        }
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate2);
        }
        swiper.emit("setTranslate", swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
        if (translate2 === void 0) {
            translate2 = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (translateBounds === void 0) {
            translateBounds = true;
        }
        const swiper = this;
        const {
            params,
            wrapperEl
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        const minTranslate2 = swiper.minTranslate();
        const maxTranslate2 = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate2 > minTranslate2)
            newTranslate = minTranslate2;
        else if (translateBounds && translate2 < maxTranslate2)
            newTranslate = maxTranslate2;
        else
            newTranslate = translate2;
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) {
                wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: -newTranslate,
                    behavior: "smooth"
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionEnd");
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.emit("transitionStart");
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e5) {
                        if (!swiper || swiper.destroyed)
                            return;
                        if (e5.target !== this)
                            return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) {
                            swiper.emit("transitionEnd");
                        }
                    };
                }
                swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }
    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };

    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
        }
        swiper.emit("setTransition", duration, byController);
    }

    function transitionEmit(_ref) {
        let {
            swiper,
            runCallbacks,
            direction,
            step
        } = _ref;
        const {
            activeIndex,
            previousIndex
        } = swiper;
        let dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex)
                dir = "next";
            else if (activeIndex < previousIndex)
                dir = "prev";
            else
                dir = "reset";
        }
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === "reset") {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === "next") {
                swiper.emit(`slideNextTransition${step}`);
            } else {
                swiper.emit(`slidePrevTransition${step}`);
            }
        }
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        if (params.cssMode)
            return;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "Start"
        });
    }

    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.animating = false;
        if (params.cssMode)
            return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: "End"
        });
    }
    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === "string") {
            index = parseInt(index, 10);
        }
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0)
            slideIndex = 0;
        const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial || swiper.destroyed) {
            return false;
        }
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length)
            snapIndex = snapGrid.length - 1;
        const translate2 = -snapGrid[snapIndex];
        if (params.normalizeSlideIndex) {
            for (let i6 = 0; i6 < slidesGrid.length; i6 += 1) {
                const normalizedTranslate = -Math.floor(translate2 * 100);
                const normalizedGrid = Math.floor(slidesGrid[i6] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i6 + 1] * 100);
                if (typeof slidesGrid[i6 + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                        slideIndex = i6;
                    } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                        slideIndex = i6 + 1;
                    }
                } else if (normalizedTranslate >= normalizedGrid) {
                    slideIndex = i6;
                }
            }
        }
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) {
            swiper.emit("beforeSlideChangeStart");
        }
        swiper.updateProgress(translate2);
        let direction;
        if (slideIndex > activeIndex)
            direction = "next";
        else if (slideIndex < activeIndex)
            direction = "prev";
        else
            direction = "reset";
        if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
            swiper.updateActiveIndex(slideIndex);
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== "slide") {
                swiper.setTranslate(translate2);
            }
            if (direction !== "reset") {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t3 = rtl ? translate2 : -translate2;
            if (speed === 0) {
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = "none";
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame(() => {
                        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t3;
                    });
                } else {
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t3;
                }
                if (isVirtual) {
                    requestAnimationFrame(() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    });
                }
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t3,
                        side: isH ? "left" : "top"
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? "left" : "top"]: t3,
                    behavior: "smooth"
                });
            }
            return true;
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate2);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) {
            swiper.transitionEnd(runCallbacks, direction);
        } else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e5) {
                    if (!swiper || swiper.destroyed)
                        return;
                    if (e5.target !== this)
                        return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
            }
            swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === "string") {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        if (swiper.destroyed)
            return;
        const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
        let newIndex = index;
        if (swiper.params.loop) {
            if (swiper.virtual && swiper.params.virtual.enabled) {
                newIndex = newIndex + swiper.virtual.slidesBefore;
            } else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
                } else {
                    targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                }
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {
                    centeredSlides
                } = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") {
                    slidesPerView = swiper.slidesPerViewDynamic();
                } else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) {
                        slidesPerView = slidesPerView + 1;
                    }
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) {
                    needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                }
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
                } else {
                    newIndex = swiper.getSlideIndexByData(newIndex);
                }
            }
        }
        requestAnimationFrame(() => {
            swiper.slideTo(newIndex, speed, runCallbacks, internal);
        });
        return swiper;
    }

    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            enabled,
            params,
            animating
        } = swiper;
        if (!enabled || swiper.destroyed)
            return swiper;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
        }
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding)
                return false;
            swiper.loopFix({
                direction: "next"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
            if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                requestAnimationFrame(() => {
                    swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                });
                return true;
            }
        }
        if (params.rewind && swiper.isEnd) {
            return swiper.slideTo(0, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params,
            snapGrid,
            slidesGrid,
            rtlTranslate,
            enabled,
            animating
        } = swiper;
        if (!enabled || swiper.destroyed)
            return swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding)
                return false;
            swiper.loopFix({
                direction: "prev"
            });
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0)
                return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate2);
        const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === "undefined" && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex) => {
                if (normalizedTranslate >= snap) {
                    prevSnapIndex = snapIndex;
                }
            });
            if (typeof prevSnapIndex !== "undefined") {
                prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
        }
        let prevIndex = 0;
        if (typeof prevSnap !== "undefined") {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0)
                prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
            requestAnimationFrame(() => {
                swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            });
            return true;
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        if (swiper.destroyed)
            return;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (threshold === void 0) {
            threshold = 0.5;
        }
        const swiper = this;
        if (swiper.destroyed)
            return;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate2 >= swiper.snapGrid[snapIndex]) {
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        const swiper = this;
        if (swiper.destroyed)
            return;
        const {
            params,
            slidesEl
        } = swiper;
        const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        if (params.loop) {
            if (swiper.animating)
                return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    nextTick(() => {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                nextTick(() => {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }
    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };

    function loopCreate(slideRealIndex) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
            return;
        const initSlides = () => {
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            });
        };
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
        const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
        const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
        const addBlankSlides = (amountOfSlides) => {
            for (let i6 = 0; i6 < amountOfSlides; i6 += 1) {
                const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
                swiper.slidesEl.append(slideEl);
            }
        };
        if (shouldFillGroup) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else {
                showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            }
            initSlides();
        } else if (shouldFillGrid) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else {
                showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            }
            initSlides();
        } else {
            initSlides();
        }
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? void 0 : "next"
        });
    }

    function loopFix(_temp) {
        let {
            slideRealIndex,
            slideTo: slideTo2 = true,
            direction,
            setTranslate: setTranslate2,
            activeSlideIndex,
            byController,
            byMousewheel
        } = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop)
            return;
        swiper.emit("beforeLoopFix");
        const {
            slides,
            allowSlidePrev,
            allowSlideNext,
            slidesEl,
            params
        } = swiper;
        const {
            centeredSlides
        } = params;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo2) {
                if (!params.centeredSlides && swiper.snapIndex === 0) {
                    swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
                } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
                    swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
                } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                    swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
            return;
        }
        let slidesPerView = params.slidesPerView;
        if (slidesPerView === "auto") {
            slidesPerView = swiper.slidesPerViewDynamic();
        } else {
            slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
            if (centeredSlides && slidesPerView % 2 === 0) {
                slidesPerView = slidesPerView + 1;
            }
        }
        const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
        let loopedSlides = slidesPerGroup;
        if (loopedSlides % slidesPerGroup !== 0) {
            loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
        }
        loopedSlides += params.loopAdditionalSlides;
        swiper.loopedSlides = loopedSlides;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        if (slides.length < slidesPerView + loopedSlides) {
            showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
        } else if (gridEnabled && params.grid.fill === "row") {
            showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        }
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        let activeIndex = swiper.activeIndex;
        if (typeof activeSlideIndex === "undefined") {
            activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
        } else {
            activeIndex = activeSlideIndex;
        }
        const isNext = direction === "next" || !direction;
        const isPrev = direction === "prev" || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
        const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
        const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
        if (activeColIndexWithShift < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
            for (let i6 = 0; i6 < loopedSlides - activeColIndexWithShift; i6 += 1) {
                const index = i6 - Math.floor(i6 / cols) * cols;
                if (gridEnabled) {
                    const colIndexToPrepend = cols - index - 1;
                    for (let i7 = slides.length - 1; i7 >= 0; i7 -= 1) {
                        if (slides[i7].column === colIndexToPrepend)
                            prependSlidesIndexes.push(i7);
                    }
                } else {
                    prependSlidesIndexes.push(cols - index - 1);
                }
            }
        } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
            slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
            for (let i6 = 0; i6 < slidesAppended; i6 += 1) {
                const index = i6 - Math.floor(i6 / cols) * cols;
                if (gridEnabled) {
                    slides.forEach((slide2, slideIndex) => {
                        if (slide2.column === index)
                            appendSlidesIndexes.push(slideIndex);
                    });
                } else {
                    appendSlidesIndexes.push(index);
                }
            }
        }
        swiper.__preventObserver__ = true;
        requestAnimationFrame(() => {
            swiper.__preventObserver__ = false;
        });
        if (isPrev) {
            prependSlidesIndexes.forEach((index) => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            });
        }
        if (isNext) {
            appendSlidesIndexes.forEach((index) => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            });
        }
        swiper.recalcSlides();
        if (params.slidesPerView === "auto") {
            swiper.updateSlides();
        } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
            swiper.slides.forEach((slide2, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
            });
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (slideTo2) {
            if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate2) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    if (setTranslate2) {
                        const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                        swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate2) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
                }
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate: setTranslate2,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) {
                swiper.controller.control.forEach((c5) => {
                    if (!c5.destroyed && c5.params.loop)
                        c5.loopFix(__spreadProps(__spreadValues({}, loopParams), {
                            slideTo: c5.params.slidesPerView === params.slidesPerView ? slideTo2 : false
                        }));
                });
            } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
                swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
                }));
            }
        }
        swiper.emit("loopFix");
    }

    function loopDestroy() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
            return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach((slideEl) => {
            const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
            newSlidesOrder[index] = slideEl;
        });
        swiper.slides.forEach((slideEl) => {
            slideEl.removeAttribute("data-swiper-slide-index");
        });
        newSlidesOrder.forEach((slideEl) => {
            slidesEl.append(slideEl);
        });
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }
    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };

    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
            return;
        const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        el.style.cursor = "move";
        el.style.cursor = moving ? "grabbing" : "grab";
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }

    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }
    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };

    function closestElement(selector, base) {
        if (base === void 0) {
            base = this;
        }

        function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow())
                return null;
            if (el.assignedSlot)
                el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) {
                return null;
            }
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }

    function preventEdgeSwipe(swiper, event2, startX) {
        const window2 = getWindow();
        const {
            params
        } = swiper;
        const edgeSwipeDetection = params.edgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === "prevent") {
                event2.preventDefault();
                return true;
            }
            return false;
        }
        return true;
    }

    function onTouchStart(event2) {
        const swiper = this;
        const document2 = getDocument();
        let e5 = event2;
        if (e5.originalEvent)
            e5 = e5.originalEvent;
        const data = swiper.touchEventsData;
        if (e5.type === "pointerdown") {
            if (data.pointerId !== null && data.pointerId !== e5.pointerId) {
                return;
            }
            data.pointerId = e5.pointerId;
        } else if (e5.type === "touchstart" && e5.targetTouches.length === 1) {
            data.touchId = e5.targetTouches[0].identifier;
        }
        if (e5.type === "touchstart") {
            preventEdgeSwipe(swiper, e5, e5.targetTouches[0].pageX);
            return;
        }
        const {
            params,
            touches,
            enabled
        } = swiper;
        if (!enabled)
            return;
        if (!params.simulateTouch && e5.pointerType === "mouse")
            return;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix();
        }
        let targetEl = e5.target;
        if (params.touchEventsTarget === "wrapper") {
            if (!swiper.wrapperEl.contains(targetEl))
                return;
        }
        if ("which" in e5 && e5.which === 3)
            return;
        if ("button" in e5 && e5.button > 0)
            return;
        if (data.isTouched && data.isMoved)
            return;
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
        const eventPath = e5.composedPath ? e5.composedPath() : e5.path;
        if (swipingClassHasValue && e5.target && e5.target.shadowRoot && eventPath) {
            targetEl = eventPath[0];
        }
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e5.target && e5.target.shadowRoot);
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!targetEl.closest(params.swipeHandler))
                return;
        }
        touches.currentX = e5.pageX;
        touches.currentY = e5.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;
        if (!preventEdgeSwipe(swiper, e5, startX)) {
            return;
        }
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: void 0,
            startMoving: void 0
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = void 0;
        if (params.threshold > 0)
            data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === "SELECT") {
                data.isTouched = false;
            }
        }
        if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
            document2.activeElement.blur();
        }
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
            e5.preventDefault();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
            swiper.freeMode.onTouchStart();
        }
        swiper.emit("touchStart", e5);
    }

    function onTouchMove(event2) {
        const document2 = getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            enabled
        } = swiper;
        if (!enabled)
            return;
        if (!params.simulateTouch && event2.pointerType === "mouse")
            return;
        let e5 = event2;
        if (e5.originalEvent)
            e5 = e5.originalEvent;
        if (e5.type === "pointermove") {
            if (data.touchId !== null)
                return;
            const id = e5.pointerId;
            if (id !== data.pointerId)
                return;
        }
        let targetTouch;
        if (e5.type === "touchmove") {
            targetTouch = [...e5.changedTouches].filter((t3) => t3.identifier === data.touchId)[0];
            if (!targetTouch || targetTouch.identifier !== data.touchId)
                return;
        } else {
            targetTouch = e5;
        }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit("touchMoveOpposite", e5);
            }
            return;
        }
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e5.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e5.target.matches(data.focusableElements)) {
                swiper.allowClick = false;
            }
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }
        if (document2.activeElement) {
            if (e5.target === document2.activeElement && e5.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit("touchMove", e5);
        }
        touches.previousX = touches.currentX;
        touches.previousY = touches.currentY;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper.params.threshold)
            return;
        if (typeof data.isScrolling === "undefined") {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit("touchMoveOpposite", e5);
        }
        if (typeof data.startMoving === "undefined") {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        if (!params.cssMode && e5.cancelable) {
            e5.preventDefault();
        }
        if (params.touchMoveStopPropagation && !params.nested) {
            e5.stopPropagation();
        }
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? "prev" : "next";
        swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
        const isLoop = swiper.params.loop && !params.cssMode;
        const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
        if (!data.isMoved) {
            if (isLoop && allowLoopFix) {
                swiper.loopFix({
                    direction: swiper.swipeDirection
                });
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent("transitionend", {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit("sliderFirstMove", e5);
        }
        let loopFixed;
        ( /* @__PURE__ */ new Date()).getTime();
        if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
                startTranslate: data.currentTranslate
            });
            data.loopSwapReset = true;
            data.startTranslate = data.currentTranslate;
            return;
        }
        swiper.emit("sliderMove", e5);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if (diff > 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
                swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
            }
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.minTranslate() - 1 + __pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
                }
            }
        } else if (diff < 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
                swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
            }
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.maxTranslate() + 1 - __pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
                }
            }
        }
        if (disableParentSwiper) {
            e5.preventedByNestedSwiper = true;
        }
        if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate;
        }
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger || params.cssMode)
            return;
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove();
        }
        swiper.updateProgress(data.currentTranslate);
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event2) {
        const swiper = this;
        const data = swiper.touchEventsData;
        let e5 = event2;
        if (e5.originalEvent)
            e5 = e5.originalEvent;
        let targetTouch;
        const isTouchEvent = e5.type === "touchend" || e5.type === "touchcancel";
        if (!isTouchEvent) {
            if (data.touchId !== null)
                return;
            if (e5.pointerId !== data.pointerId)
                return;
            targetTouch = e5;
        } else {
            targetTouch = [...e5.changedTouches].filter((t3) => t3.identifier === data.touchId)[0];
            if (!targetTouch || targetTouch.identifier !== data.touchId)
                return;
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e5.type)) {
            const proceed = ["pointercancel", "contextmenu"].includes(e5.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) {
                return;
            }
        }
        data.pointerId = null;
        data.touchId = null;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            slidesGrid,
            enabled
        } = swiper;
        if (!enabled)
            return;
        if (!params.simulateTouch && e5.pointerType === "mouse")
            return;
        if (data.allowTouchCallbacks) {
            swiper.emit("touchEnd", e5);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (swiper.allowClick) {
            const pathTree = e5.path || e5.composedPath && e5.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e5.target, pathTree);
            swiper.emit("tap click", e5);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit("doubleTap doubleClick", e5);
            }
        }
        data.lastClickTime = now();
        nextTick(() => {
            if (!swiper.destroyed)
                swiper.allowClick = true;
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.cssMode) {
            return;
        }
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }
        const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i6 = 0; i6 < slidesGrid.length; i6 += i6 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment2 = i6 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i6 + increment2] !== "undefined") {
                if (swipeToLast || currentPos >= slidesGrid[i6] && currentPos < slidesGrid[i6 + increment2]) {
                    stopIndex = i6;
                    groupSize = slidesGrid[i6 + increment2] - slidesGrid[i6];
                }
            } else if (swipeToLast || currentPos >= slidesGrid[i6]) {
                stopIndex = i6;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) {
            if (swiper.isBeginning) {
                rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            } else if (swiper.isEnd) {
                rewindFirstIndex = 0;
            }
        }
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === "next") {
                if (ratio >= params.longSwipesRatio)
                    swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
                else
                    swiper.slideTo(stopIndex);
            }
            if (swiper.swipeDirection === "prev") {
                if (ratio > 1 - params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + increment);
                } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                    swiper.slideTo(rewindLastIndex);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e5.target === swiper.navigation.nextEl || e5.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === "next") {
                    swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                }
                if (swiper.swipeDirection === "prev") {
                    swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                }
            } else if (e5.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        const swiper = this;
        const {
            params,
            el
        } = swiper;
        if (el && el.offsetWidth === 0)
            return;
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        const {
            allowSlideNext,
            allowSlidePrev,
            snapGrid
        } = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            if (swiper.params.loop && !isVirtual) {
                swiper.slideToLoop(swiper.realIndex, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout(() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                    swiper.autoplay.resume();
                }
            }, 500);
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e5) {
        const swiper = this;
        if (!swiper.enabled)
            return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks)
                e5.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e5.stopPropagation();
                e5.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        const swiper = this;
        const {
            wrapperEl,
            rtlTranslate,
            enabled
        } = swiper;
        if (!enabled)
            return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft;
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        }
        if (swiper.translate === 0)
            swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }
        swiper.emit("setTranslate", swiper.translate, false);
    }

    function onLoad(e5) {
        const swiper = this;
        processLazyPreloader(swiper, e5.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
            return;
        }
        swiper.update();
    }

    function onDocumentTouchStart() {
        const swiper = this;
        if (swiper.documentTouchHandlerProceeded)
            return;
        swiper.documentTouchHandlerProceeded = true;
        if (swiper.params.touchReleaseOnEdges) {
            swiper.el.style.touchAction = "auto";
        }
    }
    var events = (swiper, method) => {
        const document2 = getDocument();
        const {
            params,
            el,
            wrapperEl,
            device
        } = swiper;
        const capture = !!params.nested;
        const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
        const swiperMethod = method;
        document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
            passive: false,
            capture
        });
        el[domMethod]("touchstart", swiper.onTouchStart, {
            passive: false
        });
        el[domMethod]("pointerdown", swiper.onTouchStart, {
            passive: false
        });
        document2[domMethod]("touchmove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document2[domMethod]("pointermove", swiper.onTouchMove, {
            passive: false,
            capture
        });
        document2[domMethod]("touchend", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("pointerup", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("pointercancel", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("touchcancel", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("pointerout", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("pointerleave", swiper.onTouchEnd, {
            passive: true
        });
        document2[domMethod]("contextmenu", swiper.onTouchEnd, {
            passive: true
        });
        if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]("click", swiper.onClick, true);
        }
        if (params.cssMode) {
            wrapperEl[domMethod]("scroll", swiper.onScroll);
        }
        if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
        } else {
            swiper[swiperMethod]("observerUpdate", onResize, true);
        }
        el[domMethod]("load", swiper.onLoad, {
            capture: true
        });
    };

    function attachEvents() {
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        events(swiper, "on");
    }

    function detachEvents() {
        const swiper = this;
        events(swiper, "off");
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };
    var isGridEnabled = (swiper, params) => {
        return swiper.grid && params.grid && params.grid.rows > 1;
    };

    function setBreakpoint() {
        const swiper = this;
        const {
            realIndex,
            initialized,
            params,
            el
        } = swiper;
        const breakpoints2 = params.breakpoints;
        if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
            return;
        const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint)
            return;
        const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }
        ["navigation", "pagination", "scrollbar"].forEach((prop) => {
            if (typeof breakpointParams[prop] === "undefined")
                return;
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) {
                swiper[prop].disable();
            }
            if (!wasModuleEnabled && isModuleEnabled) {
                swiper[prop].enable();
            }
        });
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        const wasLoop = params.loop;
        if (directionChanged && initialized) {
            swiper.changeDirection();
        }
        extend2(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        const hasLoop = swiper.params.loop;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) {
            swiper.disable();
        } else if (!wasEnabled && isEnabled) {
            swiper.enable();
        }
        swiper.currentBreakpoint = breakpoint;
        swiper.emit("_beforeBreakpoint", breakpointParams);
        if (initialized) {
            if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) {
                swiper.loopDestroy();
            }
        }
        swiper.emit("breakpoint", breakpointParams);
    }

    function getBreakpoint(breakpoints2, base, containerEl) {
        if (base === void 0) {
            base = "window";
        }
        if (!breakpoints2 || base === "container" && !containerEl)
            return void 0;
        let breakpoint = false;
        const window2 = getWindow();
        const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints2).map((point) => {
            if (typeof point === "string" && point.indexOf("@") === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        });
        points.sort((a5, b4) => parseInt(a5.value, 10) - parseInt(b4.value, 10));
        for (let i6 = 0; i6 < points.length; i6 += 1) {
            const {
                point,
                value
            } = points[i6];
            if (base === "window") {
                if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
                    breakpoint = point;
                }
            } else if (value <= containerEl.clientWidth) {
                breakpoint = point;
            }
        }
        return breakpoint || "max";
    }
    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };

    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach((item) => {
            if (typeof item === "object") {
                Object.keys(item).forEach((classNames) => {
                    if (item[classNames]) {
                        resultClasses.push(prefix + classNames);
                    }
                });
            } else if (typeof item === "string") {
                resultClasses.push(prefix + item);
            }
        });
        return resultClasses;
    }

    function addClasses() {
        const swiper = this;
        const {
            classNames,
            params,
            rtl,
            el,
            device
        } = swiper;
        const suffixes = prepareClasses(["initialized", params.direction, {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        }, {
            "autoheight": params.autoHeight
        }, {
            "rtl": rtl
        }, {
            "grid": params.grid && params.grid.rows > 1
        }, {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        }, {
            "android": device.android
        }, {
            "ios": device.ios
        }, {
            "css-mode": params.cssMode
        }, {
            "centered": params.cssMode && params.centeredSlides
        }, {
            "watch-progress": params.watchSlidesProgress
        }], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        const swiper = this;
        const {
            el,
            classNames
        } = swiper;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }
    var classes = {
        addClasses,
        removeClasses
    };

    function checkOverflow() {
        const swiper = this;
        const {
            isLocked: wasLocked,
            params
        } = swiper;
        const {
            slidesOffsetBefore
        } = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }
        if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked;
        }
        if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked;
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
        }
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
    }
    var checkOverflow$1 = {
        checkOverflow
    };
    var defaults = {
        init: true,
        direction: "horizontal",
        oneWayMovement: false,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        eventsPrefix: "swiper",
        enabled: true,
        focusableElements: "input, select, option, textarea, button, video, label",
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: "slide",
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: void 0,
        breakpointsBase: "window",
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: true,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // loop
        loop: false,
        loopAddBlankSlides: true,
        loopAdditionalSlides: 0,
        loopPreventsSliding: true,
        // rewind
        rewind: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        // NS
        containerModifierClass: "swiper-",
        // NEW
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) {
                obj = {};
            }
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== "object" || moduleParams === null) {
                extend2(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                    enabled: true
                };
            }
            if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
                params[moduleParamName].auto = true;
            }
            if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
                params[moduleParamName].auto = true;
            }
            if (!(moduleParamName in params && "enabled" in moduleParams)) {
                extend2(allModulesParams, obj);
                return;
            }
            if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
            }
            if (!params[moduleParamName])
                params[moduleParamName] = {
                    enabled: false
                };
            extend2(allModulesParams, obj);
        };
    }
    var prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    var extendedDefaults = {};
    var Swiper = class _Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
                params = args[0];
            } else {
                [el, params] = args;
            }
            if (!params)
                params = {};
            params = extend2({}, params);
            if (el && !params.el)
                params.el = el;
            const document2 = getDocument();
            if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document2.querySelectorAll(params.el).forEach((containerEl) => {
                    const newParams = extend2({}, params, {
                        el: containerEl
                    });
                    swipers.push(new _Swiper(newParams));
                });
                return swipers;
            }
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [...swiper.__modules__];
            if (params.modules && Array.isArray(params.modules)) {
                swiper.modules.push(...params.modules);
            }
            const allModulesParams = {};
            swiper.modules.forEach((mod) => {
                mod({
                    params,
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            });
            const swiperParams = extend2({}, defaults, allModulesParams);
            swiper.params = extend2({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend2({}, swiper.params);
            swiper.passedParams = extend2({}, params);
            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach((eventName) => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            }
            if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
            }
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal() {
                    return swiper.params.direction === "horizontal";
                },
                isVertical() {
                    return swiper.params.direction === "vertical";
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / __pow(2, 23)) * __pow(2, 23);
                },
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    // Form elements to match
                    focusableElements: swiper.params.focusableElements,
                    // Last click time
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit("_swiper");
            if (swiper.params.init) {
                swiper.init();
            }
            return swiper;
        }
        getDirectionLabel(property) {
            if (this.isHorizontal()) {
                return property;
            }
            return {
                "width": "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                "marginRight": "marginBottom"
            }[property];
        }
        getSlideIndex(slideEl) {
            const {
                slidesEl,
                params
            } = this;
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = elementIndex(slides[0]);
            return elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
        }
        recalcSlides() {
            const swiper = this;
            const {
                slidesEl,
                params
            } = swiper;
            swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled)
                return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            swiper.emit("enable");
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled)
                return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) {
                swiper.unsetGrabCursor();
            }
            swiper.emit("disable");
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el)
                return;
            const cls = swiper.el.className.split(" ").filter((className) => {
                return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit("_containerClasses", cls.join(" "));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed)
                return "";
            return slideEl.className.split(" ").filter((className) => {
                return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(" ");
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el)
                return;
            const updates = [];
            swiper.slides.forEach((slideEl) => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit("_slideClass", slideEl, classNames);
            });
            swiper.emit("_slideClasses", updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) {
                view = "current";
            }
            if (exact === void 0) {
                exact = false;
            }
            const swiper = this;
            const {
                params,
                slides,
                slidesGrid,
                slidesSizesGrid,
                size: swiperSize,
                activeIndex
            } = swiper;
            let spv = 1;
            if (typeof params.slidesPerView === "number")
                return params.slidesPerView;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                let breakLoop;
                for (let i6 = activeIndex + 1; i6 < slides.length; i6 += 1) {
                    if (slides[i6] && !breakLoop) {
                        slideSize += Math.ceil(slides[i6].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize)
                            breakLoop = true;
                    }
                }
                for (let i6 = activeIndex - 1; i6 >= 0; i6 -= 1) {
                    if (slides[i6] && !breakLoop) {
                        slideSize += slides[i6].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize)
                            breakLoop = true;
                    }
                }
            } else {
                if (view === "current") {
                    for (let i6 = activeIndex + 1; i6 < slides.length; i6 += 1) {
                        const slideInView = exact ? slidesGrid[i6] + slidesSizesGrid[i6] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i6] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                } else {
                    for (let i6 = activeIndex - 1; i6 >= 0; i6 -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i6] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                }
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed)
                return;
            const {
                snapGrid,
                params
            } = swiper;
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                }
            });
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate2() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate2();
                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate2();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit("update");
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) {
                newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
            }
            if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
                return swiper;
            }
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach((slideEl) => {
                if (newDirection === "vertical") {
                    slideEl.style.width = "";
                } else {
                    slideEl.style.height = "";
                }
            });
            swiper.emit("changeDirection");
            if (needUpdate)
                swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
                return;
            swiper.rtl = direction === "rtl";
            swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "rtl";
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = "ltr";
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted)
                return true;
            let el = element || swiper.params.el;
            if (typeof el === "string") {
                el = document.querySelector(el);
            }
            if (!el) {
                return false;
            }
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
                swiper.isElement = true;
            }
            const getWrapperSelector = () => {
                return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
            };
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    return res;
                }
                return elementChildren(el, getWrapperSelector())[0];
            };
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = createElement("div", swiper.params.wrapperClass);
                el.append(wrapperEl);
                elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
                    wrapperEl.append(slideEl);
                });
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized)
                return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false)
                return swiper;
            swiper.emit("beforeInit");
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.addClasses();
            swiper.updateSize();
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            if (swiper.params.grabCursor && swiper.enabled) {
                swiper.setGrabCursor();
            }
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            }
            if (swiper.params.loop) {
                swiper.loopCreate();
            }
            swiper.attachEvents();
            const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
            if (swiper.isElement) {
                lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            }
            lazyElements.forEach((imageEl) => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                } else {
                    imageEl.addEventListener("load", (e5) => {
                        processLazyPreloader(swiper, e5.target);
                    });
                }
            });
            preload(swiper);
            swiper.initialized = true;
            preload(swiper);
            swiper.emit("init");
            swiper.emit("afterInit");
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }
            if (cleanStyles === void 0) {
                cleanStyles = true;
            }
            const swiper = this;
            const {
                params,
                el,
                wrapperEl,
                slides
            } = swiper;
            if (typeof swiper.params === "undefined" || swiper.destroyed) {
                return null;
            }
            swiper.emit("beforeDestroy");
            swiper.initialized = false;
            swiper.detachEvents();
            if (params.loop) {
                swiper.loopDestroy();
            }
            if (cleanStyles) {
                swiper.removeClasses();
                el.removeAttribute("style");
                wrapperEl.removeAttribute("style");
                if (slides && slides.length) {
                    slides.forEach((slideEl) => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    });
                }
            }
            swiper.emit("destroy");
            Object.keys(swiper.eventsListeners).forEach((eventName) => {
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                swiper.el.swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            extend2(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!_Swiper.prototype.__modules__)
                _Swiper.prototype.__modules__ = [];
            const modules = _Swiper.prototype.__modules__;
            if (typeof mod === "function" && modules.indexOf(mod) < 0) {
                modules.push(mod);
            }
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach((m4) => _Swiper.installModule(m4));
                return _Swiper;
            }
            _Swiper.installModule(module);
            return _Swiper;
        }
    };
    Object.keys(prototypes).forEach((prototypeGroup) => {
        Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        });
    });
    Swiper.use([Resize, Observer]);

    // assets/scripts/constants/carousel.js
    var CAROUSEL_DEFAULT_ARGS = ({
        modules,
        $prevButton,
        $nextButton,
        updateCallback
    } = {
        modules: [],
        $prevButton: null,
        $nextButton: null,
        updateCallback: () => {}
    }) => {
        return {
            modules,
            speed: 400,
            loop: false,
            spaceBetween: 10,
            a11y: true,
            slidesPerView: 1.1,
            navigation: {
                prevEl: $prevButton,
                nextEl: $nextButton
            },
            breakpoints: {
                700: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                },
                1e3: {
                    slidesPerView: 3.2
                }
            },
            on: {
                init: updateCallback,
                breakpoint: updateCallback,
                destroy: updateCallback
            }
        };
    };
    var CAROUSEL_HERO_ARGS = ({
        modules,
        $pagination,
        updateCallback
    } = {
        modules: [],
        $pagination: null,
        updateCallback: () => {}
    }) => {
        return {
            modules,
            speed: 600,
            loop: true,
            spaceBetween: 10,
            a11y: true,
            slidesPerView: 1,
            pagination: {
                el: $pagination,
                clickable: true
            },
            autoplay: {
                delay: 6e3,
                disableOnInteraction: false
            },
            breakpoints: {
                700: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1e3: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
            },
            on: {
                init: updateCallback,
                breakpoint: updateCallback,
                destroy: updateCallback
            }
        };
    };

    // node_modules/swiper/shared/create-element-if-not-defined.mjs
    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) {
            Object.keys(checkProps).forEach((key) => {
                if (!params[key] && params.auto === true) {
                    let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            });
        }
        return params;
    }

    // node_modules/swiper/modules/navigation.mjs
    function Navigation(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };

        function getEl(el) {
            let res;
            if (el && typeof el === "string" && swiper.isElement) {
                res = swiper.el.querySelector(el);
                if (res)
                    return res;
            }
            if (el) {
                if (typeof el === "string")
                    res = [...document.querySelectorAll(el)];
                if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
                    res = swiper.el.querySelector(el);
                }
            }
            if (el && !res)
                return el;
            return res;
        }

        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                if (subEl) {
                    subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                    if (subEl.tagName === "BUTTON")
                        subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) {
                        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }
            });
        }

        function update2() {
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }

        function onPrevClick(e5) {
            e5.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
                return;
            swiper.slidePrev();
            emit("navigationPrev");
        }

        function onNextClick(e5) {
            e5.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
                return;
            swiper.slideNext();
            emit("navigationNext");
        }

        function init2() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            });
            if (!(params.nextEl || params.prevEl))
                return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) {
                    el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                }
                if (!swiper.enabled && el) {
                    el.classList.add(...params.lockClass.split(" "));
                }
            };
            nextEl.forEach((el) => initButton(el, "next"));
            prevEl.forEach((el) => initButton(el, "prev"));
        }

        function destroy() {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
            };
            nextEl.forEach((el) => destroyButton(el, "next"));
            prevEl.forEach((el) => destroyButton(el, "prev"));
        }
        on("init", () => {
            if (swiper.params.navigation.enabled === false) {
                disable();
            } else {
                init2();
                update2();
            }
        });
        on("toEdge fromEdge lock unlock", () => {
            update2();
        });
        on("destroy", () => {
            destroy();
        });
        on("enable disable", () => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (swiper.enabled) {
                update2();
                return;
            }
            [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
        });
        on("click", (_s, e5) => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const targetEl = e5.target;
            if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
                    return;
                let isHidden3;
                if (nextEl.length) {
                    isHidden3 = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                } else if (prevEl.length) {
                    isHidden3 = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                }
                if (isHidden3 === true) {
                    emit("navigationShow");
                } else {
                    emit("navigationHide");
                }
                [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
            init2();
            update2();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update: update2,
            init: init2,
            destroy
        });
    }

    // node_modules/swiper/shared/classes-to-selector.mjs
    function classesToSelector(classes2) {
        if (classes2 === void 0) {
            classes2 = "";
        }
        return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
    }

    // node_modules/swiper/modules/pagination.mjs
    function Pagination(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const pfx = "swiper-pagination";
        extendParams({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: "bullets",
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: (number) => number,
                formatFractionTotal: (number) => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;

        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }

        function setSideBullets(bulletEl, position) {
            const {
                bulletActiveClass
            } = swiper.params.pagination;
            if (!bulletEl)
                return;
            bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
        }

        function onBulletClick(e5) {
            const bulletEl = e5.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) {
                return;
            }
            e5.preventDefault();
            const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index)
                    return;
                swiper.slideToLoop(index);
            } else {
                swiper.slideTo(index);
            }
        }

        function update2() {
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled())
                return;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== "undefined") {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                    el.forEach((subEl) => {
                        subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                    });
                    if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (dynamicBulletIndex < 0) {
                            dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach((bulletEl) => {
                    const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s6) => typeof s6 === "string" && s6.includes(" ") ? s6.split(" ") : s6).flat();
                    bulletEl.classList.remove(...classesToRemove);
                });
                if (el.length > 1) {
                    bullets.forEach((bullet) => {
                        const bulletIndex = elementIndex(bullet);
                        if (bulletIndex === current) {
                            bullet.classList.add(...params.bulletActiveClass.split(" "));
                        } else if (swiper.isElement) {
                            bullet.setAttribute("part", "bullet");
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            }
                            if (bulletIndex === firstIndex) {
                                setSideBullets(bullet, "prev");
                            }
                            if (bulletIndex === lastIndex) {
                                setSideBullets(bullet, "next");
                            }
                        }
                    });
                } else {
                    const bullet = bullets[current];
                    if (bullet) {
                        bullet.classList.add(...params.bulletActiveClass.split(" "));
                    }
                    if (swiper.isElement) {
                        bullets.forEach((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        });
                    }
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i6 = firstIndex; i6 <= lastIndex; i6 += 1) {
                            if (bullets[i6]) {
                                bullets[i6].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            }
                        }
                        setSideBullets(firstDisplayedBullet, "prev");
                        setSideBullets(lastDisplayedBullet, "next");
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? "right" : "left";
                    bullets.forEach((bullet) => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                    });
                }
            }
            el.forEach((subEl, subElIndex) => {
                if (params.type === "fraction") {
                    subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
                        fractionEl.textContent = params.formatFractionCurrent(current + 1);
                    });
                    subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
                        totalEl.textContent = params.formatFractionTotal(total);
                    });
                }
                if (params.type === "progressbar") {
                    let progressbarDirection;
                    if (params.progressbarOpposite) {
                        progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
                    } else {
                        progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    }
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === "horizontal") {
                        scaleX = scale;
                    } else {
                        scaleY = scale;
                    }
                    subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
                        progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                        progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                    });
                }
                if (params.type === "custom" && params.renderCustom) {
                    subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                    if (subElIndex === 0)
                        emit("paginationRender", subEl);
                } else {
                    if (subElIndex === 0)
                        emit("paginationRender", subEl);
                    emit("paginationUpdate", subEl);
                }
                if (swiper.params.watchOverflow && swiper.enabled) {
                    subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }
            });
        }

        function render() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled())
                return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            let paginationHTML = "";
            if (params.type === "bullets") {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
                    numberOfBullets = slidesLength;
                }
                for (let i6 = 0; i6 < numberOfBullets; i6 += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i6, params.bulletClass);
                    } else {
                        paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                }
            }
            if (params.type === "fraction") {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
                }
            }
            if (params.type === "progressbar") {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                }
            }
            swiper.pagination.bullets = [];
            el.forEach((subEl) => {
                if (params.type !== "custom") {
                    subEl.innerHTML = paginationHTML || "";
                }
                if (params.type === "bullets") {
                    swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
                }
            });
            if (params.type !== "custom") {
                emit("paginationRender", el[0]);
            }
        }

        function init2() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: "swiper-pagination"
            });
            const params = swiper.params.pagination;
            if (!params.el)
                return;
            let el;
            if (typeof params.el === "string" && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === "string") {
                el = [...document.querySelectorAll(params.el)];
            }
            if (!el) {
                el = params.el;
            }
            if (!el || el.length === 0)
                return;
            if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                el = [...swiper.el.querySelectorAll(params.el)];
                if (el.length > 1) {
                    el = el.filter((subEl) => {
                        if (elementParents(subEl, ".swiper")[0] !== swiper.el)
                            return false;
                        return true;
                    })[0];
                }
            }
            if (Array.isArray(el) && el.length === 1)
                el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                if (params.type === "bullets" && params.clickable) {
                    subEl.classList.add(...(params.clickableClass || "").split(" "));
                }
                subEl.classList.add(params.modifierClass + params.type);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === "bullets" && params.dynamicBullets) {
                    subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) {
                        params.dynamicMainBullets = 1;
                    }
                }
                if (params.type === "progressbar" && params.progressbarOpposite) {
                    subEl.classList.add(params.progressbarOppositeClass);
                }
                if (params.clickable) {
                    subEl.addEventListener("click", onBulletClick);
                }
                if (!swiper.enabled) {
                    subEl.classList.add(params.lockClass);
                }
            });
        }

        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled())
                return;
            let el = swiper.pagination.el;
            if (el) {
                el = makeElementsArray(el);
                el.forEach((subEl) => {
                    subEl.classList.remove(params.hiddenClass);
                    subEl.classList.remove(params.modifierClass + params.type);
                    subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.clickable) {
                        subEl.classList.remove(...(params.clickableClass || "").split(" "));
                        subEl.removeEventListener("click", onBulletClick);
                    }
                });
            }
            if (swiper.pagination.bullets)
                swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
        }
        on("changeDirection", () => {
            if (!swiper.pagination || !swiper.pagination.el)
                return;
            const params = swiper.params.pagination;
            let {
                el
            } = swiper.pagination;
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            });
        });
        on("init", () => {
            if (swiper.params.pagination.enabled === false) {
                disable();
            } else {
                init2();
                render();
                update2();
            }
        });
        on("activeIndexChange", () => {
            if (typeof swiper.snapIndex === "undefined") {
                update2();
            }
        });
        on("snapIndexChange", () => {
            update2();
        });
        on("snapGridLengthChange", () => {
            render();
            update2();
        });
        on("destroy", () => {
            destroy();
        });
        on("enable disable", () => {
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
            }
        });
        on("lock unlock", () => {
            update2();
        });
        on("click", (_s, e5) => {
            const targetEl = e5.target;
            const el = makeElementsArray(swiper.pagination.el);
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
                    return;
                const isHidden3 = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                if (isHidden3 === true) {
                    emit("paginationShow");
                } else {
                    emit("paginationHide");
                }
                el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
            }
            init2();
            render();
            update2();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update: update2,
            init: init2,
            destroy
        });
    }

    // node_modules/swiper/modules/a11y.mjs
    function A11y(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;

        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0)
                return;
            notification.innerHTML = "";
            notification.innerHTML = message;
        }

        function getRandomNumber(size) {
            if (size === void 0) {
                size = 16;
            }
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
            return "x".repeat(size).replace(/x/g, randomChar);
        }

        function makeElFocusable(el) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("tabIndex", "0");
            });
        }

        function makeElNotFocusable(el) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("tabIndex", "-1");
            });
        }

        function addElRole(el, role) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("role", role);
            });
        }

        function addElRoleDescription(el, description) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-roledescription", description);
            });
        }

        function addElControls(el, controls) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-controls", controls);
            });
        }

        function addElLabel(el, label) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-label", label);
            });
        }

        function addElId(el, id) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("id", id);
            });
        }

        function addElLive(el, live) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-live", live);
            });
        }

        function disableEl(el) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-disabled", true);
            });
        }

        function enableEl(el) {
            el = makeElementsArray(el);
            el.forEach((subEl) => {
                subEl.setAttribute("aria-disabled", false);
            });
        }

        function onEnterOrSpaceKey(e5) {
            if (e5.keyCode !== 13 && e5.keyCode !== 32)
                return;
            const params = swiper.params.a11y;
            const targetEl = e5.target;
            if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e5.target))) {
                if (!e5.target.matches(classesToSelector(swiper.params.pagination.bulletClass)))
                    return;
            }
            if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    notify(params.lastSlideMessage);
                } else {
                    notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    notify(params.firstSlideMessage);
                } else {
                    notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
                targetEl.click();
            }
        }

        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
                return;
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (prevEl) {
                if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
            }
            if (nextEl) {
                if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
        }

        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }

        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }

        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination())
                return;
            swiper.pagination.bullets.forEach((bulletEl) => {
                if (swiper.params.pagination.clickable) {
                    makeElFocusable(bulletEl);
                    if (!swiper.params.pagination.renderBullet) {
                        addElRole(bulletEl, "button");
                        addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                    }
                }
                if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
                    bulletEl.setAttribute("aria-current", "true");
                } else {
                    bulletEl.removeAttribute("aria-current");
                }
            });
        }
        const initNavEl = (el, wrapperId, message) => {
            makeElFocusable(el);
            if (el.tagName !== "BUTTON") {
                addElRole(el, "button");
                el.addEventListener("keydown", onEnterOrSpaceKey);
            }
            addElLabel(el, message);
            addElControls(el, wrapperId);
        };
        const handlePointerDown = () => {
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (!swiper.destroyed) {
                        swiper.a11y.clicked = false;
                    }
                });
            });
        };
        const handleFocus = (e5) => {
            if (swiper.a11y.clicked)
                return;
            const slideEl = e5.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!slideEl || !swiper.slides.includes(slideEl))
                return;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible)
                return;
            if (e5.sourceCapabilities && e5.sourceCapabilities.firesTouchEvents)
                return;
            if (swiper.isHorizontal()) {
                swiper.el.scrollLeft = 0;
            } else {
                swiper.el.scrollTop = 0;
            }
            swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        };
        const initSlides = () => {
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) {
                addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
            }
            if (params.slideRole) {
                addElRole(swiper.slides, params.slideRole);
            }
            const slidesLength = swiper.slides.length;
            if (params.slideLabelMessage) {
                swiper.slides.forEach((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel(slideEl, ariaLabelMessage);
                });
            }
        };
        const init2 = () => {
            const params = swiper.params.a11y;
            swiper.el.append(liveRegion);
            const containerEl = swiper.el;
            if (params.containerRoleDescriptionMessage) {
                addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
            }
            if (params.containerMessage) {
                addElLabel(containerEl, params.containerMessage);
            }
            const wrapperEl = swiper.wrapperEl;
            const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
            addElId(wrapperEl, wrapperId);
            addElLive(wrapperEl, live);
            initSlides();
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
            }
            if (prevEl) {
                prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
            }
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach((el) => {
                    el.addEventListener("keydown", onEnterOrSpaceKey);
                });
            }
            swiper.el.addEventListener("focus", handleFocus, true);
            swiper.el.addEventListener("pointerdown", handlePointerDown, true);
            swiper.el.addEventListener("pointerup", handlePointerUp, true);
        };

        function destroy() {
            if (liveRegion)
                liveRegion.remove();
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
            }
            if (prevEl) {
                prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
            }
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach((el) => {
                    el.removeEventListener("keydown", onEnterOrSpaceKey);
                });
            }
            swiper.el.removeEventListener("focus", handleFocus, true);
            swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
            swiper.el.removeEventListener("pointerup", handlePointerUp, true);
        }
        on("beforeInit", () => {
            liveRegion = createElement("span", swiper.params.a11y.notificationClass);
            liveRegion.setAttribute("aria-live", "assertive");
            liveRegion.setAttribute("aria-atomic", "true");
        });
        on("afterInit", () => {
            if (!swiper.params.a11y.enabled)
                return;
            init2();
        });
        on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
            if (!swiper.params.a11y.enabled)
                return;
            initSlides();
        });
        on("fromEdge toEdge afterInit lock unlock", () => {
            if (!swiper.params.a11y.enabled)
                return;
            updateNavigation();
        });
        on("paginationUpdate", () => {
            if (!swiper.params.a11y.enabled)
                return;
            updatePagination();
        });
        on("destroy", () => {
            if (!swiper.params.a11y.enabled)
                return;
            destroy();
        });
    }

    // node_modules/swiper/modules/autoplay.mjs
    function Autoplay(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit,
            params
        } = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3e3,
                waitForTransition: true,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
        let autoplayTimeLeft;
        let autoplayStartTime = ( /* @__PURE__ */ new Date()).getTime();
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        let pausedByPointerEnter;

        function onTransitionEnd(e5) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl)
                return;
            if (e5.target !== swiper.wrapperEl)
                return;
            swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
            if (pausedByPointerEnter) {
                return;
            }
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            if (swiper.autoplay.paused) {
                wasPaused = true;
            } else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - ( /* @__PURE__ */ new Date()).getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame(() => {
                calcTimeLeft();
            });
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
            } else {
                activeSlideEl = swiper.slides[swiper.activeIndex];
            }
            if (!activeSlideEl)
                return void 0;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
            return currentSlideDelay;
        };
        const run = (delayForce) => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay3 = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                delay3 = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay3;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed)
                    return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit("autoplay");
                    }
                } else {
                    if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = ( /* @__PURE__ */ new Date()).getTime();
                    requestAnimationFrame(() => {
                        run();
                    });
                }
            };
            if (delay3 > 0) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    proceed();
                }, delay3);
            } else {
                requestAnimationFrame(() => {
                    proceed();
                });
            }
            return delay3;
        };
        const start = () => {
            autoplayStartTime = ( /* @__PURE__ */ new Date()).getTime();
            swiper.autoplay.running = true;
            run();
            emit("autoplayStart");
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit("autoplayStop");
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            clearTimeout(timeout);
            if (!internal) {
                pausedByInteraction = true;
            }
            const proceed = () => {
                emit("autoplayPause");
                if (swiper.params.autoplay.waitForTransition) {
                    swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
                } else {
                    resume();
                }
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) {
                    autoplayTimeLeft = swiper.params.autoplay.delay;
                }
                slideChanged = false;
                proceed();
                return;
            }
            const delay3 = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay3 - (( /* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
                return;
            if (autoplayTimeLeft < 0)
                autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
                return;
            autoplayStartTime = ( /* @__PURE__ */ new Date()).getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else {
                run();
            }
            swiper.autoplay.paused = false;
            emit("autoplayResume");
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            const document2 = getDocument();
            if (document2.visibilityState === "hidden") {
                pausedByInteraction = true;
                pause(true);
            }
            if (document2.visibilityState === "visible") {
                resume();
            }
        };
        const onPointerEnter = (e5) => {
            if (e5.pointerType !== "mouse")
                return;
            pausedByInteraction = true;
            pausedByPointerEnter = true;
            if (swiper.animating || swiper.autoplay.paused)
                return;
            pause(true);
        };
        const onPointerLeave = (e5) => {
            if (e5.pointerType !== "mouse")
                return;
            pausedByPointerEnter = false;
            if (swiper.autoplay.paused) {
                resume();
            }
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener("pointerenter", onPointerEnter);
                swiper.el.addEventListener("pointerleave", onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            swiper.el.removeEventListener("pointerenter", onPointerEnter);
            swiper.el.removeEventListener("pointerleave", onPointerLeave);
        };
        const attachDocumentEvents = () => {
            const document2 = getDocument();
            document2.addEventListener("visibilitychange", onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document2 = getDocument();
            document2.removeEventListener("visibilitychange", onVisibilityChange);
        };
        on("init", () => {
            if (swiper.params.autoplay.enabled) {
                attachMouseEvents();
                attachDocumentEvents();
                start();
            }
        });
        on("destroy", () => {
            detachMouseEvents();
            detachDocumentEvents();
            if (swiper.autoplay.running) {
                stop();
            }
        });
        on("_freeModeStaticRelease", () => {
            if (pausedByTouch || pausedByInteraction) {
                resume();
            }
        });
        on("_freeModeNoMomentumRelease", () => {
            if (!swiper.params.autoplay.disableOnInteraction) {
                pause(true, true);
            } else {
                stop();
            }
        });
        on("beforeTransitionStart", (_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
                pause(true, true);
            } else {
                stop();
            }
        });
        on("sliderFirstMove", () => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            if (swiper.params.autoplay.disableOnInteraction) {
                stop();
                return;
            }
            isTouched = true;
            pausedByTouch = false;
            pausedByInteraction = false;
            touchStartTimeout = setTimeout(() => {
                pausedByInteraction = true;
                pausedByTouch = true;
                pause(true);
            }, 200);
        });
        on("touchEnd", () => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
                return;
            clearTimeout(touchStartTimeout);
            clearTimeout(timeout);
            if (swiper.params.autoplay.disableOnInteraction) {
                pausedByTouch = false;
                isTouched = false;
                return;
            }
            if (pausedByTouch && swiper.params.cssMode)
                resume();
            pausedByTouch = false;
            isTouched = false;
        });
        on("slideChange", () => {
            if (swiper.destroyed || !swiper.autoplay.running)
                return;
            slideChanged = true;
        });
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }

    // assets/scripts/modules/Carousel.js
    var Carousel_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$container = this.$("container")[0];
            this.$prevButton = this.$("prev")[0] || null;
            this.$nextButton = this.$("next")[0] || null;
            this.$pagination = this.$("pagination")[0] || null;
            this.type = this.getData("type") || "default";
            this.length = this.$("item").length;
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            let args = {};
            switch (this.type) {
                case "hero":
                    args = CAROUSEL_HERO_ARGS({
                        modules: [Pagination, Autoplay, A11y],
                        $pagination: this.$pagination
                    });
                    break;
                default:
                    args = CAROUSEL_DEFAULT_ARGS({
                        modules: [Navigation, A11y],
                        $prevButton: this.$prevButton,
                        $nextButton: this.$nextButton
                    });
                    break;
            }
            if (this.length > 1) {
                this.carousel = new Swiper(this.$container, args);
            }
        }
        destroy() {
            var _a;
            super.destroy();
            (_a = this.carousel) == null ? void 0 : _a.destroy(true, true);
        }
    };

    // assets/scripts/modules/CheckboxMultiple.js
    var CheckboxMultiple_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$inputs = this.$("input");
            this.isRequired = this.getData("required") === "true";
            this.events = {
                "change": "onChange"
            };
        }
        init() {
            this.onChange();
        }
        destroy() {
            super.destroy();
        }
        onChange(e5) {
            if (!this.isRequired)
                return;
            const checked = this.el.querySelectorAll("input:checked");
            if (checked.length === 0) {
                this.setRequired(true);
                this.el.classList.add("is-invalid");
            } else {
                this.setRequired(false);
                this.el.classList.remove("is-invalid");
            }
        }
        setRequired(isRequired) {
            this.$inputs.forEach(($input) => {
                $input.required = isRequired;
            });
        }
    };

    // assets/scripts/utils/is.js
    var localStorageAvailable = null;
    var sessionStorageAvailable = null;
    var isLocalStorageAvailable = () => {
        return localStorageAvailable != null ? localStorageAvailable : localStorageAvailable = isStorageAvailable(window.localStorage);
    };
    var isSessionStorageAvailable = () => {
        return sessionStorageAvailable != null ? sessionStorageAvailable : sessionStorageAvailable = isStorageAvailable(window.sessionStorage);
    };

    function isStorageAvailable(storage) {
        try {
            const x3 = "__storage_test__";
            storage.setItem(x3, x3);
            storage.removeItem(x3);
            return true;
        } catch (error) {
            return error instanceof DOMException && // everything except Firefox
                (error.code === 22 || // Firefox
                    error.code === 1014 || // test name field too, because code might not be present
                    // everything except Firefox
                    error.name === "QuotaExceededError" || // Firefox
                    error.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    // node_modules/vanilla-cookieconsent/dist/cookieconsent.esm.js
    var cookieconsent_esm_exports = {};
    __export(cookieconsent_esm_exports, {
        acceptCategory: () => Ve,
        acceptService: () => Le,
        acceptedCategory: () => Ie,
        acceptedService: () => je,
        eraseCookies: () => Pe,
        getConfig: () => Qe,
        getCookie: () => Ke,
        getUserPreferences: () => $e,
        hide: () => Re,
        hidePreferences: () => Ge,
        loadScript: () => ze,
        reset: () => Ye,
        run: () => Xe,
        setCookieData: () => qe,
        setLanguage: () => Ue,
        show: () => Oe,
        showPreferences: () => Be,
        validConsent: () => We,
        validCookie: () => Fe
    });
    var e = "opt-in";
    var t = "opt-out";
    var o = "show--consent";
    var n = "show--preferences";
    var a = "disable--interaction";
    var s = "data-category";
    var c = "div";
    var r = "button";
    var i = "aria-hidden";
    var l = "btn-group";
    var d = "click";
    var f = "data-role";
    var _ = "consentModal";
    var u = "preferencesModal";
    var p = class {
        constructor() {
            this.t = {
                mode: e,
                revision: 0,
                autoShow: true,
                lazyHtmlGeneration: true,
                autoClearCookies: true,
                manageScriptTags: true,
                hideFromBots: true,
                cookie: {
                    name: "cc_cookie",
                    expiresAfterDays: 182,
                    domain: "",
                    path: "/",
                    sameSite: "Lax"
                }
            }, this.o = {
                i: {},
                l: "",
                _: {},
                u: {},
                p: {},
                m: [],
                v: false,
                h: null,
                C: null,
                S: null,
                M: "",
                D: true,
                T: false,
                k: false,
                A: false,
                N: false,
                H: [],
                V: false,
                I: true,
                L: [],
                j: false,
                F: "",
                P: false,
                O: [],
                R: [],
                B: [],
                G: [],
                J: false,
                U: false,
                $: false,
                q: [],
                K: [],
                W: [],
                X: {},
                Y: {},
                Z: {},
                ee: {},
                te: {},
                oe: []
            }, this.ne = {
                ae: {},
                se: {}
            }, this.ce = {}, this.re = {
                ie: "cc:onFirstConsent",
                le: "cc:onConsent",
                de: "cc:onChange",
                fe: "cc:onModalShow",
                _e: "cc:onModalHide",
                ue: "cc:onModalReady"
            };
        }
    };
    var m = new p();
    var g = (e5, t3) => e5.indexOf(t3);
    var b = (e5, t3) => -1 !== g(e5, t3);
    var v = (e5) => Array.isArray(e5);
    var y = (e5) => "string" == typeof e5;
    var h = (e5) => !!e5 && "object" == typeof e5 && !v(e5);
    var C = (e5) => "function" == typeof e5;
    var w = (e5) => Object.keys(e5);
    var S = (e5) => Array.from(new Set(e5));
    var x = () => document.activeElement;
    var M = (e5) => e5.preventDefault();
    var D = (e5, t3) => e5.querySelectorAll(t3);
    var T = (e5) => e5.dispatchEvent(new Event("change"));
    var k = (e5) => {
        const t3 = document.createElement(e5);
        return e5 === r && (t3.type = e5), t3;
    };
    var E = (e5, t3, o6) => e5.setAttribute(t3, o6);
    var A = (e5, t3, o6) => {
        e5.removeAttribute(o6 ? "data-" + t3 : t3);
    };
    var N = (e5, t3, o6) => e5.getAttribute(o6 ? "data-" + t3 : t3);
    var H = (e5, t3) => e5.appendChild(t3);
    var V = (e5, t3) => e5.classList.add(t3);
    var I = (e5, t3) => V(e5, "cm__" + t3);
    var L = (e5, t3) => V(e5, "pm__" + t3);
    var j = (e5, t3) => e5.classList.remove(t3);
    var F = (e5) => {
        if ("object" != typeof e5)
            return e5;
        if (e5 instanceof Date)
            return new Date(e5.getTime());
        let t3 = Array.isArray(e5) ? [] : {};
        for (let o6 in e5) {
            let n6 = e5[o6];
            t3[o6] = F(n6);
        }
        return t3;
    };
    var P = () => {
        const e5 = {},
            {
                O: t3,
                X: o6,
                Y: n6
            } = m.o;
        for (const a5 of t3)
            e5[a5] = G(n6[a5], w(o6[a5]));
        return e5;
    };
    var O = (e5, t3) => dispatchEvent(new CustomEvent(e5, {
        detail: t3
    }));
    var R = (e5, t3, o6, n6) => {
        e5.addEventListener(t3, o6), n6 && m.o.m.push({
            pe: e5,
            me: t3,
            ge: o6
        });
    };
    var B = () => {
        const e5 = m.t.cookie.expiresAfterDays;
        return C(e5) ? e5(m.o.F) : e5;
    };
    var G = (e5, t3) => {
        const o6 = e5 || [],
            n6 = t3 || [];
        return o6.filter((e6) => !b(n6, e6)).concat(n6.filter((e6) => !b(o6, e6)));
    };
    var J = (e5) => {
        m.o.R = S(e5), m.o.F = (() => {
            let e6 = "custom";
            const {
                R: t3,
                O: o6,
                B: n6
            } = m.o, a5 = t3.length;
            return a5 === o6.length ? e6 = "all" : a5 === n6.length && (e6 = "necessary"), e6;
        })();
    };
    var U = (e5, t3, o6, n6) => {
        const a5 = "accept-",
            {
                show: s6,
                showPreferences: c5,
                hide: r5,
                hidePreferences: i6,
                acceptCategory: l6
            } = t3,
            f4 = e5 || document,
            _4 = (e6) => D(f4, `[data-cc="${e6}"]`),
            u4 = (e6, t4) => {
                M(e6), l6(t4), i6(), r5();
            },
            p4 = _4("show-preferencesModal"),
            g4 = _4("show-consentModal"),
            b4 = _4(a5 + "all"),
            v3 = _4(a5 + "necessary"),
            y4 = _4(a5 + "custom"),
            h5 = m.t.lazyHtmlGeneration;
        for (const e6 of p4)
            E(e6, "aria-haspopup", "dialog"), R(e6, d, (e7) => {
                M(e7), c5();
            }), h5 && (R(e6, "mouseenter", (e7) => {
                M(e7), m.o.N || o6(t3, n6);
            }, true), R(e6, "focus", () => {
                m.o.N || o6(t3, n6);
            }));
        for (let e6 of g4)
            E(e6, "aria-haspopup", "dialog"), R(e6, d, (e7) => {
                M(e7), s6(true);
            }, true);
        for (let e6 of b4)
            R(e6, d, (e7) => {
                u4(e7, "all");
            }, true);
        for (let e6 of y4)
            R(e6, d, (e7) => {
                u4(e7);
            }, true);
        for (let e6 of v3)
            R(e6, d, (e7) => {
                u4(e7, []);
            }, true);
    };
    var $ = (e5, t3) => {
        e5 && (t3 && (e5.tabIndex = -1), e5.focus(), t3 && e5.removeAttribute("tabindex"));
    };
    var z = (e5, t3) => {
        const o6 = (n6) => {
            n6.target.removeEventListener("transitionend", o6), "opacity" === n6.propertyName && "1" === getComputedStyle(e5).opacity && $(((e6) => 1 === e6 ? m.ne.be : m.ne.ve)(t3));
        };
        R(e5, "transitionend", o6);
    };
    var q;
    var K = (e5) => {
        clearTimeout(q), e5 ? V(m.ne.ye, a) : q = setTimeout(() => {
            j(m.ne.ye, a);
        }, 500);
    };
    var Q = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "];
    var W = (e5 = 0, t3 = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t3}"><path d="${Q[e5]}"/></svg>`;
    var X = (e5) => {
        const t3 = m.ne,
            o6 = m.o;
        ((e6) => {
            const n6 = e6 === t3.he,
                a5 = o6.i.disablePageInteraction ? t3.ye : n6 ? t3.Ce : t3.ye;
            R(a5, "keydown", (t4) => {
                if ("Tab" !== t4.key || !(n6 ? o6.k && !o6.A : o6.A))
                    return;
                const a6 = x(),
                    s6 = n6 ? o6.q : o6.K;
                0 !== s6.length && (t4.shiftKey ? a6 !== s6[0] && e6.contains(a6) || (M(t4), $(s6[1])) : a6 !== s6[1] && e6.contains(a6) || (M(t4), $(s6[0])));
            }, true);
        })(e5);
    };
    var Y = ["[href]", r, "input", "details", "[tabindex]"].map((e5) => e5 + ':not([tabindex="-1"])').join(",");
    var Z = (e5) => {
        const {
            o: t3,
            ne: o6
        } = m, n6 = (e6, t4) => {
            const o7 = D(e6, Y);
            t4[0] = o7[0], t4[1] = o7[o7.length - 1];
        };
        1 === e5 && t3.T && n6(o6.he, t3.q), 2 === e5 && t3.N && n6(o6.we, t3.K);
    };
    var ee = (e5, t3, o6) => {
        const {
            de: n6,
            le: a5,
            ie: s6,
            _e: c5,
            ue: r5,
            fe: i6
        } = m.ce, l6 = m.re;
        if (t3) {
            const n7 = {
                modalName: t3
            };
            return e5 === l6.fe ? C(i6) && i6(n7) : e5 === l6._e ? C(c5) && c5(n7) : (n7.modal = o6, C(r5) && r5(n7)), O(e5, n7);
        }
        const d4 = {
            cookie: m.o.p
        };
        e5 === l6.ie ? C(s6) && s6(F(d4)) : e5 === l6.le ? C(a5) && a5(F(d4)) : (d4.changedCategories = m.o.L, d4.changedServices = m.o.ee, C(n6) && n6(F(d4))), O(e5, F(d4));
    };
    var te = (e5, t3) => {
        try {
            return e5();
        } catch (e6) {
            return !t3 && console.warn("CookieConsent:", e6), false;
        }
    };
    var oe = (e5) => {
        const {
            Y: t3,
            ee: o6,
            O: n6,
            X: a5,
            oe: c5,
            p: r5,
            L: i6
        } = m.o;
        for (const e6 of n6) {
            const n7 = o6[e6] || t3[e6] || [];
            for (const o7 of n7) {
                const n8 = a5[e6][o7];
                if (!n8)
                    continue;
                const {
                    onAccept: s6,
                    onReject: c6
                } = n8;
                !n8.Se && b(t3[e6], o7) ? (n8.Se = true, C(s6) && s6()) : n8.Se && !b(t3[e6], o7) && (n8.Se = false, C(c6) && c6());
            }
        }
        if (!m.t.manageScriptTags)
            return;
        const l6 = c5,
            d4 = e5 || r5.categories || [],
            f4 = (e6, n7) => {
                if (n7 >= e6.length)
                    return;
                const a6 = c5[n7];
                if (a6.xe)
                    return f4(e6, n7 + 1);
                const r6 = a6.Me,
                    l7 = a6.De,
                    _4 = a6.Te,
                    u4 = b(d4, l7),
                    p4 = !!_4 && b(t3[l7], _4);
                if (!_4 && !a6.ke && u4 || !_4 && a6.ke && !u4 && b(i6, l7) || _4 && !a6.ke && p4 || _4 && a6.ke && !p4 && b(o6[l7] || [], _4)) {
                    a6.xe = true;
                    const t4 = N(r6, "type", true);
                    A(r6, "type", !!t4), A(r6, s);
                    let o7 = N(r6, "src", true);
                    o7 && A(r6, "src", true);
                    const c6 = k("script");
                    c6.textContent = r6.innerHTML;
                    for (const {
                            nodeName: e7
                        } of r6.attributes)
                        E(c6, e7, r6[e7] || N(r6, e7));
                    t4 && (c6.type = t4), o7 ? c6.src = o7 : o7 = r6.src;
                    const i7 = !!o7 && (!t4 || ["text/javascript", "module"].includes(t4));
                    if (i7 && (c6.onload = c6.onerror = () => {
                            f4(e6, ++n7);
                        }), r6.replaceWith(c6), i7)
                        return;
                }
                f4(e6, ++n7);
            };
        f4(l6, 0);
    };
    var ne = "bottom";
    var ae = "left";
    var se = "center";
    var ce = "right";
    var re = "inline";
    var ie = "wide";
    var le = "pm--";
    var de = ["middle", "top", ne];
    var fe = [ae, se, ce];
    var _e = {
        box: {
            Ee: [ie, re],
            Ae: de,
            Ne: fe,
            He: ne,
            Ve: ce
        },
        cloud: {
            Ee: [re],
            Ae: de,
            Ne: fe,
            He: ne,
            Ve: se
        },
        bar: {
            Ee: [re],
            Ae: de.slice(1),
            Ne: [],
            He: ne,
            Ve: ""
        }
    };
    var ue = {
        box: {
            Ee: [],
            Ae: [],
            Ne: [],
            He: "",
            Ve: ""
        },
        bar: {
            Ee: [ie],
            Ae: [],
            Ne: [ae, ce],
            He: "",
            Ve: ae
        }
    };
    var pe = (e5) => {
        const t3 = m.o.i.guiOptions,
            o6 = t3 && t3.consentModal,
            n6 = t3 && t3.preferencesModal;
        0 === e5 && me(m.ne.he, _e, o6, "cm--", "box", "cm"), 1 === e5 && me(m.ne.we, ue, n6, le, "box", "pm");
    };
    var me = (e5, t3, o6, n6, a5, s6) => {
        e5.className = s6;
        const c5 = o6 && o6.layout,
            r5 = o6 && o6.position,
            i6 = o6 && o6.flipButtons,
            l6 = !o6 || false !== o6.equalWeightButtons,
            d4 = c5 && c5.split(" ") || [],
            f4 = d4[0],
            _4 = d4[1],
            u4 = f4 in t3 ? f4 : a5,
            p4 = t3[u4],
            g4 = b(p4.Ee, _4) && _4,
            v3 = r5 && r5.split(" ") || [],
            y4 = v3[0],
            h5 = n6 === le ? v3[0] : v3[1],
            C3 = b(p4.Ae, y4) ? y4 : p4.He,
            w4 = b(p4.Ne, h5) ? h5 : p4.Ve,
            S4 = (t4) => {
                t4 && V(e5, n6 + t4);
            };
        S4(u4), S4(g4), S4(C3), S4(w4), i6 && S4("flip");
        const x3 = s6 + "__btn--secondary";
        if ("cm" === s6) {
            const {
                Ie: e6,
                Le: t4
            } = m.ne;
            e6 && (l6 ? j(e6, x3) : V(e6, x3)), t4 && (l6 ? j(t4, x3) : V(t4, x3));
        } else {
            const {
                je: e6
            } = m.ne;
            e6 && (l6 ? j(e6, x3) : V(e6, x3));
        }
    };
    var ge = (e5, t3) => {
        const o6 = m.o,
            n6 = m.ne,
            {
                hide: a5,
                hidePreferences: s6,
                acceptCategory: _4
            } = e5,
            p4 = (e6) => {
                _4(e6), s6(), a5();
            },
            g4 = o6.u && o6.u.preferencesModal;
        if (!g4)
            return;
        const b4 = g4.title,
            v3 = g4.closeIconLabel,
            C3 = g4.acceptAllBtn,
            S4 = g4.acceptNecessaryBtn,
            x3 = g4.savePreferencesBtn,
            M3 = g4.sections || [],
            D3 = C3 || S4 || x3;
        if (n6.Fe)
            n6.Pe = k(c), L(n6.Pe, "body");
        else {
            n6.Fe = k(c), V(n6.Fe, "pm-wrapper");
            const e6 = k("div");
            V(e6, "pm-overlay"), H(n6.Fe, e6), R(e6, d, s6), n6.we = k(c), V(n6.we, "pm"), E(n6.we, "role", "dialog"), E(n6.we, i, true), E(n6.we, "aria-modal", true), E(n6.we, "aria-labelledby", "pm__title"), R(n6.ye, "keydown", (e7) => {
                27 === e7.keyCode && s6();
            }, true), n6.Oe = k(c), L(n6.Oe, "header"), n6.Re = k("h2"), L(n6.Re, "title"), n6.Re.id = "pm__title", n6.Be = k(r), L(n6.Be, "close-btn"), E(n6.Be, "aria-label", g4.closeIconLabel || ""), R(n6.Be, d, s6), n6.Ge = k("span"), n6.Ge.innerHTML = W(), H(n6.Be, n6.Ge), n6.Je = k(c), L(n6.Je, "body"), n6.Ue = k(c), L(n6.Ue, "footer");
            var T3 = k(c);
            V(T3, "btns");
            var A4 = k(c),
                N3 = k(c);
            L(A4, l), L(N3, l), H(n6.Ue, A4), H(n6.Ue, N3), H(n6.Oe, n6.Re), H(n6.Oe, n6.Be), n6.ve = k(c), E(n6.ve, "tabIndex", -1), H(n6.we, n6.ve), H(n6.we, n6.Oe), H(n6.we, n6.Je), D3 && H(n6.we, n6.Ue), H(n6.Fe, n6.we);
        }
        let I3;
        b4 && (n6.Re.innerHTML = b4, v3 && E(n6.Be, "aria-label", v3)), M3.forEach((e6, t4) => {
            const a6 = e6.title,
                s7 = e6.description,
                l6 = e6.linkedCategory,
                f4 = l6 && o6.P[l6],
                _5 = e6.cookieTable,
                u4 = _5 && _5.body,
                p5 = _5 && _5.caption,
                m4 = u4 && u4.length > 0,
                b5 = !!f4,
                v4 = b5 && o6.X[l6],
                C4 = h(v4) && w(v4) || [],
                S5 = b5 && (!!s7 || !!m4 || w(v4).length > 0);
            var x4 = k(c);
            if (L(x4, "section"), S5 || s7) {
                var M4 = k(c);
                L(M4, "section-desc-wrapper");
            }
            let D4 = C4.length;
            if (S5 && D4 > 0) {
                const e7 = k(c);
                L(e7, "section-services");
                for (const t5 of C4) {
                    const o7 = v4[t5],
                        n7 = o7 && o7.label || t5,
                        a7 = k(c),
                        s8 = k(c),
                        r5 = k(c),
                        i6 = k(c);
                    L(a7, "service"), L(i6, "service-title"), L(s8, "service-header"), L(r5, "service-icon");
                    const d4 = be(n7, t5, f4, true, l6);
                    i6.innerHTML = n7, H(s8, r5), H(s8, i6), H(a7, s8), H(a7, d4), H(e7, a7);
                }
                H(M4, e7);
            }
            if (a6) {
                var T4 = k(c),
                    A5 = k(b5 ? r : c);
                if (L(T4, "section-title-wrapper"), L(A5, "section-title"), A5.innerHTML = a6, H(T4, A5), b5) {
                    const e7 = k("span");
                    e7.innerHTML = W(2, 3.5), L(e7, "section-arrow"), H(T4, e7), x4.className += "--toggle";
                    const t5 = be(a6, l6, f4);
                    let o7 = g4.serviceCounterLabel;
                    if (D4 > 0 && y(o7)) {
                        let e8 = k("span");
                        L(e8, "badge"), L(e8, "service-counter"), E(e8, i, true), E(e8, "data-servicecounter", D4), o7 && (o7 = o7.split("|"), o7 = o7.length > 1 && D4 > 1 ? o7[1] : o7[0], E(e8, "data-counterlabel", o7)), e8.innerHTML = D4 + (o7 ? " " + o7 : ""), H(A5, e8);
                    }
                    if (S5) {
                        L(x4, "section--expandable");
                        var N4 = l6 + "-desc";
                        E(A5, "aria-expanded", false), E(A5, "aria-controls", N4);
                    }
                    H(T4, t5);
                } else
                    E(A5, "role", "heading"), E(A5, "aria-level", "3");
                H(x4, T4);
            }
            if (s7) {
                var F3 = k("p");
                L(F3, "section-desc"), F3.innerHTML = s7, H(M4, F3);
            }
            if (S5 && (E(M4, i, "true"), M4.id = N4, ((e7, t5, o7) => {
                    R(A5, d, () => {
                        t5.classList.contains("is-expanded") ? (j(t5, "is-expanded"), E(o7, "aria-expanded", "false"), E(e7, i, "true")) : (V(t5, "is-expanded"), E(o7, "aria-expanded", "true"), E(e7, i, "false"));
                    });
                })(M4, x4, A5), m4)) {
                const e7 = k("table"),
                    o7 = k("thead"),
                    a7 = k("tbody");
                if (p5) {
                    const t5 = k("caption");
                    L(t5, "table-caption"), t5.innerHTML = p5, e7.appendChild(t5);
                }
                L(e7, "section-table"), L(o7, "table-head"), L(a7, "table-body");
                const s8 = _5.headers,
                    r5 = w(s8),
                    i6 = n6.$e.createDocumentFragment(),
                    l7 = k("tr");
                for (const e8 of r5) {
                    const o8 = s8[e8],
                        n7 = k("th");
                    n7.id = "cc__row-" + o8 + t4, E(n7, "scope", "col"), L(n7, "table-th"), n7.innerHTML = o8, H(i6, n7);
                }
                H(l7, i6), H(o7, l7);
                const d4 = n6.$e.createDocumentFragment();
                for (const e8 of u4) {
                    const o8 = k("tr");
                    L(o8, "table-tr");
                    for (const n7 of r5) {
                        const a8 = s8[n7],
                            r6 = e8[n7],
                            i7 = k("td"),
                            l8 = k(c);
                        L(i7, "table-td"), E(i7, "data-column", a8), E(i7, "headers", "cc__row-" + a8 + t4), l8.insertAdjacentHTML("beforeend", r6), H(i7, l8), H(o8, i7);
                    }
                    H(d4, o8);
                }
                H(a7, d4), H(e7, o7), H(e7, a7), H(M4, e7);
            }
            (S5 || s7) && H(x4, M4);
            const P3 = n6.Pe || n6.Je;
            b5 ? (I3 || (I3 = k(c), L(I3, "section-toggles")), I3.appendChild(x4)) : I3 = null, H(P3, I3 || x4);
        }), C3 && (n6.ze || (n6.ze = k(r), L(n6.ze, "btn"), E(n6.ze, f, "all"), H(A4, n6.ze), R(n6.ze, d, () => p4("all"))), n6.ze.innerHTML = C3), S4 && (n6.je || (n6.je = k(r), L(n6.je, "btn"), E(n6.je, f, "necessary"), H(A4, n6.je), R(n6.je, d, () => p4([]))), n6.je.innerHTML = S4), x3 && (n6.qe || (n6.qe = k(r), L(n6.qe, "btn"), L(n6.qe, "btn--secondary"), E(n6.qe, f, "save"), H(N3, n6.qe), R(n6.qe, d, () => p4())), n6.qe.innerHTML = x3), n6.Pe && (n6.we.replaceChild(n6.Pe, n6.Je), n6.Je = n6.Pe), pe(1), o6.N || (o6.N = true, ee(m.re.ue, u, n6.we), t3(e5), H(n6.Ce, n6.Fe), X(n6.we), setTimeout(() => V(n6.Fe, "cc--anim"), 100)), Z(2);
    };

    function be(e5, t3, o6, n6, a5) {
        const c5 = m.o,
            r5 = m.ne,
            l6 = k("label"),
            f4 = k("input"),
            _4 = k("span"),
            u4 = k("span"),
            p4 = k("span"),
            g4 = k("span"),
            v3 = k("span");
        if (g4.innerHTML = W(1, 3), v3.innerHTML = W(0, 3), f4.type = "checkbox", V(l6, "section__toggle-wrapper"), V(f4, "section__toggle"), V(g4, "toggle__icon-on"), V(v3, "toggle__icon-off"), V(_4, "toggle__icon"), V(u4, "toggle__icon-circle"), V(p4, "toggle__label"), E(_4, i, "true"), n6 ? (V(l6, "toggle-service"), E(f4, s, a5), r5.se[a5][t3] = f4) : r5.ae[t3] = f4, n6 ? ((e6) => {
                R(f4, "change", () => {
                    const t4 = r5.se[e6],
                        o7 = r5.ae[e6];
                    c5.Z[e6] = [];
                    for (let o8 in t4) {
                        const n7 = t4[o8];
                        n7.checked && c5.Z[e6].push(n7.value);
                    }
                    o7.checked = c5.Z[e6].length > 0;
                });
            })(a5) : ((e6) => {
                R(f4, d, () => {
                    const t4 = r5.se[e6],
                        o7 = f4.checked;
                    c5.Z[e6] = [];
                    for (let n7 in t4)
                        t4[n7].checked = o7, o7 && c5.Z[e6].push(n7);
                });
            })(t3), f4.value = t3, p4.textContent = e5.replace(/<.*>.*<\/.*>/gm, ""), H(u4, v3), H(u4, g4), H(_4, u4), c5.D)
            (o6.readOnly || o6.enabled) && (f4.checked = true);
        else if (n6) {
            const e6 = c5.Y[a5];
            f4.checked = o6.readOnly || b(e6, t3);
        } else
            b(c5.R, t3) && (f4.checked = true);
        return o6.readOnly && (f4.disabled = true), H(l6, f4), H(l6, _4), H(l6, p4), l6;
    }
    var ve = () => {
        const e5 = k("span");
        return m.ne.Ke || (m.ne.Ke = e5), e5;
    };
    var ye = (e5, t3) => {
        const o6 = m.o,
            n6 = m.ne,
            {
                hide: a5,
                showPreferences: s6,
                acceptCategory: u4
            } = e5,
            p4 = o6.u && o6.u.consentModal;
        if (!p4)
            return;
        const g4 = p4.acceptAllBtn,
            b4 = p4.acceptNecessaryBtn,
            v3 = p4.showPreferencesBtn,
            y4 = p4.closeIconLabel,
            h5 = p4.footer,
            C3 = p4.label,
            w4 = p4.title,
            S4 = (e6) => {
                a5(), u4(e6);
            };
        if (!n6.Qe) {
            n6.Qe = k(c), n6.he = k(c), n6.We = k(c), n6.Xe = k(c), n6.Ye = k(c), V(n6.Qe, "cm-wrapper"), V(n6.he, "cm"), I(n6.We, "body"), I(n6.Xe, "texts"), I(n6.Ye, "btns"), E(n6.he, "role", "dialog"), E(n6.he, "aria-modal", "true"), E(n6.he, i, "false"), E(n6.he, "aria-describedby", "cm__desc"), C3 ? E(n6.he, "aria-label", C3) : w4 && E(n6.he, "aria-labelledby", "cm__title");
            const e6 = "box",
                t4 = o6.i.guiOptions,
                a6 = t4 && t4.consentModal,
                s7 = (a6 && a6.layout || e6).split(" ")[0] === e6;
            w4 && y4 && s7 && (n6.Le || (n6.Le = k(r), n6.Le.innerHTML = W(), I(n6.Le, "btn"), I(n6.Le, "btn--close"), R(n6.Le, d, () => {
                S4([]);
            }), H(n6.We, n6.Le)), E(n6.Le, "aria-label", y4)), H(n6.We, n6.Xe), (g4 || b4 || v3) && H(n6.We, n6.Ye), n6.be = k(c), E(n6.be, "tabIndex", -1), H(n6.he, n6.be), H(n6.he, n6.We), H(n6.Qe, n6.he);
        }
        w4 && (n6.Ze || (n6.Ze = k("h2"), n6.Ze.className = n6.Ze.id = "cm__title", H(n6.Xe, n6.Ze)), n6.Ze.innerHTML = w4);
        let x3 = p4.description;
        if (x3 && (o6.V && (x3 = x3.replace("{{revisionMessage}}", o6.I ? "" : p4.revisionMessage || "")), n6.et || (n6.et = k("p"), n6.et.className = n6.et.id = "cm__desc", H(n6.Xe, n6.et)), n6.et.innerHTML = x3), g4 && (n6.tt || (n6.tt = k(r), H(n6.tt, ve()), I(n6.tt, "btn"), E(n6.tt, f, "all"), R(n6.tt, d, () => {
                S4("all");
            })), n6.tt.firstElementChild.innerHTML = g4), b4 && (n6.Ie || (n6.Ie = k(r), H(n6.Ie, ve()), I(n6.Ie, "btn"), E(n6.Ie, f, "necessary"), R(n6.Ie, d, () => {
                S4([]);
            })), n6.Ie.firstElementChild.innerHTML = b4), v3 && (n6.ot || (n6.ot = k(r), H(n6.ot, ve()), I(n6.ot, "btn"), I(n6.ot, "btn--secondary"), E(n6.ot, f, "show"), R(n6.ot, "mouseenter", () => {
                o6.N || ge(e5, t3);
            }), R(n6.ot, d, s6)), n6.ot.firstElementChild.innerHTML = v3), n6.nt || (n6.nt = k(c), I(n6.nt, l), g4 && H(n6.nt, n6.tt), b4 && H(n6.nt, n6.Ie), (g4 || b4) && H(n6.We, n6.nt), H(n6.Ye, n6.nt)), n6.ot && !n6.st && (n6.st = k(c), n6.Ie && n6.tt ? (I(n6.st, l), H(n6.st, n6.ot), H(n6.Ye, n6.st)) : (H(n6.nt, n6.ot), I(n6.nt, l + "--uneven"))), h5) {
            if (!n6.ct) {
                let e6 = k(c),
                    t4 = k(c);
                n6.ct = k(c), I(e6, "footer"), I(t4, "links"), I(n6.ct, "link-group"), H(t4, n6.ct), H(e6, t4), H(n6.he, e6);
            }
            n6.ct.innerHTML = h5;
        }
        pe(0), o6.T || (o6.T = true, ee(m.re.ue, _, n6.he), t3(e5), H(n6.Ce, n6.Qe), X(n6.he), setTimeout(() => V(n6.Qe, "cc--anim"), 100)), Z(1), U(n6.We, e5, ge, t3);
    };
    var he = (e5) => {
        if (!y(e5))
            return null;
        if (e5 in m.o._)
            return e5;
        let t3 = e5.slice(0, 2);
        return t3 in m.o._ ? t3 : null;
    };
    var Ce = () => m.o.l || m.o.i.language.default;
    var we = (e5) => {
        e5 && (m.o.l = e5);
    };
    var Se = (e5) => __async(void 0, null, function*() {
        const t3 = m.o;
        let o6 = he(e5) ? e5 : Ce(),
            n6 = t3._[o6];
        return y(n6) ? n6 = yield((e6) => __async(void 0, null, function*() {
            try {
                const t4 = yield fetch(e6);
                return yield t4.json();
            } catch (e7) {
                return console.error(e7), false;
            }
        }))(n6): C(n6) && (n6 = yield n6()), !!n6 && (t3.u = n6, we(o6), true);
    });
    var xe = () => {
        let e5 = m.o.i.language.rtl,
            t3 = m.ne.Ce;
        e5 && t3 && (v(e5) || (e5 = [e5]), b(e5, m.o.l) ? V(t3, "cc--rtl") : j(t3, "cc--rtl"));
    };
    var Me = () => {
        const e5 = m.ne;
        if (e5.Ce)
            return;
        e5.Ce = k(c), e5.Ce.id = "cc-main", e5.Ce.setAttribute("data-nosnippet", ""), xe();
        let t3 = m.o.i.root;
        t3 && y(t3) && (t3 = document.querySelector(t3)), (t3 || e5.$e.body).appendChild(e5.Ce);
    };
    var De = (e5) => te(() => localStorage.removeItem(e5));
    var Te = (e5, t3) => {
        if (t3 instanceof RegExp)
            return e5.filter((e6) => t3.test(e6)); {
            const o6 = g(e5, t3);
            return o6 > -1 ? [e5[o6]] : [];
        }
    };
    var ke = (e5) => {
        const {
            hostname: t3,
            protocol: o6
        } = location, {
            name: n6,
            path: a5,
            domain: s6,
            sameSite: c5,
            useLocalStorage: r5
        } = m.t.cookie, i6 = e5 ? (() => {
            const e6 = m.o.S,
                t4 = e6 ? /* @__PURE__ */ new Date() - e6 : 0;
            return 864e5 * B() - t4;
        })() : 864e5 * B(), l6 = /* @__PURE__ */ new Date();
        l6.setTime(l6.getTime() + i6), m.o.p.expirationTime = l6.getTime();
        const d4 = JSON.stringify(m.o.p);
        let f4 = n6 + "=" + encodeURIComponent(d4) + (0 !== i6 ? "; expires=" + l6.toUTCString() : "") + "; Path=" + a5 + "; SameSite=" + c5;
        b(t3, ".") && (f4 += "; Domain=" + s6), "https:" === o6 && (f4 += "; Secure"), r5 ? ((e6, t4) => {
            te(() => localStorage.setItem(e6, t4));
        })(n6, d4) : document.cookie = f4, m.o.p;
    };
    var Ee = (e5, t3, o6) => {
        if (0 === e5.length)
            return;
        const n6 = o6 || m.t.cookie.domain,
            a5 = t3 || m.t.cookie.path,
            s6 = "www." === n6.slice(0, 4),
            c5 = s6 && n6.substring(4),
            r5 = (e6, t4) => {
                document.cookie = e6 + "=; path=" + a5 + (t4 ? "; domain=." + t4 : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            };
        for (const t4 of e5)
            r5(t4), r5(t4, n6), s6 && r5(t4, c5);
    };
    var Ae = (e5) => {
        const t3 = e5 || m.t.cookie.name,
            o6 = m.t.cookie.useLocalStorage;
        return ((e6, t4) => {
            let o7;
            return o7 = te(() => JSON.parse(t4 ? e6 : decodeURIComponent(e6)), true) || {}, o7;
        })(o6 ? (n6 = t3, te(() => localStorage.getItem(n6)) || "") : Ne(t3, true), o6);
        var n6;
    };
    var Ne = (e5, t3) => {
        const o6 = document.cookie.match("(^|;)\\s*" + e5 + "\\s*=\\s*([^;]+)");
        return o6 ? t3 ? o6.pop() : e5 : "";
    };
    var He = (e5) => {
        const t3 = document.cookie.split(/;\s*/),
            o6 = [];
        for (const n6 of t3) {
            let t4 = n6.split("=")[0];
            e5 ? te(() => {
                e5.test(t4) && o6.push(t4);
            }) : o6.push(t4);
        }
        return o6;
    };
    var Ve = (o6, n6 = []) => {
        ((e5, t3) => {
            const {
                O: o7,
                R: n7,
                B: a5,
                N: s6,
                Z: c5,
                G: r5,
                X: i6
            } = m.o;
            let l6 = [];
            if (e5) {
                v(e5) ? l6.push(...e5) : y(e5) && (l6 = "all" === e5 ? o7 : [e5]);
                for (const e6 of o7)
                    c5[e6] = b(l6, e6) ? w(i6[e6]) : [];
            } else
                l6 = [...n7, ...r5], s6 && (l6 = (() => {
                    const e6 = m.ne.ae;
                    if (!e6)
                        return [];
                    let t4 = [];
                    for (let o8 in e6)
                        e6[o8].checked && t4.push(o8);
                    return t4;
                })());
            l6 = l6.filter((e6) => !b(o7, e6) || !b(t3, e6)), l6.push(...a5), J(l6);
        })(o6, n6), ((e5) => {
            const t3 = m.o,
                {
                    Z: o7,
                    B: n7,
                    Y: a5,
                    X: s6,
                    O: c5
                } = t3,
                r5 = c5;
            t3.te = F(a5);
            for (const e6 of r5) {
                const c6 = s6[e6],
                    r6 = w(c6),
                    i6 = o7[e6] && o7[e6].length > 0,
                    l6 = b(n7, e6);
                if (0 !== r6.length) {
                    if (a5[e6] = [], l6)
                        a5[e6].push(...r6);
                    else if (i6) {
                        const t4 = o7[e6];
                        a5[e6].push(...t4);
                    } else
                        a5[e6] = t3.Z[e6];
                    a5[e6] = S(a5[e6]);
                }
            }
        })(), (() => {
            const o7 = m.o;
            o7.L = m.t.mode === t && o7.D ? G(o7.G, o7.R) : G(o7.R, o7.p.categories);
            let n7 = o7.L.length > 0,
                a5 = false;
            for (const e5 of o7.O)
                o7.ee[e5] = G(o7.Y[e5], o7.te[e5]), o7.ee[e5].length > 0 && (a5 = true);
            const s6 = m.ne.ae;
            for (const e5 in s6)
                s6[e5].checked = b(o7.R, e5);
            for (const e5 of o7.O) {
                const t3 = m.ne.se[e5],
                    n8 = o7.Y[e5];
                for (const e6 in t3)
                    t3[e6].checked = b(n8, e6);
            }
            o7.C || (o7.C = /* @__PURE__ */ new Date()), o7.M || (o7.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (e5) => (e5 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e5 / 4).toString(16))), o7.p = {
                categories: F(o7.R),
                revision: m.t.revision,
                data: o7.h,
                consentTimestamp: o7.C.toISOString(),
                consentId: o7.M,
                services: F(o7.Y)
            };
            let c5 = false;
            const r5 = n7 || a5;
            (o7.D || r5) && (o7.D && (o7.D = false, c5 = true), o7.S = o7.S ? /* @__PURE__ */ new Date() : o7.C, o7.p.lastConsentTimestamp = o7.S.toISOString(), ke(), m.t.autoClearCookies && (c5 || r5) && ((e5) => {
                const t3 = m.o,
                    o8 = He(),
                    n8 = ((e6) => {
                        const t4 = m.o;
                        return (e6 ? t4.O : t4.L).filter((e7) => {
                            const o9 = t4.P[e7];
                            return !!o9 && !o9.readOnly && !!o9.autoClear;
                        });
                    })(e5);
                for (const e6 in t3.ee)
                    for (const n9 of t3.ee[e6]) {
                        const a6 = t3.X[e6][n9].cookies;
                        if (!b(t3.Y[e6], n9) && a6)
                            for (const e7 of a6) {
                                const t4 = Te(o8, e7.name);
                                Ee(t4, e7.path, e7.domain);
                            }
                    }
                for (const a6 of n8) {
                    const n9 = t3.P[a6].autoClear,
                        s7 = n9 && n9.cookies || [],
                        c6 = b(t3.L, a6),
                        r6 = !b(t3.R, a6),
                        i6 = c6 && r6;
                    if (e5 ? r6 : i6) {
                        n9.reloadPage && i6 && (t3.j = true);
                        for (const e6 of s7) {
                            const t4 = Te(o8, e6.name);
                            Ee(t4, e6.path, e6.domain);
                        }
                    }
                }
            })(c5), oe()), c5 && (ee(m.re.ie), ee(m.re.le), m.t.mode === e) || (r5 && ee(m.re.de), o7.j && (o7.j = false, location.reload()));
        })();
    };
    var Ie = (e5) => {
        const t3 = m.o.D ? [] : m.o.R;
        return b(t3, e5);
    };
    var Le = (e5, t3) => {
        const {
            O: o6,
            X: n6
        } = m.o;
        if (!(e5 && t3 && y(t3) && b(o6, t3) && 0 !== w(n6[t3]).length))
            return false;
        ((e6, t4) => {
            const o7 = m.o,
                {
                    X: n7,
                    Z: a5,
                    N: s6
                } = o7,
                c5 = m.ne.se[t4] || {},
                r5 = m.ne.ae[t4] || {},
                i6 = w(n7[t4]);
            if (a5[t4] = [], y(e6)) {
                if ("all" === e6) {
                    if (a5[t4].push(...i6), s6)
                        for (let e7 in c5)
                            c5[e7].checked = true, T(c5[e7]);
                } else if (b(i6, e6) && a5[t4].push(e6), s6)
                    for (let t5 in c5)
                        c5[t5].checked = e6 === t5, T(c5[t5]);
            } else if (v(e6))
                for (let o8 of i6) {
                    const n8 = b(e6, o8);
                    n8 && a5[t4].push(o8), s6 && (c5[o8].checked = n8, T(c5[o8]));
                }
            const l6 = 0 === a5[t4].length;
            o7.R = l6 ? o7.R.filter((e7) => e7 !== t4) : S([...o7.R, t4]), s6 && (r5.checked = !l6, T(r5));
        })(e5, t3), Ve();
    };
    var je = (e5, t3) => {
        const o6 = m.o.D ? [] : m.o.Y[t3] || [];
        return b(o6, e5);
    };
    var Fe = (e5) => "" !== Ne(e5, true);
    var Pe = (e5, t3, o6) => {
        let n6 = [];
        const a5 = (e6) => {
            if (y(e6)) {
                let t4 = Ne(e6);
                "" !== t4 && n6.push(t4);
            } else
                n6.push(...He(e6));
        };
        if (v(e5))
            for (let t4 of e5)
                a5(t4);
        else
            a5(e5);
        Ee(n6, t3, o6);
    };
    var Oe = (e5) => {
        const {
            ne: t3,
            o: n6
        } = m;
        if (!n6.k) {
            if (!n6.T) {
                if (!e5)
                    return;
                ye(Je, Me);
            }
            n6.k = true, n6.U = x(), n6.v && K(true), z(t3.he, 1), V(t3.ye, o), E(t3.he, i, "false"), setTimeout(() => {
                $(m.ne.be);
            }, 100), ee(m.re.fe, _);
        }
    };
    var Re = () => {
        const {
            ne: e5,
            o: t3,
            re: n6
        } = m;
        t3.k && (t3.k = false, t3.v && K(), $(e5.Ke, true), j(e5.ye, o), E(e5.he, i, "true"), $(t3.U), t3.U = null, ee(n6._e, _));
    };
    var Be = () => {
        const e5 = m.o;
        e5.A || (e5.N || ge(Je, Me), e5.A = true, e5.k ? e5.$ = x() : e5.U = x(), z(m.ne.we, 2), V(m.ne.ye, n), E(m.ne.we, i, "false"), setTimeout(() => {
            $(m.ne.ve);
        }, 100), ee(m.re.fe, u));
    };
    var Ge = () => {
        const e5 = m.o;
        e5.A && (e5.A = false, (() => {
            const e6 = We(),
                t3 = m.o.P,
                o6 = m.ne.ae,
                n6 = m.ne.se,
                a5 = (e7) => b(m.o.G, e7);
            for (const s6 in o6) {
                const c5 = !!t3[s6].readOnly;
                o6[s6].checked = c5 || (e6 ? Ie(s6) : a5(s6));
                for (const t4 in n6[s6])
                    n6[s6][t4].checked = c5 || (e6 ? je(t4, s6) : a5(s6));
            }
        })(), $(m.ne.Ge, true), j(m.ne.ye, n), E(m.ne.we, i, "true"), e5.k ? ($(e5.$), e5.$ = null) : ($(e5.U), e5.U = null), ee(m.re._e, u));
    };
    var Je = {
        show: Oe,
        hide: Re,
        showPreferences: Be,
        hidePreferences: Ge,
        acceptCategory: Ve
    };
    var Ue = (e5, t3) => __async(void 0, null, function*() {
        if (!he(e5))
            return false;
        const o6 = m.o;
        return !(e5 === Ce() && true !== t3 || !(yield Se(e5)) || (we(e5), o6.T && ye(Je, Me), o6.N && ge(Je, Me), xe(), 0));
    });
    var $e = () => {
        const {
            F: e5,
            Y: t3
        } = m.o, {
            accepted: o6,
            rejected: n6
        } = (() => {
            const {
                D: e6,
                R: t4,
                O: o7
            } = m.o;
            return {
                accepted: t4,
                rejected: e6 ? [] : o7.filter((e7) => !b(t4, e7))
            };
        })();
        return F({
            acceptType: e5,
            acceptedCategories: o6,
            rejectedCategories: n6,
            acceptedServices: t3,
            rejectedServices: P()
        });
    };
    var ze = (e5, t3) => {
        let o6 = document.querySelector('script[src="' + e5 + '"]');
        return new Promise((n6) => {
            if (o6)
                return n6(true);
            if (o6 = k("script"), h(t3))
                for (const e6 in t3)
                    E(o6, e6, t3[e6]);
            o6.onload = () => n6(true), o6.onerror = () => {
                o6.remove(), n6(false);
            }, o6.src = e5, H(document.head, o6);
        });
    };
    var qe = (e5) => {
        let t3, o6 = e5.value,
            n6 = e5.mode,
            a5 = false;
        const s6 = m.o;
        if ("update" === n6) {
            s6.h = t3 = Ke("data");
            const e6 = typeof t3 == typeof o6;
            if (e6 && "object" == typeof t3) {
                !t3 && (t3 = {});
                for (let e7 in o6)
                    t3[e7] !== o6[e7] && (t3[e7] = o6[e7], a5 = true);
            } else
                !e6 && t3 || t3 === o6 || (t3 = o6, a5 = true);
        } else
            t3 = o6, a5 = true;
        return a5 && (s6.h = t3, s6.p.data = t3, ke(true)), a5;
    };
    var Ke = (e5, t3) => {
        const o6 = Ae(t3);
        return e5 ? o6[e5] : o6;
    };
    var Qe = (e5) => {
        const t3 = m.t,
            o6 = m.o.i;
        return e5 ? t3[e5] || o6[e5] : __spreadProps(__spreadValues(__spreadValues({}, t3), o6), {
            cookie: __spreadValues({}, t3.cookie)
        });
    };
    var We = () => !m.o.D;
    var Xe = (e5) => __async(void 0, null, function*() {
        const {
            o: o6,
            t: n6,
            re: a5
        } = m, c5 = window;
        if (!c5._ccRun) {
            if (c5._ccRun = true, ((e6) => {
                    const {
                        ne: o7,
                        t: n7,
                        o: a6
                    } = m, c6 = n7, r6 = a6, {
                        cookie: i7
                    } = c6, l6 = m.ce, d4 = e6.cookie, f4 = e6.categories, _4 = w(f4) || [], u4 = navigator, p4 = document;
                    o7.$e = p4, o7.ye = p4.documentElement, i7.domain = location.hostname, r6.i = e6, r6.P = f4, r6.O = _4, r6._ = e6.language.translations, r6.v = !!e6.disablePageInteraction, l6.ie = e6.onFirstConsent, l6.le = e6.onConsent, l6.de = e6.onChange, l6._e = e6.onModalHide, l6.fe = e6.onModalShow, l6.ue = e6.onModalReady;
                    const {
                        mode: g4,
                        autoShow: v3,
                        lazyHtmlGeneration: y4,
                        autoClearCookies: C3,
                        revision: S4,
                        manageScriptTags: x3,
                        hideFromBots: M3
                    } = e6;
                    g4 === t && (c6.mode = g4), "boolean" == typeof C3 && (c6.autoClearCookies = C3), "boolean" == typeof x3 && (c6.manageScriptTags = x3), "number" == typeof S4 && S4 >= 0 && (c6.revision = S4, r6.V = true), "boolean" == typeof v3 && (c6.autoShow = v3), "boolean" == typeof y4 && (c6.lazyHtmlGeneration = y4), false === M3 && (c6.hideFromBots = false), true === c6.hideFromBots && u4 && (r6.J = u4.userAgent && /bot|crawl|spider|slurp|teoma/i.test(u4.userAgent) || u4.webdriver), h(d4) && (c6.cookie = __spreadValues(__spreadValues({}, i7), d4)), c6.autoClearCookies, r6.V, c6.manageScriptTags, ((e7) => {
                        const {
                            P: t3,
                            X: o8,
                            Y: n8,
                            Z: a7,
                            B: s6
                        } = m.o;
                        for (let c7 of e7) {
                            const e8 = t3[c7],
                                r7 = e8.services || {},
                                i8 = h(r7) && w(r7) || [];
                            o8[c7] = {}, n8[c7] = [], a7[c7] = [], e8.readOnly && (s6.push(c7), n8[c7] = i8), m.ne.se[c7] = {};
                            for (let e9 of i8) {
                                const t4 = r7[e9];
                                t4.Se = false, o8[c7][e9] = t4;
                            }
                        }
                    })(_4), (() => {
                        if (!m.t.manageScriptTags)
                            return;
                        const e7 = m.o,
                            t3 = D(document, "script[" + s + "]");
                        for (const o8 of t3) {
                            let t4 = N(o8, s),
                                n8 = o8.dataset.service || "",
                                a7 = false;
                            if (t4 && "!" === t4.charAt(0) && (t4 = t4.slice(1), a7 = true), "!" === n8.charAt(0) && (n8 = n8.slice(1), a7 = true), b(e7.O, t4) && (e7.oe.push({
                                    Me: o8,
                                    xe: false,
                                    ke: a7,
                                    De: t4,
                                    Te: n8
                                }), n8)) {
                                const o9 = e7.X[t4];
                                o9[n8] || (o9[n8] = {
                                    Se: false
                                });
                            }
                        }
                    })(), we((() => {
                        const e7 = m.o.i.language.autoDetect;
                        if (e7) {
                            const t3 = {
                                    browser: navigator.language,
                                    document: document.documentElement.lang
                                },
                                o8 = he(t3[e7]);
                            if (o8)
                                return o8;
                        }
                        return Ce();
                    })());
                })(e5), o6.J)
                return;
            (() => {
                const e6 = m.o,
                    o7 = m.t,
                    n7 = Ae(),
                    {
                        categories: a6,
                        services: s6,
                        consentId: c6,
                        consentTimestamp: r6,
                        lastConsentTimestamp: i7,
                        data: l6,
                        revision: d4
                    } = n7,
                    f4 = v(a6);
                e6.p = n7, e6.M = c6;
                const _4 = !!c6 && y(c6);
                e6.C = r6, e6.C && (e6.C = new Date(r6)), e6.S = i7, e6.S && (e6.S = new Date(i7)), e6.h = void 0 !== l6 ? l6 : null, e6.V && _4 && d4 !== o7.revision && (e6.I = false), e6.D = !(_4 && e6.I && e6.C && e6.S && f4), o7.cookie.useLocalStorage && !e6.D && (e6.D = ( /* @__PURE__ */ new Date()).getTime() > (n7.expirationTime || 0), e6.D && De(o7.cookie.name)), e6.D, (() => {
                    const e7 = m.o;
                    for (const o8 of e7.O) {
                        const n8 = e7.P[o8];
                        if (n8.readOnly || n8.enabled) {
                            e7.G.push(o8);
                            const n9 = e7.X[o8] || {};
                            for (let a7 in n9)
                                e7.Z[o8].push(a7), e7.i.mode === t && e7.Y[o8].push(a7);
                        }
                    }
                })(), e6.D ? o7.mode === t && (e6.R = [...e6.G]) : (e6.Z = __spreadValues({}, e6.Y), e6.Y = __spreadValues(__spreadValues({}, e6.Y), s6), J([...e6.B, ...a6]));
            })();
            const i6 = We();
            if (!(yield Se()))
                return false;
            if (U(null, r5 = Je, ge, Me), m.o.D && ye(r5, Me), m.t.lazyHtmlGeneration || ge(r5, Me), n6.autoShow && !i6 && Oe(true), i6)
                return oe(), ee(a5.le);
            n6.mode === t && oe(o6.G);
        }
        var r5;
    });
    var Ye = (e5) => {
        const {
            Ce: t3,
            ye: s6
        } = m.ne, {
            name: c5,
            path: r5,
            domain: i6,
            useLocalStorage: l6
        } = m.t.cookie;
        e5 && (l6 ? De(c5) : Pe(c5, r5, i6));
        for (const {
                pe: e6,
                me: t4,
                ge: o6
            } of m.o.m)
            e6.removeEventListener(t4, o6);
        t3 && t3.remove(), s6 && s6.classList.remove(a, n, o);
        const d4 = new p();
        for (const e6 in m)
            m[e6] = d4[e6];
        window._ccRun = false;
    };

    // assets/scripts/modules/CookieConsent.js
    var CookieConsent_default = class extends _default {
        constructor(options) {
            super(options);
            var opts = this.getData("config");
            try {
                this.cookieConfig = JSON.parse(opts);
            } catch (e5) {
                console.warn(e5.message);
            }
            this.cookieConfig.categories = this.prepareCategories(this.cookieConfig.categories);
            Xe(Object.assign({
                onConsent: () => {
                    this.toggleCategoryFunctional();
                },
                onChange: ({
                    changedCategories
                }) => {
                    if (changedCategories.includes("functional")) {
                        this.toggleCategoryFunctional();
                    }
                },
                onModalShow: () => {
                    this.addDismissConsentModalEventListener();
                },
                onModalHide: () => {
                    this.removeDismissConsentModalEventListener();
                }
            }, this.cookieConfig));
            this.events = {
                click: {
                    "hide": "hideModals",
                    "show-preferences-modal": "showPreferences"
                }
            };
            this.dismissConsentModalEventListener = (event2) => {
                if (event2.keyCode === 27) {
                    Re();
                }
            };
        }
        addDismissConsentModalEventListener() {
            document.addEventListener("keydown", this.dismissConsentModalEventListener, {
                passive: true
            });
        }
        removeDismissConsentModalEventListener() {
            document.removeEventListener("keydown", this.dismissConsentModalEventListener);
        }
        hideModals() {
            Re();
            Ge();
        }
        showPreferences() {
            Be();
        }
        toggleCategoryFunctional() {
            var _a, _b, _c;
            const isAccepted = cookieconsent_esm_exports == null ? void 0 : cookieconsent_esm_exports.acceptedCategory("functional");
            if (!isAccepted) {
                const cookies = (_c = (_b = (_a = Qe("categories")) == null ? void 0 : _a.functional) == null ? void 0 : _b.autoClear) == null ? void 0 : _c.cookies;
                if (Array.isArray(cookies) && cookies.length) {
                    this.eraseStorageItems(cookies);
                }
            }
        }
        eraseStorageItems(cookies) {
            let localStorageKeys;
            let sessionStorageKeys;
            for (const {
                    name: cookieName
                } of cookies) {
                if (isLocalStorageAvailable()) {
                    localStorageKeys != null ? localStorageKeys : localStorageKeys = getAllStorageKeys(window.localStorage);
                    const foundCookies = findMatchingCookies(localStorageKeys, cookieName);
                    for (const foundCookie of foundCookies) {
                        window.localStorage.removeItem(foundCookie);
                    }
                }
                if (isSessionStorageAvailable()) {
                    sessionStorageKeys != null ? sessionStorageKeys : sessionStorageKeys = getAllStorageKeys(window.sessionStorage);
                    const foundCookies = findMatchingCookies(sessionStorageKeys, cookieName);
                    for (const foundCookie of foundCookies) {
                        window.sessionStorage.removeItem(foundCookie);
                    }
                }
            }
        }
        prepareCategories(categories) {
            var _a;
            for (const [categoryName, categoryData] of Object.entries(categories)) {
                if (((_a = categoryData == null ? void 0 : categoryData.autoClear) == null ? void 0 : _a.cookies) && Array.isArray(categoryData.autoClear.cookies) && categoryData.autoClear.cookies.length > 0) {
                    categoryData.autoClear.cookies.map((cookie) => {
                        if ((cookie == null ? void 0 : cookie.name) && typeof cookie.name === "string") {
                            const found = cookie.name.match(/^\/(.+)\/([a-z]+)?$/);
                            if (found) {
                                cookie.name = new RegExp(found[1], found[2]);
                            }
                        }
                        return cookie;
                    });
                    categories[categoryName].autoClear.cookies = categoryData.autoClear.cookies;
                }
            }
            return categories;
        }
        destroy() {}
    };

    function findMatchingCookies(allCookies, cookieName) {
        if (cookieName instanceof RegExp) {
            return allCookies.filter((cookie) => cookieName.test(cookie));
        } else {
            const cookieIndex = allCookies.indexOf(cookieName);
            return cookieIndex > -1 ? [allCookies[cookieIndex]] : [];
        }
    }

    function getAllStorageKeys(storage, regex) {
        const cookieNames = [];
        for (const name of Object.keys(storage)) {
            if (regex) {
                try {
                    regex.test(name) && cookieNames.push(name);
                } catch (e5) {}
            } else {
                cookieNames.push(name);
            }
        }
        return cookieNames;
    }

    // assets/scripts/utils/dom.js
    var $html = document.documentElement;
    var $body = document.body;

    // node_modules/tabbable/dist/index.esm.js
    var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
        var _element$getRootNode;
        return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
        return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var isInert = function isInert2(node, lookUp) {
        var _node$getAttribute;
        if (lookUp === void 0) {
            lookUp = true;
        }
        var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
        var inert = inertAtt === "" || inertAtt === "true";
        var result = inert || lookUp && node && isInert2(node.parentNode);
        return result;
    };
    var isContentEditable = function isContentEditable2(node) {
        var _node$getAttribute2;
        var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
        return attValue === "" || attValue === "true";
    };
    var getCandidates = function getCandidates2(el, includeContainer, filter) {
        if (isInert(el)) {
            return [];
        }
        var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
        if (includeContainer && matches.call(el, candidateSelector)) {
            candidates.unshift(el);
        }
        candidates = candidates.filter(filter);
        return candidates;
    };
    var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
        var candidates = [];
        var elementsToCheck = Array.from(elements);
        while (elementsToCheck.length) {
            var element = elementsToCheck.shift();
            if (isInert(element, false)) {
                continue;
            }
            if (element.tagName === "SLOT") {
                var assigned = element.assignedElements();
                var content = assigned.length ? assigned : element.children;
                var nestedCandidates = getCandidatesIteratively2(content, true, options);
                if (options.flatten) {
                    candidates.push.apply(candidates, nestedCandidates);
                } else {
                    candidates.push({
                        scopeParent: element,
                        candidates: nestedCandidates
                    });
                }
            } else {
                var validCandidate = matches.call(element, candidateSelector);
                if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
                    candidates.push(element);
                }
                var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
                    typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
                var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
                if (shadowRoot && validShadowRoot) {
                    var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
                    if (options.flatten) {
                        candidates.push.apply(candidates, _nestedCandidates);
                    } else {
                        candidates.push({
                            scopeParent: element,
                            candidates: _nestedCandidates
                        });
                    }
                } else {
                    elementsToCheck.unshift.apply(elementsToCheck, element.children);
                }
            }
        }
        return candidates;
    };
    var hasTabIndex = function hasTabIndex2(node) {
        return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
    };
    var getTabIndex = function getTabIndex2(node) {
        if (!node) {
            throw new Error("No node provided");
        }
        if (node.tabIndex < 0) {
            if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
                return 0;
            }
        }
        return node.tabIndex;
    };
    var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
        var tabIndex = getTabIndex(node);
        if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
            return 0;
        }
        return tabIndex;
    };
    var sortOrderedTabbables = function sortOrderedTabbables2(a5, b4) {
        return a5.tabIndex === b4.tabIndex ? a5.documentOrder - b4.documentOrder : a5.tabIndex - b4.tabIndex;
    };
    var isInput = function isInput2(node) {
        return node.tagName === "INPUT";
    };
    var isHiddenInput = function isHiddenInput2(node) {
        return isInput(node) && node.type === "hidden";
    };
    var isDetailsWithSummary = function isDetailsWithSummary2(node) {
        var r5 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
            return child.tagName === "SUMMARY";
        });
        return r5;
    };
    var getCheckedRadio = function getCheckedRadio2(nodes, form) {
        for (var i6 = 0; i6 < nodes.length; i6++) {
            if (nodes[i6].checked && nodes[i6].form === form) {
                return nodes[i6];
            }
        }
    };
    var isTabbableRadio = function isTabbableRadio2(node) {
        if (!node.name) {
            return true;
        }
        var radioScope = node.form || getRootNode(node);
        var queryRadios = function queryRadios2(name) {
            return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
        };
        var radioSet;
        if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
            radioSet = queryRadios(window.CSS.escape(node.name));
        } else {
            try {
                radioSet = queryRadios(node.name);
            } catch (err) {
                console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
                return false;
            }
        }
        var checked = getCheckedRadio(radioSet, node.form);
        return !checked || checked === node;
    };
    var isRadio = function isRadio2(node) {
        return isInput(node) && node.type === "radio";
    };
    var isNonTabbableRadio = function isNonTabbableRadio2(node) {
        return isRadio(node) && !isTabbableRadio(node);
    };
    var isNodeAttached = function isNodeAttached2(node) {
        var _nodeRoot;
        var nodeRoot = node && getRootNode(node);
        var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
        var attached = false;
        if (nodeRoot && nodeRoot !== node) {
            var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
            attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
            while (!attached && nodeRootHost) {
                var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
                nodeRoot = getRootNode(nodeRootHost);
                nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
                attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
            }
        }
        return attached;
    };
    var isZeroArea = function isZeroArea2(node) {
        var _node$getBoundingClie = node.getBoundingClientRect(),
            width = _node$getBoundingClie.width,
            height = _node$getBoundingClie.height;
        return width === 0 && height === 0;
    };
    var isHidden = function isHidden2(node, _ref) {
        var displayCheck = _ref.displayCheck,
            getShadowRoot = _ref.getShadowRoot;
        if (getComputedStyle(node).visibility === "hidden") {
            return true;
        }
        var isDirectSummary = matches.call(node, "details>summary:first-of-type");
        var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
        if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
            return true;
        }
        if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
            if (typeof getShadowRoot === "function") {
                var originalNode = node;
                while (node) {
                    var parentElement = node.parentElement;
                    var rootNode = getRootNode(node);
                    if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
                        return isZeroArea(node);
                    } else if (node.assignedSlot) {
                        node = node.assignedSlot;
                    } else if (!parentElement && rootNode !== node.ownerDocument) {
                        node = rootNode.host;
                    } else {
                        node = parentElement;
                    }
                }
                node = originalNode;
            }
            if (isNodeAttached(node)) {
                return !node.getClientRects().length;
            }
            if (displayCheck !== "legacy-full") {
                return true;
            }
        } else if (displayCheck === "non-zero-area") {
            return isZeroArea(node);
        }
        return false;
    };
    var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
            var parentNode = node.parentElement;
            while (parentNode) {
                if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
                    for (var i6 = 0; i6 < parentNode.children.length; i6++) {
                        var child = parentNode.children.item(i6);
                        if (child.tagName === "LEGEND") {
                            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
                        }
                    }
                    return true;
                }
                parentNode = parentNode.parentElement;
            }
        }
        return false;
    };
    var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
        if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
            //  because we're limited in the type of selectors we can use in JSDom (see related
            //  note related to `candidateSelectors`)
            isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
            isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
            return false;
        }
        return true;
    };
    var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
        if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
            return false;
        }
        return true;
    };
    var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
        var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
        if (isNaN(tabIndex) || tabIndex >= 0) {
            return true;
        }
        return false;
    };
    var sortByOrder = function sortByOrder2(candidates) {
        var regularTabbables = [];
        var orderedTabbables = [];
        candidates.forEach(function(item, i6) {
            var isScope = !!item.scopeParent;
            var element = isScope ? item.scopeParent : item;
            var candidateTabindex = getSortOrderTabIndex(element, isScope);
            var elements = isScope ? sortByOrder2(item.candidates) : element;
            if (candidateTabindex === 0) {
                isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
            } else {
                orderedTabbables.push({
                    documentOrder: i6,
                    tabIndex: candidateTabindex,
                    item,
                    isScope,
                    content: elements
                });
            }
        });
        return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
            sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
            return acc;
        }, []).concat(regularTabbables);
    };
    var tabbable = function tabbable2(container, options) {
        options = options || {};
        var candidates;
        if (options.getShadowRoot) {
            candidates = getCandidatesIteratively([container], options.includeContainer, {
                filter: isNodeMatchingSelectorTabbable.bind(null, options),
                flatten: false,
                getShadowRoot: options.getShadowRoot,
                shadowRootFilter: isValidShadowRootTabbable
            });
        } else {
            candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
        }
        return sortByOrder(candidates);
    };
    var focusable = function focusable2(container, options) {
        options = options || {};
        var candidates;
        if (options.getShadowRoot) {
            candidates = getCandidatesIteratively([container], options.includeContainer, {
                filter: isNodeMatchingSelectorFocusable.bind(null, options),
                flatten: true,
                getShadowRoot: options.getShadowRoot
            });
        } else {
            candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
        }
        return candidates;
    };
    var isTabbable = function isTabbable2(node, options) {
        options = options || {};
        if (!node) {
            throw new Error("No node provided");
        }
        if (matches.call(node, candidateSelector) === false) {
            return false;
        }
        return isNodeMatchingSelectorTabbable(options, node);
    };
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    var isFocusable = function isFocusable2(node, options) {
        options = options || {};
        if (!node) {
            throw new Error("No node provided");
        }
        if (matches.call(node, focusableCandidateSelector) === false) {
            return false;
        }
        return isNodeMatchingSelectorFocusable(options, node);
    };

    // node_modules/focus-trap/dist/focus-trap.esm.js
    function ownKeys(e5, r5) {
        var t3 = Object.keys(e5);
        if (Object.getOwnPropertySymbols) {
            var o6 = Object.getOwnPropertySymbols(e5);
            r5 && (o6 = o6.filter(function(r6) {
                return Object.getOwnPropertyDescriptor(e5, r6).enumerable;
            })), t3.push.apply(t3, o6);
        }
        return t3;
    }

    function _objectSpread2(e5) {
        for (var r5 = 1; r5 < arguments.length; r5++) {
            var t3 = null != arguments[r5] ? arguments[r5] : {};
            r5 % 2 ? ownKeys(Object(t3), true).forEach(function(r6) {
                _defineProperty2(e5, r6, t3[r6]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(t3)) : ownKeys(Object(t3)).forEach(function(r6) {
                Object.defineProperty(e5, r6, Object.getOwnPropertyDescriptor(t3, r6));
            });
        }
        return e5;
    }

    function _defineProperty2(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null)
            return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object")
                return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
    }

    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }
    var activeFocusTraps = {
        activateTrap: function activateTrap(trapStack, trap) {
            if (trapStack.length > 0) {
                var activeTrap = trapStack[trapStack.length - 1];
                if (activeTrap !== trap) {
                    activeTrap.pause();
                }
            }
            var trapIndex = trapStack.indexOf(trap);
            if (trapIndex === -1) {
                trapStack.push(trap);
            } else {
                trapStack.splice(trapIndex, 1);
                trapStack.push(trap);
            }
        },
        deactivateTrap: function deactivateTrap(trapStack, trap) {
            var trapIndex = trapStack.indexOf(trap);
            if (trapIndex !== -1) {
                trapStack.splice(trapIndex, 1);
            }
            if (trapStack.length > 0) {
                trapStack[trapStack.length - 1].unpause();
            }
        }
    };
    var isSelectableInput = function isSelectableInput2(node) {
        return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
    };
    var isEscapeEvent = function isEscapeEvent2(e5) {
        return (e5 === null || e5 === void 0 ? void 0 : e5.key) === "Escape" || (e5 === null || e5 === void 0 ? void 0 : e5.key) === "Esc" || (e5 === null || e5 === void 0 ? void 0 : e5.keyCode) === 27;
    };
    var isTabEvent = function isTabEvent2(e5) {
        return (e5 === null || e5 === void 0 ? void 0 : e5.key) === "Tab" || (e5 === null || e5 === void 0 ? void 0 : e5.keyCode) === 9;
    };
    var isKeyForward = function isKeyForward2(e5) {
        return isTabEvent(e5) && !e5.shiftKey;
    };
    var isKeyBackward = function isKeyBackward2(e5) {
        return isTabEvent(e5) && e5.shiftKey;
    };
    var delay = function delay2(fn) {
        return setTimeout(fn, 0);
    };
    var findIndex = function findIndex2(arr, fn) {
        var idx = -1;
        arr.every(function(value, i6) {
            if (fn(value)) {
                idx = i6;
                return false;
            }
            return true;
        });
        return idx;
    };
    var valueOrHandler = function valueOrHandler2(value) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
        }
        return typeof value === "function" ? value.apply(void 0, params) : value;
    };
    var getActualTarget = function getActualTarget2(event2) {
        return event2.target.shadowRoot && typeof event2.composedPath === "function" ? event2.composedPath()[0] : event2.target;
    };
    var internalTrapStack = [];
    var createFocusTrap = function createFocusTrap2(elements, userOptions) {
        var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
        var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
        var config = _objectSpread2({
            returnFocusOnDeactivate: true,
            escapeDeactivates: true,
            delayInitialFocus: true,
            isKeyForward,
            isKeyBackward
        }, userOptions);
        var state = {
            // containers given to createFocusTrap()
            // @type {Array<HTMLElement>}
            containers: [],
            // list of objects identifying tabbable nodes in `containers` in the trap
            // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
            //  is active, but the trap should never get to a state where there isn't at least one group
            //  with at least one tabbable node in it (that would lead to an error condition that would
            //  result in an error being thrown)
            // @type {Array<{
            //   container: HTMLElement,
            //   tabbableNodes: Array<HTMLElement>, // empty if none
            //   focusableNodes: Array<HTMLElement>, // empty if none
            //   posTabIndexesFound: boolean,
            //   firstTabbableNode: HTMLElement|undefined,
            //   lastTabbableNode: HTMLElement|undefined,
            //   firstDomTabbableNode: HTMLElement|undefined,
            //   lastDomTabbableNode: HTMLElement|undefined,
            //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
            // }>}
            containerGroups: [],
            // same order/length as `containers` list
            // references to objects in `containerGroups`, but only those that actually have
            //  tabbable nodes in them
            // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
            //  the same length
            tabbableGroups: [],
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: false,
            paused: false,
            // timer ID for when delayInitialFocus is true and initial focus in this trap
            //  has been delayed during activation
            delayInitialFocusTimer: void 0,
            // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
            recentNavEvent: void 0
        };
        var trap;
        var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
            return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
        };
        var findContainerIndex = function findContainerIndex2(element, event2) {
            var composedPath = typeof(event2 === null || event2 === void 0 ? void 0 : event2.composedPath) === "function" ? event2.composedPath() : void 0;
            return state.containerGroups.findIndex(function(_ref) {
                var container = _ref.container,
                    tabbableNodes = _ref.tabbableNodes;
                return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
                    //  web components if the `tabbableOptions.getShadowRoot` option was used for
                    //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
                    //  look inside web components even if open)
                    (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
                        return node === element;
                    });
            });
        };
        var getNodeForOption = function getNodeForOption2(optionName) {
            var optionValue = config[optionName];
            if (typeof optionValue === "function") {
                for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    params[_key2 - 1] = arguments[_key2];
                }
                optionValue = optionValue.apply(void 0, params);
            }
            if (optionValue === true) {
                optionValue = void 0;
            }
            if (!optionValue) {
                if (optionValue === void 0 || optionValue === false) {
                    return optionValue;
                }
                throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
            }
            var node = optionValue;
            if (typeof optionValue === "string") {
                node = doc.querySelector(optionValue);
                if (!node) {
                    throw new Error("`".concat(optionName, "` as selector refers to no known node"));
                }
            }
            return node;
        };
        var getInitialFocusNode = function getInitialFocusNode2() {
            var node = getNodeForOption("initialFocus");
            if (node === false) {
                return false;
            }
            if (node === void 0 || !isFocusable(node, config.tabbableOptions)) {
                if (findContainerIndex(doc.activeElement) >= 0) {
                    node = doc.activeElement;
                } else {
                    var firstTabbableGroup = state.tabbableGroups[0];
                    var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
                    node = firstTabbableNode || getNodeForOption("fallbackFocus");
                }
            }
            if (!node) {
                throw new Error("Your focus-trap needs to have at least one focusable element");
            }
            return node;
        };
        var updateTabbableNodes = function updateTabbableNodes2() {
            state.containerGroups = state.containers.map(function(container) {
                var tabbableNodes = tabbable(container, config.tabbableOptions);
                var focusableNodes = focusable(container, config.tabbableOptions);
                var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
                var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
                var firstDomTabbableNode = focusableNodes.find(function(node) {
                    return isTabbable(node);
                });
                var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
                    return isTabbable(node);
                });
                var posTabIndexesFound = !!tabbableNodes.find(function(node) {
                    return getTabIndex(node) > 0;
                });
                return {
                    container,
                    tabbableNodes,
                    focusableNodes,
                    /** True if at least one node with positive `tabindex` was found in this container. */
                    posTabIndexesFound,
                    /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
                    firstTabbableNode,
                    /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
                    lastTabbableNode,
                    // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
                    //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
                    //  because that API doesn't work with Shadow DOM as well as it should (@see
                    //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
                    //  to address an edge case related to positive tabindex support, this seems like a much easier,
                    //  "close enough most of the time" alternative for positive tabindexes which should generally
                    //  be avoided anyway...
                    /** First tabbable node in container, __DOM__ order; `undefined` if none. */
                    firstDomTabbableNode,
                    /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
                    lastDomTabbableNode,
                    /**
                     * Finds the __tabbable__ node that follows the given node in the specified direction,
                     *  in this container, if any.
                     * @param {HTMLElement} node
                     * @param {boolean} [forward] True if going in forward tab order; false if going
                     *  in reverse.
                     * @returns {HTMLElement|undefined} The next tabbable node, if any.
                     */
                    nextTabbableNode: function nextTabbableNode(node) {
                        var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        var nodeIdx = tabbableNodes.indexOf(node);
                        if (nodeIdx < 0) {
                            if (forward) {
                                return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                                    return isTabbable(el);
                                });
                            }
                            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
                                return isTabbable(el);
                            });
                        }
                        return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
                    }
                };
            });
            state.tabbableGroups = state.containerGroups.filter(function(group) {
                return group.tabbableNodes.length > 0;
            });
            if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
                throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
            }
            if (state.containerGroups.find(function(g4) {
                    return g4.posTabIndexesFound;
                }) && state.containerGroups.length > 1) {
                throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
            }
        };
        var getActiveElement = function getActiveElement2(el) {
            var activeElement = el.activeElement;
            if (!activeElement) {
                return;
            }
            if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
                return getActiveElement2(activeElement.shadowRoot);
            }
            return activeElement;
        };
        var tryFocus = function tryFocus2(node) {
            if (node === false) {
                return;
            }
            if (node === getActiveElement(document)) {
                return;
            }
            if (!node || !node.focus) {
                tryFocus2(getInitialFocusNode());
                return;
            }
            node.focus({
                preventScroll: !!config.preventScroll
            });
            state.mostRecentlyFocusedNode = node;
            if (isSelectableInput(node)) {
                node.select();
            }
        };
        var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
            var node = getNodeForOption("setReturnFocus", previousActiveElement);
            return node ? node : node === false ? false : previousActiveElement;
        };
        var findNextNavNode = function findNextNavNode2(_ref2) {
            var target = _ref2.target,
                event2 = _ref2.event,
                _ref2$isBackward = _ref2.isBackward,
                isBackward = _ref2$isBackward === void 0 ? false : _ref2$isBackward;
            target = target || getActualTarget(event2);
            updateTabbableNodes();
            var destinationNode = null;
            if (state.tabbableGroups.length > 0) {
                var containerIndex = findContainerIndex(target, event2);
                var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : void 0;
                if (containerIndex < 0) {
                    if (isBackward) {
                        destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
                    } else {
                        destinationNode = state.tabbableGroups[0].firstTabbableNode;
                    }
                } else if (isBackward) {
                    var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
                        var firstTabbableNode = _ref3.firstTabbableNode;
                        return target === firstTabbableNode;
                    });
                    if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
                        startOfGroupIndex = containerIndex;
                    }
                    if (startOfGroupIndex >= 0) {
                        var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
                        var destinationGroup = state.tabbableGroups[destinationGroupIndex];
                        destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
                    } else if (!isTabEvent(event2)) {
                        destinationNode = containerGroup.nextTabbableNode(target, false);
                    }
                } else {
                    var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref4) {
                        var lastTabbableNode = _ref4.lastTabbableNode;
                        return target === lastTabbableNode;
                    });
                    if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
                        lastOfGroupIndex = containerIndex;
                    }
                    if (lastOfGroupIndex >= 0) {
                        var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
                        var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
                        destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
                    } else if (!isTabEvent(event2)) {
                        destinationNode = containerGroup.nextTabbableNode(target);
                    }
                }
            } else {
                destinationNode = getNodeForOption("fallbackFocus");
            }
            return destinationNode;
        };
        var checkPointerDown = function checkPointerDown2(e5) {
            var target = getActualTarget(e5);
            if (findContainerIndex(target, e5) >= 0) {
                return;
            }
            if (valueOrHandler(config.clickOutsideDeactivates, e5)) {
                trap.deactivate({
                    // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
                    //  which will result in the outside click setting focus to the node
                    //  that was clicked (and if not focusable, to "nothing"); by setting
                    //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
                    //  on activation (or the configured `setReturnFocus` node), whether the
                    //  outside click was on a focusable node or not
                    returnFocus: config.returnFocusOnDeactivate
                });
                return;
            }
            if (valueOrHandler(config.allowOutsideClick, e5)) {
                return;
            }
            e5.preventDefault();
        };
        var checkFocusIn = function checkFocusIn2(event2) {
            var target = getActualTarget(event2);
            var targetContained = findContainerIndex(target, event2) >= 0;
            if (targetContained || target instanceof Document) {
                if (targetContained) {
                    state.mostRecentlyFocusedNode = target;
                }
            } else {
                event2.stopImmediatePropagation();
                var nextNode;
                var navAcrossContainers = true;
                if (state.mostRecentlyFocusedNode) {
                    if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
                        var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
                        var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
                        if (tabbableNodes.length > 0) {
                            var mruTabIdx = tabbableNodes.findIndex(function(node) {
                                return node === state.mostRecentlyFocusedNode;
                            });
                            if (mruTabIdx >= 0) {
                                if (config.isKeyForward(state.recentNavEvent)) {
                                    if (mruTabIdx + 1 < tabbableNodes.length) {
                                        nextNode = tabbableNodes[mruTabIdx + 1];
                                        navAcrossContainers = false;
                                    }
                                } else {
                                    if (mruTabIdx - 1 >= 0) {
                                        nextNode = tabbableNodes[mruTabIdx - 1];
                                        navAcrossContainers = false;
                                    }
                                }
                            }
                        }
                    } else {
                        if (!state.containerGroups.some(function(g4) {
                                return g4.tabbableNodes.some(function(n6) {
                                    return getTabIndex(n6) > 0;
                                });
                            })) {
                            navAcrossContainers = false;
                        }
                    }
                } else {
                    navAcrossContainers = false;
                }
                if (navAcrossContainers) {
                    nextNode = findNextNavNode({
                        // move FROM the MRU node, not event-related node (which will be the node that is
                        //  outside the trap causing the focus escape we're trying to fix)
                        target: state.mostRecentlyFocusedNode,
                        isBackward: config.isKeyBackward(state.recentNavEvent)
                    });
                }
                if (nextNode) {
                    tryFocus(nextNode);
                } else {
                    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
                }
            }
            state.recentNavEvent = void 0;
        };
        var checkKeyNav = function checkKeyNav2(event2) {
            var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            state.recentNavEvent = event2;
            var destinationNode = findNextNavNode({
                event: event2,
                isBackward
            });
            if (destinationNode) {
                if (isTabEvent(event2)) {
                    event2.preventDefault();
                }
                tryFocus(destinationNode);
            }
        };
        var checkKey = function checkKey2(event2) {
            if (isEscapeEvent(event2) && valueOrHandler(config.escapeDeactivates, event2) !== false) {
                event2.preventDefault();
                trap.deactivate();
                return;
            }
            if (config.isKeyForward(event2) || config.isKeyBackward(event2)) {
                checkKeyNav(event2, config.isKeyBackward(event2));
            }
        };
        var checkClick = function checkClick2(e5) {
            var target = getActualTarget(e5);
            if (findContainerIndex(target, e5) >= 0) {
                return;
            }
            if (valueOrHandler(config.clickOutsideDeactivates, e5)) {
                return;
            }
            if (valueOrHandler(config.allowOutsideClick, e5)) {
                return;
            }
            e5.preventDefault();
            e5.stopImmediatePropagation();
        };
        var addListeners = function addListeners2() {
            if (!state.active) {
                return;
            }
            activeFocusTraps.activateTrap(trapStack, trap);
            state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
                tryFocus(getInitialFocusNode());
            }) : tryFocus(getInitialFocusNode());
            doc.addEventListener("focusin", checkFocusIn, true);
            doc.addEventListener("mousedown", checkPointerDown, {
                capture: true,
                passive: false
            });
            doc.addEventListener("touchstart", checkPointerDown, {
                capture: true,
                passive: false
            });
            doc.addEventListener("click", checkClick, {
                capture: true,
                passive: false
            });
            doc.addEventListener("keydown", checkKey, {
                capture: true,
                passive: false
            });
            return trap;
        };
        var removeListeners = function removeListeners2() {
            if (!state.active) {
                return;
            }
            doc.removeEventListener("focusin", checkFocusIn, true);
            doc.removeEventListener("mousedown", checkPointerDown, true);
            doc.removeEventListener("touchstart", checkPointerDown, true);
            doc.removeEventListener("click", checkClick, true);
            doc.removeEventListener("keydown", checkKey, true);
            return trap;
        };
        var checkDomRemoval = function checkDomRemoval2(mutations) {
            var isFocusedNodeRemoved = mutations.some(function(mutation) {
                var removedNodes = Array.from(mutation.removedNodes);
                return removedNodes.some(function(node) {
                    return node === state.mostRecentlyFocusedNode;
                });
            });
            if (isFocusedNodeRemoved) {
                tryFocus(getInitialFocusNode());
            }
        };
        var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
        var updateObservedNodes = function updateObservedNodes2() {
            if (!mutationObserver) {
                return;
            }
            mutationObserver.disconnect();
            if (state.active && !state.paused) {
                state.containers.map(function(container) {
                    mutationObserver.observe(container, {
                        subtree: true,
                        childList: true
                    });
                });
            }
        };
        trap = {
            get active() {
                return state.active;
            },
            get paused() {
                return state.paused;
            },
            activate: function activate(activateOptions) {
                if (state.active) {
                    return this;
                }
                var onActivate = getOption(activateOptions, "onActivate");
                var onPostActivate = getOption(activateOptions, "onPostActivate");
                var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
                if (!checkCanFocusTrap) {
                    updateTabbableNodes();
                }
                state.active = true;
                state.paused = false;
                state.nodeFocusedBeforeActivation = doc.activeElement;
                onActivate === null || onActivate === void 0 || onActivate();
                var finishActivation = function finishActivation2() {
                    if (checkCanFocusTrap) {
                        updateTabbableNodes();
                    }
                    addListeners();
                    updateObservedNodes();
                    onPostActivate === null || onPostActivate === void 0 || onPostActivate();
                };
                if (checkCanFocusTrap) {
                    checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
                    return this;
                }
                finishActivation();
                return this;
            },
            deactivate: function deactivate(deactivateOptions) {
                if (!state.active) {
                    return this;
                }
                var options = _objectSpread2({
                    onDeactivate: config.onDeactivate,
                    onPostDeactivate: config.onPostDeactivate,
                    checkCanReturnFocus: config.checkCanReturnFocus
                }, deactivateOptions);
                clearTimeout(state.delayInitialFocusTimer);
                state.delayInitialFocusTimer = void 0;
                removeListeners();
                state.active = false;
                state.paused = false;
                updateObservedNodes();
                activeFocusTraps.deactivateTrap(trapStack, trap);
                var onDeactivate = getOption(options, "onDeactivate");
                var onPostDeactivate = getOption(options, "onPostDeactivate");
                var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
                var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
                onDeactivate === null || onDeactivate === void 0 || onDeactivate();
                var finishDeactivation = function finishDeactivation2() {
                    delay(function() {
                        if (returnFocus) {
                            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
                        }
                        onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
                    });
                };
                if (returnFocus && checkCanReturnFocus) {
                    checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
                    return this;
                }
                finishDeactivation();
                return this;
            },
            pause: function pause(pauseOptions) {
                if (state.paused || !state.active) {
                    return this;
                }
                var onPause = getOption(pauseOptions, "onPause");
                var onPostPause = getOption(pauseOptions, "onPostPause");
                state.paused = true;
                onPause === null || onPause === void 0 || onPause();
                removeListeners();
                updateObservedNodes();
                onPostPause === null || onPostPause === void 0 || onPostPause();
                return this;
            },
            unpause: function unpause(unpauseOptions) {
                if (!state.paused || !state.active) {
                    return this;
                }
                var onUnpause = getOption(unpauseOptions, "onUnpause");
                var onPostUnpause = getOption(unpauseOptions, "onPostUnpause");
                state.paused = false;
                onUnpause === null || onUnpause === void 0 || onUnpause();
                updateTabbableNodes();
                addListeners();
                updateObservedNodes();
                onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
                return this;
            },
            updateContainerElements: function updateContainerElements(containerElements) {
                var elementsAsArray = [].concat(containerElements).filter(Boolean);
                state.containers = elementsAsArray.map(function(element) {
                    return typeof element === "string" ? doc.querySelector(element) : element;
                });
                if (state.active) {
                    updateTabbableNodes();
                }
                updateObservedNodes();
                return this;
            }
        };
        trap.updateContainerElements(elements);
        return trap;
    };

    // assets/scripts/modules/Datepicker.js
    var _ModalDatepicker = class _ModalDatepicker extends _default {
        constructor(m4) {
            super(m4);
            this.$el = this.el;
            this.$activeToggler = null;
            this.$container = this.$("container")[0];
            this.today = /* @__PURE__ */ new Date();
            this.minimum = /* @__PURE__ */ new Date();
            this.minimum.setDate(this.today.getDate() + 4);
            this.calendarOptions = {
                startDate: this.minimum,
                events: [{
                    date: {
                        start: 1,
                        end: this.minimum.getTime()
                    }
                }],
                callbacks: {
                    onDayClick: this.onDayClick.bind(this)
                },
                translations: {
                    nextMonthLabel: {
                        fr: '<span class="u-screen-reader-text">Mois suivant</span>',
                        en: '<span class="u-screen-reader-text">Next month</span>'
                    },
                    prevMonthLabel: {
                        fr: '<span class="u-screen-reader-text">Mois pr\xE9c\xE9dent</span>',
                        en: '<span class="u-screen-reader-text">Previous month</span>'
                    }
                },
                classes: {
                    calendarEventClass: "-disabled"
                },
                displayEventsNumber: false
            };
            this.focusTrapOptions = {
                clickOutsideDeactivates: true,
                onActivate: () => {},
                onPostActivate: () => {
                    this.$activeToggler.setAttribute("aria-expanded", true);
                },
                onDeactivate: () => {
                    $html.classList.remove(_ModalDatepicker.CLASS.OPEN);
                    $html.classList.remove(CSS_CLASS.MODAL_OPEN);
                    this.el.setAttribute("aria-hidden", true);
                },
                onPostDeactivate: () => {
                    var _a;
                    this.$activeToggler.setAttribute("aria-expanded", false);
                    this.$activeToggler = null;
                    (_a = this.calendar) == null ? void 0 : _a.destroy();
                }
            };
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
            this.focusTrap = createFocusTrap(this.$container, this.focusTrapOptions);
            this.calendar = new bCalendar(this.$container, this.calendarOptions);
        }
        destroy() {
            var _a;
            super.destroy();
            this.unbindEvents();
            (_a = this.calendar) == null ? void 0 : _a.destroy();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        //////////////
        // Callbacks
        //////////////
        onDayClick(date, calendar) {
            if (date.date.getTime() < this.minimum.getTime()) {
                return false;
            }
            const year = date.date.getUTCFullYear();
            const month = ("0" + (parseInt(date.date.getUTCMonth()) + 1)).slice(-2);
            const day = ("0" + date.date.getUTCDate()).slice(-2);
            const dateValue = `${year}-${month}-${day}`;
            this.$activeToggler.previousElementSibling.value = dateValue;
            const formatter = new Intl.DateTimeFormat("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });
            const dateLabel = formatter.format(date.date);
            this.$activeToggler.innerHTML = dateLabel;
            this.close();
        }
        //////////////
        // Methods
        //////////////
        open(args) {
            if (this.focusTrap.active)
                return;
            this.$activeToggler = args.$toggler;
            const inputValue = this.$activeToggler.previousElementSibling.value;
            this.calendar.selectedDate = inputValue ? /* @__PURE__ */ new Date(inputValue + "T00:00:00") : false;
            this.calendar.refresh();
            $html.classList.add(_ModalDatepicker.CLASS.OPEN);
            $html.classList.add(CSS_CLASS.MODAL_OPEN);
            this.el.setAttribute("aria-hidden", false);
            requestAnimationFrame(() => {
                this.focusTrap.activate();
            });
        }
        close() {
            var _a, _b;
            (_b = (_a = this.focusTrap) == null ? void 0 : _a.deactivate) == null ? void 0 : _b.call(_a);
        }
    };
    __publicField(_ModalDatepicker, "CLASS", {
        OPEN: "has-datepicker-open"
    });
    var ModalDatepicker = _ModalDatepicker;

    // assets/scripts/modules/DatepickerToggler.js
    var DatepickerToggler_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.events = {
                click: "open"
            };
            this.onFormResetBind = this.onFormReset.bind(this);
            this.placeholder = this.el.innerHTML;
        }
        //////////////
        // Lifecyle
        //////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        //////////////
        // Callbacks
        //////////////
        onFormReset(e5) {
            const $form = this.el.closest("form");
            if (e5.detail.$form === $form) {
                this.reset();
            }
        }
        //////////////
        // Methods
        //////////////
        open() {
            this.call("open", {
                $toggler: this.el
            }, "Datepicker");
        }
        reset() {
            this.el.innerHTML = this.placeholder;
        }
    };

    // assets/scripts/modules/Dialog.js
    var Dialog_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$content = this.$("content")[0];
            this.$closeBtn = this.$("close")[0];
            this.onKeyDownBind = this.onKeyDown.bind(this);
            this.onTransitionEndBind = this.onTransitionEnd.bind(this);
            this.isOpen = false;
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.$content.addEventListener("transitionend", this.onTransitionEndBind);
        }
        destroy() {
            super.destroy();
            this.$content.removeEventListener("transitionend", this.onTransitionEndBind);
        }
        //////////////
        // Callbacks
        //////////////
        onKeyDown(e5) {
            if (e5.key === "Escape") {
                e5.preventDefault();
                this.$closeBtn.click();
            }
        }
        onTransitionEnd(e5) {
            const property = e5.propertyName;
            if (property !== "transform" || !this.isOpen)
                return;
            this.el.inert = false;
            const $firstFocusable = this.el.querySelectorAll("[tabindex]")[0] || this.el;
            $firstFocusable.focus();
        }
        //////////////
        // Methods
        //////////////
        show() {
            this.el.inert = true;
            this.el.showModal();
            window.addEventListener("keydown", this.onKeyDownBind);
            this.isOpen = true;
            requestAnimationFrame(() => {
                this.el.scrollTop = 0;
            });
        }
        update() {
            this.el.scrollTop = 0;
        }
        close() {
            window.removeEventListener("keydown", this.onKeyDownBind);
            this.el.close();
            this.isOpen = false;
        }
    };

    // assets/scripts/modules/Expandable.js
    var _Expandable = class _Expandable extends _default {
        constructor(m4) {
            super(m4);
            this.$el = this.el;
            this.$parent = this.$el.closest("[data-expandable-parent]") || null;
            this.$container = this.$("container")[0];
            this.$inner = this.$("inner")[0];
            this.$button = this.$("button")[0];
            this.$buttonLabels = this.$button.querySelectorAll(".c-button_label");
            this.labelOpen = this.getData("label-open", this.$button);
            this.labelClose = this.getData("label-close", this.$button);
            this.toggleBind = this.toggle.bind(this);
            this.shrunkHeight = `${this.$container.offsetHeight}px`;
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            this.$button.addEventListener("click", this.toggleBind);
        }
        unbindEvents() {
            this.$button.removeEventListener("click", this.toggleBind);
        }
        //////////////
        // Methods
        //////////////
        toggle(e5) {
            e5.preventDefault();
            this.$inner.style.overflow = "hidden";
            this.$el.classList.contains(_Expandable.EXPANDED_CLASS) ? this.shrink() : this.expand();
        }
        expand() {
            var _a;
            this.isExpanding = true;
            this.$el.classList.add(_Expandable.EXPANDED_CLASS);
            const endHeight = `${this.$inner.offsetHeight}px`;
            if (this.animation) {
                this.animation.cancel();
            }
            this.animation = this.$container.animate({
                height: [this.shrunkHeight, endHeight]
            }, {
                duration: _Expandable.DURATION,
                easing: _Expandable.EASING
            });
            this.animation.onfinish = () => this.onAnimationFinish(true);
            this.animation.oncancel = () => {
                this.isExpanding = false;
                this.el.classList.remove(_Expandable.ACTIVE_CLASS);
            };
            this.$buttonLabels.forEach(($text) => {
                $text.textContent = this.labelClose;
            });
            this.$button.classList.add(_Expandable.ACTIVE_CLASS);
            (_a = this.$parent) == null ? void 0 : _a.classList.add(_Expandable.EXPANDED_CLASS);
        }
        shrink() {
            var _a;
            this.isClosing = false;
            this.$el.classList.remove(_Expandable.EXPANDED_CLASS);
            const startHeight = `${this.$inner.offsetHeight}px`;
            if (this.animation) {
                this.animation.cancel();
            }
            this.animation = this.$container.animate({
                height: [startHeight, this.shrunkHeight]
            }, {
                duration: _Expandable.DURATION,
                easing: _Expandable.EASING
            });
            this.animation.onfinish = () => this.onAnimationFinish(false);
            this.animation.oncancel = () => {
                this.isClosing = false;
                this.el.classList.add(_Expandable.ACTIVE_CLASS);
            };
            this.$buttonLabels.forEach(($text) => {
                $text.textContent = this.labelOpen;
            });
            this.$button.classList.remove(_Expandable.ACTIVE_CLASS);
            (_a = this.$parent) == null ? void 0 : _a.classList.remove(_Expandable.EXPANDED_CLASS);
        }
        onAnimationFinish(open) {
            this.animation = null;
            this.isClosing = false;
            this.isExpanding = false;
            this.$inner.style.height = this.$inner.style.overflow = "";
        }
    };
    __publicField(_Expandable, "ACTIVE_CLASS", "is-active");
    __publicField(_Expandable, "EXPANDED_CLASS", "is-expanded");
    __publicField(_Expandable, "DURATION", 300);
    __publicField(_Expandable, "EASING", "cubic-bezier(0.1, 0.3, 0, 1)");
    var Expandable = _Expandable;

    // assets/scripts/modules/Form.js
    var _Form = class _Form extends _default {
        constructor(m4) {
            super(m4);
            this.onHandleSubmitBind = this.onHandleSubmit.bind(this);
            this.onResetClickBind = this.onResetClick.bind(this);
            this.$el = this.el;
            this.$error = this.$("error")[0];
            this.$success = this.$("success")[0];
            this.$resetButton = this.$("resetButton")[0];
            this.$success.ariaHidden = true;
            this.$error.ariaHidden = true;
            this.formState = _Form.STATE.IDLE;
            this.sitekey = typeof window.app !== "undefined" && window.app.hasOwnProperty("recaptchaPublicKey") ? window.app.recaptchaPublicKey : false;
            const useRecaptcha = this.getData("use-recaptcha");
            this.useRecaptcha = useRecaptcha == "true" || useRecaptcha === "";
            this.badgeContainerId = "grecaptcha-container-id";
        }
        ///////////////
        // Lifecyle
        ///////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        ///////////////
        // Events
        ///////////////
        bindEvents() {
            var _a;
            this.$el.addEventListener("submit", this.onHandleSubmitBind);
            (_a = this.$resetButton) == null ? void 0 : _a.addEventListener("click", this.onResetClickBind);
        }
        unbindEvents() {
            var _a;
            this.$el.removeEventListener("submit", this.onHandleSubmitBind);
            (_a = this.$resetButton) == null ? void 0 : _a.removeEventListener("click", this.onResetClickBind);
        }
        ///////////////
        // Callbacks
        ///////////////
        onHandleSubmit(e5) {
            e5.preventDefault();
            this.submitEvent = e5;
            this.formData = this.getFormData(e5.target);
            this.clearErrorState();
            if (!this.validateForm()) {
                return false;
            }
            if (this.useRecaptcha && this.sitekey) {
                if (!window.hasRenderedRecaptcha) {
                    this.clientId = grecaptcha.render(this.badgeContainerId, {
                        "sitekey": this.sitekey,
                        "theme": "dark",
                        "size": "invisible",
                        "badge": "inline"
                    });
                    window.hasRenderedRecaptcha = true;
                }
                grecaptcha.ready(() => {
                    grecaptcha.execute(this.clientId).then((token) => this.processForm(token));
                });
            } else {
                this.processForm();
            }
        }
        onResetClick(e5) {
            e5.preventDefault();
            this.$el.reset();
            this.setState(_Form.STATE.IDLE);
            this.clearErrorMessage();
            this.clearErrorState();
            this.$success.ariaHidden = true;
            this.$error.ariaHidden = true;
            window.dispatchEvent(new CustomEvent(
                CUSTOM_EVENT.FORM_RESET, {
                    detail: {
                        $form: this.$el
                    }
                }
            ));
            requestAnimationFrame(() => {
                this.call("scrollTo", {
                    target: this.$el,
                    options: {
                        offset: -120,
                        duration: 1
                    }
                }, "Scroll");
            });
        }
        ///////////////
        // Methods
        ///////////////
        validateForm() {
            let isFormValid = true;
            [...this.submitEvent.target.elements].forEach(($el) => {
                if ($el.tagName === "BUTTON" || $el.tagName === "FIELDSET") {
                    return;
                }
                const $parent = $el.closest(".c-form_item") || null;
                const $error = $parent ? $parent.querySelector(".c-form_error") : null;
                const isValid = $el.checkValidity();
                if ($parent)
                    $parent.classList.remove("has-error");
                if ($error)
                    $error.ariaHidden = true;
                if (!isValid) {
                    if ($parent)
                        $parent.classList.add("has-error");
                    if ($error)
                        $error.ariaHidden = false;
                    this.$el.classList.add("is-error");
                    isFormValid = false;
                }
            });
            requestAnimationFrame(() => {
                const $inputErrors = document.querySelectorAll(".has-error");
                $inputErrors && this.call("scrollTo", {
                    target: $inputErrors[0],
                    options: {
                        offset: -120,
                        duration: 1
                    }
                }, "Scroll");
            });
            return isFormValid;
        }
        processForm(token) {
            if ([_Form.STATE.PROCESSING, _Form.STATE.SENDING].includes(this.formState)) {
                console.warn("Form is busy");
                return false;
            }
            token && this.formData.append("g-recaptcha-response", token);
            this.setState(_Form.STATE.PROCESSING);
            this.clearErrorMessage();
            try {
                this.submitForm();
            } catch (error) {
                console.error("[App.Form.handleSubmit]", error);
                this.setState(_Form.STATE.ERRORED);
                this.setErrorMessage(_Form.MESSAGES.CRITICAL);
            }
        }
        submitForm() {
            if (this.formState === _Form.STATE.SENDING) {
                console.warn("Form is already sending");
                return false;
            }
            if (!this.submitEvent) {
                throw new Error("Missing submit event object");
            }
            this.setState(_Form.STATE.SENDING);
            const form = this.submitEvent.target;
            const formUrl = form.action;
            const controller = new AbortController();
            const badgeContainerId = this.badgeContainerId;
            fetch(formUrl, {
                method: form.method,
                body: this.formData,
                signal: controller.signal
            }).then((response) => response.json()).then((response) => {
                if (response && response.success) {
                    controller.abort();
                    this.setState(_Form.STATE.COMPLETED);
                    this.$success.ariaHidden = false;
                } else {
                    const feedback = response.feedback;
                    let $firstErrorField = null;
                    feedback.forEach((error) => {
                        const $field = form.querySelector(`[name="${error.property}"]`);
                        const $parent = $field.closest(".c-form_item") || null;
                        const $error = $parent ? $parent.querySelector(".c-form_error") : null;
                        if ($parent)
                            $parent.classList.add("has-error");
                        if ($error) {
                            $error.ariaHidden = false;
                            $error.innerHTML = error.message;
                        }
                        if (!$firstErrorField) {
                            $firstErrorField = $field;
                        }
                    });
                    this.setState(_Form.STATE.ERRORED);
                    this.setErrorMessage(_Form.MESSAGES.CRITICAL);
                    $firstErrorField && this.call("scrollTo", {
                        target: $firstErrorField,
                        options: {
                            offset: -120,
                            duration: 1
                        }
                    }, "Scroll");
                }
            }).catch((error) => {
                console.error("[App.FormSupport.submitForm]", error);
                this.setState(_Form.STATE.ERRORED);
                this.setErrorMessage(_Form.MESSAGES.CRITICAL);
            });
        }
        getFormData(form) {
            const submission = form.dataset.submission;
            const formData = new FormData(form);
            formData.append("submission", submission);
            return formData;
        }
        setState(stateValue) {
            const prevState = this.formState;
            this.formState = stateValue;
            this.$el.classList.remove(prevState);
            this.$el.classList.add(this.formState);
        }
        setErrorMessage(message) {
            if (this.$error) {
                this.$error.innerHTML = message;
                this.$error.ariaHidden = false;
            } else {
                console.warn(message);
            }
        }
        clearErrorMessage() {
            if (this.$error) {
                this.$error.innerHTML = "";
            }
        }
        clearErrorState() {
            this.$el.classList.remove("is-error");
        }
    };
    __publicField(_Form, "STATE", {
        IDLE: "is-idle",
        // Form is ready
        PROCESSING: "is-processing",
        // Form is being processed
        SENDING: "is-sending",
        // Form is being sent and awaiting response
        INVALID: "is-invalid",
        // Form is invalid (HTTP 400)
        ERRORED: "is-errored",
        // Form can not be processed (HTTP 500)
        COMPLETED: "is-completed"
        // Form was processed successfully (HTTP 201)
    });
    __publicField(_Form, "MESSAGES", {
        CRITICAL: "An error occured. Please try again later"
    });
    var Form = _Form;

    // assets/scripts/modules/GeocodableForm.js
    var GeocodableForm = class extends Form {
        constructor(m4) {
            super(m4);
            this.apiKey = this.getData("api-key");
        }
        init() {
            this.bindEvents();
            this.initMapsApi();
        }
        initMapsApi() {
            if (typeof window.google === "undefined") {
                window._tmp_google_onload = () => {
                    this.initMapsApi();
                };
                var script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?v=3.56&language=fr&callback=_tmp_google_onload&key=${this.apiKey}`;
                document.head.appendChild(script);
                return false;
            }
        }
        processForm(token) {
            if ([Form.STATE.PROCESSING, Form.STATE.SENDING].includes(this.formState)) {
                console.warn("Form is busy");
                return false;
            }
            token && this.formData.append("g-recaptcha-response", token);
            this.setState(Form.STATE.PROCESSING);
            this.clearErrorMessage();
            this.geocodeAddress((coords) => {
                this.formData.set("lat", coords[0]);
                this.formData.set("lon", coords[1]);
                this.submitForm();
            }, () => {
                console.error("[App.Form.handleSubmit]", "An error occured with geocoding");
                this.setState(Form.STATE.ERRORED);
                this.setErrorMessage(Form.MESSAGES.CRITICAL);
            });
        }
        /**
         * Geocode the form's address fields.
         *
         * @param   {function} [done] - A callback function that is executed if the geocoding succeeds.
         * @param   {function} [fail] - A callback function that is executed if the geocoding fails.
         * @returns {this}
         */
        geocodeAddress(done, fail) {
            const geocoder = new window.google.maps.Geocoder();
            let address = "";
            this.$el.querySelectorAll(".js-geocodable").forEach((element) => {
                address += " " + element.value;
            });
            geocoder.geocode({
                "address": address
            }, function(results, status) {
                if (status == window.google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lon = results[0].geometry.location.lng();
                    if (typeof done === "function")
                        done([lat, lon]);
                } else {
                    if (typeof fail === "function")
                        fail();
                }
            });
            return this;
        }
    };

    // assets/scripts/modules/InputFile.js
    var InputFile_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$input = this.$("input")[0];
            this.$label = this.$("label")[0];
            this.$reset = this.$("reset")[0];
            this.$parent = this.el.closest(".c-form_item") || null;
            this.initialText = this.$label.textContent;
            this.onChangeBind = this.onChange.bind(this);
            this.onResetClickBind = this.onResetClick.bind(this);
            this.onFormResetBind = this.onFormReset.bind(this);
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            this.$input.addEventListener("change", this.onChangeBind);
            this.$reset.addEventListener("click", this.onResetClickBind);
            window.addEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        unbindEvents() {
            this.$input.removeEventListener("change", this.onChangeBind);
            this.$reset.removeEventListener("click", this.onResetClickBind);
            window.removeEventListener(CUSTOM_EVENT.FORM_RESET, this.onFormResetBind);
        }
        //////////////
        // Callbacks
        //////////////
        onChange(e5) {
            const files = Array.from(e5.target.files);
            if (files && files.length) {
                const labelContent = files.map((file) => file.name).join(", ");
                this.$label.textContent = labelContent;
                this.el.classList.add("has-file");
                this.$parent && this.$parent.classList.remove("has-error");
            }
        }
        onFormReset(e5) {
            const $form = this.el.closest("form");
            if (e5.detail.$form === $form) {
                this.reset();
            }
        }
        onResetClick(e5) {
            e5.preventDefault();
            this.reset();
        }
        //////////////
        // Metods
        //////////////
        reset() {
            this.$input.value = "";
            this.$label.textContent = this.initialText;
            this.el.classList.remove("has-file");
            this.$parent && this.$parent.classList.remove("has-error");
        }
    };

    // assets/scripts/modules/Jobs.js
    var Jobs_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.onFilterClick = this.onFilterClick.bind(this);
            this.$list = this.$("list")[0];
            this.$filters = this.$("filter");
            this.$offers = Array.from(this.$list.children);
        }
        init() {
            this.bindEvents();
        }
        bindEvents() {
            this.$filters.forEach(($filter) => {
                $filter.addEventListener("click", this.onFilterClick);
            });
        }
        onFilterClick(e5) {
            const $target = e5.target;
            const category = $target.dataset.category;
            this.$filters.forEach(($filter) => {
                $filter.classList.remove("is-active");
            });
            $target.classList.add("is-active");
            this.$list.classList.add("is-hidden");
            setTimeout(() => {
                this.$offers.forEach(($offer) => {
                    $offer.classList.add("is-hidden");
                });
                requestAnimationFrame(() => {
                    this.$offers.forEach(($offer) => {
                        let offerCategories = $offer.dataset.category.split(",");
                        if (category === "all" || $offer.dataset.category == category || offerCategories.includes(category) || $offer.dataset.category == null) {
                            $offer.classList.remove("is-hidden");
                        }
                    });
                });
                this.$list.classList.remove("is-hidden");
            }, 300);
        }
    };

    // assets/scripts/modules/Filters.js
    var _Filters = class _Filters extends _default {
        constructor(m4) {
            super(m4);
            this.onPageLoadBind = this.onPageLoad.bind(this);
            this.isOpen = false;
            this.events = {
                click: {
                    "toggleCalendar": "toggleCalendar",
                    "toggleCategories": "toggleCategories"
                }
            };
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
        }
        //////////////
        // Callbacks
        //////////////
        toggleCalendar(e5) {
            this.closeCategories();
            if (this.el.classList.contains(_Filters.CLASS.CALENDAR_OPEN)) {
                this.close();
            } else {
                this.openCalendar();
            }
        }
        toggleCategories(e5) {
            this.closeCalendar();
            if (this.el.classList.contains(_Filters.CLASS.CATEGORIES_OPEN)) {
                this.close();
            } else {
                this.openCategories();
            }
        }
        onPageLoad() {
            this.close();
        }
        //////////////
        // Methods
        //////////////
        open() {
            if (this.isOpen)
                return;
            this.isOpen = true;
            this.el.classList.add(_Filters.CLASS.OPEN);
            this.call("scrollTo", {
                target: this.el,
                options: {
                    offset: -70
                }
            }, "Scroll");
        }
        close() {
            if (!this.isOpen)
                return;
            this.el.classList.remove(_Filters.CLASS.OPEN);
            setTimeout(() => {
                this.el.classList.remove(_Filters.CLASS.CALENDAR_OPEN);
                this.el.classList.remove(_Filters.CLASS.CATEGORIES_OPEN);
                this.isOpen = false;
            }, 300);
        }
        openCalendar() {
            this.open();
            this.el.classList.add(_Filters.CLASS.CALENDAR_OPEN);
        }
        openCategories() {
            this.open();
            this.el.classList.add(_Filters.CLASS.CATEGORIES_OPEN);
        }
        closeCalendar() {
            this.el.classList.remove(_Filters.CLASS.CALENDAR_OPEN);
        }
        closeCategories() {
            this.el.classList.remove(_Filters.CLASS.CATEGORIES_OPEN);
        }
    };
    __publicField(_Filters, "CLASS", {
        OPEN: "is-open",
        CALENDAR_OPEN: "has-calendar-open",
        CATEGORIES_OPEN: "has-categories-open"
    });
    var Filters = _Filters;

    // node_modules/delegate-it/delegate.js
    var ledger = /* @__PURE__ */ new WeakMap();

    function editLedger(wanted, baseElement, callback, setup) {
        var _a, _b;
        if (!wanted && !ledger.has(baseElement)) {
            return false;
        }
        const elementMap = (_a = ledger.get(baseElement)) != null ? _a : /* @__PURE__ */ new WeakMap();
        ledger.set(baseElement, elementMap);
        const setups = (_b = elementMap.get(callback)) != null ? _b : /* @__PURE__ */ new Set();
        elementMap.set(callback, setups);
        const existed = setups.has(setup);
        if (wanted) {
            setups.add(setup);
        } else {
            setups.delete(setup);
        }
        return existed && wanted;
    }

    function safeClosest(event2, selector) {
        let target = event2.target;
        if (target instanceof Text) {
            target = target.parentElement;
        }
        if (target instanceof Element && event2.currentTarget instanceof Element) {
            const closest = target.closest(selector);
            if (closest && event2.currentTarget.contains(closest)) {
                return closest;
            }
        }
    }

    function delegate(selector, type, callback, options = {}) {
        const {
            signal,
            base = document
        } = options;
        if (signal == null ? void 0 : signal.aborted) {
            return;
        }
        const _a = options,
            {
                once
            } = _a,
            nativeListenerOptions = __objRest(_a, ["once"]);
        const baseElement = base instanceof Document ? base.documentElement : base;
        const capture = Boolean(typeof options === "object" ? options.capture : options);
        const listenerFn = (event2) => {
            const delegateTarget = safeClosest(event2, selector);
            if (delegateTarget) {
                const delegateEvent = Object.assign(event2, {
                    delegateTarget
                });
                callback.call(baseElement, delegateEvent);
                if (once) {
                    baseElement.removeEventListener(type, listenerFn, nativeListenerOptions);
                    editLedger(false, baseElement, callback, setup);
                }
            }
        };
        const setup = JSON.stringify({
            selector,
            type,
            capture
        });
        const isAlreadyListening = editLedger(true, baseElement, callback, setup);
        if (!isAlreadyListening) {
            baseElement.addEventListener(type, listenerFn, nativeListenerOptions);
        }
        signal == null ? void 0 : signal.addEventListener("abort", () => {
            editLedger(false, baseElement, callback, setup);
        });
    }
    var delegate_default = delegate;

    // node_modules/path-to-regexp/dist.es2015/index.js
    function lexer(str) {
        var tokens = [];
        var i6 = 0;
        while (i6 < str.length) {
            var char = str[i6];
            if (char === "*" || char === "+" || char === "?") {
                tokens.push({
                    type: "MODIFIER",
                    index: i6,
                    value: str[i6++]
                });
                continue;
            }
            if (char === "\\") {
                tokens.push({
                    type: "ESCAPED_CHAR",
                    index: i6++,
                    value: str[i6++]
                });
                continue;
            }
            if (char === "{") {
                tokens.push({
                    type: "OPEN",
                    index: i6,
                    value: str[i6++]
                });
                continue;
            }
            if (char === "}") {
                tokens.push({
                    type: "CLOSE",
                    index: i6,
                    value: str[i6++]
                });
                continue;
            }
            if (char === ":") {
                var name = "";
                var j3 = i6 + 1;
                while (j3 < str.length) {
                    var code = str.charCodeAt(j3);
                    if (
                        // `0-9`
                        code >= 48 && code <= 57 || // `A-Z`
                        code >= 65 && code <= 90 || // `a-z`
                        code >= 97 && code <= 122 || // `_`
                        code === 95
                    ) {
                        name += str[j3++];
                        continue;
                    }
                    break;
                }
                if (!name)
                    throw new TypeError("Missing parameter name at ".concat(i6));
                tokens.push({
                    type: "NAME",
                    index: i6,
                    value: name
                });
                i6 = j3;
                continue;
            }
            if (char === "(") {
                var count = 1;
                var pattern = "";
                var j3 = i6 + 1;
                if (str[j3] === "?") {
                    throw new TypeError('Pattern cannot start with "?" at '.concat(j3));
                }
                while (j3 < str.length) {
                    if (str[j3] === "\\") {
                        pattern += str[j3++] + str[j3++];
                        continue;
                    }
                    if (str[j3] === ")") {
                        count--;
                        if (count === 0) {
                            j3++;
                            break;
                        }
                    } else if (str[j3] === "(") {
                        count++;
                        if (str[j3 + 1] !== "?") {
                            throw new TypeError("Capturing groups are not allowed at ".concat(j3));
                        }
                    }
                    pattern += str[j3++];
                }
                if (count)
                    throw new TypeError("Unbalanced pattern at ".concat(i6));
                if (!pattern)
                    throw new TypeError("Missing pattern at ".concat(i6));
                tokens.push({
                    type: "PATTERN",
                    index: i6,
                    value: pattern
                });
                i6 = j3;
                continue;
            }
            tokens.push({
                type: "CHAR",
                index: i6,
                value: str[i6++]
            });
        }
        tokens.push({
            type: "END",
            index: i6,
            value: ""
        });
        return tokens;
    }

    function parse(str, options) {
        if (options === void 0) {
            options = {};
        }
        var tokens = lexer(str);
        var _a = options.prefixes,
            prefixes = _a === void 0 ? "./" : _a;
        var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
        var result = [];
        var key = 0;
        var i6 = 0;
        var path = "";
        var tryConsume = function(type) {
            if (i6 < tokens.length && tokens[i6].type === type)
                return tokens[i6++].value;
        };
        var mustConsume = function(type) {
            var value2 = tryConsume(type);
            if (value2 !== void 0)
                return value2;
            var _a2 = tokens[i6],
                nextType = _a2.type,
                index = _a2.index;
            throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
        };
        var consumeText = function() {
            var result2 = "";
            var value2;
            while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
                result2 += value2;
            }
            return result2;
        };
        while (i6 < tokens.length) {
            var char = tryConsume("CHAR");
            var name = tryConsume("NAME");
            var pattern = tryConsume("PATTERN");
            if (name || pattern) {
                var prefix = char || "";
                if (prefixes.indexOf(prefix) === -1) {
                    path += prefix;
                    prefix = "";
                }
                if (path) {
                    result.push(path);
                    path = "";
                }
                result.push({
                    name: name || key++,
                    prefix,
                    suffix: "",
                    pattern: pattern || defaultPattern,
                    modifier: tryConsume("MODIFIER") || ""
                });
                continue;
            }
            var value = char || tryConsume("ESCAPED_CHAR");
            if (value) {
                path += value;
                continue;
            }
            if (path) {
                result.push(path);
                path = "";
            }
            var open = tryConsume("OPEN");
            if (open) {
                var prefix = consumeText();
                var name_1 = tryConsume("NAME") || "";
                var pattern_1 = tryConsume("PATTERN") || "";
                var suffix = consumeText();
                mustConsume("CLOSE");
                result.push({
                    name: name_1 || (pattern_1 ? key++ : ""),
                    pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                    prefix,
                    suffix,
                    modifier: tryConsume("MODIFIER") || ""
                });
                continue;
            }
            mustConsume("END");
        }
        return result;
    }

    function match(str, options) {
        var keys = [];
        var re2 = pathToRegexp(str, keys, options);
        return regexpToFunction(re2, keys, options);
    }

    function regexpToFunction(re2, keys, options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.decode,
            decode = _a === void 0 ? function(x3) {
                return x3;
            } : _a;
        return function(pathname) {
            var m4 = re2.exec(pathname);
            if (!m4)
                return false;
            var path = m4[0],
                index = m4.index;
            var params = /* @__PURE__ */ Object.create(null);
            var _loop_1 = function(i7) {
                if (m4[i7] === void 0)
                    return "continue";
                var key = keys[i7 - 1];
                if (key.modifier === "*" || key.modifier === "+") {
                    params[key.name] = m4[i7].split(key.prefix + key.suffix).map(function(value) {
                        return decode(value, key);
                    });
                } else {
                    params[key.name] = decode(m4[i7], key);
                }
            };
            for (var i6 = 1; i6 < m4.length; i6++) {
                _loop_1(i6);
            }
            return {
                path,
                index,
                params
            };
        };
    }

    function escapeString(str) {
        return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }

    function flags(options) {
        return options && options.sensitive ? "" : "i";
    }

    function regexpToRegexp(path, keys) {
        if (!keys)
            return path;
        var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
        var index = 0;
        var execResult = groupsRegex.exec(path.source);
        while (execResult) {
            keys.push({
                // Use parenthesized substring match if available, index otherwise
                name: execResult[1] || index++,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
            execResult = groupsRegex.exec(path.source);
        }
        return path;
    }

    function arrayToRegexp(paths, keys, options) {
        var parts = paths.map(function(path) {
            return pathToRegexp(path, keys, options).source;
        });
        return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }

    function stringToRegexp(path, keys, options) {
        return tokensToRegexp(parse(path, options), keys, options);
    }

    function tokensToRegexp(tokens, keys, options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.strict,
            strict = _a === void 0 ? false : _a,
            _b = options.start,
            start = _b === void 0 ? true : _b,
            _c = options.end,
            end = _c === void 0 ? true : _c,
            _d = options.encode,
            encode = _d === void 0 ? function(x3) {
                return x3;
            } : _d,
            _e2 = options.delimiter,
            delimiter = _e2 === void 0 ? "/#?" : _e2,
            _f = options.endsWith,
            endsWith = _f === void 0 ? "" : _f;
        var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
        var delimiterRe = "[".concat(escapeString(delimiter), "]");
        var route = start ? "^" : "";
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (typeof token === "string") {
                route += escapeString(encode(token));
            } else {
                var prefix = escapeString(encode(token.prefix));
                var suffix = escapeString(encode(token.suffix));
                if (token.pattern) {
                    if (keys)
                        keys.push(token);
                    if (prefix || suffix) {
                        if (token.modifier === "+" || token.modifier === "*") {
                            var mod = token.modifier === "*" ? "?" : "";
                            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                        } else {
                            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                        }
                    } else {
                        if (token.modifier === "+" || token.modifier === "*") {
                            route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
                        } else {
                            route += "(".concat(token.pattern, ")").concat(token.modifier);
                        }
                    }
                } else {
                    route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
                }
            }
        }
        if (end) {
            if (!strict)
                route += "".concat(delimiterRe, "?");
            route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
        } else {
            var endToken = tokens[tokens.length - 1];
            var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
            if (!strict) {
                route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
            }
            if (!isEndDelimited) {
                route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
            }
        }
        return new RegExp(route, flags(options));
    }

    function pathToRegexp(path, keys, options) {
        if (path instanceof RegExp)
            return regexpToRegexp(path, keys);
        if (Array.isArray(path))
            return arrayToRegexp(path, keys, options);
        return stringToRegexp(path, keys, options);
    }

    // node_modules/swup/dist/Swup.modern.js
    function i2() {
        return i2 = Object.assign ? Object.assign.bind() : function(t3) {
            for (var e5 = 1; e5 < arguments.length; e5++) {
                var i6 = arguments[e5];
                for (var s6 in i6)
                    Object.prototype.hasOwnProperty.call(i6, s6) && (t3[s6] = i6[s6]);
            }
            return t3;
        }, i2.apply(this, arguments);
    }
    var s2 = (t3, e5) => String(t3).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e5 || "";
    var n2 = ({
        hash: t3
    } = {}) => window.location.pathname + window.location.search + (t3 ? window.location.hash : "");
    var o2 = (t3, e5 = {}) => {
        const s6 = i2({
            url: t3 = t3 || n2({
                hash: true
            }),
            random: Math.random(),
            source: "swup"
        }, e5);
        window.history.pushState(s6, "", t3);
    };
    var r2 = (t3 = null, e5 = {}) => {
        t3 = t3 || n2({
            hash: true
        });
        const s6 = i2({}, window.history.state || {}, {
            url: t3,
            random: Math.random(),
            source: "swup"
        }, e5);
        window.history.replaceState(s6, "", t3);
    };
    var a2 = (e5, s6, n6, o6) => {
        const r5 = new AbortController();
        return o6 = i2({}, o6, {
            signal: r5.signal
        }), delegate_default(e5, s6, n6, o6), {
            destroy: () => r5.abort()
        };
    };
    var l2 = class _l extends URL {
        constructor(t3, e5 = document.baseURI) {
            super(t3.toString(), e5), Object.setPrototypeOf(this, _l.prototype);
        }
        get url() {
            return this.pathname + this.search;
        }
        static fromElement(t3) {
            const e5 = t3.getAttribute("href") || t3.getAttribute("xlink:href") || "";
            return new _l(e5);
        }
        static fromUrl(t3) {
            return new _l(t3);
        }
    };
    var h2 = (t3, i6) => {
        try {
            return match(t3, i6);
        } catch (e5) {
            throw new Error(`[swup] Error parsing path "${String(t3)}":
${String(e5)}`);
        }
    };
    var c2 = class extends Error {
        constructor(t3, e5) {
            super(t3), this.url = void 0, this.status = void 0, this.aborted = void 0, this.timedOut = void 0, this.name = "FetchError", this.url = e5.url, this.status = e5.status, this.aborted = e5.aborted || false, this.timedOut = e5.timedOut || false;
        }
    };

    function u2(_0) {
        return __async(this, arguments, function*(t3, e5 = {}) {
            var s6;
            t3 = l2.fromUrl(t3).url;
            const {
                visit: n6 = this.visit
            } = e5, o6 = i2({}, this.options.requestHeaders, e5.headers), r5 = null != (s6 = e5.timeout) ? s6 : this.options.timeout, a5 = new AbortController(), {
                signal: h5
            } = a5;
            e5 = i2({}, e5, {
                headers: o6,
                signal: h5
            });
            let u4, d4 = false,
                p4 = null;
            r5 && r5 > 0 && (p4 = setTimeout(() => {
                d4 = true, a5.abort("timeout");
            }, r5));
            try {
                u4 = yield this.hooks.call("fetch:request", n6, {
                    url: t3,
                    options: e5
                }, (t4, {
                    url: e6,
                    options: i6
                }) => fetch(e6, i6)), p4 && clearTimeout(p4);
            } catch (e6) {
                if (d4)
                    throw this.hooks.call("fetch:timeout", n6, {
                        url: t3
                    }), new c2(`Request timed out: ${t3}`, {
                        url: t3,
                        timedOut: d4
                    });
                if ("AbortError" === (null == e6 ? void 0 : e6.name) || h5.aborted)
                    throw new c2(`Request aborted: ${t3}`, {
                        url: t3,
                        aborted: true
                    });
                throw e6;
            }
            const {
                status: m4,
                url: w4
            } = u4, g4 = yield u4.text();
            if (500 === m4)
                throw this.hooks.call("fetch:error", n6, {
                    status: m4,
                    response: u4,
                    url: w4
                }), new c2(`Server error: ${w4}`, {
                    status: m4,
                    url: w4
                });
            if (!g4)
                throw new c2(`Empty response: ${w4}`, {
                    status: m4,
                    url: w4
                });
            const {
                url: f4
            } = l2.fromUrl(w4), v3 = {
                url: f4,
                html: g4
            };
            return !n6.cache.write || e5.method && "GET" !== e5.method || t3 !== f4 || this.cache.set(v3.url, v3), v3;
        });
    }
    var d2 = class {
        constructor(t3) {
            this.swup = void 0, this.pages = /* @__PURE__ */ new Map(), this.swup = t3;
        }
        get size() {
            return this.pages.size;
        }
        get all() {
            const t3 = /* @__PURE__ */ new Map();
            return this.pages.forEach((e5, s6) => {
                t3.set(s6, i2({}, e5));
            }), t3;
        }
        has(t3) {
            return this.pages.has(this.resolve(t3));
        }
        get(t3) {
            const e5 = this.pages.get(this.resolve(t3));
            return e5 ? i2({}, e5) : e5;
        }
        set(t3, e5) {
            e5 = i2({}, e5, {
                url: t3 = this.resolve(t3)
            }), this.pages.set(t3, e5), this.swup.hooks.callSync("cache:set", void 0, {
                page: e5
            });
        }
        update(t3, e5) {
            t3 = this.resolve(t3);
            const s6 = i2({}, this.get(t3), e5, {
                url: t3
            });
            this.pages.set(t3, s6);
        }
        delete(t3) {
            this.pages.delete(this.resolve(t3));
        }
        clear() {
            this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0, void 0);
        }
        prune(t3) {
            this.pages.forEach((e5, i6) => {
                t3(i6, e5) && this.delete(i6);
            });
        }
        resolve(t3) {
            const {
                url: e5
            } = l2.fromUrl(t3);
            return this.swup.resolveUrl(e5);
        }
    };
    var p2 = (t3, e5 = document) => e5.querySelector(t3);
    var m2 = (t3, e5 = document) => Array.from(e5.querySelectorAll(t3));
    var w2 = () => new Promise((t3) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                t3();
            });
        });
    });

    function g2(t3) {
        return !!t3 && ("object" == typeof t3 || "function" == typeof t3) && "function" == typeof t3.then;
    }

    function f2(t3, e5 = []) {
        return new Promise((i6, s6) => {
            const n6 = t3(...e5);
            g2(n6) ? n6.then(i6, s6) : i6(n6);
        });
    }
    var y2 = (t3) => window.CSS && window.CSS.escape ? CSS.escape(t3) : t3;
    var k2 = (t3) => 1e3 * Number(t3.slice(0, -1).replace(",", "."));
    var b2 = class {
        constructor(t3) {
            this.swup = void 0, this.swupClasses = ["to-", "is-changing", "is-rendering", "is-popstate", "is-animating", "is-leaving"], this.swup = t3;
        }
        get selectors() {
            const {
                scope: t3
            } = this.swup.visit.animation;
            return "containers" === t3 ? this.swup.visit.containers : "html" === t3 ? ["html"] : Array.isArray(t3) ? t3 : [];
        }
        get selector() {
            return this.selectors.join(",");
        }
        get targets() {
            return this.selector.trim() ? m2(this.selector) : [];
        }
        add(...t3) {
            this.targets.forEach((e5) => e5.classList.add(...t3));
        }
        remove(...t3) {
            this.targets.forEach((e5) => e5.classList.remove(...t3));
        }
        clear() {
            this.targets.forEach((t3) => {
                const e5 = t3.className.split(" ").filter((t4) => this.isSwupClass(t4));
                t3.classList.remove(...e5);
            });
        }
        isSwupClass(t3) {
            return this.swupClasses.some((e5) => t3.startsWith(e5));
        }
    };
    var S2 = class {
        constructor(t3, e5) {
            this.id = void 0, this.state = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.animation = void 0, this.trigger = void 0, this.cache = void 0, this.history = void 0, this.scroll = void 0;
            const {
                to: i6,
                from: s6 = t3.currentPageUrl,
                hash: n6,
                el: o6,
                event: r5
            } = e5;
            this.id = Math.random(), this.state = 1, this.from = {
                url: s6
            }, this.to = {
                url: i6,
                hash: n6
            }, this.containers = t3.options.containers, this.animation = {
                animate: true,
                wait: false,
                name: void 0,
                native: t3.options.native,
                scope: t3.options.animationScope,
                selector: t3.options.animationSelector
            }, this.trigger = {
                el: o6,
                event: r5
            }, this.cache = {
                read: t3.options.cache,
                write: t3.options.cache
            }, this.history = {
                action: "push",
                popstate: false,
                direction: void 0
            }, this.scroll = {
                reset: true,
                target: void 0
            };
        }
        advance(t3) {
            this.state < t3 && (this.state = t3);
        }
        abort() {
            this.state = 8;
        }
        get done() {
            return this.state >= 7;
        }
    };

    function E2(t3) {
        return new S2(this, t3);
    }
    var P2 = class {
        constructor(t3) {
            this.swup = void 0, this.registry = /* @__PURE__ */ new Map(), this.hooks = ["animation:out:start", "animation:out:await", "animation:out:end", "animation:in:start", "animation:in:await", "animation:in:end", "animation:skip", "cache:clear", "cache:set", "content:replace", "content:scroll", "enable", "disable", "fetch:request", "fetch:error", "fetch:timeout", "history:popstate", "link:click", "link:self", "link:anchor", "link:newtab", "page:load", "page:view", "scroll:top", "scroll:anchor", "visit:start", "visit:transition", "visit:abort", "visit:end"], this.swup = t3, this.init();
        }
        init() {
            this.hooks.forEach((t3) => this.create(t3));
        }
        create(t3) {
            this.registry.has(t3) || this.registry.set(t3, /* @__PURE__ */ new Map());
        }
        exists(t3) {
            return this.registry.has(t3);
        }
        get(t3) {
            const e5 = this.registry.get(t3);
            if (e5)
                return e5;
            console.error(`Unknown hook '${t3}'`);
        }
        clear() {
            this.registry.forEach((t3) => t3.clear());
        }
        on(t3, e5, s6 = {}) {
            const n6 = this.get(t3);
            if (!n6)
                return console.warn(`Hook '${t3}' not found.`), () => {};
            const o6 = i2({}, s6, {
                id: n6.size + 1,
                hook: t3,
                handler: e5
            });
            return n6.set(e5, o6), () => this.off(t3, e5);
        }
        before(t3, e5, s6 = {}) {
            return this.on(t3, e5, i2({}, s6, {
                before: true
            }));
        }
        replace(t3, e5, s6 = {}) {
            return this.on(t3, e5, i2({}, s6, {
                replace: true
            }));
        }
        once(t3, e5, s6 = {}) {
            return this.on(t3, e5, i2({}, s6, {
                once: true
            }));
        }
        off(t3, e5) {
            const i6 = this.get(t3);
            i6 && e5 ? i6.delete(e5) || console.warn(`Handler for hook '${t3}' not found.`) : i6 && i6.clear();
        }
        call(t3, e5, i6, s6) {
            return __async(this, null, function*() {
                const [n6, o6, r5] = this.parseCallArgs(t3, e5, i6, s6), {
                    before: a5,
                    handler: l6,
                    after: h5
                } = this.getHandlers(t3, r5);
                yield this.run(a5, n6, o6);
                const [c5] = yield this.run(l6, n6, o6, true);
                return yield this.run(h5, n6, o6), this.dispatchDomEvent(t3, n6, o6), c5;
            });
        }
        callSync(t3, e5, i6, s6) {
            const [n6, o6, r5] = this.parseCallArgs(t3, e5, i6, s6), {
                before: a5,
                handler: l6,
                after: h5
            } = this.getHandlers(t3, r5);
            this.runSync(a5, n6, o6);
            const [c5] = this.runSync(l6, n6, o6, true);
            return this.runSync(h5, n6, o6), this.dispatchDomEvent(t3, n6, o6), c5;
        }
        parseCallArgs(t3, e5, i6, s6) {
            return e5 instanceof S2 || "object" != typeof e5 && "function" != typeof i6 ? [e5, i6, s6] : [void 0, e5, i6];
        }
        run(_0) {
            return __async(this, arguments, function*(t3, e5 = this.swup.visit, i6, s6 = false) {
                const n6 = [];
                for (const {
                        hook: o6,
                        handler: r5,
                        defaultHandler: a5,
                        once: l6
                    } of t3)
                    if (null == e5 || !e5.done) {
                        l6 && this.off(o6, r5);
                        try {
                            const t4 = yield f2(r5, [e5, i6, a5]);
                            n6.push(t4);
                        } catch (t4) {
                            if (s6)
                                throw t4;
                            console.error(`Error in hook '${o6}':`, t4);
                        }
                    }
                return n6;
            });
        }
        runSync(t3, e5 = this.swup.visit, i6, s6 = false) {
            const n6 = [];
            for (const {
                    hook: o6,
                    handler: r5,
                    defaultHandler: a5,
                    once: l6
                } of t3)
                if (null == e5 || !e5.done) {
                    l6 && this.off(o6, r5);
                    try {
                        const t4 = r5(e5, i6, a5);
                        n6.push(t4), g2(t4) && console.warn(`Swup will not await Promises in handler for synchronous hook '${o6}'.`);
                    } catch (t4) {
                        if (s6)
                            throw t4;
                        console.error(`Error in hook '${o6}':`, t4);
                    }
                }
            return n6;
        }
        getHandlers(t3, e5) {
            const i6 = this.get(t3);
            if (!i6)
                return {
                    found: false,
                    before: [],
                    handler: [],
                    after: [],
                    replaced: false
                };
            const s6 = Array.from(i6.values()),
                n6 = this.sortRegistrations,
                o6 = s6.filter(({
                    before: t4,
                    replace: e6
                }) => t4 && !e6).sort(n6),
                r5 = s6.filter(({
                    replace: t4
                }) => t4).filter((t4) => true).sort(n6),
                a5 = s6.filter(({
                    before: t4,
                    replace: e6
                }) => !t4 && !e6).sort(n6),
                l6 = r5.length > 0;
            let h5 = [];
            if (e5 && (h5 = [{
                    id: 0,
                    hook: t3,
                    handler: e5
                }], l6)) {
                const i7 = r5.length - 1,
                    s7 = (t4) => {
                        const i8 = r5[t4 - 1];
                        return i8 ? (e6, n7) => i8.handler(e6, n7, s7(t4 - 1)) : e5;
                    };
                h5 = [{
                    id: 0,
                    hook: t3,
                    handler: r5[i7].handler,
                    defaultHandler: s7(i7)
                }];
            }
            return {
                found: true,
                before: o6,
                handler: h5,
                after: a5,
                replaced: l6
            };
        }
        sortRegistrations(t3, e5) {
            var i6, s6;
            return (null != (i6 = t3.priority) ? i6 : 0) - (null != (s6 = e5.priority) ? s6 : 0) || t3.id - e5.id || 0;
        }
        dispatchDomEvent(t3, e5, i6) {
            if (null != e5 && e5.done)
                return;
            const s6 = {
                hook: t3,
                args: i6,
                visit: e5 || this.swup.visit
            };
            document.dispatchEvent(new CustomEvent("swup:any", {
                detail: s6,
                bubbles: true
            })), document.dispatchEvent(new CustomEvent(`swup:${t3}`, {
                detail: s6,
                bubbles: true
            }));
        }
    };
    var U2 = (t3) => {
        if (t3 && "#" === t3.charAt(0) && (t3 = t3.substring(1)), !t3)
            return null;
        const e5 = decodeURIComponent(t3);
        let i6 = document.getElementById(t3) || document.getElementById(e5) || p2(`a[name='${y2(t3)}']`) || p2(`a[name='${y2(e5)}']`);
        return i6 || "top" !== t3 || (i6 = document.body), i6;
    };
    var C2 = "transition";
    var $2 = "animation";

    function x2(_0) {
        return __async(this, arguments, function*({
            elements: t3,
            selector: e5
        }) {
            if (false === e5 && !t3)
                return;
            let i6 = [];
            if (t3)
                i6 = Array.from(t3);
            else if (e5 && (i6 = m2(e5, document.body), !i6.length))
                return void console.warn(`[swup] No elements found matching animationSelector \`${e5}\``);
            const s6 = i6.map((t4) => function(t5) {
                const {
                    type: e6,
                    timeout: i7,
                    propCount: s7
                } = function(t6, e7) {
                    const i8 = window.getComputedStyle(t6),
                        s8 = A2(i8, `${C2}Delay`),
                        n6 = A2(i8, `${C2}Duration`),
                        o6 = H2(s8, n6),
                        r5 = A2(i8, `${$2}Delay`),
                        a5 = A2(i8, `${$2}Duration`),
                        l6 = H2(r5, a5);
                    let h5 = null,
                        c5 = 0,
                        u4 = 0;
                    return c5 = Math.max(o6, l6), h5 = c5 > 0 ? o6 > l6 ? C2 : $2 : null, u4 = h5 ? h5 === C2 ? n6.length : a5.length : 0, {
                        type: h5,
                        timeout: c5,
                        propCount: u4
                    };
                }(t5);
                return !(!e6 || !i7) && new Promise((n6) => {
                    const o6 = `${e6}end`,
                        r5 = performance.now();
                    let a5 = 0;
                    const l6 = () => {
                            t5.removeEventListener(o6, h5), n6();
                        },
                        h5 = (e7) => {
                            if (e7.target === t5) {
                                if (! function(t6) {
                                        return [`${C2}end`, `${$2}end`].includes(t6.type);
                                    }(e7))
                                    throw new Error("Not a transition or animation event.");
                                (performance.now() - r5) / 1e3 < e7.elapsedTime || ++a5 >= s7 && l6();
                            }
                        };
                    setTimeout(() => {
                        a5 < s7 && l6();
                    }, i7 + 1), t5.addEventListener(o6, h5);
                });
            }(t4));
            s6.filter(Boolean).length > 0 ? yield Promise.all(s6): e5 && console.warn(`[swup] No CSS animation duration defined on elements matching \`${e5}\``);
        });
    }

    function A2(t3, e5) {
        return (t3[e5] || "").split(", ");
    }

    function H2(t3, e5) {
        for (; t3.length < e5.length;)
            t3 = t3.concat(t3);
        return Math.max(...e5.map((e6, i6) => k2(e6) + k2(t3[i6])));
    }

    function q2(t3, e5 = {}, s6 = {}) {
        if ("string" != typeof t3)
            throw new Error("swup.navigate() requires a URL parameter");
        if (this.shouldIgnoreVisit(t3, {
                el: s6.el,
                event: s6.event
            }))
            return void window.location.assign(t3);
        const {
            url: n6,
            hash: o6
        } = l2.fromUrl(t3), r5 = this.createVisit(i2({}, s6, {
            to: n6,
            hash: o6
        }));
        this.performNavigation(r5, e5);
    }

    function R2(_0) {
        return __async(this, arguments, function*(t3, e5 = {}) {
            if (this.navigating) {
                if (this.visit.state >= 6)
                    return t3.state = 2, void(this.onVisitEnd = () => this.performNavigation(t3, e5));
                yield this.hooks.call("visit:abort", this.visit, void 0), delete this.visit.to.document, this.visit.state = 8;
            }
            this.navigating = true, this.visit = t3;
            const {
                el: i6
            } = t3.trigger;
            e5.referrer = e5.referrer || this.currentPageUrl, false === e5.animate && (t3.animation.animate = false), t3.animation.animate || this.classes.clear();
            const a5 = e5.history || (null == i6 ? void 0 : i6.getAttribute("data-swup-history")) || void 0;
            a5 && ["push", "replace"].includes(a5) && (t3.history.action = a5);
            const l6 = e5.animation || (null == i6 ? void 0 : i6.getAttribute("data-swup-animation")) || void 0;
            var h5, c5;
            l6 && (t3.animation.name = l6), "object" == typeof e5.cache ? (t3.cache.read = null != (h5 = e5.cache.read) ? h5 : t3.cache.read, t3.cache.write = null != (c5 = e5.cache.write) ? c5 : t3.cache.write) : void 0 !== e5.cache && (t3.cache = {
                read: !!e5.cache,
                write: !!e5.cache
            }), delete e5.cache;
            try {
                yield this.hooks.call("visit:start", t3, void 0), t3.state = 3;
                const i7 = this.hooks.call("page:load", t3, {
                    options: e5
                }, (t4, e6) => __async(this, null, function*() {
                    let i8;
                    return t4.cache.read && (i8 = this.cache.get(t4.to.url)), e6.page = i8 || (yield this.fetchPage(t4.to.url, e6.options)), e6.cache = !!i8, e6.page;
                }));
                if (i7.then(({
                        html: e6
                    }) => {
                        t3.advance(5), t3.to.html = e6, t3.to.document = new DOMParser().parseFromString(e6, "text/html");
                    }), !t3.history.popstate) {
                    const e6 = t3.to.url + t3.to.hash;
                    "replace" === t3.history.action || t3.to.url === this.currentPageUrl ? r2(e6) : (this.currentHistoryIndex++, o2(e6, {
                        index: this.currentHistoryIndex
                    }));
                }
                if (this.currentPageUrl = n2(), t3.history.popstate && this.classes.add("is-popstate"), t3.animation.name && this.classes.add(`to-${s2(t3.animation.name)}`), t3.animation.wait && (yield i7), t3.done)
                    return;
                if (yield this.hooks.call("visit:transition", t3, void 0, () => __async(this, null, function*() {
                        if (!t3.animation.animate)
                            return yield this.hooks.call("animation:skip", void 0), void(yield this.renderPage(t3, yield i7));
                        t3.advance(4), yield this.animatePageOut(t3), t3.animation.native && document.startViewTransition ? yield document.startViewTransition(() => __async(this, null, function*() {
                            return yield this.renderPage(t3, yield i7);
                        })).finished: yield this.renderPage(t3, yield i7), yield this.animatePageIn(t3);
                    })), t3.done)
                    return;
                yield this.hooks.call("visit:end", t3, void 0, () => this.classes.clear()), t3.state = 7, this.navigating = false, this.onVisitEnd && (this.onVisitEnd(), this.onVisitEnd = void 0);
            } catch (e6) {
                if (!e6 || null != e6 && e6.aborted)
                    return void(t3.state = 8);
                t3.state = 9, console.error(e6), this.options.skipPopStateHandling = () => (window.location.assign(t3.to.url + t3.to.hash), true), window.history.back();
            } finally {
                delete t3.to.document;
            }
        });
    }
    var V2 = function(t3) {
        return __async(this, null, function*() {
            yield this.hooks.call("animation:out:start", t3, void 0, () => {
                this.classes.add("is-changing", "is-animating", "is-leaving");
            }), yield this.hooks.call("animation:out:await", t3, {
                skip: false
            }, (t4, {
                skip: e5
            }) => {
                if (!e5)
                    return this.awaitAnimations({
                        selector: t4.animation.selector
                    });
            }), yield this.hooks.call("animation:out:end", t3, void 0);
        });
    };
    var I2 = function(t3) {
        var e5;
        const i6 = t3.to.document;
        if (!i6)
            return false;
        const s6 = (null == (e5 = i6.querySelector("title")) ? void 0 : e5.innerText) || "";
        document.title = s6;
        const n6 = m2('[data-swup-persist]:not([data-swup-persist=""])'),
            o6 = t3.containers.map((t4) => {
                const e6 = document.querySelector(t4),
                    s7 = i6.querySelector(t4);
                return e6 && s7 ? (e6.replaceWith(s7.cloneNode(true)), true) : (e6 || console.warn(`[swup] Container missing in current document: ${t4}`), s7 || console.warn(`[swup] Container missing in incoming document: ${t4}`), false);
            }).filter(Boolean);
        return n6.forEach((t4) => {
            const e6 = t4.getAttribute("data-swup-persist"),
                i7 = p2(`[data-swup-persist="${e6}"]`);
            i7 && i7 !== t4 && i7.replaceWith(t4);
        }), o6.length === t3.containers.length;
    };
    var L2 = function(t3) {
        const e5 = {
                behavior: "auto"
            },
            {
                target: s6,
                reset: n6
            } = t3.scroll,
            o6 = null != s6 ? s6 : t3.to.hash;
        let r5 = false;
        return o6 && (r5 = this.hooks.callSync("scroll:anchor", t3, {
            hash: o6,
            options: e5
        }, (t4, {
            hash: e6,
            options: i6
        }) => {
            const s7 = this.getAnchorElement(e6);
            return s7 && s7.scrollIntoView(i6), !!s7;
        })), n6 && !r5 && (r5 = this.hooks.callSync("scroll:top", t3, {
            options: e5
        }, (t4, {
            options: e6
        }) => (window.scrollTo(i2({
            top: 0,
            left: 0
        }, e6)), true))), r5;
    };
    var T2 = function(t3) {
        return __async(this, null, function*() {
            if (t3.done)
                return;
            const e5 = this.hooks.call("animation:in:await", t3, {
                skip: false
            }, (t4, {
                skip: e6
            }) => {
                if (!e6)
                    return this.awaitAnimations({
                        selector: t4.animation.selector
                    });
            });
            yield w2(), yield this.hooks.call("animation:in:start", t3, void 0, () => {
                this.classes.remove("is-animating");
            }), yield e5, yield this.hooks.call("animation:in:end", t3, void 0);
        });
    };
    var N2 = function(t3, e5) {
        return __async(this, null, function*() {
            if (t3.done)
                return;
            t3.advance(6);
            const {
                url: i6
            } = e5;
            this.isSameResolvedUrl(n2(), i6) || (r2(i6), this.currentPageUrl = n2(), t3.to.url = this.currentPageUrl), yield this.hooks.call("content:replace", t3, {
                page: e5
            }, (t4, {}) => {
                if (this.classes.remove("is-leaving"), t4.animation.animate && this.classes.add("is-rendering"), !this.replaceContent(t4))
                    throw new Error("[swup] Container mismatch, aborting");
                t4.animation.animate && (this.classes.add("is-changing", "is-animating", "is-rendering"), t4.animation.name && this.classes.add(`to-${s2(t4.animation.name)}`));
            }), yield this.hooks.call("content:scroll", t3, void 0, () => this.scrollToContent(t3)), yield this.hooks.call("page:view", t3, {
                url: this.currentPageUrl,
                title: document.title
            });
        });
    };
    var O2 = function(t3) {
        var e5;
        if (e5 = t3, Boolean(null == e5 ? void 0 : e5.isSwupPlugin)) {
            if (t3.swup = this, !t3._checkRequirements || t3._checkRequirements())
                return t3._beforeMount && t3._beforeMount(), t3.mount(), this.plugins.push(t3), this.plugins;
        } else
            console.error("Not a swup plugin instance", t3);
    };

    function D2(t3) {
        const e5 = this.findPlugin(t3);
        if (e5)
            return e5.unmount(), e5._afterUnmount && e5._afterUnmount(), this.plugins = this.plugins.filter((t4) => t4 !== e5), this.plugins;
        console.error("No such plugin", e5);
    }

    function M2(t3) {
        return this.plugins.find((e5) => e5 === t3 || e5.name === t3 || e5.name === `Swup${String(t3)}`);
    }

    function W2(t3) {
        if ("function" != typeof this.options.resolveUrl)
            return console.warn("[swup] options.resolveUrl expects a callback function."), t3;
        const e5 = this.options.resolveUrl(t3);
        return e5 && "string" == typeof e5 ? e5.startsWith("//") || e5.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t3) : e5 : (console.warn("[swup] options.resolveUrl needs to return a url"), t3);
    }

    function B2(t3, e5) {
        return this.resolveUrl(t3) === this.resolveUrl(e5);
    }
    var j2 = {
        animateHistoryBrowsing: false,
        animationSelector: '[class*="transition-"]',
        animationScope: "html",
        cache: true,
        containers: ["#swup"],
        ignoreVisit: (t3, {
            el: e5
        } = {}) => !(null == e5 || !e5.closest("[data-no-swup]")),
        linkSelector: "a[href]",
        linkToSelf: "scroll",
        native: false,
        plugins: [],
        resolveUrl: (t3) => t3,
        requestHeaders: {
            "X-Requested-With": "swup",
            Accept: "text/html, application/xhtml+xml"
        },
        skipPopStateHandling: (t3) => {
            var e5;
            return "swup" !== (null == (e5 = t3.state) ? void 0 : e5.source);
        },
        timeout: 0
    };
    var _2 = class {
        constructor(t3 = {}) {
            var e5, s6;
            this.version = "4.6.0", this.options = void 0, this.defaults = j2, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.currentPageUrl = n2(), this.currentHistoryIndex = void 0, this.clickDelegate = void 0, this.navigating = false, this.onVisitEnd = void 0, this.use = O2, this.unuse = D2, this.findPlugin = M2, this.log = () => {}, this.navigate = q2, this.performNavigation = R2, this.createVisit = E2, this.delegateEvent = a2, this.fetchPage = u2, this.awaitAnimations = x2, this.renderPage = N2, this.replaceContent = I2, this.animatePageIn = T2, this.animatePageOut = V2, this.scrollToContent = L2, this.getAnchorElement = U2, this.getCurrentUrl = n2, this.resolveUrl = W2, this.isSameResolvedUrl = B2, this.options = i2({}, this.defaults, t3), this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new d2(this), this.classes = new b2(this), this.hooks = new P2(this), this.visit = this.createVisit({
                to: ""
            }), this.currentHistoryIndex = null != (e5 = null == (s6 = window.history.state) ? void 0 : s6.index) ? e5 : 1, this.checkRequirements() && this.enable();
        }
        checkRequirements() {
            return "undefined" != typeof Promise || (console.warn("Promise is not supported"), false);
        }
        enable() {
            return __async(this, null, function*() {
                var t3;
                const {
                    linkSelector: e5
                } = this.options;
                this.clickDelegate = this.delegateEvent(e5, "click", this.handleLinkClick), window.addEventListener("popstate", this.handlePopState), this.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"), this.options.native = this.options.native && !!document.startViewTransition, this.options.plugins.forEach((t4) => this.use(t4)), "swup" !== (null == (t3 = window.history.state) ? void 0 : t3.source) && r2(null, {
                    index: this.currentHistoryIndex
                }), yield w2(), yield this.hooks.call("enable", void 0, void 0, () => {
                    const t4 = document.documentElement;
                    t4.classList.add("swup-enabled"), t4.classList.toggle("swup-native", this.options.native);
                });
            });
        }
        destroy() {
            return __async(this, null, function*() {
                this.clickDelegate.destroy(), window.removeEventListener("popstate", this.handlePopState), this.cache.clear(), this.options.plugins.forEach((t3) => this.unuse(t3)), yield this.hooks.call("disable", void 0, void 0, () => {
                    const t3 = document.documentElement;
                    t3.classList.remove("swup-enabled"), t3.classList.remove("swup-native");
                }), this.hooks.clear();
            });
        }
        shouldIgnoreVisit(t3, {
            el: e5,
            event: i6
        } = {}) {
            const {
                origin: s6,
                url: n6,
                hash: o6
            } = l2.fromUrl(t3);
            return s6 !== window.location.origin || !(!e5 || !this.triggerWillOpenNewWindow(e5)) || !!this.options.ignoreVisit(n6 + o6, {
                el: e5,
                event: i6
            });
        }
        handleLinkClick(t3) {
            const e5 = t3.delegateTarget,
                {
                    href: i6,
                    url: s6,
                    hash: n6
                } = l2.fromElement(e5);
            if (this.shouldIgnoreVisit(i6, {
                    el: e5,
                    event: t3
                }))
                return;
            if (this.navigating && s6 === this.visit.to.url)
                return void t3.preventDefault();
            const o6 = this.createVisit({
                to: s6,
                hash: n6,
                el: e5,
                event: t3
            });
            t3.metaKey || t3.ctrlKey || t3.shiftKey || t3.altKey ? this.hooks.callSync("link:newtab", o6, {
                href: i6
            }) : 0 === t3.button && this.hooks.callSync("link:click", o6, {
                el: e5,
                event: t3
            }, () => {
                var e6;
                const i7 = null != (e6 = o6.from.url) ? e6 : "";
                t3.preventDefault(), s6 && s6 !== i7 ? this.isSameResolvedUrl(s6, i7) || this.performNavigation(o6) : n6 ? this.hooks.callSync("link:anchor", o6, {
                    hash: n6
                }, () => {
                    r2(s6 + n6), this.scrollToContent(o6);
                }) : this.hooks.callSync("link:self", o6, void 0, () => {
                    "navigate" === this.options.linkToSelf ? this.performNavigation(o6) : (r2(s6), this.scrollToContent(o6));
                });
            });
        }
        handlePopState(t3) {
            var e5, i6, s6, o6;
            const r5 = null != (e5 = null == (i6 = t3.state) ? void 0 : i6.url) ? e5 : window.location.href;
            if (this.options.skipPopStateHandling(t3))
                return;
            if (this.isSameResolvedUrl(n2(), this.currentPageUrl))
                return;
            const {
                url: a5,
                hash: h5
            } = l2.fromUrl(r5), c5 = this.createVisit({
                to: a5,
                hash: h5,
                event: t3
            });
            c5.history.popstate = true;
            const u4 = null != (s6 = null == (o6 = t3.state) ? void 0 : o6.index) ? s6 : 0;
            u4 && u4 !== this.currentHistoryIndex && (c5.history.direction = u4 - this.currentHistoryIndex > 0 ? "forwards" : "backwards", this.currentHistoryIndex = u4), c5.animation.animate = false, c5.scroll.reset = false, c5.scroll.target = false, this.options.animateHistoryBrowsing && (c5.animation.animate = true, c5.scroll.reset = true), this.hooks.callSync("history:popstate", c5, {
                event: t3
            }, () => {
                this.performNavigation(c5);
            });
        }
        triggerWillOpenNewWindow(t3) {
            return !!t3.matches('[download], [target="_blank"]');
        }
    };

    // node_modules/@swup/plugin/dist/index.modern.js
    function r3() {
        return r3 = Object.assign ? Object.assign.bind() : function(r5) {
            for (var n6 = 1; n6 < arguments.length; n6++) {
                var e5 = arguments[n6];
                for (var t3 in e5)
                    Object.prototype.hasOwnProperty.call(e5, t3) && (r5[t3] = e5[t3]);
            }
            return r5;
        }, r3.apply(this, arguments);
    }
    var n3 = (r5) => String(r5).split(".").map((r6) => String(parseInt(r6 || "0", 10))).concat(["0", "0"]).slice(0, 3).join(".");
    var e2 = class {
        constructor() {
            this.isSwupPlugin = true, this.swup = void 0, this.version = void 0, this.requires = {}, this.handlersToUnregister = [];
        }
        mount() {}
        unmount() {
            this.handlersToUnregister.forEach((r5) => r5()), this.handlersToUnregister = [];
        }
        _beforeMount() {
            if (!this.name)
                throw new Error("You must define a name of plugin when creating a class.");
        }
        _afterUnmount() {}
        _checkRequirements() {
            return "object" != typeof this.requires || Object.entries(this.requires).forEach(([r5, e5]) => {
                if (! function(r6, e6, t3) {
                        const s6 = function(r7, n6) {
                            var e7;
                            if ("swup" === r7)
                                return null != (e7 = n6.version) ? e7 : ""; {
                                var t4;
                                const e8 = n6.findPlugin(r7);
                                return null != (t4 = null == e8 ? void 0 : e8.version) ? t4 : "";
                            }
                        }(r6, t3);
                        return !!s6 && ((r7, e7) => e7.every((e8) => {
                            const [, t4, s7] = e8.match(/^([\D]+)?(.*)$/) || [];
                            var o6, i6;
                            return ((r8, n6) => {
                                const e9 = {
                                    "": (r9) => 0 === r9,
                                    ">": (r9) => r9 > 0,
                                    ">=": (r9) => r9 >= 0,
                                    "<": (r9) => r9 < 0,
                                    "<=": (r9) => r9 <= 0
                                };
                                return (e9[n6] || e9[""])(r8);
                            })((i6 = s7, o6 = n3(o6 = r7), i6 = n3(i6), o6.localeCompare(i6, void 0, {
                                numeric: true
                            })), t4 || ">=");
                        }))(s6, e6);
                    }(r5, e5 = Array.isArray(e5) ? e5 : [e5], this.swup)) {
                    const n6 = `${r5} ${e5.join(", ")}`;
                    throw new Error(`Plugin version mismatch: ${this.name} requires ${n6}`);
                }
            }), true;
        }
        on(r5, n6, e5 = {}) {
            var t3;
            n6 = !(t3 = n6).name.startsWith("bound ") || t3.hasOwnProperty("prototype") ? n6.bind(this) : n6;
            const s6 = this.swup.hooks.on(r5, n6, e5);
            return this.handlersToUnregister.push(s6), s6;
        }
        once(n6, e5, t3 = {}) {
            return this.on(n6, e5, r3({}, t3, {
                once: true
            }));
        }
        before(n6, e5, t3 = {}) {
            return this.on(n6, e5, r3({}, t3, {
                before: true
            }));
        }
        replace(n6, e5, t3 = {}) {
            return this.on(n6, e5, r3({}, t3, {
                replace: true
            }));
        }
        off(r5, n6) {
            return this.swup.hooks.off(r5, n6);
        }
    };

    // node_modules/@swup/fragment-plugin/dist/index.modern.js
    function o3() {
        return o3 = Object.assign ? Object.assign.bind() : function(t3) {
            for (var r5 = 1; r5 < arguments.length; r5++) {
                var e5 = arguments[r5];
                for (var n6 in e5)
                    Object.prototype.hasOwnProperty.call(e5, n6) && (t3[n6] = e5[n6]);
            }
            return t3;
        }, o3.apply(this, arguments);
    }
    window.process || (window.process = {}), window.process.env || (window.process.env = {});
    var s3 = ["test"].includes(String("development"));
    var i3 = ["development", "test"].includes(String("development"));
    var a3 = (t3, r5, e5) => null == t3 ? t3 : `\x1B[${r5}m${String(t3)}\x1B[${e5}m`;
    var l3 = (t3) => s3 ? t3 : `\u{1F9E9} ${((t4) => a3(t4, 1, 22))(t3)}`;
    var u3 = (t3) => s3 ? t3 : ((t4) => a3(t4, 94, 39))(t3);
    var c3 = class {
        log(...t3) {
            const r5 = t3.shift();
            console.log(l3(r5), ...t3);
        }
        warn(...t3) {
            const r5 = t3.shift();
            console.warn(l3(r5), ...t3);
        }
        error(...t3) {
            const r5 = t3.shift();
            console.error(l3(r5), ...t3);
        }
        logIf(t3, ...r5) {
            t3 && this.log(...r5);
        }
        warnIf(t3, ...r5) {
            t3 && this.warn(...r5);
        }
        errorIf(t3, ...r5) {
            t3 && this.error(...r5);
        }
    };
    var g3 = (t3) => {
        ! function({
            parsedRules: t4,
            swup: e5,
            logger: n6
        }) {
            const o6 = e5.getCurrentUrl();
            t4.filter((t5) => t5.matchesFrom(o6) || t5.matchesTo(o6)).forEach((t5) => {
                t5.containers.forEach((t6) => {
                    const s6 = y3(`${t6}:not([data-swup-fragment])`, e5);
                    if (!s6)
                        return;
                    const a5 = s6.getAttribute("data-swup-fragment-url");
                    a5 && i3 && (null == n6 || n6.log(`fragment url ${u3(a5)} for ${u3(t6)} provided by server`));
                    const {
                        url: l6
                    } = l2.fromUrl(a5 || o6);
                    s6.setAttribute("data-swup-fragment", ""), s6.__swupFragment = {
                        url: l6,
                        selector: t6
                    };
                });
            });
        }(t3),
        function({
            logger: t4,
            swup: r5
        }) {
            const e5 = "data-swup-link-to-fragment";
            document.querySelectorAll(`a[${e5}]`).forEach((n6) => {
                var o6;
                const s6 = n6.getAttribute(e5);
                if (!s6)
                    return void(i3 && (null == t4 || t4.warn(`[${e5}] needs to contain a valid fragment selector`)));
                const a5 = y3(s6, r5);
                if (!a5)
                    return void(i3 && (null == t4 || t4.log(`ignoring ${u3(`[${e5}="${s6}"]`)} as ${u3(s6)} is missing`)));
                const l6 = null == (o6 = a5.__swupFragment) ? void 0 : o6.url;
                l6 ? m3(l6, r5.getCurrentUrl()) ? i3 && (null == t4 || t4.warn(`The fragment URL of ${s6} is identical to the current URL. This could mean that [data-swup-fragment-url] needs to be provided by the server.`)) : n6.href = l6 : i3 && (null == t4 || t4.warn(`no fragment infos found on ${s6}`));
            });
        }(t3),
        function({
            logger: t4
        }) {
            document.querySelectorAll("dialog[data-swup-fragment]").forEach((r5) => {
                r5.__swupFragment ? r5.__swupFragment.modalShown || (r5.__swupFragment.modalShown = true, r5.removeAttribute("open"), null == r5.showModal || r5.showModal(), r5.addEventListener("keydown", (t5) => "Escape" === t5.key && t5.preventDefault())) : i3 && (null == t4 || t4.warn("fragment properties missing on element:", r5));
            });
        }(t3);
    };
    var f3 = (t3, r5) => {
        var e5;
        const n6 = null == (e5 = t3.__swupFragment) ? void 0 : e5.url;
        return !!n6 && m3(n6, r5);
    };
    var m3 = (t3, r5) => h3(t3) === h3(r5);
    var h3 = (t3) => {
        if (!t3.trim())
            return t3;
        const e5 = l2.fromUrl(t3);
        return e5.searchParams.sort(), e5.pathname.replace(/\/+$/g, "") + e5.search;
    };
    var p3 = (t3) => {
        const r5 = t3.from.url,
            e5 = t3.to.url;
        if (r5 && e5)
            return {
                from: r5,
                to: e5
            };
    };
    var d3 = (t3, r5) => {
        if (null == t3 || !t3.name)
            return;
        const {
            name: e5,
            containers: n6
        } = t3;
        n6.forEach((t4) => {
            var n7;
            null == (n7 = document.querySelector(t4)) || n7.classList.toggle(`to-${e5}`, r5);
        });
    };
    var w3 = (t3, r5) => r5.find((r6) => r6.matches(t3));

    function v2(t3) {
        return !!t3 && t3.containers.every((t4) => {
            var r5;
            return "template" === (null == (r5 = document.querySelector(t4)) || null == (r5 = r5.tagName) ? void 0 : r5.toLowerCase());
        });
    }

    function y3(t3, r5) {
        for (const e5 of r5.options.containers) {
            const r6 = document.querySelector(e5);
            if (null != r6 && r6.matches(t3))
                return r6;
            const n6 = null == r6 ? void 0 : r6.querySelector(t3);
            if (n6)
                return n6;
        }
    }

    function $3(t3) {
        if (!Array.isArray(t3))
            throw new Error("cloneRules() expects an array of rules");
        return t3.map((t4) => o3({}, t4, {
            from: Array.isArray(t4.from) ? [...t4.from] : t4.from,
            to: Array.isArray(t4.to) ? [...t4.to] : t4.to,
            containers: [...t4.containers]
        }));
    }
    var S3 = class {
        constructor(t3) {
            var r5, o6;
            this.matchesFrom = void 0, this.matchesTo = void 0, this.swup = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.name = void 0, this.scroll = false, this.focus = void 0, this.logger = void 0, this.swup = t3.swup, this.logger = t3.logger, this.from = t3.from || "", this.to = t3.to || "", t3.name && (this.name = s2(t3.name)), void 0 !== t3.scroll && (this.scroll = t3.scroll), void 0 !== t3.focus && (this.focus = t3.focus), this.containers = this.parseContainers(t3.containers), i3 && (null == (r5 = this.logger) || r5.errorIf(!this.to, "Every fragment rule must contain a 'to' path", this), null == (o6 = this.logger) || o6.errorIf(!this.from, "Every fragment rule must contain a 'from' path", this)), this.matchesFrom = h2(this.from), this.matchesTo = h2(this.to);
        }
        parseContainers(t3) {
            var r5, e5;
            return Array.isArray(t3) && t3.length ? (e5 = t3.map((t4) => t4.trim()), [...new Set(e5)]).filter((t4) => {
                var r6;
                const e6 = this.validateSelector(t4);
                return null == (r6 = this.logger) || r6.errorIf(e6 instanceof Error, e6), true === e6;
            }) : (i3 && (null == (r5 = this.logger) || r5.error("Every fragment rule must contain an array of containers", this.getDebugInfo())), []);
        }
        validateSelector(t3) {
            return t3.startsWith("#") ? !t3.match(/\s|>/) || new Error(`fragment selectors must not be nested: ${t3}`) : new Error(`fragment selectors must be IDs: ${t3}`);
        }
        getDebugInfo() {
            const {
                from: t3,
                to: r5,
                containers: e5
            } = this;
            return {
                from: String(t3),
                to: String(r5),
                containers: String(e5)
            };
        }
        matches(t3) {
            const {
                url: e5
            } = l2.fromUrl(t3.from), {
                url: n6
            } = l2.fromUrl(t3.to);
            if (!this.matchesFrom(e5) || !this.matchesTo(n6))
                return false;
            for (const t4 of this.containers) {
                const r5 = this.validateFragmentSelectorForMatch(t4);
                var o6;
                if (r5 instanceof Error)
                    return i3 && (null == (o6 = this.logger) || o6.error(r5, this.getDebugInfo())), false;
            }
            return true;
        }
        validateFragmentSelectorForMatch(t3) {
            return document.querySelector(t3) ? !!y3(t3, this.swup) || new Error(`skipping rule since ${u3(t3)} is outside of swup's default containers`) : new Error(`skipping rule since ${u3(t3)} doesn't exist in the current document`);
        }
    };
    var _3 = function(t3) {
        const r5 = p3(t3);
        r5 && w3(r5, this.parsedRules) && (t3.scroll.reset = false);
    };
    var b3 = function(t3) {
        return __async(this, null, function*() {
            const r5 = p3(t3);
            if (!r5)
                return;
            const e5 = this.getFragmentVisit(r5);
            if (!e5)
                return;
            var n6;
            t3.fragmentVisit = e5, i3 && (null == (n6 = this.logger) || n6.log(`fragment visit: ${u3(t3.fragmentVisit.containers.join(", "))}`)), t3.scroll = function(t4, r6) {
                return "boolean" == typeof t4.scroll ? o3({}, r6, {
                    reset: t4.scroll
                }) : "string" != typeof t4.scroll || r6.target ? r6 : o3({}, r6, {
                    target: t4.scroll
                });
            }(e5, t3.scroll);
            const s6 = t3.a11y;
            var a5;
            void 0 !== e5.focus && (i3 && (null == (a5 = this.logger) || a5.errorIf(!s6, "Can't set visit.a11y.focus. Is @swup/a11y-plugin installed?")), s6 && (s6.focus = e5.focus)), t3.animation.scope = t3.fragmentVisit.containers, t3.containers = t3.fragmentVisit.containers, t3.animation.selector = t3.fragmentVisit.containers.join(","), d3(e5, true);
        });
    };
    var R3 = function(t3, r5) {
        var e5, n6;
        t3.fragmentVisit && v2(t3.fragmentVisit) && (i3 && (null == (e5 = this.logger) || e5.log(`${u3("out")}-animation skipped for ${u3(null == (n6 = t3.fragmentVisit) ? void 0 : n6.containers.toString())}`)), r5.skip = true);
    };
    var E3 = function(t3, r5) {
        var e5, n6;
        t3.fragmentVisit && v2(t3.fragmentVisit) && (i3 && (null == (e5 = this.logger) || e5.log(`${u3("in")}-animation skipped for ${u3(null == (n6 = t3.fragmentVisit) ? void 0 : n6.containers.toString())}`)), r5.skip = true);
    };
    var F2 = function(t3, r5) {
        var e5;
        if (t3.trigger.el || !t3.to.url)
            return;
        const n6 = this.swup.cache.get(t3.to.url);
        n6 && n6.fragmentHtml && (r5.page.html = n6.fragmentHtml, i3 && (null == (e5 = this.logger) || e5.log(`fragment cache used for ${u3(t3.to.url)}`)));
    };
    var A3 = function(t3) {
        d3(t3.fragmentVisit, true), g3(this), (({
            swup: t4,
            logger: r5
        }) => {
            const e5 = t4.getCurrentUrl(),
                n6 = t4.cache,
                s6 = n6.get(e5);
            if (!s6)
                return;
            const a5 = new DOMParser().parseFromString(s6.html, "text/html"),
                l6 = [],
                c5 = Array.from(document.querySelectorAll("[data-swup-fragment]")).filter((t5) => !t5.matches("template") && !f3(t5, e5));
            c5.length && (t4.options.cache ? (c5.forEach((t5) => {
                var e6, o6;
                if (null != t5.querySelector("[data-swup-fragment]"))
                    return;
                const s7 = null == (e6 = t5.__swupFragment) ? void 0 : e6.url;
                if (!s7)
                    return void(i3 && (null == r5 || r5.warn("no fragment url found:", t5)));
                const u4 = null == (o6 = t5.__swupFragment) ? void 0 : o6.selector;
                if (!u4)
                    return void(i3 && (null == r5 || r5.warn("no fragment selector found:", t5)));
                const c6 = n6.get(s7);
                if (!c6)
                    return;
                const g4 = a5.querySelector(u4);
                if (!g4)
                    return;
                const f4 = new DOMParser().parseFromString(c6.html, "text/html").querySelector(u4);
                f4 && (f4.setAttribute("data-swup-fragment-url", s7), g4.replaceWith(f4), l6.push(t5));
            }), l6.length && (n6.update(e5, o3({}, s6, {
                fragmentHtml: a5.documentElement.outerHTML
            })), l6.forEach((t5) => {
                var e6, n7;
                const o6 = (null == (e6 = t5.__swupFragment) ? void 0 : e6.url) || "",
                    s7 = (null == (n7 = t5.__swupFragment) ? void 0 : n7.selector) || "";
                i3 && (null == r5 || r5.log(`updated cache with ${u3(s7)} from ${u3(o6)}`));
            }))) : i3 && (null == r5 || r5.warn("can't cache foreign fragment elements without swup's cache")));
        })(this);
    };
    var V3 = function(t3) {
        d3(t3.fragmentVisit, false);
    };
    var q3 = class extends e2 {
        get parsedRules() {
            return this._parsedRules;
        }
        constructor(t3) {
            super(), this.name = "SwupFragmentPlugin", this.requires = {
                swup: ">=4"
            }, this._rawRules = [], this._parsedRules = [], this.options = void 0, this.defaults = {
                rules: [],
                debug: false
            }, this.logger = void 0, this.options = o3({}, this.defaults, t3);
        }
        mount() {
            const t3 = this.swup;
            var r5;
            this.setRules(this.options.rules), i3 && this.options.debug && (this.logger = new c3()), this.before("link:self", _3), this.on("visit:start", b3), this.before("animation:out:await", R3), this.before("animation:in:await", E3), this.before("content:replace", F2), this.on("content:replace", A3), this.on("visit:end", V3), i3 && (null == (r5 = this.logger) || r5.warnIf(!t3.options.cache, "fragment caching will only work with swup's cache being active")), g3(this);
        }
        unmount() {
            super.unmount(), document.querySelectorAll("[data-swup-fragment]").forEach((t3) => {
                t3.removeAttribute("data-swup-fragment-url"), delete t3.__swupFragment;
            });
        }
        setRules(t3) {
            var r5;
            this._rawRules = $3(t3), this._parsedRules = t3.map((t4) => this.parseRule(t4)), i3 && (null == (r5 = this.logger) || r5.log("Updated fragment rules", this.getRules()));
        }
        getRules() {
            return $3(this._rawRules);
        }
        prependRule(t3) {
            this.setRules([t3, ...this.getRules()]);
        }
        appendRule(t3) {
            this.setRules([...this.getRules(), t3]);
        }
        parseRule({
            from: t3,
            to: r5,
            containers: e5,
            name: n6,
            scroll: o6,
            focus: s6
        }) {
            return new S3({
                from: t3,
                to: r5,
                containers: e5,
                name: n6,
                scroll: o6,
                focus: s6,
                logger: this.logger,
                swup: this.swup
            });
        }
        getFragmentVisit(t3) {
            const r5 = w3(t3, this.parsedRules);
            if (!r5)
                return;
            const e5 = ((t4, r6, e6, n7) => {
                const o7 = m3(t4.from, t4.to);
                return r6.filter((r7) => {
                    const s7 = document.querySelector(r7);
                    return s7 ? y3(r7, e6) ? !(!o7 && f3(s7, t4.to) && (i3 && (null == n7 || n7.log(`ignoring fragment ${u3(r7)} as it already matches the current URL`)), 1)) : (i3 && (null == n7 || n7.error(`${u3(r7)} is outside of swup's default containers`)), false) : (i3 && (null == n7 || n7.log(`${u3(r7)} missing in current document`)), false);
                });
            })(t3, r5.containers, this.swup, this.logger);
            if (!e5.length)
                return;
            const {
                name: n6,
                scroll: o6,
                focus: s6
            } = r5;
            return {
                containers: e5,
                name: n6,
                scroll: o6,
                focus: s6
            };
        }
    };

    // assets/scripts/utils/string.js
    var toDash = (str) => str.split(/(?=[A-Z])/).join("-").toLowerCase();

    // assets/scripts/modules/Load.js
    var Load_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.rules = JSON.parse(this.getData("rules")) || [];
            this.beforeContentReplaceBind = this.beforeContentReplace.bind(this);
            this.onContentReplaceBind = this.onContentReplace.bind(this);
            this.onVisitStartBind = this.onVisitStart.bind(this);
            this.onVisitEndBind = this.onVisitEnd.bind(this);
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.load = new _2({
                containers: ["[data-load-container]"],
                animationSelector: '[class*="u-anim-page"]',
                animateHistoryBrowsing: true,
                linkToSelf: "navigate",
                plugins: [
                    new q3({
                        rules: [{
                                from: this.rules.conseil,
                                to: `${this.rules.conseilDetails}/:name`,
                                containers: ["#modal"],
                                name: "open-modal"
                            },
                            {
                                from: `${this.rules.conseilDetails}/:name`,
                                to: this.rules.conseil,
                                containers: ["#modal", "#listing"],
                                name: "close-modal"
                            },
                            {
                                from: [
                                    this.rules.events,
                                    /* /evenements */
                                    `${this.rules.events}\\?(.*)`,
                                    /* /evenements?page=... */
                                    `${this.rules.eventsCategory}(.*)`,
                                    /* /evenements/categorie... */
                                    `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)`,
                                    /* /evenements/2024/02/16 */
                                    `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)\\?(.*)`
                                    /* /evenements/2024/02/16?page=... */
                                ],
                                to: [
                                    this.rules.events,
                                    /* /evenements */
                                    `${this.rules.events}\\?(.*)`,
                                    /* /evenements?page=... */
                                    `${this.rules.eventsCategory}(.*)`,
                                    /* /evenements/categorie... */
                                    `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)`,
                                    /* /evenements/2024/02/16 */
                                    `${this.rules.events}/:year(\\d+)/:month(\\d+)/:day(\\d+)\\?(.*)`
                                    /* /evenements/2024/02/16?page=... */
                                ],
                                containers: ["#listing", "#filters"],
                                name: "listing"
                            },
                            {
                                from: [
                                    this.rules.news,
                                    /* /actualites */
                                    `${this.rules.news}\\?(.*)`,
                                    /* /actualites?page=... */
                                    `${this.rules.newsCategory}(.*)`
                                    /* /actualites/categorie... */
                                ],
                                to: [
                                    this.rules.news,
                                    /* /actualites */
                                    `${this.rules.news}\\?(.*)`,
                                    /* /actualites?page=... */
                                    `${this.rules.newsCategory}(.*)`
                                    /* /actualites/categorie... */
                                ],
                                containers: ["#listing", "#filters"],
                                name: "listing"
                            },
                            {
                                from: `${this.rules.babillard}(.*)`,
                                to: `${this.rules.babillard}(.*)`,
                                containers: ["#listing", "#filters"],
                                name: "listing"
                            }
                        ]
                    })
                ]
            });
            this.load.hooks.on("visit:start", this.onVisitStartBind);
            this.load.hooks.before("content:replace", this.beforeContentReplaceBind);
            this.load.hooks.on("content:replace", this.onContentReplaceBind);
            this.load.hooks.on("visit:end", this.onVisitEndBind);
        }
        //////////////
        // Hooks
        //////////////
        onVisitStart(visit) {
            window.dispatchEvent(new CustomEvent(CUSTOM_EVENT.VISIT_START));
            if (visit.fragmentVisit) {
                switch (visit.fragmentVisit.name) {
                    case "close-modal":
                        this.call("close", null, "Dialog");
                        break;
                    case "listing":
                        this.call("scrollTo", {
                            target: this.el.querySelector("#listing"),
                            options: {
                                offset: -100
                            }
                        }, "Scroll");
                        break;
                }
            }
        }
        onVisitEnd(visit) {
            window.dispatchEvent(new CustomEvent(CUSTOM_EVENT.VISIT_END));
        }
        beforeContentReplace(visit) {
            return __async(this, null, function*() {
                if (visit.fragmentVisit) {
                    for (let container of visit.fragmentVisit.containers) {
                        const oldContainer = this.el.querySelector(container);
                        this.call("removeScrollElements", oldContainer, "Scroll");
                    }
                }
                for (let container of visit.containers) {
                    const oldContainer = this.el.querySelector(container);
                    this.call("destroy", oldContainer, "app");
                }
            });
        }
        onContentReplace(visit) {
            if (visit.fragmentVisit) {
                if (visit.fragmentVisit.name == "open-modal") {
                    this.call("show", null, "Dialog");
                }
                for (let container of visit.fragmentVisit.containers) {
                    const newContainer = this.el.querySelector(container);
                    this.call("addScrollElements", newContainer, "Scroll");
                }
            }
            this.updateDocumentAttributes(visit);
            for (let container of visit.containers) {
                const newContainer = this.el.querySelector(container);
                this.call("update", newContainer, "app");
            }
        }
        //////////////
        // Methods
        //////////////
        updateDocumentAttributes(visit) {
            if (visit.fragmentVisit)
                return;
            const parser = new DOMParser();
            const nextDOM = parser.parseFromString(visit.to.html, "text/html");
            const newDataset = Object.assign({}, nextDOM.querySelector("html").dataset);
            Object.entries(newDataset).forEach(([key, val]) => {
                $html.setAttribute(`data-${toDash(key)}`, val);
            });
        }
        goTo(url) {
            this.load.navigate(url);
        }
    };

    // node_modules/@googlemaps/js-api-loader/dist/index.mjs
    function __awaiter(thisArg, _arguments, P3, generator) {
        function adopt(value) {
            return value instanceof P3 ? value : new P3(function(resolve) {
                resolve(value);
            });
        }
        return new(P3 || (P3 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e5) {
                    reject(e5);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e5) {
                    reject(e5);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function getDefaultExportFromCjs(x3) {
        return x3 && x3.__esModule && Object.prototype.hasOwnProperty.call(x3, "default") ? x3["default"] : x3;
    }
    var fastDeepEqual = function equal(a5, b4) {
        if (a5 === b4)
            return true;
        if (a5 && b4 && typeof a5 == "object" && typeof b4 == "object") {
            if (a5.constructor !== b4.constructor)
                return false;
            var length, i6, keys;
            if (Array.isArray(a5)) {
                length = a5.length;
                if (length != b4.length)
                    return false;
                for (i6 = length; i6-- !== 0;)
                    if (!equal(a5[i6], b4[i6]))
                        return false;
                return true;
            }
            if (a5.constructor === RegExp)
                return a5.source === b4.source && a5.flags === b4.flags;
            if (a5.valueOf !== Object.prototype.valueOf)
                return a5.valueOf() === b4.valueOf();
            if (a5.toString !== Object.prototype.toString)
                return a5.toString() === b4.toString();
            keys = Object.keys(a5);
            length = keys.length;
            if (length !== Object.keys(b4).length)
                return false;
            for (i6 = length; i6-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(b4, keys[i6]))
                    return false;
            for (i6 = length; i6-- !== 0;) {
                var key = keys[i6];
                if (!equal(a5[key], b4[key]))
                    return false;
            }
            return true;
        }
        return a5 !== a5 && b4 !== b4;
    };
    var isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
    var DEFAULT_ID = "__googleMapsScriptId";
    var LoaderStatus;
    (function(LoaderStatus2) {
        LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
        LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
        LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
        LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
    })(LoaderStatus || (LoaderStatus = {}));
    var Loader = class _Loader {
        /**
         * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
         * using this library, instead the defaults are set by the Google Maps
         * JavaScript API server.
         *
         * ```
         * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
         * ```
         */
        constructor({
            apiKey,
            authReferrerPolicy,
            channel,
            client,
            id = DEFAULT_ID,
            language,
            libraries = [],
            mapIds,
            nonce,
            region,
            retries = 3,
            url = "https://maps.googleapis.com/maps/api/js",
            version
        }) {
            this.callbacks = [];
            this.done = false;
            this.loading = false;
            this.errors = [];
            this.apiKey = apiKey;
            this.authReferrerPolicy = authReferrerPolicy;
            this.channel = channel;
            this.client = client;
            this.id = id || DEFAULT_ID;
            this.language = language;
            this.libraries = libraries;
            this.mapIds = mapIds;
            this.nonce = nonce;
            this.region = region;
            this.retries = retries;
            this.url = url;
            this.version = version;
            if (_Loader.instance) {
                if (!isEqual(this.options, _Loader.instance.options)) {
                    throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(_Loader.instance.options)}`);
                }
                return _Loader.instance;
            }
            _Loader.instance = this;
        }
        get options() {
            return {
                version: this.version,
                apiKey: this.apiKey,
                channel: this.channel,
                client: this.client,
                id: this.id,
                libraries: this.libraries,
                language: this.language,
                region: this.region,
                mapIds: this.mapIds,
                nonce: this.nonce,
                url: this.url,
                authReferrerPolicy: this.authReferrerPolicy
            };
        }
        get status() {
            if (this.errors.length) {
                return LoaderStatus.FAILURE;
            }
            if (this.done) {
                return LoaderStatus.SUCCESS;
            }
            if (this.loading) {
                return LoaderStatus.LOADING;
            }
            return LoaderStatus.INITIALIZED;
        }
        get failed() {
            return this.done && !this.loading && this.errors.length >= this.retries + 1;
        }
        /**
         * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
         *
         * @ignore
         * @deprecated
         */
        createUrl() {
            let url = this.url;
            url += `?callback=__googleMapsCallback&loading=async`;
            if (this.apiKey) {
                url += `&key=${this.apiKey}`;
            }
            if (this.channel) {
                url += `&channel=${this.channel}`;
            }
            if (this.client) {
                url += `&client=${this.client}`;
            }
            if (this.libraries.length > 0) {
                url += `&libraries=${this.libraries.join(",")}`;
            }
            if (this.language) {
                url += `&language=${this.language}`;
            }
            if (this.region) {
                url += `&region=${this.region}`;
            }
            if (this.version) {
                url += `&v=${this.version}`;
            }
            if (this.mapIds) {
                url += `&map_ids=${this.mapIds.join(",")}`;
            }
            if (this.authReferrerPolicy) {
                url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
            }
            return url;
        }
        deleteScript() {
            const script = document.getElementById(this.id);
            if (script) {
                script.remove();
            }
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         * @deprecated, use importLibrary() instead.
         */
        load() {
            return this.loadPromise();
        }
        /**
         * Load the Google Maps JavaScript API script and return a Promise.
         *
         * @ignore
         * @deprecated, use importLibrary() instead.
         */
        loadPromise() {
            return new Promise((resolve, reject) => {
                this.loadCallback((err) => {
                    if (!err) {
                        resolve(window.google);
                    } else {
                        reject(err.error);
                    }
                });
            });
        }
        importLibrary(name) {
            this.execute();
            return google.maps.importLibrary(name);
        }
        /**
         * Load the Google Maps JavaScript API script with a callback.
         * @deprecated, use importLibrary() instead.
         */
        loadCallback(fn) {
            this.callbacks.push(fn);
            this.execute();
        }
        /**
         * Set the script on document.
         */
        setScript() {
            var _a, _b;
            if (document.getElementById(this.id)) {
                this.callback();
                return;
            }
            const params = {
                key: this.apiKey,
                channel: this.channel,
                client: this.client,
                libraries: this.libraries.length && this.libraries,
                v: this.version,
                mapIds: this.mapIds,
                language: this.language,
                region: this.region,
                authReferrerPolicy: this.authReferrerPolicy
            };
            Object.keys(params).forEach(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (key) => !params[key] && delete params[key]
            );
            if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
                ((g4) => {
                    let h5, a5, k3, p4 = "The Google Maps JavaScript API",
                        c5 = "google",
                        l6 = "importLibrary",
                        q4 = "__ib__",
                        m4 = document,
                        b4 = window;
                    b4 = b4[c5] || (b4[c5] = {});
                    const d4 = b4.maps || (b4.maps = {}),
                        r5 = /* @__PURE__ */ new Set(),
                        e5 = new URLSearchParams(),
                        u4 = () => (
                            // @ts-ignore
                            h5 || (h5 = new Promise((f4, n6) => __awaiter(this, void 0, void 0, function*() {
                                var _a2;
                                yield a5 = m4.createElement("script");
                                a5.id = this.id;
                                e5.set("libraries", [...r5] + "");
                                for (k3 in g4)
                                    e5.set(k3.replace(/[A-Z]/g, (t3) => "_" + t3[0].toLowerCase()), g4[k3]);
                                e5.set("callback", c5 + ".maps." + q4);
                                a5.src = this.url + `?` + e5;
                                d4[q4] = f4;
                                a5.onerror = () => h5 = n6(Error(p4 + " could not load."));
                                a5.nonce = this.nonce || ((_a2 = m4.querySelector("script[nonce]")) === null || _a2 === void 0 ? void 0 : _a2.nonce) || "";
                                m4.head.append(a5);
                            })))
                        );
                    d4[l6] ? console.warn(p4 + " only loads once. Ignoring:", g4) : d4[l6] = (f4, ...n6) => r5.add(f4) && u4().then(() => d4[l6](f4, ...n6));
                })(params);
            }
            const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
            if (!libraryPromises.length) {
                libraryPromises.push(this.importLibrary("core"));
            }
            Promise.all(libraryPromises).then(() => this.callback(), (error) => {
                const event2 = new ErrorEvent("error", {
                    error
                });
                this.loadErrorCallback(event2);
            });
        }
        /**
         * Reset the loader state.
         */
        reset() {
            this.deleteScript();
            this.done = false;
            this.loading = false;
            this.errors = [];
            this.onerrorEvent = null;
        }
        resetIfRetryingFailed() {
            if (this.failed) {
                this.reset();
            }
        }
        loadErrorCallback(e5) {
            this.errors.push(e5);
            if (this.errors.length <= this.retries) {
                const delay3 = this.errors.length * Math.pow(2, this.errors.length);
                console.error(`Failed to load Google Maps script, retrying in ${delay3} ms.`);
                setTimeout(() => {
                    this.deleteScript();
                    this.setScript();
                }, delay3);
            } else {
                this.onerrorEvent = e5;
                this.callback();
            }
        }
        callback() {
            this.done = true;
            this.loading = false;
            this.callbacks.forEach((cb) => {
                cb(this.onerrorEvent);
            });
            this.callbacks = [];
        }
        execute() {
            this.resetIfRetryingFailed();
            if (this.done) {
                this.callback();
            } else {
                if (window.google && window.google.maps && window.google.maps.version) {
                    console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
                    this.callback();
                    return;
                }
                if (this.loading)
                ;
                else {
                    this.loading = true;
                    this.setScript();
                }
            }
        }
    };

    // assets/scripts/modules/Map.js
    var GMap = class _GMap extends _default {
        static get settings() {
            return {
                // Google Map API ID (for styles)
                // https://console.cloud.google.com/google/maps-apis/studio/styles/5016081f71262e87?project=city-clients
                MAP_ID: "61f10e4cc753f792",
                CLASS_LOADING: "is-loading",
                CLASS_LOADED: "is-loaded",
                CLASS_FILTERS_OPEN: "has-filters",
                CLASS_FILTERS_ITEM_ACTIVE: "is-active",
                CLASS_INFO_OPEN: "has-info",
                CLASS_MARKER_ACTIVE: "is-active",
                DEFAULT_LOCATION: "parcs"
            };
        }
        constructor(m4) {
            super(m4);
            this.$el = this.el;
            this.$map = this.$("map")[0];
            this.$filtersInner = this.$("filtersInner")[0];
            this.$filterAccordion = Array.from(this.$("filterAccordion"));
            this.$filterCategories = Array.from(this.$("filterCategory"));
            this.$infoContent = this.$("infoContent")[0];
            this.gmapKey = this.getData("key");
            this.locationId = this.getData("location");
            this.filterAccordionsIds = this.$filterAccordion.map((c5) => c5.getAttribute("data-module-accordion"));
            this.activeFilterAccordion = null;
            this.$activeFilter = null;
            this.$activeFilterCategory = null;
            this.filtersIsOpen = false;
            this.infoIsOpen = false;
            this.locations = {};
            this.currentLocation = null;
            this.mapItems = [];
            this.$activeMarker = null;
            this.events = {
                click: {
                    filtersToggler: "toggleFilters",
                    filterCategory: "setFilterCategory",
                    filter: "setFilter",
                    infoClose: "closeInfo",
                    close: "close"
                }
            };
        }
        init() {
            this.gmapOptions = {
                mapId: _GMap.settings.MAP_ID
            };
            (() => __async(this, null, function*() {
                const response = yield fetch("api/v1/map-options", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const r5 = yield response.json();
                this.gmapOptions = __spreadValues(__spreadValues({}, this.gmapOptions), r5);
            }))().then(() => {
                const loader = new Loader({
                    apiKey: this.gmapKey,
                    version: "weekly",
                    libraries: ["places"]
                });
                loader.load().then(() => __async(this, null, function*() {
                    const {
                        LatLngBounds
                    } = yield google.maps.importLibrary("core");
                    const {
                        Map: Map2,
                        Polygon
                    } = yield google.maps.importLibrary("maps");
                    const {
                        AdvancedMarkerElement
                    } = yield google.maps.importLibrary("marker");
                    this.map = new Map2(this.$map, this.gmapOptions);
                    this.google = {
                        LatLngBounds,
                        Marker: AdvancedMarkerElement,
                        // Animation: Animation,
                        Polygon
                    };
                    this.$el.classList.add(_GMap.settings.CLASS_LOADED);
                    const urlParams = new URLSearchParams(document.location.search);
                    const locationId = this.getData("location") || urlParams.get("id") || _GMap.settings.DEFAULT_LOCATION;
                    this.loadLocations(locationId, locationId !== _GMap.settings.DEFAULT_LOCATION);
                }));
            }).catch((e5) => console.log(e5));
            for (let id of this.filterAccordionsIds) {
                this.call("setCallbacks", {
                    onOpen: () => {
                        if (this.activeFilterAccordion) {
                            this.call("shrink", null, "Accordion", this.activeFilterAccordion);
                        }
                        if (this.$activeFilterCategory) {
                            this.setFilter(null);
                            this.$activeFilterCategory = null;
                        }
                        this.activeFilterAccordion = id;
                        this.loadLocations(id);
                        this.$filtersInner.scrollTop = scrollY;
                        this.closeInfo();
                    },
                    onShrink: () => {
                        if (this.activeFilterAccordion === id) {
                            this.activeFilterAccordion = null;
                        }
                        this.closeInfo();
                    }
                }, "Accordion", id);
            }
        }
        setFilterCategory(e5) {
            if (this.activeFilterAccordion) {
                this.call("shrink", null, "Accordion", this.activeFilterAccordion);
            }
            if (this.$activeFilterCategory) {
                this.setFilter(null);
            }
            this.setFilter(e5);
            this.$activeFilterCategory = e5.curTarget;
        }
        toggleFilters() {
            if (this.filtersIsOpen) {
                this.closeFilters();
            } else {
                this.openFilters();
            }
        }
        openFilters() {
            if (this.filtersIsOpen) {
                return;
            }
            this.filtersIsOpen = true;
            this.$el.classList.add(_GMap.settings.CLASS_FILTERS_OPEN);
        }
        closeFilters() {
            if (!this.filtersIsOpen) {
                return;
            }
            this.filtersIsOpen = false;
            this.$el.classList.remove(_GMap.settings.CLASS_FILTERS_OPEN);
        }
        openInfo(item, isMarker = false) {
            if (!this.$infoContent) {
                return;
            }
            if (this.infoIsOpen) {
                this.closeInfo();
            }
            if (isMarker) {
                this.$activeMarker = item.content;
                this.$activeMarker.classList.add(_GMap.settings.CLASS_MARKER_ACTIVE);
            }
            this.fitBounds(item);
            this.infoIsOpen = true;
            this.$infoContent.innerHTML = item.tooltip;
            this.$el.classList.add(_GMap.settings.CLASS_INFO_OPEN);
        }
        closeInfo() {
            if (!this.infoIsOpen) {
                return;
            }
            this.infoIsOpen = false;
            this.$el.classList.remove(_GMap.settings.CLASS_INFO_OPEN);
            if (this.$activeMarker) {
                this.$activeMarker.classList.remove(_GMap.settings.CLASS_MARKER_ACTIVE);
                this.$activeMarker = null;
            }
            setTimeout(() => {
                if (!this.infoIsOpen) {
                    this.$infoContent.innerHTML = "";
                }
            }, 300);
        }
        close() {
            this.closeFilters();
            this.closeInfo();
        }
        setFilter(e5) {
            var _a, _b;
            if (e5 === null) {
                (_a = this.$activeFilter) == null ? void 0 : _a.classList.remove(_GMap.settings.CLASS_FILTERS_ITEM_ACTIVE);
                this.$activeFilter = null;
                return;
            }
            const $target = e5.curTarget;
            const value = $target.dataset.value;
            this.loadLocations(value);
            (_b = this.$activeFilter) == null ? void 0 : _b.classList.remove(_GMap.settings.CLASS_FILTERS_ITEM_ACTIVE);
            $target.classList.add(_GMap.settings.CLASS_FILTERS_ITEM_ACTIVE);
            this.$activeFilter = $target;
            this.closeFilters();
            this.closeInfo();
        }
        loadLocations(master, single = false) {
            let url = single ? "api/v1/location" : "api/v1/locations";
            if (master) {
                url += `/${master}`;
            }
            if (url === this.currentLocation) {
                return;
            }
            this.currentLocation = url;
            for (let item of this.mapItems) {
                item.setMap(null);
                if (item.fillOpacity) {
                    item.fillOpacity = 0;
                }
            }
            const items = this.locations[url];
            if (typeof items !== "undefined") {
                for (let item of items) {
                    item.setMap(this.map);
                    if (item.fillOpacity) {
                        item.fillOpacity = 1;
                    }
                }
                this.mapItems = items;
                this.fitBounds();
                return;
            }
            this.$el.classList.add(_GMap.settings.CLASS_LOADING);
            fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((r5) => r5.json()).then((r5) => {
                this.mapItems = [];
                if (typeof r5.place === "object" && r5.place.id) {
                    this.setItems(r5.place);
                } else if (typeof r5.places === "object") {
                    const places = Object.values(r5.places);
                    const placesLength = places.length;
                    for (let i6 = 0; i6 < placesLength; i6++) {
                        this.setItems(places[i6], i6, placesLength);
                    }
                } else {
                    this.loadLocations(_GMap.settings.DEFAULT_LOCATION);
                }
                this.fitBounds();
                this.locations[url] = this.mapItems;
                this.$el.classList.remove(_GMap.settings.CLASS_LOADING);
            }).catch((e5) => console.log(e5));
        }
        setItems(place, i6 = 0, placesLength = 0) {
            const {
                position,
                html,
                path,
                paths,
                tooltip
            } = place;
            let content = document.createElement("div");
            content.innerHTML = html;
            content = content.firstElementChild;
            if (i6 > 0 && placesLength > 0) {
                content.setAttribute("style", `--delay: ${i6 / placesLength}s`);
            }
            if (placesLength === 1) {
                content.classList.add(_GMap.settings.CLASS_MARKER_ACTIVE);
            }
            if (position) {
                const marker = new this.google.Marker({
                    content,
                    position,
                    map: this.map
                });
                marker.tooltip = tooltip;
                marker.addListener("click", () => this.openInfo(marker, true));
                this.mapItems.push(marker);
            } else if (paths) {
                const polygon = new this.google.Polygon({
                    content,
                    paths,
                    fillColor: "#FFE6BA",
                    map: this.map
                });
                polygon.tooltip = tooltip;
                polygon.addListener("click", () => this.openInfo(polygon));
                this.mapItems.push(polygon);
            } else if (path) {
                const polygon = new this.google.Polygon({
                    content,
                    paths: path,
                    fillColor: "transparent",
                    strokeColor: "#EE7600",
                    map: this.map
                });
                this.mapItems.push(polygon);
            }
        }
        fitBounds(item) {
            const items = item ? [item] : this.mapItems;
            const areMarkers = items.every((item2) => typeof item2.position !== "undefined");
            if (areMarkers) {
                const bounds = new this.google.LatLngBounds();
                for (let item2 of items) {
                    bounds.extend(item2.position);
                }
                this.map.fitBounds(bounds);
                this.map.setZoom(Math.min(this.map.getZoom(), 15));
            } else {
                this.map.setZoom(13);
                this.map.setCenter(this.gmapOptions.options.center);
            }
        }
    };

    // assets/scripts/modules/ModalAlert.js
    var _ModalAlert = class _ModalAlert extends _default {
        constructor(m4) {
            super(m4);
            this.$items = this.$("item");
            this.events = {
                click: {
                    "close": "closeAlert"
                }
            };
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            let showModal = false;
            this.$items.forEach(($item) => {
                const key = $item.dataset.sessionKey;
                if (localStorage.getItem(key) == "true") {
                    $item.classList.add(_ModalAlert.CLASS.HIDDEN);
                } else {
                    showModal = true;
                }
            });
            showModal && $html.classList.add(_ModalAlert.CLASS.OPEN);
        }
        destroy() {
            super.destroy();
        }
        closeAlert(e5) {
            const $target = e5.curTarget;
            const $modal = $target.closest('[data-modal-alert="item"]');
            const key = $modal.dataset.sessionKey;
            $modal.classList.add(_ModalAlert.CLASS.HIDDEN);
            let allHidden = true;
            this.$items.forEach((item) => {
                if (!item.classList.contains(_ModalAlert.CLASS.HIDDEN)) {
                    allHidden = false;
                }
            });
            allHidden && $html.classList.remove(_ModalAlert.CLASS.OPEN);
            localStorage.setItem(key, "true");
        }
    };
    __publicField(_ModalAlert, "CLASS", {
        OPEN: "has-modal-alert-open",
        HIDDEN: "is-hidden"
    });
    var ModalAlert = _ModalAlert;

    // assets/scripts/modules/ModalParking.js
    var _ModalParking = class _ModalParking extends _default {
        constructor(m4) {
            super(m4);
            this.onTogglerClickBind = this.onTogglerClick.bind(this);
            this.onPageLoadBind = this.onPageLoad.bind(this);
            this.$toggler = document.querySelector("[data-modal-parking-toggler]");
            this.$close = this.$("close")[0];
            this.modalId = this.el.dataset.id;
            this.events = {
                click: {
                    "close": "close"
                }
            };
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            if (sessionStorage.getItem("candiacParkingModal") != this.modalId) {
                setTimeout(() => {
                    this.open();
                }, 1e3);
            }
            this.bindEvents();
            this.focusTrapOptions = {
                clickOutsideDeactivates: true,
                initialFocus: this.el,
                setReturnFocus: false,
                onActivate: () => {
                    this.returnFocus = document.activeElement;
                    this.call("close", null, "ModalSearch");
                    this.call("closeNav", null, "Nav");
                },
                onPostActivate: () => {
                    this.$toggler.setAttribute("aria-expanded", true);
                    this.$toggler.classList.add(_ModalParking.CLASS.ACTIVE);
                },
                onDeactivate: () => {
                    if (document.activeElement !== this.$close) {
                        this.returnFocus = document.activeElement;
                    }
                    $html.classList.remove(_ModalParking.CLASS.OPEN);
                    $html.classList.remove(CSS_CLASS.MODAL_OPEN);
                    this.el.setAttribute("aria-hidden", true);
                    if (sessionStorage.getItem("candiacParkingModal") != this.modalId) {
                        sessionStorage.setItem("candiacParkingModal", this.modalId);
                    }
                },
                onPostDeactivate: () => {
                    var _a, _b;
                    (_b = (_a = this.returnFocus) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
                    this.returnFocus = false;
                    this.$toggler.setAttribute("aria-expanded", false);
                    this.$toggler.classList.remove(_ModalParking.CLASS.ACTIVE);
                }
            };
            this.focusTrap = createFocusTrap(".c-header_inner", this.focusTrapOptions);
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$toggler.addEventListener("click", this.onTogglerClickBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$toggler.removeEventListener("click", this.onTogglerClickBind);
        }
        //////////////
        // Callbacks
        //////////////
        onTogglerClick(e5) {
            var _a;
            if ((_a = this.focusTrap) == null ? void 0 : _a.active) {
                this.close();
            } else {
                this.open();
            }
        }
        onPageLoad() {
            this.close();
        }
        //////////////
        // Methods
        //////////////
        open() {
            var _a;
            if (this.focusTrap.active)
                return;
            $html.classList.add(_ModalParking.CLASS.OPEN);
            $html.classList.add(CSS_CLASS.MODAL_OPEN);
            this.el.setAttribute("aria-hidden", false);
            (_a = this.focusTrap) == null ? void 0 : _a.activate();
        }
        close() {
            var _a, _b;
            (_b = (_a = this.focusTrap) == null ? void 0 : _a.deactivate) == null ? void 0 : _b.call(_a);
        }
    };
    __publicField(_ModalParking, "CLASS", {
        OPEN: "has-modal-parking-open",
        ACTIVE: "is-active"
    });
    var ModalParking = _ModalParking;

    // assets/scripts/modules/ModalSearch.js
    var _ModalSearch = class _ModalSearch extends _default {
        constructor(m4) {
            super(m4);
            this.onPageLoadBind = this.onPageLoad.bind(this);
            this.onTogglerClickBind = this.onTogglerClick.bind(this);
            this.onKeydownBind = this.onKeydown.bind(this);
            this.onKeyupBind = this.onKeyup.bind(this);
            this.$toggler = document.querySelector("[data-modal-search-toggler]");
            this.$input = this.el.querySelector("input");
            this.ctrlDown = false;
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
            this.focusTrapOptions = {
                clickOutsideDeactivates: true,
                initialFocus: this.$input,
                onActivate: () => {
                    this.call("closeNav", null, "Nav");
                    this.call("close", null, "ModalParking");
                },
                onPostActivate: () => {
                    this.$toggler.setAttribute("aria-expanded", true);
                    this.$toggler.classList.add(_ModalSearch.CLASS.ACTIVE);
                },
                onDeactivate: () => {
                    $html.classList.remove(_ModalSearch.CLASS.OPEN);
                    $html.classList.remove(CSS_CLASS.MODAL_OPEN);
                    this.el.setAttribute("aria-hidden", true);
                },
                onPostDeactivate: () => {
                    this.$toggler.setAttribute("aria-expanded", false);
                    this.$toggler.classList.remove(_ModalSearch.CLASS.ACTIVE);
                }
            };
            this.focusTrap = createFocusTrap(".c-header_inner", this.focusTrapOptions);
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$toggler.addEventListener("click", this.onTogglerClickBind);
            document.addEventListener("keydown", this.onKeydownBind);
            document.addEventListener("keyup", this.onKeyupBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$toggler.removeEventListener("click", this.onTogglerClickBind);
            document.removeEventListener("keydown", this.onKeydownBind);
            document.removeEventListener("keyup", this.onKeyupBind);
        }
        //////////////
        // Callbacks
        //////////////
        onTogglerClick(e5) {
            var _a;
            if ((_a = this.focusTrap) == null ? void 0 : _a.active) {
                this.close();
            } else {
                this.open();
            }
        }
        onKeydown(e5) {
            if (e5.key == "Control" || e5.key == "Meta") {
                this.ctrlDown = true;
            } else {
                if (this.ctrlDown && e5.key == "k") {
                    this.open();
                }
            }
        }
        onKeyup(e5) {
            if (e5.key == "Control" || e5.key == "Meta") {
                this.ctrlDown = false;
            }
        }
        onPageLoad() {
            this.close();
        }
        //////////////
        // Methods
        //////////////
        open() {
            if (this.focusTrap.active)
                return;
            $html.classList.add(_ModalSearch.CLASS.OPEN);
            $html.classList.add(CSS_CLASS.MODAL_OPEN);
            this.el.setAttribute("aria-hidden", false);
            requestAnimationFrame(() => {
                this.focusTrap.activate();
            });
        }
        close() {
            var _a, _b;
            (_b = (_a = this.focusTrap) == null ? void 0 : _a.deactivate) == null ? void 0 : _b.call(_a);
        }
    };
    __publicField(_ModalSearch, "CLASS", {
        OPEN: "has-modal-search-open",
        ACTIVE: "is-active"
    });
    var ModalSearch = _ModalSearch;

    // assets/scripts/modules/ModalShare.js
    var _ModalShare = class _ModalShare extends _default {
        constructor(m4) {
            super(m4);
            this.onTogglerClickBind = this.onTogglerClick.bind(this);
            this.$toggler = document.querySelector("[data-modal-share-toggler]") || null;
            this.events = {
                click: {
                    close: "close",
                    share: "share"
                }
            };
            this.$copy = this.$("copy")[0];
            this.$inner = this.$("inner")[0];
        }
        init() {
            if (!this.$toggler)
                return;
            this.bindEvents();
            this.focusTrapOptions = {
                clickOutsideDeactivates: true,
                onActivate: () => {},
                onPostActivate: () => {
                    this.$toggler.setAttribute("aria-expanded", true);
                },
                onDeactivate: () => {
                    $html.classList.remove(_ModalShare.CLASS.OPEN);
                    $html.classList.remove(CSS_CLASS.MODAL_OPEN);
                    this.$inner.setAttribute("aria-hidden", true);
                },
                onPostDeactivate: () => {
                    this.$toggler.setAttribute("aria-expanded", false);
                }
            };
            this.focusTrap = createFocusTrap(this.$inner, this.focusTrapOptions);
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            this.$toggler.addEventListener("click", this.onTogglerClickBind);
        }
        unbindEvents() {
            this.$toggler.removeEventListener("click", this.onTogglerClickBind);
        }
        //////////////
        // Callbacks
        //////////////
        onTogglerClick(e5) {
            var _a;
            if ((_a = this.focusTrap) == null ? void 0 : _a.active) {
                this.close();
            } else {
                this.open();
            }
        }
        //////////////
        // Methods
        //////////////
        share(event2) {
            const targetElement = event2.curTarget;
            const shareMethod = this.getData("method", targetElement);
            const shareURL = window.location.href;
            switch (shareMethod) {
                case "facebook":
                    {
                        const platformURL = `https://facebook.com/sharer/sharer.php?u=${shareURL}`;
                        this.openWindow(platformURL);
                        break;
                    }
                case "twitter":
                    {
                        const text = encodeURIComponent(this.getData("text", targetElement));
                        const platformURL = `https://twitter.com/share?url=${shareURL}&amp;text=${text}`;
                        this.openWindow(platformURL);
                        break;
                    }
                case "mail":
                    {
                        const subject = encodeURIComponent(this.getData("subject", targetElement));
                        const body = encodeURIComponent(this.getData("body", targetElement));
                        this.openMail(subject, `${body} ${shareURL}`);
                        break;
                    }
                case "linkedin":
                    {
                        const encodedURL = encodeURIComponent(shareURL);
                        const platformURL = `http://www.linkedin.com/shareArticle?mini=true&amp;url=${encodedURL}`;
                        this.openWindow(platformURL);
                        break;
                    }
                case "copy":
                    {
                        this.copyUrl(shareURL);
                        break;
                    }
            }
        }
        openWindow(url) {
            window.open(url, "Share", "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=500, width=600");
        }
        openMail(subject, body) {
            window.location = "mailto:?subject=" + subject + "&body=" + body;
        }
        copyUrl(url) {
            if (this.copyTimeout != void 0) {
                clearTimeout(this.copyTimeout);
            }
            this.$copy.innerText = this.getData("copy-success");
            this.$copy.style.opacity = "1";
            this.copyTimeout = setTimeout(() => {
                this.$copy.innerText = "";
                this.$copy.style.opacity = "0";
            }, 1500);
            window.copyToClipboard(url);
        }
        open() {
            if (this.focusTrap.active)
                return;
            $html.classList.add(_ModalShare.CLASS.OPEN);
            $html.classList.add(CSS_CLASS.MODAL_OPEN);
            this.$inner.setAttribute("aria-hidden", false);
            requestAnimationFrame(() => {
                this.focusTrap.activate();
            });
        }
        close() {
            var _a, _b;
            (_b = (_a = this.focusTrap) == null ? void 0 : _a.deactivate) == null ? void 0 : _b.call(_a);
        }
    };
    __publicField(_ModalShare, "CLASS", {
        OPEN: "has-modal-share-open"
    });
    var ModalShare = _ModalShare;

    // assets/scripts/modules/Nav.js
    var _Nav = class _Nav extends _default {
        constructor(m4) {
            super(m4);
            this.events = {
                click: {
                    "itemToggler": "onItemTogglerClick",
                    "back": "onBackClick"
                }
            };
            this.onTogglerClickBind = this.onTogglerClick.bind(this);
            this.onPageLoadBind = this.onPageLoad.bind(this);
            this.$togglers = document.querySelectorAll("[data-nav-toggler]");
        }
        //////////////
        // Lifecycle
        //////////////
        init() {
            this.bindEvents();
            this.focusTrapOptions = {
                clickOutsideDeactivates: true,
                initialFocus: false,
                onActivate: () => {
                    this.call("close", null, "ModalSearch");
                    this.call("close", null, "ModalParking");
                    this.call("stop", null, "Scroll");
                },
                onPostActivate: () => {
                    this.$togglers.forEach(($toggler) => {
                        $toggler.setAttribute("aria-expanded", true);
                    });
                },
                onDeactivate: () => {
                    $html.classList.remove(_Nav.CLASS.OPEN);
                    $html.classList.remove(CSS_CLASS.MODAL_OPEN);
                    this.call("start", null, "Scroll");
                },
                onPostDeactivate: () => {
                    this.closeActiveItems();
                    this.$togglers.forEach(($toggler) => {
                        $toggler.setAttribute("aria-expanded", false);
                    });
                }
            };
            this.focusTrap = createFocusTrap(".c-header_inner", this.focusTrapOptions);
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$togglers.forEach(($toggler) => {
                $toggler.addEventListener("click", this.onTogglerClickBind);
            });
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.VISIT_START, this.onPageLoadBind);
            this.$togglers.forEach(($toggler) => {
                $toggler.removeEventListener("click", this.onTogglerClickBind);
            });
        }
        //////////////
        // Callbacks
        //////////////
        onTogglerClick(e5) {
            var _a;
            if ((_a = this.focusTrap) == null ? void 0 : _a.active) {
                this.closeNav();
            } else {
                this.openNav();
            }
        }
        onItemTogglerClick(e5) {
            var _a;
            const $item = this.parent("item", e5.curTarget);
            const isActive = $item.classList.contains(_Nav.CLASS.ITEM_ACTIVE);
            const itemLevel = this.getData("level", $item);
            if (isActive && itemLevel == "primary") {
                this.closeNav();
            } else {
                if (!((_a = this.focusTrap) == null ? void 0 : _a.active)) {
                    this.openNav();
                }
                this.closeActiveItems($item.parentNode);
                requestAnimationFrame(() => {
                    this.openItem($item);
                });
            }
        }
        onBackClick(e5) {
            const $item = this.parent("item", e5.curTarget);
            $item && this.closeItem($item);
        }
        onPageLoad() {
            this.closeNav();
        }
        //////////////
        // Methods
        //////////////
        openNav() {
            if (this.focusTrap.active)
                return;
            $html.classList.add(_Nav.CLASS.OPEN);
            $html.classList.add(CSS_CLASS.MODAL_OPEN);
            requestAnimationFrame(() => {
                this.focusTrap.activate();
            });
        }
        closeNav() {
            var _a, _b;
            (_b = (_a = this.focusTrap) == null ? void 0 : _a.deactivate) == null ? void 0 : _b.call(_a);
        }
        openItem($item) {
            var _a, _b, _c;
            if (!$item)
                return;
            $item.classList.add(_Nav.CLASS.ITEM_ACTIVE);
            (_a = this.$("itemToggler", $item)[0]) == null ? void 0 : _a.setAttribute("aria-expanded", true);
            (_b = this.$("itemPanel", $item)[0]) == null ? void 0 : _b.setAttribute("aria-hidden", false);
            (_c = this.$("itemPanel", $item)[0]) == null ? void 0 : _c.scrollTo(0, 0);
            const $parent = this.parent("itemPanel", $item) || $item.parentNode;
            $parent == null ? void 0 : $parent.classList.add(_Nav.CLASS.PARENT_ACTIVE);
        }
        closeItem($item) {
            var _a, _b;
            if (!$item)
                return;
            $item.classList.remove(_Nav.CLASS.ITEM_ACTIVE);
            (_a = this.$("itemToggler", $item)[0]) == null ? void 0 : _a.setAttribute("aria-expanded", false);
            (_b = this.$("itemPanel", $item)[0]) == null ? void 0 : _b.setAttribute("aria-hidden", true);
            const $parent = this.parent("itemPanel", $item) || $item.parentNode;
            $parent == null ? void 0 : $parent.classList.remove(_Nav.CLASS.PARENT_ACTIVE);
        }
        closeActiveItems($container = this.el) {
            const $items = this.$("item", $container);
            $items.forEach(($item) => {
                if ($item.classList.contains(_Nav.CLASS.ITEM_ACTIVE)) {
                    this.closeItem($item);
                }
            });
        }
    };
    __publicField(_Nav, "CLASS", {
        OPEN: "has-nav-open",
        ITEM_ACTIVE: "is-active",
        PARENT_ACTIVE: "has-item-active"
    });
    var Nav = _Nav;

    // node_modules/photoswipe/dist/photoswipe.esm.js
    function createElement2(className, tagName, appendToEl) {
        const el = document.createElement(tagName);
        if (className) {
            el.className = className;
        }
        if (appendToEl) {
            appendToEl.appendChild(el);
        }
        return el;
    }

    function equalizePoints(p1, p22) {
        p1.x = p22.x;
        p1.y = p22.y;
        if (p22.id !== void 0) {
            p1.id = p22.id;
        }
        return p1;
    }

    function roundPoint(p4) {
        p4.x = Math.round(p4.x);
        p4.y = Math.round(p4.y);
    }

    function getDistanceBetween(p1, p22) {
        const x3 = Math.abs(p1.x - p22.x);
        const y4 = Math.abs(p1.y - p22.y);
        return Math.sqrt(x3 * x3 + y4 * y4);
    }

    function pointsEqual(p1, p22) {
        return p1.x === p22.x && p1.y === p22.y;
    }

    function clamp(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }

    function toTransformString(x3, y4, scale) {
        let propValue = `translate3d(${x3}px,${y4 || 0}px,0)`;
        if (scale !== void 0) {
            propValue += ` scale3d(${scale},${scale},1)`;
        }
        return propValue;
    }

    function setTransform(el, x3, y4, scale) {
        el.style.transform = toTransformString(x3, y4, scale);
    }
    var defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";

    function setTransitionStyle(el, prop, duration, ease) {
        el.style.transition = prop ? `${prop} ${duration}ms ${ease || defaultCSSEasing}` : "none";
    }

    function setWidthHeight(el, w4, h5) {
        el.style.width = typeof w4 === "number" ? `${w4}px` : w4;
        el.style.height = typeof h5 === "number" ? `${h5}px` : h5;
    }

    function removeTransitionStyle(el) {
        setTransitionStyle(el);
    }

    function decodeImage(img) {
        if ("decode" in img) {
            return img.decode().catch(() => {});
        }
        if (img.complete) {
            return Promise.resolve(img);
        }
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }
    var LOAD_STATE = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
    };

    function specialKeyUsed(e5) {
        return "button" in e5 && e5.button === 1 || e5.ctrlKey || e5.metaKey || e5.altKey || e5.shiftKey;
    }

    function getElementsFromOption(option, legacySelector, parent = document) {
        let elements = [];
        if (option instanceof Element) {
            elements = [option];
        } else if (option instanceof NodeList || Array.isArray(option)) {
            elements = Array.from(option);
        } else {
            const selector = typeof option === "string" ? option : legacySelector;
            if (selector) {
                elements = Array.from(parent.querySelectorAll(selector));
            }
        }
        return elements;
    }

    function isSafari() {
        return !!(navigator.vendor && navigator.vendor.match(/apple/i));
    }
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: () => {
                supportsPassive = true;
            }
        }));
    } catch (e5) {}
    var DOMEvents = class {
        constructor() {
            this._pool = [];
        }
        /**
         * Adds event listeners
         *
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type Can be multiple, separated by space.
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         */
        add(target, type, listener, passive) {
            this._toggleListener(target, type, listener, passive);
        }
        /**
         * Removes event listeners
         *
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         */
        remove(target, type, listener, passive) {
            this._toggleListener(target, type, listener, passive, true);
        }
        /**
         * Removes all bound events
         */
        removeAll() {
            this._pool.forEach((poolItem) => {
                this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
            });
            this._pool = [];
        }
        /**
         * Adds or removes event
         *
         * @private
         * @param {PoolItem['target']} target
         * @param {PoolItem['type']} type
         * @param {PoolItem['listener']} listener
         * @param {PoolItem['passive']} [passive]
         * @param {boolean} [unbind] Whether the event should be added or removed
         * @param {boolean} [skipPool] Whether events pool should be skipped
         */
        _toggleListener(target, type, listener, passive, unbind, skipPool) {
            if (!target) {
                return;
            }
            const methodName = unbind ? "removeEventListener" : "addEventListener";
            const types = type.split(" ");
            types.forEach((eType) => {
                if (eType) {
                    if (!skipPool) {
                        if (unbind) {
                            this._pool = this._pool.filter((poolItem) => {
                                return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
                            });
                        } else {
                            this._pool.push({
                                target,
                                type: eType,
                                listener,
                                passive
                            });
                        }
                    }
                    const eventOptions = supportsPassive ? {
                        passive: passive || false
                    } : false;
                    target[methodName](eType, listener, eventOptions);
                }
            });
        }
    };

    function getViewportSize(options, pswp) {
        if (options.getViewportSizeFn) {
            const newViewportSize = options.getViewportSizeFn(options, pswp);
            if (newViewportSize) {
                return newViewportSize;
            }
        }
        return {
            x: document.documentElement.clientWidth,
            // TODO: height on mobile is very incosistent due to toolbar
            // find a way to improve this
            //
            // document.documentElement.clientHeight - doesn't seem to work well
            y: window.innerHeight
        };
    }

    function parsePaddingOption(prop, options, viewportSize, itemData, index) {
        let paddingValue = 0;
        if (options.paddingFn) {
            paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
        } else if (options.padding) {
            paddingValue = options.padding[prop];
        } else {
            const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
            if (options[legacyPropName]) {
                paddingValue = options[legacyPropName];
            }
        }
        return Number(paddingValue) || 0;
    }

    function getPanAreaSize(options, viewportSize, itemData, index) {
        return {
            x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
            y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
        };
    }
    var PanBounds = class {
        /**
         * @param {Slide} slide
         */
        constructor(slide2) {
            this.slide = slide2;
            this.currZoomLevel = 1;
            this.center = /** @type {Point} */ {
                x: 0,
                y: 0
            };
            this.max = /** @type {Point} */ {
                x: 0,
                y: 0
            };
            this.min = /** @type {Point} */ {
                x: 0,
                y: 0
            };
        }
        /**
         * _getItemBounds
         *
         * @param {number} currZoomLevel
         */
        update(currZoomLevel) {
            this.currZoomLevel = currZoomLevel;
            if (!this.slide.width) {
                this.reset();
            } else {
                this._updateAxis("x");
                this._updateAxis("y");
                this.slide.pswp.dispatch("calcBounds", {
                    slide: this.slide
                });
            }
        }
        /**
         * _calculateItemBoundsForAxis
         *
         * @param {Axis} axis
         */
        _updateAxis(axis) {
            const {
                pswp
            } = this.slide;
            const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
            const paddingProp = axis === "x" ? "left" : "top";
            const padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
            const panAreaSize = this.slide.panAreaSize[axis];
            this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
            this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
            this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
        }
        // _getZeroBounds
        reset() {
            this.center.x = 0;
            this.center.y = 0;
            this.max.x = 0;
            this.max.y = 0;
            this.min.x = 0;
            this.min.y = 0;
        }
        /**
         * Correct pan position if it's beyond the bounds
         *
         * @param {Axis} axis x or y
         * @param {number} panOffset
         * @returns {number}
         */
        correctPan(axis, panOffset) {
            return clamp(panOffset, this.max[axis], this.min[axis]);
        }
    };
    var MAX_IMAGE_WIDTH = 4e3;
    var ZoomLevel = class {
        /**
         * @param {PhotoSwipeOptions} options PhotoSwipe options
         * @param {SlideData} itemData Slide data
         * @param {number} index Slide index
         * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
         */
        constructor(options, itemData, index, pswp) {
            this.pswp = pswp;
            this.options = options;
            this.itemData = itemData;
            this.index = index;
            this.panAreaSize = null;
            this.elementSize = null;
            this.fit = 1;
            this.fill = 1;
            this.vFill = 1;
            this.initial = 1;
            this.secondary = 1;
            this.max = 1;
            this.min = 1;
        }
        /**
         * Calculate initial, secondary and maximum zoom level for the specified slide.
         *
         * It should be called when either image or viewport size changes.
         *
         * @param {number} maxWidth
         * @param {number} maxHeight
         * @param {Point} panAreaSize
         */
        update(maxWidth, maxHeight, panAreaSize) {
            const elementSize = {
                x: maxWidth,
                y: maxHeight
            };
            this.elementSize = elementSize;
            this.panAreaSize = panAreaSize;
            const hRatio = panAreaSize.x / elementSize.x;
            const vRatio = panAreaSize.y / elementSize.y;
            this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
            this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
            this.vFill = Math.min(1, vRatio);
            this.initial = this._getInitial();
            this.secondary = this._getSecondary();
            this.max = Math.max(this.initial, this.secondary, this._getMax());
            this.min = Math.min(this.fit, this.initial, this.secondary);
            if (this.pswp) {
                this.pswp.dispatch("zoomLevelsUpdate", {
                    zoomLevels: this,
                    slideData: this.itemData
                });
            }
        }
        /**
         * Parses user-defined zoom option.
         *
         * @private
         * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
         * @returns { number | undefined }
         */
        _parseZoomLevelOption(optionPrefix) {
            const optionName = (
                /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
                optionPrefix + "ZoomLevel"
            );
            const optionValue = this.options[optionName];
            if (!optionValue) {
                return;
            }
            if (typeof optionValue === "function") {
                return optionValue(this);
            }
            if (optionValue === "fill") {
                return this.fill;
            }
            if (optionValue === "fit") {
                return this.fit;
            }
            return Number(optionValue);
        }
        /**
         * Get zoom level to which image will be zoomed after double-tap gesture,
         * or when user clicks on zoom icon,
         * or mouse-click on image itself.
         * If you return 1 image will be zoomed to its original size.
         *
         * @private
         * @return {number}
         */
        _getSecondary() {
            let currZoomLevel = this._parseZoomLevelOption("secondary");
            if (currZoomLevel) {
                return currZoomLevel;
            }
            currZoomLevel = Math.min(1, this.fit * 3);
            if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
                currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
            }
            return currZoomLevel;
        }
        /**
         * Get initial image zoom level.
         *
         * @private
         * @return {number}
         */
        _getInitial() {
            return this._parseZoomLevelOption("initial") || this.fit;
        }
        /**
         * Maximum zoom level when user zooms
         * via zoom/pinch gesture,
         * via cmd/ctrl-wheel or via trackpad.
         *
         * @private
         * @return {number}
         */
        _getMax() {
            return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
        }
    };
    var Slide = class {
        /**
         * @param {SlideData} data
         * @param {number} index
         * @param {PhotoSwipe} pswp
         */
        constructor(data, index, pswp) {
            this.data = data;
            this.index = index;
            this.pswp = pswp;
            this.isActive = index === pswp.currIndex;
            this.currentResolution = 0;
            this.panAreaSize = {
                x: 0,
                y: 0
            };
            this.pan = {
                x: 0,
                y: 0
            };
            this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
            this.zoomLevels = new ZoomLevel(pswp.options, data, index, pswp);
            this.pswp.dispatch("gettingData", {
                slide: this,
                data: this.data,
                index
            });
            this.content = this.pswp.contentLoader.getContentBySlide(this);
            this.container = createElement2("pswp__zoom-wrap", "div");
            this.holderElement = null;
            this.currZoomLevel = 1;
            this.width = this.content.width;
            this.height = this.content.height;
            this.heavyAppended = false;
            this.bounds = new PanBounds(this);
            this.prevDisplayedWidth = -1;
            this.prevDisplayedHeight = -1;
            this.pswp.dispatch("slideInit", {
                slide: this
            });
        }
        /**
         * If this slide is active/current/visible
         *
         * @param {boolean} isActive
         */
        setIsActive(isActive) {
            if (isActive && !this.isActive) {
                this.activate();
            } else if (!isActive && this.isActive) {
                this.deactivate();
            }
        }
        /**
         * Appends slide content to DOM
         *
         * @param {HTMLElement} holderElement
         */
        append(holderElement) {
            this.holderElement = holderElement;
            this.container.style.transformOrigin = "0 0";
            if (!this.data) {
                return;
            }
            this.calculateSize();
            this.load();
            this.updateContentSize();
            this.appendHeavy();
            this.holderElement.appendChild(this.container);
            this.zoomAndPanToInitial();
            this.pswp.dispatch("firstZoomPan", {
                slide: this
            });
            this.applyCurrentZoomPan();
            this.pswp.dispatch("afterSetContent", {
                slide: this
            });
            if (this.isActive) {
                this.activate();
            }
        }
        load() {
            this.content.load(false);
            this.pswp.dispatch("slideLoad", {
                slide: this
            });
        }
        /**
         * Append "heavy" DOM elements
         *
         * This may depend on a type of slide,
         * but generally these are large images.
         */
        appendHeavy() {
            const {
                pswp
            } = this;
            const appendHeavyNearby = true;
            if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
                return;
            }
            if (this.pswp.dispatch("appendHeavy", {
                    slide: this
                }).defaultPrevented) {
                return;
            }
            this.heavyAppended = true;
            this.content.append();
            this.pswp.dispatch("appendHeavyContent", {
                slide: this
            });
        }
        /**
         * Triggered when this slide is active (selected).
         *
         * If it's part of opening/closing transition -
         * activate() will trigger after the transition is ended.
         */
        activate() {
            this.isActive = true;
            this.appendHeavy();
            this.content.activate();
            this.pswp.dispatch("slideActivate", {
                slide: this
            });
        }
        /**
         * Triggered when this slide becomes inactive.
         *
         * Slide can become inactive only after it was active.
         */
        deactivate() {
            this.isActive = false;
            this.content.deactivate();
            if (this.currZoomLevel !== this.zoomLevels.initial) {
                this.calculateSize();
            }
            this.currentResolution = 0;
            this.zoomAndPanToInitial();
            this.applyCurrentZoomPan();
            this.updateContentSize();
            this.pswp.dispatch("slideDeactivate", {
                slide: this
            });
        }
        /**
         * The slide should destroy itself, it will never be used again.
         * (unbind all events and destroy internal components)
         */
        destroy() {
            this.content.hasSlide = false;
            this.content.remove();
            this.container.remove();
            this.pswp.dispatch("slideDestroy", {
                slide: this
            });
        }
        resize() {
            if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
                this.calculateSize();
                this.currentResolution = 0;
                this.zoomAndPanToInitial();
                this.applyCurrentZoomPan();
                this.updateContentSize();
            } else {
                this.calculateSize();
                this.bounds.update(this.currZoomLevel);
                this.panTo(this.pan.x, this.pan.y);
            }
        }
        /**
         * Apply size to current slide content,
         * based on the current resolution and scale.
         *
         * @param {boolean} [force] if size should be updated even if dimensions weren't changed
         */
        updateContentSize(force) {
            const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
            if (!scaleMultiplier) {
                return;
            }
            const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
            const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
            if (!this.sizeChanged(width, height) && !force) {
                return;
            }
            this.content.setDisplayedSize(width, height);
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        sizeChanged(width, height) {
            if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
                this.prevDisplayedWidth = width;
                this.prevDisplayedHeight = height;
                return true;
            }
            return false;
        }
        /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
        getPlaceholderElement() {
            var _this$content$placeho;
            return (_this$content$placeho = this.content.placeholder) === null || _this$content$placeho === void 0 ? void 0 : _this$content$placeho.element;
        }
        /**
         * Zoom current slide image to...
         *
         * @param {number} destZoomLevel Destination zoom level.
         * @param {Point} [centerPoint]
         * Transform origin center point, or false if viewport center should be used.
         * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
         * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
         */
        zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
            const {
                pswp
            } = this;
            if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
                return;
            }
            pswp.dispatch("beforeZoomTo", {
                destZoomLevel,
                centerPoint,
                transitionDuration
            });
            pswp.animations.stopAllPan();
            const prevZoomLevel = this.currZoomLevel;
            if (!ignoreBounds) {
                destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
            }
            this.setZoomLevel(destZoomLevel);
            this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
            this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
            roundPoint(this.pan);
            const finishTransition = () => {
                this._setResolution(destZoomLevel);
                this.applyCurrentZoomPan();
            };
            if (!transitionDuration) {
                finishTransition();
            } else {
                pswp.animations.startTransition({
                    isPan: true,
                    name: "zoomTo",
                    target: this.container,
                    transform: this.getCurrentTransform(),
                    onComplete: finishTransition,
                    duration: transitionDuration,
                    easing: pswp.options.easing
                });
            }
        }
        /**
         * @param {Point} [centerPoint]
         */
        toggleZoom(centerPoint) {
            this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
        }
        /**
         * Updates zoom level property and recalculates new pan bounds,
         * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
         *
         * @param {number} currZoomLevel
         */
        setZoomLevel(currZoomLevel) {
            this.currZoomLevel = currZoomLevel;
            this.bounds.update(this.currZoomLevel);
        }
        /**
         * Get pan position after zoom at a given `point`.
         *
         * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
         * pan bounds according to the new zoom level.
         *
         * @param {'x' | 'y'} axis
         * @param {Point} [point]
         * point based on which zoom is performed, usually refers to the current mouse position,
         * if false - viewport center will be used.
         * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
         * @returns {number}
         */
        calculateZoomToPanOffset(axis, point, prevZoomLevel) {
            const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
            if (totalPanDistance === 0) {
                return this.bounds.center[axis];
            }
            if (!point) {
                point = this.pswp.getViewportCenterPoint();
            }
            if (!prevZoomLevel) {
                prevZoomLevel = this.zoomLevels.initial;
            }
            const zoomFactor = this.currZoomLevel / prevZoomLevel;
            return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
        }
        /**
         * Apply pan and keep it within bounds.
         *
         * @param {number} panX
         * @param {number} panY
         */
        panTo(panX, panY) {
            this.pan.x = this.bounds.correctPan("x", panX);
            this.pan.y = this.bounds.correctPan("y", panY);
            this.applyCurrentZoomPan();
        }
        /**
         * If the slide in the current state can be panned by the user
         * @returns {boolean}
         */
        isPannable() {
            return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
        }
        /**
         * If the slide can be zoomed
         * @returns {boolean}
         */
        isZoomable() {
            return Boolean(this.width) && this.content.isZoomable();
        }
        /**
         * Apply transform and scale based on
         * the current pan position (this.pan) and zoom level (this.currZoomLevel)
         */
        applyCurrentZoomPan() {
            this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
            if (this === this.pswp.currSlide) {
                this.pswp.dispatch("zoomPanUpdate", {
                    slide: this
                });
            }
        }
        zoomAndPanToInitial() {
            this.currZoomLevel = this.zoomLevels.initial;
            this.bounds.update(this.currZoomLevel);
            equalizePoints(this.pan, this.bounds.center);
            this.pswp.dispatch("initialZoomPan", {
                slide: this
            });
        }
        /**
         * Set translate and scale based on current resolution
         *
         * @param {number} x
         * @param {number} y
         * @param {number} zoom
         * @private
         */
        _applyZoomTransform(x3, y4, zoom) {
            zoom /= this.currentResolution || this.zoomLevels.initial;
            setTransform(this.container, x3, y4, zoom);
        }
        calculateSize() {
            const {
                pswp
            } = this;
            equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
            this.zoomLevels.update(this.width, this.height, this.panAreaSize);
            pswp.dispatch("calcSlideSize", {
                slide: this
            });
        }
        /** @returns {string} */
        getCurrentTransform() {
            const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
            return toTransformString(this.pan.x, this.pan.y, scale);
        }
        /**
         * Set resolution and re-render the image.
         *
         * For example, if the real image size is 2000x1500,
         * and resolution is 0.5 - it will be rendered as 1000x750.
         *
         * Image with zoom level 2 and resolution 0.5 is
         * the same as image with zoom level 1 and resolution 1.
         *
         * Used to optimize animations and make
         * sure that browser renders image in the highest quality.
         * Also used by responsive images to load the correct one.
         *
         * @param {number} newResolution
         */
        _setResolution(newResolution) {
            if (newResolution === this.currentResolution) {
                return;
            }
            this.currentResolution = newResolution;
            this.updateContentSize();
            this.pswp.dispatch("resolutionChanged");
        }
    };
    var PAN_END_FRICTION = 0.35;
    var VERTICAL_DRAG_FRICTION = 0.6;
    var MIN_RATIO_TO_CLOSE = 0.4;
    var MIN_NEXT_SLIDE_SPEED = 0.5;

    function project(initialVelocity, decelerationRate) {
        return initialVelocity * decelerationRate / (1 - decelerationRate);
    }
    var DragHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
            this.gestures = gestures;
            this.pswp = gestures.pswp;
            this.startPan = {
                x: 0,
                y: 0
            };
        }
        start() {
            if (this.pswp.currSlide) {
                equalizePoints(this.startPan, this.pswp.currSlide.pan);
            }
            this.pswp.animations.stopAll();
        }
        change() {
            const {
                p1,
                prevP1,
                dragAxis
            } = this.gestures;
            const {
                currSlide
            } = this.pswp;
            if (dragAxis === "y" && this.pswp.options.closeOnVerticalDrag && currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
                const panY = currSlide.pan.y + (p1.y - prevP1.y);
                if (!this.pswp.dispatch("verticalDrag", {
                        panY
                    }).defaultPrevented) {
                    this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
                    const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
                    this.pswp.applyBgOpacity(bgOpacity);
                    currSlide.applyCurrentZoomPan();
                }
            } else {
                const mainScrollChanged = this._panOrMoveMainScroll("x");
                if (!mainScrollChanged) {
                    this._panOrMoveMainScroll("y");
                    if (currSlide) {
                        roundPoint(currSlide.pan);
                        currSlide.applyCurrentZoomPan();
                    }
                }
            }
        }
        end() {
            const {
                velocity
            } = this.gestures;
            const {
                mainScroll,
                currSlide
            } = this.pswp;
            let indexDiff = 0;
            this.pswp.animations.stopAll();
            if (mainScroll.isShifted()) {
                const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
                const currentSlideVisibilityRatio = mainScrollShiftDiff / this.pswp.viewportSize.x;
                if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
                    indexDiff = 1;
                    velocity.x = Math.min(velocity.x, 0);
                } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
                    indexDiff = -1;
                    velocity.x = Math.max(velocity.x, 0);
                }
                mainScroll.moveIndexBy(indexDiff, true, velocity.x);
            }
            if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max || this.gestures.isMultitouch) {
                this.gestures.zoomLevels.correctZoomPan(true);
            } else {
                this._finishPanGestureForAxis("x");
                this._finishPanGestureForAxis("y");
            }
        }
        /**
         * @private
         * @param {'x' | 'y'} axis
         */
        _finishPanGestureForAxis(axis) {
            const {
                velocity
            } = this.gestures;
            const {
                currSlide
            } = this.pswp;
            if (!currSlide) {
                return;
            }
            const {
                pan,
                bounds
            } = currSlide;
            const panPos = pan[axis];
            const restoreBgOpacity = this.pswp.bgOpacity < 1 && axis === "y";
            const decelerationRate = 0.995;
            const projectedPosition = panPos + project(velocity[axis], decelerationRate);
            if (restoreBgOpacity) {
                const vDragRatio = this._getVerticalDragRatio(panPos);
                const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
                if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
                    this.pswp.close();
                    return;
                }
            }
            const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
            if (panPos === correctedPanPosition) {
                return;
            }
            const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
            const initialBgOpacity = this.pswp.bgOpacity;
            const totalPanDist = correctedPanPosition - panPos;
            this.pswp.animations.startSpring({
                name: "panGesture" + axis,
                isPan: true,
                start: panPos,
                end: correctedPanPosition,
                velocity: velocity[axis],
                dampingRatio,
                onUpdate: (pos) => {
                    if (restoreBgOpacity && this.pswp.bgOpacity < 1) {
                        const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
                        this.pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
                    }
                    pan[axis] = Math.floor(pos);
                    currSlide.applyCurrentZoomPan();
                }
            });
        }
        /**
         * Update position of the main scroll,
         * or/and update pan position of the current slide.
         *
         * Should return true if it changes (or can change) main scroll.
         *
         * @private
         * @param {'x' | 'y'} axis
         * @returns {boolean}
         */
        _panOrMoveMainScroll(axis) {
            const {
                p1,
                dragAxis,
                prevP1,
                isMultitouch
            } = this.gestures;
            const {
                currSlide,
                mainScroll
            } = this.pswp;
            const delta = p1[axis] - prevP1[axis];
            const newMainScrollX = mainScroll.x + delta;
            if (!delta || !currSlide) {
                return false;
            }
            if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
                mainScroll.moveTo(newMainScrollX, true);
                return true;
            }
            const {
                bounds
            } = currSlide;
            const newPan = currSlide.pan[axis] + delta;
            if (this.pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
                const currSlideMainScrollX = mainScroll.getCurrSlideX();
                const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
                const isLeftToRight = delta > 0;
                const isRightToLeft = !isLeftToRight;
                if (newPan > bounds.min[axis] && isLeftToRight) {
                    const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
                    if (wasAtMinPanPosition) {
                        mainScroll.moveTo(newMainScrollX, true);
                        return true;
                    } else {
                        this._setPanWithFriction(axis, newPan);
                    }
                } else if (newPan < bounds.max[axis] && isRightToLeft) {
                    const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
                    if (wasAtMaxPanPosition) {
                        mainScroll.moveTo(newMainScrollX, true);
                        return true;
                    } else {
                        this._setPanWithFriction(axis, newPan);
                    }
                } else {
                    if (mainScrollShiftDiff !== 0) {
                        if (mainScrollShiftDiff > 0) {
                            mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
                            return true;
                        } else if (mainScrollShiftDiff < 0) {
                            mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
                            return true;
                        }
                    } else {
                        this._setPanWithFriction(axis, newPan);
                    }
                }
            } else {
                if (axis === "y") {
                    if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
                        this._setPanWithFriction(axis, newPan);
                    }
                } else {
                    this._setPanWithFriction(axis, newPan);
                }
            }
            return false;
        }
        // If we move above - the ratio is negative
        // If we move below the ratio is positive
        /**
         * Relation between pan Y position and third of viewport height.
         *
         * When we are at initial position (center bounds) - the ratio is 0,
         * if position is shifted upwards - the ratio is negative,
         * if position is shifted downwards - the ratio is positive.
         *
         * @private
         * @param {number} panY The current pan Y position.
         * @returns {number}
         */
        _getVerticalDragRatio(panY) {
            var _this$pswp$currSlide$, _this$pswp$currSlide;
            return (panY - ((_this$pswp$currSlide$ = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.bounds.center.y) !== null && _this$pswp$currSlide$ !== void 0 ? _this$pswp$currSlide$ : 0)) / (this.pswp.viewportSize.y / 3);
        }
        /**
         * Set pan position of the current slide.
         * Apply friction if the position is beyond the pan bounds,
         * or if custom friction is defined.
         *
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} potentialPan
         * @param {number} [customFriction] (0.1 - 1)
         */
        _setPanWithFriction(axis, potentialPan, customFriction) {
            const {
                currSlide
            } = this.pswp;
            if (!currSlide) {
                return;
            }
            const {
                pan,
                bounds
            } = currSlide;
            const correctedPan = bounds.correctPan(axis, potentialPan);
            if (correctedPan !== potentialPan || customFriction) {
                const delta = Math.round(potentialPan - pan[axis]);
                pan[axis] += delta * (customFriction || PAN_END_FRICTION);
            } else {
                pan[axis] = potentialPan;
            }
        }
    };
    var UPPER_ZOOM_FRICTION = 0.05;
    var LOWER_ZOOM_FRICTION = 0.15;

    function getZoomPointsCenter(p4, p1, p22) {
        p4.x = (p1.x + p22.x) / 2;
        p4.y = (p1.y + p22.y) / 2;
        return p4;
    }
    var ZoomHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
            this.gestures = gestures;
            this._startPan = {
                x: 0,
                y: 0
            };
            this._startZoomPoint = {
                x: 0,
                y: 0
            };
            this._zoomPoint = {
                x: 0,
                y: 0
            };
            this._wasOverFitZoomLevel = false;
            this._startZoomLevel = 1;
        }
        start() {
            const {
                currSlide
            } = this.gestures.pswp;
            if (currSlide) {
                this._startZoomLevel = currSlide.currZoomLevel;
                equalizePoints(this._startPan, currSlide.pan);
            }
            this.gestures.pswp.animations.stopAllPan();
            this._wasOverFitZoomLevel = false;
        }
        change() {
            const {
                p1,
                startP1,
                p2: p22,
                startP2,
                pswp
            } = this.gestures;
            const {
                currSlide
            } = pswp;
            if (!currSlide) {
                return;
            }
            const minZoomLevel = currSlide.zoomLevels.min;
            const maxZoomLevel = currSlide.zoomLevels.max;
            if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
                return;
            }
            getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
            getZoomPointsCenter(this._zoomPoint, p1, p22);
            let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p22) * this._startZoomLevel;
            if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
                this._wasOverFitZoomLevel = true;
            }
            if (currZoomLevel < minZoomLevel) {
                if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
                    const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
                    if (!pswp.dispatch("pinchClose", {
                            bgOpacity
                        }).defaultPrevented) {
                        pswp.applyBgOpacity(bgOpacity);
                    }
                } else {
                    currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
                }
            } else if (currZoomLevel > maxZoomLevel) {
                currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
            }
            currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
            currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
            currSlide.setZoomLevel(currZoomLevel);
            currSlide.applyCurrentZoomPan();
        }
        end() {
            const {
                pswp
            } = this.gestures;
            const {
                currSlide
            } = pswp;
            if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial) && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
                pswp.close();
            } else {
                this.correctZoomPan();
            }
        }
        /**
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} currZoomLevel
         * @returns {number}
         */
        _calculatePanForZoomLevel(axis, currZoomLevel) {
            const zoomFactor = currZoomLevel / this._startZoomLevel;
            return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
        }
        /**
         * Correct currZoomLevel and pan if they are
         * beyond minimum or maximum values.
         * With animation.
         *
         * @param {boolean} [ignoreGesture]
         * Wether gesture coordinates should be ignored when calculating destination pan position.
         */
        correctZoomPan(ignoreGesture) {
            const {
                pswp
            } = this.gestures;
            const {
                currSlide
            } = pswp;
            if (!(currSlide !== null && currSlide !== void 0 && currSlide.isZoomable())) {
                return;
            }
            if (this._zoomPoint.x === 0) {
                ignoreGesture = true;
            }
            const prevZoomLevel = currSlide.currZoomLevel;
            let destinationZoomLevel;
            let currZoomLevelNeedsChange = true;
            if (prevZoomLevel < currSlide.zoomLevels.initial) {
                destinationZoomLevel = currSlide.zoomLevels.initial;
            } else if (prevZoomLevel > currSlide.zoomLevels.max) {
                destinationZoomLevel = currSlide.zoomLevels.max;
            } else {
                currZoomLevelNeedsChange = false;
                destinationZoomLevel = prevZoomLevel;
            }
            const initialBgOpacity = pswp.bgOpacity;
            const restoreBgOpacity = pswp.bgOpacity < 1;
            const initialPan = equalizePoints({
                x: 0,
                y: 0
            }, currSlide.pan);
            let destinationPan = equalizePoints({
                x: 0,
                y: 0
            }, initialPan);
            if (ignoreGesture) {
                this._zoomPoint.x = 0;
                this._zoomPoint.y = 0;
                this._startZoomPoint.x = 0;
                this._startZoomPoint.y = 0;
                this._startZoomLevel = prevZoomLevel;
                equalizePoints(this._startPan, initialPan);
            }
            if (currZoomLevelNeedsChange) {
                destinationPan = {
                    x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
                    y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
                };
            }
            currSlide.setZoomLevel(destinationZoomLevel);
            destinationPan = {
                x: currSlide.bounds.correctPan("x", destinationPan.x),
                y: currSlide.bounds.correctPan("y", destinationPan.y)
            };
            currSlide.setZoomLevel(prevZoomLevel);
            const panNeedsChange = !pointsEqual(destinationPan, initialPan);
            if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
                currSlide._setResolution(destinationZoomLevel);
                currSlide.applyCurrentZoomPan();
                return;
            }
            pswp.animations.stopAllPan();
            pswp.animations.startSpring({
                isPan: true,
                start: 0,
                end: 1e3,
                velocity: 0,
                dampingRatio: 1,
                naturalFrequency: 40,
                onUpdate: (now2) => {
                    now2 /= 1e3;
                    if (panNeedsChange || currZoomLevelNeedsChange) {
                        if (panNeedsChange) {
                            currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now2;
                            currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now2;
                        }
                        if (currZoomLevelNeedsChange) {
                            const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now2;
                            currSlide.setZoomLevel(newZoomLevel);
                        }
                        currSlide.applyCurrentZoomPan();
                    }
                    if (restoreBgOpacity && pswp.bgOpacity < 1) {
                        pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now2, 0, 1));
                    }
                },
                onComplete: () => {
                    currSlide._setResolution(destinationZoomLevel);
                    currSlide.applyCurrentZoomPan();
                }
            });
        }
    };

    function didTapOnMainContent(event2) {
        return !! /** @type {HTMLElement} */
            event2.target.closest(".pswp__container");
    }
    var TapHandler = class {
        /**
         * @param {Gestures} gestures
         */
        constructor(gestures) {
            this.gestures = gestures;
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        click(point, originalEvent) {
            const targetClassList = (
                /** @type {HTMLElement} */
                originalEvent.target.classList
            );
            const isImageClick = targetClassList.contains("pswp__img");
            const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
            if (isImageClick) {
                this._doClickOrTapAction("imageClick", point, originalEvent);
            } else if (isBackgroundClick) {
                this._doClickOrTapAction("bgClick", point, originalEvent);
            }
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        tap(point, originalEvent) {
            if (didTapOnMainContent(originalEvent)) {
                this._doClickOrTapAction("tap", point, originalEvent);
            }
        }
        /**
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        doubleTap(point, originalEvent) {
            if (didTapOnMainContent(originalEvent)) {
                this._doClickOrTapAction("doubleTap", point, originalEvent);
            }
        }
        /**
         * @private
         * @param {Actions} actionName
         * @param {Point} point
         * @param {PointerEvent} originalEvent
         */
        _doClickOrTapAction(actionName, point, originalEvent) {
            var _this$gestures$pswp$e;
            const {
                pswp
            } = this.gestures;
            const {
                currSlide
            } = pswp;
            const actionFullName = (
                /** @type {AddPostfix<Actions, 'Action'>} */
                actionName + "Action"
            );
            const optionValue = pswp.options[actionFullName];
            if (pswp.dispatch(actionFullName, {
                    point,
                    originalEvent
                }).defaultPrevented) {
                return;
            }
            if (typeof optionValue === "function") {
                optionValue.call(pswp, point, originalEvent);
                return;
            }
            switch (optionValue) {
                case "close":
                case "next":
                    pswp[optionValue]();
                    break;
                case "zoom":
                    currSlide === null || currSlide === void 0 || currSlide.toggleZoom(point);
                    break;
                case "zoom-or-close":
                    if (currSlide !== null && currSlide !== void 0 && currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
                        currSlide.toggleZoom(point);
                    } else if (pswp.options.clickToCloseNonZoomable) {
                        pswp.close();
                    }
                    break;
                case "toggle-controls":
                    (_this$gestures$pswp$e = this.gestures.pswp.element) === null || _this$gestures$pswp$e === void 0 || _this$gestures$pswp$e.classList.toggle("pswp--ui-visible");
                    break;
            }
        }
    };
    var AXIS_SWIPE_HYSTERISIS = 10;
    var DOUBLE_TAP_DELAY = 300;
    var MIN_TAP_DISTANCE = 25;
    var Gestures = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this.dragAxis = null;
            this.p1 = {
                x: 0,
                y: 0
            };
            this.p2 = {
                x: 0,
                y: 0
            };
            this.prevP1 = {
                x: 0,
                y: 0
            };
            this.prevP2 = {
                x: 0,
                y: 0
            };
            this.startP1 = {
                x: 0,
                y: 0
            };
            this.startP2 = {
                x: 0,
                y: 0
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            this._lastStartP1 = {
                x: 0,
                y: 0
            };
            this._intervalP1 = {
                x: 0,
                y: 0
            };
            this._numActivePoints = 0;
            this._ongoingPointers = [];
            this._touchEventEnabled = "ontouchstart" in window;
            this._pointerEventEnabled = !!window.PointerEvent;
            this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
            this._numActivePoints = 0;
            this._intervalTime = 0;
            this._velocityCalculated = false;
            this.isMultitouch = false;
            this.isDragging = false;
            this.isZooming = false;
            this.raf = null;
            this._tapTimer = null;
            if (!this.supportsTouch) {
                pswp.options.allowPanToNext = false;
            }
            this.drag = new DragHandler(this);
            this.zoomLevels = new ZoomHandler(this);
            this.tapHandler = new TapHandler(this);
            pswp.on("bindEvents", () => {
                pswp.events.add(
                    pswp.scrollWrap,
                    "click",
                    /** @type EventListener */
                    this._onClick.bind(this)
                );
                if (this._pointerEventEnabled) {
                    this._bindEvents("pointer", "down", "up", "cancel");
                } else if (this._touchEventEnabled) {
                    this._bindEvents("touch", "start", "end", "cancel");
                    if (pswp.scrollWrap) {
                        pswp.scrollWrap.ontouchmove = () => {};
                        pswp.scrollWrap.ontouchend = () => {};
                    }
                } else {
                    this._bindEvents("mouse", "down", "up");
                }
            });
        }
        /**
         * @private
         * @param {'mouse' | 'touch' | 'pointer'} pref
         * @param {'down' | 'start'} down
         * @param {'up' | 'end'} up
         * @param {'cancel'} [cancel]
         */
        _bindEvents(pref, down, up, cancel) {
            const {
                pswp
            } = this;
            const {
                events: events2
            } = pswp;
            const cancelEvent = cancel ? pref + cancel : "";
            events2.add(
                pswp.scrollWrap,
                pref + down,
                /** @type EventListener */
                this.onPointerDown.bind(this)
            );
            events2.add(
                window,
                pref + "move",
                /** @type EventListener */
                this.onPointerMove.bind(this)
            );
            events2.add(
                window,
                pref + up,
                /** @type EventListener */
                this.onPointerUp.bind(this)
            );
            if (cancelEvent) {
                events2.add(
                    pswp.scrollWrap,
                    cancelEvent,
                    /** @type EventListener */
                    this.onPointerUp.bind(this)
                );
            }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerDown(e5) {
            const isMousePointer = e5.type === "mousedown" || e5.pointerType === "mouse";
            if (isMousePointer && e5.button > 0) {
                return;
            }
            const {
                pswp
            } = this;
            if (!pswp.opener.isOpen) {
                e5.preventDefault();
                return;
            }
            if (pswp.dispatch("pointerDown", {
                    originalEvent: e5
                }).defaultPrevented) {
                return;
            }
            if (isMousePointer) {
                pswp.mouseDetected();
                this._preventPointerEventBehaviour(e5, "down");
            }
            pswp.animations.stopAll();
            this._updatePoints(e5, "down");
            if (this._numActivePoints === 1) {
                this.dragAxis = null;
                equalizePoints(this.startP1, this.p1);
            }
            if (this._numActivePoints > 1) {
                this._clearTapTimer();
                this.isMultitouch = true;
            } else {
                this.isMultitouch = false;
            }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerMove(e5) {
            this._preventPointerEventBehaviour(e5, "move");
            if (!this._numActivePoints) {
                return;
            }
            this._updatePoints(e5, "move");
            if (this.pswp.dispatch("pointerMove", {
                    originalEvent: e5
                }).defaultPrevented) {
                return;
            }
            if (this._numActivePoints === 1 && !this.isDragging) {
                if (!this.dragAxis) {
                    this._calculateDragDirection();
                }
                if (this.dragAxis && !this.isDragging) {
                    if (this.isZooming) {
                        this.isZooming = false;
                        this.zoomLevels.end();
                    }
                    this.isDragging = true;
                    this._clearTapTimer();
                    this._updateStartPoints();
                    this._intervalTime = Date.now();
                    this._velocityCalculated = false;
                    equalizePoints(this._intervalP1, this.p1);
                    this.velocity.x = 0;
                    this.velocity.y = 0;
                    this.drag.start();
                    this._rafStopLoop();
                    this._rafRenderLoop();
                }
            } else if (this._numActivePoints > 1 && !this.isZooming) {
                this._finishDrag();
                this.isZooming = true;
                this._updateStartPoints();
                this.zoomLevels.start();
                this._rafStopLoop();
                this._rafRenderLoop();
            }
        }
        /**
         * @private
         */
        _finishDrag() {
            if (this.isDragging) {
                this.isDragging = false;
                if (!this._velocityCalculated) {
                    this._updateVelocity(true);
                }
                this.drag.end();
                this.dragAxis = null;
            }
        }
        /**
         * @param {PointerEvent} e
         */
        onPointerUp(e5) {
            if (!this._numActivePoints) {
                return;
            }
            this._updatePoints(e5, "up");
            if (this.pswp.dispatch("pointerUp", {
                    originalEvent: e5
                }).defaultPrevented) {
                return;
            }
            if (this._numActivePoints === 0) {
                this._rafStopLoop();
                if (this.isDragging) {
                    this._finishDrag();
                } else if (!this.isZooming && !this.isMultitouch) {
                    this._finishTap(e5);
                }
            }
            if (this._numActivePoints < 2 && this.isZooming) {
                this.isZooming = false;
                this.zoomLevels.end();
                if (this._numActivePoints === 1) {
                    this.dragAxis = null;
                    this._updateStartPoints();
                }
            }
        }
        /**
         * @private
         */
        _rafRenderLoop() {
            if (this.isDragging || this.isZooming) {
                this._updateVelocity();
                if (this.isDragging) {
                    if (!pointsEqual(this.p1, this.prevP1)) {
                        this.drag.change();
                    }
                } else {
                    if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
                        this.zoomLevels.change();
                    }
                }
                this._updatePrevPoints();
                this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
            }
        }
        /**
         * Update velocity at 50ms interval
         *
         * @private
         * @param {boolean} [force]
         */
        _updateVelocity(force) {
            const time = Date.now();
            const duration = time - this._intervalTime;
            if (duration < 50 && !force) {
                return;
            }
            this.velocity.x = this._getVelocity("x", duration);
            this.velocity.y = this._getVelocity("y", duration);
            this._intervalTime = time;
            equalizePoints(this._intervalP1, this.p1);
            this._velocityCalculated = true;
        }
        /**
         * @private
         * @param {PointerEvent} e
         */
        _finishTap(e5) {
            const {
                mainScroll
            } = this.pswp;
            if (mainScroll.isShifted()) {
                mainScroll.moveIndexBy(0, true);
                return;
            }
            if (e5.type.indexOf("cancel") > 0) {
                return;
            }
            if (e5.type === "mouseup" || e5.pointerType === "mouse") {
                this.tapHandler.click(this.startP1, e5);
                return;
            }
            const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
            if (this._tapTimer) {
                this._clearTapTimer();
                if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
                    this.tapHandler.doubleTap(this.startP1, e5);
                }
            } else {
                equalizePoints(this._lastStartP1, this.startP1);
                this._tapTimer = setTimeout(() => {
                    this.tapHandler.tap(this.startP1, e5);
                    this._clearTapTimer();
                }, tapDelay);
            }
        }
        /**
         * @private
         */
        _clearTapTimer() {
            if (this._tapTimer) {
                clearTimeout(this._tapTimer);
                this._tapTimer = null;
            }
        }
        /**
         * Get velocity for axis
         *
         * @private
         * @param {'x' | 'y'} axis
         * @param {number} duration
         * @returns {number}
         */
        _getVelocity(axis, duration) {
            const displacement = this.p1[axis] - this._intervalP1[axis];
            if (Math.abs(displacement) > 1 && duration > 5) {
                return displacement / duration;
            }
            return 0;
        }
        /**
         * @private
         */
        _rafStopLoop() {
            if (this.raf) {
                cancelAnimationFrame(this.raf);
                this.raf = null;
            }
        }
        /**
         * @private
         * @param {PointerEvent} e
         * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
         */
        _preventPointerEventBehaviour(e5, pointerType) {
            const preventPointerEvent = this.pswp.applyFilters("preventPointerEvent", true, e5, pointerType);
            if (preventPointerEvent) {
                e5.preventDefault();
            }
        }
        /**
         * Parses and normalizes points from the touch, mouse or pointer event.
         * Updates p1 and p2.
         *
         * @private
         * @param {PointerEvent | TouchEvent} e
         * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
         */
        _updatePoints(e5, pointerType) {
            if (this._pointerEventEnabled) {
                const pointerEvent = (
                    /** @type {PointerEvent} */
                    e5
                );
                const pointerIndex = this._ongoingPointers.findIndex((ongoingPointer) => {
                    return ongoingPointer.id === pointerEvent.pointerId;
                });
                if (pointerType === "up" && pointerIndex > -1) {
                    this._ongoingPointers.splice(pointerIndex, 1);
                } else if (pointerType === "down" && pointerIndex === -1) {
                    this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {
                        x: 0,
                        y: 0
                    }));
                } else if (pointerIndex > -1) {
                    this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
                }
                this._numActivePoints = this._ongoingPointers.length;
                if (this._numActivePoints > 0) {
                    equalizePoints(this.p1, this._ongoingPointers[0]);
                }
                if (this._numActivePoints > 1) {
                    equalizePoints(this.p2, this._ongoingPointers[1]);
                }
            } else {
                const touchEvent = (
                    /** @type {TouchEvent} */
                    e5
                );
                this._numActivePoints = 0;
                if (touchEvent.type.indexOf("touch") > -1) {
                    if (touchEvent.touches && touchEvent.touches.length > 0) {
                        this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
                        this._numActivePoints++;
                        if (touchEvent.touches.length > 1) {
                            this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
                            this._numActivePoints++;
                        }
                    }
                } else {
                    this._convertEventPosToPoint(
                        /** @type {PointerEvent} */
                        e5,
                        this.p1
                    );
                    if (pointerType === "up") {
                        this._numActivePoints = 0;
                    } else {
                        this._numActivePoints++;
                    }
                }
            }
        }
        /** update points that were used during previous rAF tick
         * @private
         */
        _updatePrevPoints() {
            equalizePoints(this.prevP1, this.p1);
            equalizePoints(this.prevP2, this.p2);
        }
        /** update points at the start of gesture
         * @private
         */
        _updateStartPoints() {
            equalizePoints(this.startP1, this.p1);
            equalizePoints(this.startP2, this.p2);
            this._updatePrevPoints();
        }
        /** @private */
        _calculateDragDirection() {
            if (this.pswp.mainScroll.isShifted()) {
                this.dragAxis = "x";
            } else {
                const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
                if (diff !== 0) {
                    const axisToCheck = diff > 0 ? "x" : "y";
                    if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
                        this.dragAxis = axisToCheck;
                    }
                }
            }
        }
        /**
         * Converts touch, pointer or mouse event
         * to PhotoSwipe point.
         *
         * @private
         * @param {Touch | PointerEvent} e
         * @param {Point} p
         * @returns {Point}
         */
        _convertEventPosToPoint(e5, p4) {
            p4.x = e5.pageX - this.pswp.offset.x;
            p4.y = e5.pageY - this.pswp.offset.y;
            if ("pointerId" in e5) {
                p4.id = e5.pointerId;
            } else if (e5.identifier !== void 0) {
                p4.id = e5.identifier;
            }
            return p4;
        }
        /**
         * @private
         * @param {PointerEvent} e
         */
        _onClick(e5) {
            if (this.pswp.mainScroll.isShifted()) {
                e5.preventDefault();
                e5.stopPropagation();
            }
        }
    };
    var MAIN_SCROLL_END_FRICTION = 0.35;
    var MainScroll = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this.x = 0;
            this.slideWidth = 0;
            this._currPositionIndex = 0;
            this._prevPositionIndex = 0;
            this._containerShiftIndex = -1;
            this.itemHolders = [];
        }
        /**
         * Position the scroller and slide containers
         * according to viewport size.
         *
         * @param {boolean} [resizeSlides] Whether slides content should resized
         */
        resize(resizeSlides) {
            const {
                pswp
            } = this;
            const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
            const slideWidthChanged = newSlideWidth !== this.slideWidth;
            if (slideWidthChanged) {
                this.slideWidth = newSlideWidth;
                this.moveTo(this.getCurrSlideX());
            }
            this.itemHolders.forEach((itemHolder, index) => {
                if (slideWidthChanged) {
                    setTransform(itemHolder.el, (index + this._containerShiftIndex) * this.slideWidth);
                }
                if (resizeSlides && itemHolder.slide) {
                    itemHolder.slide.resize();
                }
            });
        }
        /**
         * Reset X position of the main scroller to zero
         */
        resetPosition() {
            this._currPositionIndex = 0;
            this._prevPositionIndex = 0;
            this.slideWidth = 0;
            this._containerShiftIndex = -1;
        }
        /**
         * Create and append array of three items
         * that hold data about slides in DOM
         */
        appendHolders() {
            this.itemHolders = [];
            for (let i6 = 0; i6 < 3; i6++) {
                const el = createElement2("pswp__item", "div", this.pswp.container);
                el.setAttribute("role", "group");
                el.setAttribute("aria-roledescription", "slide");
                el.setAttribute("aria-hidden", "true");
                el.style.display = i6 === 1 ? "block" : "none";
                this.itemHolders.push({
                    el
                    //index: -1
                });
            }
        }
        /**
         * Whether the main scroll can be horizontally swiped to the next or previous slide.
         * @returns {boolean}
         */
        canBeSwiped() {
            return this.pswp.getNumItems() > 1;
        }
        /**
         * Move main scroll by X amount of slides.
         * For example:
         *   `-1` will move to the previous slide,
         *    `0` will reset the scroll position of the current slide,
         *    `3` will move three slides forward
         *
         * If loop option is enabled - index will be automatically looped too,
         * (for example `-1` will move to the last slide of the gallery).
         *
         * @param {number} diff
         * @param {boolean} [animate]
         * @param {number} [velocityX]
         * @returns {boolean} whether index was changed or not
         */
        moveIndexBy(diff, animate, velocityX) {
            const {
                pswp
            } = this;
            let newIndex = pswp.potentialIndex + diff;
            const numSlides = pswp.getNumItems();
            if (pswp.canLoop()) {
                newIndex = pswp.getLoopedIndex(newIndex);
                const distance = (diff + numSlides) % numSlides;
                if (distance <= numSlides / 2) {
                    diff = distance;
                } else {
                    diff = distance - numSlides;
                }
            } else {
                if (newIndex < 0) {
                    newIndex = 0;
                } else if (newIndex >= numSlides) {
                    newIndex = numSlides - 1;
                }
                diff = newIndex - pswp.potentialIndex;
            }
            pswp.potentialIndex = newIndex;
            this._currPositionIndex -= diff;
            pswp.animations.stopMainScroll();
            const destinationX = this.getCurrSlideX();
            if (!animate) {
                this.moveTo(destinationX);
                this.updateCurrItem();
            } else {
                pswp.animations.startSpring({
                    isMainScroll: true,
                    start: this.x,
                    end: destinationX,
                    velocity: velocityX || 0,
                    naturalFrequency: 30,
                    dampingRatio: 1,
                    //0.7,
                    onUpdate: (x3) => {
                        this.moveTo(x3);
                    },
                    onComplete: () => {
                        this.updateCurrItem();
                        pswp.appendHeavy();
                    }
                });
                let currDiff = pswp.potentialIndex - pswp.currIndex;
                if (pswp.canLoop()) {
                    const currDistance = (currDiff + numSlides) % numSlides;
                    if (currDistance <= numSlides / 2) {
                        currDiff = currDistance;
                    } else {
                        currDiff = currDistance - numSlides;
                    }
                }
                if (Math.abs(currDiff) > 1) {
                    this.updateCurrItem();
                }
            }
            return Boolean(diff);
        }
        /**
         * X position of the main scroll for the current slide
         * (ignores position during dragging)
         * @returns {number}
         */
        getCurrSlideX() {
            return this.slideWidth * this._currPositionIndex;
        }
        /**
         * Whether scroll position is shifted.
         * For example, it will return true if the scroll is being dragged or animated.
         * @returns {boolean}
         */
        isShifted() {
            return this.x !== this.getCurrSlideX();
        }
        /**
         * Update slides X positions and set their content
         */
        updateCurrItem() {
            var _this$itemHolders$;
            const {
                pswp
            } = this;
            const positionDifference = this._prevPositionIndex - this._currPositionIndex;
            if (!positionDifference) {
                return;
            }
            this._prevPositionIndex = this._currPositionIndex;
            pswp.currIndex = pswp.potentialIndex;
            let diffAbs = Math.abs(positionDifference);
            let tempHolder;
            if (diffAbs >= 3) {
                this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
                diffAbs = 3;
            }
            for (let i6 = 0; i6 < diffAbs; i6++) {
                if (positionDifference > 0) {
                    tempHolder = this.itemHolders.shift();
                    if (tempHolder) {
                        this.itemHolders[2] = tempHolder;
                        this._containerShiftIndex++;
                        setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
                        pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i6 + 2);
                    }
                } else {
                    tempHolder = this.itemHolders.pop();
                    if (tempHolder) {
                        this.itemHolders.unshift(tempHolder);
                        this._containerShiftIndex--;
                        setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
                        pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i6 - 2);
                    }
                }
            }
            if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
                this.resetPosition();
                this.resize();
            }
            pswp.animations.stopAllPan();
            this.itemHolders.forEach((itemHolder, i6) => {
                if (itemHolder.slide) {
                    itemHolder.slide.setIsActive(i6 === 1);
                }
            });
            pswp.currSlide = (_this$itemHolders$ = this.itemHolders[1]) === null || _this$itemHolders$ === void 0 ? void 0 : _this$itemHolders$.slide;
            pswp.contentLoader.updateLazy(positionDifference);
            if (pswp.currSlide) {
                pswp.currSlide.applyCurrentZoomPan();
            }
            pswp.dispatch("change");
        }
        /**
         * Move the X position of the main scroll container
         *
         * @param {number} x
         * @param {boolean} [dragging]
         */
        moveTo(x3, dragging) {
            if (!this.pswp.canLoop() && dragging) {
                let newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x3) / this.slideWidth;
                newSlideIndexOffset += this.pswp.currIndex;
                const delta = Math.round(x3 - this.x);
                if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
                    x3 = this.x + delta * MAIN_SCROLL_END_FRICTION;
                }
            }
            this.x = x3;
            if (this.pswp.container) {
                setTransform(this.pswp.container, x3);
            }
            this.pswp.dispatch("moveMainScroll", {
                x: x3,
                dragging: dragging !== null && dragging !== void 0 ? dragging : false
            });
        }
    };
    var KeyboardKeyCodesMap = {
        Escape: 27,
        z: 90,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        Tab: 9
    };
    var getKeyboardEventKey = (key, isKeySupported) => {
        return isKeySupported ? key : KeyboardKeyCodesMap[key];
    };
    var Keyboard2 = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this._wasFocused = false;
            pswp.on("bindEvents", () => {
                if (pswp.options.trapFocus) {
                    if (!pswp.options.initialPointerPos) {
                        this._focusRoot();
                    }
                    pswp.events.add(
                        document,
                        "focusin",
                        /** @type EventListener */
                        this._onFocusIn.bind(this)
                    );
                }
                pswp.events.add(
                    document,
                    "keydown",
                    /** @type EventListener */
                    this._onKeyDown.bind(this)
                );
            });
            const lastActiveElement = (
                /** @type {HTMLElement} */
                document.activeElement
            );
            pswp.on("destroy", () => {
                if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) {
                    lastActiveElement.focus();
                }
            });
        }
        /** @private */
        _focusRoot() {
            if (!this._wasFocused && this.pswp.element) {
                this.pswp.element.focus();
                this._wasFocused = true;
            }
        }
        /**
         * @private
         * @param {KeyboardEvent} e
         */
        _onKeyDown(e5) {
            const {
                pswp
            } = this;
            if (pswp.dispatch("keydown", {
                    originalEvent: e5
                }).defaultPrevented) {
                return;
            }
            if (specialKeyUsed(e5)) {
                return;
            }
            let keydownAction;
            let axis;
            let isForward = false;
            const isKeySupported = "key" in e5;
            switch (isKeySupported ? e5.key : e5.keyCode) {
                case getKeyboardEventKey("Escape", isKeySupported):
                    if (pswp.options.escKey) {
                        keydownAction = "close";
                    }
                    break;
                case getKeyboardEventKey("z", isKeySupported):
                    keydownAction = "toggleZoom";
                    break;
                case getKeyboardEventKey("ArrowLeft", isKeySupported):
                    axis = "x";
                    break;
                case getKeyboardEventKey("ArrowUp", isKeySupported):
                    axis = "y";
                    break;
                case getKeyboardEventKey("ArrowRight", isKeySupported):
                    axis = "x";
                    isForward = true;
                    break;
                case getKeyboardEventKey("ArrowDown", isKeySupported):
                    isForward = true;
                    axis = "y";
                    break;
                case getKeyboardEventKey("Tab", isKeySupported):
                    this._focusRoot();
                    break;
            }
            if (axis) {
                e5.preventDefault();
                const {
                    currSlide
                } = pswp;
                if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) {
                    keydownAction = isForward ? "next" : "prev";
                } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
                    currSlide.pan[axis] += isForward ? -80 : 80;
                    currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
                }
            }
            if (keydownAction) {
                e5.preventDefault();
                pswp[keydownAction]();
            }
        }
        /**
         * Trap focus inside photoswipe
         *
         * @private
         * @param {FocusEvent} e
         */
        _onFocusIn(e5) {
            const {
                template
            } = this.pswp;
            if (template && document !== e5.target && template !== e5.target && !template.contains(
                    /** @type {Node} */
                    e5.target
                )) {
                template.focus();
            }
        }
    };
    var DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
    var CSSAnimation = class {
        /**
         * onComplete can be unpredictable, be careful about current state
         *
         * @param {CssAnimationProps} props
         */
        constructor(props) {
            var _props$prop;
            this.props = props;
            const {
                target,
                onComplete,
                transform,
                onFinish = () => {},
                duration = 333,
                easing = DEFAULT_EASING
            } = props;
            this.onFinish = onFinish;
            const prop = transform ? "transform" : "opacity";
            const propValue = (_props$prop = props[prop]) !== null && _props$prop !== void 0 ? _props$prop : "";
            this._target = target;
            this._onComplete = onComplete;
            this._finished = false;
            this._onTransitionEnd = this._onTransitionEnd.bind(this);
            this._helperTimeout = setTimeout(() => {
                setTransitionStyle(target, prop, duration, easing);
                this._helperTimeout = setTimeout(() => {
                    target.addEventListener("transitionend", this._onTransitionEnd, false);
                    target.addEventListener("transitioncancel", this._onTransitionEnd, false);
                    this._helperTimeout = setTimeout(() => {
                        this._finalizeAnimation();
                    }, duration + 500);
                    target.style[prop] = propValue;
                }, 30);
            }, 0);
        }
        /**
         * @private
         * @param {TransitionEvent} e
         */
        _onTransitionEnd(e5) {
            if (e5.target === this._target) {
                this._finalizeAnimation();
            }
        }
        /**
         * @private
         */
        _finalizeAnimation() {
            if (!this._finished) {
                this._finished = true;
                this.onFinish();
                if (this._onComplete) {
                    this._onComplete();
                }
            }
        }
        // Destroy is called automatically onFinish
        destroy() {
            if (this._helperTimeout) {
                clearTimeout(this._helperTimeout);
            }
            removeTransitionStyle(this._target);
            this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
            this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
            if (!this._finished) {
                this._finalizeAnimation();
            }
        }
    };
    var DEFAULT_NATURAL_FREQUENCY = 12;
    var DEFAULT_DAMPING_RATIO = 0.75;
    var SpringEaser = class {
        /**
         * @param {number} initialVelocity Initial velocity, px per ms.
         *
         * @param {number} [dampingRatio]
         * Determines how bouncy animation will be.
         * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
         * "overshoot" refers to part of animation that
         * goes beyond the final value.
         *
         * @param {number} [naturalFrequency]
         * Determines how fast animation will slow down.
         * The higher value - the stiffer the transition will be,
         * and the faster it will slow down.
         * Recommended value from 10 to 50
         */
        constructor(initialVelocity, dampingRatio, naturalFrequency) {
            this.velocity = initialVelocity * 1e3;
            this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
            this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
            this._dampedFrequency = this._naturalFrequency;
            if (this._dampingRatio < 1) {
                this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
            }
        }
        /**
         * @param {number} deltaPosition Difference between current and end position of the animation
         * @param {number} deltaTime Frame duration in milliseconds
         *
         * @returns {number} Displacement, relative to the end position.
         */
        easeFrame(deltaPosition, deltaTime) {
            let displacement = 0;
            let coeff;
            deltaTime /= 1e3;
            const naturalDumpingPow = __pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
            if (this._dampingRatio === 1) {
                coeff = this.velocity + this._naturalFrequency * deltaPosition;
                displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
                this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
            } else if (this._dampingRatio < 1) {
                coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
                const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
                const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
                displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
                this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
            }
            return displacement;
        }
    };
    var SpringAnimation = class {
        /**
         * @param {SpringAnimationProps} props
         */
        constructor(props) {
            this.props = props;
            this._raf = 0;
            const {
                start,
                end,
                velocity,
                onUpdate,
                onComplete,
                onFinish = () => {},
                dampingRatio,
                naturalFrequency
            } = props;
            this.onFinish = onFinish;
            const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
            let prevTime = Date.now();
            let deltaPosition = start - end;
            const animationLoop = () => {
                if (this._raf) {
                    deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
                    if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
                        onUpdate(end);
                        if (onComplete) {
                            onComplete();
                        }
                        this.onFinish();
                    } else {
                        prevTime = Date.now();
                        onUpdate(deltaPosition + end);
                        this._raf = requestAnimationFrame(animationLoop);
                    }
                }
            };
            this._raf = requestAnimationFrame(animationLoop);
        }
        // Destroy is called automatically onFinish
        destroy() {
            if (this._raf >= 0) {
                cancelAnimationFrame(this._raf);
            }
            this._raf = 0;
        }
    };
    var Animations = class {
        constructor() {
            this.activeAnimations = [];
        }
        /**
         * @param {SpringAnimationProps} props
         */
        startSpring(props) {
            this._start(props, true);
        }
        /**
         * @param {CssAnimationProps} props
         */
        startTransition(props) {
            this._start(props);
        }
        /**
         * @private
         * @param {AnimationProps} props
         * @param {boolean} [isSpring]
         * @returns {Animation}
         */
        _start(props, isSpring) {
            const animation = isSpring ? new SpringAnimation(
                /** @type SpringAnimationProps */
                props
            ) : new CSSAnimation(
                /** @type CssAnimationProps */
                props
            );
            this.activeAnimations.push(animation);
            animation.onFinish = () => this.stop(animation);
            return animation;
        }
        /**
         * @param {Animation} animation
         */
        stop(animation) {
            animation.destroy();
            const index = this.activeAnimations.indexOf(animation);
            if (index > -1) {
                this.activeAnimations.splice(index, 1);
            }
        }
        stopAll() {
            this.activeAnimations.forEach((animation) => {
                animation.destroy();
            });
            this.activeAnimations = [];
        }
        /**
         * Stop all pan or zoom transitions
         */
        stopAllPan() {
            this.activeAnimations = this.activeAnimations.filter((animation) => {
                if (animation.props.isPan) {
                    animation.destroy();
                    return false;
                }
                return true;
            });
        }
        stopMainScroll() {
            this.activeAnimations = this.activeAnimations.filter((animation) => {
                if (animation.props.isMainScroll) {
                    animation.destroy();
                    return false;
                }
                return true;
            });
        }
        /**
         * Returns true if main scroll transition is running
         */
        // isMainScrollRunning() {
        //   return this.activeAnimations.some((animation) => {
        //     return animation.props.isMainScroll;
        //   });
        // }
        /**
         * Returns true if any pan or zoom transition is running
         */
        isPanRunning() {
            return this.activeAnimations.some((animation) => {
                return animation.props.isPan;
            });
        }
    };
    var ScrollWheel = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            pswp.events.add(
                pswp.element,
                "wheel",
                /** @type EventListener */
                this._onWheel.bind(this)
            );
        }
        /**
         * @private
         * @param {WheelEvent} e
         */
        _onWheel(e5) {
            e5.preventDefault();
            const {
                currSlide
            } = this.pswp;
            let {
                deltaX,
                deltaY
            } = e5;
            if (!currSlide) {
                return;
            }
            if (this.pswp.dispatch("wheel", {
                    originalEvent: e5
                }).defaultPrevented) {
                return;
            }
            if (e5.ctrlKey || this.pswp.options.wheelToZoom) {
                if (currSlide.isZoomable()) {
                    let zoomFactor = -deltaY;
                    if (e5.deltaMode === 1) {
                        zoomFactor *= 0.05;
                    } else {
                        zoomFactor *= e5.deltaMode ? 1 : 2e-3;
                    }
                    zoomFactor = __pow(2, zoomFactor);
                    const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
                    currSlide.zoomTo(destZoomLevel, {
                        x: e5.clientX,
                        y: e5.clientY
                    });
                }
            } else {
                if (currSlide.isPannable()) {
                    if (e5.deltaMode === 1) {
                        deltaX *= 18;
                        deltaY *= 18;
                    }
                    currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
                }
            }
        }
    };

    function addElementHTML(htmlData) {
        if (typeof htmlData === "string") {
            return htmlData;
        }
        if (!htmlData || !htmlData.isCustomSVG) {
            return "";
        }
        const svgData = htmlData;
        let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
        out = out.split("%d").join(
            /** @type {string} */
            svgData.size || 32
        );
        if (svgData.outlineID) {
            out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
        }
        out += svgData.inner;
        out += "</svg>";
        return out;
    }
    var UIElement = class {
        /**
         * @param {PhotoSwipe} pswp
         * @param {UIElementData} data
         */
        constructor(pswp, data) {
            var _container;
            const name = data.name || data.className;
            let elementHTML = data.html;
            if (pswp.options[name] === false) {
                return;
            }
            if (typeof pswp.options[name + "SVG"] === "string") {
                elementHTML = pswp.options[name + "SVG"];
            }
            pswp.dispatch("uiElementCreate", {
                data
            });
            let className = "";
            if (data.isButton) {
                className += "pswp__button ";
                className += data.className || `pswp__button--${data.name}`;
            } else {
                className += data.className || `pswp__${data.name}`;
            }
            let tagName = data.isButton ? data.tagName || "button" : data.tagName || "div";
            tagName = /** @type {keyof HTMLElementTagNameMap} */
                tagName.toLowerCase();
            const element = createElement2(className, tagName);
            if (data.isButton) {
                if (tagName === "button") {
                    element.type = "button";
                }
                let {
                    title
                } = data;
                const {
                    ariaLabel
                } = data;
                if (typeof pswp.options[name + "Title"] === "string") {
                    title = pswp.options[name + "Title"];
                }
                if (title) {
                    element.title = title;
                }
                const ariaText = ariaLabel || title;
                if (ariaText) {
                    element.setAttribute("aria-label", ariaText);
                }
            }
            element.innerHTML = addElementHTML(elementHTML);
            if (data.onInit) {
                data.onInit(element, pswp);
            }
            if (data.onClick) {
                element.onclick = (e5) => {
                    if (typeof data.onClick === "string") {
                        pswp[data.onClick]();
                    } else if (typeof data.onClick === "function") {
                        data.onClick(e5, element, pswp);
                    }
                };
            }
            const appendTo = data.appendTo || "bar";
            let container = pswp.element;
            if (appendTo === "bar") {
                if (!pswp.topBar) {
                    pswp.topBar = createElement2("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
                }
                container = pswp.topBar;
            } else {
                element.classList.add("pswp__hide-on-close");
                if (appendTo === "wrapper") {
                    container = pswp.scrollWrap;
                }
            }
            (_container = container) === null || _container === void 0 || _container.appendChild(pswp.applyFilters("uiElement", element, data));
        }
    };

    function initArrowButton(element, pswp, isNextButton) {
        element.classList.add("pswp__button--arrow");
        element.setAttribute("aria-controls", "pswp__items");
        pswp.on("change", () => {
            if (!pswp.options.loop) {
                if (isNextButton) {
                    element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
                } else {
                    element.disabled = !(pswp.currIndex > 0);
                }
            }
        });
    }
    var arrowPrev = {
        name: "arrowPrev",
        className: "pswp__button--arrow--prev",
        title: "Previous",
        order: 10,
        isButton: true,
        appendTo: "wrapper",
        html: {
            isCustomSVG: true,
            size: 60,
            inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
            outlineID: "pswp__icn-arrow"
        },
        onClick: "prev",
        onInit: initArrowButton
    };
    var arrowNext = {
        name: "arrowNext",
        className: "pswp__button--arrow--next",
        title: "Next",
        order: 11,
        isButton: true,
        appendTo: "wrapper",
        html: {
            isCustomSVG: true,
            size: 60,
            inner: '<use xlink:href="#pswp__icn-arrow"/>',
            outlineID: "pswp__icn-arrow"
        },
        onClick: "next",
        onInit: (el, pswp) => {
            initArrowButton(el, pswp, true);
        }
    };
    var closeButton = {
        name: "close",
        title: "Close",
        order: 20,
        isButton: true,
        html: {
            isCustomSVG: true,
            inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
            outlineID: "pswp__icn-close"
        },
        onClick: "close"
    };
    var zoomButton = {
        name: "zoom",
        title: "Zoom",
        order: 10,
        isButton: true,
        html: {
            isCustomSVG: true,
            // eslint-disable-next-line max-len
            inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
            outlineID: "pswp__icn-zoom"
        },
        onClick: "toggleZoom"
    };
    var loadingIndicator = {
        name: "preloader",
        appendTo: "bar",
        order: 7,
        html: {
            isCustomSVG: true,
            // eslint-disable-next-line max-len
            inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
            outlineID: "pswp__icn-loading"
        },
        onInit: (indicatorElement, pswp) => {
            let isVisible;
            let delayTimeout = null;
            const toggleIndicatorClass = (className, add) => {
                indicatorElement.classList.toggle("pswp__preloader--" + className, add);
            };
            const setIndicatorVisibility = (visible) => {
                if (isVisible !== visible) {
                    isVisible = visible;
                    toggleIndicatorClass("active", visible);
                }
            };
            const updatePreloaderVisibility = () => {
                var _pswp$currSlide;
                if (!((_pswp$currSlide = pswp.currSlide) !== null && _pswp$currSlide !== void 0 && _pswp$currSlide.content.isLoading())) {
                    setIndicatorVisibility(false);
                    if (delayTimeout) {
                        clearTimeout(delayTimeout);
                        delayTimeout = null;
                    }
                    return;
                }
                if (!delayTimeout) {
                    delayTimeout = setTimeout(() => {
                        var _pswp$currSlide2;
                        setIndicatorVisibility(Boolean((_pswp$currSlide2 = pswp.currSlide) === null || _pswp$currSlide2 === void 0 ? void 0 : _pswp$currSlide2.content.isLoading()));
                        delayTimeout = null;
                    }, pswp.options.preloaderDelay);
                }
            };
            pswp.on("change", updatePreloaderVisibility);
            pswp.on("loadComplete", (e5) => {
                if (pswp.currSlide === e5.slide) {
                    updatePreloaderVisibility();
                }
            });
            if (pswp.ui) {
                pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
            }
        }
    };
    var counterIndicator = {
        name: "counter",
        order: 5,
        onInit: (counterElement, pswp) => {
            pswp.on("change", () => {
                counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
            });
        }
    };

    function setZoomedIn(el, isZoomedIn) {
        el.classList.toggle("pswp--zoomed-in", isZoomedIn);
    }
    var UI = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this.isRegistered = false;
            this.uiElementsData = [];
            this.items = [];
            this.updatePreloaderVisibility = () => {};
            this._lastUpdatedZoomLevel = void 0;
        }
        init() {
            const {
                pswp
            } = this;
            this.isRegistered = false;
            this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
            pswp.dispatch("uiRegister");
            this.uiElementsData.sort((a5, b4) => {
                return (a5.order || 0) - (b4.order || 0);
            });
            this.items = [];
            this.isRegistered = true;
            this.uiElementsData.forEach((uiElementData) => {
                this.registerElement(uiElementData);
            });
            pswp.on("change", () => {
                var _pswp$element;
                (_pswp$element = pswp.element) === null || _pswp$element === void 0 || _pswp$element.classList.toggle("pswp--one-slide", pswp.getNumItems() === 1);
            });
            pswp.on("zoomPanUpdate", () => this._onZoomPanUpdate());
        }
        /**
         * @param {UIElementData} elementData
         */
        registerElement(elementData) {
            if (this.isRegistered) {
                this.items.push(new UIElement(this.pswp, elementData));
            } else {
                this.uiElementsData.push(elementData);
            }
        }
        /**
         * Fired each time zoom or pan position is changed.
         * Update classes that control visibility of zoom button and cursor icon.
         *
         * @private
         */
        _onZoomPanUpdate() {
            const {
                template,
                currSlide,
                options
            } = this.pswp;
            if (this.pswp.opener.isClosing || !template || !currSlide) {
                return;
            }
            let {
                currZoomLevel
            } = currSlide;
            if (!this.pswp.opener.isOpen) {
                currZoomLevel = currSlide.zoomLevels.initial;
            }
            if (currZoomLevel === this._lastUpdatedZoomLevel) {
                return;
            }
            this._lastUpdatedZoomLevel = currZoomLevel;
            const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
            if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
                setZoomedIn(template, false);
                template.classList.remove("pswp--zoom-allowed");
                return;
            }
            template.classList.add("pswp--zoom-allowed");
            const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
            setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
            if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") {
                template.classList.add("pswp--click-to-zoom");
            }
        }
    };

    function getBoundsByElement(el) {
        const thumbAreaRect = el.getBoundingClientRect();
        return {
            x: thumbAreaRect.left,
            y: thumbAreaRect.top,
            w: thumbAreaRect.width
        };
    }

    function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
        const thumbAreaRect = el.getBoundingClientRect();
        const hRatio = thumbAreaRect.width / imageWidth;
        const vRatio = thumbAreaRect.height / imageHeight;
        const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
        const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
        const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
        const bounds = {
            x: thumbAreaRect.left + offsetX,
            y: thumbAreaRect.top + offsetY,
            w: imageWidth * fillZoomLevel
        };
        bounds.innerRect = {
            w: thumbAreaRect.width,
            h: thumbAreaRect.height,
            x: offsetX,
            y: offsetY
        };
        return bounds;
    }

    function getThumbBounds(index, itemData, instance) {
        const event2 = instance.dispatch("thumbBounds", {
            index,
            itemData,
            instance
        });
        if (event2.thumbBounds) {
            return event2.thumbBounds;
        }
        const {
            element
        } = itemData;
        let thumbBounds;
        let thumbnail;
        if (element && instance.options.thumbSelector !== false) {
            const thumbSelector = instance.options.thumbSelector || "img";
            thumbnail = element.matches(thumbSelector) ? element : (
                /** @type {HTMLElement | null} */
                element.querySelector(thumbSelector)
            );
        }
        thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index);
        if (thumbnail) {
            if (!itemData.thumbCropped) {
                thumbBounds = getBoundsByElement(thumbnail);
            } else {
                thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
            }
        }
        return instance.applyFilters("thumbBounds", thumbBounds, itemData, index);
    }
    var PhotoSwipeEvent = class {
        /**
         * @param {T} type
         * @param {PhotoSwipeEventsMap[T]} [details]
         */
        constructor(type, details) {
            this.type = type;
            this.defaultPrevented = false;
            if (details) {
                Object.assign(this, details);
            }
        }
        preventDefault() {
            this.defaultPrevented = true;
        }
    };
    var Eventable = class {
        constructor() {
            this._listeners = {};
            this._filters = {};
            this.pswp = void 0;
            this.options = void 0;
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         * @param {number} priority
         */
        addFilter(name, fn, priority = 100) {
            var _this$_filters$name, _this$_filters$name2, _this$pswp;
            if (!this._filters[name]) {
                this._filters[name] = [];
            }
            (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
                fn,
                priority
            });
            (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f22) => f1.priority - f22.priority);
            (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         */
        removeFilter(name, fn) {
            if (this._filters[name]) {
                this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
            }
            if (this.pswp) {
                this.pswp.removeFilter(name, fn);
            }
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
         * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
         */
        applyFilters(name, ...args) {
            var _this$_filters$name3;
            (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
                args[0] = filter.fn.apply(this, args);
            });
            return args[0];
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        on(name, fn) {
            var _this$_listeners$name, _this$pswp2;
            if (!this._listeners[name]) {
                this._listeners[name] = [];
            }
            (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
            (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        off(name, fn) {
            var _this$pswp3;
            if (this._listeners[name]) {
                this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
            }
            (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {PhotoSwipeEventsMap[T]} [details]
         * @returns {AugmentedEvent<T>}
         */
        dispatch(name, details) {
            var _this$_listeners$name2;
            if (this.pswp) {
                return this.pswp.dispatch(name, details);
            }
            const event2 = (
                /** @type {AugmentedEvent<T>} */
                new PhotoSwipeEvent(name, details)
            );
            (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
                listener.call(this, event2);
            });
            return event2;
        }
    };
    var Placeholder = class {
        /**
         * @param {string | false} imageSrc
         * @param {HTMLElement} container
         */
        constructor(imageSrc, container) {
            this.element = createElement2("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
            if (imageSrc) {
                const imgEl = (
                    /** @type {HTMLImageElement} */
                    this.element
                );
                imgEl.decoding = "async";
                imgEl.alt = "";
                imgEl.src = imageSrc;
                imgEl.setAttribute("role", "presentation");
            }
            this.element.setAttribute("aria-hidden", "true");
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        setDisplayedSize(width, height) {
            if (!this.element) {
                return;
            }
            if (this.element.tagName === "IMG") {
                setWidthHeight(this.element, 250, "auto");
                this.element.style.transformOrigin = "0 0";
                this.element.style.transform = toTransformString(0, 0, width / 250);
            } else {
                setWidthHeight(this.element, width, height);
            }
        }
        destroy() {
            var _this$element;
            if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
                this.element.remove();
            }
            this.element = null;
        }
    };
    var Content = class {
        /**
         * @param {SlideData} itemData Slide data
         * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
         * @param {number} index
         */
        constructor(itemData, instance, index) {
            this.instance = instance;
            this.data = itemData;
            this.index = index;
            this.element = void 0;
            this.placeholder = void 0;
            this.slide = void 0;
            this.displayedImageWidth = 0;
            this.displayedImageHeight = 0;
            this.width = Number(this.data.w) || Number(this.data.width) || 0;
            this.height = Number(this.data.h) || Number(this.data.height) || 0;
            this.isAttached = false;
            this.hasSlide = false;
            this.isDecoding = false;
            this.state = LOAD_STATE.IDLE;
            if (this.data.type) {
                this.type = this.data.type;
            } else if (this.data.src) {
                this.type = "image";
            } else {
                this.type = "html";
            }
            this.instance.dispatch("contentInit", {
                content: this
            });
        }
        removePlaceholder() {
            if (this.placeholder && !this.keepPlaceholder()) {
                setTimeout(() => {
                    if (this.placeholder) {
                        this.placeholder.destroy();
                        this.placeholder = void 0;
                    }
                }, 1e3);
            }
        }
        /**
         * Preload content
         *
         * @param {boolean} isLazy
         * @param {boolean} [reload]
         */
        load(isLazy, reload) {
            if (this.slide && this.usePlaceholder()) {
                if (!this.placeholder) {
                    const placeholderSrc = this.instance.applyFilters(
                        "placeholderSrc",
                        // use  image-based placeholder only for the first slide,
                        // as rendering (even small stretched thumbnail) is an expensive operation
                        this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
                        this
                    );
                    this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
                } else {
                    const placeholderEl = this.placeholder.element;
                    if (placeholderEl && !placeholderEl.parentElement) {
                        this.slide.container.prepend(placeholderEl);
                    }
                }
            }
            if (this.element && !reload) {
                return;
            }
            if (this.instance.dispatch("contentLoad", {
                    content: this,
                    isLazy
                }).defaultPrevented) {
                return;
            }
            if (this.isImageContent()) {
                this.element = createElement2("pswp__img", "img");
                if (this.displayedImageWidth) {
                    this.loadImage(isLazy);
                }
            } else {
                this.element = createElement2("pswp__content", "div");
                this.element.innerHTML = this.data.html || "";
            }
            if (reload && this.slide) {
                this.slide.updateContentSize(true);
            }
        }
        /**
         * Preload image
         *
         * @param {boolean} isLazy
         */
        loadImage(isLazy) {
            var _this$data$src, _this$data$alt;
            if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
                    content: this,
                    isLazy
                }).defaultPrevented) {
                return;
            }
            const imageElement = (
                /** @type HTMLImageElement */
                this.element
            );
            this.updateSrcsetSizes();
            if (this.data.srcset) {
                imageElement.srcset = this.data.srcset;
            }
            imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
            imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
            this.state = LOAD_STATE.LOADING;
            if (imageElement.complete) {
                this.onLoaded();
            } else {
                imageElement.onload = () => {
                    this.onLoaded();
                };
                imageElement.onerror = () => {
                    this.onError();
                };
            }
        }
        /**
         * Assign slide to content
         *
         * @param {Slide} slide
         */
        setSlide(slide2) {
            this.slide = slide2;
            this.hasSlide = true;
            this.instance = slide2.pswp;
        }
        /**
         * Content load success handler
         */
        onLoaded() {
            this.state = LOAD_STATE.LOADED;
            if (this.slide && this.element) {
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    content: this
                });
                if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
                    this.append();
                    this.slide.updateContentSize(true);
                }
                if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
                    this.removePlaceholder();
                }
            }
        }
        /**
         * Content load error handler
         */
        onError() {
            this.state = LOAD_STATE.ERROR;
            if (this.slide) {
                this.displayError();
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    isError: true,
                    content: this
                });
                this.instance.dispatch("loadError", {
                    slide: this.slide,
                    content: this
                });
            }
        }
        /**
         * @returns {Boolean} If the content is currently loading
         */
        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
        }
        /**
         * @returns {Boolean} If the content is in error state
         */
        isError() {
            return this.state === LOAD_STATE.ERROR;
        }
        /**
         * @returns {boolean} If the content is image
         */
        isImageContent() {
            return this.type === "image";
        }
        /**
         * Update content size
         *
         * @param {Number} width
         * @param {Number} height
         */
        setDisplayedSize(width, height) {
            if (!this.element) {
                return;
            }
            if (this.placeholder) {
                this.placeholder.setDisplayedSize(width, height);
            }
            if (this.instance.dispatch("contentResize", {
                    content: this,
                    width,
                    height
                }).defaultPrevented) {
                return;
            }
            setWidthHeight(this.element, width, height);
            if (this.isImageContent() && !this.isError()) {
                const isInitialSizeUpdate = !this.displayedImageWidth && width;
                this.displayedImageWidth = width;
                this.displayedImageHeight = height;
                if (isInitialSizeUpdate) {
                    this.loadImage(false);
                } else {
                    this.updateSrcsetSizes();
                }
                if (this.slide) {
                    this.instance.dispatch("imageSizeChange", {
                        slide: this.slide,
                        width,
                        height,
                        content: this
                    });
                }
            }
        }
        /**
         * @returns {boolean} If the content can be zoomed
         */
        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
        }
        /**
         * Update image srcset sizes attribute based on width and height
         */
        updateSrcsetSizes() {
            if (!this.isImageContent() || !this.element || !this.data.srcset) {
                return;
            }
            const image = (
                /** @type HTMLImageElement */
                this.element
            );
            const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
            if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
                image.sizes = sizesWidth + "px";
                image.dataset.largestUsedSize = String(sizesWidth);
            }
        }
        /**
         * @returns {boolean} If content should use a placeholder (from msrc by default)
         */
        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
        }
        /**
         * Preload content with lazy-loading param
         */
        lazyLoad() {
            if (this.instance.dispatch("contentLazyLoad", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            this.load(true);
        }
        /**
         * @returns {boolean} If placeholder should be kept after content is loaded
         */
        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
        }
        /**
         * Destroy the content
         */
        destroy() {
            this.hasSlide = false;
            this.slide = void 0;
            if (this.instance.dispatch("contentDestroy", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            this.remove();
            if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = void 0;
            }
            if (this.isImageContent() && this.element) {
                this.element.onload = null;
                this.element.onerror = null;
                this.element = void 0;
            }
        }
        /**
         * Display error message
         */
        displayError() {
            if (this.slide) {
                var _this$instance$option, _this$instance$option2;
                let errorMsgEl = createElement2("pswp__error-msg", "div");
                errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
                errorMsgEl = /** @type {HTMLDivElement} */
                    this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
                this.element = createElement2("pswp__content pswp__error-msg-container", "div");
                this.element.appendChild(errorMsgEl);
                this.slide.container.innerText = "";
                this.slide.container.appendChild(this.element);
                this.slide.updateContentSize(true);
                this.removePlaceholder();
            }
        }
        /**
         * Append the content
         */
        append() {
            if (this.isAttached || !this.element) {
                return;
            }
            this.isAttached = true;
            if (this.state === LOAD_STATE.ERROR) {
                this.displayError();
                return;
            }
            if (this.instance.dispatch("contentAppend", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            const supportsDecode = "decode" in this.element;
            if (this.isImageContent()) {
                if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
                    this.isDecoding = true;
                    this.element.decode().catch(() => {}).finally(() => {
                        this.isDecoding = false;
                        this.appendImage();
                    });
                } else {
                    this.appendImage();
                }
            } else if (this.slide && !this.element.parentNode) {
                this.slide.container.appendChild(this.element);
            }
        }
        /**
         * Activate the slide,
         * active slide is generally the current one,
         * meaning the user can see it.
         */
        activate() {
            if (this.instance.dispatch("contentActivate", {
                    content: this
                }).defaultPrevented || !this.slide) {
                return;
            }
            if (this.isImageContent() && this.isDecoding && !isSafari()) {
                this.appendImage();
            } else if (this.isError()) {
                this.load(false, true);
            }
            if (this.slide.holderElement) {
                this.slide.holderElement.setAttribute("aria-hidden", "false");
            }
        }
        /**
         * Deactivate the content
         */
        deactivate() {
            this.instance.dispatch("contentDeactivate", {
                content: this
            });
            if (this.slide && this.slide.holderElement) {
                this.slide.holderElement.setAttribute("aria-hidden", "true");
            }
        }
        /**
         * Remove the content from DOM
         */
        remove() {
            this.isAttached = false;
            if (this.instance.dispatch("contentRemove", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            if (this.element && this.element.parentNode) {
                this.element.remove();
            }
            if (this.placeholder && this.placeholder.element) {
                this.placeholder.element.remove();
            }
        }
        /**
         * Append the image content to slide container
         */
        appendImage() {
            if (!this.isAttached) {
                return;
            }
            if (this.instance.dispatch("contentAppendImage", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            if (this.slide && this.element && !this.element.parentNode) {
                this.slide.container.appendChild(this.element);
            }
            if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
                this.removePlaceholder();
            }
        }
    };
    var MIN_SLIDES_TO_CACHE = 5;

    function lazyLoadData(itemData, instance, index) {
        const content = instance.createContentFromData(itemData, index);
        let zoomLevel;
        const {
            options
        } = instance;
        if (options) {
            zoomLevel = new ZoomLevel(options, itemData, -1);
            let viewportSize;
            if (instance.pswp) {
                viewportSize = instance.pswp.viewportSize;
            } else {
                viewportSize = getViewportSize(options, instance);
            }
            const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
            zoomLevel.update(content.width, content.height, panAreaSize);
        }
        content.lazyLoad();
        if (zoomLevel) {
            content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
        }
        return content;
    }

    function lazyLoadSlide(index, instance) {
        const itemData = instance.getItemData(index);
        if (instance.dispatch("lazyLoadSlide", {
                index,
                itemData
            }).defaultPrevented) {
            return;
        }
        return lazyLoadData(itemData, instance, index);
    }
    var ContentLoader = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
            this._cachedItems = [];
        }
        /**
         * Lazy load nearby slides based on `preload` option.
         *
         * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
         */
        updateLazy(diff) {
            const {
                pswp
            } = this;
            if (pswp.dispatch("lazyLoad").defaultPrevented) {
                return;
            }
            const {
                preload: preload2
            } = pswp.options;
            const isForward = diff === void 0 ? true : diff >= 0;
            let i6;
            for (i6 = 0; i6 <= preload2[1]; i6++) {
                this.loadSlideByIndex(pswp.currIndex + (isForward ? i6 : -i6));
            }
            for (i6 = 1; i6 <= preload2[0]; i6++) {
                this.loadSlideByIndex(pswp.currIndex + (isForward ? -i6 : i6));
            }
        }
        /**
         * @param {number} initialIndex
         */
        loadSlideByIndex(initialIndex) {
            const index = this.pswp.getLoopedIndex(initialIndex);
            let content = this.getContentByIndex(index);
            if (!content) {
                content = lazyLoadSlide(index, this.pswp);
                if (content) {
                    this.addToCache(content);
                }
            }
        }
        /**
         * @param {Slide} slide
         * @returns {Content}
         */
        getContentBySlide(slide2) {
            let content = this.getContentByIndex(slide2.index);
            if (!content) {
                content = this.pswp.createContentFromData(slide2.data, slide2.index);
                this.addToCache(content);
            }
            content.setSlide(slide2);
            return content;
        }
        /**
         * @param {Content} content
         */
        addToCache(content) {
            this.removeByIndex(content.index);
            this._cachedItems.push(content);
            if (this._cachedItems.length > this.limit) {
                const indexToRemove = this._cachedItems.findIndex((item) => {
                    return !item.isAttached && !item.hasSlide;
                });
                if (indexToRemove !== -1) {
                    const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
                    removedItem.destroy();
                }
            }
        }
        /**
         * Removes an image from cache, does not destroy() it, just removes.
         *
         * @param {number} index
         */
        removeByIndex(index) {
            const indexToRemove = this._cachedItems.findIndex((item) => item.index === index);
            if (indexToRemove !== -1) {
                this._cachedItems.splice(indexToRemove, 1);
            }
        }
        /**
         * @param {number} index
         * @returns {Content | undefined}
         */
        getContentByIndex(index) {
            return this._cachedItems.find((content) => content.index === index);
        }
        destroy() {
            this._cachedItems.forEach((content) => content.destroy());
            this._cachedItems = [];
        }
    };
    var PhotoSwipeBase = class extends Eventable {
        /**
         * Get total number of slides
         *
         * @returns {number}
         */
        getNumItems() {
            var _this$options;
            let numItems = 0;
            const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
            if (dataSource && "length" in dataSource) {
                numItems = dataSource.length;
            } else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) {
                    dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                }
                if (dataSource.items) {
                    numItems = dataSource.items.length;
                }
            }
            const event2 = this.dispatch("numItems", {
                dataSource,
                numItems
            });
            return this.applyFilters("numItems", event2.numItems, dataSource);
        }
        /**
         * @param {SlideData} slideData
         * @param {number} index
         * @returns {Content}
         */
        createContentFromData(slideData, index) {
            return new Content(slideData, this, index);
        }
        /**
         * Get item data by index.
         *
         * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
         * For example, it may contain properties like
         * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
         *
         * @param {number} index
         * @returns {SlideData}
         */
        getItemData(index) {
            var _this$options2;
            const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
            let dataSourceItem = {};
            if (Array.isArray(dataSource)) {
                dataSourceItem = dataSource[index];
            } else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) {
                    dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                }
                dataSourceItem = dataSource.items[index];
            }
            let itemData = dataSourceItem;
            if (itemData instanceof Element) {
                itemData = this._domElementToItemData(itemData);
            }
            const event2 = this.dispatch("itemData", {
                itemData: itemData || {},
                index
            });
            return this.applyFilters("itemData", event2.itemData, index);
        }
        /**
         * Get array of gallery DOM elements,
         * based on childSelector and gallery element.
         *
         * @param {HTMLElement} galleryElement
         * @returns {HTMLElement[]}
         */
        _getGalleryDOMElements(galleryElement) {
            var _this$options3, _this$options4;
            if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
                return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
            }
            return [galleryElement];
        }
        /**
         * Converts DOM element to item data object.
         *
         * @param {HTMLElement} element DOM element
         * @returns {SlideData}
         */
        _domElementToItemData(element) {
            const itemData = {
                element
            };
            const linkEl = (
                /** @type {HTMLAnchorElement} */
                element.tagName === "A" ? element : element.querySelector("a")
            );
            if (linkEl) {
                itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
                if (linkEl.dataset.pswpSrcset) {
                    itemData.srcset = linkEl.dataset.pswpSrcset;
                }
                itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
                itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
                itemData.w = itemData.width;
                itemData.h = itemData.height;
                if (linkEl.dataset.pswpType) {
                    itemData.type = linkEl.dataset.pswpType;
                }
                const thumbnailEl = element.querySelector("img");
                if (thumbnailEl) {
                    var _thumbnailEl$getAttri;
                    itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                    itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
                }
                if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
                    itemData.thumbCropped = true;
                }
            }
            return this.applyFilters("domItemData", itemData, element, linkEl);
        }
        /**
         * Lazy-load by slide data
         *
         * @param {SlideData} itemData Data about the slide
         * @param {number} index
         * @returns {Content} Image that is being decoded or false.
         */
        lazyLoadData(itemData, index) {
            return lazyLoadData(itemData, this, index);
        }
    };
    var MIN_OPACITY = 3e-3;
    var Opener = class {
        /**
         * @param {PhotoSwipe} pswp
         */
        constructor(pswp) {
            this.pswp = pswp;
            this.isClosed = true;
            this.isOpen = false;
            this.isClosing = false;
            this.isOpening = false;
            this._duration = void 0;
            this._useAnimation = false;
            this._croppedZoom = false;
            this._animateRootOpacity = false;
            this._animateBgOpacity = false;
            this._placeholder = void 0;
            this._opacityElement = void 0;
            this._cropContainer1 = void 0;
            this._cropContainer2 = void 0;
            this._thumbBounds = void 0;
            this._prepareOpen = this._prepareOpen.bind(this);
            pswp.on("firstZoomPan", this._prepareOpen);
        }
        open() {
            this._prepareOpen();
            this._start();
        }
        close() {
            if (this.isClosed || this.isClosing || this.isOpening) {
                return;
            }
            const slide2 = this.pswp.currSlide;
            this.isOpen = false;
            this.isOpening = false;
            this.isClosing = true;
            this._duration = this.pswp.options.hideAnimationDuration;
            if (slide2 && slide2.currZoomLevel * slide2.width >= this.pswp.options.maxWidthToAnimate) {
                this._duration = 0;
            }
            this._applyStartProps();
            setTimeout(() => {
                this._start();
            }, this._croppedZoom ? 30 : 0);
        }
        /** @private */
        _prepareOpen() {
            this.pswp.off("firstZoomPan", this._prepareOpen);
            if (!this.isOpening) {
                const slide2 = this.pswp.currSlide;
                this.isOpening = true;
                this.isClosing = false;
                this._duration = this.pswp.options.showAnimationDuration;
                if (slide2 && slide2.zoomLevels.initial * slide2.width >= this.pswp.options.maxWidthToAnimate) {
                    this._duration = 0;
                }
                this._applyStartProps();
            }
        }
        /** @private */
        _applyStartProps() {
            const {
                pswp
            } = this;
            const slide2 = this.pswp.currSlide;
            const {
                options
            } = pswp;
            if (options.showHideAnimationType === "fade") {
                options.showHideOpacity = true;
                this._thumbBounds = void 0;
            } else if (options.showHideAnimationType === "none") {
                options.showHideOpacity = false;
                this._duration = 0;
                this._thumbBounds = void 0;
            } else if (this.isOpening && pswp._initialThumbBounds) {
                this._thumbBounds = pswp._initialThumbBounds;
            } else {
                this._thumbBounds = this.pswp.getThumbBounds();
            }
            this._placeholder = slide2 === null || slide2 === void 0 ? void 0 : slide2.getPlaceholderElement();
            pswp.animations.stopAll();
            this._useAnimation = Boolean(this._duration && this._duration > 50);
            this._animateZoom = Boolean(this._thumbBounds) && (slide2 === null || slide2 === void 0 ? void 0 : slide2.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
            if (!this._animateZoom) {
                this._animateRootOpacity = true;
                if (this.isOpening && slide2) {
                    slide2.zoomAndPanToInitial();
                    slide2.applyCurrentZoomPan();
                }
            } else {
                var _options$showHideOpac;
                this._animateRootOpacity = (_options$showHideOpac = options.showHideOpacity) !== null && _options$showHideOpac !== void 0 ? _options$showHideOpac : false;
            }
            this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
            this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
            if (!this._useAnimation) {
                this._duration = 0;
                this._animateZoom = false;
                this._animateBgOpacity = false;
                this._animateRootOpacity = true;
                if (this.isOpening) {
                    if (pswp.element) {
                        pswp.element.style.opacity = String(MIN_OPACITY);
                    }
                    pswp.applyBgOpacity(1);
                }
                return;
            }
            if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
                var _this$pswp$currSlide;
                this._croppedZoom = true;
                this._cropContainer1 = this.pswp.container;
                this._cropContainer2 = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.holderElement;
                if (pswp.container) {
                    pswp.container.style.overflow = "hidden";
                    pswp.container.style.width = pswp.viewportSize.x + "px";
                }
            } else {
                this._croppedZoom = false;
            }
            if (this.isOpening) {
                if (this._animateRootOpacity) {
                    if (pswp.element) {
                        pswp.element.style.opacity = String(MIN_OPACITY);
                    }
                    pswp.applyBgOpacity(1);
                } else {
                    if (this._animateBgOpacity && pswp.bg) {
                        pswp.bg.style.opacity = String(MIN_OPACITY);
                    }
                    if (pswp.element) {
                        pswp.element.style.opacity = "1";
                    }
                }
                if (this._animateZoom) {
                    this._setClosedStateZoomPan();
                    if (this._placeholder) {
                        this._placeholder.style.willChange = "transform";
                        this._placeholder.style.opacity = String(MIN_OPACITY);
                    }
                }
            } else if (this.isClosing) {
                if (pswp.mainScroll.itemHolders[0]) {
                    pswp.mainScroll.itemHolders[0].el.style.display = "none";
                }
                if (pswp.mainScroll.itemHolders[2]) {
                    pswp.mainScroll.itemHolders[2].el.style.display = "none";
                }
                if (this._croppedZoom) {
                    if (pswp.mainScroll.x !== 0) {
                        pswp.mainScroll.resetPosition();
                        pswp.mainScroll.resize();
                    }
                }
            }
        }
        /** @private */
        _start() {
            if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
                new Promise((resolve) => {
                    let decoded = false;
                    let isDelaying = true;
                    decodeImage(
                        /** @type {HTMLImageElement} */
                        this._placeholder
                    ).finally(() => {
                        decoded = true;
                        if (!isDelaying) {
                            resolve(true);
                        }
                    });
                    setTimeout(() => {
                        isDelaying = false;
                        if (decoded) {
                            resolve(true);
                        }
                    }, 50);
                    setTimeout(resolve, 250);
                }).finally(() => this._initiate());
            } else {
                this._initiate();
            }
        }
        /** @private */
        _initiate() {
            var _this$pswp$element, _this$pswp$element2;
            (_this$pswp$element = this.pswp.element) === null || _this$pswp$element === void 0 || _this$pswp$element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
            this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
            this.pswp.dispatch(
                /** @type {'initialZoomIn' | 'initialZoomOut'} */
                "initialZoom" + (this.isOpening ? "In" : "Out")
            );
            (_this$pswp$element2 = this.pswp.element) === null || _this$pswp$element2 === void 0 || _this$pswp$element2.classList.toggle("pswp--ui-visible", this.isOpening);
            if (this.isOpening) {
                if (this._placeholder) {
                    this._placeholder.style.opacity = "1";
                }
                this._animateToOpenState();
            } else if (this.isClosing) {
                this._animateToClosedState();
            }
            if (!this._useAnimation) {
                this._onAnimationComplete();
            }
        }
        /** @private */
        _onAnimationComplete() {
            const {
                pswp
            } = this;
            this.isOpen = this.isOpening;
            this.isClosed = this.isClosing;
            this.isOpening = false;
            this.isClosing = false;
            pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
            pswp.dispatch(
                /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
                "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
            );
            if (this.isClosed) {
                pswp.destroy();
            } else if (this.isOpen) {
                var _pswp$currSlide;
                if (this._animateZoom && pswp.container) {
                    pswp.container.style.overflow = "visible";
                    pswp.container.style.width = "100%";
                }
                (_pswp$currSlide = pswp.currSlide) === null || _pswp$currSlide === void 0 || _pswp$currSlide.applyCurrentZoomPan();
            }
        }
        /** @private */
        _animateToOpenState() {
            const {
                pswp
            } = this;
            if (this._animateZoom) {
                if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
                    this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
                    this._animateTo(this._cropContainer2, "transform", "none");
                }
                if (pswp.currSlide) {
                    pswp.currSlide.zoomAndPanToInitial();
                    this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
                }
            }
            if (this._animateBgOpacity && pswp.bg) {
                this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
            }
            if (this._animateRootOpacity && pswp.element) {
                this._animateTo(pswp.element, "opacity", "1");
            }
        }
        /** @private */
        _animateToClosedState() {
            const {
                pswp
            } = this;
            if (this._animateZoom) {
                this._setClosedStateZoomPan(true);
            }
            if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
                this._animateTo(pswp.bg, "opacity", "0");
            }
            if (this._animateRootOpacity && pswp.element) {
                this._animateTo(pswp.element, "opacity", "0");
            }
        }
        /**
         * @private
         * @param {boolean} [animate]
         */
        _setClosedStateZoomPan(animate) {
            if (!this._thumbBounds)
                return;
            const {
                pswp
            } = this;
            const {
                innerRect
            } = this._thumbBounds;
            const {
                currSlide,
                viewportSize
            } = pswp;
            if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
                const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
                const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
                const containerTwoPanX = viewportSize.x - innerRect.w;
                const containerTwoPanY = viewportSize.y - innerRect.h;
                if (animate) {
                    this._animateTo(this._cropContainer1, "transform", toTransformString(containerOnePanX, containerOnePanY));
                    this._animateTo(this._cropContainer2, "transform", toTransformString(containerTwoPanX, containerTwoPanY));
                } else {
                    setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
                    setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
                }
            }
            if (currSlide) {
                equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
                currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
                if (animate) {
                    this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
                } else {
                    currSlide.applyCurrentZoomPan();
                }
            }
        }
        /**
         * @private
         * @param {HTMLElement} target
         * @param {'transform' | 'opacity'} prop
         * @param {string} propValue
         */
        _animateTo(target, prop, propValue) {
            if (!this._duration) {
                target.style[prop] = propValue;
                return;
            }
            const {
                animations
            } = this.pswp;
            const animProps = {
                duration: this._duration,
                easing: this.pswp.options.easing,
                onComplete: () => {
                    if (!animations.activeAnimations.length) {
                        this._onAnimationComplete();
                    }
                },
                target
            };
            animProps[prop] = propValue;
            animations.startTransition(animProps);
        }
    };
    var defaultOptions = {
        allowPanToNext: true,
        spacing: 0.1,
        loop: true,
        pinchToClose: true,
        closeOnVerticalDrag: true,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        zoomAnimationDuration: 333,
        escKey: true,
        arrowKeys: true,
        trapFocus: true,
        returnFocus: true,
        maxWidthToAnimate: 4e3,
        clickToCloseNonZoomable: true,
        imageClickAction: "zoom-or-close",
        bgClickAction: "close",
        tapAction: "toggle-controls",
        doubleTapAction: "zoom",
        indexIndicatorSep: " / ",
        preloaderDelay: 2e3,
        bgOpacity: 0.8,
        index: 0,
        errorMsg: "The image cannot be loaded",
        preload: [1, 2],
        easing: "cubic-bezier(.4,0,.22,1)"
    };
    var PhotoSwipe = class extends PhotoSwipeBase {
        /**
         * @param {PhotoSwipeOptions} [options]
         */
        constructor(options) {
            super();
            this.options = this._prepareOptions(options || {});
            this.offset = {
                x: 0,
                y: 0
            };
            this._prevViewportSize = {
                x: 0,
                y: 0
            };
            this.viewportSize = {
                x: 0,
                y: 0
            };
            this.bgOpacity = 1;
            this.currIndex = 0;
            this.potentialIndex = 0;
            this.isOpen = false;
            this.isDestroying = false;
            this.hasMouse = false;
            this._initialItemData = {};
            this._initialThumbBounds = void 0;
            this.topBar = void 0;
            this.element = void 0;
            this.template = void 0;
            this.container = void 0;
            this.scrollWrap = void 0;
            this.currSlide = void 0;
            this.events = new DOMEvents();
            this.animations = new Animations();
            this.mainScroll = new MainScroll(this);
            this.gestures = new Gestures(this);
            this.opener = new Opener(this);
            this.keyboard = new Keyboard2(this);
            this.contentLoader = new ContentLoader(this);
        }
        /** @returns {boolean} */
        init() {
            if (this.isOpen || this.isDestroying) {
                return false;
            }
            this.isOpen = true;
            this.dispatch("init");
            this.dispatch("beforeOpen");
            this._createMainStructure();
            let rootClasses = "pswp--open";
            if (this.gestures.supportsTouch) {
                rootClasses += " pswp--touch";
            }
            if (this.options.mainClass) {
                rootClasses += " " + this.options.mainClass;
            }
            if (this.element) {
                this.element.className += " " + rootClasses;
            }
            this.currIndex = this.options.index || 0;
            this.potentialIndex = this.currIndex;
            this.dispatch("firstUpdate");
            this.scrollWheel = new ScrollWheel(this);
            if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
                this.currIndex = 0;
            }
            if (!this.gestures.supportsTouch) {
                this.mouseDetected();
            }
            this.updateSize();
            this.offset.y = window.pageYOffset;
            this._initialItemData = this.getItemData(this.currIndex);
            this.dispatch("gettingData", {
                index: this.currIndex,
                data: this._initialItemData,
                slide: void 0
            });
            this._initialThumbBounds = this.getThumbBounds();
            this.dispatch("initialLayout");
            this.on("openingAnimationEnd", () => {
                const {
                    itemHolders
                } = this.mainScroll;
                if (itemHolders[0]) {
                    itemHolders[0].el.style.display = "block";
                    this.setContent(itemHolders[0], this.currIndex - 1);
                }
                if (itemHolders[2]) {
                    itemHolders[2].el.style.display = "block";
                    this.setContent(itemHolders[2], this.currIndex + 1);
                }
                this.appendHeavy();
                this.contentLoader.updateLazy();
                this.events.add(window, "resize", this._handlePageResize.bind(this));
                this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
                this.dispatch("bindEvents");
            });
            if (this.mainScroll.itemHolders[1]) {
                this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
            }
            this.dispatch("change");
            this.opener.open();
            this.dispatch("afterInit");
            return true;
        }
        /**
         * Get looped slide index
         * (for example, -1 will return the last slide)
         *
         * @param {number} index
         * @returns {number}
         */
        getLoopedIndex(index) {
            const numSlides = this.getNumItems();
            if (this.options.loop) {
                if (index > numSlides - 1) {
                    index -= numSlides;
                }
                if (index < 0) {
                    index += numSlides;
                }
            }
            return clamp(index, 0, numSlides - 1);
        }
        appendHeavy() {
            this.mainScroll.itemHolders.forEach((itemHolder) => {
                var _itemHolder$slide;
                (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.appendHeavy();
            });
        }
        /**
         * Change the slide
         * @param {number} index New index
         */
        goTo(index) {
            this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
        }
        /**
         * Go to the next slide.
         */
        next() {
            this.goTo(this.potentialIndex + 1);
        }
        /**
         * Go to the previous slide.
         */
        prev() {
            this.goTo(this.potentialIndex - 1);
        }
        /**
         * @see slide/slide.js zoomTo
         *
         * @param {Parameters<Slide['zoomTo']>} args
         */
        zoomTo(...args) {
            var _this$currSlide;
            (_this$currSlide = this.currSlide) === null || _this$currSlide === void 0 || _this$currSlide.zoomTo(...args);
        }
        /**
         * @see slide/slide.js toggleZoom
         */
        toggleZoom() {
            var _this$currSlide2;
            (_this$currSlide2 = this.currSlide) === null || _this$currSlide2 === void 0 || _this$currSlide2.toggleZoom();
        }
        /**
         * Close the gallery.
         * After closing transition ends - destroy it
         */
        close() {
            if (!this.opener.isOpen || this.isDestroying) {
                return;
            }
            this.isDestroying = true;
            this.dispatch("close");
            this.events.removeAll();
            this.opener.close();
        }
        /**
         * Destroys the gallery:
         * - instantly closes the gallery
         * - unbinds events,
         * - cleans intervals and timeouts
         * - removes elements from DOM
         */
        destroy() {
            var _this$element;
            if (!this.isDestroying) {
                this.options.showHideAnimationType = "none";
                this.close();
                return;
            }
            this.dispatch("destroy");
            this._listeners = {};
            if (this.scrollWrap) {
                this.scrollWrap.ontouchmove = null;
                this.scrollWrap.ontouchend = null;
            }
            (_this$element = this.element) === null || _this$element === void 0 || _this$element.remove();
            this.mainScroll.itemHolders.forEach((itemHolder) => {
                var _itemHolder$slide2;
                (_itemHolder$slide2 = itemHolder.slide) === null || _itemHolder$slide2 === void 0 || _itemHolder$slide2.destroy();
            });
            this.contentLoader.destroy();
            this.events.removeAll();
        }
        /**
         * Refresh/reload content of a slide by its index
         *
         * @param {number} slideIndex
         */
        refreshSlideContent(slideIndex) {
            this.contentLoader.removeByIndex(slideIndex);
            this.mainScroll.itemHolders.forEach((itemHolder, i6) => {
                var _this$currSlide$index, _this$currSlide3;
                let potentialHolderIndex = ((_this$currSlide$index = (_this$currSlide3 = this.currSlide) === null || _this$currSlide3 === void 0 ? void 0 : _this$currSlide3.index) !== null && _this$currSlide$index !== void 0 ? _this$currSlide$index : 0) - 1 + i6;
                if (this.canLoop()) {
                    potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
                }
                if (potentialHolderIndex === slideIndex) {
                    this.setContent(itemHolder, slideIndex, true);
                    if (i6 === 1) {
                        var _itemHolder$slide3;
                        this.currSlide = itemHolder.slide;
                        (_itemHolder$slide3 = itemHolder.slide) === null || _itemHolder$slide3 === void 0 || _itemHolder$slide3.setIsActive(true);
                    }
                }
            });
            this.dispatch("change");
        }
        /**
         * Set slide content
         *
         * @param {ItemHolder} holder mainScroll.itemHolders array item
         * @param {number} index Slide index
         * @param {boolean} [force] If content should be set even if index wasn't changed
         */
        setContent(holder, index, force) {
            if (this.canLoop()) {
                index = this.getLoopedIndex(index);
            }
            if (holder.slide) {
                if (holder.slide.index === index && !force) {
                    return;
                }
                holder.slide.destroy();
                holder.slide = void 0;
            }
            if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
                return;
            }
            const itemData = this.getItemData(index);
            holder.slide = new Slide(itemData, index, this);
            if (index === this.currIndex) {
                this.currSlide = holder.slide;
            }
            holder.slide.append(holder.el);
        }
        /** @returns {Point} */
        getViewportCenterPoint() {
            return {
                x: this.viewportSize.x / 2,
                y: this.viewportSize.y / 2
            };
        }
        /**
         * Update size of all elements.
         * Executed on init and on page resize.
         *
         * @param {boolean} [force] Update size even if size of viewport was not changed.
         */
        updateSize(force) {
            if (this.isDestroying) {
                return;
            }
            const newViewportSize = getViewportSize(this.options, this);
            if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
                return;
            }
            equalizePoints(this._prevViewportSize, newViewportSize);
            this.dispatch("beforeResize");
            equalizePoints(this.viewportSize, this._prevViewportSize);
            this._updatePageScrollOffset();
            this.dispatch("viewportSize");
            this.mainScroll.resize(this.opener.isOpen);
            if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
                this.mouseDetected();
            }
            this.dispatch("resize");
        }
        /**
         * @param {number} opacity
         */
        applyBgOpacity(opacity) {
            this.bgOpacity = Math.max(opacity, 0);
            if (this.bg) {
                this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
            }
        }
        /**
         * Whether mouse is detected
         */
        mouseDetected() {
            if (!this.hasMouse) {
                var _this$element2;
                this.hasMouse = true;
                (_this$element2 = this.element) === null || _this$element2 === void 0 || _this$element2.classList.add("pswp--has_mouse");
            }
        }
        /**
         * Page resize event handler
         *
         * @private
         */
        _handlePageResize() {
            this.updateSize();
            if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
                setTimeout(() => {
                    this.updateSize();
                }, 500);
            }
        }
        /**
         * Page scroll offset is used
         * to get correct coordinates
         * relative to PhotoSwipe viewport.
         *
         * @private
         */
        _updatePageScrollOffset() {
            this.setScrollOffset(0, window.pageYOffset);
        }
        /**
         * @param {number} x
         * @param {number} y
         */
        setScrollOffset(x3, y4) {
            this.offset.x = x3;
            this.offset.y = y4;
            this.dispatch("updateScrollOffset");
        }
        /**
         * Create main HTML structure of PhotoSwipe,
         * and add it to DOM
         *
         * @private
         */
        _createMainStructure() {
            this.element = createElement2("pswp", "div");
            this.element.setAttribute("tabindex", "-1");
            this.element.setAttribute("role", "dialog");
            this.template = this.element;
            this.bg = createElement2("pswp__bg", "div", this.element);
            this.scrollWrap = createElement2("pswp__scroll-wrap", "section", this.element);
            this.container = createElement2("pswp__container", "div", this.scrollWrap);
            this.scrollWrap.setAttribute("aria-roledescription", "carousel");
            this.container.setAttribute("aria-live", "off");
            this.container.setAttribute("id", "pswp__items");
            this.mainScroll.appendHolders();
            this.ui = new UI(this);
            this.ui.init();
            (this.options.appendToEl || document.body).appendChild(this.element);
        }
        /**
         * Get position and dimensions of small thumbnail
         *   {x:,y:,w:}
         *
         * Height is optional (calculated based on the large image)
         *
         * @returns {Bounds | undefined}
         */
        getThumbBounds() {
            return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
        }
        /**
         * If the PhotoSwipe can have continuous loop
         * @returns Boolean
         */
        canLoop() {
            return this.options.loop && this.getNumItems() > 2;
        }
        /**
         * @private
         * @param {PhotoSwipeOptions} options
         * @returns {PreparedPhotoSwipeOptions}
         */
        _prepareOptions(options) {
            if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
                options.showHideAnimationType = "none";
                options.zoomAnimationDuration = 0;
            }
            return __spreadValues(__spreadValues({}, defaultOptions), options);
        }
    };

    // node_modules/photoswipe/dist/photoswipe-lightbox.esm.js
    function createElement3(className, tagName, appendToEl) {
        const el = document.createElement(tagName);
        if (className) {
            el.className = className;
        }
        if (appendToEl) {
            appendToEl.appendChild(el);
        }
        return el;
    }

    function toTransformString2(x3, y4, scale) {
        let propValue = `translate3d(${x3}px,${y4 || 0}px,0)`;
        if (scale !== void 0) {
            propValue += ` scale3d(${scale},${scale},1)`;
        }
        return propValue;
    }

    function setWidthHeight2(el, w4, h5) {
        el.style.width = typeof w4 === "number" ? `${w4}px` : w4;
        el.style.height = typeof h5 === "number" ? `${h5}px` : h5;
    }
    var LOAD_STATE2 = {
        IDLE: "idle",
        LOADING: "loading",
        LOADED: "loaded",
        ERROR: "error"
    };

    function specialKeyUsed2(e5) {
        return "button" in e5 && e5.button === 1 || e5.ctrlKey || e5.metaKey || e5.altKey || e5.shiftKey;
    }

    function getElementsFromOption2(option, legacySelector, parent = document) {
        let elements = [];
        if (option instanceof Element) {
            elements = [option];
        } else if (option instanceof NodeList || Array.isArray(option)) {
            elements = Array.from(option);
        } else {
            const selector = typeof option === "string" ? option : legacySelector;
            if (selector) {
                elements = Array.from(parent.querySelectorAll(selector));
            }
        }
        return elements;
    }

    function isPswpClass(fn) {
        return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
    }

    function isSafari2() {
        return !!(navigator.vendor && navigator.vendor.match(/apple/i));
    }
    var PhotoSwipeEvent2 = class {
        /**
         * @param {T} type
         * @param {PhotoSwipeEventsMap[T]} [details]
         */
        constructor(type, details) {
            this.type = type;
            this.defaultPrevented = false;
            if (details) {
                Object.assign(this, details);
            }
        }
        preventDefault() {
            this.defaultPrevented = true;
        }
    };
    var Eventable2 = class {
        constructor() {
            this._listeners = {};
            this._filters = {};
            this.pswp = void 0;
            this.options = void 0;
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         * @param {number} priority
         */
        addFilter(name, fn, priority = 100) {
            var _this$_filters$name, _this$_filters$name2, _this$pswp;
            if (!this._filters[name]) {
                this._filters[name] = [];
            }
            (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
                fn,
                priority
            });
            (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f22) => f1.priority - f22.priority);
            (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {PhotoSwipeFiltersMap[T]} fn
         */
        removeFilter(name, fn) {
            if (this._filters[name]) {
                this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
            }
            if (this.pswp) {
                this.pswp.removeFilter(name, fn);
            }
        }
        /**
         * @template {keyof PhotoSwipeFiltersMap} T
         * @param {T} name
         * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
         * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
         */
        applyFilters(name, ...args) {
            var _this$_filters$name3;
            (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
                args[0] = filter.fn.apply(this, args);
            });
            return args[0];
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        on(name, fn) {
            var _this$_listeners$name, _this$pswp2;
            if (!this._listeners[name]) {
                this._listeners[name] = [];
            }
            (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
            (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {EventCallback<T>} fn
         */
        off(name, fn) {
            var _this$pswp3;
            if (this._listeners[name]) {
                this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
            }
            (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
        }
        /**
         * @template {keyof PhotoSwipeEventsMap} T
         * @param {T} name
         * @param {PhotoSwipeEventsMap[T]} [details]
         * @returns {AugmentedEvent<T>}
         */
        dispatch(name, details) {
            var _this$_listeners$name2;
            if (this.pswp) {
                return this.pswp.dispatch(name, details);
            }
            const event2 = (
                /** @type {AugmentedEvent<T>} */
                new PhotoSwipeEvent2(name, details)
            );
            (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
                listener.call(this, event2);
            });
            return event2;
        }
    };
    var Placeholder2 = class {
        /**
         * @param {string | false} imageSrc
         * @param {HTMLElement} container
         */
        constructor(imageSrc, container) {
            this.element = createElement3("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
            if (imageSrc) {
                const imgEl = (
                    /** @type {HTMLImageElement} */
                    this.element
                );
                imgEl.decoding = "async";
                imgEl.alt = "";
                imgEl.src = imageSrc;
                imgEl.setAttribute("role", "presentation");
            }
            this.element.setAttribute("aria-hidden", "true");
        }
        /**
         * @param {number} width
         * @param {number} height
         */
        setDisplayedSize(width, height) {
            if (!this.element) {
                return;
            }
            if (this.element.tagName === "IMG") {
                setWidthHeight2(this.element, 250, "auto");
                this.element.style.transformOrigin = "0 0";
                this.element.style.transform = toTransformString2(0, 0, width / 250);
            } else {
                setWidthHeight2(this.element, width, height);
            }
        }
        destroy() {
            var _this$element;
            if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
                this.element.remove();
            }
            this.element = null;
        }
    };
    var Content2 = class {
        /**
         * @param {SlideData} itemData Slide data
         * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
         * @param {number} index
         */
        constructor(itemData, instance, index) {
            this.instance = instance;
            this.data = itemData;
            this.index = index;
            this.element = void 0;
            this.placeholder = void 0;
            this.slide = void 0;
            this.displayedImageWidth = 0;
            this.displayedImageHeight = 0;
            this.width = Number(this.data.w) || Number(this.data.width) || 0;
            this.height = Number(this.data.h) || Number(this.data.height) || 0;
            this.isAttached = false;
            this.hasSlide = false;
            this.isDecoding = false;
            this.state = LOAD_STATE2.IDLE;
            if (this.data.type) {
                this.type = this.data.type;
            } else if (this.data.src) {
                this.type = "image";
            } else {
                this.type = "html";
            }
            this.instance.dispatch("contentInit", {
                content: this
            });
        }
        removePlaceholder() {
            if (this.placeholder && !this.keepPlaceholder()) {
                setTimeout(() => {
                    if (this.placeholder) {
                        this.placeholder.destroy();
                        this.placeholder = void 0;
                    }
                }, 1e3);
            }
        }
        /**
         * Preload content
         *
         * @param {boolean} isLazy
         * @param {boolean} [reload]
         */
        load(isLazy, reload) {
            if (this.slide && this.usePlaceholder()) {
                if (!this.placeholder) {
                    const placeholderSrc = this.instance.applyFilters(
                        "placeholderSrc",
                        // use  image-based placeholder only for the first slide,
                        // as rendering (even small stretched thumbnail) is an expensive operation
                        this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
                        this
                    );
                    this.placeholder = new Placeholder2(placeholderSrc, this.slide.container);
                } else {
                    const placeholderEl = this.placeholder.element;
                    if (placeholderEl && !placeholderEl.parentElement) {
                        this.slide.container.prepend(placeholderEl);
                    }
                }
            }
            if (this.element && !reload) {
                return;
            }
            if (this.instance.dispatch("contentLoad", {
                    content: this,
                    isLazy
                }).defaultPrevented) {
                return;
            }
            if (this.isImageContent()) {
                this.element = createElement3("pswp__img", "img");
                if (this.displayedImageWidth) {
                    this.loadImage(isLazy);
                }
            } else {
                this.element = createElement3("pswp__content", "div");
                this.element.innerHTML = this.data.html || "";
            }
            if (reload && this.slide) {
                this.slide.updateContentSize(true);
            }
        }
        /**
         * Preload image
         *
         * @param {boolean} isLazy
         */
        loadImage(isLazy) {
            var _this$data$src, _this$data$alt;
            if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
                    content: this,
                    isLazy
                }).defaultPrevented) {
                return;
            }
            const imageElement = (
                /** @type HTMLImageElement */
                this.element
            );
            this.updateSrcsetSizes();
            if (this.data.srcset) {
                imageElement.srcset = this.data.srcset;
            }
            imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
            imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
            this.state = LOAD_STATE2.LOADING;
            if (imageElement.complete) {
                this.onLoaded();
            } else {
                imageElement.onload = () => {
                    this.onLoaded();
                };
                imageElement.onerror = () => {
                    this.onError();
                };
            }
        }
        /**
         * Assign slide to content
         *
         * @param {Slide} slide
         */
        setSlide(slide2) {
            this.slide = slide2;
            this.hasSlide = true;
            this.instance = slide2.pswp;
        }
        /**
         * Content load success handler
         */
        onLoaded() {
            this.state = LOAD_STATE2.LOADED;
            if (this.slide && this.element) {
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    content: this
                });
                if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
                    this.append();
                    this.slide.updateContentSize(true);
                }
                if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
                    this.removePlaceholder();
                }
            }
        }
        /**
         * Content load error handler
         */
        onError() {
            this.state = LOAD_STATE2.ERROR;
            if (this.slide) {
                this.displayError();
                this.instance.dispatch("loadComplete", {
                    slide: this.slide,
                    isError: true,
                    content: this
                });
                this.instance.dispatch("loadError", {
                    slide: this.slide,
                    content: this
                });
            }
        }
        /**
         * @returns {Boolean} If the content is currently loading
         */
        isLoading() {
            return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE2.LOADING, this);
        }
        /**
         * @returns {Boolean} If the content is in error state
         */
        isError() {
            return this.state === LOAD_STATE2.ERROR;
        }
        /**
         * @returns {boolean} If the content is image
         */
        isImageContent() {
            return this.type === "image";
        }
        /**
         * Update content size
         *
         * @param {Number} width
         * @param {Number} height
         */
        setDisplayedSize(width, height) {
            if (!this.element) {
                return;
            }
            if (this.placeholder) {
                this.placeholder.setDisplayedSize(width, height);
            }
            if (this.instance.dispatch("contentResize", {
                    content: this,
                    width,
                    height
                }).defaultPrevented) {
                return;
            }
            setWidthHeight2(this.element, width, height);
            if (this.isImageContent() && !this.isError()) {
                const isInitialSizeUpdate = !this.displayedImageWidth && width;
                this.displayedImageWidth = width;
                this.displayedImageHeight = height;
                if (isInitialSizeUpdate) {
                    this.loadImage(false);
                } else {
                    this.updateSrcsetSizes();
                }
                if (this.slide) {
                    this.instance.dispatch("imageSizeChange", {
                        slide: this.slide,
                        width,
                        height,
                        content: this
                    });
                }
            }
        }
        /**
         * @returns {boolean} If the content can be zoomed
         */
        isZoomable() {
            return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE2.ERROR, this);
        }
        /**
         * Update image srcset sizes attribute based on width and height
         */
        updateSrcsetSizes() {
            if (!this.isImageContent() || !this.element || !this.data.srcset) {
                return;
            }
            const image = (
                /** @type HTMLImageElement */
                this.element
            );
            const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
            if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
                image.sizes = sizesWidth + "px";
                image.dataset.largestUsedSize = String(sizesWidth);
            }
        }
        /**
         * @returns {boolean} If content should use a placeholder (from msrc by default)
         */
        usePlaceholder() {
            return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
        }
        /**
         * Preload content with lazy-loading param
         */
        lazyLoad() {
            if (this.instance.dispatch("contentLazyLoad", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            this.load(true);
        }
        /**
         * @returns {boolean} If placeholder should be kept after content is loaded
         */
        keepPlaceholder() {
            return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
        }
        /**
         * Destroy the content
         */
        destroy() {
            this.hasSlide = false;
            this.slide = void 0;
            if (this.instance.dispatch("contentDestroy", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            this.remove();
            if (this.placeholder) {
                this.placeholder.destroy();
                this.placeholder = void 0;
            }
            if (this.isImageContent() && this.element) {
                this.element.onload = null;
                this.element.onerror = null;
                this.element = void 0;
            }
        }
        /**
         * Display error message
         */
        displayError() {
            if (this.slide) {
                var _this$instance$option, _this$instance$option2;
                let errorMsgEl = createElement3("pswp__error-msg", "div");
                errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
                errorMsgEl = /** @type {HTMLDivElement} */
                    this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
                this.element = createElement3("pswp__content pswp__error-msg-container", "div");
                this.element.appendChild(errorMsgEl);
                this.slide.container.innerText = "";
                this.slide.container.appendChild(this.element);
                this.slide.updateContentSize(true);
                this.removePlaceholder();
            }
        }
        /**
         * Append the content
         */
        append() {
            if (this.isAttached || !this.element) {
                return;
            }
            this.isAttached = true;
            if (this.state === LOAD_STATE2.ERROR) {
                this.displayError();
                return;
            }
            if (this.instance.dispatch("contentAppend", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            const supportsDecode = "decode" in this.element;
            if (this.isImageContent()) {
                if (supportsDecode && this.slide && (!this.slide.isActive || isSafari2())) {
                    this.isDecoding = true;
                    this.element.decode().catch(() => {}).finally(() => {
                        this.isDecoding = false;
                        this.appendImage();
                    });
                } else {
                    this.appendImage();
                }
            } else if (this.slide && !this.element.parentNode) {
                this.slide.container.appendChild(this.element);
            }
        }
        /**
         * Activate the slide,
         * active slide is generally the current one,
         * meaning the user can see it.
         */
        activate() {
            if (this.instance.dispatch("contentActivate", {
                    content: this
                }).defaultPrevented || !this.slide) {
                return;
            }
            if (this.isImageContent() && this.isDecoding && !isSafari2()) {
                this.appendImage();
            } else if (this.isError()) {
                this.load(false, true);
            }
            if (this.slide.holderElement) {
                this.slide.holderElement.setAttribute("aria-hidden", "false");
            }
        }
        /**
         * Deactivate the content
         */
        deactivate() {
            this.instance.dispatch("contentDeactivate", {
                content: this
            });
            if (this.slide && this.slide.holderElement) {
                this.slide.holderElement.setAttribute("aria-hidden", "true");
            }
        }
        /**
         * Remove the content from DOM
         */
        remove() {
            this.isAttached = false;
            if (this.instance.dispatch("contentRemove", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            if (this.element && this.element.parentNode) {
                this.element.remove();
            }
            if (this.placeholder && this.placeholder.element) {
                this.placeholder.element.remove();
            }
        }
        /**
         * Append the image content to slide container
         */
        appendImage() {
            if (!this.isAttached) {
                return;
            }
            if (this.instance.dispatch("contentAppendImage", {
                    content: this
                }).defaultPrevented) {
                return;
            }
            if (this.slide && this.element && !this.element.parentNode) {
                this.slide.container.appendChild(this.element);
            }
            if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
                this.removePlaceholder();
            }
        }
    };

    function getViewportSize2(options, pswp) {
        if (options.getViewportSizeFn) {
            const newViewportSize = options.getViewportSizeFn(options, pswp);
            if (newViewportSize) {
                return newViewportSize;
            }
        }
        return {
            x: document.documentElement.clientWidth,
            // TODO: height on mobile is very incosistent due to toolbar
            // find a way to improve this
            //
            // document.documentElement.clientHeight - doesn't seem to work well
            y: window.innerHeight
        };
    }

    function parsePaddingOption2(prop, options, viewportSize, itemData, index) {
        let paddingValue = 0;
        if (options.paddingFn) {
            paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
        } else if (options.padding) {
            paddingValue = options.padding[prop];
        } else {
            const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
            if (options[legacyPropName]) {
                paddingValue = options[legacyPropName];
            }
        }
        return Number(paddingValue) || 0;
    }

    function getPanAreaSize2(options, viewportSize, itemData, index) {
        return {
            x: viewportSize.x - parsePaddingOption2("left", options, viewportSize, itemData, index) - parsePaddingOption2("right", options, viewportSize, itemData, index),
            y: viewportSize.y - parsePaddingOption2("top", options, viewportSize, itemData, index) - parsePaddingOption2("bottom", options, viewportSize, itemData, index)
        };
    }
    var MAX_IMAGE_WIDTH2 = 4e3;
    var ZoomLevel2 = class {
        /**
         * @param {PhotoSwipeOptions} options PhotoSwipe options
         * @param {SlideData} itemData Slide data
         * @param {number} index Slide index
         * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
         */
        constructor(options, itemData, index, pswp) {
            this.pswp = pswp;
            this.options = options;
            this.itemData = itemData;
            this.index = index;
            this.panAreaSize = null;
            this.elementSize = null;
            this.fit = 1;
            this.fill = 1;
            this.vFill = 1;
            this.initial = 1;
            this.secondary = 1;
            this.max = 1;
            this.min = 1;
        }
        /**
         * Calculate initial, secondary and maximum zoom level for the specified slide.
         *
         * It should be called when either image or viewport size changes.
         *
         * @param {number} maxWidth
         * @param {number} maxHeight
         * @param {Point} panAreaSize
         */
        update(maxWidth, maxHeight, panAreaSize) {
            const elementSize = {
                x: maxWidth,
                y: maxHeight
            };
            this.elementSize = elementSize;
            this.panAreaSize = panAreaSize;
            const hRatio = panAreaSize.x / elementSize.x;
            const vRatio = panAreaSize.y / elementSize.y;
            this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
            this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
            this.vFill = Math.min(1, vRatio);
            this.initial = this._getInitial();
            this.secondary = this._getSecondary();
            this.max = Math.max(this.initial, this.secondary, this._getMax());
            this.min = Math.min(this.fit, this.initial, this.secondary);
            if (this.pswp) {
                this.pswp.dispatch("zoomLevelsUpdate", {
                    zoomLevels: this,
                    slideData: this.itemData
                });
            }
        }
        /**
         * Parses user-defined zoom option.
         *
         * @private
         * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
         * @returns { number | undefined }
         */
        _parseZoomLevelOption(optionPrefix) {
            const optionName = (
                /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
                optionPrefix + "ZoomLevel"
            );
            const optionValue = this.options[optionName];
            if (!optionValue) {
                return;
            }
            if (typeof optionValue === "function") {
                return optionValue(this);
            }
            if (optionValue === "fill") {
                return this.fill;
            }
            if (optionValue === "fit") {
                return this.fit;
            }
            return Number(optionValue);
        }
        /**
         * Get zoom level to which image will be zoomed after double-tap gesture,
         * or when user clicks on zoom icon,
         * or mouse-click on image itself.
         * If you return 1 image will be zoomed to its original size.
         *
         * @private
         * @return {number}
         */
        _getSecondary() {
            let currZoomLevel = this._parseZoomLevelOption("secondary");
            if (currZoomLevel) {
                return currZoomLevel;
            }
            currZoomLevel = Math.min(1, this.fit * 3);
            if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH2) {
                currZoomLevel = MAX_IMAGE_WIDTH2 / this.elementSize.x;
            }
            return currZoomLevel;
        }
        /**
         * Get initial image zoom level.
         *
         * @private
         * @return {number}
         */
        _getInitial() {
            return this._parseZoomLevelOption("initial") || this.fit;
        }
        /**
         * Maximum zoom level when user zooms
         * via zoom/pinch gesture,
         * via cmd/ctrl-wheel or via trackpad.
         *
         * @private
         * @return {number}
         */
        _getMax() {
            return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
        }
    };

    function lazyLoadData2(itemData, instance, index) {
        const content = instance.createContentFromData(itemData, index);
        let zoomLevel;
        const {
            options
        } = instance;
        if (options) {
            zoomLevel = new ZoomLevel2(options, itemData, -1);
            let viewportSize;
            if (instance.pswp) {
                viewportSize = instance.pswp.viewportSize;
            } else {
                viewportSize = getViewportSize2(options, instance);
            }
            const panAreaSize = getPanAreaSize2(options, viewportSize, itemData, index);
            zoomLevel.update(content.width, content.height, panAreaSize);
        }
        content.lazyLoad();
        if (zoomLevel) {
            content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
        }
        return content;
    }

    function lazyLoadSlide2(index, instance) {
        const itemData = instance.getItemData(index);
        if (instance.dispatch("lazyLoadSlide", {
                index,
                itemData
            }).defaultPrevented) {
            return;
        }
        return lazyLoadData2(itemData, instance, index);
    }
    var PhotoSwipeBase2 = class extends Eventable2 {
        /**
         * Get total number of slides
         *
         * @returns {number}
         */
        getNumItems() {
            var _this$options;
            let numItems = 0;
            const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
            if (dataSource && "length" in dataSource) {
                numItems = dataSource.length;
            } else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) {
                    dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                }
                if (dataSource.items) {
                    numItems = dataSource.items.length;
                }
            }
            const event2 = this.dispatch("numItems", {
                dataSource,
                numItems
            });
            return this.applyFilters("numItems", event2.numItems, dataSource);
        }
        /**
         * @param {SlideData} slideData
         * @param {number} index
         * @returns {Content}
         */
        createContentFromData(slideData, index) {
            return new Content2(slideData, this, index);
        }
        /**
         * Get item data by index.
         *
         * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
         * For example, it may contain properties like
         * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
         *
         * @param {number} index
         * @returns {SlideData}
         */
        getItemData(index) {
            var _this$options2;
            const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
            let dataSourceItem = {};
            if (Array.isArray(dataSource)) {
                dataSourceItem = dataSource[index];
            } else if (dataSource && "gallery" in dataSource) {
                if (!dataSource.items) {
                    dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
                }
                dataSourceItem = dataSource.items[index];
            }
            let itemData = dataSourceItem;
            if (itemData instanceof Element) {
                itemData = this._domElementToItemData(itemData);
            }
            const event2 = this.dispatch("itemData", {
                itemData: itemData || {},
                index
            });
            return this.applyFilters("itemData", event2.itemData, index);
        }
        /**
         * Get array of gallery DOM elements,
         * based on childSelector and gallery element.
         *
         * @param {HTMLElement} galleryElement
         * @returns {HTMLElement[]}
         */
        _getGalleryDOMElements(galleryElement) {
            var _this$options3, _this$options4;
            if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
                return getElementsFromOption2(this.options.children, this.options.childSelector, galleryElement) || [];
            }
            return [galleryElement];
        }
        /**
         * Converts DOM element to item data object.
         *
         * @param {HTMLElement} element DOM element
         * @returns {SlideData}
         */
        _domElementToItemData(element) {
            const itemData = {
                element
            };
            const linkEl = (
                /** @type {HTMLAnchorElement} */
                element.tagName === "A" ? element : element.querySelector("a")
            );
            if (linkEl) {
                itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
                if (linkEl.dataset.pswpSrcset) {
                    itemData.srcset = linkEl.dataset.pswpSrcset;
                }
                itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
                itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
                itemData.w = itemData.width;
                itemData.h = itemData.height;
                if (linkEl.dataset.pswpType) {
                    itemData.type = linkEl.dataset.pswpType;
                }
                const thumbnailEl = element.querySelector("img");
                if (thumbnailEl) {
                    var _thumbnailEl$getAttri;
                    itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
                    itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
                }
                if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
                    itemData.thumbCropped = true;
                }
            }
            return this.applyFilters("domItemData", itemData, element, linkEl);
        }
        /**
         * Lazy-load by slide data
         *
         * @param {SlideData} itemData Data about the slide
         * @param {number} index
         * @returns {Content} Image that is being decoded or false.
         */
        lazyLoadData(itemData, index) {
            return lazyLoadData2(itemData, this, index);
        }
    };
    var PhotoSwipeLightbox = class extends PhotoSwipeBase2 {
        /**
         * @param {PhotoSwipeOptions} [options]
         */
        constructor(options) {
            super();
            this.options = options || {};
            this._uid = 0;
            this.shouldOpen = false;
            this._preloadedContent = void 0;
            this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
        }
        /**
         * Initialize lightbox, should be called only once.
         * It's not included in the main constructor, so you may bind events before it.
         */
        init() {
            getElementsFromOption2(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
                galleryElement.addEventListener("click", this.onThumbnailsClick, false);
            });
        }
        /**
         * @param {MouseEvent} e
         */
        onThumbnailsClick(e5) {
            if (specialKeyUsed2(e5) || window.pswp) {
                return;
            }
            let initialPoint = {
                x: e5.clientX,
                y: e5.clientY
            };
            if (!initialPoint.x && !initialPoint.y) {
                initialPoint = null;
            }
            let clickedIndex = this.getClickedIndex(e5);
            clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e5, this);
            const dataSource = {
                gallery: (
                    /** @type {HTMLElement} */
                    e5.currentTarget
                )
            };
            if (clickedIndex >= 0) {
                e5.preventDefault();
                this.loadAndOpen(clickedIndex, dataSource, initialPoint);
            }
        }
        /**
         * Get index of gallery item that was clicked.
         *
         * @param {MouseEvent} e click event
         * @returns {number}
         */
        getClickedIndex(e5) {
            if (this.options.getClickedIndexFn) {
                return this.options.getClickedIndexFn.call(this, e5);
            }
            const clickedTarget = (
                /** @type {HTMLElement} */
                e5.target
            );
            const childElements = getElementsFromOption2(
                this.options.children,
                this.options.childSelector,
                /** @type {HTMLElement} */
                e5.currentTarget
            );
            const clickedChildIndex = childElements.findIndex((child) => child === clickedTarget || child.contains(clickedTarget));
            if (clickedChildIndex !== -1) {
                return clickedChildIndex;
            } else if (this.options.children || this.options.childSelector) {
                return -1;
            }
            return 0;
        }
        /**
         * Load and open PhotoSwipe
         *
         * @param {number} index
         * @param {DataSource} [dataSource]
         * @param {Point | null} [initialPoint]
         * @returns {boolean}
         */
        loadAndOpen(index, dataSource, initialPoint) {
            if (window.pswp || !this.options) {
                return false;
            }
            if (!dataSource && this.options.gallery && this.options.children) {
                const galleryElements = getElementsFromOption2(this.options.gallery);
                if (galleryElements[0]) {
                    dataSource = {
                        gallery: galleryElements[0]
                    };
                }
            }
            this.options.index = index;
            this.options.initialPointerPos = initialPoint;
            this.shouldOpen = true;
            this.preload(index, dataSource);
            return true;
        }
        /**
         * Load the main module and the slide content by index
         *
         * @param {number} index
         * @param {DataSource} [dataSource]
         */
        preload(index, dataSource) {
            const {
                options
            } = this;
            if (dataSource) {
                options.dataSource = dataSource;
            }
            const promiseArray = [];
            const pswpModuleType = typeof options.pswpModule;
            if (isPswpClass(options.pswpModule)) {
                promiseArray.push(Promise.resolve(
                    /** @type {Type<PhotoSwipe>} */
                    options.pswpModule
                ));
            } else if (pswpModuleType === "string") {
                throw new Error("pswpModule as string is no longer supported");
            } else if (pswpModuleType === "function") {
                promiseArray.push(
                    /** @type {() => Promise<Type<PhotoSwipe>>} */
                    options.pswpModule()
                );
            } else {
                throw new Error("pswpModule is not valid");
            }
            if (typeof options.openPromise === "function") {
                promiseArray.push(options.openPromise());
            }
            if (options.preloadFirstSlide !== false && index >= 0) {
                this._preloadedContent = lazyLoadSlide2(index, this);
            }
            const uid = ++this._uid;
            Promise.all(promiseArray).then((iterableModules) => {
                if (this.shouldOpen) {
                    const mainModule = iterableModules[0];
                    this._openPhotoswipe(mainModule, uid);
                }
            });
        }
        /**
         * @private
         * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
         * @param {number} uid
         */
        _openPhotoswipe(module, uid) {
            if (uid !== this._uid && this.shouldOpen) {
                return;
            }
            this.shouldOpen = false;
            if (window.pswp) {
                return;
            }
            const pswp = typeof module === "object" ? new module.default(this.options) : new module(this.options);
            this.pswp = pswp;
            window.pswp = pswp;
            Object.keys(this._listeners).forEach((name) => {
                var _this$_listeners$name;
                (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach((fn) => {
                    pswp.on(
                        name,
                        /** @type {EventCallback<typeof name>} */
                        fn
                    );
                });
            });
            Object.keys(this._filters).forEach((name) => {
                var _this$_filters$name;
                (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach((filter) => {
                    pswp.addFilter(name, filter.fn, filter.priority);
                });
            });
            if (this._preloadedContent) {
                pswp.contentLoader.addToCache(this._preloadedContent);
                this._preloadedContent = void 0;
            }
            pswp.on("destroy", () => {
                this.pswp = void 0;
                delete window.pswp;
            });
            pswp.init();
        }
        /**
         * Unbinds all events, closes PhotoSwipe if it's open.
         */
        destroy() {
            var _this$pswp;
            (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
            this.shouldOpen = false;
            this._listeners = {};
            getElementsFromOption2(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
                galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
            });
        }
    };

    // assets/scripts/modules/Photoswipe.js
    var Photoswipe_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$el = this.el;
        }
        init() {
            this.lightbox = new PhotoSwipeLightbox({
                // Core
                gallery: this.$el,
                children: "a",
                pswpModule: PhotoSwipe,
                // Styles
                arrowPrevSVG: this.getButton("arrow-left", "Image pr\xE9c\xE9dente"),
                arrowNextSVG: this.getButton("arrow-right", "Image suivante"),
                closeSVG: this.getButton("close", "Fermer"),
                zoomSVG: "",
                padding: {
                    top: 60,
                    bottom: 40,
                    left: 80,
                    right: 80
                }
            });
            this.lightbox.init();
        }
        getButton(icon = "", label = "") {
            return `
            <span class="c-button -primary -circle -hidden-label">
                <span class="c-button_inner">
                    <span class="c-button_label-container">
                        <span class="c-button_label">
                            ${label}
                        </span>
                        <span class="c-button_label" aria-hidden="true">
                            ${label}
                        </span>
                    </span>
                    <span class="c-button_icon | o-icon">
                        <svg class="svg-${icon}" focusable="false" aria-hidden="true">
                            <use xlink:href="assets/images/sprite.svg#${icon}"></use>
                        </svg>
                    </span>
                </span>
            </span>
        `;
        }
        destroy() {
            super.destroy();
            this.lightbox.destroy();
        }
    };

    // assets/scripts/utils/image.js
    var getImageMetadata = ($img) => ({
        url: $img.src,
        width: $img.naturalWidth,
        height: $img.naturalHeight,
        ratio: $img.naturalWidth / $img.naturalHeight
    });
    var loadImage = (url, options = {}) => {
        return new Promise((resolve, reject) => {
            const $img = new Image();
            if (options.crossOrigin) {
                $img.crossOrigin = options.crossOrigin;
            }
            const loadCallback = () => {
                resolve(__spreadValues({
                    element: $img
                }, getImageMetadata($img)));
            };
            if ($img.decode) {
                $img.src = url;
                $img.decode().then(loadCallback).catch((e5) => {
                    reject(e5);
                });
            } else {
                $img.onload = loadCallback;
                $img.onerror = (e5) => {
                    reject(e5);
                };
                $img.src = url;
            }
        });
    };
    var LAZY_LOADED_IMAGES = [];
    var lazyLoadImage = ($el, url, callback) => __async(void 0, null, function*() {
        let src = url ? url : $el.dataset.src;
        let loadedImage = LAZY_LOADED_IMAGES.find((image) => image.url === src);
        if (!loadedImage) {
            loadedImage = yield loadImage(src);
            if (!loadedImage.url) {
                return;
            }
            LAZY_LOADED_IMAGES.push(loadedImage);
        }
        if ($el.src === src) {
            return;
        }
        if ($el.tagName === "IMG") {
            $el.src = loadedImage.url;
        } else {
            $el.style.backgroundImage = `url(${loadedImage.url})`;
        }
        requestAnimationFrame(() => {
            let lazyParent = $el.closest(`.${CSS_CLASS.LAZY_CONTAINER}`);
            if (lazyParent) {
                lazyParent.classList.add(CSS_CLASS.LAZY_LOADED);
                lazyParent.style.backgroundImage = "";
            }
            $el.classList.add(CSS_CLASS.LAZY_LOADED);
            callback == null ? void 0 : callback();
        });
    });

    // node_modules/@studio-freight/lenis/dist/lenis.modern.mjs
    function t2() {
        return t2 = Object.assign ? Object.assign.bind() : function(t3) {
            for (var e5 = 1; e5 < arguments.length; e5++) {
                var i6 = arguments[e5];
                for (var s6 in i6)
                    Object.prototype.hasOwnProperty.call(i6, s6) && (t3[s6] = i6[s6]);
            }
            return t3;
        }, t2.apply(this, arguments);
    }

    function e3(t3, e5, i6) {
        return Math.max(t3, Math.min(e5, i6));
    }
    var i4 = class {
        advance(t3) {
            var i6;
            if (!this.isRunning)
                return;
            let s6 = false;
            if (this.lerp)
                this.value = (o6 = this.value, n6 = this.to, (1 - (l6 = 1 - Math.exp(-60 * this.lerp * t3))) * o6 + l6 * n6), Math.round(this.value) === this.to && (this.value = this.to, s6 = true);
            else {
                this.currentTime += t3;
                const i7 = e3(0, this.currentTime / this.duration, 1);
                s6 = i7 >= 1;
                const o7 = s6 ? 1 : this.easing(i7);
                this.value = this.from + (this.to - this.from) * o7;
            }
            var o6, n6, l6;
            null == (i6 = this.onUpdate) || i6.call(this, this.value, s6), s6 && this.stop();
        }
        stop() {
            this.isRunning = false;
        }
        fromTo(t3, e5, {
            lerp: i6 = 0.1,
            duration: s6 = 1,
            easing: o6 = (t4) => t4,
            onStart: n6,
            onUpdate: l6
        }) {
            this.from = this.value = t3, this.to = e5, this.lerp = i6, this.duration = s6, this.easing = o6, this.currentTime = 0, this.isRunning = true, null == n6 || n6(), this.onUpdate = l6;
        }
    };
    var s4 = class {
        constructor({
            wrapper: t3,
            content: e5,
            autoResize: i6 = true
        } = {}) {
            if (this.resize = () => {
                    this.onWrapperResize(), this.onContentResize();
                }, this.onWrapperResize = () => {
                    this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
                }, this.onContentResize = () => {
                    this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth;
                }, this.wrapper = t3, this.content = e5, i6) {
                const t4 = /* @__PURE__ */ function(t5, e6) {
                    let i7;
                    return function() {
                        let e7 = arguments,
                            s6 = this;
                        clearTimeout(i7), i7 = setTimeout(function() {
                            t5.apply(s6, e7);
                        }, 250);
                    };
                }(this.resize);
                this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t4), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(t4), this.contentResizeObserver.observe(this.content);
            }
            this.resize();
        }
        destroy() {
            var t3, e5;
            null == (t3 = this.wrapperResizeObserver) || t3.disconnect(), null == (e5 = this.contentResizeObserver) || e5.disconnect();
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            };
        }
    };
    var o4 = class {
        constructor() {
            this.events = {};
        }
        emit(t3, ...e5) {
            let i6 = this.events[t3] || [];
            for (let t4 = 0, s6 = i6.length; t4 < s6; t4++)
                i6[t4](...e5);
        }
        on(t3, e5) {
            var i6;
            return (null == (i6 = this.events[t3]) ? void 0 : i6.push(e5)) || (this.events[t3] = [e5]), () => {
                var i7;
                this.events[t3] = null == (i7 = this.events[t3]) ? void 0 : i7.filter((t4) => e5 !== t4);
            };
        }
        off(t3, e5) {
            var i6;
            this.events[t3] = null == (i6 = this.events[t3]) ? void 0 : i6.filter((t4) => e5 !== t4);
        }
        destroy() {
            this.events = {};
        }
    };
    var n4 = class {
        constructor(t3, {
            wheelMultiplier: i6 = 1,
            touchMultiplier: s6 = 2,
            normalizeWheel: n6 = false
        }) {
            this.onTouchStart = (t4) => {
                const {
                    clientX: e5,
                    clientY: i7
                } = t4.targetTouches ? t4.targetTouches[0] : t4;
                this.touchStart.x = e5, this.touchStart.y = i7, this.lastDelta = {
                    x: 0,
                    y: 0
                };
            }, this.onTouchMove = (t4) => {
                const {
                    clientX: e5,
                    clientY: i7
                } = t4.targetTouches ? t4.targetTouches[0] : t4, s7 = -(e5 - this.touchStart.x) * this.touchMultiplier, o6 = -(i7 - this.touchStart.y) * this.touchMultiplier;
                this.touchStart.x = e5, this.touchStart.y = i7, this.lastDelta = {
                    x: s7,
                    y: o6
                }, this.emitter.emit("scroll", {
                    deltaX: s7,
                    deltaY: o6,
                    event: t4
                });
            }, this.onTouchEnd = (t4) => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: t4
                });
            }, this.onWheel = (t4) => {
                let {
                    deltaX: i7,
                    deltaY: s7
                } = t4;
                this.normalizeWheel && (i7 = e3(-100, i7, 100), s7 = e3(-100, s7, 100)), i7 *= this.wheelMultiplier, s7 *= this.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: i7,
                    deltaY: s7,
                    event: t4
                });
            }, this.element = t3, this.wheelMultiplier = i6, this.touchMultiplier = s6, this.normalizeWheel = n6, this.touchStart = {
                x: null,
                y: null
            }, this.emitter = new o4(), this.element.addEventListener("wheel", this.onWheel, {
                passive: false
            }), this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: false
            }), this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: false
            }), this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: false
            });
        }
        on(t3, e5) {
            return this.emitter.on(t3, e5);
        }
        destroy() {
            this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, {
                passive: false
            }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: false
            }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: false
            }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: false
            });
        }
    };
    var l4 = class {
        constructor({
            wrapper: e5 = window,
            content: l6 = document.documentElement,
            wheelEventsTarget: r5 = e5,
            eventsTarget: h5 = r5,
            smoothWheel: a5 = true,
            smoothTouch: c5 = false,
            syncTouch: u4 = false,
            syncTouchLerp: p4 = 0.1,
            __iosNoInertiaSyncTouchLerp: d4 = 0.4,
            touchInertiaMultiplier: m4 = 35,
            duration: v3,
            easing: g4 = (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3)),
            lerp: S4 = !v3 && 0.1,
            infinite: w4 = false,
            orientation: f4 = "vertical",
            gestureOrientation: y4 = "vertical",
            touchMultiplier: T3 = 1,
            wheelMultiplier: z2 = 1,
            normalizeWheel: _4 = false,
            autoResize: M3 = true
        } = {}) {
            this.onVirtualScroll = ({
                deltaX: e6,
                deltaY: i6,
                event: s6
            }) => {
                if (s6.ctrlKey)
                    return;
                const o6 = s6.type.includes("touch"),
                    n6 = s6.type.includes("wheel");
                if ("both" === this.options.gestureOrientation && 0 === e6 && 0 === i6 || "vertical" === this.options.gestureOrientation && 0 === i6 || "horizontal" === this.options.gestureOrientation && 0 === e6 || o6 && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && i6 <= 0)
                    return;
                let l7 = s6.composedPath();
                if (l7 = l7.slice(0, l7.indexOf(this.rootElement)), l7.find((t3) => {
                        var e7;
                        return (null == t3.hasAttribute ? void 0 : t3.hasAttribute("data-lenis-prevent")) || o6 && (null == t3.hasAttribute ? void 0 : t3.hasAttribute("data-lenis-prevent-touch")) || n6 && (null == t3.hasAttribute ? void 0 : t3.hasAttribute("data-lenis-prevent-wheel")) || (null == (e7 = t3.classList) ? void 0 : e7.contains("lenis"));
                    }))
                    return;
                if (this.isStopped || this.isLocked)
                    return void s6.preventDefault();
                if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && o6 || this.options.smoothWheel && n6, !this.isSmooth)
                    return this.isScrolling = false, void this.animate.stop();
                s6.preventDefault();
                let r6 = i6;
                "both" === this.options.gestureOrientation ? r6 = Math.abs(i6) > Math.abs(e6) ? i6 : e6 : "horizontal" === this.options.gestureOrientation && (r6 = e6);
                const h6 = o6 && this.options.syncTouch,
                    a6 = o6 && "touchend" === s6.type && Math.abs(r6) > 1;
                a6 && (r6 = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + r6, t2({
                    programmatic: false
                }, h6 && {
                    lerp: a6 ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp
                }));
            }, this.onNativeScroll = () => {
                if (!this.__preventNextScrollEvent && !this.isScrolling) {
                    const t3 = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t3), this.emit();
                }
            }, window.lenisVersion = "1.0.29", e5 !== document.documentElement && e5 !== document.body || (e5 = window), this.options = {
                wrapper: e5,
                content: l6,
                wheelEventsTarget: r5,
                eventsTarget: h5,
                smoothWheel: a5,
                smoothTouch: c5,
                syncTouch: u4,
                syncTouchLerp: p4,
                __iosNoInertiaSyncTouchLerp: d4,
                touchInertiaMultiplier: m4,
                duration: v3,
                easing: g4,
                lerp: S4,
                infinite: w4,
                gestureOrientation: y4,
                orientation: f4,
                touchMultiplier: T3,
                wheelMultiplier: z2,
                normalizeWheel: _4,
                autoResize: M3
            }, this.animate = new i4(), this.emitter = new o4(), this.dimensions = new s4({
                wrapper: e5,
                content: l6,
                autoResize: M3
            }), this.toggleClass("lenis", true), this.velocity = 0, this.isLocked = false, this.isStopped = false, this.isSmooth = u4 || a5 || c5, this.isScrolling = false, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
                passive: false
            }), this.virtualScroll = new n4(h5, {
                touchMultiplier: T3,
                wheelMultiplier: z2,
                normalizeWheel: _4
            }), this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
                passive: false
            }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", false), this.toggleClass("lenis-smooth", false), this.toggleClass("lenis-scrolling", false), this.toggleClass("lenis-stopped", false), this.toggleClass("lenis-locked", false);
        }
        on(t3, e5) {
            return this.emitter.on(t3, e5);
        }
        off(t3, e5) {
            return this.emitter.off(t3, e5);
        }
        setScroll(t3) {
            this.isHorizontal ? this.rootElement.scrollLeft = t3 : this.rootElement.scrollTop = t3;
        }
        resize() {
            this.dimensions.resize();
        }
        emit() {
            this.emitter.emit("scroll", this);
        }
        reset() {
            this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
        }
        start() {
            this.isStopped = false, this.reset();
        }
        stop() {
            this.isStopped = true, this.animate.stop(), this.reset();
        }
        raf(t3) {
            const e5 = t3 - (this.time || t3);
            this.time = t3, this.animate.advance(1e-3 * e5);
        }
        scrollTo(t3, {
            offset: i6 = 0,
            immediate: s6 = false,
            lock: o6 = false,
            duration: n6 = this.options.duration,
            easing: l6 = this.options.easing,
            lerp: r5 = !n6 && this.options.lerp,
            onComplete: h5 = null,
            force: a5 = false,
            programmatic: c5 = true
        } = {}) {
            if (!this.isStopped && !this.isLocked || a5) {
                if (["top", "left", "start"].includes(t3))
                    t3 = 0;
                else if (["bottom", "right", "end"].includes(t3))
                    t3 = this.limit;
                else {
                    var u4;
                    let e5;
                    if ("string" == typeof t3 ? e5 = document.querySelector(t3) : null != (u4 = t3) && u4.nodeType && (e5 = t3), e5) {
                        if (this.options.wrapper !== window) {
                            const t4 = this.options.wrapper.getBoundingClientRect();
                            i6 -= this.isHorizontal ? t4.left : t4.top;
                        }
                        const s7 = e5.getBoundingClientRect();
                        t3 = (this.isHorizontal ? s7.left : s7.top) + this.animatedScroll;
                    }
                }
                if ("number" == typeof t3) {
                    if (t3 += i6, t3 = Math.round(t3), this.options.infinite ? c5 && (this.targetScroll = this.animatedScroll = this.scroll) : t3 = e3(0, t3, this.limit), s6)
                        return this.animatedScroll = this.targetScroll = t3, this.setScroll(this.scroll), this.reset(), void(null == h5 || h5(this));
                    if (!c5) {
                        if (t3 === this.targetScroll)
                            return;
                        this.targetScroll = t3;
                    }
                    this.animate.fromTo(this.animatedScroll, t3, {
                        duration: n6,
                        easing: l6,
                        lerp: r5,
                        onStart: () => {
                            o6 && (this.isLocked = true), this.isScrolling = true;
                        },
                        onUpdate: (t4, e5) => {
                            this.isScrolling = true, this.velocity = t4 - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t4, this.setScroll(this.scroll), c5 && (this.targetScroll = t4), e5 || this.emit(), e5 && (this.reset(), this.emit(), null == h5 || h5(this), this.__preventNextScrollEvent = true, requestAnimationFrame(() => {
                                delete this.__preventNextScrollEvent;
                            }));
                        }
                    });
                }
            }
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
        }
        get limit() {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
            return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
            return this.options.infinite ? (this.animatedScroll % (t3 = this.limit) + t3) % t3 : this.animatedScroll;
            var t3;
        }
        get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
            return this.__isSmooth;
        }
        set isSmooth(t3) {
            this.__isSmooth !== t3 && (this.__isSmooth = t3, this.toggleClass("lenis-smooth", t3));
        }
        get isScrolling() {
            return this.__isScrolling;
        }
        set isScrolling(t3) {
            this.__isScrolling !== t3 && (this.__isScrolling = t3, this.toggleClass("lenis-scrolling", t3));
        }
        get isStopped() {
            return this.__isStopped;
        }
        set isStopped(t3) {
            this.__isStopped !== t3 && (this.__isStopped = t3, this.toggleClass("lenis-stopped", t3));
        }
        get isLocked() {
            return this.__isLocked;
        }
        set isLocked(t3) {
            this.__isLocked !== t3 && (this.__isLocked = t3, this.toggleClass("lenis-locked", t3));
        }
        get className() {
            let t3 = "lenis";
            return this.isStopped && (t3 += " lenis-stopped"), this.isLocked && (t3 += " lenis-locked"), this.isScrolling && (t3 += " lenis-scrolling"), this.isSmooth && (t3 += " lenis-smooth"), t3;
        }
        toggleClass(t3, e5) {
            this.rootElement.classList.toggle(t3, e5), this.emitter.emit("className change", this);
        }
    };

    // node_modules/locomotive-scroll/dist/locomotive-scroll.modern.mjs
    function s5() {
        return s5 = Object.assign ? Object.assign.bind() : function(t3) {
            for (var s6 = 1; s6 < arguments.length; s6++) {
                var e5 = arguments[s6];
                for (var i6 in e5)
                    Object.prototype.hasOwnProperty.call(e5, i6) && (t3[i6] = e5[i6]);
            }
            return t3;
        }, s5.apply(this, arguments);
    }
    var e4 = class {
        constructor({
            scrollElements: t3,
            rootMargin: s6 = "-1px -1px -1px -1px",
            IORaf: e5
        }) {
            this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = t3, this.rootMargin = s6, this.IORaf = e5, this._init();
        }
        _init() {
            this.observer = new IntersectionObserver((t3) => {
                t3.forEach((t4) => {
                    const s6 = this.scrollElements.find((s7) => s7.$el === t4.target);
                    t4.isIntersecting ? (s6 && (s6.isAlreadyIntersected = true), this._setInview(t4)) : s6 && s6.isAlreadyIntersected && this._setOutOfView(t4);
                });
            }, {
                rootMargin: this.rootMargin
            });
            for (const t3 of this.scrollElements)
                this.observe(t3.$el);
        }
        destroy() {
            this.observer.disconnect();
        }
        observe(t3) {
            t3 && this.observer.observe(t3);
        }
        unobserve(t3) {
            t3 && this.observer.unobserve(t3);
        }
        _setInview(t3) {
            const s6 = this.scrollElements.find((s7) => s7.$el === t3.target);
            this.IORaf && (null == s6 || s6.setInteractivityOn()), !this.IORaf && (null == s6 || s6.setInview());
        }
        _setOutOfView(t3) {
            const s6 = this.scrollElements.find((s7) => s7.$el === t3.target);
            this.IORaf && (null == s6 || s6.setInteractivityOff()), !this.IORaf && (null == s6 || s6.setOutOfView()), null != s6 && s6.attributes.scrollRepeat || this.IORaf || this.unobserve(t3.target);
        }
    };

    function i5(t3, s6, e5, i6, r5) {
        return e5 + ((r5 - t3) / (s6 - t3) * (i6 - e5) || 0);
    }

    function r4(t3, s6) {
        return t3.reduce((t4, e5) => Math.abs(e5 - s6) < Math.abs(t4 - s6) ? e5 : t4);
    }
    var l5 = class {
        constructor({
            $el: t3,
            id: s6,
            modularInstance: e5,
            subscribeElementUpdateFn: i6,
            unsubscribeElementUpdateFn: r5,
            needRaf: l6,
            scrollOrientation: n6
        }) {
            var o6, a5, c5, h5, d4;
            this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = t3, this.id = s6, this.needRaf = l6, this.scrollOrientation = n6, this.modularInstance = e5, this.subscribeElementUpdateFn = i6, this.unsubscribeElementUpdateFn = r5, this.attributes = {
                scrollClass: null != (o6 = this.$el.dataset.scrollClass) ? o6 : "is-inview",
                scrollOffset: null != (a5 = this.$el.dataset.scrollOffset) ? a5 : "0,0",
                scrollPosition: null != (c5 = this.$el.dataset.scrollPosition) ? c5 : "start,end",
                scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
                scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
                scrollEventProgress: null != (h5 = this.$el.dataset.scrollEventProgress) ? h5 : null,
                scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
                scrollRepeat: null != this.$el.dataset.scrollRepeat,
                scrollCall: null != (d4 = this.$el.dataset.scrollCall) ? d4 : null,
                scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
                scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
                scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed
            }, this.intersection = {
                start: 0,
                end: 0
            }, this.metrics = {
                offsetStart: 0,
                offsetEnd: 0,
                bcr: {}
            }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = false, this.isInteractive = false, this.isAlreadyIntersected = false, this.isInFold = false, this.isFirstResize = true, this._init();
        }
        _init() {
            this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
        }
        onResize({
            currentScroll: t3
        }) {
            this.currentScroll = t3, this._resize();
        }
        onRender({
            currentScroll: t3,
            smooth: s6
        }) {
            const e5 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
            if (this.currentScroll = t3, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
                if (this.attributes.scrollEnableTouchSpeed || s6) {
                    if (this.isInFold) {
                        const t4 = Math.max(0, this.progress);
                        this.translateValue = t4 * e5 * this.attributes.scrollSpeed * -1;
                    } else {
                        const t4 = i5(0, 1, -1, 1, this.progress);
                        this.translateValue = t4 * e5 * this.attributes.scrollSpeed * -1;
                    }
                    this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`;
                } else
                    this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
        }
        setInview() {
            if (this.isInview)
                return;
            this.isInview = true, this.$el.classList.add(this.attributes.scrollClass);
            const t3 = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("enter", t3);
        }
        setOutOfView() {
            if (!this.isInview || !this.attributes.scrollRepeat)
                return;
            this.isInview = false, this.$el.classList.remove(this.attributes.scrollClass);
            const t3 = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("leave", t3);
        }
        setInteractivityOn() {
            this.isInteractive || (this.isInteractive = true, this.subscribeElementUpdateFn(this));
        }
        setInteractivityOff() {
            this.isInteractive && (this.isInteractive = false, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(r4([0, 1], this.lastProgress)));
        }
        _resize() {
            this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = false, this.isInFold && this.setInview());
        }
        _computeMetrics() {
            const {
                top: t3,
                left: s6,
                height: e5,
                width: i6
            } = this.metrics.bcr, r5 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, l6 = "vertical" === this.scrollOrientation ? e5 : i6;
            this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t3 : s6) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + l6, this.isInFold = this.metrics.offsetStart < r5 && !this.attributes.scrollIgnoreFold;
        }
        _computeIntersection() {
            const t3 = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth,
                s6 = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width,
                e5 = this.attributes.scrollOffset.split(","),
                i6 = null != e5[0] ? e5[0].trim() : "0",
                r5 = null != e5[1] ? e5[1].trim() : "0",
                l6 = this.attributes.scrollPosition.split(",");
            let n6 = null != l6[0] ? l6[0].trim() : "start";
            const o6 = null != l6[1] ? l6[1].trim() : "end",
                a5 = i6.includes("%") ? t3 * parseInt(i6.replace("%", "").trim()) * 0.01 : parseInt(i6),
                c5 = r5.includes("%") ? t3 * parseInt(r5.replace("%", "").trim()) * 0.01 : parseInt(r5);
            switch (this.isInFold && (n6 = "fold"), n6) {
                case "start":
                default:
                    this.intersection.start = this.metrics.offsetStart - t3 + a5;
                    break;
                case "middle":
                    this.intersection.start = this.metrics.offsetStart - t3 + a5 + 0.5 * s6;
                    break;
                case "end":
                    this.intersection.start = this.metrics.offsetStart - t3 + a5 + s6;
                    break;
                case "fold":
                    this.intersection.start = 0;
            }
            switch (o6) {
                case "start":
                    this.intersection.end = this.metrics.offsetStart - c5;
                    break;
                case "middle":
                    this.intersection.end = this.metrics.offsetStart - c5 + 0.5 * s6;
                    break;
                default:
                    this.intersection.end = this.metrics.offsetStart - c5 + s6;
            }
            if (this.intersection.end <= this.intersection.start)
                switch (o6) {
                    case "start":
                    default:
                        this.intersection.end = this.intersection.start + 1;
                        break;
                    case "middle":
                        this.intersection.end = this.intersection.start + 0.5 * s6;
                        break;
                    case "end":
                        this.intersection.end = this.intersection.start + s6;
                }
        }
        _computeProgress(t3) {
            const s6 = null != t3 ? t3 : (e5 = i5(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e5 > 1 ? 1 : e5;
            var e5;
            if (this.progress = s6, s6 != this.lastProgress) {
                if (this.lastProgress = s6, this.attributes.scrollCssProgress && this._setCssProgress(s6), this.attributes.scrollEventProgress && this._setCustomEventProgress(s6), this.attributes.scrollModuleProgress)
                    for (const t4 of this.progressModularModules)
                        this.modularInstance && this.modularInstance.call("onScrollProgress", s6, t4.moduleName, t4.moduleId);
                s6 > 0 && s6 < 1 && this.setInview(), 0 === s6 && this.setOutOfView(), 1 === s6 && this.setOutOfView();
            }
        }
        _setCssProgress(t3 = 0) {
            this.$el.style.setProperty("--progress", t3.toString());
        }
        _setCustomEventProgress(t3 = 0) {
            const s6 = this.attributes.scrollEventProgress;
            if (!s6)
                return;
            const e5 = new CustomEvent(s6, {
                detail: {
                    target: this.$el,
                    progress: t3
                }
            });
            window.dispatchEvent(e5);
        }
        _getProgressModularModules() {
            if (!this.modularInstance)
                return;
            const t3 = Object.keys(this.$el.dataset).filter((t4) => t4.includes("module")),
                s6 = Object.entries(this.modularInstance.modules);
            if (t3.length)
                for (const e5 of t3) {
                    const t4 = this.$el.dataset[e5];
                    if (!t4)
                        return;
                    for (const e6 of s6) {
                        const [s7, i6] = e6;
                        t4 in i6 && this.progressModularModules.push({
                            moduleName: s7,
                            moduleId: t4
                        });
                    }
                }
        }
        _getScrollCallFrom() {
            const t3 = r4([this.intersection.start, this.intersection.end], this.currentScroll);
            return this.intersection.start === t3 ? "start" : "end";
        }
        _dispatchCall(t3, s6) {
            var e5, i6;
            const r5 = null == (e5 = this.attributes.scrollCall) ? void 0 : e5.split(","),
                l6 = null == (i6 = this.attributes) ? void 0 : i6.scrollCallSelf;
            if (r5 && r5.length > 1) {
                var n6;
                const [e6, i7, o6] = r5;
                let a5;
                a5 = l6 ? this.$el.dataset[`module${i7.trim()}`] : o6, this.modularInstance && this.modularInstance.call(e6.trim(), {
                    target: this.$el,
                    way: t3,
                    from: s6
                }, i7.trim(), null == (n6 = a5) ? void 0 : n6.trim());
            } else if (r5) {
                const [e6] = r5, i7 = new CustomEvent(e6, {
                    detail: {
                        target: this.$el,
                        way: t3,
                        from: s6
                    }
                });
                window.dispatchEvent(i7);
            }
        }
    };
    var n5 = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
    var o5 = class {
        constructor({
            $el: t3,
            modularInstance: s6,
            triggerRootMargin: e5,
            rafRootMargin: i6,
            scrollOrientation: r5
        }) {
            this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, t3 ? (this.$scrollContainer = t3, this.modularInstance = s6, this.scrollOrientation = r5, this.triggerRootMargin = null != e5 ? e5 : "-1px -1px -1px -1px", this.rafRootMargin = null != i6 ? i6 : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
        }
        _init() {
            const t3 = this.$scrollContainer.querySelectorAll("[data-scroll]"),
                s6 = Array.from(t3);
            this._subscribeScrollElements(s6), this.IOTriggerInstance = new e4({
                scrollElements: [...this.triggeredScrollElements],
                rootMargin: this.triggerRootMargin,
                IORaf: false
            }), this.IORafInstance = new e4({
                scrollElements: [...this.RAFScrollElements],
                rootMargin: this.rafRootMargin,
                IORaf: true
            });
        }
        destroy() {
            this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
        }
        onResize({
            currentScroll: t3
        }) {
            for (const s6 of this.RAFScrollElements)
                s6.onResize({
                    currentScroll: t3
                });
        }
        onRender({
            currentScroll: t3,
            smooth: s6
        }) {
            for (const e5 of this.scrollElementsToUpdate)
                e5.onRender({
                    currentScroll: t3,
                    smooth: s6
                });
        }
        removeScrollElements(t3) {
            const s6 = t3.querySelectorAll("[data-scroll]");
            if (s6.length) {
                for (let t4 = 0; t4 < this.triggeredScrollElements.length; t4++) {
                    const e5 = this.triggeredScrollElements[t4];
                    Array.from(s6).indexOf(e5.$el) > -1 && (this.IOTriggerInstance.unobserve(e5.$el), this.triggeredScrollElements.splice(t4, 1));
                }
                for (let t4 = 0; t4 < this.RAFScrollElements.length; t4++) {
                    const e5 = this.RAFScrollElements[t4];
                    Array.from(s6).indexOf(e5.$el) > -1 && (this.IORafInstance.unobserve(e5.$el), this.RAFScrollElements.splice(t4, 1));
                }
                s6.forEach((t4) => {
                    const s7 = this.scrollElementsToUpdate.find((s8) => s8.$el === t4),
                        e5 = this.scrollElements.find((s8) => s8.$el === t4);
                    s7 && this._unsubscribeElementUpdate(s7), e5 && (this.scrollElements = this.scrollElements.filter((t5) => t5.id != e5.id));
                });
            }
        }
        addScrollElements(t3) {
            const s6 = t3.querySelectorAll("[data-scroll]"),
                e5 = [];
            this.scrollElements.forEach((t4) => {
                e5.push(t4.id);
            });
            const i6 = Math.max(...e5) + 1,
                r5 = Array.from(s6);
            this._subscribeScrollElements(r5, i6, true);
        }
        _subscribeScrollElements(t3, s6 = 0, e5 = false) {
            for (let i6 = 0; i6 < t3.length; i6++) {
                const r5 = t3[i6],
                    n6 = this._checkRafNeeded(r5),
                    o6 = new l5({
                        $el: r5,
                        id: s6 + i6,
                        scrollOrientation: this.scrollOrientation,
                        modularInstance: this.modularInstance,
                        subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                        unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                        needRaf: n6
                    });
                this.scrollElements.push(o6), n6 ? (this.RAFScrollElements.push(o6), e5 && (this.IORafInstance.scrollElements.push(o6), this.IORafInstance.observe(o6.$el))) : (this.triggeredScrollElements.push(o6), e5 && (this.IOTriggerInstance.scrollElements.push(o6), this.IOTriggerInstance.observe(o6.$el)));
            }
        }
        _unsubscribeAllScrollElements() {
            this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
        }
        _subscribeElementUpdate(t3) {
            this.scrollElementsToUpdate.push(t3);
        }
        _unsubscribeElementUpdate(t3) {
            this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((s6) => s6.id != t3.id);
        }
        _checkRafNeeded(t3) {
            let s6 = [...n5];
            const e5 = (t4) => {
                s6 = s6.filter((s7) => s7 != t4);
            };
            if (t3.dataset.scrollOffset) {
                if ("0,0" != t3.dataset.scrollOffset.split(",").map((t4) => t4.replace("%", "").trim()).join(","))
                    return true;
                e5("scrollOffset");
            } else
                e5("scrollOffset");
            if (t3.dataset.scrollPosition) {
                if ("top,bottom" != t3.dataset.scrollPosition.trim())
                    return true;
                e5("scrollPosition");
            } else
                e5("scrollPosition");
            if (t3.dataset.scrollSpeed && !isNaN(parseFloat(t3.dataset.scrollSpeed)))
                return true;
            e5("scrollSpeed");
            for (const e6 of s6)
                if (e6 in t3.dataset)
                    return true;
            return false;
        }
    };
    var a4 = class {
        constructor({
            resizeElements: t3,
            resizeCallback: s6 = () => {}
        }) {
            this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = t3, this.resizeCallback = s6, this.isFirstObserve = true, this._init();
        }
        _init() {
            this.observer = new ResizeObserver((t3) => {
                var s6;
                !this.isFirstObserve && (null == (s6 = this.resizeCallback) || s6.call(this)), this.isFirstObserve = false;
            });
            for (const t3 of this.$resizeElements)
                this.observer.observe(t3);
        }
        destroy() {
            this.observer.disconnect();
        }
    };
    var c4 = {
        wrapper: window,
        content: document.documentElement,
        eventsTarget: window,
        lerp: 0.1,
        duration: 0.75,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        syncTouch: false,
        syncTouchLerp: 0.1,
        touchInertiaMultiplier: 35,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: false,
        autoResize: true,
        easing: (t3) => Math.min(1, 1.001 - Math.pow(2, -10 * t3))
    };
    var h4 = class {
        constructor({
            lenisOptions: t3 = {},
            modularInstance: e5,
            triggerRootMargin: i6,
            rafRootMargin: r5,
            autoResize: l6 = true,
            autoStart: n6 = true,
            scrollCallback: o6 = () => {},
            initCustomTicker: a5,
            destroyCustomTicker: h5
        } = {}) {
            this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0, this.lenisOptions = s5({}, c4, t3), Object.assign(this, {
                lenisOptions: t3,
                modularInstance: e5,
                triggerRootMargin: i6,
                rafRootMargin: r5,
                autoResize: l6,
                autoStart: n6,
                scrollCallback: o6,
                initCustomTicker: a5,
                destroyCustomTicker: h5
            }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = false, this._init();
        }
        _init() {
            var s6;
            this.lenisInstance = new l4({
                wrapper: this.lenisOptions.wrapper,
                content: this.lenisOptions.content,
                eventsTarget: this.lenisOptions.eventsTarget,
                lerp: this.lenisOptions.lerp,
                duration: this.lenisOptions.duration,
                orientation: this.lenisOptions.orientation,
                gestureOrientation: this.lenisOptions.gestureOrientation,
                smoothWheel: this.lenisOptions.smoothWheel,
                smoothTouch: this.lenisOptions.smoothTouch,
                syncTouch: this.lenisOptions.syncTouch,
                syncTouchLerp: this.lenisOptions.syncTouchLerp,
                touchInertiaMultiplier: this.lenisOptions.touchInertiaMultiplier,
                wheelMultiplier: this.lenisOptions.wheelMultiplier,
                touchMultiplier: this.lenisOptions.touchMultiplier,
                normalizeWheel: this.lenisOptions.normalizeWheel,
                easing: this.lenisOptions.easing
            }), null == (s6 = this.lenisInstance) || s6.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(() => {
                this.coreInstance = new o5({
                    $el: this.lenisInstance.rootElement,
                    modularInstance: this.modularInstance,
                    triggerRootMargin: this.triggerRootMargin,
                    rafRootMargin: this.rafRootMargin,
                    scrollOrientation: this.lenisInstance.options.orientation
                }), this._bindEvents(), this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), this.autoStart && this.start();
            });
        }
        destroy() {
            var t3;
            this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t3 = this.coreInstance) || t3.destroy(), requestAnimationFrame(() => {
                var t4;
                null == (t4 = this.coreInstance) || t4.destroy();
            });
        }
        _bindEvents() {
            this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new a4({
                resizeElements: [document.body],
                resizeCallback: this._onResizeBind
            }) : window.addEventListener("resize", this._onResizeBind));
        }
        _unbindEvents() {
            this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
        }
        _bindScrollToEvents(t3) {
            const s6 = t3 || this.lenisInstance.rootElement,
                e5 = null == s6 ? void 0 : s6.querySelectorAll("[data-scroll-to]");
            (null == e5 ? void 0 : e5.length) && e5.forEach((t4) => {
                t4.addEventListener("click", this._onScrollToBind, false);
            });
        }
        _unbindScrollToEvents(t3) {
            const s6 = t3 || this.lenisInstance.rootElement,
                e5 = null == s6 ? void 0 : s6.querySelectorAll("[data-scroll-to]");
            (null == e5 ? void 0 : e5.length) && e5.forEach((t4) => {
                t4.removeEventListener("click", this._onScrollToBind, false);
            });
        }
        _onResize() {
            requestAnimationFrame(() => {
                var t3;
                null == (t3 = this.coreInstance) || t3.onResize({
                    currentScroll: this.lenisInstance.scroll
                });
            });
        }
        _onRender() {
            var t3, s6;
            null == (t3 = this.lenisInstance) || t3.raf(Date.now()), null == (s6 = this.coreInstance) || s6.onRender({
                currentScroll: this.lenisInstance.scroll,
                smooth: this.lenisInstance.isSmooth
            });
        }
        _onScrollTo(t3) {
            var s6;
            t3.preventDefault();
            const e5 = null != (s6 = t3.currentTarget) ? s6 : null;
            if (!e5)
                return;
            const i6 = e5.getAttribute("data-scroll-to-href") || e5.getAttribute("href"),
                r5 = e5.getAttribute("data-scroll-to-offset") || 0,
                l6 = e5.getAttribute("data-scroll-to-duration") || this.lenisOptions.duration || c4.duration;
            i6 && this.scrollTo(i6, {
                offset: "string" == typeof r5 ? parseInt(r5) : r5,
                duration: "string" == typeof l6 ? parseInt(l6) : l6
            });
        }
        start() {
            var t3;
            this.rafPlaying || (null == (t3 = this.lenisInstance) || t3.start(), this.rafPlaying = true, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
        }
        stop() {
            var t3;
            this.rafPlaying && (null == (t3 = this.lenisInstance) || t3.stop(), this.rafPlaying = false, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
        }
        removeScrollElements(t3) {
            var s6;
            t3 ? (this._unbindScrollToEvents(t3), null == (s6 = this.coreInstance) || s6.removeScrollElements(t3)) : console.error("Please provide a DOM Element as $oldContainer");
        }
        addScrollElements(t3) {
            var s6;
            t3 ? (null == (s6 = this.coreInstance) || s6.addScrollElements(t3), requestAnimationFrame(() => {
                this._bindScrollToEvents(t3);
            })) : console.error("Please provide a DOM Element as $newContainer");
        }
        resize() {
            this._onResizeBind();
        }
        scrollTo(t3, s6) {
            var e5;
            null == (e5 = this.lenisInstance) || e5.scrollTo(t3, {
                offset: null == s6 ? void 0 : s6.offset,
                lerp: null == s6 ? void 0 : s6.lerp,
                duration: null == s6 ? void 0 : s6.duration,
                immediate: null == s6 ? void 0 : s6.immediate,
                lock: null == s6 ? void 0 : s6.lock,
                force: null == s6 ? void 0 : s6.force,
                easing: null == s6 ? void 0 : s6.easing,
                onComplete: null == s6 ? void 0 : s6.onComplete
            });
        }
        _raf() {
            this._onRenderBind(), this.rafInstance = requestAnimationFrame(() => this._raf());
        }
    };

    // assets/scripts/modules/Scroll.js
    var Scroll_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.onScrollBind = this.onScroll.bind(this);
        }
        ///////////////
        // Lifecycle
        ///////////////
        init() {
            if (history.scrollRestoration) {
                history.scrollRestoration = "manual";
                window.scrollTo(0, 0);
            }
            this.scroll = new h4({
                modularInstance: this,
                scrollCallback: this.onScrollBind,
                lenisOptions: {
                    smoothWheel: false
                }
            });
        }
        destroy() {
            this.scroll.destroy();
        }
        ///////////////
        // Callbacks
        ///////////////
        onScroll({
            scroll,
            limit,
            velocity,
            direction,
            progress
        }) {}
        ///////////////
        // Methods
        ///////////////
        /**
         * Lazy load the related image.
         *
         * @see ../utils/image.js
         *
         * It is recommended to wrap your `<img>` into an element with the
         * CSS class name `.c-lazy`. The CSS class name modifier `.-lazy-loaded`
         * will be applied on both the image and the parent wrapper.
         *
         * ```html
         * <div class="c-lazy o-ratio u-4:3">
         *     <img data-scroll data-scroll-call="lazyLoad, Scroll, main" data-src="http://picsum.photos/640/480?v=1" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
         * </div>
         * ```
         *
         * @param {LocomotiveScroll} args - The Locomotive Scroll instance.
         */
        lazyLoad(args) {
            lazyLoadImage(args.target, null, () => {});
        }
        scrollTo(params) {
            var _a;
            let {
                target,
                options
            } = params;
            options = Object.assign({
                // Defaults
                duration: 1
            }, options);
            (_a = this.scroll) == null ? void 0 : _a.scrollTo(target, options);
        }
        addScrollElements(container) {
            this.scroll.addScrollElements(container);
        }
        removeScrollElements(container) {
            this.scroll.removeScrollElements(container);
        }
        stop() {
            var _a;
            (_a = this.scroll) == null ? void 0 : _a.lenisInstance.stop();
        }
        start() {
            var _a;
            (_a = this.scroll) == null ? void 0 : _a.lenisInstance.start();
        }
    };

    // assets/scripts/utils/tickers.js
    var debounce = (callback, delay3, immediate = false) => {
        let timeout = null;
        return (...args) => {
            clearTimeout(timeout);
            const later = () => {
                timeout = null;
                if (!immediate) {
                    callback(...args);
                }
            };
            if (immediate && !timeout) {
                callback(...args);
            }
            timeout = setTimeout(later, delay3);
        };
    };
    var throttle = (callback, delay3) => {
        let timeout = false;
        return (...args) => {
            if (!timeout) {
                timeout = true;
                callback(...args);
                setTimeout(() => {
                    timeout = false;
                }, delay3);
            }
        };
    };

    // assets/scripts/modules/Search.js
    var _Search = class _Search extends _default {
        constructor(m4) {
            super(m4);
            this.$el = this.el;
            this.$form = this.$("form")[0];
            this.$input = this.$("input")[0];
            this.$submit = this.$("submit")[0];
            this.$resultsList = this.$("resultsList")[0];
            this.controller = new AbortController();
            this.signal = this.controller.signal;
            this.isSearching = false;
            this.hasResults = false;
            this.events = {
                click: {
                    viewAll: "submit"
                }
            };
        }
        init() {
            this.enableSubmit(this.$input.value);
            this.onInputStart = throttle(() => {
                this.enableSubmit(this.$input.value);
                this.$el.classList.add(_Search.CLASS.LOADING);
            }, 1e3);
            this.onInputEnd = debounce(() => {
                this.search();
            }, 1e3);
            this.$input.addEventListener("input", this.onInputStart);
            this.$input.addEventListener("input", this.onInputEnd);
        }
        search() {
            const keyword = this.$input.value;
            if (!keyword || keyword === "") {
                this.hideResults();
                this.$el.classList.remove(_Search.CLASS.LOADING);
                return;
            }
            if (this.isSearching) {
                this.controller.abort("New search");
            }
            this.isSearching = true;
            this.$el.classList.add(_Search.CLASS.LOADING);
            this.$resultsList.innerHTML = "";
            fetch(`api/v1/search/${keyword}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                signal: this.signal
            }).then((r5) => r5.json()).then((r5) => {
                this.isSearching = false;
                this.$el.classList.remove(_Search.CLASS.LOADING);
                const results = r5.filter((result) => typeof result.title !== "undefined" && result.list.length > 0);
                if (results.length === 0) {
                    this.hideResults();
                    return;
                }
                let items = results.map((result) => result.list).flat().filter((item) => typeof item.meta.title !== "undefined" && typeof item.meta.url !== "undefined");
                for (let item of items) {
                    const li = document.createElement("li");
                    li.innerHTML = `<a class="c-search_results_link" href="${item.meta.url}"><span class="c-search_results_label">${item.meta.title}</span></a>`;
                    this.$resultsList.append(li);
                }
                this.showResults();
            }).catch((e5) => {
                console.error(`Fetch error: ${e5.message}`);
            });
        }
        showResults() {
            if (this.hasResults) {
                return;
            }
            document.addEventListener("click", this.onClick = (e5) => {
                if (!this.$el.contains(e5.target)) {
                    this.hideResults();
                }
            });
            this.$el.classList.add(_Search.CLASS.SHOW_RESULTS);
            this.hasResults = true;
        }
        hideResults() {
            if (!this.hasResults) {
                return;
            }
            document.removeEventListener("click", this.onClick);
            this.$el.classList.remove(_Search.CLASS.SHOW_RESULTS);
            this.hasResults = false;
        }
        enableSubmit(inputValue) {
            if (inputValue == null || inputValue == "") {
                this.$submit.disabled = true;
            } else {
                this.$submit.disabled = false;
            }
        }
        submit() {
            this.$form.submit();
        }
        destroy() {
            this.$input.removeEventListener("input", this.onInput);
        }
    };
    __publicField(_Search, "CLASS", {
        LOADING: "is-loading",
        SHOW_RESULTS: "has-results"
    });
    var Search = _Search;

    // assets/scripts/modules/SelectFilter.js
    var SelectFilter_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$items = this.$("item");
            this.$select = this.$("select");
            this.events = {
                change: {
                    select: "onChange"
                }
            };
        }
        ///////////////
        // Lifecycle
        ///////////////
        init() {}
        destroy() {
            super.destroy();
        }
        onChange(e5) {
            const $target = e5.curTarget;
            const value = $target.value;
            this.$items.forEach((item) => {
                item.classList.add("is-hidden");
                const itemCategory = item.getAttribute("data-category");
                if (value === "all" || value === itemCategory) {
                    item.classList.remove("is-hidden");
                } else {
                    item.classList.add("is-hidden");
                }
            });
        }
    };

    // assets/scripts/modules/SkipLink.js
    var SkipLink_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.onPageLoadBind = this.onPageLoad.bind(this);
            this.$skipLinkContent = null;
            this.$mainContent = null;
            this.events = {
                click: {
                    button: "onClick"
                }
            };
        }
        //////////////
        // Lifecyle
        //////////////
        init() {
            this.bindEvents();
            this.onPageLoad();
        }
        destroy() {
            super.destroy();
            this.unbindEvents();
        }
        //////////////
        // Events
        //////////////
        bindEvents() {
            window.addEventListener(CUSTOM_EVENT.VISIT_END, this.onPageLoadBind);
        }
        unbindEvents() {
            window.removeEventListener(CUSTOM_EVENT.VISIT_END, this.onPageLoadBind);
        }
        onPageLoad() {
            this.$skipLinkContent = document.querySelector("[data-skip-link-content]");
            this.$mainContent = document.getElementById("main");
            requestAnimationFrame(() => {
                if (this.$skipLinkContent) {
                    this.$skipLinkContent.setAttribute("tabindex", "-1");
                } else if (this.$mainContent) {
                    this.$mainContent.setAttribute("tabindex", "-1");
                }
            });
        }
        onClick(event2) {
            event2.preventDefault();
            let targetContent = this.$skipLinkContent || this.$mainContent || null;
            if (targetContent) {
                this.call("scrollTo", {
                    target: targetContent,
                    options: {
                        duration: 1,
                        offset: -100
                    }
                }, "Scroll");
                targetContent.focus();
            }
        }
    };

    // assets/scripts/modules/Tabs.js
    var Tabs_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$tabs = this.$("tab");
            this.$panels = this.$("panel");
            this.events = {
                click: {
                    tab: "onTabClick"
                }
            };
        }
        destroy() {
            super.destroy();
        }
        onTabClick(e5) {
            this.setSelectedTab(e5.currentTarget);
        }
        setSelectedTab($currentTab) {
            for (let i6 = 0; i6 < this.$tabs.length; i6 += 1) {
                const $tab = this.$tabs[i6];
                const $panel = this.$panels[i6];
                if ($currentTab === $tab) {
                    $tab.setAttribute("aria-selected", "true");
                    $tab.classList.add("is-active");
                    $tab.tabIndex = 0;
                    $panel.removeAttribute("hidden");
                } else {
                    $tab.setAttribute("aria-selected", "false");
                    $tab.classList.remove("is-active");
                    $tab.tabIndex = -1;
                    $panel.setAttribute("hidden", "");
                }
            }
        }
    };

    // assets/scripts/modules/VideoInview.js
    var VideoInview_default = class extends _default {
        constructor(m4) {
            super(m4);
            this.$video = this.$("video")[0];
        }
        ///////////////
        // Lifecyle
        ///////////////
        init() {}
        destroy() {
            super.destroy();
        }
        ///////////////
        // Callbacks
        ///////////////
        onInview(args) {
            let $target;
            if (args.target) {
                $target = args.target;
            } else if (args.targetEl) {
                $target = args.targetEl;
            } else {
                return;
            }
            if (args.way === "enter") {
                this.play();
            } else if (args.way === "leave") {
                this.pause();
            }
        }
        ///////////////
        // Methods
        ///////////////
        play() {
            if (this.$video.paused)
                this.$video.play();
        }
        pause() {
            if (!this.$video.paused)
                this.$video.pause();
        }
    };

    // assets/scripts/modules/Wysiwyg.js
    var Wysiwyg_default = class extends _default {
        constructor(m4) {
            super(m4);
        }
        init() {
            this.$tables = this.el.querySelectorAll("table");
            if (this.$tables.length > 0) {
                this.$tables.forEach(($table) => {
                    const table = $table;
                    const wrapper = document.createElement("div");
                    table.classList.add("c-table");
                    wrapper.classList.add("c-table_wrap");
                    table.parentNode.insertBefore(wrapper, table);
                    wrapper.appendChild(table);
                });
            }
        }
    };

    // assets/scripts/globals.js
    var import_svg4everybody = __toESM(require_svg4everybody(), 1);
    var gridHelper2;
    (() => __async(void 0, null, function*() {
        if (ENV.IS_DEV) {
            const gridHelperModule = yield Promise.resolve().then(() => (init_grid_helper(), grid_helper_exports));
            gridHelper2 = gridHelperModule == null ? void 0 : gridHelperModule.gridHelper;
        }
    }))();

    function globals_default() {
        (0, import_svg4everybody.default)();
        gridHelper2 == null ? void 0 : gridHelper2();
    }

    // assets/scripts/utils/fonts.js
    var isFontLoadingAPIAvailable = "fonts" in document;

    function conformsToReference(font, criterion2) {
        for (const [key, value] of Object.entries(criterion2)) {
            switch (key) {
                case "family":
                    {
                        if (trim(font[key]) !== value) {
                            return false;
                        }
                        break;
                    }
                case "weight":
                    {
                        if (font[key] != value) {
                            return false;
                        }
                        break;
                    }
                default:
                    {
                        if (font[key] !== value) {
                            return false;
                        }
                        break;
                    }
            }
        }
        return true;
    }

    function conformsToShorthand(font, criterion2) {
        const family = trim(font.family);
        if (trim(family) === criterion2) {
            return true;
        }
        if (criterion2.endsWith(trim(family)) && (criterion2.match(font.weight) || criterion2.match(font.style))) {
            return true;
        }
        return true;
    }

    function findManyByReference(search) {
        const found = [];
        for (const font of document.fonts) {
            if (conformsToReference(font, search)) {
                found.push(font);
            }
        }
        return found;
    }

    function findManyByShorthand(search) {
        const found = [];
        for (const font of document.fonts) {
            if (conformsToShorthand(font, search)) {
                found.push(font);
            }
        }
        return found;
    }

    function getMany(queries) {
        if (!Array.isArray(queries)) {
            queries = [queries];
        }
        const found = /* @__PURE__ */ new Set();
        queries.forEach((search) => {
            if (search) {
                switch (typeof search) {
                    case "string":
                        found.add(...findManyByShorthand(search));
                        return;
                    case "object":
                        found.add(...findManyByReference(search));
                        return;
                }
            }
            throw new TypeError(
                "Expected font query to be font shorthand or font reference"
            );
        });
        return [...found];
    }

    function loadFonts(fontsToLoad, debug = false) {
        return __async(this, null, function*() {
            var _a;
            if (((_a = fontsToLoad.size) != null ? _a : fontsToLoad.length) === 0) {
                throw new TypeError(
                    "Expected at least one font"
                );
            }
            return yield loadFontsWithAPI([...fontsToLoad], debug);
        });
    }

    function loadFontFaceWithAPI(font) {
        return __async(this, null, function*() {
            return yield(font.status === "unloaded" ? font.load() : font.loaded).then((font2) => font2, (err) => font);
        });
    }

    function loadFontsWithAPI(fontsToLoad, debug = false) {
        return __async(this, null, function*() {
            debug && console.group("[loadFonts:API]", fontsToLoad.length, "/", document.fonts.size);
            const fontsToBeLoaded = [];
            for (const fontToLoad of fontsToLoad) {
                if (fontToLoad instanceof FontFace) {
                    if (!document.fonts.has(fontToLoad)) {
                        document.fonts.add(fontToLoad);
                    }
                    fontsToBeLoaded.push(
                        loadFontFaceWithAPI(fontToLoad)
                    );
                } else {
                    fontsToBeLoaded.push(
                        ...getMany(fontToLoad).map((font) => loadFontFaceWithAPI(font))
                    );
                }
            }
            debug && console.groupEnd();
            return yield Promise.all(fontsToBeLoaded);
        });
    }

    function trim(value) {
        return value.replace(/['"]+/g, "");
    }

    // assets/scripts/app.js
    var app = new main_esm_default({
        modules: modules_exports
    });

    function init() {
        bindEvents();
        onResize2();
        document.documentElement.style.setProperty(
            "--vh-initial",
            `${window.innerHeight * 0.01}px`
        );
        globals_default();
        app.init(app);
        $html.classList.add(CSS_CLASS.FIRST_LOADED);
        $html.classList.remove(CSS_CLASS.LOADING, CSS_CLASS.NO_JS);
        if (isFontLoadingAPIAvailable) {
            loadFonts(FONT.EAGER, ENV.IS_DEV).then((eagerFonts) => {
                $html.classList.add(CSS_CLASS.FONTS_LOADED);
                if (ENV.IS_DEV) {
                    console.group("Eager fonts loaded!", eagerFonts.length, "/", document.fonts.size);
                    console.group("State of eager fonts:");
                    eagerFonts.forEach((font) => console.log(
                        font.family,
                        font.style,
                        font.weight,
                        font.status
                        /*, font*/
                    ));
                    console.groupEnd();
                    console.group("State of all fonts:");
                    document.fonts.forEach((font) => console.log(
                        font.family,
                        font.style,
                        font.weight,
                        font.status
                        /*, font*/
                    ));
                    console.groupEnd();
                }
            });
        }
    }

    function bindEvents() {
        const resizeEndEvent = new CustomEvent(CUSTOM_EVENT.RESIZE_END);
        window.addEventListener(
            "resize",
            debounce(() => {
                window.dispatchEvent(resizeEndEvent);
            }, 200, false)
        );
        window.addEventListener(
            "resize",
            onResize2
        );
        window.addEventListener(
            "orientationchange",
            debounce(() => {
                onOnrientationChange();
            }, 200, false)
        );
    }

    function onOnrientationChange() {
        document.documentElement.style.setProperty(
            "--vh-initial",
            `${window.innerHeight * 0.01}px`
        );
    }

    function onResize2() {
        let vw = $html.offsetWidth * 0.01;
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vw", `${vw}px`);
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window.addEventListener("load", (event2) => {
        const $style = document.getElementById("main-css");
        if ($style) {
            if ($style.isLoaded) {
                init();
            } else {
                $style.addEventListener("load", (event3) => {
                    init();
                });
            }
        } else {
            console.warn('The "main-css" stylesheet not found');
        }
    });
})();
/*! Bundled license information:

svg4everybody/dist/svg4everybody.js:
  (*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody *)

vanilla-cookieconsent/dist/cookieconsent.esm.js:
  (*!
  * CookieConsent 3.0.1
  * https://github.com/orestbida/cookieconsent
  * Author Orest Bida
  * Released under the MIT License
  *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 7.5.4
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)

photoswipe/dist/photoswipe.esm.js:
  (*!
    * PhotoSwipe 5.4.3 - https://photoswipe.com
    * (c) 2023 Dmytro Semenov
    *)

photoswipe/dist/photoswipe-lightbox.esm.js:
  (*!
    * PhotoSwipe Lightbox 5.4.3 - https://photoswipe.com
    * (c) 2023 Dmytro Semenov
    *)
*/
//# sourceMappingURL=app.js.map