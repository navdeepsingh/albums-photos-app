import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { UserData } from "types";
import { getItemFromLocalStorage } from "utils/getItemFromLocalStorage";
import Albums from "@/components/features/albums/albums";
import useLoadUsers from "hooks/useLoadUsers";
import Wrapper from "@/components/features/wrapper/wrapper";

export default function Home() {
  const selectedUser = useLoadUsers();

  return (
    <div className={styles.container}>
      <Head>
        <title>Albums & Photos App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Albums user={selectedUser} />
      </Wrapper>
    </div>
  );
}
