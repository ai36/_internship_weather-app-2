import styles from './Preloader.module.css';
import { cn } from '@/utils';
import PropTypes from 'prop-types';

export const Preloader = (props) => {
  return (
    <div className={cn(styles.ldsEllipsis, props.className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Preloader.propTypes = {
  className: PropTypes.string,
};
