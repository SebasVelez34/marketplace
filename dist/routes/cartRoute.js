"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

var _UserProductModel = _interopRequireDefault(require("../models/UserProductModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/", async (req, res) => {
  const product = await _productModel.default.findOne({
    _id: req.body.productId
  });

  if (req.body.userInfo.length === 0) {
    res.send(product);
  } else {
    await _UserProductModel.default.findOneAndUpdate({
      user: req.body.userInfo._id
    }, {
      $push: {
        products: req.body.productId
      }
    }, {
      new: true,
      upsert: true,
      rawResult: true
    });
    res.send(product);
  }
});
router.delete("/", async (req, res) => {
  const remove = await _UserProductModel.default.findOneAndUpdate({
    user: req.body.userInfo._id
  }, {
    $pull: {
      products: req.body.productId
    }
  });

  if (remove) {
    res.send({
      remove: true
    });
  }

  res.send({
    remove: false
  });
});
var _default = router;
exports.default = _default;