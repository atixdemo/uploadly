import type { NextPage } from "next";
import Head from "next/head";
import Image  from "next/image";
import BackNav from "../components/shared/BackNav";
import Grid from "../components/shared/Grid";
import { useLocalStorage } from "../hooks";
import { FileTypeKey, Image as ImageType } from "../shared/types";
import { generateUUID } from "../shared/utils";
import styles from "../styles/Home.module.css";

const Images: NextPage = () => {
  const [images] = useLocalStorage<[ImageType]>(FileTypeKey.images,[]);

	const files = images.map(({name}) => ({
    id: generateUUID(),// just because duplicate upload is permitted
    // I don't store images in localstore. It's limited space and blocks the browser.
    // I provide a simple image for this demo
    image: <Image src="/music.jpeg" alt="image" width={400} height={300} />,
  }));

  const hasFiles = files.length > 0;

  return (
    <div className={styles.container}>
      <Head>
        <title>Images</title>
        <meta name="description" content="List of images uploaded" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BackNav />
        <h1 className={styles.title}> Images</h1>
        {hasFiles ? <Grid data={files}></Grid> : <p>No images to display</p>}
      </main>
    </div>
  );
};
export default Images;
