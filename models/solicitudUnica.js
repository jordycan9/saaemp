import mongoose, {Schema} from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const solicitudUnicaSchema = new Schema({
    folio_solicitud:{type:Number,unique:true},
    embarcacion:{type: Schema.ObjectId, ref:'embarcacion'},
    agencia:{type: Schema.ObjectId, ref:'agencia'},
    usuario:{type:Schema.ObjectId, ref:'usuario'},
    procedencia:{type:String, required:true},
    aprobacionApi:{type:String, default:''},
    aprobacionAmls:{type:String, default:''},
    muelle:{type:String, required:true},
    eta:{type:String,required:true},
    etd:{type:String, required:true},
    comentarios:{type:String, required:true},
    estado:{type:String, default:0},
    createdAt:{type:Date, default:Date.now}
})

solicitudUnicaSchema.plugin(AutoIncrement,{inc_field:'folio_solicitud'})
const Solicitud = mongoose.model('solicitudUnica',solicitudUnicaSchema);

export default Solicitud;
