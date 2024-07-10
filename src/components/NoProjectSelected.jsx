import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImage}
        alt="No-project-selected-image"
        className="mx-auto h-20 w-20 object-contain"
      />
      <h2 className="mb-1 text-lg font-bold">No Project Selected</h2>
      <p className="text-md mb-6 text-stone-700">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>Create New Project</Button>
    </div>
  );
};

export default NoProjectSelected;
