import express, {request} from 'express';
import { getMonthlyStatistics, getQuarterlyStatistics, getStatisticsOptions } from '../controllers/Statistics_controller.js';
const router = express.Router();


router.get('/', getStatisticsOptions);
router.get('/monthly', getMonthlyStatistics);
router.get('/quarterly', getQuarterlyStatistics);

export default router;