import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type props = {
  latitude: number;
  longitude: number;
};
const SimpleMap = ({ latitude, longitude }: props) => {
  const mapRef = useRef(null);
  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        ref={mapRef}
        scrollWheelZoom={false}
        style={{
          height: "68vh",
          width: "100vw",
          position: "absolute",
          left: "0",
          bottom: "0",
          zIndex: "-1000",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
