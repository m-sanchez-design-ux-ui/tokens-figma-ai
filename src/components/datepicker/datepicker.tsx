import React from 'react';

interface DatePickerProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function DatePicker({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  className = "" 
}: DatePickerProps) {
  return (
    <div className={`flex flex-col gap-spacing-3 ${className}`}>
      {label && (
        <label className="font-500 text-sm text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-gray-100 border border-gray-400 rounded-radius-2 p-spacing-3 font-400 text-sm text-gray-700 placeholder-gray-500 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
