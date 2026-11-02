import { useState } from "react";
import starIcon from "../../assets/star-icon.svg";
import "./BuyBox.css";

export default function BuyBox({ product }) {
  const [selectedSize, setSelectedSize] = useState("40");
  const [selectedColor, setSelectedColor] = useState("#6FEEFF");

  const sizes = ["39", "40", "41", "42", "43"];
  const colors = ["#6FEEFF", "#FF6969", "#5D5D5D", "#6D70B7"];

  if (!product) return null;

  return (
    <div className="buy-box">
      <h1 className="buy-box-name">{product.name}</h1>
      <span className="buy-box-ref">Casual | Nike | REF: 38416711</span>

      <div className="buy-box-rating">
        <div className="buy-box-stars">
          {[1, 2, 3, 4].map((star) => (
            <img
              key={star}
              src={starIcon}
              alt="Estrela"
              className="star-icon"
            />
          ))}
          <span className="rating-score">4.7</span>
        </div>
        <span className="rating-reviews">(90 avaliações)</span>
      </div>

      <div className="buy-box-prices">
        {product.priceDiscount ? (
          <>
            <span className="buy-box-current-price">
              ${product.priceDiscount}
            </span>
            <span className="buy-box-old-price">${product.price}</span>
          </>
        ) : (
          <span className="buy-box-current-price">${product.price}</span>
        )}
      </div>

      <div className="buy-box-description">
        <h4>Descrição do produto</h4>
        <p>
          Confeccionado com materiais duradouros e palmilha ergonómica para
          máximo conforto no dia a dia. Ideal para quem procura versatilidade e
          estilo urbano.
        </p>
      </div>

      <div className="buy-box-options">
        <label className="option-title">Tamanho</label>
        <div className="size-selector">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="buy-box-options">
        <label className="option-title">Cor</label>
        <div className="color-selector">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`color-btn ${selectedColor === color ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <button type="button" className="buy-box-submit-btn">
        Comprar
      </button>
    </div>
  );
}
