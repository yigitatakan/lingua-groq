import { useState } from 'react'
import './index.css'
import { TranslationBox } from './components/TranslationBox'
import { LanguageSelector } from './components/LanguageSelector'
import { translateText } from './services/translator'

function App() {
  const [sourceText, setSourceText] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [translation, setTranslation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await translateText(sourceText, targetLanguage);
      setTranslation(result);
    } catch (err) {
      setError('Translation failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">LinguaGroq Translator</h1>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="space-y-4">
            <TranslationBox
              value={sourceText}
              onChange={setSourceText}
              placeholder="Enter text to translate..."
            />
            
            <div className="flex items-center justify-between">
              <LanguageSelector
                value={targetLanguage}
                onChange={setTargetLanguage}
              />
              
              <button
                onClick={handleTranslate}
                disabled={isLoading || !sourceText.trim()}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Translate
              </button>
            </div>

            <TranslationBox
              value={translation}
              onChange={() => {}}
              placeholder="Translation will appear here..."
              isLoading={isLoading}
              readOnly
            />

            {error && (
              <div className="text-red-500 text-sm mt-2">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App