import Title from "../components/Title";


const Contact = () => {
    return ( 
        <section className="contact" id="contact">
        <div className="map">
          </div>
        <div className="sample">
        <Title
        title="Get in touch"
        titleSmall="Welcome to our"
        titleItallic="office"
        paragraph="I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different . But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!"
        />
        {/* some chnages needed here to fit in tags using jsx */}
          <div className="wrapper-image">

           <div className="areastaff">
             <div className="image-staff1">
               <image src="./images/team-1.jpg"/>
             </div>
             <div className="staffcontent">
               <div>
                 <h3>Alot of words</h3>
                 <h5>work role</h5>
               </div>
               {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere massa.</p> --> */}
           </div>
           </div>

           <div className="areastaff">
             <div className="image-staff1">
               <image src="./images/team-1.jpg"/>
             </div>
             <div className="staffcontent">
               <div>
                 <h3>will finish</h3>
                 <h5>work role</h5>
               </div>
               {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere massa.</p> --> */}
           </div>
           </div>

          </div>
       </div>
       </section>
     );
}
 
export default Contact;