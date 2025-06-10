export default function ContactSection() {
  const sendEmail = () => {
    window.location.href = "mailto:jana.kamel@example.com";
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/api/download-cv';
    link.download = 'Jana_Kamel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLinkedIn = () => window.open("https://linkedin.com/in/jana-kamel", "_blank");
  const openGitHub = () => window.open("https://github.com/jana-kamel", "_blank");
  const openTwitter = () => window.open("https://twitter.com/jana_kamel", "_blank");

  return (
    <section id="contact" className="py-20 bg-portfolio-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's connect and discuss 
          how we can create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={sendEmail}
            className="inline-flex items-center px-8 py-3 bg-white text-portfolio-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <i className="fas fa-envelope mr-2"></i>
            Send Email
          </button>
          <button
            onClick={downloadCV}
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-portfolio-primary transition-colors duration-200"
          >
            <i className="fas fa-download mr-2"></i>
            Download CV
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <button
            onClick={openLinkedIn}
            className="text-white hover:text-blue-200 transition-colors duration-200"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </button>
          <button
            onClick={openGitHub}
            className="text-white hover:text-blue-200 transition-colors duration-200"
          >
            <i className="fab fa-github text-2xl"></i>
          </button>
          <button
            onClick={openTwitter}
            className="text-white hover:text-blue-200 transition-colors duration-200"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
