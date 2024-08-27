import Image from 'next/image';
import styles from './download.module.css';
import Link from 'next/link';

const Download = () => (
  <div className={styles.downloadDiv}>
    <Image src="/images/phone.png" alt="Phone Image" width={300} height={600} />
    <form id={styles.downloadForm}>
      <p>Enter your number and receive <br />a direct link to download the app</p>
      <input type="tel" placeholder="  Enter Phone Number" required />
      <br />
      <button type="submit" className={styles.getLink}>Get the link</button>
      <div className={styles.getInOn}>
        <p>Get in on</p>
        <Link href={"#"}>
          <Image src="/images/appStore.svg" alt="Apple Store" width={120} height={50} />
          </Link>
        <Link href={"#"}>
          <Image src="/images/gplay.svg" className={styles.btn} alt="Google Play"  width={120} height={50} />
          </Link>
      </div>
    </form>
  </div>
);

export default Download;
