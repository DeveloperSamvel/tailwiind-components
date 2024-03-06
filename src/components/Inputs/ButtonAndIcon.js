import './Input.scss';

const ButtonAndIcon = ({
  setUnlock,
  children
}) => {
  const showHidePassword = () => setUnlock((prev) => (!prev));
  const spaces = `px-3 py-3`;

  return (
    <button
      className={`_rightIconPosition ${spaces}`}
      onClick={showHidePassword}
    >
      {children}
    </button>
  );
}

export default ButtonAndIcon;
