const skills = [
  {
    category: "Languages",
    items: [
      { name: "Rust", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "Go", level: 75 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Systems & Tools",
    items: [
      { name: "Linux", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Git", level: 95 },
      { name: "TUI Development", level: 90 },
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "GitHub Followers", value: "32" },
  { label: "Open Source Projects", value: "80+" },
  { label: "Technologies Mastered", value: "15+" },
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 glass-card rounded-2xl hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            From low-level systems programming to modern web development, I
            bring a diverse skill set to every project.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="glass-card rounded-2xl p-6"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
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
