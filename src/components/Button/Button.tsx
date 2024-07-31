import React from 'react';

interface IButtonProps {
    title: string,
    color: string,
    bgColor: string
}

const Button: React.FC<IButtonProps> = ({ title, color, bgColor }) => {
    return (
        <>
            <button className="btn" style={{ color: color, backgroundColor: bgColor }}>
                {title}
            </button>
        </>
    );
};

export default Button;