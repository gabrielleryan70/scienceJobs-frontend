import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home"
import TermsConditions from "./views/TermsConditions"
import JobSearch from "./views/JobSearch"
import AboutAJ from "./views/AboutAJ"
import FAQ from "./views/FAQ"
import ContactForm from "./views/ContactForm"
import DiversayStatement from "./views/DiversayStatement"
import FindEmployers from "./views/FindEmployers"
import Australia from "./views/Australia"
import Asia from "./views/Asia"
import Africa from "./views/Africa"
import Europe from "./views/Europe"
import SouthAmerica from "./views/SouthAmerica"
import MiddleEast from "./views/MiddleEast"
import Canada from "./views/Canada"
import UK from "./views/UK"
import NewZealand from "./views/NewZealand"
import USA from "./views/USA"
import Layout from './components/Layout'
//import Region from "./views/Region"
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<Home />} />
          
          <Route exact path='/home' element={<Home />} />
          <Route path='/termsConditions' element={<TermsConditions />} />
          <Route path='/jobSearch' element={<JobSearch />} />
          <Route path='/JobSearch/:name?' element={<JobSearch />} />
          <Route path='/aboutAJ' element={<AboutAJ />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/JobSearch' element={<JobSearch />} />
          <Route path='/diversayStatement' element={<DiversayStatement />} />
          <Route path='/contactForm' element={<ContactForm />} />
          <Route path='/findEmployers' element={<FindEmployers />} />
          <Route exact path='/Australia' element={<Australia />} />
          <Route exact path='/USA' element={<USA />} />
          <Route exact path='/Asia' element={<Asia />} />
          <Route exact path='/Africa' element={<Africa />} />
          <Route exact path='/Australia' element={<Australia />} />
          <Route exact path='/UK' element={<UK />} />
          <Route exact path='/New-Zealand' element={<NewZealand />} />
          <Route exact path='/South-America' element={<SouthAmerica />} />
          <Route exact path='/Canada' element={<Canada />} />
          <Route exact path='/Europe' element={<Europe />} />
          <Route exact path='/MiddleEast' element={<MiddleEast />} />
      

          {/* <Route path='/:name' element={<Region />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter