import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        showHome ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000 ease-out`}
    >
      <p className="text-7xl font-bold">Welcome to DB Market!</p>
    </div>
  );
};

export default HomePage;
