import React from "react";
import 'flowbite';

export default function DropDownFlowbite() {

  return (
    <React.Fragment>
      <button 
        id="dropdownDefaultButton" 
        data-dropdown-toggle="dropdown" 
        className="
          text-text-contrast 
          bg-brand-primary 
          hover:bg-primary-600 
          focus:ring-4 
          focus:outline-none 
          focus:ring-blue-300 
          font-600 
          rounded-button 
          px-button-lg-x
          py-button-lg-y
          text-sm 
          text-center 
          inline-flex 
          items-center 
          min-h-11
          dark:bg-blue-600 
          dark:hover:bg-blue-700 
          dark:focus:ring-blue-800" 
        type="button"
      >
        Flowbite & Tokens
      </button>

      {/* Dropdown menu */}
      <div 
        id="dropdown" 
        className="
          z-10 
          hidden 
          bg-bg-drop-down 
          divide-y 
          divide-line-drop-down 
          rounded-drop-down
          shadow-sm 
          w-44 
          dark:bg-gray-700"
      >
        <ul className="
          py-button-base-y text-center font-400 text-p text-text-paragraph cursor-pointer hover:text-text-secondary transition-colors" 
          
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a 
              href="#" 
              className="
                block 
                px-button-base-y 
                py-button-base-x 
                hover:bg-gray-100 
                dark:hover:bg-gray-600 
                dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="
                block 
                px-button-base-y 
                py-button-base-x 
                hover:bg-gray-100 
                dark:hover:bg-gray-600 
                dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="
                block 
                px-button-base-y 
                py-button-base-x 
                hover:bg-gray-100 
                dark:hover:bg-gray-600 
                dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="
                block 
                px-button-base-y 
                py-button-base-x 
                hover:bg-gray-100 
                dark:hover:bg-gray-600 
                dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}