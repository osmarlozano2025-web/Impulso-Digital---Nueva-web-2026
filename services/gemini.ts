
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual experto de "Impulso Digital". 
Impulso Digital es una consultora líder en IA estratégica ubicada en Ituzaingó, Buenos Aires.
Tu objetivo es ayudar a los visitantes a entender cómo la IA puede transformar sus negocios.
Sé profesional, amable, tecnológico y directo.
Si preguntan por citas, recomiéndales agendar una "Consultoría Estratégica" o una "Visita de 15 minutos".
No inventes servicios que no ofrecemos. 
Ofrecemos: Ecosistema de Datos, Desarrollo Web a medida, Automatización de procesos y el Cerebro IA Omnicanal.
Hablamos español rioplatense (siendo sutil) pero profesional.
`;

export async function getGeminiResponse(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
  // Always initialize GoogleGenAI with the API key from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using ai.models.generateContent to query GenAI with the model name and prompt
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // Map history to the parts structure required by the API
        ...history.map(h => ({ 
          role: h.role, 
          parts: [{ text: h.text }] 
        })),
        { 
          role: 'user', 
          parts: [{ text: prompt }] 
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the .text property directly (do not call as a method)
    return response.text || "Lo siento, tuve un problema procesando tu mensaje. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento no puedo responder, pero puedes contactarnos por WhatsApp directamente.";
  }
}
