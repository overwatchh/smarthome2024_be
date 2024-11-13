import express from 'express';
import { addInstallation } from '../controllers/installationController';

const router = express.Router();

router.put('/installation', addInstallation);

export default router;