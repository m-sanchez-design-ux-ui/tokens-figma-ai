import React from "react";

interface CardLargeProps {
  isOpen?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function CardLarge({
  isOpen = true,
  onCancel,
  onConfirm,
  title = "Title text",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/7a3d3eee24d0aec3112eef53544bed5e06369d03?width=200",
  imageAlt = "Profile image"
}: CardLargeProps) {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        {/* Modal Card */}
        <div className="flex flex-col items-center gap-gap-md p-card rounded-card bg-bg-card w-full max-w-[384px] border-solid border border-line-card shadow-shadow-lg">
          
          {/* Circular Image */}
          <img 
            alt={imageAlt} 
            src={imageUrl} 
            className="size-[100px] rounded-full object-cover" 
          />
          
          {/* Title */}
          <h4 className="text-text-title font-500 text-h4 text-center">
            {title}
          </h4>
          
          {/* Description */}
          <div className="flex flex-col items-center gap-gap-md w-full">
            <p className="text-text-paragraph font-400 text-p text-center w-full">
              {description}
            </p>
          </div>
          
          {/* Buttons Container */}
          <div className="w-full flex gap-gap-md">
            
            {/* Cancel Button - Secondary */}
            <button 
              type="button" 
              onClick={onCancel}
              className="w-full min-h-11 flex flex-row flex-wrap justify-center items-center bg-transparent border-solid border border-line-button-secondary px-button-lg-x py-button-lg-y rounded-button text-text-secondary font-600 text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            
            {/* Confirm Button - Primary */}
            <button 
              type="button" 
              onClick={onConfirm}
              className="w-full min-h-11 flex flex-row flex-wrap justify-center items-center bg-bg-primary-button px-button-lg-x py-button-lg-y rounded-button text-text-contrast font-600 text-sm hover:opacity-90 transition-opacity"
            >
              Confirm
            </button>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
