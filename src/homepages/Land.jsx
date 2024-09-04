import React from 'react'
import  { useState } from 'react';
import { useEffect } from 'react';
import './Land.css';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import face from './../assets/land/face.png';
import insta from './../assets/land/instagram.png';
import ring from './../assets/land/ring.png';
import Whats from './../assets/land/whats.png';
import utube from './../assets/land/utube.png';
import lunch from './../assets/land/lunch.png';
import seemant from './../assets/land/seemantham.png';
import breakfast from './../assets/land/breakfast.png';
import dinner from './../assets/land/dinner.png';
import more from './../assets/land/more.png';
import land6 from './../assets/land/land6back.png';
import landpopupimage from './../assets/land/landpopup.png';
import l1 from './../assets/land/landsub/l1.png';
import l2up from './../assets/land/landsub/l2up.png';
import l3down from './../assets/land/landsub/l3down.png';
import l4 from './../assets/land/landsub/l4.png';
import l21 from './../assets/land/landsub/l21.png';
import l22 from './../assets/land/landsub/l22.png';
import l31 from './../assets/land/landsub/l31.png';
import l32 from './../assets/land/landsub/l32.png';
import Reelslider from './homecomponents/Reelslider';
import Registr from './homecomponents/Registr';
import Testimonials from './homecomponents/Testimonials';
import Getquote from './homecomponents/Getquote';
import Sendmessage from './homecomponents/Sendmessage';
const Land = () => {

  const [isImageVisible, setIsImageVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const closeImageOverlay = () => {
      setIsImageVisible(false);}
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className='landparent'>
       {isImageVisible && (
        <div className="popupimage-overlay" onClick={closeImageOverlay}>
          <div className="popupimage-container" onClick={(e) => e.stopPropagation()}>
            <button className="popupcloseimage-button" onClick={closeImageOverlay}>X</button>
            <img src={landpopupimage} alt="Sample" />
          </div>
        </div>
      )}
      <div className="land1main">
          <div className="land1textcon">
            <div className="land1left">
              <p className='land1leftp1'>Welcome To Grand Events A to Z Marriage Catering Services</p>
              <p className='land1leftp2'>BEST WEDDING CATERERS IN CHENNAI</p>
              <p className='land1leftp3'>FSSAI CERTIFIED COMPANY - ISO 9001 : 2015</p>

            </div>
            <Getquote/>
          </div>
          <div className="land1iconcon">
            <div className="land1iconleft">
              <img src={insta} alt="" onClick={() => window.open('https://www.instagram.com/grandeventscatering/', '_blank')} />
              <img src={face} alt="" onClick={() => window.open('https://www.facebook.com/GrandEvents.Chennai/', '_blank')}/>
              <img src={utube} alt="" onClick={() => window.open('https://www.youtube.com/@grandeventsatozmarriagecat8770', '_blank')}/>
              <img src={Whats} alt="" />
            </div>
            <div className="land1iconright">
              <span><img src={ring} alt="" /></span>
              <div className="land1contact">
                <div className='land1txt'>Feel free to contact us</div>
                <div className='land1num'>+91 7358121384 <br/>+91 7358121385</div>
              </div>
            </div>
          </div>
      </div>
      <div className="land2main">
          
          <h1 className='land2title'>OUR <span>MILESTONE</span></h1>
          <div className="land2cardcon">
            <div className="landcard">
              <h1 className='land2txt'>EVENTS</h1>
              <h1 className='land2num'>123+</h1>
            </div>
            <div className="landcard">
              <h1 className='land2txt'>EVENTS</h1>
              <h1 className='land2num'>123+</h1>
            </div>
            <div className="landcard">
              <h1 className='land2txt'>FEEDBACKS</h1>
              <h1 className='land2num'>1123+</h1>
            </div>
          </div>
      </div>
      <div className="land3testmain">
        <h1 className='land3title'>OUR <span>MILESTONE</span></h1>
        <Testimonials/>
        {isModalOpen && <Sendmessage toggleModal={toggleModal} />}
        <div className="land3wriereview"><button  onClick={toggleModal}>Write review</button></div>
      </div>
      <div className="land4main">
          <h1 className='land4title'>OUR <span>SERVICES</span></h1>
          <div className="land4titlesub">
            <p>OUR OFFERINGS</p>
            <h1>Passion for Celebration.</h1>
          </div>
          <div className="land4imagecon">
            <div onClick={()=>(navigate('/Cateringservice'))} className="l4left">
                <h1>CATERING SERVICES</h1>
            </div>
            <div className="l4right">
              <div className="l4rup">
                  <div className="lrup1" onClick={()=>(navigate('/Marriageservice'))}><h1>MARRIAGE SERVICES</h1></div>
                  <div className="lrup1"  onClick={()=>(navigate('/Menu'))}><h1>MENU</h1></div>
              </div>
              <div className="l4rdown"  onClick={()=>(navigate('/Services'))}>
                <h1>OUR SPEACIALITIES</h1>
              </div>
            </div>
          </div>
      </div>
      <div className="land5main">
      <h1 className='land4title'>OUR <span>FOOD MENU</span></h1>
        
        <p>The main objective of our organization is to cater a nutritious and hygenic food served at its best. We do catering service of all types starting from south indian dishes to completely typical north indian dishes. We do special services for the iyer, iyengars and all other communities with an special touch</p>
        <div className="land5con">
          <div className="land5cardmain">
            <div className="land5card">
              <div className="l5cardimg"><img src={breakfast} alt="" /></div>
              <p>BREAKFAST</p>
              <div  className="l5btn" onClick={()=>{ navigate('/menuview', { state: { menuType: 'breakfast' } })}}>VIEW MENU</div>
            </div>
          </div>
          <div className="land5cardmain">
            <div className="land5card">
              <div className="l5cardimg"><img src={lunch} alt="" /></div>
              <p>LUNCH</p>
              <div className="l5btn" onClick={()=>{ navigate('/menuview', { state: { menuType: 'lunch' } })}}>VIEW MENU</div>
            </div>
          </div>
          <div className="land5cardmain">
            <div className="land5card">
              <div className="l5cardimg"><img src={dinner} alt="" /></div>
              <p>DINNER</p>
              <div className="l5btn" onClick={()=>{ navigate('/menuview', { state: { menuType: 'dinner' } })}}>VIEW MENU</div>
            </div>
          </div>
          <div className="land5cardmain">
            <div className="land5card">
              <div className="l5cardimg"><img src={seemant} alt="" /></div>
              <p>SEEMANTHA SAPPADU</p>
              <div className="l5btn" onClick={()=>{ navigate('/menuview', { state: { menuType: 'seemantham' } })}}>VIEW MENU</div>
            </div>
          </div>
          <div className="land5cardmain">
            <div className="land5card">
              <div className="l5cardimg"><img src={more} alt="" /></div>
              <p>MORE</p>
              <div className="l5btn" onClick={()=>{ navigate('/menuview', { state: { menuType: 'differ' } })}}>MORE</div>
            </div>
          </div>
        </div>      
      </div>
      <div className="land6main">
          <img src={land6} alt="" />
      </div>
      <div className="land7utubecon">
      <iframe width="80%" height="90%" src="https://www.youtube.com/embed/InisDKvXU3o?si=k3TUk7dNeUL5djFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="land8main">
        <h1 className='land4title'>GRAP THE MOMENTS</h1>
        <div className="l8con">
          <div className="l81">
            <img src={l1} alt="" />
          </div>
          <div className="l82">
            <div className="l82up"> <img src={l2up} alt="" /></div>
            <div className="l82down">
                <div className='l82left'> <img src={l22} alt="" /></div>
                <div className='l82right'> <img src={l21} alt="" /></div>
            </div>
          </div>
          <div className="l83">
          <div className="l83up">
                <div className='l83left'> <img src={l31} alt="" /></div>
                <div className='l83right'> <img src={l32} alt="" /></div>
            </div>
            <div className="l83down"> <img src={l3down} alt="" /></div>
          </div>
          <div className="l84"> <img src={l4} alt="" /></div>
        </div>
      </div>
      <div className="land9main">
        <h1 className='land4title'>REELS</h1>
        <div className="l9con">
            <Reelslider/>
        </div>
        <div className="land3wriereview"><button onClick={() => window.open('https://www.instagram.com/grandeventscatering/', '_blank')}>
  FOR MORE FEEDS
</button></div>
      </div>
         
      <Registr/>
   </div>

  )
}

export default Land
