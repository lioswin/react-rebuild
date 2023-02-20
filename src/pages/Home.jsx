import Navigation from "../components/Navigation";
import Social from "../components/Social";

const Home = () => {
    return ( 
      <section className="home" id="home">
        <div className="content">
          <div className="top">
           <div className="intro-logo"> 
            <image src=""/>   
           </div>
           <Navigation/>
          </div>
          <div className="below">
            <div className="textwrapper">
             <h1>
               Nice to
               <br/>
               meet you
             </h1>
             <p className="headline-text">
               We are preparing something amazing and exciting for you. Special surprise for our subscribers only.
             </p>
            <a href="www">Notify Me</a>
            </div>
           <Social/>
          </div>
        </div>
        <div className="image">
          <span>
            <b className="larger">137</b>Days to launch
           </span>
         </div>
      </section>
    );
}
 
export default Home;