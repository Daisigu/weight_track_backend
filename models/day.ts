import mongoose, {Document, Model, Schema} from 'mongoose';

interface IDay extends Document {
    date: Date;
    weight: number;
    isCompleted: boolean,
    _id: string
}

export type {IDay}

const daySchema: Schema = new Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Day: Model<IDay> = mongoose.model<IDay>('Day', daySchema);

export default Day;
