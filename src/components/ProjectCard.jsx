import React from 'react'
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {

    const handleClick = (Url) => {
        if (Url == '/static/media/BlogProject.acf0bc9f3a54b43e2361.png') {
            window.open("https://post-react-project.netlify.app", "_blank");
        } else {
            window.open("https://foodwebsite-app.netlify.app/", "_blank");
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
