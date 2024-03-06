import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getClassName from '../../helpers/getClassName';
import PasswordIcon from '../Icons/PasswordIcon';
import LockIcon from '../Icons/LockIcon';
import ButtonAndIcon from './ButtonAndIcon';
import Label from './Label';
import Input from './Input';
import { ColorsContext } from '../../context/ColorContext.js';

import './Input.scss';

const InputMUI = ({
  labelTitle,
  type,
  placeholder,
  fullWidth,
}) => {
  const [unlock, setUnlock] = useState(false);
  const [focus, setFocus] = useState(false);
  const { color500, color600 } = useContext(ColorsContext);
  const randomUuid = uuidv4();

  const colors = focus ? `dark:border-${color500} border-${color600}` : '';

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
      {type === "password" && (
        <ButtonAndIcon setUnlock={setUnlock}>
          {unlock && <LockIcon focus={focus} />}
          {!unlock && <PasswordIcon focus={focus} />}
        </ButtonAndIcon>
      )}
    </div>
  );
}

export default InputMUI;
