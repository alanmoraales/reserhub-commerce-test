"use client";

import styles from "./page.module.css";
import Client, { Local } from "@repo/commerce-api-client";

const onClickSayHello = async () => {
  const client = new Client(Local);
  const response = await client.hello.get("Alan");
  console.log(response);
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Accounts</h3>
        <button className={styles.secondary} onClick={onClickSayHello}>
          Say Hello
        </button>
      </main>
    </div>
  );
}
