import React, { useState } from 'react'
import projectImg1 from "../assets/Images/BlogProject.png";
import projectImg2 from "../assets/Images/food website.png";
import { Container, Row, Col, Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/Images/color-sharp2.png";
import Experience from './Experience';
import "../css/Projects.css";

function Projects() {
    const [header, setHeader] = useState('Projects');
    const projects = [
        {
            title: 'Blog React Project ',
            imgUrl: projectImg1,
        }, {
            title: 'Food Website',
            imgUrl: projectImg2,

        }]
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {header}
                        </h2>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" onClick={() => setHeader('Projects')}>Project</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" onClick={() => setHeader('Experience')}>Experience</Nav.Link>
                                </Nav.Item>

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (<ProjectCard key={index} {...project} />)
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Experience />
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>

                    </Col>

                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="project-imaage"></img>
        </section>
    )
}

export default Projects
