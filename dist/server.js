"use strict";

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _productRoute = _interopRequireDefault(require("./routes/productRoute"));

var _cartRoute = _interopRequireDefault(require("./routes/cartRoute"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _productModel = _interopRequireDefault(require("./models/productModel"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./database');

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use("/api/v1/users", _userRoute.default);
app.use("/api/v1/products", _productRoute.default);
app.use("/api/v1/cart", _cartRoute.default);
app.get("/api/v1/categories", async (req, res) => {
  const products = await _productModel.default.find();
  const categories = products.map(x => x.category);
  res.send([...new Set(categories)]);
}); //Serve static

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Started at port ${port}`);
});