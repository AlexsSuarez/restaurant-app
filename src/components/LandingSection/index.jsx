import React, { Component } from "react";
import Container from "../Container";
import Nav from "../Nav";
import CTA from "../CTA";
import "./style.css";

class LandingSection extends Component {
    render() {
        return (
            <div className="landing__section">
                <Container>
                    <Nav />
                    <div className="hero">
                        <p className="hero__paragraph">Bienvenido a cenar con Golden View</p>
                        <p className="sub__paragraph">Explora los auténticos platos veganos con tus amigos y familiares.</p>
                        <CTA title="Leer más" />
                    </div>
                </Container>
            </div>
        );
    }
}

export default LandingSection;
