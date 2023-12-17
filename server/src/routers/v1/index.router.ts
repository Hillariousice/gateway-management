import { Router, RouterOptions } from 'express';
import IndexController from '../../controllers/index.controller';
import IndexService from '../../services/index.service';

const routerOptions: RouterOptions = {
  mergeParams: true,
  strict: false,
  caseSensitive: true,
}

const service = new IndexService();
const controller = new IndexController(service);

const commonRouter: Router = Router(routerOptions);

/** DO NESTED ROUTING HERE */
commonRouter.route('/')
.get(controller.ping.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

commonRouter.route('/docs')
.get(controller.getDocs.bind(controller))
.all(controller.methodNotAllowed.bind(controller));

export default commonRouter;