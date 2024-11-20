import { Request, Response } from 'express';
import { LevelService } from '../services/levelServices';

const levelService = new LevelService();

export class LevelController {
    public async getAllLevels(req: Request, res: Response): Promise<void> {
        try {
            const levels = await levelService.getAllLevels();
            res.status(200).json(levels);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async getLevelById(req: Request, res: Response): Promise<void> {
        try {
            const level = await levelService.getLevelById(req.params.id);
            if (level) {
                res.status(200).json(level);
            } else {
                res.status(404).json({ message: 'Level not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async createLevel(req: Request, res: Response): Promise<void> {
        try {
            const level = await levelService.createLevel(req.body);
            res.status(201).json(level);
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async updateLevel(req: Request, res: Response): Promise<void> {
        try {
            const level = await levelService.updateLevel(req.params.id, req.body);
            if (level) {
                res.status(200).json(level);
            } else {
                res.status(404).json({ message: 'Level not found' });
            }
        } catch (error) {
            this.handleError(res, error);
        }
    }

    public async deleteLevel(req: Request, res: Response): Promise<void> {
        try {
            const level = await levelService.deleteLevel(req.params.id);
            if (level) {
                res.status(200).json({ message: 'Level deleted successfully' });
            } else {
                res.status(404).json({ message: 'Level not found' });
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
