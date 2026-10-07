import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Globe2,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

const products = [
  {
    name: 'Food & Agriculture',
    description: 'Carefully sourced staples and agricultural products for global markets.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85',
    alt: 'Fresh vegetables at a produce market',
  },
  {
    name: 'Textiles & Fabrics',
    description: 'Quality materials and finished textiles for businesses of every scale.',
    image:
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=85',
    alt: 'Carefully arranged neutral fabric swatches',
  },
  {
    name: 'Industrial Supplies',
    description: 'Dependable components and materials to keep operations moving.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85',
    alt: 'Industrial engineer working with equipment',
  },
  {
    name: 'Building Materials',
    description: 'Essential construction products sourced with performance in mind.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
    alt: 'Construction site with building materials',
  },
  {
    name: 'Consumer Goods',
    description: 'Everyday products selected for quality, value, and market demand.',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=900&q=85',
    alt: 'Well-stocked grocery store shelves',
  },
  {
    name: 'Custom Sourcing',
    description: 'A tailored sourcing approach for your unique product requirements.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85',
    alt: 'Warehouse storage and logistics operations',
  },
]

const advantages = [
  {
    title: 'Quality Products',
    description: 'Every product is selected against clear standards for quality and value.',
    icon: BadgeCheck,
  },
  {
    title: 'Trusted Partnerships',
    description: 'Long-term relationships built on transparency and mutual success.',
    icon: Handshake,
  },
  {
    title: 'Global Sourcing',
    description: 'A dependable network connecting reputable suppliers to new markets.',
    icon: Globe2,
  },
  {
    title: 'Reliable Delivery',
    description: 'Thoughtful logistics coordination from supplier to your doorstep.',
    icon: Truck,
  },
]

const statistics = [
  { number: '10+', label: 'Years of experience' },
  { number: '20+', label: 'Countries reached' },
  { number: '100+', label: 'Products sourced' },
  { number: '500+', label: 'Clients served' },
]

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content container">
          <div className="hero-copy">
            <span className="eyebrow"><span /> TRADE WITHOUT BOUNDARIES</span>
            <h1>Connecting Markets.<br />Delivering <em>Opportunities.</em></h1>
            <p>
              We bring businesses and trusted suppliers together, making global
              trade simpler, more reliable, and ready for what&apos;s next.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/#products">
                Explore Products <ArrowRight size={17} />
              </Link>
              <Link className="button button-outline-light" to="/#contact">
                Contact Us
              </Link>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-icon"><ShieldCheck size={17} /></span>
              <span>Built on trust. Driven by opportunity.</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Global shipping containers at a port">
            <div className="hero-visual-caption">
              <span className="caption-rule" />
              <span>Trade that moves business forward</span>
            </div>
            <div className="hero-coordinate">KARACHI · 24°51&apos;N 67°00&apos;E</div>
          </div>
        </div>
        <Link className="scroll-cue" to="/#about" aria-label="Scroll to company introduction">
          <ArrowDownRight size={17} />
        </Link>
      </section>

      <section className="intro-section section-space" id="about">
        <div className="container intro-grid">
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
              alt="Cargo containers being loaded at a seaport"
              loading="lazy"
            />
            <div className="intro-image-label">
              <span className="intro-label-icon"><Globe2 size={20} /></span>
              <span><strong>Connecting commerce</strong><small>Across borders and industries</small></span>
            </div>
          </div>
          <div className="intro-copy">
            <span className="eyebrow eyebrow-dark">YOUR PARTNER IN GLOBAL TRADE</span>
            <h2>Trade built on trust.<br />Growth built together.</h2>
            <p>
              Abuzahar Trading is a reliable trading company connecting
              suppliers, businesses, and markets. We combine thoughtful
              sourcing with responsive service to help our partners move
              forward with confidence.
            </p>
            <p>
              From finding the right products to coordinating delivery, we make
              every step of the trading journey feel straightforward.
            </p>
            <Link className="text-link" to="/#services">
              Discover who we are <ArrowRight size={17} />
            </Link>
            <div className="intro-proof">
              <span><ShieldCheck size={17} /> Reliable sourcing</span>
              <span><Handshake size={17} /> Long-term relationships</span>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section section-space" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow eyebrow-dark">WHAT WE TRADE</span>
              <h2>Products for a world<br />of possibilities.</h2>
            </div>
            <p>
              A versatile portfolio, carefully sourced to meet the needs of
              businesses across markets and industries.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <Link
                  className="product-image-link"
                  to="/#contact"
                  aria-label={`Enquire about ${product.name}`}
                >
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="product-number">0{index + 1}</span>
                </Link>
                <div className="product-card-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link className="product-link" to="/#contact">
                    Explore <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section-space" id="services">
        <div className="container">
          <div className="section-heading services-heading">
            <div>
              <span className="eyebrow eyebrow-dark">THE ABUZAHAR ADVANTAGE</span>
              <h2>A better way to<br />do business.</h2>
            </div>
            <p>
              A dependable trading partner brings more than products. We bring
              clarity, care, and commitment to every order.
            </p>
          </div>
          <div className="advantage-grid">
            {advantages.map(({ title, description, icon: Icon }, index) => (
              <article className="advantage-card" key={title}>
                <div className="advantage-icon"><Icon size={22} strokeWidth={1.7} /></div>
                <span className="advantage-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="service-strip">
            <div className="service-strip-icon"><Boxes size={22} /></div>
            <p><strong>From the first enquiry to the final delivery,</strong> we&apos;re with you at every step.</p>
            <Link className="text-link" to="/#contact">How we work <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="stats-section" aria-label="Abuzahar Trading at a glance">
        <div className="container stats-grid">
          {statistics.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container cta-content">
          <div className="cta-mark"><PackageCheck size={24} /></div>
          <span className="eyebrow">LET&apos;S MOVE FORWARD</span>
          <h2>Looking for a Reliable<br />Trading Partner?</h2>
          <p>Let&apos;s build a successful business relationship.</p>
          <a className="button button-gold" href="mailto:info@abuzahartrading.com">
            Contact Us <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
