
import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('#f5f5f5');
  const [selectedImage, setSelectedImage] = useState(null);
  const [input, setInput] = useState({ cardTitle: '' });

  return (
    <CardContext.Provider value={{ selectedColor, setSelectedColor, selectedImage, setSelectedImage, input, setInput ,color, imageSrc, imageAlt, title,src, alt, onClick}}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
