import { useNavigate } from 'react-router-dom';

import { colors } from "../utils/colors"



export default function DefaultButton(props) {

  const navigateTo = useNavigate();

  const style = {
    width: 160,
    borderRadius: 100,
    height: 65,
    fontSize: 15,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    backgroundColor: props.bgColor || colors.default_button_bg,
  }

  return <button onClick={() => navigateTo(props.to)} style={style} type={props.type} bgColor={props.color}>{props.text}</button>
}