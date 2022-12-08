import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./ParticlesConfig.json";
import styles from "./404.module.css";
export default function Error() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id='tsparticles'
        options={ParticlesConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className={styles.container}>
        <span className={styles.heading}>404</span>
        <span className={styles.subheading}>
          WE ARE SORRY BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </span>
        <div className={styles.btnContainer}>
          <button className={styles.btn + " " + styles.homeBtn}>Go Home</button>
          <button className={styles.btn}>Contact Us</button>
        </div>
      </div>
    </>
  );
}
