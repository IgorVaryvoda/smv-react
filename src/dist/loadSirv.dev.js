"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var importScript = function importScript(resourceUrl) {
  (0, _react.useEffect)(function () {
    var script = document.createElement('script');
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};

var _default = importScript;
exports["default"] = _default;