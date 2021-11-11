import React from 'react';
import tshirtImage from '../../assets/tshirt.png'
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>    
                <a href="#">Vender um igual</a>    
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img src={tshirtImage} alt="T-Shirt" />
                    </Gallery>
                    
                    <Info />
                </Column>

                <Column>

                    {/* <ProductAction /> */}
                    {/* <SellerInfo /> */}

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />

                </Column>
            </Panel>
        </Container>
    );
};

function WarrantySection() {
    return (
        <Section>
            <h4>Garantia</h4>

            <div>
                <span>
                    <p className="title">Compra garantida com o Lorem Ipsum</p>
                    <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
                </span>
                <span>
                    <p className="title">Garantia do vendedor</p>
                    <p className="description">Sem garantia</p>
                </span>
            </div>
        </Section>
    )
};

function Info() {
    return (
        <Description>
        <h2>Descrição</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit ad porro fugiat ipsam labore quas nobis voluptatem nemo, in maxime at ullam fuga fugit animi quae illo esse nam?</p>
        <br/>
        <br/>
        Itens inclusos: <br/>
        - 1x LED <br/>
        - 1x LED <br/>
        - 1x LED <br/>
        - 1x LED <br/>
        - 1x LED <br/>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam impedit beatae quod eius exercitationem porro expedita, voluptatem temporibus sequi nisi voluptas? Ea libero nulla hic neque fugit, placeat maiores?</p>
    </Description>
    )
}

export default Product;