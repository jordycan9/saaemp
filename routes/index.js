import routerx from 'express-promise-router';
import embarcacionRouter from './embarcacion';
import solicitudUnicaRouter from './solicitudUnica'
import usuarioRouter from './usuario'
import archivoRouter from './archivo'
import cambioGuardia from './cambioGuardia'
import agencica from './agencia'
const router = routerx();

router.use('/embarcacion',embarcacionRouter);
router.use('/solicitudUnica',solicitudUnicaRouter);
router.use('/usuario',usuarioRouter);
router.use('/archivo',archivoRouter);
router.use('/cambioGuardia',cambioGuardia);
router.use('/agencia',agencica);
export default router;

