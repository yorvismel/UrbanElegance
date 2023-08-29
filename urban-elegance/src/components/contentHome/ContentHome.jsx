import React from 'react';
import './ContentHome.css';


const ContentHome = () => {
  return (
    <div className="content-home">
      <div className="left-section">
        
        <div className="images-grid">
          
          <div className="image">
            
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ipod/ipodtouch/ipod-touch-7th-gen.jpg" alt="Imagen 1" />
          </div>
          <div className="image">
            <img src="https://http2.mlstatic.com/D_NQ_NP_888070-MCO45824573522_052021-O.webp" alt="Imagen 2" />
          </div>
          
          <div className="image">
            <img src="https://http2.mlstatic.com/D_NQ_NP_938092-MLA45480677826_042021-O.webp" alt="Imagen 3" />
          </div>
          <div className="image">
            <img src="https://www.apple.com/co/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png" alt="Imagen 4" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="full-image">
        
          <img  src="https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxvJTIwZGUlMjByb3BhfGVufDB8fDB8fHww&w=1000&q=80" alt="Imagen Completa" />
          <button className="buy-button">Comprar</button>
        </div>
      </div>
      
    </div>
    
  );
}

export default ContentHome;
