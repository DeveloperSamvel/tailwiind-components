import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';
import './Icons.scss';

const PhoneIcon = () => {
  const colorClass = useContext(ColorContext);

  return (
    <svg
      className={`iconStyle ${colorClass}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
    </svg>
  );
};

export default PhoneIcon;
