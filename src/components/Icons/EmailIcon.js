import { useContext } from 'react';
import getClassName from '../../helpers/getClassName';
import { ColorContext } from '../../context/ColorContext';

import './Icons.scss';

const EmailIcon = () => {
  const colorClass = useContext(ColorContext);

  return (
    <svg
      className={
        getClassName({
          defaultClasses: '_iconStyle',
          className: colorClass
        })
      }
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 16"
    >
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
    </svg>
  );
};

export default EmailIcon;
