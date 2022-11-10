import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { About, Blog, Contact, Help, Home, Library, ReportDetails, Author, Articles, News, Info, CounterScreen } from '../screens';
import { NavBar } from '../components';
import routeNames from './routeNames';

export const Navigator = () => {
  return (
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate replace to={routeNames.HOME} />} />
          <Route path={routeNames.HOME} element={<Home />}/>
          <Route path={routeNames.LIBRARY} element={<Library />} />
          <Route path={routeNames.ABOUT} element={<About />} />
          <Route path={routeNames.BLOG} element={<Blog />} />
          <Route path={routeNames.CONTACT} element={<Contact />} />
          <Route path={routeNames.HELP} element={<Help />} />
          <Route path={routeNames.REPORT_DETAILS} element={<ReportDetails />} />
          <Route path={routeNames.ARTICLES} element={<Articles />} />
          <Route path={routeNames.AUTHOR} element={<Author />} />
          <Route path={routeNames.NEWS } element={<News/>} />
          <Route path={routeNames.INFO} element={<Info />} />
          <Route path={routeNames.COUNTER} element={<CounterScreen/>} />
        </Routes>
      </BrowserRouter>
  );
};
