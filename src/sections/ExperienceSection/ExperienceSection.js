import React from 'react';

import ExperienceCard from '../../components/Experience/ExperienceCard';

import memberClicks from '../../constants/experience-info/memberclicks-info';
import discreteTA from '../../constants/experience-info/discrete-ta-info';
import stadiumIOPT from '../../constants/experience-info/stadium-iopt-info';

import './ExperienceSection.scss';

const experience_section = props => {
    return (
        <div className="experience-section-full">
            <div className="experience-section-body">
                <h2 className="section-header">
                    experience.
                </h2>
                <ExperienceCard experience_details={memberClicks}/>
                <ExperienceCard experience_details={discreteTA}/>
                <ExperienceCard experience_details={stadiumIOPT}/>
            </div>
        </div>
    );
}

export default experience_section;