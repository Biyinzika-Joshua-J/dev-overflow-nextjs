"use server";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import Question from "@/database/question.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({createdAt:-1});

      return {questions}
  } catch (error) {
    console.log(error);
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    // 1.connect to DB
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // create question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // create an interaction record for the user's ask question action

    // increase user reputation by 5 for asking a question

    // allows to return new data for the path. Get's rid of the cache.
    revalidatePath(path)
  } catch (error) {
    console.log(error);
  }
}
