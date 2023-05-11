import Image from "next/image";
import React from "react";

interface ICard {
  imageSrc: string;
  imageTitle: string;
}

const Card: React.FC<ICard> = ({
  imageSrc,
  imageTitle,
}): React.ReactElement => {
  return (
    <div>
      <h1>{imageTitle}</h1>
      <Image src={imageSrc} alt={imageTitle} />
    </div>
  );
};

export default Card;
