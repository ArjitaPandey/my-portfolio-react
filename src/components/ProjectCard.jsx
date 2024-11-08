import React from 'react'
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {

    const handleClick = (Url) => {
        console.log(Url, "url ----------- ");
        if (Url == '/static/media/BlogProject.acf0bc9f3a54b43e2361.png') {
            window.open("https://github.com/ArjitaPandey/Post-react-project", "_blank");
        } else {
            window.open("https://github.com/ArjitaPandey/Food-website", "_blank");
        }
    }

    return (
        <Col sm={6} md={6}>
            <div className='proj-imgbx' onClick={() => handleClick(imgUrl)} >
                <img src={imgUrl} />
                <div className='proj-txtx'>
                    <h4>
                        {title}
                    </h4>
                    <span>
                        {description}
                    </span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard
