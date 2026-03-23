import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Routes/Index.jsx';
import NotFound from './Routes/NotFound.jsx';
import Products from './Routes/Products.jsx';
import About from './Routes/About.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
