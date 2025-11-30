import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Intro from '../components/Intro/Intro'
import Skills from '../components/Skills/Skills'
import NewProducts from '../components/NewProducts/NewProducts'
import SignUp from '../components/SignUp/SignUp'
import Features from '../components/Features/Features';
import AnimatedBlock from '../components/AnimatedBlock/AnimatedBlock';


const Home: React.FC = () => {
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

export default Home;