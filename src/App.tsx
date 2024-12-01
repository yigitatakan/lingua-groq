import { useState } from 'react'
import './index.css'
import { TranslationBox } from './components/TranslationBox'
import { LanguageSelector } from './components/LanguageSelector'
import { ModelSelector } from './components/ModelSelector'
import { translateText } from './services/translator'

function App() {
  const [sourceText, setSourceText] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [selectedModel, setSelectedModel] = useState('llama3-groq-70b-8192-tool-use-preview')
  const [translation, setTranslation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await translateText(sourceText, targetLanguage, selectedModel);
      setTranslation(result);
    } catch (err) {
      setError('Translation failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">LinguaGroq Translator</h1>
        
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
          <div className="space-y-4">
            <TranslationBox
              value={sourceText}
              onChange={setSourceText}
              placeholder="Enter text to translate..."
            />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
                <LanguageSelector
                  value={targetLanguage}
                  onChange={setTargetLanguage}
                />
                <ModelSelector
                  value={selectedModel}
                  onChange={setSelectedModel}
                />
              </div>
              
              <button
                onClick={handleTranslate}
                disabled={isLoading || !sourceText.trim()}
                className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Translating...' : 'Translate'}
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