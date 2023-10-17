"use server"
import { connectToDatabase } from "../mongoose"

export async function createQuestion(params:object){
    try {
        // 1.connect to DB
        connectToDatabase();
        
    } catch (error) {
        console.log(error)
    }
}