export default function AboutSection() {
  const openLinkedIn = () => window.open("https://linkedin.com/in/jana-kamel", "_blank");
  const openGitHub = () => window.open("https://github.com/jana-kamel", "_blank");
  const openTwitter = () => window.open("https://twitter.com/jana_kamel", "_blank");

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
              I'm Jana Kamel, a Computer Engineering student at TU Berlin — but my journey began in Egypt, where I became the first in my family to study abroad and pursue engineering. Leaving home and family behind wasn't easy, but I made that choice because I believe in something bigger: learning, growing, and challenging myself among the best.
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              I chose this path because I'm passionate about technology — and because I believe it's the future. But beyond that, I'm deeply motivated by personal growth. Every new challenge is a chance to level up. That's why I'm always seeking new experiences and pushing myself — not just to compete, but to become better than I was yesterday.
            </p>
            <p className="text-portfolio-secondary leading-relaxed">
              In my free time, I like to read, journal, move my body through sports — or give myself TED Talks in the mirror (yes, really). It keeps me grounded, focused, and always dreaming forward. I'm ambitious, yes. But more than anything, I'm passionate — about learning, building, and becoming the kind of person who makes an impact.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-map-marker-alt text-portfolio-primary mr-2"></i>
                Berlin, Germany
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-envelope text-portfolio-primary mr-2"></i>
                jana.kamel@example.com
              </h4>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                <i className="fas fa-graduation-cap text-portfolio-primary mr-2"></i>
                TU Berlin Student
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
