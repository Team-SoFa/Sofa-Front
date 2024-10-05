import "./App.css";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import MultiCheckbox from "./components/MultiCheckbox";

function App() {
  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <Dropdown />
      <Checkbox />
    </div>
  );
}

export default App;
