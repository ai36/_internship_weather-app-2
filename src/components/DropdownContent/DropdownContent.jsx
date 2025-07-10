import { Loader } from '../UI';
import React from 'react';

import styles from './dropdownContent.module.css';

export const DropdownContent = ({
  title,
  icon,
  items,
  onChoose,
  className,
}) => {
  return (
    <>
      <div className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        {icon}
      </div>
      <ul className={styles.list}>
        {items ? (
          items.map((item, i) => (
            <li
              className={styles[className]}
              key={i}
              onClick={async e =>
                await onChoose(e, item.name, item.lat, item.lon)
              }
            >
              {item.name}
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </>
  );
};
