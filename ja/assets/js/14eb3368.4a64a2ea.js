"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9817,7918],{

/***/ 43786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocBreadcrumbs; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(83631);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(3044);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(25026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

function IconHome(props) {
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    viewBox: "0 0 24 24"
  }, props), /* @__PURE__ */ react.createElement("path", {
    d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
    fill: "currentColor"
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl","breadcrumbHomeIcon":"breadcrumbHomeIcon_OVgt"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
var DocBreadcrumbs_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var DocBreadcrumbs_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocBreadcrumbs_hasOwnProp = Object.prototype.hasOwnProperty;
var DocBreadcrumbs_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocBreadcrumbs_defNormalProp = (obj, key, value) => key in obj ? DocBreadcrumbs_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocBreadcrumbs_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocBreadcrumbs_hasOwnProp.call(b, prop))
      DocBreadcrumbs_defNormalProp(a, prop, b[prop]);
  if (DocBreadcrumbs_getOwnPropSymbols)
    for (var prop of DocBreadcrumbs_getOwnPropSymbols(b)) {
      if (DocBreadcrumbs_propIsEnum.call(b, prop))
        DocBreadcrumbs_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));









function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = "breadcrumbs__link";
  if (isLast) {
    return /* @__PURE__ */ react.createElement("span", {
      className,
      itemProp: "name"
    }, children);
  }
  return href ? /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    className,
    href,
    itemProp: "item"
  }, /* @__PURE__ */ react.createElement("span", {
    itemProp: "name"
  }, children)) : /* @__PURE__ */ react.createElement("span", {
    className
  }, children);
}
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return /* @__PURE__ */ react.createElement("li", __spreadProps(DocBreadcrumbs_spreadValues({}, addMicrodata && {
    itemScope: true,
    itemProp: "itemListElement",
    itemType: "https://schema.org/ListItem"
  }), {
    className: (0,clsx_m/* default */.Z)("breadcrumbs__item", {
      "breadcrumbs__item--active": active
    })
  }), children, /* @__PURE__ */ react.createElement("meta", {
    itemProp: "position",
    content: String(index + 1)
  }));
}
function HomeBreadcrumbItem() {
  const homeHref = (0,useBaseUrl/* default */.Z)("/");
  return /* @__PURE__ */ react.createElement("li", {
    className: "breadcrumbs__item"
  }, /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.breadcrumbs.home",
      message: "Home page",
      description: "The ARIA label for the home page in the breadcrumbs"
    }),
    className: (0,clsx_m/* default */.Z)("breadcrumbs__link", styles_module.breadcrumbsItemLink),
    href: homeHref
  }, /* @__PURE__ */ react.createElement(IconHome, {
    className: styles_module.breadcrumbHomeIcon
  })));
}
function DocBreadcrumbs() {
  const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.s1)();
  const homePageRoute = (0,routesUtils/* useHomePageRoute */.Ns)();
  if (!breadcrumbs) {
    return null;
  }
  return /* @__PURE__ */ react.createElement("nav", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docBreadcrumbs */.k.docs.docBreadcrumbs, styles_module.breadcrumbsContainer),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.breadcrumbs.navAriaLabel",
      message: "Breadcrumbs",
      description: "The ARIA label for the breadcrumbs"
    })
  }, /* @__PURE__ */ react.createElement("ul", {
    className: "breadcrumbs",
    itemScope: true,
    itemType: "https://schema.org/BreadcrumbList"
  }, homePageRoute && /* @__PURE__ */ react.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx) => {
    const isLast = idx === breadcrumbs.length - 1;
    return /* @__PURE__ */ react.createElement(BreadcrumbsItem, {
      key: idx,
      active: isLast,
      index: idx,
      addMicrodata: !!item.href
    }, /* @__PURE__ */ react.createElement(BreadcrumbsItemLink, {
      href: item.href,
      isLast
    }, item.label));
  })));
}


/***/ }),

