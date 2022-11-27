import "./Welcome.css"

import hero_img from '../Assests/hero_image.png'
import hand from '../Assests/Hamburger_icon.png'
import jsPDF from 'jspdf';

export function Welcome(){
  function onClick(){
    const doc = new jsPDF();

   
    var elementHTML = document.querySelector("#contnet");

    doc.html(elementHTML, {
        callback: function(doc) {
            // Save the PDF
            doc.save('sample-document.pdf');
        },
        margin: [10, 10, 10, 10],
        x: 20,
        y: 10,
        width: 200, //target width in the PDF document
        windowWidth: 650 //window width in CSS pixels
    });}

     return(
        <>
        <div className="top-style"></div>
        <div className="hero-container" id="contnet">
        
        <nav className="nav-bar">
              <h3 className="logo">LB⚡</h3>
              <img src={hand} className="hand"/>
              <ul className="ul-list hide" >
                <l1 className="ul-items">HOME</l1>
                <l1 className="ul-items">BILLING</l1>
                <l1 className="ul-items">CONTACT</l1>
              </ul>
        </nav>

        {/* hero-section */}
        <section className="hero-section">
            <div className="hero-content-container">
             <div className="afterEffects"><img src={hero_img} className="hero_image"></img></div>
              
             <div className="hero-content">
               <h2 className="hero-heading">Ready to <br/>Calculate</h2>
               <p  className="hero-content-1">calculating bill is easy with lb⚡</p>
                <button className="btn btn-hero">Get Started</button>
            </div> 
            </div>  
            {/* <div className="top-style"></div> */}
        </section>
        <button onClick={onClick}>
  Activate Lasers
</button>

        </div>
        
        </>
     )
}
