interface ModelSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const models = [
  // Mixtral Models
  { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B-32768' },
  
  // Gemma Models
  { id: 'gemma-7b-it', name: 'Gemma 7B-it' },
  { id: 'gemma2-9b-it', name: 'Gemma2 9B-it' },
  
  // LLaMA3 Models
  { id: 'llama3-groq-70b-8192-tool-use-preview', name: 'LLaMA3 70B Tool Use' },
  { id: 'llama3-groq-8b-8192-tool-use-preview', name: 'LLaMA3 8B Tool Use' },
  { id: 'llama3-70b-8192', name: 'LLaMA3 70B' },
  { id: 'llama3-8b-8192', name: 'LLaMA3 8B' },
  
  // LLaMA 3.1 Models
  { id: 'llama-3.1-70b-versatile', name: 'LLaMA 3.1 70B Versatile' },
  { id: 'llama-3.1-8b-instant', name: 'LLaMA 3.1 8B Instant' },
  
  // LLaMA 3.2 Models
  { id: 'llama-3.2-1b-preview', name: 'LLaMA 3.2 1B Preview' },
  { id: 'llama-3.2-3b-preview', name: 'LLaMA 3.2 3B Preview' },
  
  // LLaMA Guard
  { id: 'llama-guard-3-8b', name: 'LLaMA Guard 3 8B' }
];

export function ModelSelector({ value, onChange }: ModelSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600">Model:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-1.5 border rounded-lg bg-white text-sm min-w-[200px]"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
}
