import mongoose, { Schema, model } from 'mongoose';

const userProducts = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    },
});
const userProductsModel = model("UserProducts",userProducts);

export default userProductsModel;