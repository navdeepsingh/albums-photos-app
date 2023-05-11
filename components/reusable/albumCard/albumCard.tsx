import React from "react";
import { AlbumIdType, AlbumsData } from "types";
import styles from "./albumCard.module.css";
import Link from "next/link";

interface IAlbumCard {
  albumId: AlbumIdType;
  albumTitle: string;
}

const AlbumCard: React.FC<IAlbumCard> = ({
  albumId,
  albumTitle,
}): React.ReactElement => {
  return (
    <Link key={albumId} href={`/album/${albumId}`} className={styles.card}>
      <h3>Album {albumId} &rarr;</h3>
      <p>{albumTitle}</p>
    </Link>
  );
};

export default AlbumCard;
