import { Router } from 'express';
import { AnswerController } from '../controllers/answerController';

const router = Router();
const answerController = new AnswerController();

router.get('/', (req, res) => answerController.getAllAnswers(req, res));
router.get('/:id', (req, res) => answerController.getAnswerById(req, res));
router.post('/', (req, res) => answerController.createAnswer(req, res));
router.put('/:id', (req, res) => answerController.updateAnswer(req, res));
router.delete('/:id', (req, res) => answerController.deleteAnswer(req, res));

export default router;