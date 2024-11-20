import { Request, Response } from 'express';
import { AnswerService } from '../services/answerServices';

const answerService = new AnswerService();

export class AnswerController {
    public async getAllAnswers(req: Request, res: Response): Promise<void> {
        try {
            const answers = await answerService.getAllAnswers();
            res.status(200).json(answers);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async getAnswerById(req: Request, res: Response): Promise<void> {
        try {
            const answer = await answerService.getAnswerById(req.params.id);
            if (answer) {
                res.status(200).json(answer);
            } else {
                res.status(404).json({ message: 'Answer not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async createAnswer(req: Request, res: Response): Promise<void> {
        try {
            const answer = await answerService.createAnswer(req.body);
            res.status(201).json(answer);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async updateAnswer(req: Request, res: Response): Promise<void> {
        try {
            const answer = await answerService.updateAnswer(req.params.id, req.body);
            if (answer) {
                res.status(200).json(answer);
            } else {
                res.status(404).json({ message: 'Answer not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async deleteAnswer(req: Request, res: Response): Promise<void> {
        try {
            const answer = await answerService.deleteAnswer(req.params.id);
            if (answer) {
                res.status(200).json({ message: 'Answer deleted successfully' });
            } else {
                res.status(404).json({ message: 'Answer not found' });
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
