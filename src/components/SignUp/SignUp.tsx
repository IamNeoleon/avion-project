import React from 'react';

import './SignUp.scss';

const SignUp: React.FC = () => {
    return (
        <>
            <div className="signup">
                <div className="container">
                    <div className="signup__inner">
                        <div className="signup__title">Join the club and get the benefits</div>
                        <div className="signup__text">
                            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                        </div>
                        <form action="/" className="signup__form">
                            <div className="signup__input">
                                <input type="email" placeholder='your@email.com' />
                            </div>
                            <button className="signup__btn" type='submit'>Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;