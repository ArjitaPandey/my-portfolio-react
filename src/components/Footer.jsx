import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/Images/navIcon-1.svg";
import navIcon2 from "../assets/Images/navIcon-2.svg";
import navIcon3 from "../assets/Images/navIcon-3.svg";
import LogoImage from "../assets/Images/Logo-background.png";
import "../css/Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={LogoImage} alt="Logo" style={{ display: 'flex', marginTop: '5%' }} />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end" style={{ marginTop: '3%' }}>
                        <div className="social-icon">
                            <a href=" https://www.linkedin.com/in/arjitapandey/" target='_blank'><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/ArjitaPandey" target='_blank'><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/__arjitapandeyy__/ "><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}