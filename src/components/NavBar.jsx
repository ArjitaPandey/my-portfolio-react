import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/Images/Logo-background.png";
import navIcon1 from "../assets/Images/navIcon-1.svg";
import navIcon2 from "../assets/Images/navIcon-2.svg";
import navIcon3 from "../assets/Images/navIcon-3.svg";
// import scrollToSection from "../js/scroll";

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const scrollToSection = (id) => {
        if (window.innerWidth <= 768) { // Adjust 768 to your desired breakpoint
            const section = document.getElementById(id);
            if (section) {
                const offsetPosition = section.offsetTop - 300; // Adjust offset if needed
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
        else {
            const section = document.getElementById(id);
            const offsetPosition = section.offsetTop - 200; // Adjust offset if needed
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand
                    href="#home"
                    style={{ backgroundColor: 'transparent' }}
                    className='logo-container'
                >
                    <img src={Logo} alt="Home" height="130px" width="155px" style={{ backgroundColor: 'transparent' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('home');
                                scrollToSection('home');
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('skills');
                                scrollToSection('skills');
                            }}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                onUpdateActiveLink('projects');
                                scrollToSection('projects');
                            }}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/arjitapandey/" target='_blank' rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/ArjitaPandey" target='_blank' rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/__arjitapandeyy__/ " target='_blank' rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                        </div>
                        <a href="mailto:arjitapandey23@gmail.com"><button className='vvd' onClick={() => console.log('connect')}><span>Let's connect</span></button></a>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
