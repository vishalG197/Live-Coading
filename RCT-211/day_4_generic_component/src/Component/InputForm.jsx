import  { useEffect, useRef } from "react";

export default function InputForm() {
  let inputRef = useRef([]);
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleChange = (e, i) => {
   if (e.target.value.length === 10 && i < inputRef.current.length - 1) {
      inputRef.current[i + 1]?.focus();
    } else if (e.target.value.length === 0 && i > 0) {
      inputRef.current[i - 1]?.focus();
    }
  };

  return (
    <>
      <form>Problem1
         <h1>Input Using useRef</h1>
        <input
          type="number"
          ref={(e) => {
            inputRef.current[0] = e;
          }}
          onChange={(e) => handleChange(e, 0)}
        />
        <input
          type="number"
          ref={(e) => {
            inputRef.current[1] = e;
          }}
          onChange={(e) => handleChange(e, 1)}
        />
        <input
          type="number"
          ref={(e) => {
            inputRef.current[2] = e;
          }}
          onChange={(e) => handleChange(e, 2)}
        />
        <input
          type="number"
          ref={(e) => {
            inputRef.current[3] = e;
          }}
          onChange={(e) => handleChange(e, 3)}
        />
        <input
          type="number"
          ref={(e) => {
            inputRef.current[4] = e;
          }}
          onChange={(e) => handleChange(e, 4)}
        />
        <input
          type="number"
          ref={(e) => {
            inputRef.current[5] = e;
          }}
          onChange={(e) => handleChange(e, 5)}
        />
      </form>
    </>
  );
}
