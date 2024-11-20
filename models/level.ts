import mongoose, { Schema, Document } from 'mongoose';

export interface ILevel extends Document {
    name: string;
    description: string;
}

const LevelSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
});

export const Level = mongoose.model<ILevel>('Level', LevelSchema);
