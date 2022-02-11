import { ReactNode } from "react";

import { Container, Header, Burger, Logo, Footer } from "./styles";

interface UniqueOverlayProps {
  children?: ReactNode;
}

function UniqueOverlay({ children }: UniqueOverlayProps) {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">#1</a>
          </li>
          <li>
            <a href="#">#2</a>
          </li>
          <li>
            <a href="#">#3</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;
