const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#work">Our works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

// make this component use Link and routes  instead of a tags