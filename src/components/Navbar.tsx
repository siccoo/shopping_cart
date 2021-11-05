import JupiterIcon from "../images/Jupiter.png";
import "./Navbar.styles"

import { Wrapper } from "./Navbar.styles";

export default function Navbar() {
  return (
    <Wrapper>
      <div className="navbar">
        <div className="brand">
          <img src={JupiterIcon} loading="lazy" alt="" className="brand-img" />
        </div>
      </div>
    </Wrapper>
  );
}
