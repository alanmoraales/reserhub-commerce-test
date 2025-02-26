import styles from "./page.module.css";
import SayHelloButton from "./components/SayHelloButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Funnel</h3>
        <SayHelloButton />
      </main>
    </div>
  );
}
