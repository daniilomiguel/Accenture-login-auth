import React from 'react';
import { Styled } from "./styles";

export default function Container({ children, title, size }) {
    return (
        <Styled.ContainerSM>
            <Styled.Title>{title}</Styled.Title>
            {children}
        </Styled.ContainerSM>
   )
}