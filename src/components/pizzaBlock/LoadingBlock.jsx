import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return(
    <ContentLoader
    className='pizza-block'
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="125" />
      <rect x="0" y="272" rx="0" ry="0" width="280" height="24" />
      <rect x="0" y="312" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="421" rx="0" ry="0" width="78" height="25" />
      <rect x="135" y="411" rx="20" ry="20" width="144" height="43" />
    </ContentLoader>
  );
}

export default LoadingBlock