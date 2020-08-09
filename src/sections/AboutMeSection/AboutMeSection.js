import React from 'react';

import './AboutMeSection.scss';

const about_me_section = props => {
    return (
        <div className="about-me-section-full">
            <div className="about-me-section-body">
                <h2 className="section-header">
                    about me.
                </h2>
                <p className="about-me-body-text">
                    Hi, nice to meet you! My name is Drew Hatcher. I’m currently a 4th year Computer Science student at Georgia Tech and will be starting a Master’s in Computer Science in the Spring of 2021. My passion in school outside of learning is teaching. For the past three semester’s I’ve been a teaching assistant for Discrete Mathematics and I plan to TA database design for the next three semesters. 
                </p>
                <p className="about-me-body-text">
                    I’m persuing a career in software development with an interest in back-end work. Outside of my career I have a passion for art, namely photography and graphic design.
                </p>
                <p className="about-me-body-text">
                    Keep scrolling to learn more about me!
                </p>
            </div>
        </div>
    );
}

export default about_me_section;