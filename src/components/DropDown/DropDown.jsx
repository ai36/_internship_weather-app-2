import { useContext, useRef } from 'react';
import { HeadContext, Context } from '../../context';
import useClickOutside from '../../hooks/useClickOutside';

import styles from './dropdown.module.css';

export const Dropdown = () => {
  const dropRef = useRef(null);
  const { searchOpen, setSearchOpen } = useContext(Context);
  const { dropDownContent } = useContext(HeadContext);
  useClickOutside(dropRef, () => {
    setSearchOpen(false);
  });

  return (
    <div
      className={`${styles.drop} ${
        searchOpen ? 'dropDownActive' : styles.hidden
      }`}
      ref={dropRef}
    >
      {dropDownContent}
    </div>
  );
};
