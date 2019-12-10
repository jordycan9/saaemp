import mongoose, {Schema} from 'mongoose';

const cambioGuardia = new Schema({
    folio:{type:String, required:true,unique:true},
    usuario: {type:Schema.ObjectId,ref:'usuario',required:true},
    agencia: {type:Schema.ObjectId,ref:'agencia',required:true},
    fecha: {type:String, required:true},
    embarcacion: {type:Schema.ObjectId,ref:'embarcacion',required:true},
    estado: {type:Number, default:1},
    createdAt: {type:Date, default: Date.now},
    pasajeros:[{
        nombreCompleto:{
            type:String,
            required:true
        },
        identificacion:{
            type:String,
            required:true
        },
        libretaMar:{
            type:String,
            required:true
        },
        destino:{
            type:String,
            required:true
        }
    }]
})

const CambioGuardia = mongoose.model('cambioGuardia',cambioGuardia);
export default CambioGuardia;