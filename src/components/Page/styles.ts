import styled from "styled-components";
import teslaImage1 from "./../../images/tesla-1.jpg";
import teslaImage2 from "./../../images/tesla-2.jpg";
import teslaImage3 from "./../../images/tesla-3.jpg";
import teslaImage4 from "./../../images/tesla-4.jpg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${teslaImage1});
    background-repeat: no-repeat;
    background-position: center;
  }
  .colored:nth-child(2) {
    background: url(${teslaImage2});
    background-repeat: no-repeat;
    background-position: center;
  }
  .colored:nth-child(3) {
    background: url(${teslaImage3});
    background-repeat: no-repeat;
    background-position: center;
  }
  .colored:nth-child(4) {
    background: url(${teslaImage4});
    background-repeat: no-repeat;
    background-position: center;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`;
