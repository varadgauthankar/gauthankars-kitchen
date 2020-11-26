import React from "react";

const Direction = () => {
  const url = "https://goo.gl/maps/fAV3DYTNNuNdhtUN8";
  global.window && (global.window.location.href = url);
};

export default Direction;
