import React, { useEffect, useState } from "react";
import { AlbumsData, UserData } from "types";
import { getDataFromApi } from "../../../utils/getDataFromApi";
import styles from "./AlbumsList.module.css";
import constants from "../../../config/constants";
import AlbumCard from "@/components/reusable/AlbumCard/AlbumCard";

type AlbumsType = {
  user: UserData;
};

const AlbumsList: React.FC<AlbumsType> = ({ user }) => {
  const [albums, setAlbums] = useState<AlbumsData[]>([]);

  useEffect(() => {
    if (user === undefined) return;

    async function fetchAlbums() {
      const albums = await getDataFromApi<AlbumsData>(constants.ALBUMS_API);
      const userAlbums = albums?.filter((album) => album.userId === user.id);
      setAlbums(userAlbums);
    }
    fetchAlbums();
  }, [user]);

  return (
    <div className={styles.grid}>
      {albums.length
        ? albums.map((album: AlbumsData) => (
            <AlbumCard
              key={album.id}
              albumId={album.id}
              albumTitle={album.title}
            />
          ))
        : "Albums not rendered yet, wait for it..."}
    </div>
  );
};

export default AlbumsList;
