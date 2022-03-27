import { HeaderContainer, HeaderContent, Nav } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Button } from "../Button";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo no header" />
        <Nav>
          <div className="nav-links">
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </div>

        </Nav>
          <div className="header-wrap-button">
            <a>Login</a>
            <Button>Try for free</Button>
          </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
