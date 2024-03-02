import getClassName from "../helpers/getClassName";

const Grid = ({
  className,
  container,
  sm,
  gap,
  fullWidth,
  children
}) => {
  return (
    <div className={getClassName({ className, container, sm, gap, fullWidth })}>
      {children}
    </div>
  )
};

export default Grid;