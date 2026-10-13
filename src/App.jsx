import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Handshake,
  ChartNoAxesCombined,
  Gamepad2,
  Trophy,
  UsersRound,
  Mic2,
  CalendarDays,
  Sparkles
} from 'lucide-react'

const events = [
  {
    number: '01',
    title: 'BUSINESS MANIA',
    tagline: 'Think like a CEO.',
    category: 'Business & Strategy',
    icon: BriefcaseBusiness,
    description: 'A challenge for sharp minds who can read the room, spot opportunities, and turn strategy into action.',
    detail: 'Bring your commercial instincts, teamwork, and decision-making skills to the table. The full format, eligibility, and rules will be announced by the organising team.',
    accent: 'gold'
  },
  {
    number: '02',
    title: 'THE DEAL MAKERS',
    tagline: 'Every deal has a story.',
    category: 'Negotiation',
    icon: Handshake,
    description: 'Persuasion, negotiation, and the art of finding the deal that changes everything.',
    detail: 'Step into a high-stakes negotiation experience where communication, confidence, and strategic thinking matter. Official rounds and rules will be shared soon.',
    accent: 'cream'
  },
  {
    number: '03',
    title: 'SURVIVE TO SCALE',
    tagline: 'Adapt. Survive. Scale.',
    category: 'Entrepreneurship',
    icon: ChartNoAxesCombined,
    description: 'Can your idea survive uncertainty and grow into something bigger?',
    detail: 'Test your ability to make decisions with limited resources, respond to setbacks, and map a path towards sustainable growth.',
    accent: 'green'
  },
  {
    number: '04',
    title: 'BGMI',
    tagline: 'Drop in. Outplay. Dominate.',
    category: 'Esports',
    icon: Gamepad2,
    description: 'Squad up, sharpen your strategy, and compete for the last word on the battleground.',
    detail: 'A competitive gaming experience for teams ready to bring coordination and clutch plays. Match format, device requirements, and rules are to be confirmed.',
    accent: 'green'
  },
  {
    number: '05',
    title: 'IPL AUCTION',
    tagline: 'Build your team. Win the auction.',
    category: 'Sports Strategy',
    icon: Trophy,
    description: 'Balance your budget, read the room, and build a winning squad under pressure.',
    detail: 'Make calculated bids, manage your purse, and assemble a balanced team. Auction rules and player pool details will be announced soon.',
    accent: 'gold'
  },
  {
    number: '06',
    title: 'ALUMI MEET',
    tagline: 'Connections build the future.',
    category: 'Networking',
    icon: UsersRound,
    description: 'Reconnect with the DMCE community and discover stories, advice, and opportunities.',
    detail: 'A space for alumni and students to exchange experiences, build meaningful connections, and explore professional journeys.',
    accent: 'cream'
  },
  {
    number: '07',
    title: 'TALKXSESSION',
    tagline: 'Big ideas. Bold voices.',
    category: 'Speaker Session',
    icon: Mic2,
    description: 'Fresh perspectives and real-world insights from people who build, lead, and challenge the status quo.',
    detail: 'Join a conversation-led session focused on ideas, career journeys, entrepreneurship, and lessons from the field. Guest details will be announced soon.',
    accent: 'gold'
  }
]

const faqs = [
  ['What is ENSPIRE’27?', 'ENSPIRE’27 is the entrepreneurship fest by E-Cell, Datta Meghe College of Engineering (DMCE), Airoli. Expect competitions, networking, gaming, and ideas worth acting on.'],
  ['Who can participate?', 'Eligibility will depend on the individual event. The organising team will publish the official criteria with event rules.'],
  ['How do I register?', 'Registration links will be added here once they are officially available. Follow E-Cell DMCE channels for updates.'],
  ['Can I participate in multiple events?', 'This will depend on event rules and schedule overlap. Check the official event details before registering.'],
  ['Where and when is ENSPIRE’27?', 'The official date, venue, and schedule will be announced by the organising team.'],
  ['How can I contact the team?', 'Use the contact form below or reach out through the official E-Cell DMCE social channels.']
]

const navItems = ['Home', 'Events', 'Speakers', 'Sponsors', 'Contact Us', 'FAQs']

