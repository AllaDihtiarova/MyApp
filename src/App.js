import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Help } from './components/Help';
import { Library } from './screens/Library';

export const App = () => {

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