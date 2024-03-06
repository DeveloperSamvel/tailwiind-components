import getClassName from '../../helpers/getClassName';

import './Input.scss';

const Input = ({
  randomUuid,
  className='',
  type='text',
  focus,
  setFocus,
  placeholder,
  fullWidth,
}) => {
  return (
    <input
      id={randomUuid}
      type={type}
      className={
        getClassName({
          defaultClasses: `_inputStyle px-2.5 pb-2.5 pt-4 peer`,
          className,
          fullWidth
        })
      }
      placeholder={focus ? placeholder: ''}
      onFocus={() => setFocus && setFocus(true)}
      onBlur={() => setFocus && setFocus(false)}
    />
  );
}

export default Input;
