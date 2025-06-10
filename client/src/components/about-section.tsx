export default function AboutSection() {
  const openLinkedIn = () => window.open("https://linkedin.com", "_blank");
  const openGitHub = () => window.open("https://github.com", "_blank");
  const openTwitter = () => window.open("https://twitter.com", "_blank");

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
            My journey in technology and design
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">My Story</h3>
            <p className="text-portfolio-secondary leading-relaxed">
              I started my journey in technology over 5 years ago when I discovered my passion for creating 
              digital solutions that make a real impact. What began as curiosity about how websites work has 
              evolved into a comprehensive skill set spanning full-stack development and user experience design.
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              Today, I specialize in building scalable web applications using modern technologies like React, 
              Node.js, and cloud platforms. I believe in the power of combining technical expertise with design 
              thinking to create products that are not only functional but also delightful to use.
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or sharing knowledge with the developer community through blogs and speaking engagements.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-map-marker-alt text-portfolio-primary mr-2"></i>
                San Francisco, CA
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-envelope text-portfolio-primary mr-2"></i>
                john.smith@email.com
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-phone text-portfolio-primary mr-2"></i>
                +1 (555) 123-4567
              </h4>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={openLinkedIn}
                className="flex items-center justify-center w-12 h-12 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button
                onClick={openGitHub}
                className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <i className="fab fa-github"></i>
              </button>
              <button
                onClick={openTwitter}
                className="flex items-center justify-center w-12 h-12 bg-portfolio-accent text-white rounded-lg hover:bg-sky-400 transition-colors duration-200"
              >
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
