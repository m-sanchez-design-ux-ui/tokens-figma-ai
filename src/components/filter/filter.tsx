import React, { useState } from 'react';
import Input from '../input/input';
import Select from '../select/select';
import DatePicker from '../datepicker/datepicker';

export default function Filter() {
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleApply = () => {
    console.log('Filter applied:', {
      searchText,
      selectedOption,
      fromDate,
      toDate
    });
  };

  return (
    <div className="p-card rounded-card bg-bg-card border border-line-card shadow-shadow-lg w-full max-w-6xl">
      <div className="flex items-end gap-spacing-6 w-full">
        {/* Title with icon */}
        <div className='min-h-[76px] flex items-start'>
          <div className="flex items-center gap-spacing-2 shrink-0">
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M13.9971 21C13.7822 21 13.5732 20.9317 13.4013 20.8054L9.40702 17.8865C9.28368 17.7959 9.18357 17.6783 9.11463 17.5432C9.04568 17.4081 9.00978 17.2592 9.00978 17.1081V13.5373L3.38984 6.10378C3.17102 5.81419 3.03856 5.47075 3.00722 5.11175C2.97589 4.75274 3.04691 4.39226 3.21237 4.07047C3.37783 3.74867 3.63123 3.47821 3.94434 3.28921C4.25745 3.1002 4.61798 3.00008 4.98575 3H19.0143C19.382 3.00008 19.7425 3.1002 20.0557 3.28921C20.3688 3.47821 20.6222 3.74867 20.7876 4.07047C20.9531 4.39226 21.0241 4.75274 20.9928 5.11175C20.9614 5.47075 20.829 5.81419 20.6102 6.10378L14.9902 13.5373V20.027C14.9902 20.2851 14.8856 20.5326 14.6993 20.715C14.5131 20.8975 14.2605 21 13.9971 21ZM10.996 16.6216L13.004 18.0879V13.2162C13.004 13.0057 13.0737 12.8008 13.2026 12.6324L19.0143 4.94595H4.98575L10.8013 12.6324C10.9303 12.8008 11 13.0057 11 13.2162L10.996 16.6216Z" />
            </svg>
            <h3 className="text-sm text-gray-700 font-600">Filters</h3>
          </div>
        </div>
        {/* Form fields */}
        <div className="flex gap-spacing-6 flex-1 items-end">
          {/* Text Input */}
          <Input
            label="Put here..."
            placeholder="Put here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1"
          />

          {/* Select */}
          <Select
            label="Select"
            placeholder="Select..."
            options={selectOptions}
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="flex-1"
          />

          {/* From Date */}
          <DatePicker
            label="From"
            placeholder="From..."
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="flex-1"
          />

          {/* To Date */}
          <DatePicker
            label="To"
            placeholder="To..."
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="flex-1"
          />

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="min-h-11 flex justify-center items-center bg-transparent border border-line-button-secondary px-button-lg-x py-button-lg-y rounded-button text-text-secondary font-600 text-sm shrink-0"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
