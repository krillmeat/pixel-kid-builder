import React, { useContext } from "react"
import { ColorChoiceContext } from "../piece-builder"

const isCurrentColor = (index,currentColor) => index === currentColor;

const Color = ({index,hex}) => {
  const [currentColor,setCurrentColor] = useContext(ColorChoiceContext);
  const selectColor = e => { setCurrentColor(index) }
  return <div className={'color-choice '+ (isCurrentColor(index,currentColor) && 'selected')} style={{backgroundColor: `#${hex}`}} onClick={selectColor}></div>
}

export default Color;