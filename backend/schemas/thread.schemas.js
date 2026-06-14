
import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const MessageSchema = new Schema({
    role: {
        type: String,
        enum: ["user", "assistant"],
        required:true
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const ThreadSchema = new Schema({
    threadID: {
        type: String,
        required: true,
        unique:true
    },
    title: {
        type: String,
        default:true
    },
    messages: [MessageSchema],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default:Date.now
    }
})