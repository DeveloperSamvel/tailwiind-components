import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getClassName from '../../helpers/getClassName';
import PasswordIcon from '../Icons/PasswordIcon';
import LockIcon from '../Icons/LockIcon';
import ButtonAndIcon from './ButtonAndIcon';
import Label from './Label';
import Input from './Input';
import { blueColorContext } from '../../context/BlueColorContext.js';

import './Input.scss';

const InputMUI = ({
  labelTitle,
  type,
  placeholder,
  fullWidth,
}) => {
  const [unlock, setUnlock] = useState(false);
  const [focus, setFocus] = useState(false);
  const { border500, border600 } = useContext(blueColorContext);
  const randomUuid = uuidv4();

  return (
    <div
      className={
        getClassName({
          defaultClasses: `_inputContainer group ${focus ? ` ${border500} ${border600}` : 'grayBorder'}`,
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
          type={unlock ? 'text' : type}
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
