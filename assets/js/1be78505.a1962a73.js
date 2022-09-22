"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[9514,6529],{

/***/ 14512:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocPage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(94469);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(83631);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(99492);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(20345);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(92879);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(57250);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(4695);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(33084);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(8757);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(73789);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js



function useBackToTopButton({ threshold }) {
  const [shown, setShown] = (0,react.useState)(false);
  const isFocusedAnchor = (0,react.useRef)(false);
  const { startScroll, cancelScroll } = (0,scrollUtils/* useSmoothScrollTo */.Ct)();
  (0,scrollUtils/* useScrollPosition */.RF)(({ scrollY: scrollTop }, lastPosition) => {
    const lastScrollTop = lastPosition == null ? void 0 : lastPosition.scrollY;
    if (!lastScrollTop) {
      return;
    }
    if (isFocusedAnchor.current) {
      isFocusedAnchor.current = false;
    } else if (scrollTop >= lastScrollTop) {
      cancelScroll();
      setShown(false);
    } else if (scrollTop < threshold) {
      setShown(false);
    } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
      setShown(true);
    }
  });
  (0,useLocationChange/* useLocationChange */.S)((locationChangeEvent) => {
    if (locationChangeEvent.location.hash) {
      isFocusedAnchor.current = true;
      setShown(false);
    }
  });
  return { shown, scrollToTop: () => startScroll(0) };
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js






function BackToTopButton() {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  return /* @__PURE__ */ react.createElement("button", {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.BackToTopButton.buttonAriaLabel",
      message: "Scroll back to top",
      description: "The ARIA label for the back to top button"
    }),
    className: (0,clsx_m/* default */.Z)("clean-btn", ThemeClassNames/* ThemeClassNames.common.backToTopButton */.k.common.backToTopButton, styles_module.backToTopButton, shown && styles_module.backToTopButtonShow),
    type: "button",
    onClick: scrollToTop
  });
}

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(76775);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(89078);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(57343);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(71366);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
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

