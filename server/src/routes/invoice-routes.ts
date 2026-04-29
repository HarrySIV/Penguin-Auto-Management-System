import { Router } from 'express';

import {
  createInvoice,
  getInvoices,
  getAllInvoices,
} from '../controllers/invoice-controller';

const router = Router();

router.post('/create-invoice', createInvoice);
router.get('/', getInvoices);
router.get('/all', getAllInvoices);

module.exports = router;
