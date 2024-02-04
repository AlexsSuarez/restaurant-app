import { Component } from "react";
import Container from "../Container";
import SectionHeader from '../SectionHeader';
import CTA from '../CTA';
import Image from '../Image';
import "./style.css";

class CookingIngredients extends Component {
    render() {
        return <div className='cooking__ingredients__section'>
            <Container>
                <div className="left__side">
                    <SectionHeader header="Cocinando ingredientes" subHeader="Al recibir la orden" />
                    <p className="description">Cocinando los ingredientes al recibir la orden es una práctica que nos distingue. Nuestros chefs, con su destreza y pasión, transforman los elementos frescos en auténticas obras maestras culinarias. Cada corte, cada especia, se convierte en una sinfonía de sabores. En Go Green Dine, la cocina es un arte en constante evolución, y cada platillo es una experiencia única para nuestros comensales.</p>
                    <CTA title="Leer más" />
                </div>
                <div className="right__side"><Image src='/assets/cooking_shape.png' alt='Food IMAGE' title="Food IMAGE" /> </div>
            </Container>
        </div>;
    }
}

export default CookingIngredients;
