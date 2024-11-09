import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/Images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import "../css/Banner.css";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const toRotate = ["Frontend Developer", "Software Developer"];
    const period = 2000;


    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // Slow down when deleting
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period); // Reset delta when the full text is reached
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1); // Move to the next word
            setDelta(500); // Reset delta when text is cleared
        }
    }, [isDeleting, loopNum, text, toRotate]); // Include dependencies for proper effect execution

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker); // Cleanup interval on component unmount
    }, [delta, tick]);


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Arjita`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Dedicated Software Developer Intern with a strong foundation in front-end development and
                                        hands-on experience in full-stack environments. Proficient in HTML, CSS, JavaScript, and
                                        React.js, with expertise in integrating RESTful APIs to enhance application functionality.
                                        Adept at problem-solving, debugging, and optimizing performance. Strong collaborator with
                                        a focus on delivering scalable, user-friendly software solutions.</p>
                                    <a href="mailto:arjitapandey23@gmail.com" style={{ textDecoration: 'none' }}>
                                        <button onClick={() => console.log('connect')} className="connect-btn">
                                            <span>Let’s Connect <ArrowRightCircle size={25} /></span>
                                        </button>
                                    </a>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />

                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}