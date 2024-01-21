import React from 'react';
import DB from '../../../DB/root.db';
import BrowserRegion from './browser-region';

// TODO - Need to change how things work and switch it to using a different method for the list

const MapBrowser = () => {
  return (<div className='map-browser'>
    {Object.keys(DB.MAPS).map(region => {
      return <BrowserRegion region={region} />
    })}
  </div>)
}

export default MapBrowser;
