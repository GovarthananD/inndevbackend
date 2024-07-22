import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {DB} from "./database.js";
import {employee} from "./routes.js";
dotenv.config();




const app = express();
app.use(express.json());
app.use(cors());


DB();

app.use(employee);

app.get("/", (req, res) => {
    res.send({message:"Hello World"})
});

app.listen(process.env.PORT, () => console.log("Server Running On PORT"));