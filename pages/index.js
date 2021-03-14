import { useState } from "react";
import cx from "classnames";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TagSelector from "../components/TagSelector";

export default function Home() {
  const [showTags, setShowTags] = useState(false);

  return (
    <main className={styles.main}>
      <Head>
        <title>The Compeed Scale</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rubik"
        ></link>
      </Head>

      <h1 className={styles.title} onClick={() => setShowTags(true)}>
        <span className={styles.fixed}>6</span>
        <span className={cx(styles.outof, styles.fixed)}>out of</span>
        <span className={styles.flicker}>5</span>
      </h1>

      <TagSelector open={showTags} />
    </main>
  );
}
