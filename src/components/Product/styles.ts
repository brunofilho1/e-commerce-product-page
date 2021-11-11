import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;


export const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0px;

    > a {
        font-size: 14px;
        text-decoration: none;
        color: var(--color-blue);
        padding: 2.5px 0px;

        & + a {
            padding-left: 10px;
            border-left: 1px solid var(--color-blue);
            margin-left: 10px;
        }
    }
`;

export const Panel = styled.div``;

export const Column = styled.div``;

export const Gallery = styled.div``;

export const Section = styled.div``;

export const Description = styled.div``;