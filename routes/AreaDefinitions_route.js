import express, {request} from 'express';
import { getAreaDefinitions } from '../controllers/AreaDefinitions_controller.js';
const router = express.Router();

router.get('/', getAreaDefinitions);

export default router;
