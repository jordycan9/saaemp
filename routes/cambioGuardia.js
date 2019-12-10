import routerx from 'express-promise-router';
import cambioGuardia from '../controllers/CambioGuardiaController';
import auth from '../middlewares/auth'

const router= routerx();

router.post('/add',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.add);
router.get('/query',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.query);
router.get('/list',auth.verifyCliente, cambioGuardia.list);
//router.put('/update',auth.verifyAdministrador,embarcacionController.update);
//router.delete('/remove',auth.verifyAdministrador,embarcacionController.remove);
router.put('/activate',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.activate);
router.put('/deactivate',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.deactivate);


export default router;
