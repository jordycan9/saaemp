import routerx from 'express-promise-router';
import embarcacionController from '../controllers/EmbarcacionController';
import auth from '../middlewares/auth'

const router= routerx();

router.post('/add',auth.verifyAdministrador,embarcacionController.add);
router.get('/query',auth.verifyAdministrador,embarcacionController.query);
router.get('/list',auth.verifyCliente,auth.verifyAdministrador,embarcacionController.list);
router.put('/update',auth.verifyAdministrador,embarcacionController.update);
router.delete('/remove',auth.verifyAdministrador,embarcacionController.remove);
router.put('/activate',auth.verifyAdministrador,embarcacionController.activate);
router.put('/deactivate',auth.verifyAdministrador,embarcacionController.deactivate);


export default router;
