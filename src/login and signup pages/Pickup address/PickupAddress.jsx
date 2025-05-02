import  { useRef, useState } from "react";
import PageProgresser from "../components/PageProgresser";
import PickupLocationModal from "./PickupLocationModal";
import AddNewLocation from "./AddNewLocation";
import UserLocationMap from "./Components/UserLocationMap";

const PickupAddress = () => {
  const [newLocationModal, setNewLocationModal] = useState(false);
  const [location, setLocation] = useState({
    latitude: 11.2604542,
    longitude: 75.8417637,
    error: null,
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude, error: null });
        },
        (error) => {
          setLocation({
            latitude: 11.2604542,
            longitude: 75.8417637,
            error: error.message,
          });
          alert(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setLocation({
        latitude: 11.2604542,
        longitude: 75.8417637,
        error: "Geolocation is not supported by this browser.",
      });
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="-mt-11">
      <div>
        <h1 className="text-2xl font-bold mb-1">Pickup address</h1>
        <p className="text-md text-gray-700">Fill supplier pickup location</p>
      </div>

      <div className="">
        <PageProgresser />
      </div>

      <div className="h-[500px] rounded-b-lg -mx-14 relative">
        {/* map */}
        <div className="z-100">
          <UserLocationMap
            latitude={location.latitude}
            longitude={location.longitude}
            mapRef={mapRef}
            markerRef={markerRef}
          />
        </div>

        {/* phone modal */}
        <div className="w-[280px] z-1000 top-2 absolute p-2 h-[480px] ml-5 rounded-lg bg-white shadow-lg">
          {newLocationModal ? (
            <AddNewLocation setNewLocationModal={setNewLocationModal} />
          ) : (
            <PickupLocationModal
              setNewLocationModal={setNewLocationModal}
              handleUseCurrentLocation={handleUseCurrentLocation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PickupAddress;
