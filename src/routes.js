import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessiconController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({
    Message: 'ola',
  });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
export default routes;
