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