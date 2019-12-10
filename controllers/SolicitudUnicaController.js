import models from '../models';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.SolicitudUnica.create(req.body);
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
            const reg = await models.SolicitudUnica.findOne({_id:req.query._id})
            .populate('embarcacion',{nombre:1,eslora:1,manga:1,tbr:1,trn:1,calado:1,tipo:1});
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
            const reg = await models.SolicitudUnica.find({'folio':new RegExp(valor,'i')},{createdAt:0})
            .sort({'createdAt':-1})
            .populate('embarcacion',{nombre:1,eslora:1,manga:1,tbr:1,trn:1,calado:1,tipo:1})
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
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{agencia:req.body.agencia,procedencia:req.body.procedencia,
             eta: req.body.eta, etd: req.body.etd,folio:req.body.folio, comentarios: req.body.comentarios});
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
            const reg = await models.SolicitudUnica.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    }
}