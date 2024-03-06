import { v4 as uuidv4 } from 'uuid';
import getClassName from '../../helpers/getClassName';
import PasswordIcon from '../Icons/PasswordIcon';
import LockIcon from '../Icons/LockIcon';
import ButtonAndIcon from './ButtonAndIcon';
import Label from './Label';
import Input from './Input';
import { blue500, blue600 } from '../../content.js';

import './Input.scss';
import { useState } from 'react';

const InputMUI = ({
  labelTitle,
  type,
  // unlock,
  // setUnlock,
  // focus,
  // setFocus,
  placeholder,
  fullWidth,
}) => {
  const [unlock, setUnlock] = useState(false);
  const [focus, setFocus] = useState(false);
  const randomUuid = uuidv4();

  const colors = focus ? `dark:border-${blue500} border-${blue600}` : '';

  return (
    <div
      className={
        getClassName({
          defaultClasses: `_inputContainer group ${colors}`,
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
        <Input
          randomUuid={randomUuid}
          type={type}
          focus={focus}
          setFocus={setFocus}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
        <Label
          randomUuid={randomUuid}
          labelTitle={labelTitle}
        />
      </div>
      {type === "password" && <ButtonAndIcon
        colors={colors}
        setUnlock={setUnlock}
        focus={focus}
      >
        {unlock && <LockIcon />}
         {/* : <PasswordIcon />} */}
        {!unlock && <PasswordIcon />}
      </ButtonAndIcon>}
    </div>
  );
}

export default InputMUI;
