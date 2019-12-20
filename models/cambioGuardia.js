import mongoose, {Schema} from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const cambioGuardiaSchema = new Schema({
    folio: {type:Number,unique:true},
    usuario: {type:Schema.ObjectId,ref:'usuario',required:true},    
    agencia: {type:Schema.ObjectId,ref:'agencia',required:true},
    fecha: {type:Date, required:true},
    muelle: {type:String, required:true},
    aprobacionApi:{type:String,default:''},
    aprobacionAmls:{type:String,default:''},
    embarcacion: {type:Schema.ObjectId,ref:'embarcacion',required:true},
    detalles: {type:String, required:true},
    estado: {type:Number, default:0},
    createdAt: {type:Date, default: Date.now() - 6*60*60*1000},
    pasajeros:[{
        nombreCompleto:{
            type:String,
            required:true
        },
        identificacion:{
            type:String,
            required:true
        },
        nss:{
            type:String,
            required:true
        },
        destino:{
            type:String,
            required:true
        }
    }]
})

cambioGuardiaSchema.plugin(AutoIncrement,{inc_field:'folio'})
const CambioGuardia = mongoose.model('cambioGuardia',cambioGuardiaSchema);
export default CambioGuardia;   