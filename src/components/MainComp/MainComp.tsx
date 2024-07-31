import React from 'react';

import Intro from '../Intro/Intro'
import Skills from '../Skills/Skills'
import NewProducts from '../NewProducts/NewProducts'
import SignUp from '../SignUp/SignUp'
import Features from '../Features/Features'

import { CSSTransition } from 'react-transition-group';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock';


const MainComp: React.FC = () => {
    const mainRef = React.useRef<HTMLElement | null>(null);
    const [inProp, setInProp] = React.useState<boolean>(false);

    React.useEffect(() => {
        setInProp(true);
    }, [])

    return (
        <>
            <CSSTransition in={inProp} nodeRef={mainRef} timeout={500} unmountOnExit classNames='main'>
                <main ref={mainRef} className="main">
                    <AnimatedBlock>
                        <Intro />
                    </AnimatedBlock>\
                    <AnimatedBlock>
                        <Skills />
                    </AnimatedBlock>
                    <AnimatedBlock>
                        <NewProducts />
                    </AnimatedBlock>
                    <AnimatedBlock>
                        <SignUp />
                    </AnimatedBlock>
                    <AnimatedBlock>
                        <Features />
                    </AnimatedBlock>
                </main>
            </CSSTransition>
        </>
    );
};

export default MainComp;