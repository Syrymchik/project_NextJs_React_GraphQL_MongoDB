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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");

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
const style = {
  marginTop: '70px'
};

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
            lineNumber: 112,
            columnNumber: 26
          }
        }),
        onClick: this.saveTopic(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 23
        }
      }, "save");
    } else {
      action = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        endIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 26
          }
        }),
        onClick: this.deleteBookMark(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 22
        }
      }, "delete");
    }

    return __jsx(StyledTableRow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 130,
        columnNumber: 25
      }
    }, " ", subreddit, " "), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "justify",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, title), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, score), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
      orientation: "vertical",
      color: "inherit",
      "aria-label": "vertical outlined primary button group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
      as: '/topic?permalink=' + permalink,
      href: '/topic',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endIcon: __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 50
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
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
    if (list.length <= 0) return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], {
      style: style,
      align: "center",
      variant: "h3",
      gutterBottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 39
      }
    }, "No Content");
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "aria-label": "customized table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
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
        lineNumber: 192,
        columnNumber: 33
      }
    }, headNames.title1), __jsx(StyledTableCell, {
      colSpan: 7,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 33
      }
    }, headNames.title2), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 33
      }
    }, headNames.title4), __jsx(StyledTableCell, {
      colSpan: 1,
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 33
      }
    }, headNames.title5))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, list.map((item, index) => __jsx(Item, {
      item: item,
      key: index,
      isBookmark: isBookmark,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3RhYmxlL3RhYmxlLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsYWNrIiwiY29sb3IiLCJ3aGl0ZSIsImJvZHkiLCJmb250U2l6ZSIsIlRhYmxlQ2VsbCIsIlN0eWxlZFRhYmxlUm93Iiwicm9vdCIsImFjdGlvbiIsImhvdmVyIiwiVGFibGVSb3ciLCJzdHlsZSIsIm1hcmdpblRvcCIsIkl0ZW0iLCJDb21wb25lbnQiLCJpdGVtIiwicHJvcHMiLCJhZGRUb3BpYyIsInBlcm1hbGluayIsInN1YnJlZGRpdCIsInRpdGxlIiwic2NvcmUiLCJ0aHVtYm5haWwiLCJ1cmwiLCJzZWxmdGV4dCIsImF1dGhvciIsImNyZWF0ZWQiLCJkZWxldGVUb3BpYyIsImlkIiwiUm91dGVyIiwicHVzaCIsInJlbmRlciIsImlzQm9va21hcmsiLCJzYXZlVG9waWMiLCJkZWxldGVCb29rTWFyayIsIlByb3BUeXBlcyIsImJvb2xlYW4iLCJzaGFwZSIsInN0cmluZyIsIm51bWJlciIsImNoYW5nZVBlcm1hTGluayIsImZ1bmMiLCJ2bCIsImFsZXJ0IiwiaGVhZE5hbWVzIiwidGl0bGUxIiwidGl0bGUyIiwidGl0bGUzIiwidGl0bGU0IiwidGl0bGU1IiwiVGFibGVDb21wb25lbnQiLCJsaXN0IiwibGVuZ3RoIiwiUGFwZXIiLCJtYXAiLCJpbmRleCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTUEsZUFBZSxHQUFHQywy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LENBTEosQ0FESixDQURKLEVBVUksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRVFFLElBQUksQ0FBQ0csR0FBTCxDQUFTLENBQUN2QyxJQUFELEVBQU93QyxLQUFQLEtBQ0wsTUFBQyxJQUFEO0FBQU0sVUFBSSxFQUFFeEMsSUFBWjtBQUFrQixTQUFHLEVBQUV3QyxLQUF2QjtBQUE4QixnQkFBVSxFQUFFdkIsVUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRlIsQ0FWSixDQURKLENBREosQ0FESjtBQXdCSDs7QUE1Q2tDOzswRkFBakNrQixjLGdCQUlrQjtBQUNoQkMsTUFBSSxFQUFFaEIsaURBQVMsQ0FBQ3FCLEtBREE7QUFFaEJ4QixZQUFVLEVBQUVHLGlEQUFTLENBQUNDLE9BRk47QUFHaEJJLGlCQUFlLEVBQUVMLGlEQUFTLENBQUNNO0FBSFgsQzs7MEZBSmxCUyxjLGtCQVVvQjtBQUNsQkMsTUFBSSxFQUFFLEVBRFk7QUFFbEJuQixZQUFVLEVBQUUsS0FGTTtBQUdsQlEsaUJBQWUsRUFBR0UsRUFBRCxJQUFRO0FBQUVDLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQVc7QUFIcEIsQzs7QUFxQ1hRLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxbaW5kZXhdLmpzLjYwMjE3ODBlNTE4ZjI4ZDI5MzczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMsIFRoZW1lLCBjcmVhdGVTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRlTmV4dCc7XHJcbmltcG9ydCBCb29rbWFya0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Jvb2ttYXJrJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgYWRkVG9waWMsIGRlbGV0ZVRvcGljIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuXHJcblxyXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT5cclxuICAgIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICB9LFxyXG4gICAgfSksXHJcbikoVGFibGVDZWxsKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+XHJcbiAgICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgJyY6bnRoLW9mLXR5cGUob2RkKSc6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4pKFRhYmxlUm93KTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgbWFyZ2luVG9wOiAnNzBweCcsXHJcbn1cclxuXHJcbmNsYXNzIEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge307XHJcblxyXG4gICAgc3RhdGljIHByb3BzVHlwZXMgPSB7XHJcbiAgICAgICAgaXNCb29rbWFyazogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgICAgICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgICAgc3VicmVkZGl0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgc2NvcmU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBzZWxmdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICAgICAgcGVybWFsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgICAgICBjaGFuZ2VQZXJtYUxpbms6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaXNCb29rbWFyazogZmFsc2UsXHJcbiAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICBzdWJyZWRkaXQ6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgdGl0bGU6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogJ25vIGNvbnRlbnQnLFxyXG4gICAgICAgICAgICB1cmw6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgc2VsZnRleHQ6ICdubyBjb250ZW50JyxcclxuICAgICAgICAgICAgcGVybWFsaW5rOiAnbm8gY29udGVudCcsXHJcbiAgICAgICAgICAgIGNoYW5nZVBlcm1hTGluazogKHZsKSA9PiB7IGFsZXJ0KHZsKSB9LFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2F2ZVRvcGljID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgYWRkVG9waWMoXHJcbiAgICAgICAgICAgICAgICBpdGVtLnBlcm1hbGluayxcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3VicmVkZGl0LFxyXG4gICAgICAgICAgICAgICAgaXRlbS50aXRsZSxcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2NvcmUsXHJcbiAgICAgICAgICAgICAgICBpdGVtLnRodW1ibmFpbCxcclxuICAgICAgICAgICAgICAgIGl0ZW0udXJsLFxyXG4gICAgICAgICAgICAgICAgaXRlbS5zZWxmdGV4dCxcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXV0aG9yICxcclxuICAgICAgICAgICAgICAgIGl0ZW0uY3JlYXRlZCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZUJvb2tNYXJrID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBkZWxldGVUb3BpYyhpdGVtLmlkKTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9baW5kZXhdJywgJy9ib29rbWFyaycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBzdWJyZWRkaXQsIHRpdGxlLCBzY29yZSwgcGVybWFsaW5rIH0gPSB0aGlzLnByb3BzLml0ZW07XHJcbiAgICAgICAgY29uc3QgeyBpc0Jvb2ttYXJrID0gZmFsc2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGFjdGlvbjtcclxuICAgICAgICBpZiAoIWlzQm9va21hcmspIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGVuZEljb249ezxCb29rbWFya0ljb24vPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZVRvcGljKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHNhdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17PERlbGV0ZUljb24vPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQm9va01hcmsoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBkZWxldGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXszfSBhbGlnbj1cImp1c3RpZnlcIiBjb21wb25lbnQ9XCJ0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIj4ge3N1YnJlZGRpdH0gPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17N30gYWxpZ249XCJqdXN0aWZ5XCI+e3RpdGxlfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezF9IGFsaWduPVwiY2VudGVyXCI+e3Njb3JlfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezF9IGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidmVydGljYWwgb3V0bGluZWQgcHJpbWFyeSBidXR0b24gZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXsnL3RvcGljP3Blcm1hbGluaz0nICsgcGVybWFsaW5rfSBocmVmPXsnL3RvcGljJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249ezxOYXZpZ2F0ZU5leHRJY29uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGhlYWROYW1lcyA9IHtcclxuICAgIHRpdGxlMTogJ1N1YnJlZGRpdCcsXHJcbiAgICB0aXRsZTI6ICdUaXRsZScsXHJcbiAgICB0aXRsZTM6ICdTZWxmdGV4dCcsXHJcbiAgICB0aXRsZTQ6ICdTY29yZScsXHJcbiAgICB0aXRsZTU6ICdBY3Rpb24nLFxyXG59O1xyXG5cclxuXHJcbmNsYXNzIFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHsgfTtcclxuXHJcbiAgICBzdGF0aWMgcHJvcHNUeXBlcyA9IHtcclxuICAgICAgICBsaXN0OiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgICAgICAgaXNCb29rbWFyazogUHJvcFR5cGVzLmJvb2xlYW4sXHJcbiAgICAgICAgY2hhbmdlUGVybWFMaW5rOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBsaXN0OiBbXSxcclxuICAgICAgICBpc0Jvb2ttYXJrOiBmYWxzZSxcclxuICAgICAgICBjaGFuZ2VQZXJtYUxpbms6ICh2bCkgPT4geyBhbGVydCh2bCkgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGlzdCA9IFtdLCBpc0Jvb2ttYXJrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA8PSAwKSByZXR1cm4gIDxUeXBvZ3JhcGh5IHN0eWxlPXtzdHlsZX0gYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+Tm8gQ29udGVudDwvVHlwb2dyYXBoeT47XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgIGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXszfSBhbGlnbj1cImNlbnRlclwiIGNvbXBvbmVudD1cInRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCI+e2hlYWROYW1lcy50aXRsZTF9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb2xTcGFuPXs3fSBhbGlnbj1cImNlbnRlclwiPntoZWFkTmFtZXMudGl0bGUyfTwvU3R5bGVkVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29sU3Bhbj17MX0gYWxpZ249XCJjZW50ZXJcIj57aGVhZE5hbWVzLnRpdGxlNH08L1N0eWxlZFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGNvbFNwYW49ezF9IGFsaWduPVwiY2VudGVyXCI+e2hlYWROYW1lcy50aXRsZTV9PC9TdHlsZWRUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IGlzQm9va21hcms9e2lzQm9va21hcmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==