
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import About from "pages/About";
import Contact from "pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <header className="pageheader">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        {/* <Route path="/repair-services" element={<RepairServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/wishlist" element={<Wishlist />} /> */}
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}



export default App;
