import Gallery from "../../components/Gallery";
import FeaturedCollections from "../../components/FeaturedCollections";
import ProductListing from "../../components/ProductListing";
import SpecialOffer from "../../components/SpecialOffer";
import { products } from "../../data/products";

export default function HomePage() {
  const slides = [
    {
      subtitle: "Melhores ofertas personalizadas",
      title: "Queima de estoque Nike 🔥",
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      buttonText: "Aproveitar Oferta",
      link: "/produtos",
      image: "/home-slide-1.jpeg",
    },
    {
      subtitle: "Coleção Exclusiva",
      title: "Novidades de Temporada ⚡",
      description:
        "Descubra os lançamentos mais recentes com descontos imperdíveis e entregas rápidas para todo o país.",
      buttonText: "Aproveitar Oferta",
      link: "/produtos",
      image: "/home-slide-2.jpeg",
    },
    {
      subtitle: "Edição de Colecionador",
      title: "Sneakers em Destaque ✨",
      description:
        "Modelos icónicos selecionados para levar o seu estilo diário ao próximo nível.",
      buttonText: "Aproveitar Oferta",
      link: "/produtos",
      image: "/home-slide-3.jpeg",
    },
    {
      subtitle: "Tendências Urbanas",
      title: "Conforto & Performance 👟",
      description:
        "Tecnologia de amortecimento de topo combinada com um design pensado para as ruas.",
      buttonText: "Aproveitar Oferta",
      link: "/produtos",
      image: "/home-slide-4.jpeg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F9F8FE" }}>
      <Gallery slides={slides} />

      <FeaturedCollections />

      <main style={{ padding: "0 100px 60px 100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "24px", color: "#474747", fontWeight: 700 }}>
            Produtos em alta
          </h2>
          <a
            href="/produtos"
            style={{
              color: "#C92071",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Ver todos &rarr;
          </a>
        </div>
        <ProductListing products={products.slice(0, 8)} />
      </main>

      <SpecialOffer />
    </div>
  );
}
