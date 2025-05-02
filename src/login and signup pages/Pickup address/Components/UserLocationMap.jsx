import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function UserLocationMap({
  latitude,
  longitude,
  mapRef,
  markerRef,
}) {
  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setView([latitude, longitude], 13);

      // Remove old marker
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      // Add new marker
      markerRef.current = L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup("You are here")
        .openPopup();
    }
  }, [latitude, longitude]);

  return (
    <div className="h-[495px] z-10 w-full rounded-b-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[latitude, longitude - 0.01]} 
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
