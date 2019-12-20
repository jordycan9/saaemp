import routerx from 'express-promise-router';
import cambioGuardia from '../controllers/CambioGuardiaController';
import auth from '../middlewares/auth'

const router= routerx();

router.post('/add',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.add);
router.get('/query',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.query);
router.get('/list',auth.verifyCliente, cambioGuardia.list);
router.put('/update',auth.verifyAdministrador,cambioGuardia.update);
router.get('/listAdmin',auth.verifyCliente, cambioGuardia.listAdmin);
router.get('/listFecha',auth.verifyCliente,auth.verifyAdministrador, cambioGuardia.listFecha);
router.put('/activate',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.activate);
router.put('/aprobarApi',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.confirmarApi);
router.put('/deactivateApi',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.deactivateApi);
router.put('/deactivate',auth.verifyAdministrador,auth.verifyCliente,cambioGuardia.deactivate);


export default router;
