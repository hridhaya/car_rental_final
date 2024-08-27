import Image from 'next/image';
import styles from './promo.module.css';

const Promo= () => (
  <div className={styles.promotionDiv}>
    <p>
      <span>
        Receive guaranteed <button id={styles.giftVoucher}>GIFT VOUCHER</button>
        <br />
        on a monthly hire or lease
      </span>
    </p>
  </div>
);

export default Promo;
