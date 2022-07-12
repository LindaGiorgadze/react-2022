import { forwardRef, useImperativeHandle, useRef } from "react";

function Input({ onChange, value }, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" value={value} onChange={onChange} />;
}

Input = forwardRef(Input);
export default Input;
