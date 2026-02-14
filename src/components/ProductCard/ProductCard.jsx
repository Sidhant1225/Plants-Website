import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card glass-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">Rs. {product.price}/-</p>
      <button className="primary-btn small">Explore</button>
    </div>
  );
};

export default ProductCard;