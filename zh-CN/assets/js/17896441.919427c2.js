"use strict";
(self["webpackChunktouchgfx_documentation"] = self["webpackChunktouchgfx_documentation"] || []).push([[7918],{

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