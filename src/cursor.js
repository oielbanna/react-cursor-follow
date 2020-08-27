import React, { useLayoutEffect, useState } from "react";

const base = {
  "pointer-events": "none",
  "user-select": "none",
  display: "block",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "border-radius": "100%",
  "z-index": 10000,
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.8) translate(-50%, -50%)"
    },
    "50%": {
      transform: "scale(1) translate(-50%, -50%)"
    },
    "100%": {
      transform: "scale(0.8) translate(-50%, -50%)"
    }
  },
  "@media only screen and (max-width: 700px)": {
    "#cursor": {
      display: "none"
    }
  }
};
const Cursor = ({
  pulse = false,
  size = 23,
  hollow = false,
  color = "lightblue",
  opacity = 1,
  easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  duration = 0.4,
  custom = false,
  ...rest
}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useLayoutEffect(() => {
    document.onmousemove = (event) => {
      var e = event;
      setX(e.clientX);
      setY(e.clientY);
    };
  });

  const styles = {
    ...base,
    animation: pulse ? "pulse 2s infinite" : null,
    "background-color": hollow ? "transparent" : color,
    border: hollow ? "1px solid " + color : null,
    opacity: opacity,
    width: size + "px",
    height: size + "px",
    top: y,
    left: x,
    "transition-timing-function": easing,
    "transition-duration": duration + "s"
  };
  return <div id="cursor" {...rest} style={!custom ? styles : null} />;
};

export default Cursor;
