import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './screens/HomePage';
import { About } from './screens/About';
import { Blog } from './screens/Blog';
import { Contact } from './screens/Contact';
import { Help } from './screens/Help';
import { Library } from './screens/Library';

export const Navigation = () => {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>

      </BrowserRouter>

    </div>

  );

}