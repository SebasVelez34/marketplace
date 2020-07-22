import express from 'express';
import Product from '../models/productModel';
import UserProducts from '../models/UserProductModel';

const router = express.Router();
router.post("/", async (req,res) =>{
    const product = await Product.findOne({
        _id : req.body.productId,
    });
    if(req.body.userInfo.length === 0){
        res.send(product);
    }else{
        await UserProducts.findOneAndUpdate({
            user: req.body.userInfo._id
        },{
            $push: {products: req.body.productId}
        },{ new: true, upsert: true, rawResult: true });
        res.send(product);
    }

});

router.delete("/", async (req,res) =>{
    const remove = await UserProducts.findOneAndUpdate({
        user: req.body.userInfo._id
    },{
        $pull: {products: req.body.productId}
    });
    if (remove) {
        res.send({ remove: true });
    }
    res.send({ remove: false });
});

export default router;