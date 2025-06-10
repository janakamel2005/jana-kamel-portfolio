export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a');
    link.href = '/api/download-cv';
    link.download = 'John_Smith_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm <span className="text-portfolio-primary">John</span>
              <br />
              <span className="text-portfolio-secondary text-2xl lg:text-4xl font-medium">
                Software Developer & Designer
              </span>
            </h1>
            <p className="text-lg text-portfolio-secondary mb-8 max-w-2xl">
              Passionate about creating exceptional digital experiences through clean code and thoughtful design. 
              I specialize in full-stack development and user interface design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-3 bg-portfolio-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <i className="fas fa-folder-open mr-2"></i>
                View My Work
              </button>
              <button
                onClick={downloadCV}
                className="inline-flex items-center px-8 py-3 border-2 border-portfolio-primary text-portfolio-primary font-semibold rounded-lg hover:bg-portfolio-primary hover:text-white transition-colors duration-200"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Professional headshot"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
