export default function EducationSection() {
  const education = [
    {
      degree: "Computer Engineering",
      institution: "TU Berlin",
      period: "Current",
      description: "Studying Computer Engineering with focus on software development, embedded systems, and computer architecture. Active in university projects including rocket development and processor design.",
      type: "education"
    },
    {
      degree: "AWS DeepRacer Student Member",
      institution: "Amazon Web Services",
      period: "Current",
      description: "Member of AWS DeepRacer student program, exploring machine learning and autonomous vehicle technology through hands-on racing competitions and workshops. Gaining experience in reinforcement learning, cloud computing, and AI model optimization.",
      type: "certification"
    },
    {
      degree: "Egyptian Math Olympiad",
      institution: "Egypt",
      period: "2020",
      description: "Honorable mention - where I discovered how much I enjoy hard problems and analytical thinking.",
      type: "achievement"
    }
  ];

  const events = [
    {
      name: "☁️ AWS Summit Hamburg",
      role: "Attendee",
      date: "June 2025",
      description: "I attended talks, workshops, and networking sessions with top industry minds. It wasn't just about cloud computing — it was about believing in where I can go, and who I can become. These kinds of events give me both inspiration and direction."
    },
    {
      name: "🧠 AWS GameDay Workshop",
      role: "Participant",
      date: "TU Berlin",
      description: "A team-based challenge in cloud problem-solving and system thinking. We had to think fast, collaborate smart, and use tools we barely knew — exactly the kind of growth I chase."
    },
    {
      name: "🐍 Python Guessing Game",
      role: "Developer",
      date: "Early Learning",
      description: "Simple Python logic game I built early on to learn input/output. A foundational project that sparked my love for programming and problem-solving."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Education & Events</h2>
          <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
            My academic background and professional development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-portfolio-primary mr-3"></i>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                    item.type === 'certification' ? 'bg-portfolio-accent' : 
                    item.type === 'achievement' ? 'bg-yellow-500' : 'bg-portfolio-primary'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{item.degree}</h4>
                    <p className={`font-medium ${
                      item.type === 'certification' ? 'text-portfolio-accent' : 'text-portfolio-primary'
                    }`}>
                      {item.institution}
                    </p>
                    <p className="text-portfolio-secondary text-sm mb-2">{item.period}</p>
                    {item.description && (
                      <p className="text-portfolio-secondary">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Events Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
              <i className="fas fa-calendar-alt text-portfolio-primary mr-3"></i>
              Professional Events
            </h3>
            
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-portfolio-accent rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{event.name}</h4>
                    <p className="text-portfolio-accent font-medium">{event.role}</p>
                    <p className="text-portfolio-secondary text-sm mb-2">{event.date}</p>
                    <p className="text-portfolio-secondary">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
