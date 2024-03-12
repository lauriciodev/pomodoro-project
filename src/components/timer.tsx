import { convertTime } from '../utils/convertTime';

interface timerTypes {
  mainTime: number;
}

export default function Timer(props: timerTypes) {
  return (
    <div className="timer">
      <p>{convertTime(props.mainTime)}</p>
    </div>
  )
}
