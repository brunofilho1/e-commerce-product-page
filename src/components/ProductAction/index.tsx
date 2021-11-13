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
    Delivery,
    DeliveryIcon,
    MethodCard,
    PaymentIcon,
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

            <Delivery>
                <DeliveryIcon>
                    <img src="https://img.icons8.com/plasticine/100/000000/free-shipping.png"/>
                </DeliveryIcon>

                <div>
                    <span className="title">Frete grátis</span>
                    <span className="details">Para todos estados brasileiros</span>
                </div>
            </Delivery>

            <MethodCard>
                <div id="payment-title">
                    <PaymentIcon />
                    <span>Formas de pagamento</span>
                </div>
                <span className="details">Aceitamos qualquer dessas formas</span>
                <div id="payment-icons-div">
                    <img className="payment-icon" src="https://img.icons8.com/fluency/48/000000/mastercard.png"/>
                    <img className="payment-icon" src="https://img.icons8.com/color/48/000000/visa.png"/>
                    <img className="payment-icon" src="https://cdn0.iconfinder.com/data/icons/50-payment-system-icons-2/480/Boleto.png"/>
                    <img className="payment-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Hipercard_logo.svg"/>
                    <img className="payment-icon" src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1-1.png" alt="" />
                </div>
                <a href="#" className="more">
                    Ver mais opções
                </a>
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