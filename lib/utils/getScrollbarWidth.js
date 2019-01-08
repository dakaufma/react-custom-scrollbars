'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollbarWidth;

var _isScrollbarRequired = require('./isScrollbarRequired');

var _isScrollbarRequired2 = _interopRequireDefault(_isScrollbarRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollbarWidth() {
    var realScrollbarWidth = (0, _isScrollbarRequired2.default)();
    return realScrollbarWidth || 8;
}