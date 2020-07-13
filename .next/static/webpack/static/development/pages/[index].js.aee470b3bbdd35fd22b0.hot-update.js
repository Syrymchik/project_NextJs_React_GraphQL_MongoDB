webpackHotUpdate("static\\development\\pages\\[index].js",{

/***/ "./src/component/table/table.jsx":
/*!***************************************!*\
  !*** ./src/component/table/table.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Bookmark__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Bookmark */ "./node_modules/@material-ui/icons/Bookmark.js");
/* harmony import */ var _material_ui_icons_Bookmark__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Bookmark__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../lib/api */ "./src/lib/api.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\component\\table\\table.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















const StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"]);
const StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"]);

class Item extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "saveTopic", () => {
      return () => {
        const {
          item
        } = this.props;
        Object(_lib_api__WEBPACK_IMPORTED_MODULE_17__["addTopic"])(item.permalink, item.subreddit, item.title, item.score, item.thumbnail, item.url, item.selftext, item.author, item.created);
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteBookMark", () => {
      return () => {
        const {
          item
        } = this.props;
        Object(_lib_api__WEBPACK_IMPORTED_MODULE_17__["deleteTopic"])(item.id);
        next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push('/[index]', '/bookmark');
      };
    });
  }

  render() {
    const {
      subreddit,
      title,
      score,
      permalink
    } = this.props.item;
    const {
      isBookmark = false
    } = this.props;
    let action;

    if (!isBookmark) {
      action = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        endIcon: __jsx(_material_ui_icons_Bookmark__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 26
          }
        }),
        onClick: this.saveTopic(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 23
        }
      }, "save");
    } else {
      action = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        endIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 26
          }
        }),
        onClick: this.deleteBookMark(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 22
        }
      }, "delete");
    }

    return __jsx(StyledTableRow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, __jsx(StyledTableCell, {
      colSpan: 3,
      align: "justify",
      component: "th",
      scope: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, " ", subreddit, " "), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "justify",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, title), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, score), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
      orientation: "vertical",
      color: "inherit",
      "aria-label": "vertical outlined primary button group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
      as: '/topic?permalink=' + permalink,
      href: '/topic',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endIcon: __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 50
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 37
      }
    }, "read")), action)));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Item, "propsTypes", {
  isBookmark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.boolean,
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    subreddit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    score: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    selftext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    permalink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    changePermaLink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  })
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Item, "defaultProps", {
  isBookmark: false,
  item: {
    subreddit: 'no content',
    title: 'no content',
    score: 0,
    thumbnail: 'no content',
    url: 'no content',
    selftext: 'no content',
    permalink: 'no content',
    changePermaLink: vl => {
      alert(vl);
    }
  }
});

const headNames = {
  title1: 'Subreddit',
  title2: 'Title',
  title3: 'Selftext',
  title4: 'Score',
  title5: 'Action'
};

class TableComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    const {
      list = [],
      isBookmark
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": "customized table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 29
      }
    }, __jsx(StyledTableCell, {
      colSpan: 3,
      align: "center",
      component: "th",
      scope: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 33
      }
    }, headNames.title1), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 33
      }
    }, headNames.title2), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 33
      }
    }, headNames.title4), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 33
      }
    }, headNames.title5))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, list.map((item, index) => __jsx(Item, {
      item: item,
      key: index,
      isBookmark: isBookmark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 37
      }
    }))))));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TableComponent, "propsTypes", {
  list: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  isBookmark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.boolean,
  changePermaLink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(TableComponent, "defaultProps", {
  list: [],
  isBookmark: false,
  changePermaLink: vl => {
    alert(vl);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (TableComponent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3RhYmxlL3RhYmxlLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29sb3IiLCJ3aGl0ZSIsImJvZHkiLCJmb250U2l6ZSIsIlRhYmxlQ2VsbCIsIlN0eWxlZFRhYmxlUm93Iiwicm9vdCIsImFjdGlvbiIsImhvdmVyIiwiVGFibGVSb3ciLCJJdGVtIiwiQ29tcG9uZW50IiwiaXRlbSIsInByb3BzIiwiYWRkVG9waWMiLCJwZXJtYWxpbmsiLCJzdWJyZWRkaXQiLCJ0aXRsZSIsInNjb3JlIiwidGh1bWJuYWlsIiwidXJsIiwic2VsZnRleHQiLCJhdXRob3IiLCJjcmVhdGVkIiwiZGVsZXRlVG9waWMiLCJpZCIsIlJvdXRlciIsInB1c2giLCJyZW5kZXIiLCJpc0Jvb2ttYXJrIiwic2F2ZVRvcGljIiwiZGVsZXRlQm9va01hcmsiLCJQcm9wVHlwZXMiLCJib29sZWFuIiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJjaGFuZ2VQZXJtYUxpbmsiLCJmdW5jIiwidmwiLCJhbGVydCIsImhlYWROYW1lcyIsInRpdGxlMSIsInRpdGxlMiIsInRpdGxlMyIsInRpdGxlNCIsInRpdGxlNSIsIlRhYmxlQ29tcG9uZW50IiwibGlzdCIsIlBhcGVyIiwibWFwIiwiaW5kZXgiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLGVBQWUsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxJQUMvQkMsNkVBQVksQ0FBQztB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QXdCSDs7QUEzQ2tDOzswRkFBakNrQixjLGdCQUlrQjtBQUNoQkMsTUFBSSxFQUFFaEIsaURBQVMsQ0FBQ29CLEtBREE7QUFFaEJ2QixZQUFVLEVBQUVHLGlEQUFTLENBQUNDLE9BRk47QUFHaEJJLGlCQUFlLEVBQUVMLGlEQUFTLENBQUNNO0FBSFgsQzs7MEZBSmxCUyxjLGtCQVVvQjtBQUNsQkMsTUFBSSxFQUFFLEVBRFk7QUFFbEJuQixZQUFVLEVBQUUsS0FGTTtBQUdsQlEsaUJBQWUsRUFBR0UsRUFBRCxJQUFRO0FBQUVDLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQVc7QUFIcEIsQzs7QUFvQ1hRLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxbaW5kZXhdLmpzLmFlZTQ3MGIzYmJkZDM1ZmQyMmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBCb29rbWFya0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Jvb2ttYXJrJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgYWRkVG9waWMsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKShUYWJsZUNlbGwpO1xyXG5cclxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgICAnJjpudGgtb2YtdHlwZShvZGQpJzoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSksXHJcbikoVGFibGVSb3cpO1xyXG5cclxuY2xhc3MgSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgcHJvcHNUeXBlcyA9IHtcclxuICAgICAgICBpc0Jvb2ttYXJrOiBQcm9wVHlwZXMuYm9vbGVhbixcclxuICAgICAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgICBzdWJyZWRkaXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBzY29yZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICAgICAgdGh1bWJuYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHNlbGZ0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBwZXJtYWxpbms6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIGNoYW5nZVBlcm1hTGluazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBpc0Jvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgIHN1YnJlZGRpdDogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgdGh1bWJuYWlsOiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIHVybDogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICBzZWxmdGV4dDogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICBwZXJtYWxpbms6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgY2hhbmdlUGVybWFMaW5rOiAodmwpID0+IHsgYWxlcnQodmwpIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzYXZlVG9waWMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpdGVtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBhZGRUb3BpYyhcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGVybWFsaW5rLFxyXG4gICAgICAgICAgICAgICAgaXRlbS5zdWJyZWRkaXQsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbS5zY29yZSxcclxuICAgICAgICAgICAgICAgIGl0ZW0udGh1bWJuYWlsLFxyXG4gICAgICAgICAgICAgICAgaXRlbS51cmwsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNlbGZ0ZXh0LFxyXG4gICAgICAgICAgICAgICAgaXRlbS5hdXRob3IgLFxyXG4gICAgICAgICAgICAgICAgaXRlbS5jcmVhdGVkLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZGVsZXRlQm9va01hcmsgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpdGVtfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRvcGljKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL1tpbmRleF0nLCAnL2Jvb2ttYXJrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHN1YnJlZGRpdCwgdGl0bGUsIHNjb3JlLCBwZXJtYWxpbmsgfSA9IHRoaXMucHJvcHMuaXRlbTtcclxuICAgICAgICBjb25zdCB7IGlzQm9va21hcmsgPSBmYWxzZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgYWN0aW9uO1xyXG4gICAgICAgIGlmICghaXNCb29rbWFyaykge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PEJvb2ttYXJrSWNvbi8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlVG9waWMoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgc2F2ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8RGVsZXRlSWNvbi8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCb29rTWFyaygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezN9IGFsaWduPVwianVzdGlmeVwiIGNvbXBvbmVudD1cInRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiPiB7c3VicmVkZGl0fSA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXs3fSBhbGlnbj1cImp1c3RpZnlcIj57dGl0bGV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17MX0gYWxpZ249XCJjZW50ZXJcIj57c2NvcmV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17MX0gYWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ2ZXJ0aWNhbCBvdXRsaW5lZCBwcmltYXJ5IGJ1dHRvbiBncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9eycvdG9waWM/cGVybWFsaW5rPScgKyBwZXJtYWxpbmt9IGhyZWY9eycvdG9waWMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PE5hdmlnYXRlTmV4dEljb24vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaGVhZE5hbWVzID0ge1xyXG4gICAgdGl0bGUxOiAnU3VicmVkZGl0JyxcclxuICAgIHRpdGxlMjogJ1RpdGxlJyxcclxuICAgIHRpdGxlMzogJ1NlbGZ0ZXh0JyxcclxuICAgIHRpdGxlNDogJ1Njb3JlJyxcclxuICAgIHRpdGxlNTogJ0FjdGlvbicsXHJcbn07XHJcblxyXG5cclxuY2xhc3MgVGFibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0geyB9O1xyXG5cclxuICAgIHN0YXRpYyBwcm9wc1R5cGVzID0ge1xyXG4gICAgICAgIGxpc3Q6IFByb3BUeXBlcy5hcnJheSxcclxuICAgICAgICBpc0Jvb2ttYXJrOiBQcm9wVHlwZXMuYm9vbGVhbixcclxuICAgICAgICBjaGFuZ2VQZXJtYUxpbms6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGlzQm9va21hcms6IGZhbHNlLFxyXG4gICAgICAgIGNoYW5nZVBlcm1hTGluazogKHZsKSA9PiB7IGFsZXJ0KHZsKSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsaXN0ID0gW10sIGlzQm9va21hcmsgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgIGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXszfSBhbGlnbj1cImNlbnRlclwiIGNvbXBvbmVudD1cInRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCI+e2hlYWROYW1lcy50aXRsZTF9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXs3fSBhbGlnbj1cImNlbnRlclwiPntoZWFkTmFtZXMudGl0bGUyfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17MX0gYWxpZ249XCJjZW50ZXJcIj57aGVhZE5hbWVzLnRpdGxlNH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezF9IGFsaWduPVwiY2VudGVyXCI+e2hlYWROYW1lcy50aXRsZTV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IGlzQm9va21hcms9e2lzQm9va21hcmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==