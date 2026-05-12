import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
   id: 1,
    title: "Video Calling & Chat App",
    description: "A scalable video calling and communication platform with secure authentication, messaging, and real-time communication features.",
    image: "/projects/project8.jpeg",
    tags: ["React.js", "Node.js", "WebRTC", "Socket.io"],
    githubUrl: "https://github.com/Pragya-229",
  },
  {
     id: 2,
    title: "AI Interview Preparation Platform",
    description: "An AI-powered interview preparation platform featuring resume analysis, ATS optimization, AI-generated interview questions, and skill-gap detection.",
    image: "/projects/project3.jpeg",
    tags: ["React.js", "Node.js", "MongoDB", "Gemini AI", "Puppeteer"],
    githubUrl: "https://github.com/Pragya-229",
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "A responsive currency converter application using real-time exchange rate APIs for accurate currency conversion.",
    image: "/projects/project6.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/Pragya-229",
  },
  {
  id: 4,
  title: "Dice Game",
  description: "A fun dice rolling game built with JavaScript to generate random outcomes.",
  image: "/projects/project4.jpeg",
  tags: ["HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/Pragya-229/DiceGame",
},
  {
    id: 5,
    title: "ISL Sign Language Converter App",
    description: "A React Native app that detects hand signs and converts them into ISL letters.",
    image: "/projects/project5.webp",
    tags: ["React Native", "Teachable Machine", "Camera API"],
    githubUrl: "https://github.com/Pragya-229/SignLanguageLearningApp",
  },
    
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Pragya-229"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
