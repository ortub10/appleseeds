import React, { useState, useEffect, useRef } from "react";

const Exercise21_1 = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [textButton, setTextButton] = useState("edit");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
      setTextButton("save");
    } else {
      setTextButton("edit");
    }
  }, [isEdit]);
  return (
    <>
      {isEdit && <input ref={inputRef} />}
      <button onClick={() => setIsEdit((prev) => !prev)}>{textButton}</button>
    </>
  );
};

export default Exercise21_1;
