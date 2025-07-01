import styles from './Input.module.css';
import { Icon } from '@components/Icon';
import IMAGE_NAMES from '@constants/IMAGE_NAMES';

export const Input = ({
  value,
  onChange,
  placeholder,
  inputRef,
  onSubmit,
  onReset,
  active,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      onReset={onReset}
      action="#"
      className={`${styles['search-form']} ${active && styles.focus}`}
      id="id-header-search-form"
    >
      <input
        value={value}
        onChange={onChange}
        onInput={onChange}
        placeholder={placeholder}
        type="text"
        autoComplete="off"
        className={styles.input}
        ref={inputRef}
        required
      />
      {active || value !== '' ? (
        <button className={styles['search-form__btn']} type="reset">
          <Icon
            name={IMAGE_NAMES.close}
            id="id-header-search-icon"
            className={styles['search-form__btn-icon']}
          />
        </button>
      ) : (
        <button className={styles['search-form__btn']} type={'button'} disabled>
          {!active || !value}
          <Icon
            name={IMAGE_NAMES.search}
            id="id-header-search-icon"
            className={styles['search-form__btn-icon']}
          />
        </button>
      )}
    </form>
  );
};
