export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Your Skill Category 1",
      icon: "fas fa-code",
      skills: [
        { name: "Your Skill 1", level: 90 },
        { name: "Your Skill 2", level: 85 },
        { name: "Your Skill 3", level: 95 }
      ]
    },
    {
      title: "Your Skill Category 2",
      icon: "fas fa-server",
      skills: [
        { name: "Your Skill 4", level: 80 },
        { name: "Your Skill 5", level: 90 },
        { name: "Your Skill 6", level: 85 }
      ]
    },
    {
      title: "Your Skill Category 3",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "Your Skill 7", level: 85 },
        { name: "Your Skill 8", level: 90 },
        { name: "Your Skill 9", level: 95 }
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
