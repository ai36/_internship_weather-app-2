import React from 'react';
import { Icon } from "../../Icon/Icon";
import styles from "./button.module.css";

export const Button = React.forwardRef(({ icon = "chevron-right", isDisabled, ...props }, ref) => {
  return (
    <button className={styles.btn} disabled={isDisabled} {...props} ref={ref}>
      <Icon icon={icon} />
    </button>
  );
});