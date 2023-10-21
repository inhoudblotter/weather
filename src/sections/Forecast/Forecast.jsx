import {useState} from 'react';
import {TabButton} from '../../ui/TabButton';
import {ForecastTab} from '../../components/ForecastTab';
import './Forecast.css';

export function Forecast() {
  let [currentTab, setCurrentTab] = useState('daily');
  return (
    <section className="forecast">
      <div className="container forecast__container">
        <div className="forecast__header">
          <h2 className="forecast__title title">Прогноз</h2>
          <div className="forecast__tabs-btns">
            <TabButton
              blockName={'forecast'}
              name="daily"
              isActive={currentTab === 'daily'}
              setTab={setCurrentTab}
            >
              на неделю
            </TabButton>
            <TabButton
              blockName={'forecast'}
              name="hourly"
              isActive={currentTab === 'hourly'}
              setTab={setCurrentTab}
            >
              почасовой
            </TabButton>
          </div>
        </div>
        <div className="forecast__tabs">
          <ForecastTab currentTab={currentTab} />
        </div>
      </div>
    </section>
  );
}
