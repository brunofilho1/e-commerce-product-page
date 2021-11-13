import React from 'react';
import { 
    Container, 
    Title,
    Seller,
    LocationCard, 
    LocationIcon, 
    ReputationCard, 
    ReputationThermometer, 
    ReputationRow,
    SupportIcon,
    ClockIcon,
    More
} from '../SellerInfo/styles';

const SellerInfo: React.FC = () => {
    return (
        <Container>
            <Title>Informações sobre o vendedor</Title>

            <Seller>
                <img src="https://github.com/brunofilho1.png" alt="" />
                <div>
                    <a href="#"><h3>Bruno Filho</h3></a>
                    <span>Vendo camisas, calças, moletons, blusas e mais.</span>
                </div>
            </Seller>

            <LocationCard>
                <LocationIcon />
                <div>
                    <p>Localização</p>
                    <strong>São Paulo — SP</strong>
                </div>
            </LocationCard>

            <ReputationCard>
                <ReputationThermometer>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                </ReputationThermometer>

                <ReputationRow>
                    <div>
                        <strong>561</strong>
                        <span>Vendas nos últimos 4 meses</span>
                    </div>

                    <div>
                        <strong><SupportIcon /></strong>
                        <span>Presta um bom atendimento</span>
                    </div>

                    <div>
                        <strong><ClockIcon /></strong>
                        <span>Vendas nos últimos 4 meses</span>
                    </div>
                </ReputationRow>
            </ReputationCard>

            <More href="#">Ver mais dados do vendedor</More>
        </Container>
    )
}

export default SellerInfo;

