webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/shopContext.js":
/*!********************************!*\
  !*** ./context/shopContext.js ***!
  \********************************/
/*! exports provided: ShopConsumer, ShopContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopConsumer\", function() { return ShopConsumer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShopContext\", function() { return ShopContext; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shopify-buy */ \"./node_modules/shopify-buy/index.js\");\n/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/context/shopContext.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar ShopContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext();\nvar client = shopify_buy__WEBPACK_IMPORTED_MODULE_10___default.a.buildClient({\n  domain: \"ojos-store.myshopify.com\",\n  storefrontAccessToken: \"e52f8498c6bb5dea9c7c6670860b7224\"\n});\n\nvar ShopProvider = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ShopProvider, _React$Component);\n\n  var _super = _createSuper(ShopProvider);\n\n  function ShopProvider() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, ShopProvider);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"state\", {\n      collection: {},\n      products: [],\n      product: {},\n      checkout: {},\n      // checkoutTotal: 0,\n      searchResults: []\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"createCheckout\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var checkout;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return client.checkout.create();\n\n            case 2:\n              checkout = _context.sent;\n              localStorage.setItem(\"checkout\", checkout.id);\n\n              _this.setState({\n                checkout: checkout\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCheckout\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(checkoutId) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                client.checkout.fetch(checkoutId).then(function (checkout) {\n                  _this.setState({\n                    checkout: checkout\n                  });\n                })[\"catch\"](function (err) {\n                  return console.log(err);\n                });\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"addItemToCheckout\", /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(variantId, quantity) {\n        var lineItemsToAdd, checkout, checkoutTotal;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                lineItemsToAdd = [{\n                  variantId: variantId,\n                  quantity: parseInt(quantity, 10)\n                }];\n                _context3.next = 3;\n                return client.checkout.addLineItems(_this.state.checkout.id, lineItemsToAdd);\n\n              case 3:\n                checkout = _context3.sent;\n\n                _this.setState({\n                  checkout: checkout\n                });\n\n                checkoutTotal = parseInt(_this.state.checkoutTotal, 10) + 1;\n\n                _this.setState({\n                  checkoutTotal: checkoutTotal\n                });\n\n                localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n\n              case 8:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2, _x3) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"removeItemFromCheckout\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(checkoutId, lineItemsIds) {\n        var checkoutIdToModify, lineItemsIdToRemove;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return checkoutId;\n\n              case 2:\n                checkoutIdToModify = _context4.sent;\n                _context4.next = 5;\n                return lineItemsIds;\n\n              case 5:\n                lineItemsIdToRemove = _context4.sent;\n                // Remove an item from the checkout\n                client.checkout.removeLineItems(checkoutIdToModify, lineItemsIdToRemove).then(function (checkout) {\n                  // Do something with the updated checkout\n                  _this.setState({\n                    checkout: checkout\n                  });\n\n                  var checkoutTotal = parseInt(_this.state.checkoutTotal, 10) - 1;\n\n                  _this.setState({\n                    checkoutTotal: checkoutTotal\n                  });\n\n                  localStorage.setItem(\"checkoutTotal\", _this.state.checkoutTotal);\n                });\n\n              case 7:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x4, _x5) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchAllProducts\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n      var products;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return client.product.fetchAll();\n\n            case 2:\n              products = _context5.sent;\n\n              _this.setState({\n                products: products\n              });\n\n            case 4:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchProductByHandle\", /*#__PURE__*/function () {\n      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(handle) {\n        var product;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.next = 2;\n                return client.product.fetchByHandle(handle);\n\n              case 2:\n                product = _context6.sent;\n\n                _this.setState({\n                  product: product\n                });\n\n              case 4:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee6);\n      }));\n\n      return function (_x6) {\n        return _ref6.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchCollection\", /*#__PURE__*/function () {\n      var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(query) {\n        var collections;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n          while (1) {\n            switch (_context7.prev = _context7.next) {\n              case 0:\n                _context7.next = 2;\n                return client.collection.fetchAllWithProducts();\n\n              case 2:\n                collections = _context7.sent;\n                collections.map(function (collection) {\n                  return collection.title === query ? _this.setState({\n                    collection: collection\n                  }) : null;\n                });\n\n              case 4:\n              case \"end\":\n                return _context7.stop();\n            }\n          }\n        }, _callee7);\n      }));\n\n      return function (_x7) {\n        return _ref7.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"fetchBySearch\", /*#__PURE__*/function () {\n      var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(query) {\n        var products, searchResults;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n          while (1) {\n            switch (_context8.prev = _context8.next) {\n              case 0:\n                _context8.next = 2;\n                return client.collection.fetchAll();\n\n              case 2:\n                products = _context8.sent;\n                searchResults = products.filter(function (product) {\n                  return product.title === query;\n                });\n\n                _this.setState({\n                  searchResults: searchResults\n                });\n\n              case 5:\n              case \"end\":\n                return _context8.stop();\n            }\n          }\n        }, _callee8);\n      }));\n\n      return function (_x8) {\n        return _ref8.apply(this, arguments);\n      };\n    }());\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ShopProvider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (localStorage.checkout) {\n        this.fetchCheckout(localStorage.checkout);\n      } else {\n        this.createCheckout();\n      }\n\n      if (localStorage.checkoutTotal) {\n        var checkoutTotal = localStorage.getItem(\"checkoutTotal\");\n        this.setState({\n          checkoutTotal: checkoutTotal\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    // checkIfItemInCart = async (checkout, itemId) => {\n    //   const currentCheckout = checkout;\n    //   for (item in currentCheckout.lineItems) {\n    //     if (item.id === itemId) {\n    //       this.setState({ itemInCart: true });\n    //     }\n    //   }\n    // };\n    value: function render() {\n      return __jsx(ShopContext.Provider, {\n        value: _objectSpread(_objectSpread({}, this.state), {}, {\n          fetchAllProducts: this.fetchAllProducts,\n          fetchProductByHandle: this.fetchProductByHandle,\n          addItemToCheckout: this.addItemToCheckout,\n          removeItemFromCheckout: this.removeItemFromCheckout,\n          fetchCollection: this.fetchCollection,\n          fetchBySearch: this.fetchBySearch\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 7\n        }\n      }, this.props.children);\n    }\n  }]);\n\n  return ShopProvider;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\nvar ShopConsumer = ShopContext.Consumer;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopProvider);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zaG9wQ29udGV4dC5qcz80ZjdmIl0sIm5hbWVzIjpbIlNob3BDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiY2xpZW50IiwiQ2xpZW50IiwiYnVpbGRDbGllbnQiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTaG9wUHJvdmlkZXIiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiY2hlY2tvdXQiLCJzZWFyY2hSZXN1bHRzIiwiY3JlYXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwic2V0U3RhdGUiLCJjaGVja291dElkIiwiZmV0Y2giLCJ0aGVuIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRJZCIsInF1YW50aXR5IiwibGluZUl0ZW1zVG9BZGQiLCJwYXJzZUludCIsImFkZExpbmVJdGVtcyIsInN0YXRlIiwiY2hlY2tvdXRUb3RhbCIsImxpbmVJdGVtc0lkcyIsImNoZWNrb3V0SWRUb01vZGlmeSIsImxpbmVJdGVtc0lkVG9SZW1vdmUiLCJyZW1vdmVMaW5lSXRlbXMiLCJmZXRjaEFsbCIsImhhbmRsZSIsImZldGNoQnlIYW5kbGUiLCJxdWVyeSIsImZldGNoQWxsV2l0aFByb2R1Y3RzIiwiY29sbGVjdGlvbnMiLCJtYXAiLCJ0aXRsZSIsImZpbHRlciIsImZldGNoQ2hlY2tvdXQiLCJjcmVhdGVDaGVja291dCIsImdldEl0ZW0iLCJmZXRjaEFsbFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0QnlIYW5kbGUiLCJhZGRJdGVtVG9DaGVja291dCIsInJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQiLCJmZXRjaENvbGxlY3Rpb24iLCJmZXRjaEJ5U2VhcmNoIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlNob3BDb25zdW1lciIsIkNvbnN1bWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLQSxlQU5uQjtBQU9IQyx1QkFBYSxFQUFFLEtBQUtBO0FBUGpCLFVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdHLEtBQUtDLEtBQUwsQ0FBV0MsUUFYZCxDQURGO0FBZUQ7Ozs7RUF2SHdCdEQsNENBQUssQ0FBQ3VELFM7O0FBMEhqQyxJQUFNQyxZQUFZLEdBQUd6RCxXQUFXLENBQUMwRCxRQUFqQztBQUVBO0FBRWVsRCwyRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvc2hvcENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gXCJzaG9waWZ5LWJ1eVwiO1xuXG5jb25zdCBTaG9wQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgY2xpZW50ID0gQ2xpZW50LmJ1aWxkQ2xpZW50KHtcbiAgZG9tYWluOiBcIm9qb3Mtc3RvcmUubXlzaG9waWZ5LmNvbVwiLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46IFwiZTUyZjg0OThjNmJiNWRlYTljN2M2NjcwODYwYjcyMjRcIixcbn0pO1xuXG5jbGFzcyBTaG9wUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb2xsZWN0aW9uOiB7fSxcbiAgICBwcm9kdWN0czogW10sXG4gICAgcHJvZHVjdDoge30sXG4gICAgY2hlY2tvdXQ6IHt9LFxuICAgIC8vIGNoZWNrb3V0VG90YWw6IDAsXG4gICAgc2VhcmNoUmVzdWx0czogW10sXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dCkge1xuICAgICAgdGhpcy5mZXRjaENoZWNrb3V0KGxvY2FsU3RvcmFnZS5jaGVja291dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlQ2hlY2tvdXQoKTtcbiAgICB9XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jaGVja291dFRvdGFsKSB7XG4gICAgICBjb25zdCBjaGVja291dFRvdGFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGVja291dFRvdGFsXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ2hlY2tvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tvdXQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuY3JlYXRlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGVja291dFwiLCBjaGVja291dC5pZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgfTtcblxuICBmZXRjaENoZWNrb3V0ID0gYXN5bmMgKGNoZWNrb3V0SWQpID0+IHtcbiAgICBjbGllbnQuY2hlY2tvdXRcbiAgICAgIC5mZXRjaChjaGVja291dElkKVxuICAgICAgLnRoZW4oKGNoZWNrb3V0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIGFkZEl0ZW1Ub0NoZWNrb3V0ID0gYXN5bmMgKHZhcmlhbnRJZCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBsaW5lSXRlbXNUb0FkZCA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFyaWFudElkLFxuICAgICAgICBxdWFudGl0eTogcGFyc2VJbnQocXVhbnRpdHksIDEwKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBjaGVja291dCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5hZGRMaW5lSXRlbXMoXG4gICAgICB0aGlzLnN0YXRlLmNoZWNrb3V0LmlkLFxuICAgICAgbGluZUl0ZW1zVG9BZGRcbiAgICApO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dDogY2hlY2tvdXQgfSk7XG4gICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCwgMTApICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb3RhbDogY2hlY2tvdXRUb3RhbCB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoZWNrb3V0VG90YWxcIiwgdGhpcy5zdGF0ZS5jaGVja291dFRvdGFsKTtcbiAgfTtcblxuICByZW1vdmVJdGVtRnJvbUNoZWNrb3V0ID0gYXN5bmMgKGNoZWNrb3V0SWQsIGxpbmVJdGVtc0lkcykgPT4ge1xuICAgIGNvbnN0IGNoZWNrb3V0SWRUb01vZGlmeSA9IGF3YWl0IGNoZWNrb3V0SWQ7IC8vIElEIG9mIGFuIGV4aXN0aW5nIGNoZWNrb3V0XG4gICAgY29uc3QgbGluZUl0ZW1zSWRUb1JlbW92ZSA9IGF3YWl0IGxpbmVJdGVtc0lkcztcbiAgICAvLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBjaGVja291dFxuICAgIGNsaWVudC5jaGVja291dFxuICAgICAgLnJlbW92ZUxpbmVJdGVtcyhjaGVja291dElkVG9Nb2RpZnksIGxpbmVJdGVtc0lkVG9SZW1vdmUpXG4gICAgICAudGhlbigoY2hlY2tvdXQpID0+IHtcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHVwZGF0ZWQgY2hlY2tvdXRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0OiBjaGVja291dCB9KTtcbiAgICAgICAgY29uc3QgY2hlY2tvdXRUb3RhbCA9IHBhcnNlSW50KHRoaXMuc3RhdGUuY2hlY2tvdXRUb3RhbCwgMTApIC0gMTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrb3V0VG90YWw6IGNoZWNrb3V0VG90YWwgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hlY2tvdXRUb3RhbFwiLCB0aGlzLnN0YXRlLmNoZWNrb3V0VG90YWwpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZmV0Y2hBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5wcm9kdWN0LmZldGNoQWxsKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cyB9KTtcbiAgfTtcblxuICBmZXRjaFByb2R1Y3RCeUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LnByb2R1Y3QuZmV0Y2hCeUhhbmRsZShoYW5kbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBwcm9kdWN0IH0pO1xuICB9O1xuXG4gIGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgY2xpZW50LmNvbGxlY3Rpb24uZmV0Y2hBbGxXaXRoUHJvZHVjdHMoKTtcbiAgICBjb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+XG4gICAgICBjb2xsZWN0aW9uLnRpdGxlID09PSBxdWVyeVxuICAgICAgICA/IHRoaXMuc2V0U3RhdGUoeyBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uIH0pXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gIH07XG5cbiAgZmV0Y2hCeVNlYXJjaCA9IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmNvbGxlY3Rpb24uZmV0Y2hBbGwoKTtcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LnRpdGxlID09PSBxdWVyeSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IHNlYXJjaFJlc3VsdHMgfSk7XG4gIH07XG5cbiAgLy8gY2hlY2tJZkl0ZW1JbkNhcnQgPSBhc3luYyAoY2hlY2tvdXQsIGl0ZW1JZCkgPT4ge1xuICAvLyAgIGNvbnN0IGN1cnJlbnRDaGVja291dCA9IGNoZWNrb3V0O1xuICAvLyAgIGZvciAoaXRlbSBpbiBjdXJyZW50Q2hlY2tvdXQubGluZUl0ZW1zKSB7XG4gIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gaXRlbUlkKSB7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtSW5DYXJ0OiB0cnVlIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG9wQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgZmV0Y2hBbGxQcm9kdWN0czogdGhpcy5mZXRjaEFsbFByb2R1Y3RzLFxuICAgICAgICAgIGZldGNoUHJvZHVjdEJ5SGFuZGxlOiB0aGlzLmZldGNoUHJvZHVjdEJ5SGFuZGxlLFxuICAgICAgICAgIGFkZEl0ZW1Ub0NoZWNrb3V0OiB0aGlzLmFkZEl0ZW1Ub0NoZWNrb3V0LFxuICAgICAgICAgIHJlbW92ZUl0ZW1Gcm9tQ2hlY2tvdXQ6IHRoaXMucmVtb3ZlSXRlbUZyb21DaGVja291dCxcbiAgICAgICAgICBmZXRjaENvbGxlY3Rpb246IHRoaXMuZmV0Y2hDb2xsZWN0aW9uLFxuICAgICAgICAgIGZldGNoQnlTZWFyY2g6IHRoaXMuZmV0Y2hCeVNlYXJjaCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1Nob3BDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU2hvcENvbnN1bWVyID0gU2hvcENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCB7IFNob3BDb25zdW1lciwgU2hvcENvbnRleHQgfTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/shopContext.js\n");

/***/ })

})