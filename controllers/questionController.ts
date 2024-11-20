import { Request, Response } from 'express';
import { QuestionService } from '../services/questionServices';

const questionService = new QuestionService();

export class QuestionController {
    // Get all questions
    public async getAllQuestions(req: Request, res: Response): Promise<void> {
        try {
            const questions = await questionService.getAllQuestions();
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Get question by ID
    public async getQuestionById(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.getQuestionById(req.params.id);
            if (question) {
                res.status(200).json(question);
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Create new question
    public async createQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.createQuestion(req.body);
            res.status(201).json(question);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update question
    public async updateQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.updateQuestion(req.params.id, req.body);
            if (question) {
                res.status(200).json(question);
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete question
    public async deleteQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.deleteQuestion(req.params.id);
            if (question) {
                res.status(200).json({ message: 'Question deleted successfully' });
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
