import mongoose from 'mongoose';
import slugify from 'slugify';

const {Schema} = mongoose;

const PollSchema = new Schema(
    {
        question: {
            type: String,
            requred: true,
            trim: true,
            min: ['10', 'Spørsmålet må bestå av mer enn 10 tegn'],
            max: ['200', 'Spørsmålet må ha mindre enn 200 tegn'],
        },
        slug: String, //Eventuell gjøre den til en index?
        answer: {
            type: String,
            requred: true,
        }
    },
    { timestamps: true, toJSON: { virtuals: true}, toObject: { virtuals: true} }
);

PollSchema.pre('save', function (next) {
    this.slug = slugify.apply(this.name, { lower: true });
    next();
});


export default mongoose.model('Poll', PollSchema);