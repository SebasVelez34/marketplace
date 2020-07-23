"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/byId/:id', async (req, res) => {
  const product = await _productModel.default.findOne({
    _id: req.params.id
  });
  if (product) res.send(product);else res.status(404).send({
    msg: "Product not found"
  });
});
router.get('/', async (req, res) => {
  res.send(await _productModel.default.find());
});
router.get('/byCategory/:category', async (req, res) => {
  const category = req.params.category;

  if (category) {
    const products = await _productModel.default.find({
      category: {
        $regex: category,
        $options: 'i'
      }
    });
    if (products) res.send(products);else res.send(await _productModel.default.find());
  }

  res.send(await _productModel.default.find());
});
router.get('/search', async (req, res) => {
  const searchKeyword = req.query.term ? {
    tags: {
      $regex: req.query.term,
      $options: 'i'
    }
  } : {};
  const products = await _productModel.default.find({ ...searchKeyword
  });

  if (!products) {
    res.status(404).send({
      msg: "None product found"
    });
  }

  res.send(products);
});
var _default = router;
exports.default = _default;