// import React from "react";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";

// type LoadScriptHookReturnValue = {
//   isLoaded: boolean;
//   loadError: Error | null | undefined;
// };

// export const DataMap = () => {
//   const apiKey = "AIzaSyDB_puHl5GSEG1qC7WDNXgskT2Z1tkERqc";
//   const { isLoaded, loadError }: LoadScriptHookReturnValue = useLoadScript({
//     googleMapsApiKey: apiKey || "",
//   });

//   return (
//     <div className="data-map col-span-2 h-full rounded-3xl border-2 border-emerald-200 bg-emerald-100 p-2 shadow-[6px_6px_2px_0px_#6ee7b7] ">
//       {loadError && <div>Map cannot be loaded right now, sorry.</div>}
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={{
//             width: "100%",
//             height: "100%",
//             borderRadius: "10px",
//           }}
//           zoom={8}
//           center={{ lat: 41.4790845, lng: -72.749954 }}
//         ></GoogleMap>
//       )}
//     </div>
//   );
// };

import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const DataMap  = () => {
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3ZlbWJlbmlsIiwiYSI6ImNsZ2dvOXhncjAwbmEzbHBicmc0ODI2YnEifQ.QpodPFhI-Vibl_DVqwDjUQ"
        initialViewState={{
          longitude: -72.699997,
          latitude: 41.599998,
          zoom: 7,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
}
