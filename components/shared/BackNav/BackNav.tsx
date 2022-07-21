import React from "react";
import { useRouter } from "next/router";
import styles from "./BackNav.module.scss";

const BackNav = () => {
  const router = useRouter();

  return (
      <a
        href="#"
        className={styles.back_arrow}
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        {" "}
        <h2>&larr;</h2>
      </a>
  );
};

export default BackNav;
