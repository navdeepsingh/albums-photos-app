import constants from "config/constants";
import React, { useEffect, useState } from "react";
import { AlbumsData, UserData } from "types";
import { getData } from "utils/getData";
import styles from "./albums.module.css";
import AlbumCard from "@/components/reusable/albumCard/albumCard";

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
        ? albums.map((album: AlbumsData) => (
            <AlbumCard albumId={album.id} albumTitle={album.title} />
          ))
        : "Albums not rendered yet, wait for it..."}
    </div>
  );
};

export default Albums;
