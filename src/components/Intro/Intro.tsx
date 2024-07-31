import React from 'react';

import Button from '../Button/Button';
import introImg from '../../assets/img/intro-img.jpg'
import { Link } from 'react-router-dom';

import './Intro.scss';

const Intro: React.FC = () => {
    return (
        <>
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="intro__info">
                            <div className="intro__title">The furniture brand for the future, with timeless designs</div>
                            <div className="intro__btn">
                                <Link to='/products'>
                                    <Button title='View collection' color='#fff' bgColor='#494465' />
                                </Link>
                            </div>
                            <div className="intro__text">
                                A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                with nice fonts, tasteful colors and a beautiful way to display things digitally
                                using modern web technologies.
                            </div>
                        </div>
                        <div className="intro__img">
                            <img src={introImg} alt="intro img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;