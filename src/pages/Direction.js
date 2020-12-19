import React, { useEffect } from "react";

const Direction = () => {
  useEffect(() => {
    window.location.href = "https://goo.gl/maps/fAV3DYTNNuNdhtUN8";
  }, []);

  return <div>Loading...</div>;
};

export default Direction;
