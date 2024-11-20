import { Router } from 'express';
import { QuestionController } from '../controllers/questionController';

const router = Router();
const questionController = new QuestionController();

router.get('/', (req, res) => questionController.getAllQuestions(req, res));
router.get('/:id', (req, res) => questionController.getQuestionById(req, res));
router.post('/', (req, res) => questionController.createQuestion(req, res));
router.put('/:id', (req, res) => questionController.updateQuestion(req, res));
router.delete('/:id', (req, res) => questionController.deleteQuestion(req, res));

export default router;
