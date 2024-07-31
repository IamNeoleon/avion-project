import React from 'react';

import Button from '../Button/Button';

import featuresImg from '../../assets/img/features-img.jpeg'

import './Features.scss';


const Features: React.FC = () => {
    return (
        <>
            <div className="features">
                <div className="container">
                    <div className="features__inner">
                        <div className="features__info">
                            <div className="features__title">
                                From a studio in London to a global brand with
                                over 400 outlets
                            </div>
                            <div className="features__text">
                                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                                <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                            </div>
                            <div className="features__btn">
                                <Button title='Get in touch' color='#2a254b' bgColor='#f9f9f9' />
                            </div>
                        </div>
                        <div className="features__img">
                            <img src={featuresImg} alt="features image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;