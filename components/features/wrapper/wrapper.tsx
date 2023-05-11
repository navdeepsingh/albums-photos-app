import React, { ReactNode } from "react";
import styles from "./wrapper.module.css";

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <main>
        <h1 className={styles.title}>Albums & Photos App</h1>
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
