import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <span>Created by</span>
        <span>Martin Zilak</span>
      </div>

      <div className={styles.footerItem}>
        <a href="mailto:martin@zilak.sk?subject=Hivesweeper" className={styles.mailLink}>
          Contact me
        </a>
        <span>via e-mail</span>
      </div>

      <div className={styles.footerItem}>
        <a href="https://apps.apple.com/us/app/hivesweeper/id1581731994" className={styles.downloadButton}></a>
      </div>
    </div>
  );
};

export default Footer;
