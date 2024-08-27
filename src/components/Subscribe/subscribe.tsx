import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <div className={styles.subscribeDiv}>
      <h2>Subscribe here for exclusive offers and updates!</h2>
      <form className={styles.subscribeForm}>
        <input type="text" placeholder="Name" required className={styles.input} />
        <input type="email" placeholder="Email" required className={styles.input} />
        <p>Don"t miss out! Enter your details and hit subscribe to unlock a world of special offers and details.</p>
        <button type="submit" className={styles.subscribeButton}><span>Subscribe</span></button>
      </form>
    </div>
  );
}