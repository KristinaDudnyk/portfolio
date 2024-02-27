import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image: "/images/project-tbm.png",
      alt: "project2",
      name: "TheBigMouth",
      description:
        "The demo version of the video streaming platform was built for the external client, the charity organization TheBigHouse Theater. The platform allows users to check the latest performances of the art team and share their own video content with the community. The website is hosted on AWS and supported by IAM, S3, DynamoDB, API Gateway, and Lambda services. ",
      githubLink: "https://github.com/Bedi06/thebigmouth/tree/main/src",
      demoLink: "https://www.hackyourfuture.co.uk/",
      tools: ["Auth0", "AWS", "React.js", "HTML", "CSS", "MUI"],
    },
    {
      image: "/images/project-deja.png",
      alt: "project1",
      name: "DEJA Spaced Repetition",
      description:
        "The team project. Nurtured from an idea to a real fully working web app. DEJA helps students organise their learning journey and helps build long-term memory through a system called spaced repetition. Spaced repetition is an evidence-based learning technique has been proven to increase the rate of learning.",
      githubLink:
        "https://github.com/Abubakar-Meigag/FinalProject-DejaReview-teamUnity-Ldn10",
      demoLink: "https://fp-deja-review-frontend.onrender.com/",
      tools: ["React.js", "HTML", "CSS", "Supabase", "NODE.js"],
    },

    {
      image: "/images/project-mp.png",
      alt: "project1",
      name: "MyPlayList",
      description:
        "I’m personally using this app to listen to music when I’m going to work. For free, avoiding ADs from YouTube. The most loved feature is that the video will continue to play with a turned-down screen :D The database is hosted on SUPABASE, and the server side is built as a RESTful API on NODE.js.",
      githubLink: "https://fp-deja-review-frontend.onrender.com/",
      demoLink: "https://main--kristinadudnyk-fullstack-project.netlify.app/",
      tools: ["React.js", "HTML", "CSS", "Supabase", "NODE.js", "REST API"],
    },
  ];
  return (
    <div className="projects" id="projects">
      {projects.map((project) => (
        <div className="project-container">
          <div className="project-image-container">
            <img
              className="project-image"
              src={project.image}
              alt={project.alt}
              width={550}
            />
            <div className="project-links-container">
              <a
                className="project-link"
                href={project.demoLink}
                rel="noreferrer"
                target="_blank"
              >
                DEMO
              </a>
              <a
                className="project-link"
                href={project.githubLink}
                rel="noreferrer"
                target="_blank"
              >
                CODE
              </a>
            </div>
          </div>
          <div className="project-info-container">
            <div className="project-description-container">
              <h1 className="project-name">{project.name}</h1>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tools-container">
              {project.tools.map((tool) => (
                <button className="project-tool-button">{tool}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
