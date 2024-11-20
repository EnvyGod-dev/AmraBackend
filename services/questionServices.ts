import { Question, IQuestion } from '../models/question';

export class QuestionService {
    // Get all questions
    public async getAllQuestions(): Promise<IQuestion[]> {
        return await Question.find().populate('levelId');
    }

    // Get question by ID
    public async getQuestionById(id: string): Promise<IQuestion | null> {
        return await Question.findById(id).populate('levelId');
    }

    // Create a new question
    public async createQuestion(data: Partial<IQuestion>): Promise<IQuestion> {
        const question = new Question(data);
        return await question.save();
    }

    // Update question
    public async updateQuestion(id: string, data: Partial<IQuestion>): Promise<IQuestion | null> {
        return await Question.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete question
    public async deleteQuestion(id: string): Promise<IQuestion | null> {
        return await Question.findByIdAndDelete(id);
    }
}
