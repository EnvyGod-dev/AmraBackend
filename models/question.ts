import mongoose, { Schema, Document } from 'mongoose';
import { ILevel } from './level';

export interface IQuestion extends Document {
    questionText: string;
    levelId: ILevel['_id'];
}

const QuestionSchema: Schema = new Schema({
    questionText: { type: String, required: true },
    levelId: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
});

export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
