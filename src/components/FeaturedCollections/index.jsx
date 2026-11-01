import { Link } from "react-router-dom";
import "./FeaturedCollections.css";

export default function FeaturedCollections() {
  const collectionBanners = [
    {
      discount: "30% OFF",
      image: "/collection-1.png",
      link: "/produtos?categoria=camisolas",
    },
    {
      discount: "30% OFF",
      image: "/collection-2.png",
      link: "/produtos?categoria=tenis",
    },
    {
      discount: "30% OFF",
      image: "/collection-3.png",
      link: "/produtos?categoria=fones",
    },
  ];

  const categories = [
    { name: "Camisetas", icon: "👕", link: "/produtos?categoria=camisetas" },
    { name: "Calças", icon: "👖", link: "/produtos?categoria=calcas" },
    { name: "Bonés", icon: "🧢", link: "/produtos?categoria=bones" },
    { name: "Headphones", icon: "🎧", link: "/produtos?categoria=headphones" },
    { name: "Ténis", icon: "👟", link: "/produtos?categoria=tenis" },
  ];

  return (
    <section className="featured-collections-container">
      <h3 className="featured-section-title">Coleções em destaque</h3>
      <div className="featured-banners-grid">
        {collectionBanners.map((banner, index) => (
          <div key={index} className="collection-banner-card">
            <span className="collection-discount-tag">{banner.discount}</span>
            <img
              src={banner.image}
              alt="Coleção em destaque"
              className="collection-banner-image"
            />
            <Link to={banner.link} className="collection-banner-btn">
              Comprar
            </Link>
          </div>
        ))}
      </div>

      <div className="featured-categories-section">
        <h3 className="featured-categories-title">Coleções em destaque</h3>
        <div className="featured-categories-list">
          {categories.map((cat, index) => (
            <Link key={index} to={cat.link} className="category-item">
              <div className="category-circle">
                <span className="category-icon">{cat.icon}</span>
              </div>
              <span className="category-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
