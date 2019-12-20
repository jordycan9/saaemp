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
            .populate('embarcacion',{nombre:1,eslora:1,manga:1,tbr:1,trn:1,calado:1,tipo:1})
            .populate('agencia', {nombre:1,folio:1})
            .populate('usuario',{nombre:1});

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
            const reg = await models.SolicitudUnica.find({'usuario':valor})
            .sort({'createdAt':-1})
            .populate('embarcacion')
            .populate('agencia')
            .populate('usuario');
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    listAdmin: async(req,res,next)=>{
        try{
            let valor = req.query.valor;
            const reg = await models.SolicitudUnica.find()
            .sort({'createdAt':-1})
            .populate('embarcacion',{nombre:1,eslora:1,manga:1,tbr:1,trn:1,calado:1,tipo:1})
            .populate('agencia', {nombre:1,folio:1})
            .populate('usuario',{nombre:1});
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
             eta: req.body.eta, etd: req.body.etd,embarcacion:req.body.embarcacion,usuario:req.body.usuario, comentarios: req.body.comentarios, estado:0});
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
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:1,aprobacionAmls:req.body.aprobacionAmls,});
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
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:2,aprobacionAmls:req.body.aprobacionAmls});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },

    deactivateApi: async(req,res,next)=>{
        try{
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:1,aprobacionApia:req.body.aprobacionApi,});
            res.status(200).json(reg)

        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
    

    aprobarApi: async(req,res,next)=>{
        try{
            const reg = await models.SolicitudUnica.findByIdAndUpdate({_id:req.body._id},{estado:3,aprobacionApi:req.body.aprobacionApi});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    }
}