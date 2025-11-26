import React, { useEffect, useState } from 'react';
import { designersData } from '../../assets/data';
import FilterCheckbox from './FilterCheckbox';
import { useAppDispatch } from '../../hooks/redux';
import { setDesigners } from '../../redux/slices/filterSlice';

const FilterContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const [designersState, setDesignersState] = useState<string[]>([]);
    const handleDesignersChange = (newDesigners: string[]) => {
        setDesignersState(newDesigners)
    };

    useEffect(() => {
        dispatch(setDesigners(designersState))
    }, [designersState])

    return (
        <>
            {designersData.map((designer, index) => (
                <FilterCheckbox key={`${designer}-${index}`} name="designer" value={designer} designers={designersState} setDesigners={handleDesignersChange} />
            ))}
        </>
    );
};

export default FilterContainer;