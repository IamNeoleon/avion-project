import { useState, useRef } from 'react';

export const useFilters = () => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const filtersRef = useRef<HTMLDivElement | null>(null);

    const handleFilterClick = (
        filterName: string,
        event: React.MouseEvent
    ) => {
        event.stopPropagation();

        setActiveFilter(prev =>
            prev === filterName ? null : filterName
        );
    };

    return {
        activeFilter,
        handleFilterClick,
        filtersRef,
    };
};
