import { Router } from 'express';

import {
  createAppointment,
  getAppointments,
  getAllAppointments,
} from '../controllers/appointment-controller';

const router = Router();

router.post('/create-invoice', createAppointment);
router.get('/', getAppointments);
router.get('/all', getAllAppointments);

module.exports = router;
