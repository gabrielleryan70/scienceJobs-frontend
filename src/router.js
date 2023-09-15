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
import JobSearch1 from "./views/JobSearch1"
import ContactForm from "./views/ContactForm"
import DiversayStatement from "./views/DiversayStatement"
import FindEmployers from "./views/FindEmployers"
 
import Australia from "./views/Australia"
import Layout from './components/Layout'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            exact
            path='/'
            element={<Navigate to='/home' replace />}
          />
          <Route exact path='/home' element={<Home />} />
          <Route path='/termsConditions' element={<TermsConditions />} />
          <Route path='/jobSearch' element={<JobSearch />} />
          <Route path='/jobSearch1/:name?' element={<JobSearch1 />} />
          <Route path='/diversayStatement' element={<DiversayStatement />} />
          <Route path='/contactForm' element={<ContactForm />} />
          <Route path='/findEmployers' element={<FindEmployers />} />
          <Route exact path='/australia' element={<Australia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter