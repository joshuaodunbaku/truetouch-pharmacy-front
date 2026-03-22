import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { Heart, Star, ShoppingCart, Search, SlidersHorizontal } from 'lucide-react';

const categories = ['All', 'Supplements', 'Vitamins', 'Medical Supplies', 'Personal Care', 'Devices', 'Pain Relief', 'Skin Care'];

const allProducts = [
  { name: 'Vitamin D3 Complex', category: 'Supplements', price: 12500, oldPrice: 15000, rating: 4.8, reviews: 124, badge: 'Best Seller', badgeColor: '#e74c3c' },
  { name: 'Daily Multivitamin', category: 'Vitamins', price: 9500, rating: 4.6, reviews: 89 },
  { name: 'Omega-3 Fish Oil', category: 'Supplements', price: 18500, oldPrice: 22000, rating: 4.9, reviews: 203, badge: 'Sale', badgeColor: 'var(--mc-accent)' },
  { name: 'First Aid Kit Pro', category: 'Medical Supplies', price: 27500, rating: 4.7, reviews: 67, badge: 'New', badgeColor: 'var(--mc-primary)' },
  { name: 'Blood Pressure Monitor', category: 'Devices', price: 45000, oldPrice: 60000, rating: 4.8, reviews: 156, badge: 'Sale', badgeColor: 'var(--mc-accent)' },
  { name: 'Organic Hand Sanitizer', category: 'Personal Care', price: 3500, rating: 4.5, reviews: 312 },
  { name: 'Immune Boost Tablets', category: 'Supplements', price: 11500, rating: 4.7, reviews: 178, badge: 'Popular', badgeColor: '#9b59b6' },
  { name: 'Digital Thermometer', category: 'Devices', price: 8500, rating: 4.6, reviews: 94 },
  { name: 'Vitamin C 1000mg', category: 'Vitamins', price: 7500, rating: 4.8, reviews: 267 },
  { name: 'Pain Relief Gel', category: 'Pain Relief', price: 6500, oldPrice: 8000, rating: 4.5, reviews: 143, badge: 'Sale', badgeColor: 'var(--mc-accent)' },
  { name: 'Moisturizing Cream', category: 'Skin Care', price: 10500, rating: 4.6, reviews: 89 },
  { name: 'Zinc Supplements', category: 'Supplements', price: 5500, rating: 4.4, reviews: 76 },
  { name: 'Bandage Roll Set', category: 'Medical Supplies', price: 4500, rating: 4.7, reviews: 201 },
  { name: 'Sunscreen SPF 50', category: 'Skin Care', price: 8500, rating: 4.8, reviews: 185, badge: 'Popular', badgeColor: '#9b59b6' },
  { name: 'Ibuprofen Tablets', category: 'Pain Relief', price: 3200, rating: 4.5, reviews: 456 },
  { name: 'Pulse Oximeter', category: 'Devices', price: 22000, oldPrice: 30000, rating: 4.7, reviews: 112, badge: 'Sale', badgeColor: 'var(--mc-accent)' },
];

const formatNaira = (amount) => `₦${amount.toLocaleString()}`;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = allProducts.filter((p) => {
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <Container>
            <h1>Our Products</h1>
            <p className="text-muted-custom mb-3" style={{ fontSize: '1.1rem' }}>
              Browse our complete range of health and wellness products
            </p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Products</li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Products */}
        <section className="section-padding">
          <Container>
            {/* Search & Filter */}
            <div className="d-flex flex-column flex-md-row gap-3 mb-4 align-items-md-center justify-content-between">
              <div className="position-relative" style={{ maxWidth: 360, flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--mc-text-muted)' }} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ paddingLeft: 42, borderRadius: 8, borderColor: 'var(--mc-border)' }}
                />
              </div>
              <div className="d-flex align-items-center gap-2">
                <SlidersHorizontal size={16} className="text-muted-custom" />
                <span className="text-muted-custom" style={{ fontSize: '0.9rem' }}>{filtered.length} products</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="d-flex flex-wrap gap-2 mb-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <Row className="g-4">
              {filtered.map((product, index) => (
                <Col key={index} sm={6} lg={3}>
                  <div className="product-card">
                    <div className="product-img-wrap">
                      {product.badge && (
                        <span className="product-badge text-white" style={{ backgroundColor: product.badgeColor }}>
                          {product.badge}
                        </span>
                      )}
                      <button className="product-wishlist">
                        <Heart size={16} />
                      </button>
                      <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingCart size={48} style={{ color: 'var(--mc-primary)', opacity: 0.3 }} />
                      </div>
                    </div>
                    <div className="card-body">
                      <span className="product-category">{product.category}</span>
                      <h6 className="product-title">{product.name}</h6>
                      <div className="d-flex align-items-center gap-1 mb-2">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                          ))}
                        </div>
                        <small className="text-muted-custom">({product.reviews})</small>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="product-price">
                          {formatNaira(product.price)}
                          {product.oldPrice && <span className="old-price">{formatNaira(product.oldPrice)}</span>}
                        </div>
                        <button className="btn btn-primary btn-sm" style={{ borderRadius: 8, padding: '6px 12px' }}>
                          <ShoppingCart size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {filtered.length === 0 && (
              <div className="text-center py-5">
                <Search size={48} style={{ color: 'var(--mc-text-muted)', opacity: 0.4 }} />
                <h5 className="mt-3">No products found</h5>
                <p className="text-muted-custom">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
