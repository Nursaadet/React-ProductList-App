import ProductCard from "./ProductCard";
import "./Products.scss";

const ProductList = ({ products, }) => {
  console.log(products);
  
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;