import React from "react";
import Image01 from "../../assets/image-01.jpg";

export default function CardProfile() {
    return (
      <React.Fragment>
        <div className="flex flex-col items-center gap-gap-md p-card rounded-card bg-bg-card min-h-[173px] w-full max-w-[384px] border-solid border border-line-card shadow-shadow-lg">
            
            <img alt="image-01" src={Image01} className="size-[100px] rounded-full" />
            
            <h4 className="text-text-title font-500 text-h4">
              Welcome!
            </h4>
            <p className="text-text-paragraph font-400 text-p">
              Would you like confirm the action?
            </p>
            {/* Buttons Container */}
            <div className="w-full flex gap-gap-md">

              {/* Secondary Button lg*/}

              <button type="button" className="w-full min-h-11 flex flex-row flex-wrap justify-center items-center bg-transparent border-solid border border-line-button-secondary px-button-lg-x py-button-lg-y rounded-button text-text-secondary font-600 text-sm">
               Message
              </button>
              
              {/* Primary Button lg*/}

              <button type="button" className="w-full min-h-11 flex flex-row flex-wrap justify-center items-center bg-bg-primary-button px-button-lg-x py-button-lg-y rounded-button text-text-contrast font-600 text-sm">
                Add
              </button>

            </div>
        </div>
      </React.Fragment>
    );
}