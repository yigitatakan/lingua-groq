import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function translateText(text: string, targetLang: string, model: string): Promise<string> {
  try {
    const prompt = `You are a translator. Translate the following text to ${targetLang}. Respond ONLY with the translation, no explanations or additional text:\n${text}`;
    
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { 
          role: 'system', 
          content: 'You are a translator. Always respond with ONLY the translation, no explanations or additional text.' 
        },
        { 
          role: 'user', 
          content: prompt 
        }
      ],
      model: model,
      temperature: 0.3,
      max_tokens: 1024,
      top_p: 0.65,
      stream: false,
    });

    return chatCompletion.choices[0]?.message?.content?.trim() || '';
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}