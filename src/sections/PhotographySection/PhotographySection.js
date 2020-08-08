import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

import HorizontalPhotoCard from '../../components/Photographs/HorizontalPhotoCard';
import VerticalPhotoCard from '../../components/Photographs/VerticalPhotoCard';

import gridImages from '../../constants/photo-info/grid-photos-info';


import './PhotographySection.scss';

const photography_section = props => {


    gridImages.map((i) => {
        i.customOverlay = (
            <div>
                <div class="grid-overlay">
                </div>
                <div className="grid-text-overlay">
                    <div className="grid-top-image-text">
                        <div class="grid-title-text">{i.title}</div>
                        <div class="grid-date-text">{i.date}</div>
                    </div>
                    <div className="grid-bottom-image-text">
                        <div class="grid-image-details-text">{i.iso}</div>
                        <div class="grid-image-details-text">{i.zoom}</div>
                        <div class="grid-image-details-text">{i.aperature}</div>
                        <div class="grid-image-details-text">{i.shutter}</div>
                    </div>
                </div>
            </div>
        );
        // console.log(gridImages);
    })

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
                <div className="photo-cards">
                    <div className="photography-subsection-header-top">
                        Horizontal Shots
                    </div>
                    <HorizontalPhotoCard/>
                    <div className="photography-subsection-headers">
                        Vertical Shots
                    </div>
                    <VerticalPhotoCard/>
                </div>
                <div className="photo-grid-container">
                    <Gallery images={gridImages} 
                        enableImageSelection={false}
                        showImageCount={false}
                        margin={3}
                        rowHeight={250}
                        className="photo-grid"
                        backdropClosesModal={true}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default photography_section;