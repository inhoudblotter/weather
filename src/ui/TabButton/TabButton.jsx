import './TabButton.css';

export function TabButton({blockName, name, isActive, setTab, children}) {
  return (
    <button
      className={
        isActive ? `${blockName}__tab-btn tab-btn--active tab-btn` : `${blockName}__tab-btn tab-btn`
      }
      onClick={() => setTab(name)}
    >
      {children}
    </button>
  );
}
