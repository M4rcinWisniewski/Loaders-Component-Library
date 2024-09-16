import React from 'react';
type propsType = {
    lineSize?: string
    color?: string
    track?: string
}
const Line: React.FC<propsType> = ({lineSize, color, track}) => {
    return (
      <div className={`h-1 relative overflow-hidden rounded-[20px]`} style={{width: lineSize || '10vw', background: track || 'white'}}>
        <div className="absolute inset-0 h-full animate-horizontalLoader " style={{ background: color || 'blue', borderRadius: '20px'}}></div>
      </div>
    );
  };

export default Line;
