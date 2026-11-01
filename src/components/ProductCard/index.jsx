import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  id,
  image,
  name,
  category = "Ténis",
  price,
  priceDiscount,
}) {
  const discountPercent =
    priceDiscount && price > priceDiscount
      ? Math.round(((price - priceDiscount) / price) * 100)
      : null;

  return (
    <Link to={`/produtos/${id}`} className="product-card">
      <div className="product-card-image-wrapper">
        {discountPercent && (
          <span className="product-card-discount-badge">
            {discountPercent}% OFF
          </span>
        )}
        <img src={image} alt={name} className="product-card-image" />
      </div>

      <div className="product-card-info">
        <span className="product-card-category">{category}</span>
        <h4 className="product-card-title">{name}</h4>
        <div className="product-card-prices">
          {priceDiscount ? (
            <>
              <span className="product-card-old-price">${price}</span>
              <span className="product-card-current-price">
                ${priceDiscount}
              </span>
            </>
          ) : (
            <span className="product-card-current-price">${price}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
