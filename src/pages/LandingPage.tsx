import { useState } from "react";
import filterOne from "/assets/images/landing/filterOne.jpg";
import filterTwo from "/assets/images/landing/filterTwo.jpg";

function LandingPage() {
  const [imageIsExpanded, setImageIsExpanded] = useState<
    "none" | "imageOne" | "imageTwo"
  >("none");

  const handleClick = (image: "imageOne" | "imageTwo") => {
    setImageIsExpanded((prev) => (prev === image ? "none" : image));
  };

  return (
    <div className="py-8 h-full w-full overflow-hidden">
      <div
        className={`flex flex-row items-center justify-center transition-all duration-700 ease-in-out `}
      >
        {/* Image One */}
        <div
          onClick={() => handleClick("imageOne")}
          className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
            ${
              imageIsExpanded === "imageOne"
                ? "w-full opacity-100 z-10"
                : imageIsExpanded === "imageTwo"
                ? "w-0 opacity-0"
                : "w-1/2 opacity-100"
            }`}
        >
          <img
            src={filterOne}
            alt="Unfiltered Water"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>

        {/* Image Two */}
        <div
          onClick={() => handleClick("imageTwo")}
          className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
            ${
              imageIsExpanded === "imageTwo"
                ? "w-full opacity-100 z-10"
                : imageIsExpanded === "imageOne"
                ? "w-0 opacity-0"
                : "w-1/2 opacity-100"
            }`}
        >
          <img
            src={filterTwo}
            alt="Filtered Water"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
