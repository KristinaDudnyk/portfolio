// import transition from "../transition";

const About = () => {
  return (
    <div className="container-about" id="about">
      <div className="item-about-1">
        <div className="item-about-2">
          <h1 className="greeting-h background-for-about">Hi there</h1>
          <h1 className="greeting-h background-for-about">I'm Kristina</h1>
          <p className="about-p background-for-about">
            A Software Developer based in London // Cambridge.
            <br />
            Clean, elegant and efficient code that I wrights, makes me genuinely
            happy
          </p>

          {/* <button>CONTACT ME</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;

// export default transition(About);
//const WrappedHome = transition(Home)

// export default WrappedHome
