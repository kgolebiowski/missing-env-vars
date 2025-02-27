import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {process.env.TEST ?
        <p>The environment variable value is &quot;{process.env.TEST}&quot;</p>
        :
        <p>The environment variable TEST is undefined</p>
        }
      </main>
    </div>
  );
}
