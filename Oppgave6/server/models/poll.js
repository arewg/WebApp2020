import mongoose from 'mongoose';
import slugify from 'slugify';

const {Schema} = mongoose;

const PollSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true,
            min: ['10', 'Spørsmålet må bestå av mer enn 10 tegn'],
            max: ['200', 'Spørsmålet må ha mindre enn 200 tegn'],
        },
        user: {
            type: String
        },
        answers: [{
            answer: String,
            votes: {
                type: Number,
                default: 0
            }
        }],
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);


const Poll = mongoose.model('Poll', PollSchema);

export default Poll;