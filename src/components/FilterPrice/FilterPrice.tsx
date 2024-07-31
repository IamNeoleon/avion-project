import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setPrice } from '../../redux/slices/filterSlice';


interface IFilterPriceProps {
    name: string,
}

type TRange = {
    from: number,
    to: number
}

const FilterPrice: React.FC<IFilterPriceProps> = ({ name }) => {
    const dispatch = useAppDispatch();

    const [range, setRange] = useState<TRange>({
        from: 0,
        to: 0
    })

    useEffect(() => {
        setRange({
            from: range.from ? range.from : 0,
            to: range.to ? range.to : 0,
        })
    }, [name, dispatch])

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRange((prevRange) => ({
            ...prevRange,
            [name]: parseInt(value)
        }))
    }

    const handleApplyFilter = () => {
        dispatch(setPrice([range.from, range.to]))
    }

    const handleResetFilter = () => {
        dispatch(setPrice([0, 0]))
        setRange({ from: 0, to: 0 })
    }

    return (
        <>
            <div className='filter-price'>
                <div className="filter-price__inputs">
                    <div className='filter-price__input'>
                        <label htmlFor="from">From:</label>
                        <input
                            type="number"
                            id='from'
                            name='from'
                            value={range.from}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div className='filter-price__input'>
                        <label htmlFor="to">To:</label>
                        <input
                            type="number"
                            id='to'
                            name='to'
                            value={range.to}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                </div>
                <div className="filter-price__btns">
                    <button onClick={handleApplyFilter}>Apply</button>
                    <button onClick={handleResetFilter}>Reset filters</button>
                </div>
            </div>
        </>
    );
};

export default FilterPrice;