import { Router, RouterOptions } from 'express';
import indexRouter from './index.router';
import { gateAuthRouter } from './gateway.router';
import { deviceAuthRouter } from './device.router';

const routerOptions: RouterOptions = {
  mergeParams: true,
  strict: false,
  caseSensitive: true,
}

const router: Router = Router(routerOptions);

/** DO NESTED ROUTING HERE */
router.use('/', indexRouter);
router.use('/gateway', gateAuthRouter);
router.use('/device', deviceAuthRouter);





export default router;