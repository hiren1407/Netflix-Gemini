import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMENINIAPI_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });