import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DataBase Connected");
    }catch(error){
        console.log("Something error while connecting Database");
    }
}

export {DB};