/***/ 84541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocCardList; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(35096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"cardContainer":"cardContainer_fWXF","cardTitle":"cardTitle_rnsV","cardDescription":"cardDescription_PWke"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCard/index.js







function CardContainer({ href, children }) {
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    href,
    className: (0,clsx_m/* default */.Z)("card padding--lg", styles_module.cardContainer)
  }, children);
}
function CardLayout({ href, icon, title, description }) {
  return /* @__PURE__ */ react.createElement(CardContainer, {
    href
  }, /* @__PURE__ */ react.createElement("h2", {
    className: (0,clsx_m/* default */.Z)("text--truncate", styles_module.cardTitle),
    title
  }, icon, " ", title), description && /* @__PURE__ */ react.createElement("p", {
    className: (0,clsx_m/* default */.Z)("text--truncate", styles_module.cardDescription),
    title: description
  }, description));
}
function CardCategory({ item }) {
  const href = (0,docsUtils/* findFirstCategoryLink */.Wl)(item);
  if (!href) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(CardLayout, {
    href,
    icon: "\u{1F5C3}\uFE0F",
    title: item.label,
    description: (0,Translate/* translate */.I)({
      message: "{count} items",
      id: "theme.docs.DocCard.categoryDescription",
      description: "The default description for a category card in the generated index about how many items this category includes"
    }, { count: item.items.length })
  });
}
function CardLink({ item }) {
  var _a;
  const icon = (0,isInternalUrl/* default */.Z)(item.href) ? "\u{1F4C4}\uFE0F" : "\u{1F517}";
  const doc = (0,docsUtils/* useDocById */.xz)((_a = item.docId) != null ? _a : void 0);
  return /* @__PURE__ */ react.createElement(CardLayout, {
    href: item.href,
    icon,
    title: item.label,
    description: doc == null ? void 0 : doc.description
  });
}
function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return /* @__PURE__ */ react.createElement(CardLink, {
        item
      });
    case "category":
      return /* @__PURE__ */ react.createElement(CardCategory, {
        item
      });
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js




function filterItems(items) {
  return items.filter((item) => {
    if (item.type === "category") {
      return !!(0,docsUtils/* findFirstCategoryLink */.Wl)(item);
    }
    return true;
  });
}
function DocCardList({ items, className }) {
  return /* @__PURE__ */ react.createElement("section", {
    className: (0,clsx_m/* default */.Z)("row", className)
  }, filterItems(items).map((item, index) => /* @__PURE__ */ react.createElement("article", {
    key: index,
    className: "col col--6 margin-bottom--lg"
  }, /* @__PURE__ */ react.createElement(DocCard, {
    item
  }))));
}


/***/ }),

/***/ 84007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocCategoryGeneratedIndexPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(94469);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(25026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js + 2 modules
var DocCardList = __webpack_require__(84541);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js + 1 modules
var DocPaginator = __webpack_require__(30106);
// EXTERNAL MODULE: ./src/theme/DocVersionBanner/index.js
var DocVersionBanner = __webpack_require__(48704);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
var DocVersionBadge = __webpack_require__(3560);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js + 2 modules
var DocBreadcrumbs = __webpack_require__(43786);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(55199);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"generatedIndexPage":"generatedIndexPage_vN6x","list":"list_eTzJ","title":"title_kItE"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCategoryGeneratedIndexPage/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};










function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }) {
  return /* @__PURE__ */ react.createElement(metadataUtils/* PageMetadata */.d, {
    title: categoryGeneratedIndex.title,
    description: categoryGeneratedIndex.description,
    keywords: categoryGeneratedIndex.keywords,
    image: (0,useBaseUrl/* default */.Z)(categoryGeneratedIndex.image)
  });
}
function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
  const category = (0,docsUtils/* useCurrentSidebarCategory */.jA)();
  return /* @__PURE__ */ react.createElement("div", {
    className: styles_module.generatedIndexPage
  }, /* @__PURE__ */ react.createElement(DocVersionBanner/* default */.Z, null), /* @__PURE__ */ react.createElement(DocBreadcrumbs/* default */.Z, null), /* @__PURE__ */ react.createElement(DocVersionBadge/* default */.Z, null), /* @__PURE__ */ react.createElement("header", null, /* @__PURE__ */ react.createElement(Heading/* default */.Z, {
    as: "h1",
    className: styles_module.title
  }, categoryGeneratedIndex.title), categoryGeneratedIndex.description && /* @__PURE__ */ react.createElement("p", null, categoryGeneratedIndex.description)), /* @__PURE__ */ react.createElement("article", {
    className: "margin-top--lg"
  }, /* @__PURE__ */ react.createElement(DocCardList/* default */.Z, {
    items: category.items,
    className: styles_module.list
  })), /* @__PURE__ */ react.createElement("footer", {
    className: "margin-top--lg"
  }, /* @__PURE__ */ react.createElement(DocPaginator/* default */.Z, {
    previous: categoryGeneratedIndex.navigation.previous,
    next: categoryGeneratedIndex.navigation.next
  })));
}
function DocCategoryGeneratedIndexPage(props) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(DocCategoryGeneratedIndexPageMetadata, __spreadValues({}, props)), /* @__PURE__ */ react.createElement(DocCategoryGeneratedIndexPageContent, __spreadValues({}, props)));
}


/***/ }),

/***/ 30106:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DocPaginator; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js



function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return /* @__PURE__ */ react.createElement(Link/* default */.Z, {
    className: (0,clsx_m/* default */.Z)("pagination-nav__link", isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"),
    to: permalink
  }, subLabel && /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__sublabel"
  }, subLabel), /* @__PURE__ */ react.createElement("div", {
    className: "pagination-nav__label"
  }, title));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));



