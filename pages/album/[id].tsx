import Wrapper from "@/components/features/wrapper/wrapper";
import PhotoCard from "@/components/reusable/photoCard/photoCard";
import constants from "config/constants";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PhotosData } from "types";
import { getData } from "utils/getData";
import styles from "./[id].module.css";

const Album = () => {
  const router = useRouter();
  const selectedAlbumId = Number(router.query.id);
  const [photos, setPhotos] = useState<PhotosData[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      console.log(selectedAlbumId);
      const results = await getData<PhotosData>(constants.PHOTOS_API);
      const photos = results.filter((photo) => photo.albumId === 47);
      setPhotos(photos);
    }
    fetchPhotos();
  }, []);
  return (
    <Wrapper>
      <h1>Album Id: {selectedAlbumId}</h1>
      <ul className={styles.grid}>
        {photos?.map((photo) => (
          <PhotoCard imageSrc={photo.thumbnailUrl} imageTitle={photo.title} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Album;
