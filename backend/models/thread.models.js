
import mongoose from "mongoose";
import { ThreadSchema } from "../schemas/thread.schemas.js";

export const Thread = mongoose.model("Thread", ThreadSchema);