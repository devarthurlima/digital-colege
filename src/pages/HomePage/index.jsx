import ProductListing from "../../components/ProductListing";
import { products } from "../../data/products";

export default function HomePage() {
  return (
    <main style={{ padding: "40px 100px", backgroundColor: "#F9F8FE" }}>
      <h2 style={{ fontSize: "24px", color: "#474747", marginBottom: "20px" }}>
        Produtos em alta
      </h2>
      <ProductListing products={products.slice(0, 8)} />
    </main>
  );
}
