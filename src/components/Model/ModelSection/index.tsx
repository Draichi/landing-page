import { ReactNode } from "react";

import { Container } from "./styles";

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  modelName: string;
  overlayNode: ReactNode;
}

function ModelSection({ children, ...props }: ModelSectionProps) {
  return <Container {...props}>{children}</Container>;
}

export default ModelSection;
