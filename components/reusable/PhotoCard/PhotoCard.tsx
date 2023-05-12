import Image from "next/image";
import React, { useState } from "react";
import styles from "./photoCard.module.css";
import Modal from "../Modal/Modal";

interface PhotoCard {
  imageThumbSrc: string;
  imageSrc: string;
  imageTitle: string;
}

const PhotoCard: React.FC<PhotoCard> = ({
  imageThumbSrc,
  imageSrc,
  imageTitle,
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.card} onClick={handleClick}>
        <h1>{imageTitle}</h1>
        <img src={imageThumbSrc} alt={imageTitle} width={150} height={150} />
      </button>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <img alt={imageTitle} src={imageSrc} width={600} height={600} />
        </Modal>
      )}
    </>
  );
};

export default PhotoCard;
