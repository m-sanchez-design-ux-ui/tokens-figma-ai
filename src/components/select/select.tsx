import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export default function Select({ 
  label, 
  placeholder, 
  options = [], 
  value, 
  onChange, 
  className = "" 
}: SelectProps) {
  return (
    <div className={`flex flex-col gap-spacing-3 ${className}`}>
      {label && (
        <label className="font-500 text-sm text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="bg-gray-100 border border-gray-400 rounded-radius-2 pl-spacing-3 py-spacing-2 font-400 text-sm text-gray-700 w-full appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-11"
        >
          {placeholder && (
            <option value="" disabled className="text-gray-500">
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
