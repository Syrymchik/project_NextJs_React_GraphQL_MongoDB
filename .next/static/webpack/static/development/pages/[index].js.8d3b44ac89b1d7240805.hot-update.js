webpackHotUpdate("static\\development\\pages\\[index].js",{

/***/ "./src/component/topic_search/topic_search.jsx":
/*!*****************************************************!*\
  !*** ./src/component/topic_search/topic_search.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField/TextField */ "./node_modules/@material-ui/core/TextField/TextField.js");
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\component\\topic_search\\topic_search.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const style = {
  marginHeight: '20px'
};

class TopicSearch extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      searchText: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "searchTextChange", ({
      target: {
        value
      }
    }) => {
      this.setState({
        searchText: value
      });
    });
  }

  render() {
    const {
      searchText
    } = this.state;
    const {
      text = '',
      limit
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      style: style,
      justify: "center",
      alignItems: "center",
      direction: "row",
      spacing: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      md: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
      value: searchText,
      onChange: this.searchTextChange,
      fullWidth: true,
      id: "outlined-number",
      label: "Search",
      type: "text",
      autoFocus: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      md: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      as: '/search?text=' + searchText + '&limit=' + limit,
      href: '/[index]',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      size: "large",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    }, "Search")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopicSearch);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3RvcGljX3NlYXJjaC90b3BpY19zZWFyY2guanN4Il0sIm5hbWVzIjpbInN0eWxlIiwibWFyZ2luSGVpZ2h0IiwiVG9waWNTZWFyY2giLCJDb21wb25lbnQiLCJzZWFyY2hUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwidGV4dCIsImxpbWl0IiwicHJvcHMiLCJzZWFyY2hUZXh0Q2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUc7QUFDVkMsY0FBWSxFQUFFO0FBREosQ0FBZDs7QUFJQSxNQUFNQyxXQUFOLFNBQTBCQywrQ0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLDZHQUV4QjtBQUNKQyxnQkFBVSxFQUFFO0FBRFIsS0FGd0I7O0FBQUEsd0hBTWIsQ0FBQztBQUFFQyxZQUFNLEVBQUU7QUFBRUM7QUFBRjtBQUFWLEtBQUQsS0FBMEI7QUFDekMsV0FBS0MsUUFBTCxDQUFnQjtBQUFDSCxrQkFBVSxFQUFHRTtBQUFkLE9BQWhCO0FBQ0gsS0FSK0I7QUFBQTs7QUFVaENFLFFBQU0sR0FBRTtBQUNKLFVBQU07QUFBRUo7QUFBRixRQUFpQixLQUFLSyxLQUE1QjtBQUNBLFVBQU07QUFBRUMsVUFBSSxHQUFHLEVBQVQ7QUFBYUM7QUFBYixRQUFzQixLQUFLQyxLQUFqQztBQUVBLFdBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUNNLFdBQUssRUFBRVosS0FEYjtBQUVNLGFBQU8sRUFBQyxRQUZkO0FBR00sZ0JBQVUsRUFBQyxRQUhqQjtBQUlNLGVBQVMsRUFBQyxLQUpoQjtBQUtNLGFBQU8sRUFBRSxDQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNSSxNQUFDLDhEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDRFQUFEO0FBQ0ksV0FBSyxFQUFFSSxVQURYO0FBRUksY0FBUSxFQUFFLEtBQUtTLGdCQUZuQjtBQUdJLGVBQVMsRUFBRSxJQUhmO0FBSUksUUFBRSxFQUFDLGlCQUpQO0FBS0ksV0FBSyxFQUFDLFFBTFY7QUFNSSxVQUFJLEVBQUMsTUFOVDtBQU9JLGVBQVMsRUFBRSxJQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQU5KLEVBaUJJLE1BQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFFLEVBQUUsa0JBQWtCVCxVQUFsQixHQUErQixTQUEvQixHQUEyQ08sS0FBckQ7QUFBNEQsVUFBSSxFQUFFLFVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGdFQUFEO0FBQVEsYUFBTyxFQUFDLFdBQWhCO0FBQTRCLFVBQUksRUFBQyxPQUFqQztBQUF5QyxXQUFLLEVBQUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQURKLENBakJKLENBREosQ0FESjtBQTJCSDs7QUF6QytCOztBQTZDckJULDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxbaW5kZXhdLmpzLjhkM2I0NGFjODliMWQ3MjQwODA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgbWFyZ2luSGVpZ2h0OiAnMjBweCdcclxufTtcclxuXHJcbmNsYXNzIFRvcGljU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzZWFyY2hUZXh0OiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBzZWFyY2hUZXh0Q2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH19KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggKHtzZWFyY2hUZXh0OiAgdmFsdWV9KSlcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2hUZXh0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgdGV4dCA9ICcnLCBsaW1pdH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaFRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLW51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXsnL3NlYXJjaD90ZXh0PScgKyBzZWFyY2hUZXh0ICsgJyZsaW1pdD0nICsgbGltaXR9IGhyZWY9eycvW2luZGV4XSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCI+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9waWNTZWFyY2g7Il0sInNvdXJjZVJvb3QiOiIifQ==