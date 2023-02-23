import { useState } from "react";

function useCustom() {
  const [count, setCount] = useState(0);

  const handleIncriment = () => {
    setCount(count + 1);
  };
  const handleDicriment = () => {
    setCount(count === 0 ? count : count - 1);
  };
  return {
    count,
    handleIncriment,
    handleDicriment
  };
}
export default useCustom;
