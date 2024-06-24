import { GoogleGenerativeAI } from "@google/generative-ai";
import { systemInstruction } from "./systemInstruction";

  
  const apiKey = "YOUR_API_KEY";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 export async function sendPromptToGPT(prompt:string) {
    try{
        const chatSession = model.startChat({
            generationConfig,
            history:[]
          });
        
          const result = await chatSession.sendMessage(prompt);
          return result.response.text();
    }
    catch(err){
        throw new Error("Failed to fetch the data")
    }
  }
  