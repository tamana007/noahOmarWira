import './App.css'
import Footer from './components/Footer'
import Milestones from './pages/Milestones'
import LandingPage from './pages/LandingPage'
// import './styles/app.scss';

function App() {

  return (
    <div className="appwrapper">
      
      {/* <LandingPage/> */}
      <Milestones/>
      <Footer/>

    </div>
  )
}

export default App
