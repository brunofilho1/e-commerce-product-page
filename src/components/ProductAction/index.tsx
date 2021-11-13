import React from 'react';

import { 
    Container,
    ProductKind,
    Row,
    HeartIcon,
    Condition,
    PriceCard,
    PriceRow,
    InstallmentsInfo,
    StockStatus,
    MethodCard,
    CheckIcon,
    Actions,
    Button,
    Benefits,
    ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
    return (
        <Container>
            <ProductKind>Roupas, Calçados e Acessórios</ProductKind>

            <Row>
                <h1>Camiseta Branca de Marca Desconhecida</h1>
                <HeartIcon />
            </Row>

            <Condition>Produto Novo</Condition>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">R$</span>
                    <span className="fraction">34</span>
                    <span className="cents">99</span>
                </PriceRow>

                <InstallmentsInfo>em 3x de R$ 11,67</InstallmentsInfo>
            </PriceCard>

            <StockStatus>
                <div>
                    <CheckIcon />
                    <span>Estoque disponível</span>
                </div>

                <p>574 itens em estoque</p>
            </StockStatus>

            <MethodCard>
                <CheckIcon />

                <div>
                    <span className="title">Frete grátis</span>
                    <span className="details">Para todos estados brasileiros</span>
                    <a href="#" className="more">
                        Ver mais opções
                    </a>
                </div>
            </MethodCard>

            <Actions>
                <Button solid>Comprar agora</Button>
                <Button>Adicionar ao carrinho</Button>
            </Actions>

            <Benefits>
                <li>
                    <ShieldIcon />
                    <p>Compre com segurança, receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
                </li>
            </Benefits>
        </Container>
    )
}

export default ProductAction;