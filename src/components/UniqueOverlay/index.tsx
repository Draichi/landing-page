import { useTransform } from "framer-motion";
import { ReactNode } from "react";
import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Burger, Logo, Footer } from "./styles";

interface UniqueOverlayProps {
  children?: ReactNode;
}

function UniqueOverlay({ children }: UniqueOverlayProps) {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
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
