import { useEffect, useState } from "react";
import { Gyroscope } from "expo-sensors";

export default function useGyroscope() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);

  useEffect(() => {
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      setXRotation(x);
      setYRotation(y);
      setZRotation(z);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { xRotation, yRotation, zRotation };
}
