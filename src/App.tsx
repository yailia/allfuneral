import { Route, Routes } from 'react-router-dom'
import { appUrls } from './appUrls'
import { Layout } from './components/Layout'
import { Home } from './Pages/Home'
import { Market } from './Pages/Market/Market'
import './App.css'
import { useAppDispatch } from './hooks/redux'
import { useEffect } from 'react'
import { getToken } from './store/reducers/ActionCreators'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!localStorage.getItem("X-AUTH-TOKEN")){
      dispatch(getToken)
    }
  }, [])

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path={appUrls.home}
            element={<Home />}
          />
          <Route 
            path={appUrls.market}
            element={<Market />}
          />
        </Route>
      </Routes>
  );
}

export default App
