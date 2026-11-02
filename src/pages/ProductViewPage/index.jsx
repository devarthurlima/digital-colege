import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BuyBox from "../../components/BuyBox";
import ProductListing from "../../components/ProductListing";
import { products } from "../../data/products";
import "./ProductViewPage.css";

export default function ProductViewPage() {
  const { id } = useParams();

  const product =
    products.find((item) => String(item.id) === String(id)) || products[0];

  const galleryImages = [
    product?.image || "/produc-image-1.jpeg",
    "/produc-image-2.jpeg",
    "/produc-image-3.jpeg",
    "/produc-image-4.jpeg",
    "/produc-image-5.jpeg",
  ];

  const [activeThumb, setActiveThumb] = useState(galleryImages[0]);

  // Sempre que o id da URL ou o produto mudar, atualiza a foto ativa para a foto do novo produto
  useEffect(() => {
    if (product?.image) {
      setActiveThumb(product.image);
    }
  }, [id, product]);

  return (
    <div className="product-view-page">
      <nav className="view-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> /{" "}
        <span>{product.name}</span>
      </nav>

      <section className="product-view-main">
        <div className="product-view-gallery">
          <div className="gallery-main-view">
            <img
              src={activeThumb}
              alt={product.name}
              className="active-shoe-image"
            />
          </div>
          <div className="gallery-thumbs-row">
            {galleryImages.map((imgSrc, index) => (
              <div
                key={index}
                className={`thumb-card ${activeThumb === imgSrc ? "active" : ""}`}
                onClick={() => setActiveThumb(imgSrc)}
              >
                <img src={imgSrc} alt={`Miniatura ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <BuyBox product={product} />
      </section>

      <section className="related-products-section">
        <div className="related-header">
          <h2>Produtos recomendados</h2>
          <Link to="/produtos" className="related-view-all">
            Ver todos &rarr;
          </Link>
        </div>
        <ProductListing products={products.slice(0, 4)} />
      </section>
    </div>
  );
}