function DocPaginator(props) {
  const { previous, next } = props;
  return /* @__PURE__ */ react.createElement("nav", {
    className: "pagination-nav docusaurus-mt-lg",
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.paginator.navAriaLabel",
      message: "Docs pages navigation",
      description: "The ARIA label for the docs pagination"
    })
  }, previous && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, previous), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.previous",
      description: "The label used to navigate to the previous doc"
    }, "Previous")
  })), next && /* @__PURE__ */ react.createElement(PaginatorNavLink, __spreadProps(__spreadValues({}, next), {
    subLabel: /* @__PURE__ */ react.createElement(Translate/* default */.Z, {
      id: "theme.docs.paginator.next",
      description: "The label used to navigate to the next doc"
    }, "Next"),
    isNext: true
  })));
}


/***/ }),

/***/ 3560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocVersionBadge; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86010);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33084);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83631);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92879);





function DocVersionBadge({ className }) {
  const versionMetadata = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useDocsVersion */ .E)();
  if (versionMetadata.badge) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames.docs.docVersionBadge */ .k.docs.docVersionBadge, "badge badge--secondary")
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      id: "theme.docs.versionBadge.label",
      values: { versionLabel: versionMetadata.label }
    }, "Version: {versionLabel}"));
  }
  return null;
}


/***/ }),

/***/ 55199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Heading; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(57343);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





function Heading(_a) {
  var _b = _a, { as: As, id } = _b, props = __objRest(_b, ["as", "id"]);
  const {
    navbar: { hideOnScroll }
  } = (0,useThemeConfig/* useThemeConfig */.L)();
  if (As === "h1" || !id) {
    return /* @__PURE__ */ react.createElement(As, __spreadProps(__spreadValues({}, props), {
      id: void 0
    }));
  }
  return /* @__PURE__ */ react.createElement(As, __spreadProps(__spreadValues({}, props), {
    className: (0,clsx_m/* default */.Z)("anchor", hideOnScroll ? styles_module.anchorWithHideOnScrollNavbar : styles_module.anchorWithStickyNavbar),
    id
  }), props.children, /* @__PURE__ */ react.createElement("a", {
    className: "hash-link",
    href: `#${id}`,
    title: (0,Translate/* translate */.I)({
      id: "theme.common.headingLinkTitle",
      message: "Direct link to heading",
      description: "Title for link to heading"
    })
  }, "\u200B"));
}


/***/ }),

/***/ 48704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11368);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39130);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33084);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2686);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74742);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92879);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};






function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: "theme.docs.versions.unreleasedVersionLabel",
    description: "The label used to tell the user that he's browsing an unreleased doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, versionMetadata.label)
    }
  }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: "theme.docs.versions.unmaintainedVersionLabel",
    description: "The label used to tell the user that he's browsing an unmaintained doc version",
    values: {
      siteTitle,
      versionLabel: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, versionMetadata.label)
    }
  }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
}
const BannerLabelComponents = {
  unreleased: UnreleasedVersionLabel,
  unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
  const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BannerLabelComponent, __spreadValues({}, props));
}
function LatestVersionSuggestionLabel({ to, onClick, versionLabel }) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    id: "theme.docs.versions.latestVersionSuggestionLabel",
    description: "The label used to tell the user to check the latest version",
    values: {
      versionLabel,
      latestVersionLink: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        to,
        onClick
      }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        id: "theme.docs.versions.latestVersionLinkLabel",
        description: "The label used for the latest version suggestion link label"
      }, "latest version")))
    }
  }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
}
function DocVersionBannerEnabled({ versionMetadata }) {
  const {
    siteConfig: { title: siteTitle, url: siteUrl, customFields }
  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  const { pluginId } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useActivePlugin */ .gA)({
    failfast: true
  });
  const { savePreferredVersionName } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_5__/* .useDocsPreferredVersion */ .J)(pluginId);
  const {
    latestVersionSuggestion
  } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_4__/* .useDocVersionSuggestions */ .Jo)(pluginId);
  const [newestVersion, setNewestVersion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const getNewestVersion = () => {
    fetch("/newestVersion.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function(response) {
      return response.json();
    }).then(function(myJson) {
      setNewestVersion(myJson);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getNewestVersion();
  }, []);
  const newestVersionString = newestVersion[0];
  const shouldHide = newestVersionString === void 0 || newestVersionString === latestVersionSuggestion.label;
  if (shouldHide) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  } else {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "alert alert--warning margin-bottom--md",
      role: "alert"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BannerLabel, {
      siteTitle,
      versionMetadata
    })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "margin-top--md"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LatestVersionSuggestionLabel, {
      to: siteUrl,
      onClick: () => savePreferredVersionName(latestVersionSuggestion.name),
      versionLabel: newestVersionString
    })));
  }
}
function DocVersionBanner() {
  const versionMetadata = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDocsVersion */ .E)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocVersionBannerEnabled, {
    versionMetadata
  });
}
/* harmony default export */ __webpack_exports__["Z"] = (DocVersionBanner);


/***/ })

}]);