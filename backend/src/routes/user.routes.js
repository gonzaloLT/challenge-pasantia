import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:username', UserController.getByUsername);
router.get('/:username/groups', UserController.getGroups);

export default router;