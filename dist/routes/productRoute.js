"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

router.get('/byId/:id', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var product;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _productModel["default"].findOne({
              _id: req.params.id
            });

          case 2:
            product = _context.sent;
            if (product) res.send(product);else res.status(404).send({
              msg: "Product not found"
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = res;
            _context2.next = 3;
            return _productModel["default"].find();

          case 3:
            _context2.t1 = _context2.sent;

            _context2.t0.send.call(_context2.t0, _context2.t1);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/byCategory/:category', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var category, products;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            category = req.params.category;

            if (!category) {
              _context3.next = 14;
              break;
            }

            _context3.next = 4;
            return _productModel["default"].find({
              category: {
                $regex: category,
                $options: 'i'
              }
            });

          case 4:
            products = _context3.sent;

            if (!products) {
              _context3.next = 9;
              break;
            }

            res.send(products);
            _context3.next = 14;
            break;

          case 9:
            _context3.t0 = res;
            _context3.next = 12;
            return _productModel["default"].find();

          case 12:
            _context3.t1 = _context3.sent;

            _context3.t0.send.call(_context3.t0, _context3.t1);

          case 14:
            _context3.t2 = res;
            _context3.next = 17;
            return _productModel["default"].find();

          case 17:
            _context3.t3 = _context3.sent;

            _context3.t2.send.call(_context3.t2, _context3.t3);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/search', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var searchKeyword, products;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            searchKeyword = req.query.term ? {
              tags: {
                $regex: req.query.term,
                $options: 'i'
              }
            } : {};
            _context4.next = 3;
            return _productModel["default"].find(_objectSpread({}, searchKeyword));

          case 3:
            products = _context4.sent;

            if (!products) {
              res.status(404).send({
                msg: "None product found"
              });
            }

            res.send(products);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;