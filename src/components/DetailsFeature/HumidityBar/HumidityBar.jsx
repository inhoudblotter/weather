import './HumidityBar.css';

export function HumidityBar({value}) {
  return (
    <div className="feature__humidity-bar humidity-bar">
      <ul className="humidity-bar__legend items">
        <li className="humidity-bar__segment">0</li>
        <li className="humidity-bar__segment">50</li>
        <li className="humidity-bar__segment">100</li>
      </ul>
      <div className="humidity-bar__value" style={{'--value': `${value}%`}}></div>
      <span className="humidity-bar__unit">%</span>
    </div>
  );
}
