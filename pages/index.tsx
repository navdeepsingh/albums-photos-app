import Head from "next/head";
import styles from "@/pages/index.module.css";
import useLoadUsers from "../hooks/useLoadUsers";
import AlbumsList from "@/components/features/AlbumsList/AlbumsList";
import Wrapper from "@/components/features/Wrapper/Wrapper";

export default function Home() {
  const selectedUser = useLoadUsers();

  return (
    <div className={styles.container}>
      <Head>
        <title>Albums & Photos App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AlbumsList user={selectedUser} />
      </Wrapper>
    </div>
  );
}
