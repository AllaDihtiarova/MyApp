import { BrowserRouter, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD:src/Navigation.js
import { About, Blog, Contact, Help, Home } from './screens';
=======
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Help } from './components/Help';
import { Library } from './screens/Library';
>>>>>>> B-1:src/App.js

export const Navigation = () => {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>
<<<<<<< HEAD:src/Navigation.js
          <Route path="/" element={<Home />} />
=======
          <Route path="/" element={<Library />} />
          <Route path="/homepage" element={<HomePage />} />
>>>>>>> B-1:src/App.js
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>

      </BrowserRouter>

    </div>

  );

}