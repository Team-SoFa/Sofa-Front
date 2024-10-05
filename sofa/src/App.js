import "./App.css";
import Checkbox from "./components/Checkbox";
import MultiCheckbox from "./components/MultiCheckbox";

function App() {
  return (
    <div className="App">
      <h1>checkbox example</h1>
      <Checkbox />

      <h1>MultiCheckbox Example</h1>
      <MultiCheckbox />
    </div>
  );
}

export default App;
