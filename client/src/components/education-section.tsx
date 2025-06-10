export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2019 - 2021",
      description: "Specialized in Machine Learning and Web Technologies. Thesis on \"Optimizing User Experience in Web Applications through AI-driven Personalization.\"",
      type: "education"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "UC Berkeley",
      period: "2015 - 2019",
      description: "Graduated Magna Cum Laude. Focus on full-stack development and software architecture. Active member of the Computer Science Club.",
      type: "education"
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2022",
      description: "",
      type: "certification"
    }
  ];

  const events = [
    {
      name: "React Conf 2023",
      role: "Speaker",
      date: "October 2023",
      description: "Presented \"Building Scalable React Applications\" to 500+ developers. Discussed best practices for component architecture and state management."
    },
    {
      name: "TechCrunch Disrupt 2023",
      role: "Attendee",
      date: "September 2023",
      description: "Networked with industry leaders and explored emerging technologies in AI and blockchain development."
    },
    {
      name: "Google I/O 2023",
      role: "Workshop Leader",
      date: "May 2023",
      description: "Led hands-on workshop on \"Progressive Web Apps with Modern JavaScript\" for 100+ participants."
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
