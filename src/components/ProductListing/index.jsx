import ProductCard from "../ProductCard";
import "./ProductListing.css";

export default function ProductListing({ products = [] }) {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}
