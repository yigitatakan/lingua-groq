import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface TranslationBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isLoading?: boolean;
  readOnly?: boolean;
}

export const TranslationBox = ({ value, onChange, placeholder, isLoading, readOnly }: TranslationBoxProps) => {
  return (
    <div className="relative w-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full h-40 p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      {isLoading && (
        <div className="absolute top-2 right-2">
          <Loader2 className="animate-spin text-blue-500" />
        </div>
      )}
    </div>
  );
};