import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({ 
  label, 
  placeholder, 
  type = "text", 
  value, 
  onChange, 
  className = "" 
}: InputProps) {
  return (
    <div className={`flex flex-col gap-spacing-3 ${className}`}>
      {label && (
        <label className="font-500 text-sm text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-100 border border-gray-400 rounded-radius-2 px-spacing-3 py-spacing-2 font-400 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-11"
      />
    </div>
  );
}
