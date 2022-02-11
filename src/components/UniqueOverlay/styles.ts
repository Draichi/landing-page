import styled from "styled-components";
import { BurgerSVG, LogoSVG } from "./IconSVG";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 52px;
`;

export const Logo = styled(LogoSVG)`
  height: 17px;
  cursor: pointer;
`;

export const Burger = styled(BurgerSVG)`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const Footer = styled.div``;
