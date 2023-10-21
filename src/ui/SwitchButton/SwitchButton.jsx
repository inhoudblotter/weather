import {Icon} from '../Icon';
import './SwitchButton.css';

export function SwitchButton({onChange, blockName, className, icon}) {
  className = className || 'switch-btn';
  return (
    <label className={`${blockName}__${className} switch-btn`}>
      <input className={`switch-btn__checkbox`} type="checkbox" onChange={onChange} />
      {<Icon name={icon} blockName={'switch-btn'} />}
    </label>
  );
}
