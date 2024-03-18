

import React,{useState} from 'react'
import style from './Card.module.css'
import Configurators from '../configurator/Configurators';
import CardComponent from './CardComponent';
import TextInput from '../inputs/TextInput';
import ColorInput from '../inputs/ColorInput';
import Immages from '../Immages';
import { useCardContext } from '../card/CardProvider';

const Cards = () => {
  const { selectedColor, setSelectedColor, selectedImage, setSelectedImage, input, setInput } = useCardContext();

  const handleColorChange = (e) => {
    const colorValue = e.target.value;
    if (colorValue.length === 7 && colorValue.startsWith("#")) {
      setSelectedColor(colorValue);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={style.wrapper}>
      <div>
        {/* <ColorInput value={selectedColor} onChange={handleColorChange} />
        <TextInput value={input.cardTitle} onChange={(e) => setInput({ cardTitle: e.target.value })} /> */}
        <ColorInput />
          <TextInput />
      </div>
      <div className={style.container}>
        <div className={style.img}>
          {Immages.map((image, index) => (
            <Configurators
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
        <CardComponent
          color={selectedColor}
          imageSrc={selectedImage ? selectedImage.src : ''}
          imageAlt={selectedImage ? selectedImage.alt : ''}
          title={input.cardTitle}
        />
      </div>
    </div>
  );
};

export default Cards;
