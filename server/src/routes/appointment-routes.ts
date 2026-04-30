import { Router } from 'express';

import {
  createAppointment,
  getAppointments,
  getAllAppointments,
} from '../controllers/appointment-controller';

const router = Router();

router.post('/create', createAppointment);
router.post('/', getAppointments);
router.get('/all', getAllAppointments);

module.exports = router;
