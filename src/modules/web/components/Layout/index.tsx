import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />

      <div className={styles.content}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
