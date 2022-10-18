import React, { useRef, useEffect, useState } from 'react';

function ImageCard({ image }) {
  const { description, urls } = image;
  const [spans, setSpans] = useState(0);

  //useRef to find when img load from api
  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.addEventListener('load', setSpan);
  });

  //set a sapn when img height
  const setSpan = () => {
    const height = imgRef.current.clientHeight;
    const calSpan = Math.ceil(height / 10);

    setSpans(calSpan);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
