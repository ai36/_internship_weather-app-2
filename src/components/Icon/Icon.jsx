import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClearIcon,
  LogoIcon,
  LogoTablet,
  SearchIcon,
  DirectionIcon,
} from '../UI';
import { createImg } from '../../utils/createImg';
import Basket from '../UI/Icons/Basket/Basket';

const icons = ({
  icon = '',
  className = '',
  ext = 'png',
  alt = 'Иконка',
  rotation = 0,
}) => {
  switch (icon) {
    case 'chevron-left':
      return <ChevronLeftIcon className={className} />;

    case 'chevron-right':
      return <ChevronRightIcon className={className} />;

    case 'clear':
      return <ClearIcon className={className} />;

    case 'search':
      return <SearchIcon className={className} />;

    case 'logo':
      return <LogoIcon className={className} />;

    case 'basket':
      return <Basket />;

    case 'logo-tablet':
      return <LogoTablet className={className} />;

    case 'direction':
      return <DirectionIcon className={className} rotation={rotation} />;

    default:
      const src = require(`../../assets/${icon}.${ext}`);

      if (!src) return '';

      return createImg({ src, className, alt });
  }
};

export const Icon = ({ className = '', icon = '', alt = '', rotation = 0 }) => {
  return icon ? icons({ className, icon, alt, rotation }) : null;
};
