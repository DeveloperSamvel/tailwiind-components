import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';

import './Input.scss';

const ButtonAndIcon = ({
  setUnlock,
  focus,
  children
}) => {
  const color = useContext(ColorContext);
  const showHidePassword = () => setUnlock((prev) => (!prev));

  return (
    <button
      className={`_rightIconPosition`}
      onClick={showHidePassword}
    >
      <ColorContext.Provider value={focus ? color : ''}>
        {children}
      </ColorContext.Provider>
    </button>
  );
}

export default ButtonAndIcon;
