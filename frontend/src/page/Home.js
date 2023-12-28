import React, { useEffect, useState } from "react";

import classes from "./Home.module.css";

const HomePage = () => {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={classes.image__container}>
      <div
        className={`flex justify-center items-center h-screen ${
          showHome ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-out`}
      >
        <p className="text-8xl font-bold text-blue-700">
          Welcome to DB Market!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
