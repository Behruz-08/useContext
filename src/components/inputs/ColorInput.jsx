
import React, { useContext } from 'react';
import { useCardContext } from '../card/CardProvider';

const ColorInput = () => {
    const { selectedColor, setSelectedColor } = useCardContext();

    const handleChange = (e) => {
        setSelectedColor(e.target.value);
    };

    return (
        <input
            type="color"
            value={selectedColor}
            onChange={handleChange}
        />
    );
};

export default ColorInput;
