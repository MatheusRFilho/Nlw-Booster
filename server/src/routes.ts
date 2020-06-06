import express, { request, response } from 'express';

import PointsControllers from './controllers/PointsControllers';
import ItensControllers from './controllers/ItemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers();
const itensControllers = new ItensControllers();

routes.get('/items', itensControllers.index);

routes.post('/points', pointsControllers.create);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);


export default routes;

//Service Pattern
//Repositor Pattern (Data Mapper)