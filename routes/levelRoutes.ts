import { Router } from 'express';
import { LevelController } from '../controllers/levelController';

const router = Router();
const levelController = new LevelController();

router.get('/', (req, res) => levelController.getAllLevels(req, res));
router.get('/:id', (req, res) => levelController.getLevelById(req, res));
router.post('/', (req, res) => levelController.createLevel(req, res));
router.put('/:id', (req, res) => levelController.updateLevel(req, res));
router.delete('/:id', (req, res) => levelController.deleteLevel(req, res));

export default router;
