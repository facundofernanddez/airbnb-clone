"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={[52.505, -0.09]}
    ></MapContainer>
  );
}
