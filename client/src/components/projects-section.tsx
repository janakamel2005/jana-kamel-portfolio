export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "🪐 UniVerse – Web App for International Students",
      description: "A personal project close to my heart. I designed and built UniVerse — a web-based dashboard to help international students stay organized, focused, and less alone. It includes smart reminders, notes, resources, and a clean user experience. Still in progress, but it already reflects everything I value: empathy, structure, and creativity.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["Web Development", "Dashboard Design", "UX/UI"],
      demoUrl: "#",
      codeUrl: "#",
      period: "May 2025 – Present"
    },
    {
      id: 2,
      title: "🚀 BEARS Rocket Project – TU Berlin",
      description: "I'm part of the software team, working on the embedded C++ code that runs on STM32 microcontrollers. My main focus is programming and integrating sensors for the rocket's flight system. This project pushed me beyond the classroom into real-world engineering — where every line of code has altitude attached to it.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["C++", "STM32", "Embedded Systems"],
      demoUrl: "#",
      codeUrl: "#",
      period: "Since May 2025"
    },
    {
      id: 3,
      title: "💻 MIPS Processor Design",
      description: "Designed core control logic & datapath at TU Berlin. This project deepened my understanding of computer architecture and low-level programming, combining theoretical knowledge with practical implementation.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["Computer Architecture", "Logic Design", "Hardware"],
      demoUrl: "#",
      codeUrl: "#",
      period: "TU Berlin"
    }
  ];

  const viewProject = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const viewCode = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                {project.period && (
                  <p className="text-portfolio-accent text-sm font-medium mb-2">{project.period}</p>
                )}
                <p className="text-portfolio-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-portfolio-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => viewProject(project.demoUrl)}
                    className="text-portfolio-primary hover:text-blue-600 font-medium"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </button>
                  <button
                    onClick={() => viewCode(project.codeUrl)}
                    className="text-portfolio-secondary hover:text-slate-900 font-medium"
                  >
                    <i className="fab fa-github mr-1"></i>View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border-2 border-portfolio-primary text-portfolio-primary font-semibold rounded-lg hover:bg-portfolio-primary hover:text-white transition-colors duration-200">
            <i className="fas fa-plus mr-2"></i>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
