"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: 'http://newsapi.org',
  headers: {
    Authorization: 'Client-ID c63eb52b5bc642909941c92d6f638a83'
  }
});

exports.default = _default;