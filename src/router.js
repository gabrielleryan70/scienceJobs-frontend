import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./views/Home"

import SearchJobResult from "./views/SearchJobResult"
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
            <Route path='/searchJobResult' element={<SearchJobResult />} />
            <Route exact path='/australia' element={<Australia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
export default AppRouter