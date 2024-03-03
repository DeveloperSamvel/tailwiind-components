import getClassName from '../../helpers/getClassName';

import './Button.scss';

const Button = ({ className, text, title='' }) => {
  return (
    <button
      type="button"
      className={
        getClassName({
          defaultClasses: '_button',
          className
        })
      }
      title={title ? title : text}
    >
      {text}
    </button>
  );
}

export default Button;
