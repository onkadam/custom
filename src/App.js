import "./styles.css";
import useCustom from "./useCustom";

export default function App() {
  const data = useCustom();

  return (
    <div className="App">
      <h2>Count : {data.count}</h2>
      <button onClick={data.handleIncriment}>INC</button>
      <button onClick={data.handleDicriment}>INC</button>
    </div>
  );
}
