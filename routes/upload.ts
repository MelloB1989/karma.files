import { singleUpload } from '../controllers/upload';
import express from 'express';
const router = express.Router();

router.post('/single', singleUpload);

export default router;