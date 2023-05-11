import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { useEffect } from "react";
import { UserData } from "types";
import { getData } from "utils/getData";
import { getFromLocalStorage } from "utils/getFromLocalStorage";

const UsersAPI = "https://jsonplaceholder.typicode.com/users";

export default function Home() {
  // Run effect on page load only
  useEffect(() => {
    if (localStorage.getItem("users")) {
      return;
    }
    async function fetchApi() {
      const users = await getData<UserData>(UsersAPI);
      localStorage.setItem("users", JSON.stringify(users));
    }
    fetchApi();
  }, []);

  const users = getFromLocalStorage("users");
  const selectedUser = users[0];
  console.log(selectedUser);

  return (
    <div className={styles.container}>
      <Head>
        <title>Albums & Photos App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Albums & Photos App</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
