import React from 'react'
import { AnimatePresence } from "framer-motion";
import './App.css';
import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Business from './pages/Business'
import GoodGovernance from './pages/GoodGovernance'
import InvestorRelation from './pages/InvestorRelation'
import NewsEvents from './pages/NewsEvents'
import CorpSocRes from './pages/CorpSocRes'
import AdminHome from './Admin/pages/AdminHome';
import NewsDetail from './pages/NewsDetail';
import GoodGovernanceDetail from './pages/GoodGovernanceDetail';
import Shareholder from './pages/Shareholder';
import ShareholderDetails from './pages/ShareholderDatails';

const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter >
      <Route exact path='/' element={<Home />} />
      <Route path='/about-ncl' element={<AboutUs />} />
      <Route path='/business-ncl' element={<Business />} />
      <Route path='/good-governance-ncl' element={<GoodGovernance />} />
      <Route path='/good-governance-ncl/:category' element={<GoodGovernanceDetail />} />
      <Route path='/investor-relation-ncl' element={<InvestorRelation />} />
      <Route path='/news-events-ncl' element={<NewsEvents />} />
      <Route path='/news-events-ncl/:category/:id' element={<NewsDetail />} />
      <Route path='/corperate-social-responsibility' element={<CorpSocRes />} />

      {/* Admin Panel */}
      <Route path='/admin-control-nclth' element={<AdminHome />} />
    </AnimatePresence>
  )

}

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-ncl' element={<AboutUs />} />
        <Route path='/business-ncl' element={<Business />} />
        <Route path='/good-governance-ncl' element={<GoodGovernance />} />
        <Route path='/good-governance-ncl/:category' element={<GoodGovernanceDetail />} />
        <Route path='/investor-relation-ncl' element={<InvestorRelation />} />
        <Route path='/investor-relation-ncl/shareholder-information' element={<Shareholder />} />
        <Route path='/investor-relation-ncl/shareholder-information/:name' element={<ShareholderDetails />} />
        <Route path='/news-events-ncl' element={<NewsEvents />} />
        <Route path='/news-events-ncl/:category/:id' element={<NewsDetail />} />
        <Route path='/corperate-social-responsibility' element={<CorpSocRes />} />

        {/* Admin Panel */}
        <Route path='/admin-control-nclth' element={<AdminHome />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
