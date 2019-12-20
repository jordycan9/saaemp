import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/index';
import fileupload from 'express-fileupload'
//Conexion a mongodb
mongoose.Promise=global.Promise
const dburl = 'mongodb://localhost:27017/saaemp';
mongoose.connect(dburl, {useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true})
.then(mongoose => console.log('Conectando a la BD en el puerto 27017'))
.catch(err => console.log(err));
const app = express();
app.use(morgan('dev'));
app.use(fileupload());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api',router);
app.set('port',process.env.PORT || 3000);

app.post('/api/upload',(req,res) => {
    let EDFile = req.files.file
    EDFile.mv(`uploads/${EDFile.name}`)
    
})

app.get('/hola',function(req,res){
    res.send('Hola mundo');
})

app.listen(app.get('port'),()=>{
    console.log('server on port'+ app.get('port'));
})
 