import { ReactNode, useCallback, useLayoutEffect, useState } from "react";
import { CarModel } from "../ModelsContext";
import useWrapperScroll from "../useWrapperScroll";

import { Container } from "./styles";

interface ModelOverlayProps {
  children: ReactNode;
  model: CarModel;
}

type SectionDimentions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

function ModelOverlay({ children, model }: ModelOverlayProps) {
  const getSectionDimentions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimentions;
  }, [model.sectionRef]);

  const [dimentions, setDimentions] = useState<SectionDimentions>(
    getSectionDimentions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimentions(getSectionDimentions()));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollY } = useWrapperScroll();

  return <Container>{children}</Container>;
}

export default ModelOverlay;
