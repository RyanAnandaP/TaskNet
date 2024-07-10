import React, { forwardRef, useImperativeHandle, useRef } from "react";
import warningPict from "../assets/warning_illustration.svg";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, btnCaption }, ref) => {
  const refDialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        refDialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={refDialog}
      className="rounded-[15px] bg-stone-50 p-4 text-center shadow-sm backdrop:bg-slate-700/60"
    >
      <img
        src={warningPict}
        alt="warning-invalid-input"
        className="mb-2 h-32 w-full"
      />
      {children}
      <form method="dialog">
        <button className="rounded-md bg-stone-900 px-8 py-2 text-slate-50 hover:bg-stone-700">
          {btnCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
