import { useState } from "react";
import FilterGroup from "../../components/FilterGroup";
import ProductListing from "../../components/ProductListing";
import { products } from "../../data/products";
import "./ProductListingPage.css";

export default function ProductListingPage() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);

  const handleToggle = (item, state, setState) => {
    if (state.includes(item)) {
      setState(state.filter((i) => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="product-listing-page">
      <div className="listing-header">
        <p className="listing-results-count">
          <strong>Resultados para "Ténis"</strong> - {products.length} produtos
        </p>

        <div className="listing-sort-box">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select id="sort-select" className="listing-select">
            <option value="relevance">Mais relevantes</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </div>
      </div>

      <div className="listing-body">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filtrar por</h3>
            <hr className="filters-divider" />
          </div>

          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"]}
            selectedValues={selectedBrands}
            onChange={(val) =>
              handleToggle(val, selectedBrands, setSelectedBrands)
            }
          />

          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={["Esporte e lazer", "Casual", "Utilitário", "Corrida"]}
            selectedValues={selectedCategories}
            onChange={(val) =>
              handleToggle(val, selectedCategories, setSelectedCategories)
            }
          />

          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={["Masculino", "Feminino", "Unisex"]}
            selectedValues={selectedGender}
            onChange={(val) =>
              handleToggle(val, selectedGender, setSelectedGender)
            }
          />

          <FilterGroup
            title="Estado"
            inputType="radio"
            name="condition"
            options={["Novo", "Usado"]}
            selectedValues={selectedCondition}
            onChange={(val) => setSelectedCondition([val])}
          />
        </aside>

        <section className="listing-products-area">
          <ProductListing products={products} />
        </section>
      </div>
    </div>
  );
}
