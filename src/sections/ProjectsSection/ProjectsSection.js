import React from 'react';

import ProjectCard from '../../components/Projects/ProjectCard';
import ProjectCardWide from '../../components/Projects/ProjectCardWide';

import ArtistVisualization from '../../constants/projects-info/artist-similarity-info';
import AsianHateClassifier from '../../constants/projects-info/asian-hate-classifier-info';
import youChooseMuse from '../../constants/projects-info/you-choose-muse-info';
import personalWebsite from '../../constants/projects-info/personal-website-info';
import movieClassificationInfo from '../../constants/projects-info/movie-classification-info';
import theaterTrackerInfo from '../../constants/projects-info/theater-tracker-info';

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
                    <div className="project-card-instance"><ProjectCard project_details={personalWebsite}/></div>
                    <div className="project-card-instance"><ProjectCard project_details={ArtistVisualization}/></div>
                    <div className="project-card-instance"><ProjectCard project_details={AsianHateClassifier}/></div>
                    <div className="project-card-instance"><ProjectCard project_details={movieClassificationInfo}/></div>
                    <div className="project-card-instance"><ProjectCard project_details={theaterTrackerInfo}/></div>
                </div>
            </div>
        </div>
    );
}

export default projects_section;
