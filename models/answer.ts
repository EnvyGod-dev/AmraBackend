import mongoose, { Schema, Document } from 'mongoose';
import { IQuestion } from './question';

export interface IAnswer extends Document {
    answerText: string;
    isCorrect: boolean;
    questionId: IQuestion['_id'];
    answerType: 'single' | 'multiple';
    allowedChoices: number;
}

const AnswerSchema: Schema = new Schema({
    answerText: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
    answerType: { type: String, enum: ['single', 'multiple'], required: true },
    allowedChoices: { type: Number, required: false },
});

export const Answer = mongoose.model<IAnswer>('Answer', AnswerSchema);
