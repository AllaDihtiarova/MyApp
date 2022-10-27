import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Blog, Contact, Help, Home, Library } from './screens';
import { NavBar } from './components';

export const Navigator = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
  );
};
