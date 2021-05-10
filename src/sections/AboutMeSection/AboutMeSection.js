import React from 'react';

import aboutMeImage from '../../assets/images/about/personal-image.jpg';

import './AboutMeSection.scss';

const about_me_section = props => {
    return (
        <div className="about-me-section-full">
            <div className="about-me-section-body">
                <h2 className="section-header">
                    about me.
                </h2>
                <div className="about-me-text-and-image">
                    <div className="about-me-description">
                        <p className="about-me-body-text">
                            Hi, nice to meet you! My name is Drew Hatcher. I’m currently a Master's student in Computer Science at Georgia Tech with a specialization in Machine Learning, graduating in December of 2021. My passion in school outside of learning is teaching. I'm coming up on my sixth semester as a teaching assistant, where the first three semesters I taught Discrete Mathematics and the latter three I've served as a graduate TA for Georgia Tech's Database Design course.
                        </p>
                        <p className="about-me-body-text">
                            I’m persuing a career in Data Science with a Bachelor's Degree in Computer Science and a background in Machine Learning. As with Data Science, I also have a passion for Back-End Development work. Outside of my career I have a passion for art, namely photography and graphic design.
                        </p>
                        <p className="about-me-body-text">
                            Keep scrolling to learn more about me!
                        </p>
                    </div>
                    <div className="about-me-image-wide">
                        <img className="about-me-jpg-large" src={aboutMeImage} alt=""/>
                    </div>
                </div>
                <div className="about-me-image-narrow">
                    <img className="about-me-jpg-small" src={aboutMeImage} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default about_me_section;