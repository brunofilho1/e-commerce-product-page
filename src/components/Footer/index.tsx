import React from "react";

import { 
  FooterDiv,
  Container, 
  Button,
  Div,
  DivButton,
  Icons,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterDiv>
        <Div className="logo">
          <h1>CompanyLogo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse eos quas porro provident nostrum unde rem in ratione dolore commodi id incidunt cupiditate ipsum?</p>
        </Div>
        <Div>
          <Icons>
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <GithubIcon className="icon" />
          </Icons>
        </Div>
        <Div>
          <h2>Contato</h2>
          <p>example@gmail.com</p>
          <p>(38) 98824-2257</p>
        </Div>
        <DivButton className="signIn">
          <Button solid>Entrar</Button>
          <Button>Registrar-se</Button>
        </DivButton>
      </FooterDiv>
    </Container>
  )
};

export default Footer;
