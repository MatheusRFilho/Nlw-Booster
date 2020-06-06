import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer'

import PointsControllers from './controllers/PointsControllers';
import ItensControllers from './controllers/ItemsControllers';

const routes = express.Router();
const uploads = multer(multerConfig);

const pointsControllers = new PointsControllers();
const itensControllers = new ItensControllers();

routes.get('/items', itensControllers.index);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

routes.post('/points',uploads.single('image') ,pointsControllers.create);


export default routes;

//Service Pattern
//Repositor Pattern (Data Mapper)