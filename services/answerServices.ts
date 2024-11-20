import { Answer, IAnswer } from '../models/answer';

export class AnswerService {
    // Get all answers
    public async getAllAnswers(): Promise<IAnswer[]> {
        return await Answer.find().populate('questionId');
    }

    // Get answer by ID
    public async getAnswerById(id: string): Promise<IAnswer | null> {
        return await Answer.findById(id).populate('questionId');
    }

    // Create a new answer
    public async createAnswer(data: Partial<IAnswer>): Promise<IAnswer> {
        const answer = new Answer(data);
        return await answer.save();
    }

    // Update answer
    public async updateAnswer(id: string, data: Partial<IAnswer>): Promise<IAnswer | null> {
        return await Answer.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete answer
    public async deleteAnswer(id: string): Promise<IAnswer | null> {
        return await Answer.findByIdAndDelete(id);
    }
}
