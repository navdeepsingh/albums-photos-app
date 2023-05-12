import React from "react";
import Wrapper from "@/components/features/Wrapper/Wrapper";
import PhotoCard from "@/components/reusable/PhotoCard/PhotoCard";
import { useRouter } from "next/router";

import styles from "./[id].module.css";
import useLoadPhotos from "hooks/useLoadPhotos";

const Album = () => {
  const { query } = useRouter();
  const selectedAlbumId = Number(query.id);
  const { photos, state } = useLoadPhotos(selectedAlbumId);

  return (
    <Wrapper>
      <h1>Album Id: {selectedAlbumId}</h1>
      {state.loading ? (
        "Loading Photos..."
      ) : (
        <ul className={styles.grid}>
          {photos?.map((photo) => (
            <PhotoCard
              key={photo.id}
              imageThumbSrc={photo.thumbnailUrl}
              imageSrc={photo.url}
              imageTitle={photo.title}
            />
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default Album;
