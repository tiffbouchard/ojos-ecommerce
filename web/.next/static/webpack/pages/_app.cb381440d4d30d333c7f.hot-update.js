webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/components/nav.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar Navigation = function Navigation() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      hovered = _React$useState2[0],\n      setHovered = _React$useState2[1];\n\n  var toggleHover = function toggleHover() {\n    return setHovered(!hovered);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"nav\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"nav-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/collections/all\",\n    onMouseEnter: toggleHover,\n    onMouseLeave: toggleHover,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, \"Shop\"), __jsx(\"a\", {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, \"About\")), __jsx(\"div\", {\n    id: \"nav-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \"OJOS\")), __jsx(\"div\", {\n    id: \"nav-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/search\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Search\"), __jsx(\"a\", {\n    href: \"/cart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"Cart\"))), __jsx(\"nav\", {\n    id: \"dropdown-nav\",\n    className: hovered ? \"dropdown-nav-hover\" : \"dropdown-nav-hover\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"/collections/new\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"New\"), __jsx(\"a\", {\n    href: \"/collections/tops\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Tops\"), __jsx(\"a\", {\n    href: \"/collections/bottoms\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Bottoms\"), __jsx(\"a\", {\n    href: \"/collections/accessories\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Accessories\"), __jsx(\"a\", {\n    href: \"/collections/bags\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Bags\"), __jsx(\"a\", {\n    href: \"/collections/jewelry\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Jewelry\"))) // <Navbar bg=\"white\" fixed=\"top\" expand=\"md\">\n  //   <Navbar.Brand\n  //     style={{\n  //       fontSize: \"25px\",\n  //     }}\n  //     href=\"/\"\n  //   >\n  //     OJOS\n  //   </Navbar.Brand>\n  //   <Navbar.Toggle\n  //     aria-controls=\"basic-navbar-nav\"\n  //     style={{\n  //       border: \"none\",\n  //     }}\n  //   />\n  //   <Navbar.Collapse id=\"basic-navbar-nav\">\n  //     <Nav\n  //       className=\"mr-auto\"\n  //       style={{\n  //         maxWidth: \"70vw\",\n  //       }}\n  //     >\n  //       <NavDropdown title=\"Shop\">\n  //         <Navbar>\n  //           <Nav className=\"mr-auto\">\n  //             <Nav.Link href=\"/collections/new\">New</Nav.Link>\n  //             <Nav.Link href=\"/collections/tops\">Tops</Nav.Link>\n  //             <Nav.Link href=\"/collections/bottoms\">Bottoms</Nav.Link>\n  //             <Nav.Link href=\"/collections/accessories\">Accessories</Nav.Link>\n  //             <Nav.Link href=\"/collections/bags\">Bags</Nav.Link>\n  //             <Nav.Link href=\"/collections/jewelry\">Jewelry</Nav.Link>\n  //           </Nav>\n  //         </Navbar>\n  //       </NavDropdown>\n  //       <Nav.Link href=\"/about\">About</Nav.Link>\n  //     </Nav>\n  //   </Navbar.Collapse>\n  //   <Navbar.Collapse\n  //     style={{\n  //       maxWidth: \"200px\",\n  //     }}\n  //   >\n  //     <Nav>\n  //       <Form inline>\n  //         <FormControl\n  //           type=\"text\"\n  //           placeholder=\"Search\"\n  //           style={{\n  //             width: \"100%\",\n  //           }}\n  //         />\n  //       </Form>\n  //       <Nav.Link href=\"/cart\">Cart</Nav.Link>\n  //     </Nav>\n  //   </Navbar.Collapse>\n  // </Navbar>\n  ;\n};\n\n_s(Navigation, \"V8YbV+gTZxGliGj1g0fftBlvsq4=\");\n\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanM/MzFiMiJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwidG9nZ2xlSG92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsd0JBQ09DLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRFA7QUFBQTtBQUFBLE1BQ2hCQyxPQURnQjtBQUFBLE1BQ1BDLFVBRE87O0FBRXZCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUQsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBaEI7QUFBQSxHQUFwQjs7QUFDQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGtCQURQO0FBRUUsZ0JBQVksRUFBRUUsV0FGaEI7QUFHRSxnQkFBWSxFQUFFQSxXQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFRRTtBQUFHLFFBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixDQURGLEVBV0U7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FYRixFQWNFO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FkRixDQURGLEVBb0JFO0FBQ0UsTUFBRSxFQUFDLGNBREw7QUFFRSxhQUFTLEVBQUVGLE9BQU8sR0FBRyxvQkFBSCxHQUEwQixvQkFGOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsUUFBSSxFQUFDLGtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKRixFQUtFO0FBQUcsUUFBSSxFQUFDLG1CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixFQU1FO0FBQUcsUUFBSSxFQUFDLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixFQU9FO0FBQUcsUUFBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsRUFRRTtBQUFHLFFBQUksRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFHLFFBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsQ0FwQkYsQ0FERixDQWlDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEZGO0FBMEZELENBN0ZEOztHQUFNSCxVOztLQUFBQSxVO0FBK0ZTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVIb3ZlciA9ICgpID0+IHNldEhvdmVyZWQoIWhvdmVyZWQpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBpZD1cIm5hdi10d29cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIi9jb2xsZWN0aW9ucy9hbGxcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0b2dnbGVIb3Zlcn1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dG9nZ2xlSG92ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvcFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwibmF2LWhlYWRlclwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+T0pPUzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdHdvXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIi9zZWFyY2hcIj5TZWFyY2g8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jYXJ0XCI+Q2FydDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxuYXZcbiAgICAgICAgaWQ9XCJkcm9wZG93bi1uYXZcIlxuICAgICAgICBjbGFzc05hbWU9e2hvdmVyZWQgPyBcImRyb3Bkb3duLW5hdi1ob3ZlclwiIDogXCJkcm9wZG93bi1uYXYtaG92ZXJcIn1cbiAgICAgID5cbiAgICAgICAgPGEgaHJlZj1cIi9jb2xsZWN0aW9ucy9uZXdcIj5OZXc8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvdG9wc1wiPlRvcHM8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvYm90dG9tc1wiPkJvdHRvbXM8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIvY29sbGVjdGlvbnMvYWNjZXNzb3JpZXNcIj5BY2Nlc3NvcmllczwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9jb2xsZWN0aW9ucy9iYWdzXCI+QmFnczwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9jb2xsZWN0aW9ucy9qZXdlbHJ5XCI+SmV3ZWxyeTwvYT5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICAgIC8vIDxOYXZiYXIgYmc9XCJ3aGl0ZVwiIGZpeGVkPVwidG9wXCIgZXhwYW5kPVwibWRcIj5cbiAgICAvLyAgIDxOYXZiYXIuQnJhbmRcbiAgICAvLyAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgLy8gICAgIH19XG4gICAgLy8gICAgIGhyZWY9XCIvXCJcbiAgICAvLyAgID5cbiAgICAvLyAgICAgT0pPU1xuICAgIC8vICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgLy8gICA8TmF2YmFyLlRvZ2dsZVxuICAgIC8vICAgICBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiXG4gICAgLy8gICAgIHN0eWxlPXt7XG4gICAgLy8gICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAvLyAgICAgfX1cbiAgICAvLyAgIC8+XG4gICAgLy8gICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxuICAgIC8vICAgICA8TmF2XG4gICAgLy8gICAgICAgY2xhc3NOYW1lPVwibXItYXV0b1wiXG4gICAgLy8gICAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICAgIG1heFdpZHRoOiBcIjcwdndcIixcbiAgICAvLyAgICAgICB9fVxuICAgIC8vICAgICA+XG4gICAgLy8gICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiU2hvcFwiPlxuICAgIC8vICAgICAgICAgPE5hdmJhcj5cbiAgICAvLyAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgLy8gICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvY29sbGVjdGlvbnMvbmV3XCI+TmV3PC9OYXYuTGluaz5cbiAgICAvLyAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb2xsZWN0aW9ucy90b3BzXCI+VG9wczwvTmF2Lkxpbms+XG4gICAgLy8gICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvY29sbGVjdGlvbnMvYm90dG9tc1wiPkJvdHRvbXM8L05hdi5MaW5rPlxuICAgIC8vICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbGxlY3Rpb25zL2FjY2Vzc29yaWVzXCI+QWNjZXNzb3JpZXM8L05hdi5MaW5rPlxuICAgIC8vICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2NvbGxlY3Rpb25zL2JhZ3NcIj5CYWdzPC9OYXYuTGluaz5cbiAgICAvLyAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb2xsZWN0aW9ucy9qZXdlbHJ5XCI+SmV3ZWxyeTwvTmF2Lkxpbms+XG4gICAgLy8gICAgICAgICAgIDwvTmF2PlxuICAgIC8vICAgICAgICAgPC9OYXZiYXI+XG4gICAgLy8gICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAvLyAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9OYXYuTGluaz5cbiAgICAvLyAgICAgPC9OYXY+XG4gICAgLy8gICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAvLyAgIDxOYXZiYXIuQ29sbGFwc2VcbiAgICAvLyAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICBtYXhXaWR0aDogXCIyMDBweFwiLFxuICAgIC8vICAgICB9fVxuICAgIC8vICAgPlxuICAgIC8vICAgICA8TmF2PlxuICAgIC8vICAgICAgIDxGb3JtIGlubGluZT5cbiAgICAvLyAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgIC8vICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgLy8gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAvLyAgICAgICAgICAgc3R5bGU9e3tcbiAgICAvLyAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgLy8gICAgICAgICAgIH19XG4gICAgLy8gICAgICAgICAvPlxuICAgIC8vICAgICAgIDwvRm9ybT5cbiAgICAvLyAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jYXJ0XCI+Q2FydDwvTmF2Lkxpbms+XG4gICAgLy8gICAgIDwvTmF2PlxuICAgIC8vICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgLy8gPC9OYXZiYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

})