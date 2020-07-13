webpackHotUpdate("static\\development\\pages\\topic.js",{

/***/ "./src/component/topic/topic.jsx":
/*!***************************************!*\
  !*** ./src/component/topic/topic.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comments_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comments/comments */ "./src/component/comments/comments.jsx");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel/InputLabel */ "./node_modules/@material-ui/core/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Select_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select/Select */ "./node_modules/@material-ui/core/Select/Select.js");
/* harmony import */ var _material_ui_core_Select_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);

var _jsxFileName = "C:\\Users\\Good\\Desktop\\Graphql\\gateway\\src\\component\\topic\\topic.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




















const style = {
  marginLeft: '20px'
};

class Topic extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      expanded: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeCommentLimit", ({
      target: {
        value
      }
    }) => {
      this.props.changeCommentLimit(value);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeRepliesLimit", ({
      target: {
        value
      }
    }) => {
      this.props.changeRepliesLimit(value);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleExpandClick", () => {
      this.setState(({
        expanded
      }) => ({
        expanded: !expanded
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "render", () => {
      const {
        expanded
      } = this.state;
      const {
        query,
        post = {}
      } = this.props;
      const {
        permalink = '',
        commentLimit = 3,
        repliesLimit = 5
      } = query;
      const {
        topic = {},
        comments = []
      } = post;
      const {
        author = 'no content',
        title = 'no content',
        score = 0
      } = topic;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true,
        spacing: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12,
        md: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          "aria-label": "recipe",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 29
          }
        }, "R"),
        action: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
          variant: "button",
          display: "block",
          gutterBottom: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }
        }, "Score: ", score),
        title: author,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_9__["default"], {
        image: "",
        title: "Paella dish",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "body2",
        color: "inherit",
        component: "p",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, title)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        disableSpacing: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        "aria-label": "add to favorites",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }
      }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 29
        }
      })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        "aria-label": "share",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }
      }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 29
        }
      })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onClick: this.handleExpandClick,
        "aria-expanded": expanded,
        "aria-label": "show more",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 25
        }
      }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 29
        }
      }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__["default"], {
        in: expanded,
        timeout: "auto",
        unmountOnExit: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 29
        }
      }, "Hey everyone:"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        paragraph: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      }, "Test")))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "outlined",
        margin: "normal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        htmlFor: "outlined-age-native-simple",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, "Comment limit max"), __jsx(_material_ui_core_Select_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
        native: true,
        value: commentLimit,
        onChange: vl => next_router__WEBPACK_IMPORTED_MODULE_20___default.a.push('/topic', `/topic?commentLimit=${vl.target.value}&repliesLimit=${repliesLimit}&permalink=${permalink}`),
        label: "Age",
        inputProps: {
          name: 'age',
          id: 'outlined-age-native-simple'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, __jsx("option", {
        "aria-label": "None",
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }
      }), __jsx("option", {
        value: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }
      }, "3"), __jsx("option", {
        value: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }
      }, "10"), __jsx("option", {
        value: 25,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }
      }, "25"), __jsx("option", {
        value: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }
      }, "50"), __jsx("option", {
        value: 100,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }, "100"))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "outlined",
        margin: "normal",
        style: style,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_InputLabel_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        htmlFor: "outlined-age-native-simple",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }
      }, "Replies limit max"), __jsx(_material_ui_core_Select_Select__WEBPACK_IMPORTED_MODULE_6___default.a, {
        native: true,
        value: repliesLimit,
        onChange: vl => next_router__WEBPACK_IMPORTED_MODULE_20___default.a.push('/topic', `/topic?commentLimit=${commentLimit}&repliesLimit=${vl.target.value}&permalink=${permalink}`),
        label: "Age",
        inputProps: {
          name: 'age',
          id: 'outlined-age-native-simple'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }
      }, __jsx("option", {
        "aria-label": "None",
        value: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 25
        }
      }), __jsx("option", {
        value: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 25
        }
      }, "1"), __jsx("option", {
        value: 5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }
      }, "5"), __jsx("option", {
        value: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 25
        }
      }, "10"), __jsx("option", {
        value: 25,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, "25"), __jsx("option", {
        value: 50,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }
      }, "50"), __jsx("option", {
        value: 100,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 25
        }
      }, "100"))), __jsx(_comments_comments__WEBPACK_IMPORTED_MODULE_3__["default"], {
        comments: comments,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }));
    });
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Topic, "propTypes", {
  commentLimit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  repliesLimit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  permalink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  changeCommentLimit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  changeRepliesLimit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  changePermaLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Topic, "defaultProps", {
  commentLimit: 100,
  repliesLimit: 100,
  permalink: '',
  changeCommentLimit: vl => {
    alert(vl);
  },
  changeRepliesLimit: vl => {
    alert(vl);
  },
  changePermaLink: vl => {
    alert(vl);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Topic);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L3RvcGljL3RvcGljLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsIm1hcmdpbkxlZnQiLCJUb3BpYyIsIkNvbXBvbmVudCIsImV4cGFuZGVkIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wcyIsImNoYW5nZUNvbW1lbnRMaW1pdCIsImNoYW5nZVJlcGxpZXNMaW1pdCIsInNldFN0YXRlIiwic3RhdGUiLCJxdWVyeSIsInBvc3QiLCJwZXJtYWxpbmsiLCJjb21tZW50TGltaXQiLCJyZXBsaWVzTGltaXQiLCJ0b3BpYyIsImNvbW1lbnRzIiwiYXV0aG9yIiwidGl0bGUiLCJzY29yZSIsImhhbmRsZUV4cGFuZENsaWNrIiwidmwiLCJSb3V0ZXIiLCJwdXNoIiwibmFtZSIsImlkIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiZnVuYyIsImNoYW5nZVBlcm1hTGluayIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLEtBQUssR0FBRztBQUNWQyxZQUFVLEVBQUU7QUFERixDQUFkOztBQUlBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUE4QjtBQUFBO0FBQUE7O0FBQUEsNkdBRWxCO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRmtCOztBQUFBLDBIQXlCTCxDQUFDO0FBQUVDLFlBQU0sRUFBRTtBQUFFQztBQUFGO0FBQVYsS0FBRCxLQUEwQjtBQUMzQyxXQUFLQyxLQUFMLENBQVdDLGtCQUFYLENBQThCRixLQUE5QjtBQUNILEtBM0J5Qjs7QUFBQSwwSEE2QkwsQ0FBQztBQUFFRCxZQUFNLEVBQUU7QUFBRUM7QUFBRjtBQUFWLEtBQUQsS0FBMEI7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Q0c7QUFOWixDOzswRkFOakI3QixLLGtCQWVvQjtBQUNsQmEsY0FBWSxFQUFFLEdBREk7QUFFbEJDLGNBQVksRUFBRSxHQUZJO0FBR2xCRixXQUFTLEVBQUUsRUFITztBQUlsQk4sb0JBQWtCLEVBQUdlLEVBQUQsSUFBUTtBQUFFVSxTQUFLLENBQUNWLEVBQUQsQ0FBTDtBQUFXLEdBSnZCO0FBS2xCZCxvQkFBa0IsRUFBR2MsRUFBRCxJQUFRO0FBQUVVLFNBQUssQ0FBQ1YsRUFBRCxDQUFMO0FBQVcsR0FMdkI7QUFNbEJTLGlCQUFlLEVBQUdULEVBQUQsSUFBUTtBQUFFVSxTQUFLLENBQUNWLEVBQUQsQ0FBTDtBQUFXO0FBTnBCLEM7O0FBd0lYckIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRvcGljLmpzLmVmMTMyNGY3NWIyZjRiMDZjNDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIi4uL2NvbW1lbnRzL2NvbW1lbnRzXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QvU2VsZWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgU2hhcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaGFyZSc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG59O1xyXG5cclxuY2xhc3MgVG9waWMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNvbW1lbnRMaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICByZXBsaWVzTGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgcGVybWFsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNoYW5nZUNvbW1lbnRMaW1pdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgY2hhbmdlUmVwbGllc0xpbWl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgICAgICBjaGFuZ2VQZXJtYUxpbms6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGNvbW1lbnRMaW1pdDogMTAwLFxyXG4gICAgICAgIHJlcGxpZXNMaW1pdDogMTAwLFxyXG4gICAgICAgIHBlcm1hbGluazogJycsXHJcbiAgICAgICAgY2hhbmdlQ29tbWVudExpbWl0OiAodmwpID0+IHsgYWxlcnQodmwpIH0sXHJcbiAgICAgICAgY2hhbmdlUmVwbGllc0xpbWl0OiAodmwpID0+IHsgYWxlcnQodmwpIH0sXHJcbiAgICAgICAgY2hhbmdlUGVybWFMaW5rOiAodmwpID0+IHsgYWxlcnQodmwpIH0sXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjaGFuZ2VDb21tZW50TGltaXQgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfX0pID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUNvbW1lbnRMaW1pdCh2YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZVJlcGxpZXNMaW1pdCA9ICh7IHRhcmdldDogeyB2YWx1ZSB9fSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlUmVwbGllc0xpbWl0KHZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBleHBhbmRlZCB9KSA9PiAoeyBleHBhbmRlZDogIWV4cGFuZGVkIH0pKVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyBxdWVyeSwgcG9zdCA9IHt9IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IHsgcGVybWFsaW5rID0gJycsIGNvbW1lbnRMaW1pdCA9IDMsIHJlcGxpZXNMaW1pdCA9IDUgfSA9IHF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IHsgdG9waWMgPSB7fSwgY29tbWVudHMgPSBbXSB9ID0gcG9zdDtcclxuICAgICAgICBjb25zdCB7IGF1dGhvciA9ICdubyBjb250ZW50JywgdGl0bGUgPSAnbm8gY29udGVudCcsIHNjb3JlID0gMCB9ID0gdG9waWM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJidXR0b25cIiBkaXNwbGF5PVwiYmxvY2tcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY29yZTogeyBzY29yZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBhdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQYWVsbGEgZGlzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRXhwYW5kQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtleHBhbmRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXhwYW5kTW9yZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+SGV5IGV2ZXJ5b25lOjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG1hcmdpbj17XCJub3JtYWxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm91dGxpbmVkLWFnZS1uYXRpdmUtc2ltcGxlXCI+Q29tbWVudCBsaW1pdCBtYXg8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2bCkgPT4gUm91dGVyLnB1c2goJy90b3BpYycsIGAvdG9waWM/Y29tbWVudExpbWl0PSR7dmwudGFyZ2V0LnZhbHVlfSZyZXBsaWVzTGltaXQ9JHtyZXBsaWVzTGltaXR9JnBlcm1hbGluaz0ke3Blcm1hbGlua31gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnb3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXszfT4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsyNX0+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NTB9PjUwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwMH0+MTAwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBtYXJnaW49e1wibm9ybWFsXCJ9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm91dGxpbmVkLWFnZS1uYXRpdmUtc2ltcGxlXCI+UmVwbGllcyBsaW1pdCBtYXg8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlcGxpZXNMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2bCkgPT4gUm91dGVyLnB1c2goJy90b3BpYycsIGAvdG9waWM/Y29tbWVudExpbWl0PSR7Y29tbWVudExpbWl0fSZyZXBsaWVzTGltaXQ9JHt2bC50YXJnZXQudmFsdWV9JnBlcm1hbGluaz0ke3Blcm1hbGlua31gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnb3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezV9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezI1fT4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs1MH0+NTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTAwfT4xMDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudHMgY29tbWVudHM9eyBjb21tZW50cyB9IC8+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BpYzsiXSwic291cmNlUm9vdCI6IiJ9