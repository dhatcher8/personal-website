import React, { Component } from 'react';

import githubWhite from '../../assets/images/SVG/github-white.svg';
import webLinkIcon from '../../assets/images/SVG/weblink-icon.svg';

import './ProjectCard.scss';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    renderLinks()  {
        var gitLink = null;
        var webLink = null;
        if (this.props.project_details[0].githubLink !== "none") {
            gitLink = this.props.project_details[0].githubLink;
        }
        if (this.props.project_details[0].websiteLink !== "none") {
            webLink = this.props.project_details[0].websiteLink;
        }
        if (gitLink == null && webLink == null) {
            return (
                <div className="bottom-project-links">
                </div>
            );
        } else if (gitLink == null) {
            return (
                <div className="bottom-project-links">
                    <a href={this.props.project_details[0].websiteLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={webLinkIcon} alt="website"></img></a>                    
                </div>
            );
        } else if (webLink == null) {
            return (
                <div className="bottom-project-links">
                    <a href={this.props.project_details[0].githubLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={githubWhite} alt="github"></img></a>
                </div>
            );
        } else {
            return (
                <div className="bottom-project-links">
                    <a href={this.props.project_details[0].githubLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={githubWhite} alt="github"></img></a>
                    <a href={this.props.project_details[0].websiteLink} target="_blank" rel="noopener noreferrer"><img className="project-links-text" src={webLinkIcon} alt="website"></img></a>                    
                </div>
            );
        }

    }

    render() {

        const project_tags = this.props.project_details[0].tags.map((tag) =>
            <li className="project-tags">{tag}</li>
            );
        

        return (
            <div className="full-project-container">
                {console.log(this.props.project_details)}
                <div className="full-project-card" 
                    style={{
                        backgroundColor: this.props.project_details[0].backgroundColor
                    }}>
                    
                    <img className="project-background-image" src={this.props.project_details[0].image} alt=""/>
                    <div class="project-overlay">
                    </div>
                    <div className="project-text-overlay">
                        <div className="project-top-text">
                            <div className="project-title-text">{this.props.project_details[0].title}</div>
                            {/* <div className="project-role-text">{this.props.project_details[0].role}</div>
                            <div className="project-location-text">{this.props.project_details[0].location}</div> */}
                            <div className="project-date-text">{this.props.project_details[0].date}</div>
                        </div>
                        <div className="project-body-text">
                            <div className="project-description">
                                {this.props.project_details[0].description}
                            </div>
                            <div className="project-tags-holder">
                                {project_tags}  
                            </div>
                            
                            
                        </div>
                        {this.renderLinks()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;