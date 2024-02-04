import React, { Component } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import CTA from "../CTA";
import Image from "../Image";
import "./style.css"

class BookTable extends Component {
    render() {
        return <div className="book__table__section">
            <Container>
                <Image src='/assets/shape__cooking.png' alt="image__shape" title="image__shape" />
                <div className="book__table__info">
                    <SectionHeader header="Ven y únete a nosotros para un almuerzo este fin de semana y disfruta." subHeader="BEBIDAS CON UN 10% DE DESCUENTO" className='center' />
                    <CTA title="RESERVA AHORA" className="center" />
                </div>
                <Image src='/assets/shape__cooking.png' alt="image__shape" title="image__shape" />
            </Container>
        </div>;
    }
}

export default BookTable;
