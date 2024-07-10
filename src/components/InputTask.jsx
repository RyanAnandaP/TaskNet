import React, { forwardRef } from "react";

const InputTask = forwardRef(({ label, isTextArea, type, ...props }, ref) => {
  const InputStyle =
    "w-full border-b-2 bg-stone-300 text-stone-950 pl-2 pr-2 rounded-sm focus:border-stone-800 focus:outline-none";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-semibold uppercase">{label}</label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={InputStyle}></textarea>
      ) : (
        <input
          type={type}
          ref={ref}
          required
          {...props}
          className={`${InputStyle} py-1`}
        />
      )}
    </p>
  );
});

export default InputTask;
