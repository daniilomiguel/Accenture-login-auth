// componentes estilizados da página Routes
import img from '../assets/bg.gif';
import styled from 'styled-components';

export const Styled = {
  AppLayout: styled.div`
    position: relative;
    height: 100vh;
    width: 100wh;
    background-image: url(${img});
    background-size: cover;
    --webkit-font-smoothing: antialiased;
  `,

  PageLayout: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `
}