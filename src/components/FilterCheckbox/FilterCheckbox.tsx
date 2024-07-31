import React, { ChangeEvent, useEffect, useState } from "react";

interface FilterCheckboxProps {
    name: string;
    value: string;
    designers: string[];
    setDesigners: (designers: string[]) => void;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ name, value, designers, setDesigners }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    };

    useEffect(() => {
        if (isChecked) {
            setDesigners([...designers, value])
        } else {
            setDesigners(designers.filter((designer) => designer !== value));
        }
    }, [isChecked])

    return (
        <div className="filter-designer">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span>{value}</span>
        </div>
    );
};

export default FilterCheckbox;
