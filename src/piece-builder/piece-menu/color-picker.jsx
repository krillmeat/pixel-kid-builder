import Color from "./color";

const COLOR_LIST = ["FFF","AAA","666","000"];

const ColorPicker = () => {
  return <div className='color-picker'>
  {COLOR_LIST.map((hex, index) => {
    return <Color index={index} hex={hex} key={'color-'+hex} />
  })}
  </div>
}

export default ColorPicker;
