import React, { useEffect, useRef, useState } from "react";

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    imageRef.current.addEventListener("load", calcSpans);
  }, []);

  const calcSpans = () => {
    const height = imageRef.current && imageRef.current.clientHeight;
    const numSpans = Math.ceil(height / 10);
    setSpans(numSpans);
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