function IconArrow(props) {
  return /* @__PURE__ */ react.createElement("svg", __spreadValues({
    width: "20",
    height: "20",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ react.createElement("g", {
    fill: "#7a7a7a"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
  }), /* @__PURE__ */ react.createElement("path", {
    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_PEFL","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_kv0_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js





function CollapseButton({ onClick }) {
  return /* @__PURE__ */ react.createElement("button", {
    type: "button",
    title: (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.collapseButtonTitle",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.collapseButtonAriaLabel",
      message: "Collapse sidebar",
      description: "The title attribute for collapse button of doc sidebar"
    }),
    className: (0,clsx_m/* default */.Z)("button button--secondary button--outline", CollapseButton_styles_module.collapseSidebarButton),
    onClick
  }, /* @__PURE__ */ react.createElement(IconArrow, {
    className: CollapseButton_styles_module.collapseSidebarButtonIcon
  }));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(75218);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(21651);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js


const EmptyContext = Symbol("EmptyContext");
const Context = react.createContext(EmptyContext);
function DocSidebarItemsExpandedStateProvider({ children }) {
  const [expandedItem, setExpandedItem] = (0,react.useState)(null);
  const contextValue = (0,react.useMemo)(() => ({ expandedItem, setExpandedItem }), [expandedItem]);
  return /* @__PURE__ */ react.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function useDocSidebarItemsExpandedState() {
  const value = (0,react.useContext)(Context);
  if (value === EmptyContext) {
    throw new reactUtils/* ReactContextError */.i6("DocSidebarItemsExpandedStateProvider");
  }
  return value;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(65897);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(3044);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39130);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(54939);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
var Category_defProp = Object.defineProperty;
var Category_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Category_hasOwnProp = Object.prototype.hasOwnProperty;
var Category_propIsEnum = Object.prototype.propertyIsEnumerable;
var Category_defNormalProp = (obj, key, value) => key in obj ? Category_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Category_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Category_hasOwnProp.call(b, prop))
      Category_defNormalProp(a, prop, b[prop]);
  if (Category_getOwnPropSymbols)
    for (var prop of Category_getOwnPropSymbols(b)) {
      if (Category_propIsEnum.call(b, prop))
        Category_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Category_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Category_getOwnPropSymbols)
    for (var prop of Category_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Category_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = (0,reactUtils/* usePrevious */.D9)(isActive);
  (0,react.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0,useIsBrowser/* default */.Z)();
  return (0,react.useMemo)(() => {
    if (item.href) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0,docsUtils/* findFirstCategoryLink */.Wl)(item);
  }, [item, isBrowser]);
}
function Category_CollapseButton({ categoryLabel, onClick }) {
  return /* @__PURE__ */ react.createElement("button", {
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
      message: "Toggle the collapsible sidebar category '{label}'",
      description: "The ARIA label to toggle the collapsible sidebar category"
    }, { label: categoryLabel }),
    type: "button",
    className: "clean-btn menu__caret",
    onClick
  });
}
function DocSidebarItemCategory(_a) {
  var _b = _a, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _b, props = __objRest(_b, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories }
    }
  } = (0,useThemeConfig/* useThemeConfig */.L)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
  const isCurrentPage = (0,routesUtils/* isSamePath */.Mg)(href, activePath);
  const { collapsed, setCollapsed } = (0,Collapsible/* useCollapsible */.u)({
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  const updateCollapsed = (toCollapsed = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  (0,react.useEffect)(() => {
    if (collapsible && expandedItem && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategory */.k.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level), "menu__list-item", {
      "menu__list-item--collapsed": collapsed
    }, className)
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("menu__list-item-collapsible", {
      "menu__list-item-collapsible--active": isCurrentPage
    })
  }, /* @__PURE__ */ react.createElement(Link/* default */.Z, Category_spreadValues({
    className: (0,clsx_m/* default */.Z)("menu__link", {
      "menu__link--sublist": collapsible,
      "menu__link--sublist-caret": !href && collapsible,
      "menu__link--active": isActive
    }),
    onClick: collapsible ? (e) => {
      onItemClick == null ? void 0 : onItemClick(item);
      if (href) {
        updateCollapsed(false);
      } else {
        e.preventDefault();
        updateCollapsed();
      }
    } : () => {
      onItemClick == null ? void 0 : onItemClick(item);
    },
    "aria-current": isCurrentPage ? "page" : void 0,
    "aria-expanded": collapsible ? !collapsed : void 0,
    href: collapsible ? hrefWithSSRFallback != null ? hrefWithSSRFallback : "#" : hrefWithSSRFallback
  }, props), label), href && collapsible && /* @__PURE__ */ react.createElement(Category_CollapseButton, {
    categoryLabel: label,
    onClick: (e) => {
      e.preventDefault();
      updateCollapsed();
    }
  })), /* @__PURE__ */ react.createElement(Collapsible/* Collapsible */.z, {
    lazy: true,
    as: "ul",
    className: "menu__list",
    collapsed
  }, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
    items,
    tabIndex: collapsed ? -1 : 0,
    onItemClick,
    activePath,
    level: level + 1
  })));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(35096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(74546);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
var Link_defProp = Object.defineProperty;
var Link_getOwnPropSymbols = Object.getOwnPropertySymbols;
var Link_hasOwnProp = Object.prototype.hasOwnProperty;
var Link_propIsEnum = Object.prototype.propertyIsEnumerable;
var Link_defNormalProp = (obj, key, value) => key in obj ? Link_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var Link_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (Link_hasOwnProp.call(b, prop))
      Link_defNormalProp(a, prop, b[prop]);
  if (Link_getOwnPropSymbols)
    for (var prop of Link_getOwnPropSymbols(b)) {
      if (Link_propIsEnum.call(b, prop))
        Link_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var Link_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (Link_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && Link_getOwnPropSymbols)
    for (var prop of Link_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && Link_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};








function DocSidebarItemLink(_a) {
  var _b = _a, {
    item,
    onItemClick,
    activePath,
    level,
    index
  } = _b, props = Link_objRest(_b, [
    "item",
    "onItemClick",
    "activePath",
    "level",
    "index"
  ]);
  const { href, label, className } = item;
  const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
  const isInternalLink = (0,isInternalUrl/* default */.Z)(href);
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), "menu__list-item", className),
    key: label
  }, /* @__PURE__ */ react.createElement(Link/* default */.Z, Link_spreadValues(Link_spreadValues({
    className: (0,clsx_m/* default */.Z)("menu__link", !isInternalLink && Link_styles_module.menuExternalLink, {
      "menu__link--active": isActive
    }),
    "aria-current": isActive ? "page" : void 0,
    to: href
  }, isInternalLink && {
    onClick: onItemClick ? () => onItemClick(item) : void 0
  }), props), label, !isInternalLink && /* @__PURE__ */ react.createElement(ExternalLink/* default */.Z, null)));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js




