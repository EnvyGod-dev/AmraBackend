import { Level, ILevel } from '../models/level';

export class LevelService {
    // Get all levels
    public async getAllLevels(): Promise<Partial<ILevel>[]> {
        const levels = await Level.find();
        return levels.map(level => {
            const { _id, name, description } = level.toObject();
            return { id: _id, name, description }; // Return without __v
        });
    }

    // Get level by ID
    public async getLevelById(id: string): Promise<ILevel | null> {
        return await Level.findById(id);
    }

    // Create a new level
    public async createLevel(data: Partial<ILevel>): Promise<ILevel> {
        const level = new Level(data);
        return await level.save();
    }

    // Update level
    public async updateLevel(id: string, data: Partial<ILevel>): Promise<ILevel | null> {
        return await Level.findByIdAndUpdate(id, data, { new: true });
    }

    // Delete level
    public async deleteLevel(id: string): Promise<ILevel | null> {
        return await Level.findByIdAndDelete(id);
    }
}
