const getClassName = ({
  defaultClasses = '',
  className,
  container,
  sm,
  gap,
  fullWidth
}) => {
  const _defaultClasses = defaultClasses ? `${defaultClasses} ` : '';
  const classNameClass = className ? `${className} ` : '';
  const containerClass = container ? 'grid ' : '';
  const smColumnsClass = sm ? `sm:grid-cols-${sm} ` : '';
  const gapClass = gap ? `gap-${gap} ` : '';
  const fullWidthClass = fullWidth ? 'w-full ' : '';

  return _defaultClasses
    ?.concat(classNameClass, containerClass, smColumnsClass, gapClass, fullWidthClass)
    .trimEnd();
};

export default getClassName;