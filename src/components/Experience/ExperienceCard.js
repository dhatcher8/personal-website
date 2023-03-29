import React, { Component } from 'react';

import './ExperienceCard.scss';

class ExperienceCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const bullet_points = this.props.experience_details[0].bullets.map((bullet) =>
            <li className="exp-bullet-point"> &gt; {bullet}</li>
            );

        return (
            <div className="full-exp-container">
                <div className="full-exp-card">
                    <img className="exp-background-image" src={this.props.experience_details[0].image} alt=""/>
                    <div class="exp-overlay">
                    </div>
                    <div className="exp-text-overlay">
                        <div className="exp-top-text">
                            <div className="exp-title-text">{this.props.experience_details[0].title}</div>
                            <div className="exp-role-text">{this.props.experience_details[0].role}</div>
                            <div className="exp-location-text">{this.props.experience_details[0].location}</div>
                            <div className="exp-date-text">{this.props.experience_details[0].date}</div>
                        </div>
                        <div className="exp-body-text">
                            {bullet_points}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceCard;