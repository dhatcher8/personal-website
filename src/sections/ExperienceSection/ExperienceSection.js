import React from 'react';

import ExperienceCard from '../../components/Experience/ExperienceCard';

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
                <ExperienceCard experience_details={memberClicks}/>
                <ExperienceCard experience_details={databasesTA}/>
                <ExperienceCard experience_details={stadiumIOPT}/>
                <ExperienceCard experience_details={discreteTA}/>
            </div>
        </div>
    );
}

export default experience_section;