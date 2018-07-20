webpackHotUpdate(5,{

/***/ "./components/articleCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/dpilcher/dev/flightless-nerd/flightless-nerd/components/articleCard.js";




var ArticleCard = function ArticleCard(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.post.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.post.publishedDate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-text",
    dangerouslySetInnerHTML: {
      __html: props.post.content.brief
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/posts/".concat(props.post.slug),
    className: "card-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Read on"))));
};

/* harmony default export */ __webpack_exports__["a"] = (ArticleCard);

/***/ })

})
//# sourceMappingURL=5.78cfee498c967fb06cda.hot-update.js.map