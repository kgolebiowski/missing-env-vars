import Image from "next/image";
import styles from "./page.module.css";
import ServerSubComponent from "./ServerSubComponent";
import ClientSubComponent from "./ClientSubComponent";

export default function Home() {
  // This will be inlined during build time
  const value = process.env.NEXT_PUBLIC_TEST

  // This will be NOT be inlined during build time. Runtime value is used and THAT'S WHAT I NEED!
  const variableName = "NEXT_PUBLIC_TEST"
  const valueAccessedAsMap = process.env[variableName]
  // process.env["NEXT_PUBLIC_TEST"] will get inlined as well

  // Should NOT be inlined during build time as described in https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
  // but gets inlined anyway (maybe due to a bug)
  const envs = process.env
  const valueAccessedThroughProxyVar = envs.NEXT_PUBLIC_TEST

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
        <p>NODE_ENV: {process.env.NODE_ENV}</p>

        <h2>Top Server Component</h2>

        {value ?
          <p>The environment variable value is &quot;{value}&quot;</p>
          :
          <p>The environment variable NEXT_PUBLIC_TEST is undefined</p>
        }

        {valueAccessedAsMap ?
          <p>The environment variable (accessed as map) value is &quot;{valueAccessedAsMap}&quot;</p>
          :
          <p>The environment variable  (accessed as map) NEXT_PUBLIC_TEST is undefined</p>
        }

        {valueAccessedThroughProxyVar ?
          <p>The environment variable (accessed through proxy var) value is &quot;{valueAccessedThroughProxyVar}&quot;</p>
          :
          <p>The environment variable  (accessed through proxy var) NEXT_PUBLIC_TEST is undefined</p>
        }

        <h2>Child Components</h2>

        <ServerSubComponent />
        <ClientSubComponent valueFromServerComponent={valueAccessedAsMap} />
      </main>
    </div>
  );
}
