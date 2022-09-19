import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        What can <span>I</span> do for <span>you</span>?
      </h2>
      <div className="app__profiles ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
        <div 
        className="app__about-description">
          <p>
            Since the beginning of my journey as a freelance developer I’ve done
            many projects fulfilling specific needs of my customers and helped
            to create web products for both business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, and React, creating small and
            medium web apps, features, and coding interactive layouts. Currently
            I'm expanding my knowledge on the backend part using node.js and express.
          </p>
          <p>
            I also have experience with popular open-source
            CMS like (WordPress, Shopify, and others).
          </p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
//export default About;
