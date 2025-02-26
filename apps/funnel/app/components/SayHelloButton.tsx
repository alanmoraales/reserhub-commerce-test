"use client";

import styles from "../page.module.css";
import sayHello from "../server/actions/sayHello";

function SayHelloButton() {
  return (
    <button className={styles.secondary} onClick={sayHello}>
      Say Hello
    </button>
  );
}

export default SayHelloButton;
