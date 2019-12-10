import routerx from 'express-promise-router';
import solicitudUnicaController from '../controllers/SolicitudUnicaController';
import auth from '../middlewares/auth'

const router= routerx();

router.post('/add',auth.verifyCliente,solicitudUnicaController.add);
router.get('/query',auth.verifyCliente,solicitudUnicaController.query);
router.get('/list',auth.verifyCliente,solicitudUnicaController.list);
router.put('/update',auth.verifyCliente,solicitudUnicaController.update);
router.delete('/remove',auth.verifyCliente,solicitudUnicaController.remove);
router.put('/activate',auth.verifyCliente,solicitudUnicaController.activate);
router.put('/deactivate',auth.verifyCliente,solicitudUnicaController.deactivate);

export default router;
