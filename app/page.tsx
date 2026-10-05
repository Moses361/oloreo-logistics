const services = [
  {
    title: "Transportation",
    description:
      "We offer reliable and cost-effective transportation solutions tailored to meet the diverse needs of our clients.",
    image: "/images/transportation.jpg",
    href: "/services/transportation",
  },
  {
    title: "Customs Clearing",
    description:
      "Navigating cross-border trade can be complex; our expert customs clearing services simplify the process.",
    image: "/images/customs-clearing.jpg",
    href: "/services/customs-clearing",
  },
  {
    title: "Warehouse and Storage",
    description:
      "Our secure, strategically located warehouses offer flexible storage solutions for businesses of all sizes.",
    image: "/images/warehouse-storage.jpg",
    href: "/services/warehouse-and-storage",
  },
  {
    title: "Supply Chain Management",
    description:
      "We provide end-to-end supply chain solutions that streamline operations, reduce costs, and enhance visibility.",
    image: "/images/supply-chain.jpg",
    href: "/services/supply-chain-management",
  },
  {
    title: "Freight Fowarding",
    description:
      "As a trusted freight forwarding partner, we coordinate the movement of goods across air, sea, and land.",
    image: "/images/freight-forwarding.jpg",
    href: "/services/freight-fowarding",
  },
  {
    title: "Last Mile Delivery",
    description:
      "We specialize in last mile delivery services that bridge the gap between distribution centers and final destinations.",
    image: "/images/last-mile.jpg",
    href: "/services/last-mile-delivery",
  },
  {
    title: "Cleaning Services",
    description:
      "Our professional cleaning services cater to commercial, industrial, and residential spaces.",
    image: "/images/cleaning.jpg",
  },
  {
    title: "Land and Estate Planning Agents",
    description:
      "We provide expert guidance in land acquisition, property development, and estate planning.",
    image: "/images/land-estate.jpg",
    href: "/services/land-and-estate-planning-agents",
  },
];

const team = [
  {
    name: "Thomas Otieno Odero",
    role: "Managing Director",
    image: "/images/thomas-otieno-odero.png",
    description:
      "Strategic Vision, Business Development & Client Relations. With over 15 years in logistics and supply chain management, Thomas founded OLOREO Logistics to provide integrated solutions across the world. His expertise in international trade and logistics infrastructure drives our company's growth and commitment to service excellence.",
    whatsapp: "0743759183",
  },
  {
    name: "Georgan Odero",
    role: "Operations Manager",
    image: "/images/georgan-odero.png",
    description:
      "Operational Excellence, Service Delivery & Warehouse Management Georgan oversees daily logistics operations, ensuring efficient coordination between transportation, warehousing, and client services. With expertise in supply chain optimization, he guarantees reliable service delivery and operational efficiency across all client projects.",
    whatsapp: "0714722391",
  },
  {
    name: "Vincent Omolo Ototo",
    role: "Finance Director",
    image: "/images/vincent-omolo-ototo.png",
    description:
      "Financial Strategy, Compliance & Customs Oversight Vincent manages the financial health of OLOREO Logistics, bringing expertise in logistics costing, budget management, and financial compliance. His strategic approach ensures competitive pricing while maintaining service quality and business sustainability.",
    whatsapp: "0708782022",
  },
  {
    name: "Byron Moses Otieno",
    role: "Head of Logistics",
    image: "/images/byron-moses-otieno.png",
    description:
      "Transportation, Supply Chain & Last-Mile Operations Byron leads our core logistics operations, specializing in freight management, route optimization, and customs coordination. His extensive knowledge of East African transport networks ensures seamless cargo movement and timely deliveries for our clients.",
    whatsapp: "0716262814",
  },
  {
    name: "Clinton Cecil Oluoch",
    role: "Environmental, Health and Safety Manager",
    image: "/images/clinton-cecil-oluoch.png",
    description:
      "Workplace Safety, Environmental Compliance & Risk Management Clinton ensures all OLOREO Logistics operations meet the highest standards of workplace safety and environmental responsibility. With expertise in EHS regulations and risk assessment, he protects both our team members and client assets while maintaining sustainable business practices.",
    whatsapp: "718780435",
  },
];

