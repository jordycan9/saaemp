import models from '../models';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.create(req.body);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg); 
            }
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async(req,res,next)=>{
        try{
            let valor = req.query.valor;
            const reg = await models.Agencia.find({'nombre':new RegExp(valor,'i')},{createdAt:0})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,rfc:req.body.rfc,
            representante: req.body.representante,folio:req.body.folio});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg)

        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async(req,res,next)=>{
        try{
            const reg = await models.Agencia.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    }
}