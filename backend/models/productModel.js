import mongoose, { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name       : { type: String, required: true },
    image      : { type: String, required: true },
    price      : { type: Number, default : 0, required: true },
    category   : { type: String, required: true },
    description: { type: String, required: true },
    tags       : { type: Array, required : true }
});

const productModel = model("Product",productSchema);

export default productModel;