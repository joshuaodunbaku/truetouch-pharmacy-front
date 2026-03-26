import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LayoutDashboard, Menu, X } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Simple Header */}
      <nav style={{ backgroundColor: '#fff', borderBottom: '1px solid #dee2e6', padding: '1rem' }}>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h4 className="mb-0">Dashboard</h4>
            </div>
          </div>
        </Container>
      </nav>

      {/* Simple Sidebar */}
      <div style={{ display: 'flex' }}>
        <aside style={{
          width: sidebarOpen ? '250px' : '0',
          backgroundColor: '#fff',
          borderRight: '1px solid #dee2e6',
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 70px)'
        }}>
          <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
            <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
              Simple dashboard layout
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <Container>
            <Row>
              <Col>
                <h2>Welcome to Dashboard</h2>
                <p className="text-muted">This is the basic dashboard structure.</p>
              </Col>
            </Row>
            
            {/* Basic Stats */}
            <Row className="g-3 mt-3">
              <Col sm={6} lg={3}>
                <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                  <h5 style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Revenue</h5>
                  <h3 style={{ marginBottom: '0' }}>₦2,450,000</h3>
                  <small style={{ color: '#28a745' }}>+12.5% from last month</small>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                  <h5 style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Orders</h5>
                  <h3 style={{ marginBottom: '0' }}>342</h3>
                  <small style={{ color: '#28a745' }}>+8.3% from last month</small>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                  <h5 style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Customers</h5>
                  <h3 style={{ marginBottom: '0' }}>1,284</h3>
                  <small style={{ color: '#28a745' }}>+5.7% from last month</small>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
                  <h5 style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Products</h5>
                  <h3 style={{ marginBottom: '0' }}>48</h3>
                  <small style={{ color: '#6c757d' }}>No change</small>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
