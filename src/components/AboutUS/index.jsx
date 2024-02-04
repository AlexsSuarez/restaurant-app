import React, { Component } from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import CTA from '../CTA';
import Image from '../Image';
import './style.css'

class AboutUs extends Component {
    render() {
        return <div className='about__us__section'>
            <Container>
                <div className="left__side">
                    <SectionHeader header="Sobre nosotros" subHeader="Descubre el sabor de los platos veganos de clase mundial de la cocina de Golden View Dine" />
                    <p>En Golden View Dine, nuestra pasión es crear experiencias culinarias excepcionales con platillos veganos de alta calidad. Utilizamos ingredientes frescos y sostenibles para ofrecer una explosión de sabor en cada bocado. Nuestros chefs experimentan con creatividad y cuidado en la presentación. Únete a nosotros en esta aventura gastronómica y descubre el sabor de los platillos veganos de clase mundial en Golden View Dine.</p>
                    <CTA title="Leer más" />
                </div>
                <div className="right__side"> <Image src='/assets/about_us_desc.png' alt='Food IMAGE' title="Food IMAGE" /> </div>
            </Container>
        </div>;
    }
}

export default AboutUs;
