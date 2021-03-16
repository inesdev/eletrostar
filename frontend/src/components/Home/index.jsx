import React from 'react';
// import Carousel from 'react-elastic-carousel';
import './styles.css';
import Star from './imagens/banner.png';
import StarTwo from './imagens/bannertwo.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
    return(
        <>
            <main className="container-fluid fundo">
                <Carousel>
                    <div className="carrossel">
                        <img className="image d-flex justify-content-center" src={Star} />
                    </div>
                    <div className="carrossel">
                        <img className="image d-flex justify-content-center" src={StarTwo} />
                    </div>
                </Carousel>
            </main>
        </>
    )
}
export default Home;