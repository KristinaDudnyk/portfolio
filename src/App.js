"use client";
import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Loading from "./components/Loading";
// import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  // const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>
      <NavBar />
      <Home />
    </>
  );
};

export default App;

// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="container-adout">
//         <img
//           className="side"
//           src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
//           alt="my pfoto"
//         />
//         <div className="side">
//           <h1>Hi there</h1>
//           <h1>I'm Kristina Dudnyk</h1>
//           <p>
//             I am an ambitious software developer who has shown determination,
//             proactivity, and tenacity to reach where I am today. My inspiration
//             to work in technology is driven by the variety and constant
//             challenge that this sector provides. I particularly enjoy the self
//             learning aspect of coding. I am coming to the end of a year-long
//             intensive, full-stack web development programme and am looking for a
//             full-time developer position so I can bring my passion and skillset
//             to bear in the workplace.
//           </p>
//           <button>CONTACT ME</button>
//         </div>
//       </div>
//       <div className="project-container">
//         <img
//           src="src\images\project1.png"
//           alt="project1"
//           width={550}
//           className="side"
//         />
//         <div className="side">
//           <h1>DEJA-Space Repetition</h1>
//           <p>
//             The final graduation project was a way to demonstrate my knowledge
//             and capability. Under tight time constraint, we formulated an
//             Application concept and architecture. We conducted daily stand-ups
//             and sprint-planning adhering to Agile methodologies. We supported
//             one another to maintain team stability and efficacy. We stayed
//             organized: building a detailed plan and prioritising features. We
//             handled our disagreements professionally during weekly
//             retrospectives and made actionable steps preventing any workflow
//             disruption.
//           </p>
//           <a
//             href="https://fp-deja-review-frontend.onrender.com/"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <button>github repo</button>
//           </a>
//           <a
//             href="https://fp-deja-review-frontend.onrender.com/"
//             rel="noreferrer"
//             target="_blank"
//           >
//             <button>Demo</button>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
