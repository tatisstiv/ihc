import { useEffect, useState } from "react";
import { LightSensor } from "expo-sensors";

const updateInterval = 500;

export default function useLightSensor() {
  const [luminosity, setLuminosity] = useState(null);

  const luminosityUpdate = (data) => {
    setLuminosity(data.illuminance);
  };

  useEffect(() => {
    const subscription = LightSensor.addListener(luminosityUpdate);

    LightSensor.setUpdateInterval(updateInterval);

    return () => {
      subscription.remove();
    };
  }, []);

  return luminosity;
}
