import 'dotenv/config'
import express from "express"
import cookieParser from 'cookie-parser';
import cors from "cors"
import { getGeminiAIResponses } from './utils/gemini.utils.js';
import { connectDB } from './config/connectDb.js';
import { chatRouters } from './routes/chat.js';

const app = express();
const PORT = 8080;
app.use(express.json())
app.use(cors());


app.use("/api", chatRouters);
app.post("/test", async(req, res) => {
    try {
        const geminiAIResponse = await getGeminiAIResponses(req.body.question);
        //console.log("====  ", geminiAIResponse)
        res.json(geminiAIResponse);
    } catch (error) {
        console.log(error);
    }
})
app.listen(PORT, () => {
    console.log("server is running successfully..!")
    connectDB();
})