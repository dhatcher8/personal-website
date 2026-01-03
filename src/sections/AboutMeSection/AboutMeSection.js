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
                            Hi, nice to meet you! My name is Drew Hatcher. I’m a software engineer with 4+ years of experience in the industry, currently working in the spaces of data engineering, cloud architecture, and development. I’m drawn to these roles as they present complex problems that allow for high amounts of creativity and the ability to continuously learn in search of solutions. I attended Georgia Tech from 2017 &ndash; 2021 where I earned my Bachelor’s and Master’s degrees in Computer Science, while fostering my passion for teaching.
                        </p>
                        <p className="about-me-body-text">
                            Outside of my career I have a passion for the visual arts, namely photography and graphic design. I love to experience new things and capture those moments in photographs as I do. I enjoy being around and working alongside people from different walks of life, and I’m always excited to learn something new.
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