import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import profilePicture from "@/assets/PP.jpeg";
import mngr from "@/assets/mngr.png";
import kmpg from "@/assets/kmpg.png";
import ksrlndr from "@/assets/ksrlndr.jpg";
import LoadingScreen from "@/components/LoadingScreen";
import NameGate from "@/components/NameGate";
import Comments from "@/components/Comments";
import CustomCursor from "@/components/CustomCursor";
import { useScrollEffects } from "@/hooks/useScrollEffects";
import { useVisitorName } from "@/hooks/useVisitorname";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ServerCog,
  Smartphone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abidzar Al Ghifari — Software Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Abidzar Al Ghifari, a software engineering student and junior full-stack developer based in Jakarta.",
      },
      { property: "og:title", content: "Abidzar Al Ghifari — Software Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Frontend and full-stack projects, skills, and experience of Abidzar Al Ghifari, software engineering student in Jakarta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phoneNumber = "6283191560934";
const emailAddress = "abdzr2307@gmail.com";
const githubUrl = "https://github.com/";
const cvFileName = "Abidzar-Al-Ghifari-CV.pdf";

const skillCategories = [
  {
    category: "Core Stack",
    description: "Primary technologies used most often day to day.",
    skills: [
      { name: "HTML", logo: "html" },
      { name: "CSS", logo: "css" },
      { name: "JavaScript", logo: "js" },
      { name: "TypeScript", logo: "ts" },
      { name: "React.js", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "Tailwind CSS", logo: "tailwind" },
    ],
  },
  {
    category: "Backend & Frameworks",
    description: "Server-side runtimes, frameworks, and languages.",
    skills: [
      { name: "Node.js", logo: "nodejs" },
      { name: "Express.js", logo: "express" },
      { name: "Laravel", logo: "laravel" },
      { name: "CodeIgniter", logo: null, fallback: Code2 },
      { name: "PHP", logo: "php" },
      { name: "Python", logo: "python" },
      { name: "Golang", logo: "go" },
      { name: "Java", logo: "java" },
      { name: "Spring Boot", logo: "spring" },
      { name: "RESTful API", logo: null, fallback: Globe2 },
    ],
  },
  {
    category: "Databases & Cloud",
    description: "Storage, caching, and backend-as-a-service platforms.",
    skills: [
      { name: "PostgreSQL", logo: "postgres" },
      { name: "MySQL", logo: "mysql" },
      { name: "SQLite", logo: "sqlite" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Redis", logo: "redis" },
      { name: "Supabase", logo: "supabase" },
      { name: "Firebase", logo: "firebase" },
      { name: "Upstash", logo: null, fallback: Database },
    ],
  },
  {
    category: "Mobile & UI",
    description: "Mobile development and other interface toolkits.",
    skills: [
      { name: "React Native", logo: "react" },
      { name: "Flutter", logo: "flutter" },
      { name: "Dart", logo: "dart" },
      { name: "Vue.js", logo: "vue" },
      { name: "Bootstrap CSS", logo: "bootstrap" },
      { name: "Figma", logo: "figma" },
    ],
  },
  {
    category: "CMS & Website Builders",
    description: "Content platforms and low-code site builders.",
    skills: [
      { name: "WordPress", logo: "wordpress" },
      { name: "Shopify", logo: "shopify" },
      { name: "Webflow", logo: "webflow" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    description: "Deployment, version control, and reliability tools.",
    skills: [
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Docker", logo: "docker" },
      { name: "Vercel", logo: "vercel" },
      { name: "Render", logo: null, fallback: Cloud },
      { name: "Cloudflare", logo: "cloudflare" },
      { name: "VMware", logo: null, fallback: ServerCog },
      { name: "Sentry", logo: null, fallback: AlertTriangle },
      { name: "UptimeRobot", logo: null, fallback: Activity },
    ],
  },
];

const softSkills = [
  "Good communication",
  "Problem solving",
  "Independent & collaborative",
  "Quick to learn",
];

const experiences = [
  {
    year: "Jul 2025 — Oct 2025",
    role: "IT Support Intern",
    company: "PT Exeed Indo Jaya",
    location: "North Jakarta, Indonesia",
    icon: Headphones,
    bullets: [
      "Handled software troubleshooting on user devices",
      "Assisted with monitoring and resolving Service Requests (SR)",
      "Coordinated with technical teams to resolve issues",
      "Provided direct support to users",
    ],
  },
];

const projects = [
  {
    name: "ManagerWeb",
    tagline: "Employee management platform",
    description:
      "A web app for managing employee data, attendance, and leave requests, with a Node.js/Express + Firebase backend.",
    icon: Users,
    tags: ["Node.js", "Express", "Firebase", "Tailwind"],
    type: "web" as const,
    liveUrl: "https://abidzarhr.netlify.app",
    image: mngr,
  },
  {
    name: "KampoengWeb",
    tagline: "Local administration website",
    description:
      "A website built for regional/community administrators to manage and share information for their local area.",
    icon: Globe2,
    tags: ["Node.js", "Express", "Tailwind"],
    type: "web" as const,
    liveUrl: "https://webkampoeng.vercel.app",
    image: kmpg,
  },
  {
    name: "Kasir Laundry",
    tagline: "Laundry POS mobile app",
    description: "A React Native + SQLite point-of-sale app for laundry businesses.",
    icon: Smartphone,
    tags: ["React Native", "Expo", "SQLite", "TypeScript"],
    type: "apk" as const,
    image: ksrlndr,
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Guestbook", href: "#comments" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { name: visitorName, ready: nameReady, setName: setVisitorName, clearName } =
    useVisitorName();

  const showNameGate = !isLoading && nameReady && !visitorName;

  useEffect(() => {
    const minDuration = 1500;
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minDuration - elapsed, 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);
    const fallback = window.setTimeout(finishLoading, 2200);
    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading || showNameGate ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, showNameGate]);

  useScrollEffects();

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Hello Abidzar — ${name}`);
    const body = encodeURIComponent(`${message}\n\nSent from your portfolio website.`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setEmailSent(true);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <CustomCursor />
      <LoadingScreen visible={isLoading} />
      <NameGate visible={showNameGate} onSubmit={setVisitorName} />
      <div className="scroll-progress">
        <div className="scroll-progress-fill" />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abidzar home">
          <img
            className="brand-avatar"
            src={profilePicture}
            alt="Profile Picture"
            width="40"
            height="40"
          />
          <span className="brand-name">
            ABIDZAR<span>.</span>
          </span>
        </a>

        <nav
          className={`main-nav ${mobileMenuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMobileMenu}>
            Let&apos;s collaborate <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div
            className="hero-photo-bg"
            style={{ backgroundImage: `url(${profilePicture})` }}
          />
          <div className="hero-photo-scrim" />
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" /> Available for opportunities
            </div>
            <h1>
              Software that
              <br />
              <em>feels right.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Abidzar Al Ghifari</strong>, a software engineering student who
              enjoys turning ideas into working products. Most days that means writing code — some
              days it means figuring out why something broke.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost" href={`/cv/${cvFileName}`} download>
                Download CV <Download size={17} />
              </a>
              <a className="button button-ghost" href={`mailto:${emailAddress}`}>
                Get in touch <Mail size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> West Jakarta, Indonesia
              </span>
              <span className="meta-divider" />
              <span>Software Engineering</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ChevronDown size={16} />
          </a>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label">01 / About me</div>
          <div className="about-layout">
            <div className="section-heading-wrap" data-reveal>
              <p className="kicker">A little context</p>
              <h2>
                Tech-minded.
                <br />
                <span>People-focused.</span>
              </h2>
            </div>
            <div className="about-copy" data-reveal>
              <p className="large-copy">
                I&apos;m currently a university student focused on building my career in tech,
                balancing my studies with hands-on IT support work and personal coding projects
                on the side as I actively search for opportunities as a Frontend Developer.
              </p>
              <p>
                I like understanding what&apos;s actually broken before I touch it, then fixing it
                properly instead of patching around it. That habit shapes how I approach every
                project — read first, plan a little, then build something that holds up.
              </p>
              <div className="about-facts">
                <div>
                  <strong>2023</strong>
                  <span>
                    Started my software
                    <br />
                    engineering journey
                  </span>
                </div>
                <div>
                  <strong>2025</strong>
                  <span>
                    First professional
                    <br />
                    IT support role
                  </span>
                </div>
                <div>
                  <strong>2026</strong>
                  <span>
                    Focused on
                    <br />
                    frontend development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">02 / Skills</div>
          <div className="skills-header" data-reveal>
            <div>
              <p className="kicker">Tools &amp; strengths</p>
              <h2>
                What I bring
                <br />
                <span>to the table.</span>
              </h2>
            </div>
            <p className="section-description">
              A growing toolkit shaped by school projects, real user support, self-hosted infra, and
              a habit of learning by doing.
            </p>
          </div>

          <div className="skills-marquee-wrap" data-reveal>
            {skillCategories.map((group, idx) => (
              <div key={group.category} className="skill-marquee-row">
                <div className="skill-marquee-heading">
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>
                <span className="sr-only">
                  {group.skills.map((skill) => skill.name).join(", ")}
                </span>
                <div className="skill-marquee-viewport">
                  <div
                    className={`skill-marquee-track ${idx % 2 === 0 ? "marquee-right" : "marquee-left"}`}
                    aria-hidden="true"
                  >
                    {[...group.skills, ...group.skills].map((skill, sIdx) => {
                      const FallbackIcon = skill.fallback;
                      return (
                        <div key={`${group.category}-${sIdx}`} className="skill-chip">
                          {skill.logo ? (
                            <img
                              src={`https://skillicons.dev/icons?i=${skill.logo}`}
                              alt=""
                              loading="lazy"
                            />
                          ) : (
                            FallbackIcon && <FallbackIcon size={18} />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-layout">
            <div className="skill-panel skill-panel-soft" data-reveal>
              <div className="skill-panel-title">
                <Sparkles size={20} />
                <span>How I work</span>
                <span className="panel-number">02</span>
              </div>
              <ul>
                {softSkills.map((skill) => (
                  <li key={skill}>
                    <Check size={15} />
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="language-note">
                <span>Languages</span>
                <strong>
                  Indonesian <small>Native</small>
                </strong>
                <strong>
                  English <small>Basic</small>
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-label">03 / Experience</div>
          <div className="experience-layout">
            <div data-reveal>
              <p className="kicker">Where I&apos;ve learned</p>
              <h2>
                Real work,
                <br />
                <span>real impact.</span>
              </h2>
            </div>
            <div className="experience-list">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return (
                  <article
                    className="experience-card"
                    key={experience.company}
                    data-reveal
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <div className="experience-icon">
                      <Icon size={22} />
                    </div>
                    <div className="experience-content">
                      <div className="experience-topline">
                        <span>{experience.year}</span>
                        <span>{experience.location}</span>
                      </div>
                      <h3>{experience.role}</h3>
                      <p className="company-name">{experience.company}</p>
                      <ul>
                        {experience.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">04 / Selected projects</div>
          <div className="projects-heading" data-reveal>
            <div>
              <p className="kicker">What I&apos;ve shipped</p>
              <h2>
                Things I&apos;ve
                <br />
                <span>built &amp; deployed.</span>
              </h2>
            </div>
            <div className="project-counter">
              0{projects.length} <span>/</span> shipped
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isWeb = project.type === "web";
              return (
                <article
                  className="project-card"
                  key={project.name}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="project-glow" />

                  {project.image &&
                    (isWeb ? (
                      <a
                        className="project-thumb-link"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} live demo`}
                      >
                        <img
                          className="project-thumb"
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          loading="lazy"
                        />
                        <span className="project-thumb-overlay">
                          Open live demo <ArrowUpRight size={16} />
                        </span>
                      </a>
                    ) : (
                      <div className="project-thumb-static">
                        <img
                          className="project-thumb"
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          loading="lazy"
                        />
                        <span className="project-thumb-badge">
                          <Smartphone size={13} /> APK
                        </span>
                      </div>
                    ))}

                  <div className="project-card-icon">
                    <Icon size={26} />
                  </div>
                  <span className="project-status">{project.tagline}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {isWeb ? (
                    <a
                      className="project-card-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View live demo <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="project-card-link project-card-link-static">
                      <Smartphone size={16} /> Android build
                    </span>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-decoration">
            LET&apos;S
            <br />
            CREATE<span>.</span>
          </div>
          <div className="section-label">05 / Let&apos;s work together</div>
          <div className="contact-layout">
            <div className="contact-intro" data-reveal>
              <p className="kicker">Open to new roles</p>
              <h2>
                Let&apos;s create
                <br />
                <span>something great.</span>
              </h2>
              <p>
                Looking for a frontend developer who cares about clean code and thoughtful design?
                I&apos;d love to hear about what you&apos;re building — let&apos;s talk about how I
                can help.
              </p>
              <div className="contact-links">
                <a href={`mailto:${emailAddress}`}>
                  <Mail size={18} />
                  <span>{emailAddress}</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  <span>WhatsApp me</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href={`sms:+${phoneNumber}`}>
                  <Phone size={18} />
                  <span>Send an SMS</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  <span>GitHub profile</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <form className="contact-form" data-reveal onSubmit={handleEmailSubmit}>
              <div className="form-heading">
                <span>Or write directly</span>
                <Send size={17} />
              </div>
              <label>
                <span>Your name</span>
                <input name="name" type="text" placeholder="What should I call you?" required />
              </label>
              <label>
                <span>Your message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me what's on your mind..."
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Open email draft <ArrowUpRight size={17} />
              </button>
              {emailSent && (
                <p className="form-note">
                  <Check size={15} /> Your email app should open with a draft ready.
                </p>
              )}
            </form>
          </div>
        </section>

        {visitorName && <Comments visitorName={visitorName} onChangeName={clearName} />}
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top">
          <span className="brand-mark">A</span>
          <span className="brand-name">
            ABIDZAR<span>.</span>
          </span>
        </a>
        <span>Designed &amp; built with curiosity.</span>
        <span>© 2026 Abidzar Al Ghifari</span>
      </footer>
    </div>
  );
}