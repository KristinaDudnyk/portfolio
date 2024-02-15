// import transition from "../transition";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-info-container">
        <h1 className="hero-heading">
          Hi there
          <br />
          I'm Kristina
        </h1>
        <p className="hero-p">
          A <span className="hero-span">Software Developer</span> based in
          London / Cambridge.
          <br />
          Clean, elegant and efficient code that I write, makes me genuinely
          happy!
        </p>
        <div className="hero-image-container"></div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            src="/images/image-of-me.jpg"
            alt="here should be me"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// export default transition(Hero);
//const WrappedHome = transition(Home)

// export default WrappedHome
