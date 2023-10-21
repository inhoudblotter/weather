import './Loader.css';

export function Loader() {
  return (
    <div className={'loader loader--show'}>
      {
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    </div>
  );
}
