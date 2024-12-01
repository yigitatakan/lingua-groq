import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

function cleanTranslation(response: string): string {
  // Remove any "Translation:" prefix if present
  response = response.replace(/^Translation:\s*/i, '');
  
  // Remove any quotes if present
  response = response.replace(/^["']|["']$/g, '');
  
  // Remove any trailing or leading whitespace
  response = response.trim();
  
  return response;
}

export async function translateText(text: string, targetLang: string): Promise<string> {
  try {
    const prompt = `Translate this text to ${targetLang}. Provide ONLY the translation, without any additional explanations or notes:\n\n${text}`;
    
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-groq-70b-8192-tool-use-preview',
      temperature: 0.3, // Reduced temperature for more consistent outputs
      max_tokens: 1024,
      top_p: 0.65,
      stream: false,
      stop: null
    });

    const response = chatCompletion.choices[0]?.message?.content || '';
    return cleanTranslation(response);
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Failed to translate text');
  }
}