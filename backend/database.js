import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
const connection = mongoose.connect(mongodbUrl,{
    useNewUrlParser   : true,
    useUnifiedTopology: true,
    useCreateIndex    : true
}).catch(error => console.log(error.reason));

export default connection;