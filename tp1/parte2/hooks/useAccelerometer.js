import { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";

export default function useAccelerometer() {
  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);

  useEffect(() => {
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      setXAcceleration(x);
      setYAcceleration(y);
      setZAcceleration(z);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { xAcceleration, yAcceleration, zAcceleration };
}
