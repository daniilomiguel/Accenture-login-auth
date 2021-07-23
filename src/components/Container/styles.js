import styled from "styled-components";
import { mixins } from "../../styles/mixins";

const ContainerSM = styled.div`
    margin: 80px 0;
    width: 389px;
    height: 400px;
    posiiton: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -%50);
    background: ${mixins.colors.secondary};
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 10px;
    align-items: top;
    justify-content: center;
    padding: 50px;
`

export const Styled = {
    ContainerSM,
    ContainerLG: styled(ContainerSM)`
        margin: 5% 0;
        width: 90%;
        flex-direction: row;
        padding: none;
    `,
    Title: styled.h1`
        margin: 0;
        align-self: center;
        color: ${mixins.colors.primary};
        font-family: ${mixins.fonts.bold};
        font-size: ${mixins.typograph.title};
    `
}