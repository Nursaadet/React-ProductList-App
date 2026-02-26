import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductList = ({ products = [], inputVal = "" }) => {

  const filteredData = products.filter((item) =>
    item.title
      ?.toLowerCase()
      .includes(inputVal.trim().toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      {
      !filteredData.length && (
        <div>
          <h1>Product not found...</h1>
        </div>
      )}
    </div>
  );
};

export default ProductList;
