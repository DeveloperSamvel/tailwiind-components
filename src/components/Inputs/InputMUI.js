import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';
import getClassName from '../../helpers/getClassName';

import './Input.scss';

const InputMUI = ({
  labelTitle,
  unlock,
  setUnlock,
  focus,
  setFocus,
  placeholder,
  fullWidth,
  children
}) => {
  const color = useContext(ColorContext);
  const type = unlock ? "text" : "password";

  const showHidePassword = () => setUnlock((prev) => (!prev));

  return (
    <div
      className={
        getClassName({
          defaultClasses: 'flex group',
          fullWidth
        })
      }
    >
      <div
        className={
          getClassName({
            defaultClasses: 'relative',
            fullWidth
          })
        }
      >
        <input
          type={type}
          className={
            getClassName({
              defaultClasses: '_inputStyle peer',
              fullWidth
            })
          }
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <label className={'_labelStyle'}>
          <span>
            {labelTitle}
          </span>
        </label>
      </div>
      <button
        className={`_rightIconPosition${focus ? ' _focusContainer' : ''}`}
        onClick={showHidePassword}
      >
        <ColorContext.Provider value={focus ? color : ''}>
          {children}
        </ColorContext.Provider>
      </button>
    </div>
  );
}

export default InputMUI;
