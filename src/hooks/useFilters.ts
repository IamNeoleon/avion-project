import { useState, useEffect, useRef } from 'react';

export const useFilters = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const filtersRef = useRef<HTMLDivElement | null>(null);

    const handleFilterClick = (filterName: string, event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        setActiveFilter(prevFilter => (prevFilter === filterName ? null : filterName));
    };

    useEffect(() => {
        // const handleClickOutside = (event: MouseEvent) => {
        // //     if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {

        // //         setActiveFilter(null);
        // //     }
        // // };

        // // document.addEventListener('mousedown', handleClickOutside);
        // // return () => {
        // //     document.removeEventListener('mousedown', handleClickOutside);
        // // };
    }, []);

    return { activeFilter, handleFilterClick, filtersRef };
};
