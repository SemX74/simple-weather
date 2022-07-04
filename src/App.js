import React,{useState} from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { Today } from './components/Today';
import './App.css';

const App = () => {
  const [fetched, setFetched] = useState();
  const [today, setToday] = useState();
  const todayDate = new Date();

  const bgColor = () =>{
    const time = todayDate.getHours();
    if(time > 22 || time < 5 ){
      return ({
        background: 'rgb(20,19,78)',
        background: 'linear-gradient(180deg, rgba(20,19,78,1) 0%, rgba(29,37,37,1) 100%)'
        })
    }
    if (9 > time > 5){
      return ({
        background: 'rgb(181,177,92)',
        background: 'linear-gradient(180deg, rgba(181,177,92,1) 0%, rgba(7,6,113,1) 100%)'
        })
    }
    if (19 > time > 10){
      return ({
        background: 'rgb(7,0,255)',
        background: 'linear-gradient(225deg, rgba(7,0,255,1) 0%, rgba(0,255,244,1) 100%)'
        })
    }
    if (22 > time > 19){
      return ({
        background: 'rgb(92,178,181)',
        background: 'linear-gradient(180deg, rgba(92,178,181,1) 0%, rgba(181,92,92,1) 53%, rgba(7,6,113,1) 100%)'
        })
    }
  }

  const parseCelsius = (number) =>{
    return parseInt(number - 273.15)
}
  return (
    <div className="App" style={bgColor()}>
      <Header
       setFetched={setFetched}
       setToday={setToday}
       />
       <div className='App-slider'>
          { today && <Today 
        today={today}
        todayDate={todayDate}
        parseCelsius={parseCelsius}
        
        />}
        { fetched && <List 
        fetched={fetched}
        todayDate={todayDate}
        parseCelsius={parseCelsius}/>}
       </div>
    </div>
  );
}

export {App};
