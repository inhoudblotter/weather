import {Icon} from '../../../ui/Icon';
import './WindDirection.css';

const DIRECTIONS = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];

export function WindDirection({value}) {
  // Диапазон для направления по 22.5 в ту и другую сторону.
  // Если от градусов отнять это значение и разделить на 45 получим число начиная с -0,5 до 7,5
  // Округлив в меньшую сторону и добавив 1 получим индекс, где максимальным значением будет 8
  // Крайнее значение - это север, то есть начало списка DIRECTIONS

  let index = Math.floor((value - 22.5) / 45) + 1;

  if (index === 8) index = 0;

  return (
    <div className="feature__wind-direction wind-direction" style={{'--value': `${value}deg`}}>
      <Icon name={'direction'} blockName={'wind-direction'} />
      <span className="wind-direction__value">{DIRECTIONS[index]}</span>
    </div>
  );
}
