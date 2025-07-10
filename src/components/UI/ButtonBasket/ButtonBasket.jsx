import { Icon } from '../../../components';
import React from 'react';

import styles from './buttonBasket.module.css';

export const ButtonBasket = ({ handleClick, disabled, type }) => {
  return (
    <button
      className={styles.icon}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon icon='basket' />
    </button>
  );
};
