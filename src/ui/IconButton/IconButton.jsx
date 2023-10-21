import {Icon} from '../Icon/Icon';
import './IconButton.css';

export function IconButton({
  blockName,
  className,
  icon,
  ariaLabel,
  onClick,
  modifier,
  disabled = false,
}) {
  className = className || 'icon-btn';
  return (
    <button
      className={
        `${blockName}__${className} icon-btn` + (modifier ? ` ${className}--${modifier}` : '')
      }
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {<Icon name={icon} blockName={className} />}
    </button>
  );
}