function Button({ children, variant = 'gold', onClick, href }) {
  const className = `button button-${variant}`

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
        <ArrowUpRight size={16} />
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
      <ArrowUpRight size={16} />
    </button>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  const navigate = (item) => {
    setActive(item)
    setOpen(false)

    const id =
      item === 'Contact Us'
        ? 'contact'
        : item.toLowerCase().replaceAll(' ', '-')

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        onClick={() => setActive('Home')}
        aria-label="ENSPIRE 27 home"
      >
        <span className="brand-mark">
          E<span>27</span>
        </span>

        <span className="brand-text">
          ENSPIRE
          <small>E-CELL · DMCE</small>
        </span>
      </a>

      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {navItems.map((item) => (
          <button
            key={item}
            className={active === item ? 'nav-link active' : 'nav-link'}
            onClick={() => navigate(item)}
          >
            {item}
          </button>
        ))}

        <button
          className="nav-register"
          onClick={() => navigate('Events')}
        >
          MAKE YOUR MOVE <ArrowUpRight size={14} />
        </button>
      </nav>

      <button
        className="mobile-menu"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-image"
        role="img"
        aria-label="Cinematic dark corporate office atmosphere"
      />

      <div className="hero-grain" />

      <div className="hero-topline">
        <span>
          <i className="live-dot" />
          THE ENTREPRENEURSHIP SUMMIT
        </span>
        <span>DMCE · AIROLI · INDIA</span>
      </div>

      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          THE NEXT GENERATION OF DEAL MAKERS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          THE STREET
          <br />
          IS YOURS TO <em>CONQUER.</em>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ENSPIRE’27 is where ambition meets opportunity.
          <br className="desktop-break" />
          Think bigger. Take the shot. Make your mark.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <Button
            onClick={() =>
              document.getElementById('events')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            EXPLORE EVENTS
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            GET IN TOUCH
          </Button>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>06</span>
        </div>

        <p>
          BUILT FOR THE BOLD.
          <br />
          DESIGNED FOR WHAT’S NEXT.
        </p>

        <a href="#events" className="scroll-cue">
          SCROLL TO EXPLORE <ArrowDownRight size={18} />
        </a>
      </div>

      <div className="vertical-label">
        AMBITION · STRATEGY · OPPORTUNITY
      </div>
    </section>
  )
}

function Ticker() {
  const words = [
    'AMBITION',
    'STRATEGY',
    'INNOVATION',
    'OPPORTUNITY',
    'EXECUTION',
    'NETWORK'
  ]

  return (
    <div
      className="ticker"
      aria-label="Ambition, strategy, innovation, opportunity, execution, network"
    >
      <div className="ticker-track">
        {[...words, ...words].map((word, index) => (
          <span key={index}>
            {word}
            <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-dash" /> {label}
      </p>

      <h2>{title}</h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

function Events() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('ALL')

  const filters = ['ALL', 'BUSINESS', 'ESPORTS', 'NETWORKING']

  const filtered = events.filter(
    (event) =>
      filter === 'ALL' ||
      (filter === 'BUSINESS' &&
        [
          'Business & Strategy',
          'Negotiation',
          'Entrepreneurship',
          'Sports Strategy'
        ].includes(event.category)) ||
      (filter === 'ESPORTS' && event.category === 'Esports') ||
      (filter === 'NETWORKING' &&
        ['Networking', 'Speaker Session'].includes(event.category))
  )

  return (
    <section className="section events-section" id="events">
      <div className="section-shell">
        <div className="events-head">
          <SectionHeading
            label="THE LINEUP / 2027"
            title={
              <>
                EVERY MOVE
                <br />
                <em>MATTERS.</em>
              </>
            }
            subtitle="Seven ways to think bigger, play smarter, and make your mark."
          />

          <div className="event-side-note">
            <span className="side-note-number">07</span>
            <span>
              EVENTS
              <br />
              ONE BIG STAGE
            </span>
          </div>
        </div>

        <div className="filters">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? 'filter active' : 'filter'}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="event-grid">
          {filtered.map((event, index) => {
            const Icon = event.icon

            return (
              <motion.article
                layout
                key={event.number}
                className={`event-card accent-${event.accent}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="event-card-top">
                  <span className="event-number">
                    {event.number} / 07
                  </span>
                  <Icon size={22} strokeWidth={1.4} />
                </div>

                <div className={`event-art art-${event.number}`}>
                  <div className="art-grid" />

                  <div className="art-symbol">
                    {event.number === '04'
                      ? '///'
                      : event.number === '05'
                        ? '₹'
                        : event.number === '06'
                          ? '∞'
                          : event.number === '07'
                            ? '✳'
                            : '↗'}
                  </div>

                  <span className="art-label">
                    {event.category.toUpperCase()}
                  </span>
                </div>

                <div className="event-card-content">
                  <p className="event-tagline">{event.tagline}</p>
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>

                  <button
                    className="text-link"
                    onClick={() => setSelected(event)}
                  >
                    VIEW EVENT <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>

        <p className="event-disclaimer">
          Event dates, rules, prizes and registration links will be updated
          after official confirmation.
        </p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="event-modal"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X />
              </button>

              <p className="eyebrow">
                ENSPIRE’27 / EVENT {selected.number}
              </p>

              <h2>{selected.title}</h2>
              <p className="modal-tagline">{selected.tagline}</p>
              <p>{selected.detail}</p>

              <div className="modal-meta">
                <span>
                  <CalendarDays size={16} /> Date to be announced
                </span>
                <span>
                  <MapPin size={16} /> Venue to be announced
                </span>
              </div>

              <button
                className="button button-gold"
                onClick={() => {
                  setSelected(null)
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
              >
                ASK ABOUT THIS EVENT <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function AboutStrip() {
  return (
    <section className="about-strip">
      <div className="about-strip-label">
        <Sparkles size={16} /> THE ENSPIRE MINDSET
      </div>

      <div className="about-strip-copy">
        <p>NOT JUST ANOTHER FEST.</p>
        <h2>
          A ROOM FULL OF
          <br />
          <em>WHAT’S NEXT.</em>
        </h2>
      </div>

      <div className="about-strip-right">
        <p>
          Where ideas get tested, connections get made, and the next big move
          starts with you.
        </p>

        <span className="stamp">
          THINK
          <br />
          BIGGER
          <span>✳</span>
        </span>
      </div>
    </section>
  )
}

function Speakers() {
  return (
    <section className="section speakers-section" id="speakers">
      <div className="section-shell speakers-layout">
        <div>
          <SectionHeading
            label="THE PEOPLE / THE PERSPECTIVES"
            title={
              <>
                LEARN FROM
                <br />
                <em>THE GAME CHANGERS.</em>
              </>
            }
            subtitle="Ideas worth hearing. Experiences worth learning from."
          />
        </div>

        <div className="speaker-placeholder">
          <div className="speaker-visual">
            <div className="speaker-monogram">
              S<span>+</span>
            </div>
            <span className="image-caption">
              FUTURE VOICES. REAL EXPERIENCE.
            </span>
          </div>

          <div className="speaker-info">
            <div>
              <p className="eyebrow">SPEAKERS & GUESTS</p>
              <h3>
                THE NEXT VOICE COULD CHANGE YOUR PERSPECTIVE.
              </h3>
            </div>

            <p>
              Speaker announcements coming soon. Check back for guest profiles,
              session details, and schedule updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sponsors() {
  const labels = [
    'TITLE PARTNER',
    'GOLD PARTNER',
    'ASSOCIATE PARTNER',
    'COMMUNITY PARTNER'
  ]

  return (
    <section className="section sponsors-section" id="sponsors">
      <div className="section-shell">
        <SectionHeading
          label="THE PEOPLE WHO MAKE IT HAPPEN"
          title={
            <>
              POWERED BY
              <br />
              <em>VISIONARIES.</em>
            </>
          }
          subtitle="Great ideas move further when the right people back them."
        />

        <div className="sponsor-grid">
          {labels.map((label, index) => (
            <div
              className={`sponsor-box sponsor-${index}`}
              key={label}
            >
              <span className="sponsor-plus">✳</span>
              <span className="sponsor-name">YOUR BRAND</span>
              <small>{label}</small>
            </div>
          ))}
        </div>

        <p className="sponsor-note">
          Interested in partnering with ENSPIRE’27?{' '}
          <a href="#contact">
            Let’s talk <ArrowUpRight size={14} />
          </a>
        </p>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General enquiry',
    message: ''
  })

  const [status, setStatus] = useState('')

  const submit = (event) => {
    event.preventDefault()
    setStatus(
      'Thanks! This frontend demo is ready to connect to the official ENSPIRE’27 contact channel.'
    )
  }

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div className="contact-copy">
          <SectionHeading
            label="OPEN A CONVERSATION"
            title={
              <>
                LET’S MAKE
                <br />
                <em>A DEAL.</em>
              </>
            }
            subtitle="Questions, collaborations, ideas? We’re all ears."
          />

          <div className="contact-detail">
            <Mail size={17} />
            <span>
              <small>EMAIL</small>
              <strong>Official contact coming soon</strong>
            </span>
          </div>

          <div className="contact-detail">
            <MapPin size={17} />
            <span>
              <small>LOCATION</small>
              <strong>DMCE, Airoli, Navi Mumbai</strong>
            </span>
          </div>

          <div className="contact-socials">
            <a href="#contact" aria-label="Instagram">
              IG
            </a>
            <a href="#contact" aria-label="LinkedIn">
              IN
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <p className="eyebrow">
            SEND A MESSAGE <span>/// 01</span>
          </p>

          <label>
            YOUR NAME
            <input
              required
              name="name"
              value={form.name}
              onChange={update}
              placeholder="Enter your name"
            />
          </label>

          <label>
            EMAIL ADDRESS
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
            />
          </label>

          <label>
            SUBJECT
            <select
              name="subject"
              value={form.subject}
              onChange={update}
            >
              <option>General enquiry</option>
              <option>Event information</option>
              <option>Sponsorship</option>
              <option>Speaker / guest</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            MESSAGE
            <textarea
              required
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell us what's on your mind..."
              rows="3"
            />
          </label>

          <button className="button button-gold" type="submit">
            SEND MESSAGE <ArrowUpRight size={16} />
          </button>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function FAQs() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section faq-section" id="faqs">
      <div className="section-shell faq-layout">
        <div>
          <SectionHeading
            label="THE FINE PRINT"
            title={
              <>
                BEFORE YOU
                <br />
                <em>MAKE YOUR MOVE.</em>
              </>
            }
            subtitle="The essentials, without the small talk."
          />
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div
              className={open === index ? 'faq-item faq-open' : 'faq-item'}
              key={question}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                aria-expanded={open === index}
              >
                <span>
                  <small>0{index + 1}</small>
                  {question}
                </span>
                <ChevronDown size={19} />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })

  return (
    <>
      <section className="final-cta">
        <div className="final-cta-backdrop" />

        <div className="final-cta-content">
          <p className="eyebrow">YOUR MOVE STARTS HERE</p>

          <h2>
            THE MARKET
            <br />
            NEVER <em>WAITS.</em>
          </h2>

          <p>Bring your ambition. We’ll bring the opportunity.</p>

          <button
            className="button button-light"
            onClick={() => go('events')}
          >
            FIND YOUR EVENT <ArrowUpRight size={16} />
          </button>
        </div>

        <span className="final-cta-number">ENSPIRE / 27</span>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand" href="#home">
            <span className="brand-mark">
              E<span>27</span>
            </span>

            <span className="brand-text">
              ENSPIRE
              <small>E-CELL · DMCE</small>
            </span>
          </a>

          <p>
            THINK BIG. TAKE RISKS.
            <br />
            BUILD THE FUTURE.
          </p>

          <div className="footer-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  go(
                    item === 'Contact Us'
                      ? 'contact'
                      : item.toLowerCase().replaceAll(' ', '-')
                  )
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2027 ENSPIRE · E-CELL DMCE</span>
          <span>
            MADE FOR THE BOLD <span className="gold">✳</span>
          </span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <AboutStrip />
        <Events />
        <Speakers />
        <Sponsors />
        <Contact />
        <FAQs />
        <Footer />
      </main>
    </>
  )
}