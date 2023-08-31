import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'

const Layout = () => {
  const darkMode = useSelector((state) => state.posts.darkMode)
  return (
    <div className={`h-full ${darkMode}`}>
     
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
