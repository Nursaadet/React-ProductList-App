const ProductCard = ({ product }) => {
  const { price, title, image, id } = product;
  return (
    <div>
      <div>
        <h3>{price}</h3>
      </div>
      <img src={image} alt={title} />
      <div>
        <h2>{product.title}</h2>
      </div>
    </div>
  );
};
export default ProductCard;
