import constants from "config/constants";
import React, { useEffect, useState } from "react";
import { AlbumsData, UserData } from "types";
import { getData } from "utils/getData";
import styles from "./albums.module.css";

type AlbumsType = {
  user: UserData;
};

const Albums: React.FC<AlbumsType> = ({ user = {} }) => {
  const [albums, setAlbums] = useState<AlbumsData[]>([]);

  useEffect(() => {
    if (!user) return;

    async function fetchAlbums() {
      const albums = await getData<AlbumsData>(constants.ALBUMS_API);
      const userAlbums = albums.filter((album) => album.userId === user.id);
      setAlbums(userAlbums);
    }
    fetchAlbums();
  }, [user]);

  return (
    <div className={styles.grid}>
      {albums.length
        ? albums.map((album) => (
            <a
              key={album.id}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h3>Album {album.id} &rarr;</h3>
              <p>{album.title}</p>
            </a>
          ))
        : "Albums not rendered yet, wait for it..."}
    </div>
  );
};

export default Albums;
