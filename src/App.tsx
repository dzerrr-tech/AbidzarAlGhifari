import { useEffect, useState, type FormEvent } from 'react';
import profilePicture from './assets/PP.jpeg';
import LoadingScreen from './components/LoadingScreen';
import { useScrollEffects } from './hooks/useScrollEffects';
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Send,
  ServerCog,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react';

const phoneNumber = '6283191560934';
const emailAddress = 'abdzr2307@gmail.com';
const githubUrl = 'https://github.com/';

const technicalSkills = [
  { name: 'Troubleshooting VMware', logo: null, fallback: ServerCog },
  { name: 'Laravel', logo: 'laravel' },
  { name: 'CodeIgniter', logo: null, fallback: Code2 },
  { name: 'TypeScript', logo: 'ts' },
  { name: 'Node.js', logo: 'nodejs' },
  { name: 'Vue.js', logo: 'vue' },
  { name: 'React.js', logo: 'react' },
  { name: 'React Native', logo: 'react' },
  { name: 'Bootstrap CSS', logo: 'bootstrap' },
  { name: 'Tailwind CSS', logo: 'tailwind' },
  { name: 'PHP', logo: 'php' },
  { name: 'HTML', logo: 'html' },
  { name: 'CSS', logo: 'css' },
  { name: 'JavaScript', logo: 'js' },
  { name: 'Java', logo: 'java' },
  { name: 'MySQL', logo: 'mysql' },
  { name: 'PostgreSQL', logo: 'postgres' },
  { name: 'RESTful API', logo: null, fallback: Globe2 },
  { name: 'Git', logo: 'git' },
  { name: 'Express.js', logo: 'express' },
  { name: 'SQLite', logo: 'sqlite' },
  { name: 'Figma', logo: 'figma' },
  { name: 'Firebase', logo: 'firebase' },
  { name: 'Supabase', logo: 'supabase' },
  { name: 'Golang', logo: 'go' },
  { name: 'AI Agent (n8n)', logo: null, fallback: Workflow },
  { name: 'GitHub', logo: 'github' },
  { name: 'Vercel', logo: 'vercel' },
  { name: 'Cloudflare', logo: 'cloudflare' },
  { name: 'Render', logo: null, fallback: Cloud },
  { name: 'Upstash', logo: null, fallback: Database },
  { name: 'Sentry', logo: null, fallback: AlertTriangle },
  { name: 'UptimeRobot', logo: null, fallback: Activity },
  { name: 'Anthropic Console', logo: null, fallback: Terminal },
  { name: 'Hermes Agent', logo: null, fallback: Zap },
];

const softSkills = ['Good communication', 'Problem solving', 'Independent & collaborative', 'Quick to learn'];

