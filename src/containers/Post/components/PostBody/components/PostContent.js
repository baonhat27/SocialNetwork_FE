import styles from "./styles.module.css";
import { useEffect } from "react";

export default function PostContent({ content }) {
  return (
    <div
      className={styles.content_box}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
