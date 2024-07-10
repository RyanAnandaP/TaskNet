import React, { useRef } from "react";
import InputTask from "./InputTask";
import Modal from "./Modal";

const AddNewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const inputRefs = useRef({
    title: null,
    description: null,
    dueDate: null,
  });

  const handleSave = () => {
    const enteredTitle = inputRefs.current.title.value;
    const enteredDescription = inputRefs.current.description.value;
    const enteredDueDate = inputRefs.current.dueDate.value;

    const isValidInput = [
      enteredTitle,
      enteredDescription,
      enteredDueDate,
    ].every((input) => input.trim() !== "");

    {
      /* Input Validation */
    }
    if (!isValidInput) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  const inputFields = [
    { label: "Title", refKey: "title", type: "text" },
    { label: "Description", refKey: "description", isTextArea: true },
    { label: "Due Date", refKey: "dueDate", type: "date" },
  ];

  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2 className="mb-1 text-lg font-bold text-red-600">Invalid Input!</h2>
        <p className="text-md">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-md mb-4">Please make to provide a valid input!</p>
      </Modal>

      <div className="mt-16 w-[45rem]">
        <menu className="my-4 flex items-center justify-end gap-2">
          <li>
            <button
              className="justify-center text-center text-stone-800 hover:font-semibold hover:text-stone-800"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="justify-center rounded-md bg-slate-950 px-3 py-2 text-center font-medium text-stone-50 hover:bg-stone-700"
              onClick={handleSave}
            >
              Publish
            </button>
          </li>
        </menu>
        <div>
          {inputFields.map((field, index) => (
            <InputTask
              key={index}
              label={field.label}
              type={field.type}
              ref={(element) => (inputRefs.current[field.refKey] = element)}
              isTextArea={field.isTextArea}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AddNewProject;
