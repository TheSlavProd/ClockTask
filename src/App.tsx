import React, { useEffect } from 'react';

import './App.css';
import { Clock } from './Clock';
import axios from 'axios';


export interface IClock {
  secondArrow: number,
  minuteArrow: number,
  hourArrow: number,
}

const stateClock: IClock = {
  secondArrow: 0,
  minuteArrow: 0,
  hourArrow: 0,
}

const App = () => {
const [state, setState] = React.useState(stateClock)

const setClock = async () =>{
  const {data} = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Moscow")
  const newData = data.datetime
  const currentDate = new Date(newData)
  let secondArrow = currentDate.getSeconds() / 60
  let minuteArrow = (secondArrow + currentDate.getMinutes()) / 60
  let hourArrow = (minuteArrow + currentDate.getHours()) / 12
  setState({
    secondArrow,
    minuteArrow,
    hourArrow,
  })
}



useEffect(()=>{
  setInterval(()=>{
    setClock()
  }, 1000)

}, [])

  return (
    <div className="App">
    <Clock secondArrow={state.secondArrow} minuteArrow={state.minuteArrow} hourArrow={state.hourArrow} />
    </div>
  );
}

export default App;
