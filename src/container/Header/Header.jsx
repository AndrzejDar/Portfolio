import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Header.scss";
import { useState } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
  }, []);

  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let x = `${50 - (_mouseX - _w) * 0.1 - 50}`;
    let y = `${50 + (_mouseY - _h) * 0.1 - 50}`;
    console.log(x);
    setX(x);
    setY(y);
  }

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, staggerChildren: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello.</p>
              <h1 className="head-text">I am Andrzej</h1>
            </div>
          </div>

          <div className="tag-cmp app_flex">
            <p className="p-text">I build things for the web.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* foreground img */}
        <img src={images.avatar} alt="profile_bg" />

        {/* background img 1  */}
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.avatarbg2}
          alt="profile_circle"
          className="overlay_circle"
          id="parallax"
          style={{'left': `${x}px`,
          'bottom': `${y}px`}}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.avatarbg1}
          alt="profile_circle"
          className="overlay_circle"
          id="parallax"
          style={{'left': `${x * 0.5}px`,
          'bottom': `${y * 0.5}px`}}
        /> */}

        {[0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1].map((dist,id) => (
          <>
            <motion.img
              whileInView={{ scale: [0, 1 * dist] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={images.avatarcircle02}
              alt="profile_circle"
              className="overlay_circle"
              id="parallax"
              style={{ left: `${x * 0.2*(9-id)}px`, bottom: `${y * 0.2*(9-id)}px`, opacity: dist/4 }}
            />
            <motion.img
              whileInView={{ scale: [0, 1 * dist] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={images.avatarcircle01}
              alt="profile_circle"
              className="overlay_circle"
              id="parallax"
              style={{ left: `${x * 0.25*(9-id)}px`, bottom: `${y * 0.25*(9-id)}px`, opacity: dist/4 }}
            />
          </>
        ))}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.css].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
//export default Header;
