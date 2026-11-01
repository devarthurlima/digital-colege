import { Link } from "react-router-dom";
import Logo from "../Logo";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import "./Footer.css";

function FooterInformation({ title, informations }) {
  return (
    <div className="footer-col">
      <h3 className="footer-title">{title}</h3>
      <ul className="footer-links">
        {informations.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const infoIntitucional = [
    { text: "Sobre a Digital Store", link: "/sobre" },
    { text: "Segurança", link: "/segurança" },
    { text: "Lista de Desejos", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe connosco", link: "/trabalhe-connosco" },
    { text: "Meus Pedidos", link: "/pedidos" },
  ];

  const infoCategorias = [
    { text: "Camisolas", link: "/produtos?categoria=camisolas" },
    { text: "Calças", link: "/produtos?categoria=calcas" },
    { text: "Bonés", link: "/produtos?categoria=bones" },
    { text: "Auscultadores", link: "/produtos?categoria=headphones" },
    { text: "Ténis", link: "/produtos?categoria=tenis" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col footer-about">
          <Logo white />
          <p className="footer-description">
            A sua loja definitiva de calçado e vestuário urbano. Qualidade,
            conforto e autenticidade para o seu dia a dia.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
        <FooterInformation title="Informação" informations={infoIntitucional} />
        <FooterInformation title="Categorias" informations={infoCategorias} />

        <div className="footer-col footer-contact">
          <h3 className="footer-title">Contactos</h3>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Digital Store. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
