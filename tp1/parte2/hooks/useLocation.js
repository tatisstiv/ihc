import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [deviceLatitude, setDeviceLatitude] = useState(0);
  const [deviceLongitude, setDeviceLongitude] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission not granted");
        return;
      }

      const isGPSEnabled = await Location.hasServicesEnabledAsync();
      if (!isGPSEnabled) {
        setErrorMessage("Please enable GPS");
        return;
      }

      setErrorMessage("");

      const { latitude, longitude } = (
        await Location.getCurrentPositionAsync({})
      ).coords;

      setDeviceLatitude(latitude);
      setDeviceLongitude(longitude);
    })();
  }, []);

  return { deviceLatitude, deviceLongitude, errorMessage };
}
