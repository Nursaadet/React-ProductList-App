import "./Products.scss";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="product-list">
      {products.map((product) => {
        const { price, title, image, id } = product;
        return (
          <div key={id}>
            <div>
              <h3>{price}</h3>
            </div>
            <img src={image} alt={title} />
            <div>
              <h2>{product.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
