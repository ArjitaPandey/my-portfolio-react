import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../css/Experience.css";

function Experience() {
    const ulStyle = {
        listStyleType: 'circle',
        paddingLeft: '20px', // Adjust this value for consistent indentation
        margin: '0'
    };

    const liStyle = {
        marginBottom: '10px',
        lineHeight: '1.5',
        paddingLeft: '0' // Remove extra padding if needed
    };

    const pStyle = {
        width: '95%',
        margin: '0',
        paddingLeft: '20px' // Ensure alignment with ul
    };

    return (
        <section className='experience'>
            <Container>
                <Row>
                    <Col>
                        <div className='experience-bx'>
                            <p style={pStyle}>
                                Software Developer Intern (SDE), Growth Natives<br /> Sept 2023 - Sept 2024
                                <ul style={ulStyle}>
                                    <li style={liStyle}>
                                        API Integration: Implemented and integrated RESTful APIs with front-end components to
                                        ensure seamless data flow and application performance.
                                    </li>
                                    <li style={liStyle}>
                                        Web Development: Developed and maintained dynamic, responsive web applications
                                        using HTML5, CSS3, JavaScript, and React.js.
                                    </li>
                                    <li style={liStyle}>
                                        Version Control: Utilized Git for efficient source code management and team
                                        collaboration.
                                    </li>
                                    <li style={liStyle}>
                                        Debugging: Identified and resolved complex issues, enhancing user experience, and
                                        ensuring smooth application operation.
                                    </li>
                                    <li style={liStyle}>
                                        Cross-Functional Collaboration: Worked closely with backend developers to refine API
                                        integration and optimize overall system functionality.
                                    </li>
                                    <li style={liStyle}>
                                        Documentation: Maintained comprehensive documentation for code, processes, and
                                        troubleshooting, facilitating knowledge sharing and onboarding.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
