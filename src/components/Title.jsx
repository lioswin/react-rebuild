
const Title = (props) => {
    const {title,titleSmall,titleItallic,paragraph} = props;
    return ( 
    <div className="area1">
    <a href="#home">arrow</a>
    <div>
      <h1>{title}</h1>
    </div>
    <div className="personal">
    <b>{titleSmall}</b> <i className="italic"> {titleItallic}</i>
    </div>
    <div className="paragraph">{paragraph}</div>
   </div> 
   );
}
 
export default Title;