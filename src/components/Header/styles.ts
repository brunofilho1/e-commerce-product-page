import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);

  border-bottom: 1px solid var(--color-border);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: var(--color-header);

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-bottom: 8px;
  @media screen and (max-width: 1280px) {
    justify-content: space-between;
    padding: 0px 30px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 10px;
`;
export const Div = styled.div`
  display: flex;
`;

type ButtonProps = {solid?: boolean}

export const Button = styled.button<ButtonProps>`
  display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;
    border-radius: 4px;
    padding: 12px 10px;
    margin-top: 10px;

    color: ${props => props.solid ? 'var(--color-white)' : 'var(--color-blue)'};
    background: ${props => props.solid ? 'var(--color-blue)' : 'var(--color-white)'};
    border: none;

    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }
`;
