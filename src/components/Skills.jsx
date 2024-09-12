import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/Images/meter1.svg";
import meter2 from "../assets/Images/meter2.svg";
import meter3 from "../assets/Images/meter3.svg";
import colorSharp from "../assets/Images/color-sharp.png";
import colorSharp2 from "../assets/Images/color-sharp2.png";

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>I excel in frontend development with strong expertise in HTML, CSS, Bootstrap, React.js, and Redux. I craft semantic, responsive designs using HTML and CSS, accelerate development with Bootstrap, and build dynamic interfaces with React.js. My proficiency in Redux ensures effective state management, enabling seamless and interactive user experiences.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="" />
                                    <h5>React.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="" />
                                    <h5>Redux</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>Git Proficiency</h5>
                                </div>
                            </Carousel>
                        </div></Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}

export default Skills
