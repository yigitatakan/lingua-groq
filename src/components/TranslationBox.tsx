import { Loader2 } from 'lucide-react';

interface TranslationBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  readOnly?: boolean;
}

export function TranslationBox({ 
  value, 
  onChange, 
  placeholder = '', 
  isLoading = false,
  readOnly = false 
}: TranslationBoxProps) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly || isLoading}
        className={`w-full min-h-[120px] md:min-h-[150px] p-3 border rounded-lg resize-none bg-white
          ${readOnly ? 'bg-gray-50' : 'hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          transition-all outline-none`}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}