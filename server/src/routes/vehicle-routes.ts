import { Router } from 'express';

import { createVehicle, getVehicles } from '../controllers/vehicle-controller';

const router = Router();

router.post('/create-vehicle', createVehicle);
router.get('/', getVehicles);

// router.put();
// router.delete();

module.exports = router;
