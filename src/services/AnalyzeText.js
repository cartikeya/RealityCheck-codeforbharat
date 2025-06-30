import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBRcdkJJ46P5lMCuvtIzIaYWkHHOeucOgE",
});

export async function analyzeText(inputText) {
  try {
    const result = await ai.models.generateContent({
      model: "models/gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are a writing clarity assistant. Analyze this text:
"${inputText}"

Return:
1. A clarity score (0–100)
2. List of buzzwords or vague phrases
3. A clearer rewrite
4. 2 tips for better writing.
`,
            },
          ],
        },
      ],
    });

    const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!responseText) {
      throw new Error("No text returned by Gemini.");
    }

    return responseText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Gemini analysis failed.";
  }
}
