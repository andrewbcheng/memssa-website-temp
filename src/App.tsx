import { Route, Routes, useLocation } from 'react-router-dom'
//import Navigation from './components/Navigation/Navigation'
import { NAV_BAR_ITEMS } from './data/navbaritems.data'
import Home from './pages/Home.page'
import './styles/defaults.css'
import './styles/theme.css'
import NotFound from './pages/NotFound.page'
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname])

  //<Route index element={<Home />} />
  
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {NAV_BAR_ITEMS.map((item) => {
          if (item.subItems) {
            return item.subItems.map((subItem) => {
              return <Route path={subItem.path} element={subItem.component!()} />
            })
        } else {
            return <Route path={item.path} element={item.component!()} />
          }
        })}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
