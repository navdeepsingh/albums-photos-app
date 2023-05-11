declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

export type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type AlbumIdType = number;

export type AlbumsData = {
  userId: number;
  id: AlbumIdType;
  title: string;
};

export type PhotosData = {
  albumId: AlbumIdType;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
