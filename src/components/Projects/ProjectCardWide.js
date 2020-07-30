import React, { Component } from 'react';

import githubWhite from '../../assets/images/SVG/github-white.svg';
import webLinkIcon from '../../assets/images/SVG/weblink-icon.svg';

import './ProjectCardWide.scss';

class ProjectCardWide extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const project_tags = this.props.project_details[0].tags.map((tag) =>
            <li className="project-tags-wide">{tag}</li>
            );

        return (
            <div className="full-project-container-wide">
                <div className="project-card-details-wide">
                    <div className="project-text-wide">
                        <div className="project-top-text-wide">
                            <div className="project-title-text-wide">{this.props.project_details[0].title}</div>
                            <div className="project-date-text-wide">{this.props.project_details[0].date}</div>
                        </div>
                        <div className="project-body-text-wide">
                            <div className="project-description-wide">
                                {this.props.project_details[0].description}
                            </div>
                            {project_tags}
                            <div className="bottom-project-links-wide">
                                <a href={this.props.project_details[0].githubLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={githubWhite} alt="github"></img></a>
                                <a href={this.props.project_details[0].websiteLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={webLinkIcon} alt="website"></img></a>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCardWide;