import React, { useEffect, useRef } from 'react';
import { Datepicker as FBDatepicker } from 'flowbite-datepicker';

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      // Initialize Flowbite Datepicker on the input element
      // Autohide ensures it behaves like a standard collapsed control until opened
      // The library handles the popover styling consistent with Flowbite defaults
      // eslint-disable-next-line no-new
      new FBDatepicker(inputRef.current, { autohide: true });
    }
  }, []);

  return (
    <div className={`flex flex-col gap-spacing-3 ${className}`}>
      {label && (
        <label className="font-500 text-sm text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Left icon (custom) */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-gray-100 border border-gray-400 rounded-radius-2 font-400 text-sm text-gray-700 placeholder-gray-500 min-h-11 pl-10 pr-spacing-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          data-datepicker
        />
      </div>
    </div>
  );
}
