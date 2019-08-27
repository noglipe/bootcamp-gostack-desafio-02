import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessiconController';

import AuthMiddleware from './app/middleware/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    Message: 'ola',
  });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(AuthMiddleware);

routes.put('/users', UserController.update);
export default routes;
