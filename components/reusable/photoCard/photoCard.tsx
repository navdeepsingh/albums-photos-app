import Image from "next/image";
import React from "react";
import styles from "./photoCard.module.css";

interface PhotoCard {
  imageSrc: string;
  imageTitle: string;
}

const PhotoCard: React.FC<PhotoCard> = ({
  imageSrc,
  imageTitle,
}): React.ReactElement => {
  return (
    <div className={styles.card}>
      <h1>{imageTitle}</h1>
      <img src={imageSrc} alt={imageTitle} width={150} height={150} />
    </div>
  );
};

export default PhotoCard;
