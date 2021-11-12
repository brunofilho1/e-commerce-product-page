import styled from "styled-components";

import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;
  height: 30vh;
  background: var(--color-header);

  border-bottom: 1px solid var(--color-border);
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterDiv = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DivButton = styled.div`
  display: flex;
  gap: 10px;
`;
export const Div = styled.div`
  &.logo {
    width: 300px;
  }
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

export const Icons = styled.div`
  .icon {
    width: 42px;
    height: 28px;
    cursor: pointer;

    &:hover {
        padding: 1px;
    }
  }
`;

export const FacebookIcon = styled(AiFillFacebook)`

`;
export const InstagramIcon = styled(AiFillInstagram)`
    
`;
export const TwitterIcon = styled(AiOutlineTwitter)`
    
`;
export const GithubIcon = styled(AiFillGithub)`
    
`;
