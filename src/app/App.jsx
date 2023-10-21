import {useEffect, useState} from 'react';
import './styles/global.css';
import {Sidebar} from '../sections/Sidebar';
import {Forecast} from '../sections/Forecast';
import {Details} from '../sections/Details';
import {Context} from '../model/Context';
import {Alert} from '../components/Alert';

export function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    const appVersion = window.localStorage.getItem('version');
    if (appVersion && appVersion !== import.meta.env.VITE_STORAGE_VERSION)
      window.localStorage.clear();
  }, []);
  return (
    <Context onError={message => setErrorMessage(message)}>
      <Sidebar />
      <div className={'main'}>
        <Forecast />
        <Details />
      </div>
      {errorMessage && (
        <Alert message={errorMessage} type={'error'} closeFunction={() => setErrorMessage(null)} />
      )}
    </Context>
  );
}
