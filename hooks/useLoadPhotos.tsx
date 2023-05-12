import constants from "config/constants";
import React, { useEffect, useState } from "react";
import { PhotosData } from "types";
import { getDataFromApi } from "utils/getDataFromApi";

const useLoadPhotos = (albumId: number) => {
  const [photos, setPhotos] = useState<PhotosData[]>([]);
  const [state, setState] = useState({ error: false, loading: true });

  useEffect(() => {
    async function fetchPhotos() {
      const results = await getDataFromApi<PhotosData>(constants.PHOTOS_API);
      const photos = results.filter((photo) => photo.albumId === albumId);
      setPhotos(photos);
      setState({ ...state, loading: false });
    }
    fetchPhotos();
  }, []);

  return { photos, state };
};

export default useLoadPhotos;
