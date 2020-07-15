import React from 'react';

import HorizontalPhotoCard from '../../components/Photographs/HorizontalPhotoCard';
import './PhotographySection.scss';

const photography_section = props => {
    return (
        <div className="photography-section-full">
            <div className="photography-section-body">
                <h2 className="photography-section-header">
                    photography.
                </h2>
                <HorizontalPhotoCard/>
            </div>
        </div>
    );
}

export default photography_section;