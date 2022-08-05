import React from "react";
import { Mark } from "./mark.model";

interface IGridSpaceProps {
  mark?: Mark;
  disabled?: boolean;
  onClick: () => void;
}

export const GridSpace: React.FC<IGridSpaceProps> = ({
  mark,
  disabled,
  onClick,
}) => {
  // custom animation for the mark to appear: https://blog.logrocket.com/creating-custom-animations-tailwind-css/
  return (
    <>
      {!disabled && (
        <div
          onClick={onClick}
          className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full hover:bg-violet-600 hover:cursor-pointer"
        ></div>
      )}
      {disabled && (
        <div className="flex justify-center items-center h-56 w-56 border-2 bg-teal-500 min-w-full animate-waving-hand">
          {mark === Mark.cross && <Cross />}
          {mark === Mark.nought && <Nought />}
        </div>
      )}
    </>
  );
};

const Cross = () => {
  return(<svg width="415" height="500" viewBox="0 0 415 500" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M51.439 64.8588C47.4037 57.6237 49.8971 48.3133 57.0082 44.0633L117.859 7.6953C124.97 3.44535 134.006 5.86524 138.041 13.1003L373.429 435.141C377.464 442.376 374.97 451.687 367.859 455.937L307.008 492.305C299.897 496.555 290.861 494.135 286.826 486.9L51.439 64.8588Z" fill="black"/>
  <rect width="101.65" height="509.486" rx="15" transform="matrix(0.719676 0.69431 -0.669093 0.743178 340.894 50.7234)" fill="black"/>
  </svg>);
}

const Nought = () => {
  return (<svg width="448" height="501" viewBox="0 0 448 501" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M447.864 250.887C447.864 283.703 442.085 316.197 430.856 346.515C419.628 376.832 403.17 404.38 382.423 427.584C361.676 450.788 337.045 469.195 309.937 481.753C282.829 494.311 253.775 500.774 224.434 500.774C195.093 500.774 166.039 494.311 138.931 481.753C111.824 469.195 87.1929 450.788 66.4456 427.584C45.6982 404.38 29.2405 376.832 18.0121 346.515C6.78369 316.197 1.00451 283.703 1.00452 250.887L95.7704 250.887C95.7704 269.784 99.0984 288.496 105.564 305.955C112.03 323.414 121.508 339.277 133.455 352.639C145.403 366.002 159.586 376.601 175.197 383.833C190.807 391.065 207.538 394.787 224.434 394.787C241.331 394.787 258.062 391.065 273.672 383.833C289.282 376.601 303.466 366.002 315.413 352.639C327.361 339.277 336.838 323.414 343.304 305.955C349.77 288.496 353.098 269.784 353.098 250.887H447.864Z" fill="black"/>
  <path d="M1.00454 250.774C1.0224 217.958 6.81927 185.467 18.0642 155.155C29.3091 124.843 45.7818 97.3037 66.5418 74.11C87.3018 50.9164 111.942 32.5223 139.057 19.9781C166.172 7.43379 195.229 0.984983 224.57 0.999838C253.911 1.01469 282.962 7.49292 310.063 20.0646C337.164 32.6363 361.784 51.0554 382.519 74.27C403.254 97.4847 419.697 125.04 430.908 155.364C442.12 185.687 447.882 218.184 447.864 251L353.098 250.952C353.108 232.055 349.791 213.341 343.334 195.879C336.878 178.417 327.409 162.549 315.469 149.181C303.528 135.812 289.35 125.205 273.744 117.966C258.138 110.726 241.409 106.996 224.513 106.987C207.616 106.979 190.883 110.692 175.269 117.916C159.655 125.14 145.465 135.732 133.511 149.088C121.556 162.445 112.07 178.303 105.594 195.759C99.1188 213.214 95.7807 231.924 95.7704 250.822L1.00454 250.774Z" fill="black"/>
  </svg>);
  }
