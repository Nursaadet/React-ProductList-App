import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { products, categories } from "./helper/data";
import "./App.scss";

function App() {
  // console.log(products, categories);
  return (
    <div className="App">
      <Header categories={categories} text="ProductsList" />
    </div>
  );
}

export default App;
