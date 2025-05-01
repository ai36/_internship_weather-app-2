import { useState, useEffect } from 'react';
import LogoIconDesktop from '../../assets/image/logo-dt.svg';
import LogoIconTablet from '../../assets/image/logo-tab.svg';
import LogoIconMobile from '../../assets/image/logo-mob.svg';
import styles from './logo.module.css';

const logos = {
  desktop: {
    breakpoint: 1024,
    src: LogoIconDesktop,
    width: 192,
    height: 48,
  },
  tablet: {
    breakpoint: 768,
    src: LogoIconTablet,
    width: 54,
    height: 48,
  },
  mobile: {
    breakpoint: 0,
    src: LogoIconMobile,
    width: 32,
    height: 32,
  }
}

export const Logo = () => {
  const [logotype, setLogotype] = useState(logos.desktop);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= logos.desktop.breakpoint) {
        setLogotype(logos.desktop);
      } else if (windowWidth >= logos.tablet.breakpoint) {
        setLogotype(logos.tablet);
      } else {
        setLogotype(logos.mobile);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <a className={styles.header__logo} href="/">
      <img
        className={styles['header__logo-img']}
        src={logotype.src}
        alt='logo'
        width={logotype.width}
        height={logotype.height}
      />
    </a>
  );
};
