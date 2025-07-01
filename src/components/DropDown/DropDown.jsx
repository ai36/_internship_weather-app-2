import styles from './DropDown.module.css';
import { Preloader } from '@components/Preloader';
import PropTypes from 'prop-types';
import { Icon } from '@components/Icon';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </header>
  );
};

const List = (props) => {
  return props.data.length ? (
    <ul className={styles.list}>
      {props.data.map((item) => (
        <li key={item.name}>
          <ListItem value={item} onClick={props.onClick} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.text}>{props.message}</p>
  );
};

const ListItem = (props) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    props.onClick(props.value);
  };

  return (
    <button className={styles.listItem} onClick={handleClick} type={'button'}>
      {props.value.name}
    </button>
  );
};

export const DropDown = (props) => {
  const setInnerContent = () => {
    if (props.loading) {
      return (
        <>
          <Header title={'Ищем...'} />
          <Preloader className={styles.preloader} />
        </>
      );
    }

    if (props.cityFound.name) {
      const isCityFound = props.cityFound.name !== 'Not found';
      return (
        <>
          <Header
            title={isCityFound ? 'Результат поиска' : 'Упс! Город не найден'}
          />
          <List
            data={isCityFound ? [props.cityFound] : []}
            onClick={props.onClick}
            message={'Попробуйте другое название.'}
          />
        </>
      );
    }

    return (
      <>
        <Header title={'Недавно смотрели'}>
          <button
            className={styles.removeButton}
            type={'button'}
            onClick={props.onClear}
            disabled={props.recent.length === 0}
          >
            <Icon name={'delete'} className={styles.removeIcon} />
          </button>
        </Header>
        <List
          data={props.recent}
          onClick={props.onClick}
          message={'История поиска пустая.'}
        />
      </>
    );
  };

  return <div className={styles.dropdown}>{setInnerContent()}</div>;
};

DropDown.propTypes = {
  loading: PropTypes.bool,
  recent: PropTypes.array,
  onClick: PropTypes.func,
  onResultClick: PropTypes.func,
  onClear: PropTypes.func,
  cityFound: PropTypes.object,
};
