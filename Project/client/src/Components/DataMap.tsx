import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

type LoadScriptHookReturnValue = {
  isLoaded: boolean;
  loadError: Error | null | undefined;
};

export const DataMap = () => {
  const apiKey = "AIzaSyDB_puHl5GSEG1qC7WDNXgskT2Z1tkERqc";
  const { isLoaded, loadError }: LoadScriptHookReturnValue = useLoadScript({
    googleMapsApiKey: apiKey || '',
  });

  return (
    <div className="data-map col-span-2 lg:h-full sm:h-1/2">
      <h1>Map</h1>
      {loadError && <div>Map cannot be loaded right now, sorry.</div>}
      {isLoaded && <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        zoom={8}
        center={{ lat:  41.4790845, lng: -72.749954 }}
      >
      </GoogleMap>}
    </div>
  )
}
