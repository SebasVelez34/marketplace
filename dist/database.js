"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongodbUrl = _config.default.MONGODB_URL;

const connection = _mongoose.default.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

var _default = connection;
exports.default = _default;