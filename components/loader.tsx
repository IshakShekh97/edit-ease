import React from "react";
import { MultiStepLoader } from "./ui/multi-step-loader";

const Loader = () => {
  const loadingStates = [
    {
      text: "Loading...",
    },
    {
      text: "Curating your experience...",
    },
    {
      text: "Almost there...",
    },
    {
      text: "Ready to go!",
    },
  ];

  return (
    <div>
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={true}
        duration={1000}
      />
    </div>
  );
};

export default Loader;
