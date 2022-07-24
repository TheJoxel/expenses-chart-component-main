import { useState } from 'react';
import './App.css';
import {data} from './data'

function App() {
  
  const [showTooltip, setShowTooltip] = useState("");
  let dayName = new Date().toLocaleDateString('en-us', { weekday:"short"})
  

  const tooltip = (index,action) => {
    if ( action === 1){
      setShowTooltip(()=> {
        return{[index]:true}
      })
    } else if ( action === 2){
      setShowTooltip(()=> {
        return{[index]:false}
      })
    }
    
  }

  return (
    <div className="wrapper">
      <div className='wrapper-card'>

        <div className='setion-header'>
          <div className='info-header'>
            <h1 className="title">My balance</h1>
            <p className="price-title">$921.48</p>
          </div>
            <div className="circles"></div>
            <div className="circles1"></div>
        </div>

        <div className='setion-body'>
          <h2 className="title-body">Spending - Last 7 days</h2>
          
          <div className='container-bars'>
            <div className="bars">
              <div className="bars-card">
                {data.map((item, index)=> {
                  return(
                    <div key={index}>
                    {showTooltip[index] && <div className='tooltip'>{item.amount}</div>}
                    <div className={`bars-day ${dayName.toLowerCase() === item.day ? "color-two" : "color-one"}`} 
                    style={{height:item.amount*3}} 
                    onMouseEnter={() => tooltip(index,1)}
                    onMouseLeave={() => tooltip(index,2)}
                    ></div>
                    </div>
                  )
                })}                
              </div>
              <div className="bars-card">
                  {data.map((item, index)=> {
                    return(
                      <p key={index}>{item.day}</p>
                    )
                  })}      
              </div>
            </div>
          </div>
          
          <div className='setion-footer'>
            <div className="separator"></div>
            <p className="price-footer-title">Total this month</p>
            <div className="price-footer-container">
              <div className="price-footer"><p>$478.33</p></div>
              <div className="price-footer-percentage">
                <p className="percentage">+2.4%</p>
                <p>from last month</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
