import { ReactNode } from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";

import { Container } from "./styles";

interface PageProps {
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model #1",
            "Model #2",
            "Model #3",
            "Model #4",
            "Model #5",
            "Model #6",
            "Model #7",
          ].map((model) => (
            <ModelSection
              key={model}
              className="colored"
              modelName={model}
              overlayNode={
                <DefaultOverlayContent
                  label={model}
                  description="Order online for delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
