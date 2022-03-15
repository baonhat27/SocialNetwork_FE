import styles from "./styles.module.css";

export default function PostContent({ content }) {
  return (
    <div
      className={styles.content_box}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
