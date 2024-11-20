import mongoose, { Schema, Document } from 'mongoose';

export interface ILevel extends Document {
    name: string;
    description: string;
}

const LevelSchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
    },
    {
        versionKey: false,
        toJSON: {
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    }
);

export const Level = mongoose.model<ILevel>('Level', LevelSchema);
