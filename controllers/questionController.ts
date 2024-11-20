import { Request, Response } from 'express';
import { QuestionService } from '../services/questionServices';

const questionService = new QuestionService();

export class QuestionController {
    public async getAllQuestions(req: Request, res: Response): Promise<void> {
        try {
            const questions = await questionService.getAllQuestions();
            res.status(200).json(questions);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async getQuestionById(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.getQuestionById(req.params.id);
            if (question) {
                res.status(200).json(question);
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async createQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.createQuestion(req.body);
            res.status(201).json(question);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async updateQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.updateQuestion(req.params.id, req.body);
            if (question) {
                res.status(200).json(question);
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async deleteQuestion(req: Request, res: Response): Promise<void> {
        try {
            const question = await questionService.deleteQuestion(req.params.id);
            if (question) {
                res.status(200).json({ message: 'Question deleted successfully' });
            } else {
                res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    // Handle errors
    private handleError(res: Response, error: unknown): void {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred.' });
        }
    }
}
