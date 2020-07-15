import React from 'react';

import HorizontalPhotoCard from '../../components/Photographs/HorizontalPhotoCard';
import './PhotographySection.scss';
import VerticalPhotoCard from '../../components/Photographs/VerticalPhotoCard';

const photography_section = props => {
    return (
        <div className="photography-section-full">
            <div className="photography-section-body">
                <h2 className="photography-section-header">
                    photography.
                </h2>
                <div className="photography-subsection-body-text">
                    Photography is my outlet to temporarily free my mind whenever I need a break from stress or wish to express myself creatively. It allows me to create whatever makes me happy with those that make me happy and potentially bring happiness to others.   
                </div>
                <div className="photography-subsection-body-text">
                    That being said, I hope you enjoy the moments I've had the pleasure of capturing.
                </div>
                <div className="photography-subsection-header-top">
                    Horizontal Shots
                </div>
                <HorizontalPhotoCard/>
                <div className="photography-subsection-headers">
                    Vertical Shots
                </div>
                <VerticalPhotoCard/>
            </div>
        </div>
    );
}

export default photography_section;