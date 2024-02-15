import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image: "/images/project-tbm.png",
      alt: "project2",
      name: "TheBigMouth",
      description:
        "I was given a fantastic opportunity to learn and apply modern Cloud Architecture and DevOps principles on a project for the charity organization TheBigHouse as part of a six-person team led by a professional Project Manager and Tech Lead. We harnessed the principles of DevOps, incorporating cultural philosophies such as collaboration, shared responsibility, and continuous learning. Using IAM, S3, DynamoDB, API Gateway, and Lambda. This approach significantly improved our developer’s ability to rapidly iterate and deliver the client a product that scaled effortlessly.",
      githubLink: "https://fp-deja-review-frontend.onrender.com/",
      demoLink: "https://fp-deja-review-frontend.onrender.com/",
      tools: ["React.js", "HTML", "CSS", "Supabase", "NODE.js"],
    },
    {
      image: "/images/project-deja.png",
      alt: "project1",
      name: "DEJA Space Repetition",
      description:
        "The final graduation project was a way to demonstrate my knowledge and capability. Under tight time constraint, we formulated an Application concept and architecture. We conducted daily stand-ups and sprint-planning adhering to Agile methodologies. We supported one another to maintain team stability and efficacy. We stayed organized: building a detailed plan and prioritising features. We handled our disagreements professionally during weekly retrospectives and made actionable steps preventing any workflow disruption.",
      githubLink: "https://fp-deja-review-frontend.onrender.com/",
      demoLink: "https://fp-deja-review-frontend.onrender.com/",
      tools: ["React.js", "HTML", "CSS", "Supabase", "NODE.js"],
    },

    {
      image: "/images/project-mp.png",
      alt: "project1",
      name: "MyPlayList",
      description:
        "The playlist app allows users to create and manage playlists by adding videos using their URLs. Users can conveniently gather and organize videos from various sources by simply inputting the URLs into the app. The app provides a user-friendly interface for creating and editing playlists, enabling users to customize their playlists according to their preferences. With the ability to add videos from different sources, the app offers flexibility and convenience.",
      githubLink: "https://fp-deja-review-frontend.onrender.com/",
      demoLink: "https://fp-deja-review-frontend.onrender.com/",
      tools: ["React.js", "HTML", "CSS", "Supabase", "NODE.js"],
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
                demo
              </a>
              <a
                className="project-link"
                href={project.githubLink}
                rel="noreferrer"
                target="_blank"
              >
                code
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
