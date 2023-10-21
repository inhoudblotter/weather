import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {IconButton} from '../../ui/IconButton';
import './Alert.css';

export function Alert({message, type, closeFunction}) {
  const root = document.querySelector('#alerts-root');
  const el = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (el.current) {
        closeFunction();
      }
    }, 7000);
    return () => clearTimeout(timeout);
  }, [closeFunction]);

  return createPortal(
    <div className={`alert alert--${type}`} ref={el}>
      <span className="alert__message">{message}</span>
      <IconButton
        blockName={'alert'}
        className={'close-btn'}
        icon={'cross'}
        ariaLabel={'Закрыть сообщение'}
        onClick={closeFunction}
      />
    </div>,
    root
  );
}
