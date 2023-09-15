'use client'

import { useState } from 'react';

interface CardbauProps {
  defaultTitle?: string;
  defaultDescription?: string;
}

const  Cardbau: React.FC<CardbauProps> = ({ defaultTitle = 'Título', defaultDescription = 'Descrição' }) => {
  const [text, setText] = useState(defaultTitle);
  const [isTitle, setIsTitle] = useState(true);

  const handleCardClick = () => {
    if (isTitle) {
      setText(defaultDescription);
    } else {
      setText(defaultTitle);
    }
    setIsTitle(!isTitle);
  };

  return (
    <div
    className="
    flex flex-col justify-center items-center 
    h-80 w-80 m-auto shadow-lg rounded-lg p-8 
    text-center cursor-pointer transition duration-700 ease-in-out 
    transform hover:-translate-y-1 hover:scale-150 bg-red-800"
        onClick={handleCardClick}
      >
        <p className="text-2xl">{text}</p>
      </div>
  );
};

export default Cardbau;