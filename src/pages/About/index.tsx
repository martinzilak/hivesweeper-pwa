import { FC } from 'react';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div className={styles.div}>
      <h2>About Page</h2>
      <main>
        <p>This section contains information about...</p>
      </main>
    </div>
  );
};

export default About;