function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ react.createElement("li", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), defaultStyle && [Html_styles_module.menuHtmlItem, "menu__list-item"], className),
    key: index,
    dangerouslySetInnerHTML: { __html: value }
  });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
var DocSidebarItem_defProp = Object.defineProperty;
var DocSidebarItem_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebarItem_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebarItem_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebarItem_defNormalProp = (obj, key, value) => key in obj ? DocSidebarItem_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebarItem_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebarItem_hasOwnProp.call(b, prop))
      DocSidebarItem_defNormalProp(a, prop, b[prop]);
  if (DocSidebarItem_getOwnPropSymbols)
    for (var prop of DocSidebarItem_getOwnPropSymbols(b)) {
      if (DocSidebarItem_propIsEnum.call(b, prop))
        DocSidebarItem_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DocSidebarItem_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (DocSidebarItem_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && DocSidebarItem_getOwnPropSymbols)
    for (var prop of DocSidebarItem_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && DocSidebarItem_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function DocSidebarItem(_a) {
  var _b = _a, { item } = _b, props = DocSidebarItem_objRest(_b, ["item"]);
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ react.createElement(DocSidebarItemCategory, DocSidebarItem_spreadValues({
        item
      }, props));
    case "html":
      return /* @__PURE__ */ react.createElement(DocSidebarItemHtml, DocSidebarItem_spreadValues({
        item
      }, props));
    case "link":
    default:
      return /* @__PURE__ */ react.createElement(DocSidebarItemLink, DocSidebarItem_spreadValues({
        item
      }, props));
  }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
var DocSidebarItems_defProp = Object.defineProperty;
var DocSidebarItems_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebarItems_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebarItems_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebarItems_defNormalProp = (obj, key, value) => key in obj ? DocSidebarItems_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebarItems_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebarItems_hasOwnProp.call(b, prop))
      DocSidebarItems_defNormalProp(a, prop, b[prop]);
  if (DocSidebarItems_getOwnPropSymbols)
    for (var prop of DocSidebarItems_getOwnPropSymbols(b)) {
      if (DocSidebarItems_propIsEnum.call(b, prop))
        DocSidebarItems_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DocSidebarItems_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (DocSidebarItems_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && DocSidebarItems_getOwnPropSymbols)
    for (var prop of DocSidebarItems_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && DocSidebarItems_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



function DocSidebarItems(_a) {
  var _b = _a, { items } = _b, props = DocSidebarItems_objRest(_b, ["items"]);
  return /* @__PURE__ */ react.createElement(DocSidebarItemsExpandedStateProvider, null, items.map((item, index) => /* @__PURE__ */ react.createElement(DocSidebarItem, DocSidebarItems_spreadValues({
    key: index,
    item,
    index
  }, props))));
}
/* harmony default export */ var theme_DocSidebarItems = ((0,react.memo)(DocSidebarItems));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"menu":"menu_SIkG","menuWithAnnouncementBar":"menuWithAnnouncementBar_GW3s"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js






function useShowAnnouncementBar() {
  const { isActive } = (0,announcementBar/* useAnnouncementBar */.nT)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
  (0,scrollUtils/* useScrollPosition */.RF)(({ scrollY }) => {
    if (isActive) {
      setShowAnnouncementBar(scrollY === 0);
    }
  }, [isActive]);
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return /* @__PURE__ */ react.createElement("nav", {
    className: (0,clsx_m/* default */.Z)("menu thin-scrollbar", Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className)
  }, /* @__PURE__ */ react.createElement("ul", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu, "menu__list")
  }, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
    items: sidebar,
    activePath: path,
    level: 1
  })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Desktop_styles_module = ({"sidebar":"sidebar_njMd","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_wUlq","sidebarHidden":"sidebarHidden_VK0M","sidebarLogo":"sidebarLogo_isFc"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js







function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = (0,useThemeConfig/* useThemeConfig */.L)();
  return /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden)
  }, hideOnScroll && /* @__PURE__ */ react.createElement(Logo/* default */.Z, {
    tabIndex: -1,
    className: Desktop_styles_module.sidebarLogo
  }), /* @__PURE__ */ react.createElement(DocSidebarDesktopContent, {
    path,
    sidebar
  }), hideable && /* @__PURE__ */ react.createElement(CollapseButton, {
    onClick: onCollapse
  }));
}
/* harmony default export */ var Desktop = (react.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(15043);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js + 1 modules
var navbarMobileSidebar = __webpack_require__(79614);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js





const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();
  return /* @__PURE__ */ react.createElement("ul", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu, "menu__list")
  }, /* @__PURE__ */ react.createElement(theme_DocSidebarItems, {
    items: sidebar,
    activePath: path,
    onItemClick: (item) => {
      if (item.type === "category" && item.href) {
        mobileSidebar.toggle();
      }
      if (item.type === "link") {
        mobileSidebar.toggle();
      }
    },
    level: 1
  }));
};
function DocSidebarMobile(props) {
  return /* @__PURE__ */ react.createElement(content/* NavbarSecondaryMenuFiller */.Zo, {
    component: DocSidebarMobileSecondaryMenu,
    props
  });
}
/* harmony default export */ var Mobile = (react.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
var DocSidebar_defProp = Object.defineProperty;
var DocSidebar_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DocSidebar_hasOwnProp = Object.prototype.hasOwnProperty;
var DocSidebar_propIsEnum = Object.prototype.propertyIsEnumerable;
var DocSidebar_defNormalProp = (obj, key, value) => key in obj ? DocSidebar_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DocSidebar_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DocSidebar_hasOwnProp.call(b, prop))
      DocSidebar_defNormalProp(a, prop, b[prop]);
  if (DocSidebar_getOwnPropSymbols)
    for (var prop of DocSidebar_getOwnPropSymbols(b)) {
      if (DocSidebar_propIsEnum.call(b, prop))
        DocSidebar_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




function DocSidebar(props) {
  const windowSize = (0,useWindowSize/* useWindowSize */.i)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ react.createElement(react.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ react.createElement(Desktop, DocSidebar_spreadValues({}, props)), shouldRenderSidebarMobile && /* @__PURE__ */ react.createElement(Mobile, DocSidebar_spreadValues({}, props)));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var ExpandButton_styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js




function DocPageLayoutSidebarExpandButton({ toggleSidebar }) {
  return /* @__PURE__ */ react.createElement("div", {
    className: ExpandButton_styles_module.expandButton,
    title: (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.expandButtonTitle",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    "aria-label": (0,Translate/* translate */.I)({
      id: "theme.docs.sidebar.expandButtonAriaLabel",
      message: "Expand sidebar",
      description: "The ARIA label and title attribute for expand button of doc sidebar"
    }),
    tabIndex: 0,
    role: "button",
    onKeyDown: toggleSidebar,
    onClick: toggleSidebar
  }, /* @__PURE__ */ react.createElement(IconArrow, {
    className: ExpandButton_styles_module.expandButtonIcon
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js








function ResetOnSidebarChange({ children }) {
  var _a;
  const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
  return /* @__PURE__ */ react.createElement(react.Fragment, {
    key: (_a = sidebar == null ? void 0 : sidebar.name) != null ? _a : "noSidebar"
  }, children);
}
function DocPageLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer
}) {
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
  const toggleSidebar = (0,react.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /* @__PURE__ */ react.createElement("aside", {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarContainer */.k.docs.docSidebarContainer, Sidebar_styles_module.docSidebarContainer, hiddenSidebarContainer && Sidebar_styles_module.docSidebarContainerHidden),
    onTransitionEnd: (e) => {
      if (!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)) {
        return;
      }
      if (hiddenSidebarContainer) {
        setHiddenSidebar(true);
      }
    }
  }, /* @__PURE__ */ react.createElement(ResetOnSidebarChange, null, /* @__PURE__ */ react.createElement(DocSidebar, {
    sidebar,
    path: pathname,
    onCollapse: toggleSidebar,
    isHidden: hiddenSidebar
  })), hiddenSidebar && /* @__PURE__ */ react.createElement(DocPageLayoutSidebarExpandButton, {
    toggleSidebar
  }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Main_styles_module = ({"docMainContainer":"docMainContainer_gTbr","docMainContainerEnhanced":"docMainContainerEnhanced_Uz_u","docItemWrapperEnhanced":"docItemWrapperEnhanced_czyv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/index.js




function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
  return /* @__PURE__ */ react.createElement("main", {
    className: (0,clsx_m/* default */.Z)(Main_styles_module.docMainContainer, (hiddenSidebarContainer || !sidebar) && Main_styles_module.docMainContainerEnhanced)
  }, /* @__PURE__ */ react.createElement("div", {
    className: (0,clsx_m/* default */.Z)("container padding-top--md padding-bottom--lg", Main_styles_module.docItemWrapper, hiddenSidebarContainer && Main_styles_module.docItemWrapperEnhanced)
  }, children));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Layout_styles_module = ({"docPage":"docPage__5DB","docsWrapper":"docsWrapper_BCFX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/index.js







function DocPageLayout({ children }) {
  const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(Layout/* default */.Z, {
    wrapperClassName: Layout_styles_module.docsWrapper
  }, /* @__PURE__ */ react.createElement(BackToTopButton, null), /* @__PURE__ */ react.createElement("div", {
    className: Layout_styles_module.docPage
  }, sidebar && /* @__PURE__ */ react.createElement(DocPageLayoutSidebar, {
    sidebar: sidebar.items,
    hiddenSidebarContainer,
    setHiddenSidebarContainer
  }), /* @__PURE__ */ react.createElement(DocPageLayoutMain, {
    hiddenSidebarContainer
  }, children)));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound.js
var NotFound = __webpack_require__(96529);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(93773);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js







function DocPage(props) {
  const { versionMetadata } = props;
  const currentDocRouteMetadata = (0,docsUtils/* useDocRouteMetadata */.hI)(props);
  if (!currentDocRouteMetadata) {
    return /* @__PURE__ */ react.createElement(NotFound["default"], null);
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SearchMetadata/* default */.Z, {
    version: versionMetadata.version,
    tag: (0,searchUtils/* docVersionSearchTag */.os)(versionMetadata.pluginId, versionMetadata.version)
  }), /* @__PURE__ */ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
    className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages, ThemeClassNames/* ThemeClassNames.page.docsDocPage */.k.page.docsDocPage, props.versionMetadata.className)
  }, /* @__PURE__ */ react.createElement(docsVersion/* DocsVersionProvider */.q, {
    version: versionMetadata
  }, /* @__PURE__ */ react.createElement(docsSidebar/* DocsSidebarProvider */.b, {
    name: sidebarName,
    items: sidebarItems
  }, /* @__PURE__ */ react.createElement(DocPageLayout, null, docElement)))));
}


/***/ }),

/***/ 96529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33084);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94469);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4695);




function NotFound() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .d, {
    title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({
      id: "theme.NotFound.title",
      message: "Page Not Found"
    })
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "container margin-vert--xl"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col col--6 col--offset-3"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "hero__title"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    id: "theme.NotFound.title",
    description: "The title of the 404 page"
  }, "Page Not Found")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    id: "theme.NotFound.p1",
    description: "The first paragraph of the 404 page"
  }, "We could not find what you were looking for.")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    id: "theme.NotFound.p2",
    description: "The 2nd paragraph of the 404 page"
  }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));
}


/***/ })

}]);