import { ReactNode } from "react";
import { CarModel } from "../ModelsContext";
import useWrapperScroll from "../useWrapperScroll";

import { Container } from "./styles";

interface ModelOverlayProps {
  children: ReactNode;
  model: CarModel;
}

function ModelOverlay({ children }: ModelOverlayProps) {
  const { scrollY } = useWrapperScroll();

  return <Container>{children}</Container>;
}

export default ModelOverlay;
