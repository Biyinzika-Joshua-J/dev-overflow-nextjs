import { Schema, Document, model, models } from "mongoose";

export interface IAnswer extends Document{

}

const AnswerSchema = new Schema({

})

const Answer = models.Answer || model('Answer', AnswerSchema);

export default Answer;