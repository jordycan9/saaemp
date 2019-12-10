import routerx from 'express-promise-router';
import agenciaController from '../controllers/AgenciaController'
import auth from '../middlewares/auth'

const router = routerx();

router.post('/add',auth.verifyCliente,agenciaController.add);
router.get('/query',auth.verifyCliente,agenciaController.query);
router.get('/list',auth.verifyCliente, agenciaController.list);
router.put('/update',auth.verifyCliente,agenciaController.update);
router.delete('/remove',auth.verifyCliente,agenciaController.remove);
router.put('/activate',auth.verifyCliente,agenciaController.activate);
router.put('/deactivate',auth.verifyCliente,agenciaController.deactivate);

export default router;