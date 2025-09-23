import React, { useState, useRef, useEffect } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el dropdown si se hace click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <React.Fragment>
      <div ref={dropdownRef} className="relative inline-block">
        {/* Botón principal */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex flex-row flex-wrap justify-center items-center 
                    bg-bg-primary-button px-button-lg-x py-button-lg-y 
                    rounded-button text-text-contrast font-600 text-sm 
                    shadow-md transition-all duration-200 hover:opacity-90"
        >
          Dropdown
        </button>

        {/* Contenedor del dropdown */}
        <div
          className={`absolute top-[49px] right-0 min-w-[250px] max-w-[250px] min-h-[84px]
                      bg-bg-drop-down p-drop-down rounded-drop-down 
                      border border-line-drop-down flex flex-col gap-gap-md shadow-lg
                      transition-all duration-300 ease-in-out transform origin-top
                      ${
                        isOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
        >
          <span className="w-full text-center font-400 text-p text-text-paragraph cursor-pointer hover:text-text-secondary transition-colors">
            Option 01
          </span>
          <span className="w-full text-center font-400 text-p text-text-paragraph cursor-pointer hover:text-text-secondary  transition-colors">
            Option 02
          </span>
          <span className="w-full text-center font-400 text-p text-text-paragraph cursor-pointer hover:text-text-secondary  transition-colors">
            Option 03
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
