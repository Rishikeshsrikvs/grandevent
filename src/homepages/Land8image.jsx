import React from 'react';
import './Land8image.css';

import l1 from './../assets/land/landsub/l1.png';
import l2up from './../assets/land/landsub/l2up.png';
import l3down from './../assets/land/landsub/l3down.png';
import l4 from './../assets/land/landsub/l4.png';
import l21 from './../assets/land/landsub/l21.png';
import l22 from './../assets/land/landsub/l22.png';
import l31 from './../assets/land/landsub/l31.png';
import l32 from './../assets/land/landsub/l32.png';

const Land8image = () => {
  return (
    <div className="land8main">
      <h1 className='land4title'>GRAB THE MOMENTS</h1>
      <div className="l8con">
        <div className="l81">
          <img src={l1} alt="Large Image" />
        </div>
        <div className="l82">
          <div className="l82up">
            <img src={l2up} alt="Small Image 1" />
          </div>
          <div className="l82down">
            <div className='l82left'>
              <img src={l22} alt="Small Image 2" />
            </div>
            <div className='l82right'>
              <img src={l21} alt="Small Image 3" />
            </div>
          </div>
        </div>
        <div className="l83">
          <div className="l83up">
            <div className='l83left'>
              <img src={l31} alt="Small Image 4" />
            </div>
            <div className='l83right'>
              <img src={l32} alt="Small Image 5" />
            </div>
          </div>
          <div className="l83down">
            <img src={l3down} alt="Small Image 6" />
          </div>
        </div>
        <div className="l84">
          <img src={l4} alt="Large Image 2" />
        </div>
      </div>
    </div>
  );
}

export default Land8image;
