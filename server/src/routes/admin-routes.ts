import { Router } from 'express';
import {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} from '../controllers/admin-controller';

const router = Router();

router.post('/create-account', createAccount);
router.post('/login', getAccount);
router.put('/update', updateAccount);
router.delete('/delete', deleteAccount);

module.exports = router;
