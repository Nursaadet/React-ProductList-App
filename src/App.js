import Header from "./components/header/Header";
import "./App.scss";
import { categories } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header categories={categories} text="Product List" />
    </div>
  );
}

export default App;

