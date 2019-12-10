import mongoose, {Schema} from 'mongoose';

const solicitudUnicaSchema = new Schema({
    embarcacion:{type: Schema.ObjectId, ref:'embarcacion'},
    folio:{type:String,required:true,unique:true},
    agencia:{type:String, required:true},
    procedencia:{type:String, required:true},
    fecha:{type:Date, required:true},
    eta:{type:String,required:true},
    etd:{type:String, required:true},
    comentarios:{type:String, required:true},
    estado:{type:String, default:1},
    createdAt:{type:Date, default:Date.now}
})
const Solicitud = mongoose.model('solicitudUnica',solicitudUnicaSchema);

export default Solicitud;
