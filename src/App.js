import React,{useState,useEffect} from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { Today } from './components/Today';
import { options } from './service/Options';
import './App.css';

const App = () => {
  const [fetched, setFetched] = useState();
  const [today, setToday] = useState()
  return (
    <div className="App">
      <Header
       setFetched={setFetched}
       setToday={setToday}  
       />
        { today && <Today 
       today={today}
       
       />}
      { fetched && <List 
      fetched={fetched}/>}
    </div>
  );
}

export {App};
