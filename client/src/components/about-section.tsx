export default function AboutSection() {
  const openLinkedIn = () => window.open("https://linkedin.com/in/your-profile", "_blank");
  const openGitHub = () => window.open("https://github.com/your-username", "_blank");
  const openTwitter = () => window.open("https://twitter.com/your-handle", "_blank");

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
              Write your professional journey here. How did you get started in your field? What sparked your 
              interest and passion? This is where you tell your unique story.
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              Describe your current expertise and what you specialize in. What technologies do you work with? 
              What's your approach to work and what makes you unique?
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              Share what you do outside of work, your interests, and how you stay current in your field. 
              This helps visitors connect with you on a personal level.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-map-marker-alt text-portfolio-primary mr-2"></i>
                Your City, Country
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-envelope text-portfolio-primary mr-2"></i>
                your.email@example.com
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-phone text-portfolio-primary mr-2"></i>
                Your Phone Number
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
