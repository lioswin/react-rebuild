const Card = (props) => {
    const {title,title2,description}=props
    return ( 
        <div className="areastaff">
              <div className="image-staff1">
                <image src="./images/team-1.jpg"/>
              </div>
              <div className="staffcontent">
                  <h3>{title}</h3>
                  <h5>{title2}</h5>
                <p>{description}</p>
            </div>
            </div>
     );
}
 
export default Card;