import styled from 'styled-components';
import { mixins } from "../../styles/mixins";

// Estilizações da página do Login
export const Styled = {
  Error: styled.p`
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-weight: ${mixins.typograph.paragraph}; 
  `
};