import React from 'react';
import Experience from './Experience';
import Education from './Education';

const about = () => {
  return (
    <div className="about">
      <div className="about-content" style={{width: '40%', float:"left"}}>
        {/* <Education/>
      </div>
      <div className="about-content" style={{width: '60%', float:"right"}}>
        <Experience /> */}
      </div>
    </div>
  )
}

export default about;