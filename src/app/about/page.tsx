import { Layout } from "@/components/layout/Layout";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  ExternalLink,
  MapPin,
  Crown,
  Code,
  Trophy,
  Box,
  FileText,
} from "lucide-react";
import {
  SiRust,
  SiTypescript,
  SiReact,
  SiGo,
  SiPython,
  SiDocker,
  SiLinux,
} from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";

const timeline = [
  {
    year: "2020",
    title: "Started Programming Journey",
    description:
      "Began learning programming at age 10, with C# .net WinForms applications.",
  },
  {
    year: "2021",
    title: "Started learning Python and Web Development",
    description:
      "Began learning Python and web development, building my first fully coded applications.",
  },
  {
    year: "2022",
    title: "First Open Source Contributions",
    description:
      "Started contributing to open source projects and building my GitHub presence.",
  },
  {
    year: "2023",
    title: "Hacking tools",
    description:
      "Started building hacking tools and security-focused applications.",
  },
  {
    year: "2024",
    title: "Founded ORUS",
    description: "Created the orus-dev organization to house major projects.",
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    description:
      "Taking on freelance work and building products that make a difference.",
  },
];

export default function About() {
  const techStack = [
    { name: "Rust", icon: <SiRust />, color: "text-orange-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "React", icon: <SiReact />, color: "text-cyan-500" },
    { name: "Go", icon: <SiGo />, color: "text-cyan-400" },
    { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
    {
      name: "Java",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M8.717 18.555s-.922.561.641.721c1.882.24 2.885.2 4.969-.2a7.515 7.515 0 0 0 1.322.641c-4.688 2.004-10.62-.12-6.933-1.163zm-.6-2.605s-1.002.761.561.923c2.044.2 3.647.24 6.412-.32a2.445 2.445 0 0 0 .962.601c-5.651 1.683-11.982.16-7.935-1.202zm11.06 4.568s.681.561-.761 1.002c-2.685.803-11.261 1.043-13.665 0-.842-.36.761-.881 1.275-.961.521-.12.803-.12.803-.12-.922-.641-6.131 1.322-2.645 1.882 9.578 1.563 17.472-.681 14.987-1.803zM9.15 13.225s-4.368 1.043-1.563 1.402c1.202.161 3.566.12 5.771-.04 1.803-.16 3.608-.48 3.608-.48s-.641.281-1.082.561c-4.448 1.163-12.984.641-10.539-.561 2.084-1.002 3.807-.881 3.807-.881zm7.815 4.368c4.488-2.325 3.004-4.568.962-4.288-.36.08-.521.16-.521.16s.12-.24.401-.32c2.846-1.002 5.089 3.005-0.922 4.568 0 0 .04-.04.08-.12zm-7.373 6.332c4.328.28 10.94-.16 11.1-2.205 0 0-.32.803-3.566 1.402-3.687.681-8.255.6-10.94.16 0 0 .561.48 3.407.641z"
            fill="currentColor"
          />
          <path
            d="M14.247.001s2.485 2.525-2.364 6.332c-3.887 3.086-.881 4.848 0 6.853-2.285-2.044-3.927-3.848-2.805-5.53C10.72 5.17 15.249 3.975 14.247.001zm-1.275 11.501c1.163 1.322-.32 2.525-.32 2.525s2.966-1.523 1.605-3.407c-1.242-1.803-2.205-2.685 3.005-5.69 0 0-8.215 2.044-4.288 6.572z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "text-red-500",
    },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
    { name: "Linux", icon: <SiLinux />, color: "text-yellow-400" },
  ];

  const achievements = [
    {
      icon: <Trophy className="w-10 h-10 text-accent mx-auto" />,
      title: "Top GitHub Contributor in Albania",
      description:
        "Ranked #2 nationally based on commits, contributions, and repository activity.",
    },
    {
      icon: <Github className="w-10 h-10 text-accent mx-auto" />,
      title: "Contributor to 80+ Public Repositories",
      description:
        "Actively contributed code, bug fixes, and features to multiple open-source projects.",
    },
    {
      icon: <Box className="w-10 h-10 text-accent mx-auto" />,
      title: "Built & Deployed 3 Full-Stack Applications",
      description:
        "Completed end-to-end development projects using Next.js, React, and TypeScript.",
    },
    {
      icon: <FileText className="w-10 h-10 text-accent mx-auto" />,
      title: "Published Technical Guides & Documentation",
      description:
        "Authored clear technical documentation and tutorials in public repositories.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image/Avatar */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/103524696?v=4"
                    alt="Klesti Selimaj"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-foreground">Available</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Hey, I'm{" "}
                <span className="text-gradient-gold">Klesti Selimaj</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                A 16-year-old software engineer from Albania with 6+ years of
                experience. I'm passionate about building things that matter,
                from low-level systems to beautiful user interfaces.
              </p>
              <p className="text-muted-foreground mb-8">
                My journey started at age 10 when I had my first laptop (a Asus
                with pre installed endless linux), and since then I've been
                hooked on computers, but i didn't exactly know what programming
                was but i was doing it unconsciously, making winforms apps in c#
                with visual studio.
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Albania</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code className="w-4 h-4 text-accent" />
                  <span>6+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Crown className="w-4 h-4 text-accent" />
                  <span>@orus-dev</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/selimaj-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:ring-1 hover:ring-accent/30 transition-all"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/klesti-selimaj-7a0162343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:ring-1 hover:ring-accent/30 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.youtube.com/@0xkleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:ring-1 hover:ring-accent/30 transition-all"
                >
                  <Youtube className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/selimaj.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:ring-1 hover:ring-accent/30 transition-all"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://dev.to/selimaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-xl hover:ring-1 hover:ring-accent/30 transition-all"
                >
                  <ExternalLink className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Tools I Work With
            </h2>
            <p className="text-muted-foreground">
              A carefully curated set of technologies that I use to build
              exceptional products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card rounded-2xl p-6 text-center hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={cn("text-4xl mb-3 mx-auto w-max", tech.color)}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              My Achievements
            </h2>
            <p className="text-muted-foreground">
              Achievements earned through consistent contributions and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              My Story
            </h2>
            <p className="text-muted-foreground">
              From curious kid to entrepreneurial developer, here's how I got
              here.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative flex gap-6 pb-12 last:pb-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 w-0.5 h-[calc(100%-2.5rem)] bg-border" />
                )}

                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-xs font-bold">
                      {item.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card rounded-2xl p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-mono text-accent">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Philosophy
            </span>

            <blockquote className="text-xl md:text-2xl text-foreground font-medium italic mb-6 mt-4">
              "One day or Day one?"
            </blockquote>
            <p className="text-muted-foreground">- Klesti Selimaj</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
