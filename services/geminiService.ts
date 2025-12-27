
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (prompt: string, context: string = ""): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are a professional business consultant for a portfolio website styled like STORES (a Japanese business platform). 
        You help visitors understand the skills and projects of the developer. 
        Your tone is friendly, helpful, and professional. 
        Keep your answers concise and business-oriented.
        Context: ${context}`,
        temperature: 0.7,
      },
    });
    return response.text || "申し訳ありません。回答を生成できませんでした。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "接続エラーが発生しました。しばらくしてから再度お試しください。";
  }
};

export const analyzeBusinessIdea = async (idea: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Evaluate the following business idea and suggest how a developer with skills in React, TypeScript, and AI could help build it: ${idea}`,
      config: {
        systemInstruction: "You are a senior technical strategist. Provide a brief analysis (3 sentences) and 3 specific technical features that would be essential.",
        temperature: 0.8,
      },
    });
    return response.text || "アイデアの分析に失敗しました。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "分析中にエラーが発生しました。";
  }
};
