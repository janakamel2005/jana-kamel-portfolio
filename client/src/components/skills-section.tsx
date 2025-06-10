export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: "fas fa-code",
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "Web Development", level: 75 }
      ]
    },
    {
      title: "Embedded & Systems",
      icon: "fas fa-microchip",
      skills: [
        { name: "STM32 Microcontrollers", level: 80 },
        { name: "Embedded Systems", level: 85 },
        { name: "Computer Architecture", level: 75 }
      ]
    },
    {
      title: "Cloud & AI",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS Cloud Services", level: 70 },
        { name: "Machine Learning", level: 65 },
        { name: "AWS DeepRacer", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-portfolio-secondary max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-portfolio-primary text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center">
                      <span className="text-portfolio-secondary">{skill.name}</span>
                      <span className="text-sm text-portfolio-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-portfolio-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
