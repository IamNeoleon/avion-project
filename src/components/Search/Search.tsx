import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setSearchValue } from '../../redux/slices/filterSlice';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';


const Search: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const isProductsPage = location.pathname === '/products';

    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 500),
        []
    )

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const newValue = e.target.value;
            setValue(newValue);
            updateSearchValue(newValue)
        } else {
            setValue(e.target.value);
            updateSearchValue('')
        }
    }

    const handleClearFilter = () => {
        setValue('');
        dispatch(setSearchValue(''));
        setVisible(false);
    }

    const handleClickBtn = () => {
        if (!isProductsPage) {
            navigate('/products');
        }
        setVisible(prev => !prev);
    }

    useEffect(() => {
        if (!isProductsPage) {
            setVisible(false);
        }
    }, [location.pathname])

    return (
        <>
            <div className="header__search">
                <button onClick={handleClickBtn} className="header__search-btn">
                    <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect width="18" height="18" fill="none" />
                        <path d="M14.5001 13.7929L10.7241 10.0169C11.6314 8.92758 12.0839 7.53038 11.9873 6.11596C11.8908 4.70153 11.2526 3.37879 10.2057 2.42288C9.15867 1.46698 7.78347 0.951515 6.36612 0.983723C4.94877 1.01593 3.5984 1.59333 2.59593 2.59581C1.59345 3.59828 1.01605 4.94865 0.983845 6.366C0.951637 7.78335 1.4671 9.15855 2.423 10.2055C3.37891 11.2525 4.70165 11.8907 6.11608 11.9872C7.5305 12.0838 8.9277 11.6313 10.017 10.7239L13.7931 14.5L14.5001 13.7929ZM2.00012 6.5C2.00012 5.60998 2.26404 4.73995 2.75851 3.99993C3.25297 3.25991 3.95578 2.68313 4.77804 2.34254C5.60031 2.00194 6.50511 1.91283 7.37802 2.08646C8.25094 2.2601 9.05276 2.68868 9.6821 3.31802C10.3114 3.94735 10.74 4.74918 10.9137 5.62209C11.0873 6.495 10.9982 7.3998 10.6576 8.22207C10.317 9.04434 9.7402 9.74714 9.00018 10.2416C8.26016 10.7361 7.39013 11 6.50012 11C5.30705 10.9987 4.16323 10.5241 3.3196 9.68052C2.47597 8.83689 2.00144 7.69306 2.00012 6.5Z" />
                    </svg>
                </button>
                <div className={classNames("header__input", { 'visible': visible })}>
                    <input ref={inputRef} type="text" value={value} onChange={handleChangeValue} />
                    <button onClick={handleClearFilter}>&#x2716;</button>
                </div>
            </div >
        </>
    );
};

export default Search;