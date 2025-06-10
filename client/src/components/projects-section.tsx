export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Your Project Title 1",
      description: "Describe your first project here. What problem did it solve? What technologies did you use? What were the key features and achievements?",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Technology 1", "Technology 2", "Technology 3"],
      demoUrl: "https://your-project-demo.com",
      codeUrl: "https://github.com/your-username/project-1"
    },
    {
      id: 2,
      title: "Your Project Title 2",
      description: "Describe your second project here. Focus on the challenges you overcame and the impact it had.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Technology A", "Technology B", "Technology C"],
      demoUrl: "https://your-project-demo2.com",
      codeUrl: "https://github.com/your-username/project-2"
    },
    {
      id: 3,
      title: "Your Project Title 3",
      description: "Describe your third project here. Highlight what makes this project unique and showcase your skills.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Tech X", "Tech Y", "Tech Z"],
      demoUrl: "https://your-project-demo3.com",
      codeUrl: "https://github.com/your-username/project-3"
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
