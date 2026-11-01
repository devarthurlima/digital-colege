import Gallery from "../../components/Gallery";
import ProductListing from "../../components/ProductListing";
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

      <main style={{ padding: "40px 100px" }}>
        <h2
          style={{ fontSize: "24px", color: "#474747", marginBottom: "20px" }}
        >
          Produtos em alta
        </h2>
        <ProductListing products={products.slice(0, 8)} />
      </main>
    </div>
  );
}
