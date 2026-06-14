import express from "express"
import { Thread } from "../models/thread.models.js";
import { getGeminiAIResponses } from "../utils/gemini.utils.js";
const chatRouters = express.Router();

chatRouters.post("/test", async (req, res) => {
    try {
        const newThread = new Thread({
            threadID: "ammmmmmm7878bnmcd",
            title: 'third Data'
        })

        const response = await newThread.save();
        res.json(response);
    } catch (error) {
        console.log("Error while testing the mogo connection ", error);
    }
})

chatRouters.get("/threads", async (req, res) => {
    try {
        const threads = await Thread.find({}).sort({ updatedAt: -1 });
        res.json(threads);
    } catch (error) {
        console.log("Error while fetching thread data = ", error)
    }
})


chatRouters.get("/threads/:threadID", async (req, res) => {
    try {
        const threadID = req.params.threadID;
        const thread = await Thread.findOne({ threadID: threadID });
        if (!thread) {
            res.status(400).json({ error: "Thread Not Found..!" });
            return;
        }
        res.json(thread);
    } catch (error) {
        console.log("Error while fetching threadID data = ", error);
    }
})

chatRouters.delete("/threads/:threadID", async (req, res) => {
    try {
        const threadID = req.params.threadID; 
        const deleteThread = await Thread.findOneAndDelete({ threadID: threadID });
        if (!deleteThread) {
            res.status(400).json({ error: "Thread Not Found..!" });
            return;
        }
        res.status(200).json({success: "Thread deleted successfully"});
    } catch (error) {
        console.log("Error while deleting threadID data = ", error);
    }
})

chatRouters.post("/chat", async (req, res) => {
    const { threadID, question } = req.body;
    if (!threadID || !question) {
        res.status(400).json({ error: "Missing required field..!" });
    }
    try {
        let thread = await Thread.findOne({ threadID: threadID });
        if (!thread) {
            //create new thread
            thread = new Thread({
                threadID: threadID,
                title: question,
                messages: [{ role: "user", content: question }]
            })
        }
        else {
            thread.messages.push({ role: "user", content: question });
        }

        const geminiResponse = await getGeminiAIResponses(question);

        thread.messages.push({ role: "assistant", content: geminiResponse });

        thread.updatedAt = new Date();
        await thread.save();
        res.json({ geminiResponse: geminiResponse });

    } catch (error) {
        res.status(500).json({ error: "Error while generating Gemini AI response..!" })
        console.log(error);
    }
})

export { chatRouters };
