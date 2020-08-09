import React, { Component } from 'react';
import ImageFadIn from 'react-image-fade-in';

import rightSlider from '../../assets/images/SVG/right-slider.svg';
import leftSlider from '../../assets/images/SVG/left-slider.svg';

import horizArray from '../../constants/photo-info/horiz-photos-info';
import './HorizontalPhotoCard.scss';

class HorizontalPhotoCard extends Component {
    state = {
        image_index: 0,
        photo_details_displaying: false,
        image_loaded: false,
	}
	
	rightArrowClick = () => {
		let new_index = this.state.image_index + 1;
        if (new_index >= horizArray.length) {
            new_index -= horizArray.length;
        }
		this.setState({ image_index: new_index });
    };

    leftArrowClick = () => {
        let new_index = this.state.image_index - 1;
        if (new_index < 0) {
            new_index += horizArray.length;
        }
        this.setState({ image_index: new_index },
            this.render);
    };

    imageClicked = () => {
        this.setState((prevState) => {
			return {photo_details_displaying: !prevState.photo_details_displaying};
		});
    }
    

    
    render() {

        let currImage = horizArray[this.state.image_index];

        let horizCardClasses = 'horizontal-photo';
        if (this.state.photo_details_displaying) {
            horizCardClasses = 'horizontal-photo-details'
        }

        return (
            <div className="full-horiz-card">
                <img className="slider-icon" src={leftSlider} alt="" onClick={() => this.leftArrowClick()}></img>
                <div className="image-container">
                    <ImageFadIn className={horizCardClasses} src={currImage.image} opacityTransition={2}  alt=""/>
                    <div class="overlay">
                    </div>
                    <div className="text-overlay">
                        <div className="top-image-text">
                            <div class="title-text">{currImage.title}</div>
                            <div class="date-text">{currImage.date}</div>
                        </div>
                        <div className="bottom-image-text">
                            <div class="image-details-text">{currImage.iso}</div>
                            <div class="image-details-text">{currImage.zoom}</div>
                            <div class="image-details-text">{currImage.aperature}</div>
                            <div class="image-details-text">{currImage.shutter}</div>
                        </div>
                    </div>
                </div>
                <img className="slider-icon" src={rightSlider} alt="" onClick={() => this.rightArrowClick()}></img>
            </div>
        );
    }
}

export default HorizontalPhotoCard;