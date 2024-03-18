
import React, { useContext } from 'react';
import { useCardContext } from '../card/CardProvider';

const TextInput = () => {
    const { input, setInput } = useCardContext();

    const handleChange = (e) => {
        setInput({ cardTitle: e.target.value });
    };

    return (
        <input
            type="text"
            value={input.cardTitle}
            onChange={handleChange}
        />
    );
};

export default TextInput;
