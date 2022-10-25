import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Blog, Contact, Help, Home } from './screens';

export const Navigation = () => {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>

      </BrowserRouter>

    </div>

  );

}