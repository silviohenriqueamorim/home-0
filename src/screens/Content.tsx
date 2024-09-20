import React from 'react';
import Slider, { Settings } from 'react-slick'; // Importar Settings para tipos
import './css/Content.css';
import carro from "../assets/carro.jpg";
import carro1 from "../assets/carro1.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Configurações do Slider
const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const Content: React.FC = () => {
    return (
        <main className="main-content">
            <section className="car-info">
                <img
                    src={carro}
                    alt="Imagem de um carro moderno em um ambiente urbano"
                    className="car-image"
                />
            </section>
            <section className="carousel-container">
                <Slider {...settings}>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 1"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 2"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 3"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 4"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 5"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                    <div>
                        <img src={carro1} className="carousel-image" alt="Carro 6"/>
                        <h3 style={{ textAlign: 'center' }}>Autos</h3>
                    </div>
                </Slider>
            </section>
        </main>
    );
};

export default Content;
