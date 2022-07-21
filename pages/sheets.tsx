import type { NextPage } from "next";
import Head from "next/head";
import BackNav from "../components/shared/BackNav";
import Table from "../components/shared/Table";
import { useLocalStorage } from "../hooks";
import { Cell, FileTypeKey, Sheet } from "../shared/types";
import { generateUUID, sum } from "../shared/utils";
import styles from "../styles/Home.module.css";

const Sheets: NextPage = () => {
  const [sheets] = useLocalStorage<[Sheet]>(FileTypeKey.sheets, []);

  const files = sheets.map(({ name, fileContent }) => ({
    id: generateUUID(), // just because duplicate upload is permitted
    name,
    total: sum(fileContent),
  }));

  const hasFiles = files.length > 0;

  return (
    <div className={styles.container}>
      <Head>
        <title>Sheets</title>
        <meta name="description" content="List of csv files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BackNav />
        <h1 className={styles.title}> Sheets</h1>
        {hasFiles ? <Table data={files}></Table> : <p>No files to display</p>}
      </main>
    </div>
  );
};
export default Sheets;
