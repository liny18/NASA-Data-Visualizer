import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useData } from "../Pages/Data";

const fetchAccessToken = async () => {
  try {
    const response = await fetch("/api/getAccessToken");
    const data = await response.json();
    mapboxgl.accessToken = data.accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

export const DataMap = () => {
  const { setLat, setLng } = useData();
  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    fetchAccessToken();
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-72.699997, 41.599998],
      maxBounds: [
        [-73.727775, 40.950942], // Southwest coordinates
        [-71.786994, 42.050591], // Northeast coordinates
      ],
    });

    map.on("click", function (e) {
      var coordinates = e.lngLat;
      setLat(coordinates.lat);
      setLng(coordinates.lng);

      if (markerRef.current) {
        markerRef.current.remove();
      }

      const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

      markerRef.current = marker;

      if (btnRef.current) {
        btnRef.current.remove();
      }
      const markerElement = marker.getElement();
      markerElement.style.pointerEvents = "none";
      markerElement.style.display = "flex";
      markerElement.style.flexDirection = "column";
      markerElement.style.justifyContent = "center";
      markerElement.style.alignItems = "center";
    });

    // Clean up
    return () => map.remove();
  }, []);

  return (
    <div className="data-map col-span-2 h-full rounded-3xl border-2 border-emerald-200 bg-emerald-100 p-2 shadow-[6px_6px_2px_0px_#6ee7b7]">
      <div className="relative h-full min-h-[300px]">
        {" "}
        <div
          id="map"
          className="map-container absolute h-full w-full rounded-xl"
        ></div>
      </div>
    </div>
  );
};
