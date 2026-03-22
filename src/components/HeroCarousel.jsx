import { Carousel, Container } from 'react-bootstrap';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import hero6 from '../assets/hero-6.jpg';

const slides = [
  {
    image: hero6,
    title: 'Your Complete Shopping Destination',
    subtitle: 'Pharmacy, Supermarket & Pet Store All-in-One',
    description: 'From prescription medications to fresh groceries and premium pet supplies - everything you need under one roof.',
    cta: 'Shop Now',
    ctaLink: '/products',
  },
  {
    image: hero2,
    title: 'Free Delivery on Orders Over ₦25,000',
    subtitle: 'Convenience at your doorstep',
    description: 'Get your medicines, groceries, and pet essentials delivered right to your door. Fast, reliable, and always on time.',
    cta: 'Order Now',
    ctaLink: '/products',
  },
  {
    image: hero3,
    title: 'Quality Pet Care Products',
    subtitle: 'Everything for your furry friends',
    description: 'Premium pet food, toys, and healthcare products. Keep your pets happy and healthy with our trusted brands.',
    cta: 'Shop Pet Supplies',
    ctaLink: '/products',
  },
  {
    image: hero1,
    title: 'Fresh Groceries & Essentials',
    subtitle: 'Daily needs delivered fresh',
    description: 'Quality groceries, household items, and daily essentials. Experience supermarket shopping at its best.',
    cta: 'Shop Groceries',
    ctaLink: '/products',
  },
];

const HeroCarousel = () => {
  return (
    <Carousel fade interval={5000} className="hero-carousel" controls indicators>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <Container>
                <div className="hero-content fade-in-up">
                  <span className="hero-badge">{slide.subtitle}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <div className="hero-buttons d-flex gap-3 flex-wrap">
                    <a href={slide.ctaLink} className="btn btn-primary btn-lg">{slide.cta}</a>
                    <a href="/about" className="btn btn-outline-light btn-lg">Learn More</a>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
