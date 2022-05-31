import React, { useRef } from "react";
import poster1color from "./images/poster1.jpg";
import poster1BW from "./images/poster1-modified.jpg";
import poster2color from "./images/poster2.jpg";
import poster2BW from "./images/poster2-modified.jpg";
import "./style.css";

const Exercise21_3 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleChange = (ref, poster) => {
    ref.current.src = poster;
  };

  return (
    <div className="contain_img">
      <img
        ref={ref1}
        onMouseEnter={() => handleChange(ref1, poster1color)}
        onMouseOut={() => handleChange(ref1, poster1BW)}
        src={poster1BW}
        alt=""
      />
      <img
        ref={ref2}
        onMouseEnter={() => handleChange(ref2, poster2color)}
        onMouseOut={() => handleChange(ref2, poster2BW)}
        src={poster2BW}
        alt=""
      />
    </div>
  );
};

export default Exercise21_3;
