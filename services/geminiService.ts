import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateAssistantResponse = async (history: { role: string, text: string }[], userMessage: string): Promise<string> => {
  if (!apiKey) return "Error: API Key no configurada.";

  const systemInstruction = `
    Eres 'AeroBot', el asistente virtual de AeroPixel Solutions.
    Tu tono es profesional, técnico pero accesible, y enfocado en la fusión de arte y software.
    
    Información Clave:
    - AeroPixel ofrece servicios de drones y software de gestión.
    - Planes: Despegue ($299), Altitud ($599), Órbita ($999), Enterprise (Cotizar).
    - Todos los planes incluyen acceso al "Control Tower" (portal de clientes).
    - Cumplimos con todas las normas de la DGAC en Ecuador.
    - No volamos bajo lluvia fuerte ni vientos superiores a 30km/h.
    
    Responde brevemente (max 50 palabras) y siempre intenta dirigir al usuario a contratar un plan o registrarse.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Load history (simplified for this stateless example, ideally we pass history to history param)
    // For this implementation, we will just send the current message as the context is simple.
    
    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "Lo siento, tuve un problema procesando tu solicitud.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Actualmente estamos experimentando alta demanda en nuestros servidores neuronales. Por favor intenta más tarde.";
  }
};