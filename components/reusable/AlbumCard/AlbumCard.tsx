import React from "react";
import { AlbumIdType, AlbumsData } from "types";
import styles from "./albumCard.module.css";
import { useRouter } from "next/router";

interface IAlbumCard {
  albumId: AlbumIdType;
  albumTitle: string;
}

const AlbumCard: React.FC<IAlbumCard> = ({
  albumId,
  albumTitle,
}): React.ReactElement => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`album/${albumId}`);
  };

  return (
    <button key={albumId} className={styles.card} onClick={handleClick}>
      <h3>Album {albumId} &rarr;</h3>
      <p>{albumTitle}</p>
    </button>
  );
};

export default AlbumCard;
