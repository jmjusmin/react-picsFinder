import React, { useRef, useEffect, useState } from 'react';

function ImageCard({ image }) {
  const { description, urls } = image;
  const [spans, setSpans] = useState(0);

  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.addEventListener('load', setSpan);
  });

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
