import { useState, useEffect } from "react";
import Clock from "./Clock";

function useTime(){
  const [time, setTime] = useState( () => { return new Date();})

  useEffect (() => {
    const id = setInterval( () => {
      return setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, [])

  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
      <p>Pick a Color: {' '}
        <select value={color} onChange={e => setColor(e.target.value)} >
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="orange">orange</option>
          <option value="green">green</option>
          <option value="aqua">aqua</option>
        </select>


      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  )
}





