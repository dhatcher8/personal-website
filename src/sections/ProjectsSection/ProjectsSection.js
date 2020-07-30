import React from 'react';

import ProjectCard from '../../components/Projects/ProjectCard';
import ProjectCardWide from '../../components/Projects/ProjectCardWide';


import youChooseMuse from '../../constants/projects-info/you-choose-muse-info';

import './ProjectsSection.scss';

const projects_section = props => {
    return (
        <div className="projects-section-full">
            <div className="projects-section-body">
                <h2 className="section-header">
                    projects.
                </h2>
                <div className="project-cards-container">
                    <div className="project-card-instance"><ProjectCard project_details={youChooseMuse}/></div>
                </div>
                <div className="project-cards-wide-container">
                    <div className="project-card-wide-instance"><ProjectCardWide project_details={youChooseMuse}/></div>
                </div>
            </div>
        </div>
    );
}

export default projects_section;
