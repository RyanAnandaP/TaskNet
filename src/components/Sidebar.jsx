import React from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";

const Sidebar = ({ onStartProject, projects, onSelect, selectedProjectId }) => {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-5 font-bold uppercase text-stone-100 md:text-xl">
        your projects
      </h2>
      <div className="mb-1">
        <Button onClick={onStartProject}>
          <AddIcon /> Add Projects
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((proj) => {
          let cssClasses =
            "text-md mt-4 w-full rounded-md px-2 py-1 text-left capitalize hover:bg-stone-700 hover:text-stone-200";

          if (proj.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={proj.id}>
              <button onClick={() => onSelect(proj.id)} className={cssClasses}>
                {proj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
