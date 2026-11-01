import { Link } from "react-router-dom";
import "./SpecialOffer.css";

export default function SpecialOffer() {
  return (
    <section className="special-offer-container">
      <div className="special-offer-image-box">
        <div className="special-offer-circle"></div>
        <img
          src="/produc-image-1.jpeg"
          alt="Air Jordan edição de colecionador"
          className="special-offer-image"
        />
      </div>

      <div className="special-offer-content">
        <span className="special-offer-badge">Oferta especial</span>
        <h2 className="special-offer-title">
          Air Jordan edição de colecionador
        </h2>
        <p className="special-offer-description">
          Consectetur elit eiusmod non cillum dolor laboris quis minim
          incididunt nulla velit minim. Deserunt ullamco tempor mollit nostrud
          magna anim sint qui velit non.
        </p>
        <Link to="/produtos" className="special-offer-btn">
          Ver Oferta
        </Link>
      </div>
    </section>
  );
}
