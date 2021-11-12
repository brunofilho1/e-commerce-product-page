import React from "react";

import { 
  HeaderDiv,
  Container, 
  Button,
  Div,
  DivButton,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderDiv>
        <Div className="logo">
          <h1>CompanyLogo</h1>
        </Div>
        <DivButton className="signIn">
          <Button solid>Entrar</Button>
          <Button>Registrar-se</Button>
        </DivButton>
      </HeaderDiv>
    </Container>
  )
};

export default Header;
