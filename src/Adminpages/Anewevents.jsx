import React from 'react'
import './Anewevents.css';
const Anewevents = () => {
  return (
    <div className="adashmain">
        <h1>EVENTS / NEW EVENTS</h1>
        <div className="anewetcon">
            <form action="" className="anewetform">
                <div className="netin">
                    <div className="netinsub">
                        <label htmlFor="">EVENT NAME :</label>
                        <input type="text" />
                    </div>
                    <div className="netinsub">
                        <label htmlFor="">DATE :</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="netin">
                    <div className="netinsub">
                        <label htmlFor="">CLIENT NAME :</label>
                        <input type="text" />
                    </div>
                    <div className="netinsub">
                        <label htmlFor="">PLACE :</label>
                        <input type="text" />
                    </div>
                </div>
                    <div className="netin">
                        <h2>CATERING SERVICE</h2>
                    </div>
                    <div className="netinsub">
                        <label htmlFor="">PLACE :</label>
                        <input type="text" />
                    </div>
                    <div className="netin netincheckcon">
                        <div className="netcheck">
                            <label htmlFor="">BREAKFAST</label>
                            <input type="checkbox" />
                        </div>
                        <div className="netcheck">
                            <label htmlFor="">LUNCH</label>
                            <input type="checkbox" />
                        </div>
                        <div className="netcheck">
                            <label htmlFor="">DINNER</label>
                            <input type="checkbox" />
                        </div>
                        
                    </div>
                    <div className="netin netinbtncon">
                        <button>CREATE EVENT</button>
                    </div>
                
            </form>
        </div>
    </div>
  )
}

export default Anewevents
