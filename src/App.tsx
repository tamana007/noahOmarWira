import './App.css'
import Footer from './components/Footer'
import Milestones from './pages/Milestones'
import LandingPage from './pages/LandingPage'
// import { store } from './store';
// import { Provider } from 'react-redux';
import Gallary from './pages/Gallary';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    // <Provider store={store}>

    <div className="appwrapper">
      <main className='mainContent'>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Milestones' element={<Milestones/>}/>
        <Route path='/gallary' element={<Gallary/>}/>
      </Routes>
      </main>
      
      {/* <LandingPage/> */}
      {/* <Milestones/> */}
      {/* <Gallary/> */}
      <Footer/>

    </div>
    // {/* </Provider> */}
  )
}

export default App
