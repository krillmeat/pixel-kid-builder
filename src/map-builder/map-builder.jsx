import React, {useState} from 'react';
import TabBar from './tab-bar/tab-bar';
import './map-builder.css'
import './map-menus/map-menus.css'
import MapBrowser from './map-menus/map-browser/map-browser';
import MapMenu from './map-menus/map-menu/map-menu';
import MapFrame from './map-frame/map-frame';

export const CurrentMapContext = React.createContext();

const MapBuilder = () => {
  const [currentMap,setCurrentMap] = useState('PALLET_TOWN');
  return (<div className='map-builder'>
    <CurrentMapContext.Provider value={[currentMap,setCurrentMap]}>
      <MapBrowser />
      <MapMenu />
      <div className='main'>
        <TabBar />
        <MapFrame />
      </div>
    </CurrentMapContext.Provider>
  </div>)
}

export default MapBuilder;
