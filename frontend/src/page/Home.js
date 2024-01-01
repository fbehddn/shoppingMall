import React, { useEffect, useState } from "react";
import image from "../assets/shopping.jpg";
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
    <div className={classes.imageContainer}>
      <img
        src={image}
        alt="shopping"
        className={`${classes.image} ${showHome ? classes.show : ""}`}
      />
      <p
        className={`${classes.welcomeText} ${showHome ? classes.showText : ""}`}
      >
        Welcome to
      </p>
      <p className={`${classes.text} ${showHome ? classes.showText : ""}`}>
        DB Market!
      </p>
    </div>
  );
};

export default HomePage;
