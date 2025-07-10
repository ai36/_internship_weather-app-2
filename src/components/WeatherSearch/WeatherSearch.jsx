import { useContext } from 'react';
import { Dropdown, Icon, DropdownContent } from '../../components';
import { Input, ButtonBasket } from '../UI';
import { HeadContext, Context } from '../../context';

import styles from './weatherSearch.module.css';

export const WeatherSearch = ({ onChooseCity }) => {
  const { value, setValue, isLoading, setSearchOpen } = useContext(Context);
  const { setDropDownContent, localData, setLocalData } =
    useContext(HeadContext);

  const dropDownBlock = localData.length ? (
    <DropdownContent
      title={'Недавно смотрели'}
      icon={
        <ButtonBasket handleClick={onDelete} type={'button'} disabled={false} />
      }
      items={localData}
      onChoose={onChooseCity}
      className={'item'}
    />
  ) : (
    <DropdownContent
      title={'Недавно смотрели'}
      icon={<ButtonBasket type={'button'} disabled={true} />}
      items={[{ name: 'История поиска пустая.' }]}
      className={'notFound'}
    />
  );

  function onDelete(e) {
    e.stopPropagation();
    localStorage.removeItem('cities');
    setLocalData([]);
    setDropDownContent(
      <DropdownContent
        title={'Недавно смотрели'}
        icon={<ButtonBasket type={'button'} disabled={true} />}
        items={[{ name: 'История поиска пустая.' }]}
        className={'notFound'}
      />
    );
  }

  const onChange = e => {
    const newValue = e.target.value;
    if (!newValue.match(/[A-Za-z]/g)) {
      setValue(newValue);
    }
  };

  const onClear = () => {
    setValue('');
  };

  const handleClick = e => {
    e.stopPropagation();
    setDropDownContent(dropDownBlock);
    setSearchOpen(true);
  };
  return (
    <div className={styles.search} onClick={e => handleClick(e)}>
      <Input
        className={styles.input}
        onChange={onChange}
        value={value}
        onClear={onClear}
        placeholder='Поиск по городу'
        type='search'
        disabled={isLoading}
      >
        {value && <Icon icon='clear' className={styles.icon} />}
        {!value && <Icon icon='search' className={styles.icon} />}
      </Input>
      <Dropdown />
    </div>
  );
};
