import { useState, useEffect } from "react";

const useTimeoutTimer = (initialTime = 2) => {
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Set initial timer
    const initialTimer = setTimeout(
      () => {
        setShowModal(true);
      },
      initialTime * 60 * 1000,
    );

    setTimer(initialTimer);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const extendTime = () => {
    setShowModal(false);
    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      setShowModal(true);
    }, 60 * 1000); // 1 minute extension

    setTimer(newTimer);
  };

  return { showModal, setShowModal, extendTime };
};

export default useTimeoutTimer;
