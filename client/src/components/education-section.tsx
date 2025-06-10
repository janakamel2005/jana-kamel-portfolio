export default function EducationSection() {
  const education = [
    {
      degree: "Your Degree Title",
      institution: "Your University/School",
      period: "Start Year - End Year",
      description: "Add details about your degree, specialization, achievements, or relevant coursework.",
      type: "education"
    },
    {
      degree: "Another Degree (if applicable)",
      institution: "Institution Name",
      period: "Start Year - End Year",
      description: "Describe your academic achievements, honors, or relevant projects.",
      type: "education"
    },
    {
      degree: "Your Certification",
      institution: "Certifying Organization",
      period: "Year Obtained",
      description: "",
      type: "certification"
    }
  ];

  const events = [
    {
      name: "Your Conference/Event 1",
      role: "Your Role (Speaker, Attendee, etc.)",
      date: "Month Year",
      description: "Describe what you did at this event, what you presented, or what you learned."
    },
    {
      name: "Your Conference/Event 2", 
      role: "Your Role",
      date: "Month Year",
      description: "Share details about your participation and any notable achievements or connections."
    },
    {
      name: "Your Conference/Event 3",
      role: "Your Role",
      date: "Month Year",
      description: "Highlight your contributions or key takeaways from this professional event."
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
                    item.type === 'certification' ? 'bg-portfolio-accent' : 'bg-portfolio-primary'
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
