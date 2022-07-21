import React from 'react';
import { toast, ToastContainer as RTToastContainer } from 'react-toastify';

const CLOSE_AFTER_MILLISECONDS = 3000;

import styles from './Toast.module.scss';

export const toasterError = (message: string) =>
  toast.error(message, {
    icon: (
      <svg
        className={styles.root}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 34 31"
      >
        <path d="M33.4 24.6L20.5 2.1a4 4 0 00-7 0L.4 24.6c-.7 1.4-.7 3 .1 4.3A4.3 4.3 0 004.3 31h25.4c1.5 0 3-.8 3.7-2.1.8-1.3.8-3 0-4.3zm-3 2.6c-.1.2-.4.4-.7.4H4.3a.8.8 0 01-.8-.4.8.8 0 010-.9l13-22.5a.7.7 0 011.1 0l13 22.5-.1.9z" />
        <path d="M17 10.3c-1 0-1.7.8-1.7 1.8V19c0 .9.7 1.7 1.7 1.7s1.7-.8 1.7-1.7v-7c0-.9-.8-1.7-1.7-1.7zM16.3 22.5l-.5.4c-.7.7-.7 1.8 0 2.5.6.6 1.7.6 2.4 0 .7-.7.7-1.8 0-2.5-.5-.5-1.2-.6-1.9-.4z" />
      </svg>
    ),
  });

export const toasterSuccess = (message: string) =>
  toast.success(message, {
    icon: (
      <svg
        className={styles.root}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 34 34"
      >
        <path d="M17 0a17 17 0 100 34 17 17 0 000-34zm0 3A13.9 13.9 0 1117 31 13.9 13.9 0 0117 3zm7.7 7.8c-.4 0-.8.2-1 .5l-8.2 8.1-3.6-3.5a1.5 1.5 0 10-2.2 2.2l4.7 4.6c.6.6 1.5.6 2.2 0l9.2-9.2a1.5 1.5 0 00-1.1-2.7z" />
      </svg>
    ),
  });

export function ToastContainer() {
  return (
    <RTToastContainer
      position="top-center"
      autoClose={CLOSE_AFTER_MILLISECONDS}
      closeButton={false}
      hideProgressBar
      theme="colored"
    />
  );
}
