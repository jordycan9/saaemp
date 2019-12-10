import routerx from 'express-promise-router';
import archivoController from '../controllers/ArchivoController';

const router= routerx();

router.post('/add',archivoController.add);

export default router;
