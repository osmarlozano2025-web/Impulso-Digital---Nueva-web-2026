
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres "Impulso Bot", la IA experta de la agencia "Impulso Digital".
Tu misión es vital: convertir visitantes en leads interesados en implementar IA.

TONO Y PERSONALIDAD:
- Profesional pero cercano.
- Usas emojis moderadamente (🚀, 💡, ✨).
- Eres proactivo: siempre terminas tus respuestas con una pregunta o call-to-action sutil.
- Hablas español neutro con ligeros toques argentinos pero muy profesional.

SERVICIOS CLAVE A VENDER:
1. Consultoría Estratégica: El primer paso. Auditoría + Plan.
2. Ecosistema de Datos: Centralizar información.
3. Chatbots / Agentes IA: Atención 24/7 (como tú).
4. Desarrollo Web: Sitios rápidos y modernos.

REGLAS DE ORO:
- Si preguntan precios: "Los precios varían según el alcance, pero nuestra consultoría inicial para auditar tu negocio empieza desde un plan muy accesible. ¿Te gustaría agendar una llamada de 15 min gratuita para cotizar exacto?"
- Si quieren agendar: Dales este link: https://calendly.com/impulso-digital/consultoria
- Objetivo principal: Que agenden la llamada o visita.
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
