webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./src/component/comments/comments.jsx":
/*!*********************************************!*\
  !*** ./src/component/comments/comments.jsx ***!
  \*********************************************/
/*! exports provided: Comment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SnackbarContent/SnackbarContent */ "./node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js");
/* harmony import */ var _material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\component\\comments\\comments.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const style = {
  comment: {
    marginTop: '30px',
    background: 'inherit',
    color: 'inherit'
  },
  repliesStyle: {
    marginTop: '5px',
    background: 'grey',
    marginLeft: '50px'
  }
};
class Comment extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    const {
      body,
      replies
    } = this.props.comment;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
      message: body,
      style: style.comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }), replies.map((obj, index) => __jsx(_material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      style: style.repliesStyle,
      message: obj.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 29
      }
    })));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Comment, "propTypes", {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Comment, "defaultProps", {
  comment: {}
});

class Comments extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    const {
      comments = []
    } = this.props;

    if (comments.length <= 0) {
      return __jsx(_material_ui_core_SnackbarContent_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
        message: 'No Comment',
        style: style.comment,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 20
        }
      });
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, comments.map((comment, index) => __jsx(Comment, {
      key: index,
      comment: comment,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    })));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Comments, "propTypes", {
  comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Comments, "defaultProps", {
  comments: []
});

/* harmony default export */ __webpack_exports__["default"] = (Comments);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/component/nav/nav.jsx":
/*!***********************************!*\
  !*** ./src/component/nav/nav.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "./node_modules/@material-ui/icons/Whatshot.js");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FiberNew */ "./node_modules/@material-ui/icons/FiberNew.js");
/* harmony import */ var _material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ImageSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ImageSearch */ "./node_modules/@material-ui/icons/ImageSearch.js");
/* harmony import */ var _material_ui_icons_ImageSearch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImageSearch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\component\\nav\\nav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class Nav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "render", () => {
      const {
        limit = 10
      } = this.props;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        position: "static",
        color: "transparent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: `/hot?limit=${limit}`,
        href: '/[index]',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 29
        }
      }, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, "Hot"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: `/news?limit=${limit}`,
        href: '/[index]',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      }, __jsx(_material_ui_icons_FiberNew__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 33
        }
      }, "New"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: `/search?limit=${limit}`,
        href: '/search',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 29
        }
      }, __jsx(_material_ui_icons_ImageSearch__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 33
        }
      }, "Search"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: `/bookmark?limit=${limit}`,
        href: '/[index]',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        edge: "start",
        color: "inherit",
        "aria-label": "menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      }, __jsx(_material_ui_icons_ImageSearch__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 33
        }
      }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 33
        }
      }, "Bookmark"))))));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2NvbW1lbnRzL2NvbW1lbnRzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L25hdi9uYXYuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiY29tbWVudCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJjb2xvciIsInJlcGxpZXNTdHlsZSIsIm1hcmdpbkxlZnQiLCJDb21tZW50IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYm9keSIsInJlcGxpZXMiLCJwcm9wcyIsIm1hcCIsIm9iaiIsImluZGV4IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiQ29tbWVudHMiLCJjb21tZW50cyIsImxlbmd0aCIsImFycmF5IiwiTmF2IiwibGltaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxLQUFLLEdBQUc7QUFDVkMsU0FBTyxFQUFFO0FBQ0xDLGFBQVMsRUFBRSxNQUROO0FBRUxDLGNBQVUsRUFBRSxTQUZQO0FBR0xDLFNBQUssRUFBRTtBQUhGLEdBREM7QUFNVkMsY0FBWSxFQUFFO0FBQ1ZILGFBQVMsRUFBRSxLQUREO0FBRVZDLGNBQVUsRUFBRSxNQUZGO0FBR1ZHLGNBQVUsRUFBRTtBQUhGO0FBTkosQ0FBZDtBQWNPLE1BQU1DLE9BQU4sU0FBc0JDLCtDQUF0QixDQUFnQztBQUFBO0FBQUE7O0FBQUEsNkdBQzNCLEVBRDJCO0FBQUE7O0FBWW5DQyxRQUFNLEdBQUc7QUFDTCxVQUFNO0FBQUVDLFVBQUY7QUFBUUM7QUFBUixRQUFvQixLQUFLQyxLQUFMLENBQVdYLE9BQXJDO0FBRUEsV0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdGQUFEO0FBQWlCLGFBQU8sRUFBRVMsSUFBMUI7QUFDaUIsV0FBSyxFQUFFVixLQUFLLENBQUNDLE9BRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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eUMsc0JBQVcsTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxvRUFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLENBREosQ0F6QkosQ0FESixDQURKLENBREo7QUF3Q0gsS0E5Q3VCO0FBQUE7O0FBQUE7O0FBaURiRCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdG9waWMuanMuMTI4MWM1OGNiNjQ5YjM3MWZlMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBTbmFja2JhckNvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyQ29udGVudC9TbmFja2JhckNvbnRlbnRcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGNvbW1lbnQ6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICczMHB4JyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgIH0sXHJcbiAgICByZXBsaWVzU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmV5JyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY29tbWVudDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBjb21tZW50OiB7fSxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYm9keSwgcmVwbGllcyB9ID0gdGhpcy5wcm9wcy5jb21tZW50O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8U25hY2tiYXJDb250ZW50IG1lc3NhZ2U9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZS5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXBsaWVzLm1hcCgob2JqLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrYmFyQ29udGVudCBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUucmVwbGllc1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtvYmouYm9keX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29tbWVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBjb21tZW50czogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbW1lbnRzOiBbXSxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7IGNvbW1lbnRzID0gW119ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoY29tbWVudHMubGVuZ3RoIDw9MCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxTbmFja2JhckNvbnRlbnQgbWVzc2FnZT17J05vIENvbW1lbnQnfSBzdHlsZT17c3R5bGUuY29tbWVudH0gIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IGtleT17IGluZGV4IH0gY29tbWVudD17Y29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFdoYXRzaG90SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2hhdHNob3QnO1xyXG5pbXBvcnQgRmliZXJOZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaWJlck5ldyc7XHJcbmltcG9ydCBJbWFnZVNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlU2VhcmNoJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmNsYXNzIE5hdiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7fTtcclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsaW1pdCA9IDEwIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj17XCJ0cmFuc3BhcmVudFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvaG90P2xpbWl0PSR7bGltaXR9YH0gaHJlZj17Jy9baW5kZXhdJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c2hvdEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvbmV3cz9saW1pdD0ke2xpbWl0fWB9IGhyZWY9eycvW2luZGV4XSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmliZXJOZXdJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3NlYXJjaD9saW1pdD0ke2xpbWl0fWB9IGhyZWY9eycvc2VhcmNoJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVNlYXJjaEljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYm9va21hcms/bGltaXQ9JHtsaW1pdH1gfSBocmVmPXsnL1tpbmRleF0nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlU2VhcmNoSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2ttYXJrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sInNvdXJjZVJvb3QiOiIifQ==