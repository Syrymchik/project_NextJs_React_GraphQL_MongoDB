webpackHotUpdate("static\\development\\pages\\[index].js",{

/***/ "./src/pages/[index].js":
/*!******************************!*\
  !*** ./src/pages/[index].js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_nav_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/nav/nav */ "./src/component/nav/nav.jsx");
/* harmony import */ var _component_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/table/table */ "./src/component/table/table.jsx");
/* harmony import */ var _component_pagination_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/pagination/pagination */ "./src/component/pagination/pagination.jsx");
/* harmony import */ var _component_topic_search_topic_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/topic_search/topic_search */ "./src/component/topic_search/topic_search.jsx");

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\pages\\[index].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      message: 'props is work'
    });
  }

  render() {
    const {
      index,
      posts = {},
      query,
      beforeOld,
      afterOld
    } = this.props;
    const {
      topics,
      dist,
      before,
      after
    } = posts;
    const {
      limit,
      text
    } = query;

    let pag = __jsx(_component_pagination_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      after: after,
      afterOld: afterOld,
      before: before,
      beforeOld: beforeOld,
      index: index,
      limit: limit,
      text: text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    });

    let searchComp = __jsx(_component_topic_search_topic_search__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: text,
      limit: limit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 26
      }
    });

    if (index === 'bookmark') pag = null;
    if (index !== 'search') searchComp = null;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_component_nav_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      limit: limit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), pag, searchComp, __jsx(_component_table_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      list: topics,
      isBookmark: index === 'bookmark',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }));
  }

}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvW2luZGV4XS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIkNvbXBvbmVudCIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJpbmRleCIsInBvc3RzIiwicXVlcnkiLCJiZWZvcmVPbGQiLCJhZnRlck9sZCIsInByb3BzIiwidG9waWNzIiwiZGlzdCIsImJlZm9yZSIsImFmdGVyIiwibGltaXQiLCJ0ZXh0IiwicGFnIiwic2VhcmNoQ29tcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBR0EsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQUE7QUFBQTs7QUFBQSw2R0FFbEI7QUFDSkMsYUFBTyxFQUFFO0FBREwsS0FGa0I7QUFBQTs7QUFNMUJDLFFBQU0sR0FBRTtBQUNKLFVBQU07QUFBRUMsV0FBRjtBQUFTQyxXQUFLLEdBQUcsRUFBakI7QUFBcUJDLFdBQXJCO0FBQTRCQyxlQUE1QjtBQUF1Q0M7QUFBdkMsUUFBb0QsS0FBS0MsS0FBL0Q7QUFDQSxVQUFNO0FBQUVDLFlBQUY7QUFBVUMsVUFBVjtBQUFnQkMsWUFBaEI7QUFBd0JDO0FBQXhCLFFBQWtDUixLQUF4QztBQUNBLFVBQU07QUFBRVMsV0FBRjtBQUFTQztBQUFULFFBQWtCVCxLQUF4Qjs7QUFFQSxRQUFJVSxHQUFHLEdBQUcsTUFBQyx3RUFBRDtBQUFZLFdBQUssRUFBRUgsS0FBbkI7QUFBMEIsY0FBUSxFQUFFTCxRQUFwQztBQUE4QyxZQUFNLEVBQUVJLE1BQXREO0FBQThELGVBQVMsRUFBRUwsU0FBekU7QUFBb0YsV0FBSyxFQUFFSCxLQUEzRjtBQUFrRyxXQUFLLEVBQUVVLEtBQXpHO0FBQWdILFVBQUksRUFBRUMsSUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFWOztBQUNBLFFBQUlFLFVBQVUsR0FBRyxNQUFDLDRFQUFEO0FBQWEsVUFBSSxFQUFFRixJQUFuQjtBQUF5QixXQUFLLEVBQUVELEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBakI7O0FBQ0EsUUFBSVYsS0FBSyxLQUFLLFVBQWQsRUFBMEJZLEdBQUcsR0FBRyxJQUFOO0FBQzFCLFFBQUlaLEtBQUssS0FBSyxRQUFkLEVBQXdCYSxVQUFVLEdBQUcsSUFBYjtBQUV4QixXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDBEQUFEO0FBQUssV0FBSyxFQUFFSCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVLRSxHQUZMLEVBR0tDLFVBSEwsRUFJSSxNQUFDLDhEQUFEO0FBQWdCLFVBQUksRUFBRVAsTUFBdEI7QUFBOEIsZ0JBQVUsRUFBRU4sS0FBSyxLQUFLLFVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixDQURKO0FBUUg7O0FBeEJ5Qjs7O0FBMkJmSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcW2luZGV4XS5qcy5jZDg4YmFhNmY0MGM1MGNlM2U2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudC9uYXYvbmF2J1xuaW1wb3J0IFRhYmxlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC90YWJsZS90YWJsZSdcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudC9wYWdpbmF0aW9uL3BhZ2luYXRpb24nXG5cbmltcG9ydCB7Z2V0QWxsUG9zdHMsIGdldEFsbFBvc3RzQnlUZXh0fSBmcm9tICcuLi9saWIvYXBpJ1xuaW1wb3J0IFRvcGljU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnQvdG9waWNfc2VhcmNoL3RvcGljX3NlYXJjaFwiO1xuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBtZXNzYWdlOiAncHJvcHMgaXMgd29yaydcbiAgICB9O1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIHBvc3RzID0ge30sIHF1ZXJ5LCBiZWZvcmVPbGQsIGFmdGVyT2xkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHRvcGljcywgZGlzdCwgYmVmb3JlLCBhZnRlciB9ID0gcG9zdHM7XG4gICAgICAgIGNvbnN0IHsgbGltaXQsIHRleHQgfSA9IHF1ZXJ5O1xuXG4gICAgICAgIGxldCBwYWcgPSA8UGFnaW5hdGlvbiBhZnRlcj17YWZ0ZXJ9IGFmdGVyT2xkPXthZnRlck9sZH0gYmVmb3JlPXtiZWZvcmV9IGJlZm9yZU9sZD17YmVmb3JlT2xkfSBpbmRleD17aW5kZXh9IGxpbWl0PXtsaW1pdH0gdGV4dD17dGV4dH0gLz47XG4gICAgICAgIGxldCBzZWFyY2hDb21wID0gPFRvcGljU2VhcmNoIHRleHQ9e3RleHR9IGxpbWl0PXtsaW1pdH0vPjtcbiAgICAgICAgaWYgKGluZGV4ID09PSAnYm9va21hcmsnKSBwYWcgPSBudWxsO1xuICAgICAgICBpZiAoaW5kZXggIT09ICdzZWFyY2gnKSBzZWFyY2hDb21wID0gbnVsbDtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXYgbGltaXQ9e2xpbWl0fS8+XG4gICAgICAgICAgICAgICAge3BhZ31cbiAgICAgICAgICAgICAgICB7c2VhcmNoQ29tcH1cbiAgICAgICAgICAgICAgICA8VGFibGVDb21wb25lbnQgbGlzdD17dG9waWNzfSBpc0Jvb2ttYXJrPXtpbmRleCA9PT0gJ2Jvb2ttYXJrJ30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gICAgY29uc3QgeyBxdWVyeSwgcGFyYW1zIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHsgbGltaXQgPSAxMCwgYWZ0ZXIgPSAnJywgYmVmb3JlID0gJycsIHRleHQgPSAnJyB9ID0gcXVlcnk7XG4gICAgY29uc3QgeyBpbmRleCA9ICdob3QnIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgYWZ0ZXJPbGQgPSBhZnRlciwgYmVmb3JlT2xkID0gYmVmb3JlO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoaW5kZXggIT09ICdzZWFyY2gnKSByZXN1bHQgPSAoYXdhaXQgZ2V0QWxsUG9zdHMoaW5kZXgsIGxpbWl0LCBhZnRlciwgYmVmb3JlKSkgfHwgW107XG4gICAgZWxzZSByZXN1bHQgPSAoYXdhaXQgZ2V0QWxsUG9zdHNCeVRleHQobGltaXQsIGFmdGVyLCBiZWZvcmUsIHRleHQpKSB8fCBbXTtcblxuICAgIGNvbnN0IHBvc3RzID0gcmVzdWx0W2luZGV4XSB8fCBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBhZnRlck9sZCxcbiAgICAgICAgICAgIGJlZm9yZU9sZCxcbiAgICAgICAgfSxcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9