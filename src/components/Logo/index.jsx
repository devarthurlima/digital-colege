import logoHeader from "../../assets/logo-header.svg";
import logoFooter from "../../assets/logo-footer.svg";

export default function Logo({ white = false }) {
  return (
    <img
      src={white ? logoFooter : logoHeader}
      alt="Digital Store Logo"
      style={{
        width: "253px",
        height: "44px",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}
