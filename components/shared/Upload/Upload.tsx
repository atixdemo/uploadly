import React, { ChangeEvent, useRef, useState } from "react";

import { useLocalStorage } from "../../../hooks";
export const EXTENSIONS_ALLOWED = ["csv", "png"];
import styles from "./Upload.module.scss";
import { Sheet, Image, FileTypeKey } from "../../../shared/types";
import { isCSVFile, parseCSV, validateCSV } from "../../../shared/utils";
import { toasterSuccess } from "../Toast";

const Upload = () => {
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const [images, setImages] = useLocalStorage<[Image]>(FileTypeKey.images, []); // find the typescript fix
  const [sheets, setSheets] = useLocalStorage<[Sheet]>(FileTypeKey.sheets, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(null);
    setError("");

    if (event.target.files?.length) {
      const inputFile = event.target.files[0];

      const fileExtension = inputFile?.type.split("/")[1];
      if (!EXTENSIONS_ALLOWED.includes(fileExtension)) {
        setError("Allowed formats are only csv and png.");
        return;
      }

      setFile(inputFile);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async ({ target }) => {
      isCSVFile(file.type) ? handleCSV(target?.result) : handleImage();
    };
    reader.readAsText(file as unknown as Blob);
  };

  function handleCSV(csv: string | ArrayBuffer | null | undefined) {
    const parsedData = parseCSV(csv);
    const { valid, message } = validateCSV(parsedData);
    if (!valid) {
      setError(message || "CSV file invalid.");
      return;
    }

    sheets.push({
      name: file?.name ?? "default name.csv",
      fileContent: parsedData,
    });
    setSheets(sheets);
    resetInputFile();
    toasterSuccess("CSV file Uploaded.");
  }

  function handleImage() {
    // I don't think storing images in localstore is a good way. It's limited space and blocks the browser.
    // I'll put just the file name
    images.push({
      name: file?.name ?? "default name.png",
    });
    setImages(images);
    resetInputFile();
    toasterSuccess("Png image Uploaded.");
  }

  function resetInputFile() {
    setFile(null);
    if (inputEl.current) {
      inputEl.current.value = "";
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          ref={inputEl}
          className={styles.input}
          onChange={handleFileChange}
          name="file"
          type="File"
          id="file"
        />
        <button disabled={!file} className={styles.button} onClick={handleUpload}>
          Upload
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Upload;
