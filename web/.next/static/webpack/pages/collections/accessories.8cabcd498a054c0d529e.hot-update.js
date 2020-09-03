webpackHotUpdate_N_E("pages/collections/accessories",{

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shopify-buy */ \"./node_modules/shopify-buy/index.js\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar ShopContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();\nvar client = shopify_buy__WEBPACK_IMPORTED_MODULE_10___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nvar ShopProvider = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ShopProvider, _React$Component);\n\n  var _super = _createSuper(ShopProvider);\n\n  function ShopProvider() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, ShopProvider);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      collection: {},\n      products: [],\n      product: {},\n      checkout: {},\n      // checkoutTotal: 0,\n      searchResults: []\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"createCheckout\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var checkout;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return client.checkout.create();\n\n            case 2:\n              checkout = _context.sent;\n              localStorage.setItem(\"checkout\", checkout.id);\n\n              _this.setState({\n                checkout: checkout\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCheckout\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(checkoutId) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                client.checkout.fetch(checkoutId).then(function (checkout) {\n                  _this.setState({\n                    checkout: checkout\n                  });\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"addItemToCheckout\", /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(variantId, quantity) {\n        var lineItemsToAdd, checkout, checkoutTotal;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                lineItemsToAdd = [{\n                  variantId: variantId,\n                  quantity: parseInt(quantity, 10)\n                }];\n                _context3.next = 3;\n                return client.checkout.addLineItems(_this.state.checkout.id, lineItemsToAdd);\n\n              case 3:\n                checkout = _context3.sent;\n\n                _this.setState({\n                  checkout: checkout\n                });\n\n                checkoutTotal = parseInt(_this.state.checkoutTotal, 10) + 1;\n\n                _this.setState({\n                  checkoutTotal: checkoutTotal\n                });\n\n                localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"removeItemFromCheckout\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(checkoutId, lineItemsIds) {\n        var checkoutIdToModify, lineItemsIdToRemove;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return checkoutId;\n\n              case 2:\n                checkoutIdToModify = _context4.sent;\n                _context4.next = 5;\n                return lineItemsIds;\n\n              case 5:\n                lineItemsIdToRemove = _context4.sent;\n                // Remove an item from the checkout\n                client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(function (checkout) {\n                  // Do something with the updated checkout\n                  _this.setState({\n                    checkout: checkout\n                  });\n\n                  var checkoutTotal = parseInt(_this.state.checkoutTotal, 10) - 1;\n\n                  _this.setState({\n                    checkoutTotal: checkoutTotal\n                  });\n\n                  localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n                });\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4, _x5) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchAllProducts\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n      var products;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return client.product.fetchAll();\n\n            case 2:\n              products = _context5.sent;\n\n              _this.setState({\n                products: products\n              });\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchProductByHandle\", /*#__PURE__*/function () {\n      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(handle) {\n        var product;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return client.product.fetchByHandle(handle);\n\n              case 2:\n                product = _context6.sent;\n\n                _this.setState({\n                  product: product\n                });\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x6) {\n        return _ref6.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCollection\", /*#__PURE__*/function () {\n      var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(query) {\n        var collections;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                _context7.next = 2;\n                return client.collection.fetchAllWithProducts();\n\n              case 2:\n                collections = _context7.sent;\n                collections.map(function (collection) {\n                  return collection.title === query ? _this.setState({\n                    collection: collection\n                  }) : null;\n                });\n\n              case 4:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }));\n\n      return function (_x7) {\n        return _ref7.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchBySearch\", /*#__PURE__*/function () {\n      var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(query) {\n        var products, searchResults;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                _context8.next = 2;\n                return client.product.fetchAll();\n\n              case 2:\n                products = _context8.sent;\n                console.log(products);\n                searchResults = products.filter(function (product) {\n                  var productTitle = product.title;\n                  var productType = product.productType;\n                  return productTitle.includes(query) || productType.includes(query);\n                });\n\n                _this.setState({\n                  searchResults: searchResults\n                });\n\n                console.log(searchResults);\n\n              case 7:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }));\n\n      return function (_x8) {\n        return _ref8.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ShopProvider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (localStorage.checkout) {\n        this.fetchCheckout(localStorage.checkout);\n      } else {\n        this.createCheckout();\n      }\n\n      if (localStorage.checkoutTotal) {\n        var checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    // checkIfItemInCart = async (checkout, itemId) => {\n    //   const currentCheckout = checkout;\n    //   for (item in currentCheckout.lineItems) {\n    //     if (item.id === itemId) {\n    //       this.setState({ itemInCart: true });\n    //     }\n    //   }\n    // };\n    value: function render() {\n      return __jsx(ShopContext.Provider, {\n        value: _objectSpread(_objectSpread({}, this.state), {}, {\n          fetchAllProducts: this.fetchAllProducts,\n          fetchProductByHandle: this.fetchProductByHandle,\n          addItemToCheckout: this.addItemToCheckout,\n          removeItemFromCheckout: this.removeItemFromCheckout,\n          fetchCollection: this.fetchCollection,\n          fetchBySearch: this.fetchBySearch\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 7\n        }\n      }, this.props.children);\n    }\n  }]);\n\n  return ShopProvider;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nvar ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zaG9wQ29udGV4dC5qcz80ZjdmIl0sIm5hbWVzIjpbIlNob3BDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiY2xpZW50IiwiQ2xpZW50IiwiYnVpbGRDbGllbnQiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTaG9wUHJvdmlkZXIiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiY2hlY2tvdXQiLCJzZWFyY2hSZXN1bHRzIiwiY3JlYXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwic2V0U3RhdGUiLCJjaGVja291dElkIiwiZmV0Y2giLCJ0aGVuIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRJZCIsInF1YW50aXR5IiwibGluZUl0ZW1zVG9BZGQiLCJwYXJzZUludCIsImFkZExpbmVJdGVtcyIsInN0YXRlIiwiY2hlY2tvdXRUb3RhbCIsImxpbmVJdGVtc0lkcyIsImNoZWNrb3V0SWRUb01vZGlmeSIsImxpbmVJdGVtc0lkVG9SZW1vdmUiLCJyZW1vdmVMaW5lSXRlbXMiLCJmZXRjaEFsbCIsImhhbmRsZSIsImZldGNoQnlIYW5kbGUiLCJxdWVyeSIsImZldGNoQWxsV2l0aFByb2R1Y3RzIiwiY29sbGVjdGlvbnMiLCJtYXAiLCJ0aXRsZSIsImZpbHRlciIsInByb2R1Y3RUaXRsZSIsInByb2R1Y3RUeXBlIiwiaW5jbHVkZXMiLCJmZXRjaENoZWNrb3V0IiwiY3JlYXRlQ2hlY2tvdXQiLCJnZXRJdGVtIiwiZmV0Y2hBbGxQcm9kdWN0cyIsImZldGNoUHJvZHVjdEJ5SGFuZGxlIiwiYWRkSXRlbVRvQ2hlY2tvdXQiLCJyZW1vdmVJdGVtRnJvbUNoZWNrb3V0IiwiZmV0Y2hDb2xsZWN0aW9uIiwiZmV0Y2hCeVNlYXJjaCIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJTaG9wQ29uc3VtZXIiLCJDb25zdW1lciJdLCJtYXBwaW5n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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBRVM7QUFDUCxhQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxhQUFLLGtDQUNBLEtBQUtELEtBREw7QUFFSHFCLDBCQUFnQixFQUFFLEtBQUtBLGdCQUZwQjtBQUdIQyw4QkFBb0IsRUFBRSxLQUFLQSxvQkFIeEI7QUFJSEMsMkJBQWlCLEVBQUUsS0FBS0EsaUJBSnJCO0FBS0hDLGdDQUFzQixFQUFFLEtBQUtBLHNCQUwxQjtBQU1IQyx5QkFBZSxFQUFFLEtBQUtBLGVBTm5CO0FBT0hDLHVCQUFhLEVBQUUsS0FBS0E7QUFQakIsVUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0csS0FBS0MsS0FBTCxDQUFXQyxRQVhkLENBREY7QUFlRDs7OztFQTdId0J6RCw0Q0FBSyxDQUFDMEQsUzs7QUFnSWpDLElBQU1DLFlBQVksR0FBRzVELFdBQVcsQ0FBQzZELFFBQWpDO0FBRUE7QUFFZXJELDJFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9zaG9wQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcInNob3BpZnktYnV5XCI7XG5cbmNvbnN0IFNob3BDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBjbGllbnQgPSBDbGllbnQuYnVpbGRDbGllbnQoe1xuICBkb21haW46IFwib2pvcy1zdG9yZS5teXNob3BpZnkuY29tXCIsXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogXCJlNTJmODQ5OGM2YmI1ZGVhOWM3YzY2NzA4NjBiNzIyNFwiLFxufSk7XG5cbmNsYXNzIFNob3BQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbGxlY3Rpb246IHt9LFxuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBwcm9kdWN0OiB7fSxcbiAgICBjaGVja291dDoge30sXG4gICAgLy8gY2hlY2tvdXRUb3RhbDogMCxcbiAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0KSB7XG4gICAgICB0aGlzLmZldGNoQ2hlY2tvdXQobG9jYWxTdG9yYWdlLmNoZWNrb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVDaGVja291dCgpO1xuICAgIH1cbiAgICBpZiAobG9jYWxTdG9yYWdlLmNoZWNrb3V0VG90YWwpIHtcbiAgICAgIGNvbnN0IGNoZWNrb3V0VG90YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoZWNrb3V0VG90YWxcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDaGVja291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5jcmVhdGUoKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0XCIsIGNoZWNrb3V0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICB9O1xuXG4gIGZldGNoQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCkgPT4ge1xuICAgIGNsaWVudC5jaGVja291dFxuICAgICAgLmZldGNoKGNoZWNrb3V0SWQpXG4gICAgICAudGhlbigoY2hlY2tvdXQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgYWRkSXRlbVRvQ2hlY2tvdXQgPSBhc3luYyAodmFyaWFudElkLCBxdWFudGl0eSkgPT4ge1xuICAgIGNvbnN0IGxpbmVJdGVtc1RvQWRkID0gW1xuICAgICAge1xuICAgICAgICB2YXJpYW50SWQsXG4gICAgICAgIHF1YW50aXR5OiBwYXJzZUludChxdWFudGl0eSwgMTApLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGNoZWNrb3V0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmFkZExpbmVJdGVtcyhcbiAgICAgIHRoaXMuc3RhdGUuY2hlY2tvdXQuaWQsXG4gICAgICBsaW5lSXRlbXNUb0FkZFxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICBjb25zdCBjaGVja291dFRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGVja291dFRvdGFsLCAxMCkgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRvdGFsOiBjaGVja291dFRvdGFsIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwpO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQgPSBhc3luYyAoY2hlY2tvdXRJZCwgbGluZUl0ZW1zSWRzKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXRJZFRvTW9kaWZ5ID0gYXdhaXQgY2hlY2tvdXRJZDsgLy8gSUQgb2YgYW4gZXhpc3RpbmcgY2hlY2tvdXRcbiAgICBjb25zdCBsaW5lSXRlbXNJZFRvUmVtb3ZlID0gYXdhaXQgbGluZUl0ZW1zSWRzO1xuICAgIC8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGNoZWNrb3V0XG4gICAgY2xpZW50LmNoZWNrb3V0XG4gICAgICAucmVtb3ZlTGluZUl0ZW1zKGNoZWNrb3V0SWRUb01vZGlmeSwgbGluZUl0ZW1zSWRUb1JlbW92ZSlcbiAgICAgIC50aGVuKChjaGVja291dCkgPT4ge1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCB0aGUgdXBkYXRlZCBjaGVja291dFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXQ6IGNoZWNrb3V0IH0pO1xuICAgICAgICBjb25zdCBjaGVja291dFRvdGFsID0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jaGVja291dFRvdGFsLCAxMCkgLSAxO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFRvdGFsXCIsIHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBmZXRjaEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hBbGwoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzIH0pO1xuICB9O1xuXG4gIGZldGNoUHJvZHVjdEJ5SGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5mZXRjaEJ5SGFuZGxlKGhhbmRsZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IHByb2R1Y3QgfSk7XG4gIH07XG5cbiAgZmV0Y2hDb2xsZWN0aW9uID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSBhd2FpdCBjbGllbnQuY29sbGVjdGlvbi5mZXRjaEFsbFdpdGhQcm9kdWN0cygpO1xuICAgIGNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT5cbiAgICAgIGNvbGxlY3Rpb24udGl0bGUgPT09IHF1ZXJ5XG4gICAgICAgID8gdGhpcy5zZXRTdGF0ZSh7IGNvbGxlY3Rpb246IGNvbGxlY3Rpb24gfSlcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgfTtcblxuICBmZXRjaEJ5U2VhcmNoID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5mZXRjaEFsbCgpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0VGl0bGUgPSBwcm9kdWN0LnRpdGxlO1xuICAgICAgY29uc3QgcHJvZHVjdFR5cGUgPSBwcm9kdWN0LnByb2R1Y3RUeXBlO1xuICAgICAgcmV0dXJuIHByb2R1Y3RUaXRsZS5pbmNsdWRlcyhxdWVyeSkgfHwgcHJvZHVjdFR5cGUuaW5jbHVkZXMocXVlcnkpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiBzZWFyY2hSZXN1bHRzIH0pO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdHMpO1xuICB9O1xuXG4gIC8vIGNoZWNrSWZJdGVtSW5DYXJ0ID0gYXN5bmMgKGNoZWNrb3V0LCBpdGVtSWQpID0+IHtcbiAgLy8gICBjb25zdCBjdXJyZW50Q2hlY2tvdXQgPSBjaGVja291dDtcbiAgLy8gICBmb3IgKGl0ZW0gaW4gY3VycmVudENoZWNrb3V0LmxpbmVJdGVtcykge1xuICAvLyAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW1JZCkge1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbUluQ2FydDogdHJ1ZSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2hvcENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIGZldGNoQWxsUHJvZHVjdHM6IHRoaXMuZmV0Y2hBbGxQcm9kdWN0cyxcbiAgICAgICAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZTogdGhpcy5mZXRjaFByb2R1Y3RCeUhhbmRsZSxcbiAgICAgICAgICBhZGRJdGVtVG9DaGVja291dDogdGhpcy5hZGRJdGVtVG9DaGVja291dCxcbiAgICAgICAgICByZW1vdmVJdGVtRnJvbUNoZWNrb3V0OiB0aGlzLnJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQsXG4gICAgICAgICAgZmV0Y2hDb2xsZWN0aW9uOiB0aGlzLmZldGNoQ29sbGVjdGlvbixcbiAgICAgICAgICBmZXRjaEJ5U2VhcmNoOiB0aGlzLmZldGNoQnlTZWFyY2gsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TaG9wQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFNob3BDb25zdW1lciA9IFNob3BDb250ZXh0LkNvbnN1bWVyO1xuXG5leHBvcnQgeyBTaG9wQ29uc3VtZXIsIFNob3BDb250ZXh0IH07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ })

})