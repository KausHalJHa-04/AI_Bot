// const apikey = "AIzaSyCnCYlDijHtjHMrHfx0Ilf6cRvNtxojdog";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCnCYlDijHtjHMrHfx0Ilf6cRvNtxojdog" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
  });
  console.log(response.candidates[0].content.parts[0].text);
return response.candidates[0].content.parts[0].text;
}

export default main;
