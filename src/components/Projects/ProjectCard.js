import React, { Component } from 'react';

import githubIcon from '../../assets/images/SVG/github-icon.svg';

import './ProjectCard.scss';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const bullet_points = this.props.project_details[0].bullets.map((bullet) =>
            <li className="project-bullet-point"> &gt; {bullet}</li>
            );

        return (
            <div className="full-project-container">
                {console.log(this.props.project_details)}
                <div className="full-project-card">
                    <img className="project-background-image" src={this.props.project_details[0].image} alt=""/>
                    <div class="project-overlay">
                    </div>
                    <div className="project-text-overlay">
                        <div className="project-top-text">
                            <div className="project-title-text">{this.props.project_details[0].title}</div>
                            <div className="project-role-text">{this.props.project_details[0].role}</div>
                            <div className="project-location-text">{this.props.project_details[0].location}</div>
                            <div className="project-date-text">{this.props.project_details[0].date}</div>
                        </div>
                        <div className="project-body-text">
                            <div className="project-bullet-point">
                                {this.props.project_details[0].description}
                            </div>
                            <div className="bottom-project-links">
                                <img className="github-icon" src={githubIcon} alt="github" href="this.props.project_details[0].githubLink"></img>
                                <div class="project-links-text">{this.props.project_details[0].githubLink}</div>
                                <div class="project-links-text">{this.props.project_details[0].websiteLink}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;