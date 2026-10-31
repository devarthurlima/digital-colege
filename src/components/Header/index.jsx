import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Logo from "../Logo";
import miniCart from "../../assets/mini-cart.svg";
import "./Header.css";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="header-container">
      <div className="header-top">
        <Link to="/">
          <Logo />
        </Link>
        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Pesquisar">
            <Search size={20} color="#666666" />
          </button>
        </form>
        <div className="header-actions">
          <Link to="/cadastro" className="header-register-link">
            Cadastre-se
          </Link>
          <Link to="/login" className="header-login-btn">
            Entrar
          </Link>
          <div className="header-cart">
            <img src={miniCart} alt="Carrinho de Compras" />
            <span className="cart-badge">2</span>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/produtos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Categorias
        </NavLink>
        <NavLink
          to="/contato"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
}
