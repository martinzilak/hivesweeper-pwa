import styles from './Header.module.scss';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiteRoute } from '../../constants';
import classNames from 'classnames';

const Header: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>

      <div className={styles.menu}>
        {Object.values(SiteRoute).map(({ fullPath, name, displayName }) => (
          <span
            key={name}
            className={classNames(styles.menuItem, { [styles.menuItemSelected]: fullPath === pathname })}
          >
            <Link to={fullPath}>{displayName}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
