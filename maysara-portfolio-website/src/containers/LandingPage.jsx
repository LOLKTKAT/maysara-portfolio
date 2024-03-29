import React, { useRef, useState, useEffect, useContext } from "react";
import style from "../styles";
import arrow from "../assets/icons/arrow-up-right.svg";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import { THEME } from "../App";
import MOCKUPS from "../assets/mockups";
export const LandingPage = () => {
  const secRef = useRef();
  const [heroImageCounter, setHeroImageCounter] = useState(0);
  const { myTheme, setMyTheme } = useContext(THEME);

  const [isIntersecting, setIsIntersectin] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersectin(entry.boundingClientRect.bottom);
    });
    observer.observe(secRef.current);
  }, []);

  if (isIntersecting < 5) {
    setMyTheme(1);
  } else if (isIntersecting > 0) {
    setMyTheme(0);
  }

  let count = 0;
  function handleHeroImageChange() {
    setHeroImageCounter(count);
    count += 1;
    // if (count < 2) {
    //   setHeroImageCounter((heroImageCounter) => (heroImageCounter += 1));
    //   console.log(heroImageCounter);
    // } else {
    //   count = 0;
    // }
    console.log(heroImageCounter + " counter");
  }

  useEffect(() => {
    // setInterval(() => {
    //   handleHeroImageChange();
    // }, 5000);
  }, []);

  return (
    <article ref={secRef} className="landing-page">
      <motion.div
        className="intital-load"
        initial={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.8 }}
      ></motion.div>
      <motion.div
        className="intital-load-1"
        initial={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="intital-load-2"
        initial={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          position: "fixed",
        }}
        animate={{
          backgroudColor: style[0].yellow,
          height: "100%",
          width: "100%",
          y: "-101vh",
          position: "fixed",
        }}
        transition={{ type: "tween", easeIn, duration: 0.2, delay: 0.2 }}
      ></motion.div>

      <section className="landing-page__first-section">
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          FRONT
        </motion.h1>
        <motion.h1
          className="__flex"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
            className="landing-page__hero-image"
          >
            <img
              src={MOCKUPS[heroImageCounter]}
              className="landing-page__inside-image"
              alt=""
            />
          </motion.div>
          END
        </motion.h1>
      </section>
      <section>
        <motion.h1
          className="developer"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          developer
        </motion.h1>
      </section>
      <section className="landing-page__second-section">
        <p className="landing-page__paragragh">
          Intrested in Crafting digital 🖥️ experiences 🤯 with code and
          creativity 🖼️ . Helping bring your ideas 💡 to life 🧬 with beautiful
          web design and development 🏗️ .
        </p>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <img src={arrow} alt="arrow" className="btn-arrow" />
          <path
            id="circlePath"
            fill="#E5FF6E"
            stroke=""
            d="
            M 10, 50
            a 40, 40 0 1,1 80,0
            40,40 0 1,1 -80,0 "
          />
          <text>
            <textPath href="#circlePath" fill="white">
              Hire me • Hire me • Hire me • Hir•
            </textPath>
          </text>
        </svg>
        {/* <div className="langing-page__contact-btn">
        </div> */}
      </section>
      <style>
        {`.landing-page {
          max-width: calc(100vw - 160px);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 101vh;
        }
        .landing-page h1 {
          text-align: center;
          line-height: 8rem;
        }
            .landing-page__paragragh {
              max-width: 420px;
              margin-top: 3vw;
              margin-bottom: 16px; 
              display: flex;
            }
            .landing-page__first-section {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 12px
              
            }
            .landing-page__hero-image {
              height: 8vw;
              width: 14vw;
              background-color: white
              // background-position: center;
              // background-size: cover;
              // background-repeat: no-repeat;
              
            }
            .landing-page__inside-image {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
            .langing-page__contact-btn {
              all: unset;
              height: 5rem;
              width: 5rem;
              border-radius: 50px;
              aspect-ratio: 1;
              background-color: ${style[0].yellow};
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              border: 1px solid black;
              transition: 160ms ease-out;
              margin: 0 auto;
            }
            .landing-page__second-section {
              display: flex;
            }
            .langing-page__contact-btn:hover , btn-arrow {
              transform: rotate(45deg);
            }
            .btn-arrow {
              height: 32px;
              aspect-ratio: 1;
            }
            .btn-arrow:hover {
            }
            .intital-load {
              background-color: ${style[0].red};
            }
            .intital-load-1 {
              background-color: ${style[0].green};
            }
            .intital-load-2 {
              background-color: ${style[0].yellow};
            }
            @media only screen and (max-width: 750px) {
              .developer {
                margin-top: -7vw;
              }
              .landing-page__second-section {
                flex-direction: column;
              }
            }
            @media only screen and (max-width: 550px) {
              .developer {
                margin-top: -16vw;
              }
            }
            @media only screen and (max-width: 320px) {
              .developer {
                margin-top: -30vw;
              }
            }
            
            `}
      </style>
    </article>
  );
};
