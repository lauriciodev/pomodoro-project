import { useState } from 'react'
import { useInterval } from '../hooks/useIterval';
import { convertTime } from '../utils/convertTime';
import Button from './button';

interface typeProps{
  defaultPomodoroType:number
}

function Pomo(props:typeProps) {
const [mainTime, setMainTime] = useState(props.defaultPomodoroType);

useInterval(() =>{
setMainTime(mainTime -1)
}, 1000)

return (
  <div>
<h2>pomodoro timer {convertTime(mainTime)} </h2>
   <Button className='button' clickFunction={() =>{
    console.log("lauricio");
   }} text='Parar'/>
</div>
  )
}

export default  Pomo
