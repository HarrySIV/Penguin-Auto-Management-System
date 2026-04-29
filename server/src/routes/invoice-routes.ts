import { Router } from 'express';

import { createInvoice, getInvoices } from '../controllers/invoice-controller';

const router = Router();

router.post('/create-invoice', createInvoice);
router.get('/', getInvoices);

module.exports = router;
