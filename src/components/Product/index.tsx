import React from 'react';
import SellerInfo from '../../components/SellerInfo';
import ProductAction from '../ProductAction';
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

import { Carousel } from 'react-carousel-minimal';

const Product: React.FC = () => {

    const data = [
        {
          image: "https://m.media-amazon.com/images/I/71RlbQJj4vL._UL1500_.jpg",
        },
        {
          image: "https://i.pinimg.com/564x/ea/a1/c0/eaa1c073c2e8ca4bf5765324606e3a17.jpg",
        },
        {
          image: "https://www.citysoccerpro.com/wp-content/uploads/2017/11/shirt.jpg",
        },
        {
          image: "https://arcservices.org/content/uploads/sites/23/2017/02/catalog_detail_image_large.jpg",
        },
        {
          image: "https://www.theadairgroup.com/images/Assorted_T_Shirts_large.jpg",
        },
        {
          image: "https://sc04.alicdn.com/kf/U2e77b3841e9c4d5dacc1ad599cca94f3Z.jpg",
        },
        {
          image: "https://img.freepik.com/psd-gratuitas/vista-superior-da-simulacao-de-camisetas-amarelas-e-azuis-com-etiquetas-de-preco-na-mesa-de-madeira_67155-11106.jpg?size=626&ext=jpg",
        },
        {
          image: "https://thumbs.dreamstime.com/b/mock-up-cotton-t-shirts-price-tags-wooden-table-top-view-196941286.jpg",
        },
        {
          image: "https://5.imimg.com/data5/AL/FP/MY-45474819/black-plain-blank-cotton-t-shirts-500x500.jpg",
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    return (
        <Container>
            <Row>
                <div>
                  <a href="#">Compartilhar</a>    
                  <a href="#">Vender um igual</a>
                </div>
                <div id="searchBox">
                  <input id="searchInput" type="text" placeholder="Pesquise o que quer..."/>
                  <i className="fas fa-search"></i>
                </div>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        {/* <img src={tshirtImage} alt="T-Shirt" /> */}
                        <Carousel
                            data={data}
                            time={8000}
                            width="610px"
                            height="550px"
                            captionStyle={captionStyle}
                            radius="3px"
                            slideNumber={true}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="white"
                            slideImageFit="cover"
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "850px",
                                maxHeight: "500px",
                                margin: "40px auto",
                            }}
                        />
                    </Gallery>
                    
                    <Info />
                </Column>

                <Column>

                    <ProductAction />
                    <SellerInfo />

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

            <a href="">Saiba mais sobre garantia</a>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam impedit beatae quod eius exercitationem porro expedita, voluptatem temporibus sequi nisi voluptas? Ea libero nulla hic neque fugit, placeat maiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam impedit beatae quod eius exercitationem porro expedita, voluptatem temporibus sequi nisi voluptas? Ea libero nulla hic neque fugit, placeat maiores?</p>
    </Description>
    )
}

export default Product;