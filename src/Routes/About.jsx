import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, Users, Award, Shield, Target, Leaf, Eye, Handshake } from 'lucide-react';

const stats = [
  { number: '25+', label: 'Years of Service' },
  { number: '50K+', label: 'Happy Customers' },
  { number: '10K+', label: 'Products Available' },
  { number: '98%', label: 'Customer Satisfaction' },
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'We treat every customer with genuine care and empathy, understanding their shopping and health needs.' },
  { icon: Shield, title: 'Trust', desc: 'Building lasting relationships through transparency, honesty, and reliable service.' },
  { icon: Target, title: 'Excellence', desc: 'Committed to the highest standards in pharmaceutical care and customer service.' },
  { icon: Leaf, title: 'Quality', desc: 'Promoting excellence in every product we offer - from medications to groceries and pet supplies.' },
  { icon: Eye, title: 'Innovation', desc: 'Embracing modern solutions to make shopping more convenient and accessible for all your needs.' },
  { icon: Handshake, title: 'Community', desc: 'Active participants in community initiatives, supporting local farmers and pet welfare programs.' },
];

const team = [
  { name: 'Dr. James Wilson', role: 'Head Pharmacist', initial: 'JW' },
  { name: 'Dr. Sarah Mitchell', role: 'Clinical Pharmacist', initial: 'SM' },
  { name: 'Robert Chen', role: 'Operations Manager', initial: 'RC' },
  { name: 'Lisa Thompson', role: 'Customer Relations', initial: 'LT' },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <Container>
            <h1>About Truetouch Pharmacy, Supermarket & Pet Store</h1>
            <p className="text-muted-custom mb-3" style={{ fontSize: '1.1rem' }}>
              Serving our community with pharmacy care, quality groceries, and pet supplies since 2001
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <span className="section-badge">Our Mission</span>
                <h2 className="section-title">Dedicated to Your Complete Shopping Needs</h2>
                <p className="text-muted-custom" style={{ lineHeight: 1.8 }}>
                  Since 2001, Truetouch has been a cornerstone of our community, offering more than just pharmacy services. 
                  We believe that everyone deserves access to quality medications, fresh groceries, premium pet supplies, 
                  and exceptional service all under one roof.
                </p>
                <p className="text-muted-custom" style={{ lineHeight: 1.8 }}>
                  Our team of licensed pharmacists, grocery experts, and pet care specialists work tirelessly to ensure 
                  you receive the best possible service. From prescription medications to fresh produce and premium pet food, 
                  we're here to support your complete shopping experience.
                </p>
                <a href="/contact" className="btn btn-primary mt-2">Get in Touch</a>
              </Col>
              <Col lg={6}>
                <div className="rounded-custom overflow-hidden" style={{ 
                  background: 'linear-gradient(135deg, rgba(var(--mc-primary-rgb), 0.1), rgba(var(--mc-accent-rgb), 0.1))',
                  padding: '3rem',
                  textAlign: 'center'
                }}>
                  <Users size={120} style={{ color: 'var(--mc-primary)', opacity: 0.4 }} />
                  <h4 className="mt-3" style={{ color: 'var(--mc-primary)' }}>25+ Years of Excellence</h4>
                  <p className="text-muted-custom mb-0">Trusted by over 50,000 customers</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-section section-padding">
          <Container>
            <Row>
              {stats.map((stat, index) => (
                <Col key={index} sm={6} lg={3}>
                  <div className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <p className="text-muted-custom mt-2 mb-0" style={{ fontWeight: 500 }}>{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Values */}
        <section className="section-padding">
          <Container>
            <div className="text-center mb-5">
              <span className="section-badge">Our Values</span>
              <h2 className="section-title">What Drives Us Forward</h2>
              <p className="section-subtitle mx-auto">
                Our core values shape every interaction and decision we make.
              </p>
            </div>
            <Row className="g-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Col key={index} md={6} lg={4}>
                    <div className="value-card">
                      <div className="value-icon">
                        <Icon size={26} />
                      </div>
                      <h5>{value.title}</h5>
                      <p className="text-muted-custom mb-0" style={{ fontSize: '0.92rem' }}>{value.desc}</p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>

        {/* Team */}
        <section className="bg-section section-padding">
          <Container>
            <div className="text-center mb-5">
              <span className="section-badge">Our Team</span>
              <h2 className="section-title">Meet the Experts</h2>
              <p className="section-subtitle mx-auto">
                Our dedicated team of professionals is here to serve all your shopping needs.
              </p>
            </div>
            <Row className="g-4 justify-content-center">
              {team.map((member, index) => (
                <Col key={index} sm={6} lg={3}>
                  <div className="team-card">
                    <div className="team-avatar">{member.initial}</div>
                    <h5 style={{ fontSize: '1.1rem' }}>{member.name}</h5>
                    <p className="text-muted-custom mb-0" style={{ fontSize: '0.9rem' }}>{member.role}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
