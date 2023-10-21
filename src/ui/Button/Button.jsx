import './Button.css';

export function Button({blockName, className, onClick = () => {}, children}) {
  className = className || 'btn';
  return (
    <button className={`${blockName}__${className} btn`} onClick={onClick}>
      {children}
    </button>
  );
}
