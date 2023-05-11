import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { UserData } from "types";
import { getItemFromLocalStorage } from "utils/getItemFromLocalStorage";
import Albums from "@/components/features/albums/albums";
import useLoadUsers from "hooks/useLoadUsers";

export default function Home() {
  useLoadUsers();
  const users = getItemFromLocalStorage("users");
  const selectedUser = users && (users[0] as UserData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Albums & Photos App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Albums & Photos App</h1>
        <Albums user={selectedUser} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nsblog.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Navdeep Singh
        </a>
      </footer>
    </div>
  );
}