const trackRecord = [
  {
    number: "0",
    label: "Deliveries Completed",
    icon: "📦",
  },
  {
    number: "0",
    label: "Countries Served",
    icon: "🌍",
  },
  {
    number: "0",
    label: "Happy Customers",
    icon: "🤝",
  },
  {
    number: "0",
    label: "Warehouses Managed",
    icon: "🏭",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Oloreo Logistics Ltd</h1>

          <p className="hero-subtitle">
            Reliable Solutions for Seamless Operations
          </p>

          <p className="hero-tagline">
            Experience Excellence with Oloreo Logistics ltd
          </p>

          <p className="hero-small">
            Where reliability meets innovation
          </p>

          <a href="#services" className="hero-button">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services-section">
        <div className="section-heading">
          <h2>Services</h2>
          <div className="heading-line" />
        </div>

        <div className="services-filter">
          <button className="filter-active">All</button>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {service.href && (
                  <a href={service.href} className="learn-more">
                    Learn More
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="track-record" className="track-record-section">
        <div className="track-record-inner">
          <div className="section-heading light-heading">
            <h2>OUR TRACK RECORD</h2>
            <div className="heading-line" />
          </div>

          <div className="track-record-grid">
            {trackRecord.map((item) => (
              <div className="track-item" key={item.label}>
                <div className="track-icon">{item.icon}</div>
                <div className="track-number">{item.number}</div>
                <div className="track-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="section-heading">
            <h2>About Oloreo Logistics ltd</h2>
            <div className="heading-line" />
          </div>

          <div className="about-text">
            <p>
              OLOREO Logistics ltd is a dynamic, multi-service enterprise
              dedicated to delivering excellence across a integrated portfolio
              of logistics, property, and support solutions.We provide a strong
              operational foundation in core logistics—including
              transportation, customs clearing, warehousing, and supply chain
              management—empowering businesses to move smarter and faster. Our
              expertise extends to comprehensive freight forwarding, efficient
              last-mile delivery, and professional cleaning services, ensuring
              end-to-end operational efficiency for our clients.Complementing
              our logistics prowess, our dedicated land and estate planning
              agents offer strategic guidance for property acquisition,
              development, and investment, turning real estate ambitions into
              tangible assets.
            </p>

            <p>
              We understand that every client is unique. Whether you are a
              growing enterprise or an established organization, we tailor our
              services to meet your specific needs with precision,
              professionalism, and genuine care.Driven by innovation and
              grounded in a commitment to efficiency, OLOREO Logistics is your
              trusted partner for achieving seamless operations and sustainable
              growth.
            </p>

            <a href="#mission" className="primary-button">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section id="mission" className="section mission-section">
        <div className="section-heading">
          <h2>Mision &amp; Values</h2>
          <div className="heading-line" />
        </div>

        <div className="mission-grid">
          <article className="mission-block">
            <h3>Vision</h3>
            <p>
              To be a leading multi-service logistics provider in East Africa.
            </p>
          </article>

          <article className="mission-block">
            <h3>MISSION</h3>
            <p>
              To deliver seamless, reliable, and innovative solutions across
              logistics, property, and support services, empowering businesses
              and communities to thrive through operational excellence and
              customer-centric service.
            </p>
          </article>

          <article className="mission-block values-block">
            <h3>CORE VALUES</h3>

            <ul>
              <li>
                <strong>Integrity:</strong> We uphold transparency, honesty,
                and accountability in all our transactions and relationships.
              </li>

              <li>
                <strong>Excellence:</strong> We strive for superior service
                delivery, continuous improvement, and measurable results.
              </li>

              <li>
                <strong>Innovation:</strong> We embrace technology and
                creative thinking to solve challenges and optimize performance.
              </li>

              <li>
                <strong>Collaboration:</strong> We believe in teamwork,
                partnerships, and shared success across our internal teams and
                external stakeholders.
              </li>

              <li>
                <strong>Sustainability:</strong> We are committed to
                responsible practices that support environmental stewardship
                and long-term growth.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section team-section">
        <div className="section-heading">
          <h2>Team</h2>
          <div className="heading-line" />
        </div>

        <div className="team-list">
          {team.map((member) => (
            <article className="team-member" key={member.name}>
              <div
                className="team-image"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              <div className="team-info">
                <h3>{member.name}</h3>

                <h4>{member.role}</h4>

                <a
                  className="whatsapp-button"
                  href={`https://wa.me/${member.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <h2>Let's Work Together</h2>
          <div className="heading-line" />
        </div>

        <div className="contact-container">
          <div className="contact-form-container">
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email address" />

              <textarea placeholder="Message" rows={5} />

              <button type="submit">Contact Us</button>
            </form>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <strong>Address</strong>
              <p>
                1st floor calabash express Bld, Katito - Kisumu Hwy, Katito
                town, Kisumu County
              </p>
            </div>

            <div className="contact-detail">
              <strong>Postal Address</strong>
              <p>P.O.BOX 242-40100 ksm</p>
            </div>

            <div className="contact-detail">
              <strong>Phone</strong>
              <p>+254-743 759 183 - HQ</p>
            </div>

            <div className="contact-detail">
              <strong>Email</strong>
              <p>info@oloreologistics.com</p>
            </div>

            <div className="contact-detail">
              <strong>Opening Hours</strong>
              <p>Mon-Fri - 08:00AM-06:00PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Oloreo Logistics Ltd</p>

          <a href="#home">Back to top</a>
        </div>
      </footer>
    </main>
  );
}