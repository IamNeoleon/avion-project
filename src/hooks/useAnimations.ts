import { useState, useEffect, useRef } from 'react';

export const useAnimations = () => {
    const [inProp, setInProp] = useState<boolean>(false);
    const [categoryInProp, setCategoryInProp] = useState<boolean>(false);
    const nodeRef = useRef(null);
    const categoryRef = useRef(null);

    useEffect(() => {
        setInProp(true);
        setCategoryInProp(true);
    }, []);

    return { inProp, categoryInProp, nodeRef, categoryRef };
};
