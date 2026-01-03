import React from 'react';

import ExperienceCard from '../../components/Experience/ExperienceCard';

import caterpillar from '../../constants/experience-info/caterpillar-info';
import actively from '../../constants/experience-info/actively-info';
import mcKesson from '../../constants/experience-info/mckesson-info';
import memberClicks from '../../constants/experience-info/memberclicks-info';
import databasesTA from '../../constants/experience-info/databases-ta-info';
import stadiumIOPT from '../../constants/experience-info/stadium-iopt-info';
import discreteTA from '../../constants/experience-info/discrete-ta-info';


import './ExperienceSection.scss';

const experience_section = props => {
    return (
        <div className="experience-section-full">
            <div className="experience-section-body">
                <h2 className="section-header">
                    experience.
                </h2>
                <div className="experience-cards-container">
                    <div className="exp-card-instance"><ExperienceCard experience_details={caterpillar}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={actively}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={mcKesson}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={memberClicks}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={databasesTA}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={stadiumIOPT}/></div>
                    <div className="exp-card-instance"><ExperienceCard experience_details={discreteTA}/></div>
                </div>
            </div>
        </div>
    );
}

export default experience_section;