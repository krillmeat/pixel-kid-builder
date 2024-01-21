import { useContext } from "react";
import { ColorChoiceContext } from "../piece-builder";
import Color from "./color";

export const COLOR_LIST = ["C4CFA1","6CA66C","1D5A4A","00131A"];

const ColorPicker = () => {
  const [currentColor] = useContext(ColorChoiceContext);
  return <div className='color-picker'>
    <ul>
  {COLOR_LIST.map((hex, index) => {
    return <li key={'color-choice-'+hex}><Color index={index} hex={hex} key={'color-'+hex} /></li>
  })}</ul>
  <div>#{COLOR_LIST[currentColor]}</div>
  </div>
}

export default ColorPicker;
