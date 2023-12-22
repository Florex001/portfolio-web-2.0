import React, {useEffect} from 'react'
import "./helpers/skills.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {items} from './helpers/skillsList'

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + (isMobile? 3 :5)
  );
  

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => (
            <motion.div
              className="card"
              key={item.id}
              layout
              custom={{
                direction,
                position: () => {
                  if (item === visibleItems[0]) {
                    return "left";
                  } else if (isMobile? item === visibleItems[1]: item === visibleItems[2] ) {
                    return "center";
                  } else {
                    return "right";
                  }
                }
              }}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1 }}
            >
              <img src={item.image} alt={`Kép ${item.id}`} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position()];
}