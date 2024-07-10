import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDeleteTasks }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md p-4">
          {tasks.map((tsk) => (
            <li
              key={tsk.id}
              className="my-4 flex justify-between rounded-[8px] border-2 border-stone-200 bg-stone-100 px-5 py-7 hover:bg-stone-300 hover:drop-shadow-md"
            >
              <span>{tsk.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTasks(tsk.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
