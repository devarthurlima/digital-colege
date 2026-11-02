import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
  id = 1,
  name,
  image,
  price,
  priceDiscount,
  discount,
  category = "Ténis",
  product,
}) {
  const finalId = product?.id || id;
  const finalName = product?.name || name;
  const finalImage = product?.image || image;
  const finalPrice = product?.price || price;
  const finalDiscountPrice = product?.priceDiscount || priceDiscount;
  const finalDiscount = product?.discount || discount;
  const finalCategory = product?.category || category;

  return (
    <Link
      to={`/produtos/${finalId}`}
      className="product-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product-card-image-box">
        {finalDiscount && (
          <span className="product-discount-tag">{finalDiscount}</span>
        )}
        <img src={finalImage} alt={finalName} className="product-card-image" />
      </div>

      <div className="product-card-info">
        <span className="product-card-category">{finalCategory}</span>
        <h4 className="product-card-title">{finalName}</h4>
        <div className="product-card-prices">
          {finalDiscountPrice ? (
            <>
              <span className="product-old-price">${finalPrice}</span>
              <span className="product-current-price">${finalDiscountPrice}</span>
            </>
          ) : (
            <span className="product-current-price">${finalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}