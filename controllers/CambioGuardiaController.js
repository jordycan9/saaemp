import models from '../models';

export default {
    add: async(req,res,next)=>{
        try{
            const reg = await models.CambioGuardia.create(req.body);
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
            const reg = await models.CambioGuardia.findOne({_id:req.query._id})
            .populate('usuario',{nombre:1})
            .populate('embarcacion',{nombre:1})
            .populate('agencia',{nombre:1})

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
            const reg = await models.CambioGuardia.find({'usuario':valor})
            .populate('usuario')
            .populate('embarcacion')
            .populate('agencia')
            .sort({'createdAt':-1});
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
            const reg = await models.CambioGuardia.find()
            .populate('usuario')
            .populate('embarcacion')
            .populate('agencia')
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    listFecha: async(req,res,next)=>{
        try{
       
            let fecha1=req.query.fecha1;
            let fecha2=req.query.fecha2;
           
            const reg = await models.CambioGuardia.find({$and:[{fecha:{$gte : fecha1 , $lte : fecha2}}]})
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
    update: async(req,res,next)=>{
        try{
            const reg = await models.CambioGuardia.findByIdAndUpdate({_id:req.body._id},{folio:req.body.folio,usuario:req.body.usuario,
            agencia: req.body.agencia, fecha: req.body.fecha, embarcacion: req.body.embarcacion, detalles: req.body.detalles, pasajeros: req.body.pasajeros,muelle:req.body.muelle, estado:0});
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
            const reg = await models.Embarcacion.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.CambioGuardia.findByIdAndUpdate({_id:req.body._id},{estado:1,aprobacionAmls:req.body.aprobacionAmls});
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
            const reg = await models.CambioGuardia.findByIdAndUpdate({_id:req.body._id},{estado:2,aprobacionAmls:req.body.aprobacionAmls});
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
            const reg = await models.CambioGuardia.findByIdAndUpdate({_id:req.body._id},{estado:1,aprobacionApi:req.body.aprobacionApi});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
    confirmarApi: async(req,res,next)=>{
        try{
            const reg = await models.CambioGuardia.findByIdAndUpdate({_id:req.body._id},{estado:3,aprobacionApi:req.body.aprobacionApi});
            res.status(200).json(reg)

        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
}