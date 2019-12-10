import mongoose, {Schema} from 'mongoose';
const {appConfig} = require('../config')

const ArchivoSchema = new Schema({
    nombre:{type:String, unique:true},
    imgUrl:{type:String},
})

const archivo = mongoose.model('archivo',ArchivoSchema);

export default archivo;