interface PropType{
clickFunction:() => void;
  text:string;
  className:string;
}

function Button(props:PropType): JSX.Element {

  return <button onClick={() => props.clickFunction()}>{props.text}</button>
}


export default Button
