const PieceMenuView = ({currentView}) => {
  return <div className={'view '+currentView}>
    <div>View</div>
    <ul>
      <li className='choice single'><button>Single</button></li>
      <li className='choice quad'><button>Quad</button></li>
    </ul>
  </div>
}

export default PieceMenuView;
