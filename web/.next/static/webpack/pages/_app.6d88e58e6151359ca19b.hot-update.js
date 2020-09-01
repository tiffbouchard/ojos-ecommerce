webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar/nav.js":
/*!**********************************!*\
  !*** ./components/navbar/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/navbar/nav.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      navBackground = _useState[0],\n      setNavBackground = _useState[1];\n\n  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  navRef.current = navBackground;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handleScroll = function handleScroll() {\n      var show = window.scrollY > 50;\n\n      if (navRef.current !== show) {\n        setNavBackground(show);\n      }\n    };\n\n    document.addEventListener(\"scroll\", handleScroll);\n    return function () {\n      document.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return __jsx(\"nav\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"/collections/all\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Shop\"), __jsx(\"a\", {\n    href: \"/collections/new\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"New\"), __jsx(\"a\", {\n    href: \"/collections/tops\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Tops\"), __jsx(\"a\", {\n    href: \"/collections/bottoms\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Bottoms\"), __jsx(\"a\", {\n    href: \"/collections/accessories\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"Accessories\"), __jsx(\"a\", {\n    href: \"/collections/bags\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Bags\"), __jsx(\"a\", {\n    href: \"/collections/jewelry\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Jewelry\"), __jsx(\"a\", {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"About\")) // <Navbar bg=\"white\" fixed=\"top\" expand=\"md\">\n  //   <Navbar.Brand\n  //     style={{\n  //       fontSize: \"25px\",\n  //     }}\n  //     href=\"/\"\n  //   >\n  //     OJOS\n  //   </Navbar.Brand>\n  //   <Navbar.Toggle\n  //     aria-controls=\"basic-navbar-nav\"\n  //     style={{\n  //       border: \"none\",\n  //     }}\n  //   />\n  //   <Navbar.Collapse id=\"basic-navbar-nav\">\n  //     <Nav\n  //       className=\"mr-auto\"\n  //       style={{\n  //         maxWidth: \"70vw\",\n  //       }}\n  //     >\n  //       <NavDropdown title=\"Shop\">\n  //         <Navbar>\n  //           <Nav className=\"mr-auto\">\n  //             <Nav.Link href=\"/collections/new\">New</Nav.Link>\n  //             <Nav.Link href=\"/collections/tops\">Tops</Nav.Link>\n  //             <Nav.Link href=\"/collections/bottoms\">Bottoms</Nav.Link>\n  //             <Nav.Link href=\"/collections/accessories\">Accessories</Nav.Link>\n  //             <Nav.Link href=\"/collections/bags\">Bags</Nav.Link>\n  //             <Nav.Link href=\"/collections/jewelry\">Jewelry</Nav.Link>\n  //           </Nav>\n  //         </Navbar>\n  //       </NavDropdown>\n  //       <Nav.Link href=\"/about\">About</Nav.Link>\n  //     </Nav>\n  //   </Navbar.Collapse>\n  //   <Navbar.Collapse\n  //     style={{\n  //       maxWidth: \"200px\",\n  //     }}\n  //   >\n  //     <Nav>\n  //       <Form inline>\n  //         <FormControl\n  //           type=\"text\"\n  //           placeholder=\"Search\"\n  //           style={{\n  //             width: \"100%\",\n  //           }}\n  //         />\n  //       </Form>\n  //       <Nav.Link href=\"/cart\">Cart</Nav.Link>\n  //     </Nav>\n  //   </Navbar.Collapse>\n  // </Navbar>\n  ;\n};\n\n_s(Navigation, \"ZKMU/cFpboXI6qcKTXdrnXPjP8E=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvbmF2LmpzP2M0NDciXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInVzZVN0YXRlIiwibmF2QmFja2dyb3VuZCIsInNldE5hdkJhY2tncm91bmQiLCJuYXZSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwic2hvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyxzREFBUSxDQUFDLEtBQUQsQ0FEM0I7QUFBQSxNQUNoQkMsYUFEZ0I7QUFBQSxNQUNEQyxnQkFEQzs7QUFHdkIsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxFQUFyQjtBQUNBRCxRQUFNLENBQUNFLE9BQVAsR0FBaUJKLGFBQWpCO0FBRUFLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsVUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBOUI7O0FBQ0EsVUFBSVAsTUFBTSxDQUFDRSxPQUFQLEtBQW1CRyxJQUF2QixFQUE2QjtBQUMzQk4sd0JBQWdCLENBQUNNLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEtBTEQ7O0FBTUFHLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NMLFlBQXBDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hJLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNOLFlBQXZDO0FBQ0QsS0FGRDtBQUdELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsRUFHRTtBQUFHLFFBQUksRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRTtBQUFHLFFBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRTtBQUFHLFFBQUksRUFBQywwQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLEVBTUU7QUFBRyxRQUFJLEVBQUMsbUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBT0U7QUFBRyxRQUFJLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLEVBUUU7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsQ0FERixDQVdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsRUY7QUFvRUQsQ0F2RkQ7O0dBQU1SLFU7O0tBQUFBLFU7QUF5RlNBLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZCYWNrZ3JvdW5kLCBzZXROYXZCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBuYXZSZWYgPSB1c2VSZWYoKTtcbiAgbmF2UmVmLmN1cnJlbnQgPSBuYXZCYWNrZ3JvdW5kO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdyA9IHdpbmRvdy5zY3JvbGxZID4gNTA7XG4gICAgICBpZiAobmF2UmVmLmN1cnJlbnQgIT09IHNob3cpIHtcbiAgICAgICAgc2V0TmF2QmFja2dyb3VuZChzaG93KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL2FsbFwiPlNob3A8L2E+XG4gICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL25ld1wiPk5ldzwvYT5cbiAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvdG9wc1wiPlRvcHM8L2E+XG4gICAgICA8YSBocmVmPVwiL2NvbGxlY3Rpb25zL2JvdHRvbXNcIj5Cb3R0b21zPC9hPlxuICAgICAgPGEgaHJlZj1cIi9jb2xsZWN0aW9ucy9hY2Nlc3Nvcmllc1wiPkFjY2Vzc29yaWVzPC9hPlxuICAgICAgPGEgaHJlZj1cIi9jb2xsZWN0aW9ucy9iYWdzXCI+QmFnczwvYT5cbiAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvamV3ZWxyeVwiPkpld2Vscnk8L2E+XG4gICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgPC9uYXY+XG4gICAgLy8gPE5hdmJhciBiZz1cIndoaXRlXCIgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJtZFwiPlxuICAgIC8vICAgPE5hdmJhci5CcmFuZFxuICAgIC8vICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcbiAgICAvLyAgICAgfX1cbiAgICAvLyAgICAgaHJlZj1cIi9cIlxuICAgIC8vICAgPlxuICAgIC8vICAgICBPSk9TXG4gICAgLy8gICA8L05hdmJhci5CcmFuZD5cbiAgICAvLyAgIDxOYXZiYXIuVG9nZ2xlXG4gICAgLy8gICAgIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCJcbiAgICAvLyAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIC8vICAgICB9fVxuICAgIC8vICAgLz5cbiAgICAvLyAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgLy8gICAgIDxOYXZcbiAgICAvLyAgICAgICBjbGFzc05hbWU9XCJtci1hdXRvXCJcbiAgICAvLyAgICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgICAgbWF4V2lkdGg6IFwiNzB2d1wiLFxuICAgIC8vICAgICAgIH19XG4gICAgLy8gICAgID5cbiAgICAvLyAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJTaG9wXCI+XG4gICAgLy8gICAgICAgICA8TmF2YmFyPlxuICAgIC8vICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAvLyAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb2xsZWN0aW9ucy9uZXdcIj5OZXc8L05hdi5MaW5rPlxuICAgIC8vICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbGxlY3Rpb25zL3RvcHNcIj5Ub3BzPC9OYXYuTGluaz5cbiAgICAvLyAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb2xsZWN0aW9ucy9ib3R0b21zXCI+Qm90dG9tczwvTmF2Lkxpbms+XG4gICAgLy8gICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvY29sbGVjdGlvbnMvYWNjZXNzb3JpZXNcIj5BY2Nlc3NvcmllczwvTmF2Lkxpbms+XG4gICAgLy8gICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvY29sbGVjdGlvbnMvYmFnc1wiPkJhZ3M8L05hdi5MaW5rPlxuICAgIC8vICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbGxlY3Rpb25zL2pld2VscnlcIj5KZXdlbHJ5PC9OYXYuTGluaz5cbiAgICAvLyAgICAgICAgICAgPC9OYXY+XG4gICAgLy8gICAgICAgICA8L05hdmJhcj5cbiAgICAvLyAgICAgICA8L05hdkRyb3Bkb3duPlxuICAgIC8vICAgICAgIDxOYXYuTGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L05hdi5MaW5rPlxuICAgIC8vICAgICA8L05hdj5cbiAgICAvLyAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgIC8vICAgPE5hdmJhci5Db2xsYXBzZVxuICAgIC8vICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgIG1heFdpZHRoOiBcIjIwMHB4XCIsXG4gICAgLy8gICAgIH19XG4gICAgLy8gICA+XG4gICAgLy8gICAgIDxOYXY+XG4gICAgLy8gICAgICAgPEZvcm0gaW5saW5lPlxuICAgIC8vICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgLy8gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAvLyAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgIC8vICAgICAgICAgICBzdHlsZT17e1xuICAgIC8vICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAvLyAgICAgICAgICAgfX1cbiAgICAvLyAgICAgICAgIC8+XG4gICAgLy8gICAgICAgPC9Gb3JtPlxuICAgIC8vICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NhcnRcIj5DYXJ0PC9OYXYuTGluaz5cbiAgICAvLyAgICAgPC9OYXY+XG4gICAgLy8gICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAvLyA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/nav.js\n");

/***/ })

})