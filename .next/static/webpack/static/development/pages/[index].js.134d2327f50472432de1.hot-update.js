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
            lineNumber: 109,
            columnNumber: 26
          }
        }),
        onClick: this.saveTopic(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 23
        }
      }, "save");
    } else {
      action = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        endIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 26
          }
        }),
        onClick: this.deleteBookMark(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 22
        }
      }, "delete");
    }

    return __jsx(StyledTableRow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
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
        lineNumber: 127,
        columnNumber: 25
      }
    }, " ", subreddit, " "), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "justify",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, title), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 25
      }
    }, score), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
      orientation: "vertical",
      color: "inherit",
      "aria-label": "vertical outlined primary button group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
      as: '/topic?permalink=' + permalink,
      href: '/topic',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endIcon: __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 50
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": "customized table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
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
        lineNumber: 188,
        columnNumber: 33
      }
    }, headNames.title1), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 33
      }
    }, headNames.title2), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 33
      }
    }, headNames.title4), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 33
      }
    }, headNames.title5))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, list.map((item, index) => __jsx(Item, {
      item: item,
      key: index,
      isBookmark: isBookmark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3RhYmxlL3RhYmxlLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29sb3IiLCJ3aGl0ZSIsImJvZHkiLCJmb250U2l6ZSIsIlRhYmxlQ2VsbCIsIlN0eWxlZFRhYmxlUm93Iiwicm9vdCIsImFjdGlvbiIsImhvdmVyIiwiVGFibGVSb3ciLCJJdGVtIiwiQ29tcG9uZW50IiwiaXRlbSIsInByb3BzIiwiYWRkVG9waWMiLCJwZXJtYWxpbmsiLCJzdWJyZWRkaXQiLCJ0aXRsZSIsInNjb3JlIiwidGh1bWJuYWlsIiwidXJsIiwic2VsZnRleHQiLCJhdXRob3IiLCJjcmVhdGVkIiwiZGVsZXRlVG9waWMiLCJpZCIsIlJvdXRlciIsInB1c2giLCJyZW5kZXIiLCJpc0Jvb2ttYXJrIiwic2F2ZVRvcGljIiwiZGVsZXRlQm9va01hcmsiLCJQcm9wVHlwZXMiLCJib29sZWFuIiwic2hhcGUiLCJzdHJpbmciLCJudW1iZXIiLCJjaGFuZ2VQZXJtYUxpbmsiLCJmdW5jIiwidmwiLCJhbGVydCIsImhlYWROYW1lcyIsInRpdGxlMSIsInRpdGxlMiIsInRpdGxlMyIsInRpdGxlNCIsInRpdGxlNSIsIlRhYmxlQ29tcG9uZW50IiwibGlzdCIsIlBhcGVyIiwibWFwIiwiaW5kZXgiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLGVBQWUsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxJQUMvQkMsNkVBQVksQ0FBQztB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QXdCSDs7QUEzQ2tDOzswRkFBakNrQixjLGdCQUlrQjtBQUNoQkMsTUFBSSxFQUFFaEIsaURBQVMsQ0FBQ29CLEtBREE7QUFFaEJ2QixZQUFVLEVBQUVHLGlEQUFTLENBQUNDLE9BRk47QUFHaEJJLGlCQUFlLEVBQUVMLGlEQUFTLENBQUNNO0FBSFgsQzs7MEZBSmxCUyxjLGtCQVVvQjtBQUNsQkMsTUFBSSxFQUFFLEVBRFk7QUFFbEJuQixZQUFVLEVBQUUsS0FGTTtBQUdsQlEsaUJBQWUsRUFBR0UsRUFBRCxJQUFRO0FBQUVDLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQVc7QUFIcEIsQzs7QUFvQ1hRLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxbaW5kZXhdLmpzLjEzNGQyMzI3ZjUwNDcyNDMyZGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBCb29rbWFya0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Jvb2ttYXJrJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgYWRkVG9waWMsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4pKFRhYmxlQ2VsbCk7XHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PlxyXG4gICAgY3JlYXRlU3R5bGVzKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgICcmOm50aC1vZi10eXBlKG9kZCknOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KSxcclxuKShUYWJsZVJvdyk7XHJcblxyXG5jbGFzcyBJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBwcm9wc1R5cGVzID0ge1xyXG4gICAgICAgIGlzQm9va21hcms6IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gICAgICAgIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICAgIHN1YnJlZGRpdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgICAgICB0aHVtYm5haWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgc2VsZnRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIHBlcm1hbGluazogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgY2hhbmdlUGVybWFMaW5rOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGlzQm9va21hcms6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgc3VicmVkZGl0OiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICB0aHVtYm5haWw6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgdXJsOiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIHNlbGZ0ZXh0OiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIHBlcm1hbGluazogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICBjaGFuZ2VQZXJtYUxpbms6ICh2bCkgPT4geyBhbGVydCh2bCkgfSxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHNhdmVUb3BpYyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGFkZFRvcGljKFxyXG4gICAgICAgICAgICAgICAgaXRlbS5wZXJtYWxpbmssXHJcbiAgICAgICAgICAgICAgICBpdGVtLnN1YnJlZGRpdCxcclxuICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNjb3JlLFxyXG4gICAgICAgICAgICAgICAgaXRlbS50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnVybCxcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZnRleHQsXHJcbiAgICAgICAgICAgICAgICBpdGVtLmF1dGhvciAsXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZWQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGVCb29rTWFyayA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW19ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgZGVsZXRlVG9waWMoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvW2luZGV4XScsICcvYm9va21hcmsnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgc3VicmVkZGl0LCB0aXRsZSwgc2NvcmUsIHBlcm1hbGluayB9ID0gdGhpcy5wcm9wcy5pdGVtO1xyXG4gICAgICAgIGNvbnN0IHsgaXNCb29rbWFyayA9IGZhbHNlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBhY3Rpb247XHJcbiAgICAgICAgaWYgKCFpc0Jvb2ttYXJrKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9ICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlbmRJY29uPXs8Qm9va21hcmtJY29uLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVUb3BpYygpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBzYXZlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxEZWxldGVJY29uLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJvb2tNYXJrKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgZGVsZXRlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17M30gYWxpZ249XCJqdXN0aWZ5XCIgY29tcG9uZW50PVwidGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCI+IHtzdWJyZWRkaXR9IDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezd9IGFsaWduPVwianVzdGlmeVwiPnt0aXRsZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXsxfSBhbGlnbj1cImNlbnRlclwiPntzY29yZX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXsxfSBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZlcnRpY2FsIG91dGxpbmVkIHByaW1hcnkgYnV0dG9uIGdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17Jy90b3BpYz9wZXJtYWxpbms9JyArIHBlcm1hbGlua30gaHJlZj17Jy90b3BpYyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXs8TmF2aWdhdGVOZXh0SWNvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBoZWFkTmFtZXMgPSB7XHJcbiAgICB0aXRsZTE6ICdTdWJyZWRkaXQnLFxyXG4gICAgdGl0bGUyOiAnVGl0bGUnLFxyXG4gICAgdGl0bGUzOiAnU2VsZnRleHQnLFxyXG4gICAgdGl0bGU0OiAnU2NvcmUnLFxyXG4gICAgdGl0bGU1OiAnQWN0aW9uJyxcclxufTtcclxuXHJcblxyXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IH07XHJcblxyXG4gICAgc3RhdGljIHByb3BzVHlwZXMgPSB7XHJcbiAgICAgICAgbGlzdDogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgICAgIGlzQm9va21hcms6IFByb3BUeXBlcy5ib29sZWFuLFxyXG4gICAgICAgIGNoYW5nZVBlcm1hTGluazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgaXNCb29rbWFyazogZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlUGVybWFMaW5rOiAodmwpID0+IHsgYWxlcnQodmwpIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGxpc3QgPSBbXSwgaXNCb29rbWFyayB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSAgYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezN9IGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwidGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIj57aGVhZE5hbWVzLnRpdGxlMX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezd9IGFsaWduPVwiY2VudGVyXCI+e2hlYWROYW1lcy50aXRsZTJ9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXsxfSBhbGlnbj1cImNlbnRlclwiPntoZWFkTmFtZXMudGl0bGU0fTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17MX0gYWxpZ249XCJjZW50ZXJcIj57aGVhZE5hbWVzLnRpdGxlNX08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbX0ga2V5PXtpbmRleH0gaXNCb29rbWFyaz17aXNCb29rbWFya30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9