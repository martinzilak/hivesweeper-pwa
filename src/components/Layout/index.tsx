import { FC } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { SiteRoute } from '../../constants';
import styles from './Layout.module.scss';
import classNames from 'classnames';

const Layout: FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.ul}>
            {Object.values(SiteRoute).map(({ fullPath, name, displayName }) => (
              <li key={name} className={classNames({ [styles.selected]: fullPath === pathname })}>
                <Link to={fullPath}>{displayName}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
