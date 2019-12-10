import models from '../models';
import { model } from 'mongoose';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.Archivo.create(req.body);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
}