const experiences = [
  {
    year: 'Jul 2025 — Oct 2025',
    role: 'IT Support Intern',
    company: 'PT Exeed Indo Jaya',
    location: 'North Jakarta, Indonesia',
    icon: Headphones,
    bullets: [
      'Handled software troubleshooting on user devices',
      'Assisted with monitoring and resolving Service Requests (SR)',
      'Coordinated with technical teams to resolve issues',
      'Provided direct support to users',
    ],
  },
];

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDuration = 1500;
    const start = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minDuration - elapsed, 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
      return;
    }

    window.addEventListener('load', finishLoading);
    return () => window.removeEventListener('load', finishLoading);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useScrollEffects();

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`Hello Abidzar — ${name}`);
    const body = encodeURIComponent(`${message}\n\nSent from your portfolio website.`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setEmailSent(true);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <LoadingScreen visible={isLoading} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abidzar home">
           <img className="brand-avatar" src={profilePicture} alt="Profile Picture" width="40" height="40" />
          <span className="brand-name">ABIDZAR<span>.</span></span>
        </a>

        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMobileMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
            <h1>Building software<br /><em>& AI agents</em> that<br />just work.</h1>
            <p className="hero-intro">
              I&apos;m <strong>Abidzar Al Ghifari</strong>, a software engineering student who spends most of his time writing code and wiring up AI agents — sometimes for class, sometimes just because I got curious how something works.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowUpRight size={18} /></a>
              <a className="button button-ghost" href={`mailto:${emailAddress}`}>Get in touch <Mail size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> West Jakarta, Indonesia</span>
              <span className="meta-divider" />
              <span>Software Engineering</span>
            </div>
          </div>
          <div className="hero-code-card">
            <div className="code-card-topbar"><span /><span /><span /><small>about-me.ts</small></div>
            <div className="code-lines" aria-label="Decorative code snippet">
              <p><i>01</i><span className="code-keyword">const</span> <span className="code-name">developer</span> <b>=</b> {'{'}</p>
              <p><i>02</i>&nbsp;&nbsp;name: <span className="code-string">&apos;Abidzar&apos;</span>,</p>
              <p><i>03</i>&nbsp;&nbsp;focus: <span className="code-string">&apos;software & AI agents&apos;</span>,</p>
              <p><i>04</i>&nbsp;&nbsp;curious: <span className="code-boolean">true</span>,</p>
              <p><i>05</i>&nbsp;&nbsp;coffee: <span className="code-boolean">true</span>,</p>
              <p><i>06</i>{'}'};</p>
              <p><i>07</i>&nbsp;</p>
              <p><i>08</i><span className="code-keyword">export default</span> developer;</p>
            </div>
            <div className="code-card-badge"><Sparkles size={14} /> open to learn</div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ChevronDown size={16} /></a>
        </section>

        <section id="about" className="section about-section">
          <div className="section-label">01 / About me</div>
          <div className="about-layout">
            <div className="section-heading-wrap" data-reveal>
              <p className="kicker">A little context</p>
              <h2>Tech-minded.<br /><span>People-focused.</span></h2>
            </div>
            <div className="about-copy" data-reveal>
              <p className="large-copy">I&apos;m currently studying Software Engineering at SMK Telkom Jakarta, splitting my time between coursework, an IT support background, and building AI agent workflows on the side.</p>
              <p>I like understanding what&apos;s actually broken before I touch it, then fixing it properly instead of patching around it. Lately that habit has pulled me toward automation — using tools like n8n and a few agent frameworks to make repetitive work disappear.</p>
              <div className="about-facts">
                <div><strong>2023</strong><span>Started my software<br />engineering journey</span></div>
                <div><strong>2025</strong><span>First professional<br />IT support experience</span></div>
                <div><strong>2026</strong><span>Building software &<br />AI agent projects</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">02 / Skills</div>
          <div className="skills-header" data-reveal>
            <div><p className="kicker">Tools & strengths</p><h2>What I bring<br /><span>to the table.</span></h2></div>
            <p className="section-description">A growing toolkit shaped by school projects, real user support, self-hosted infra, and a habit of learning by doing.</p>
          </div>
          <div className="skills-layout">
            <div className="skill-panel skill-panel-main" data-reveal>
              <div className="skill-panel-title"><Code2 size={20} /><span>Technical toolkit</span><span className="panel-number">01</span></div>
              <div className="skill-logos">
                {technicalSkills.map((skill, index) => (
                  <div
                    className="skill-logo"
                    key={skill.name}
                    title={skill.name}
                    data-reveal
                    style={{ transitionDelay: `${(index % 8) * 45}ms` }}
                  >
                    {skill.logo ? (
                      <img src={`https://skillicons.dev/icons?i=${skill.logo}`} alt={skill.name} loading="lazy" />
                    ) : (
                      skill.fallback && <skill.fallback size={22} />
                    )}
                    <span className="skill-logo-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-panel skill-panel-soft" data-reveal>
              <div className="skill-panel-title"><Sparkles size={20} /><span>How I work</span><span className="panel-number">02</span></div>
              <ul>{softSkills.map((skill) => <li key={skill}><Check size={15} />{skill}</li>)}</ul>
              <div className="language-note"><span>Languages</span><strong>Bahasa Indonesia <small>Expert</small></strong><strong>English <small>Basic</small></strong></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-label">03 / Experience</div>
          <div className="experience-layout">
            <div data-reveal><p className="kicker">Where I&apos;ve learned</p><h2>Real work,<br /><span>real impact.</span></h2></div>
            <div className="experience-list">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                return <article
                  className="experience-card"
                  key={experience.company}
                  data-reveal
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="experience-icon"><Icon size={22} /></div>
                  <div className="experience-content">
                    <div className="experience-topline"><span>{experience.year}</span><span>{experience.location}</span></div>
                    <h3>{experience.role}</h3><p className="company-name">{experience.company}</p>
                    <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">04 / Selected projects</div>
          <div className="projects-heading" data-reveal><div><p className="kicker">Work in progress</p><h2>Good things<br /><span>are loading.</span></h2></div><div className="project-counter">01 <span>/</span> soon</div></div>
          <div className="coming-soon-card" data-reveal>
            <div className="project-glow" />
            <div className="coming-soon-icon"><Terminal size={28} /></div>
            <div className="coming-soon-copy"><span className="project-status">Currently building</span><h3>My next project is<br />coming soon.</h3><p>I&apos;m putting the finishing touches on something that blends thoughtful design with practical technology. Stay tuned.</p></div>
            <div className="coming-soon-mark"><span>PROJECT</span><strong>01</strong></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-decoration">LET&apos;S<br />CONNECT<span>.</span></div>
          <div className="section-label">05 / Contact</div>
          <div className="contact-layout">
            <div className="contact-intro" data-reveal><p className="kicker">Have an idea?</p><h2>Let&apos;s make<br /><span>it happen.</span></h2><p>Whether you have a question, an opportunity, or just want to say hello — my inbox is open.</p><div className="contact-links"><a href={`mailto:${emailAddress}`}><Mail size={18} /><span>{emailAddress}</span><ArrowUpRight size={16} /></a><a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>WhatsApp me</span><ArrowUpRight size={16} /></a><a href={`sms:+${phoneNumber}`}><Phone size={18} /><span>Send an SMS</span><ArrowUpRight size={16} /></a><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub profile</span><ArrowUpRight size={16} /></a></div></div>
            <form className="contact-form" data-reveal onSubmit={handleEmailSubmit}><div className="form-heading"><span>Or write directly</span><Send size={17} /></div><label><span>Your name</span><input name="name" type="text" placeholder="What should I call you?" required /></label><label><span>Your message</span><textarea name="message" rows={5} placeholder="Tell me what&apos;s on your mind..." required /></label><button className="button button-primary" type="submit">Open email draft <ArrowUpRight size={17} /></button>{emailSent && <p className="form-note"><Check size={15} /> Your email app should open with a draft ready.</p>}</form>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">A</span><span className="brand-name">ABIDZAR<span>.</span></span></a><span>Designed & built with curiosity.</span><span>© 2026 Abidzar Al Ghifari</span></footer>
    </div>
  );
}

export default App;
