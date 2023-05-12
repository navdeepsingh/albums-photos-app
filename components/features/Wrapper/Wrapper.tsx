import React, { ReactNode } from "react";
import styles from "./Wrapper.module.css";
import Link from "next/link";

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <main>
        <h1 className={styles.title}>
          <Link href="/">Albums & Photos App</Link>
        </h1>
        {children}
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
    </>
  );
};

export default Wrapper;
