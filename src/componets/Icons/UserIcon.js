import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';
import './Icons.scss';

const UserIcon = () => {
  const colorClass = useContext(ColorContext);

  return (
    <svg
      className={`iconStyle ${colorClass}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default UserIcon;
