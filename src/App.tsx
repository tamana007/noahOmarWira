import './App.css'
import Footer from './components/Footer'
import Milestones from './pages/Milestones'
import LandingPage from './pages/LandingPage'
// import './styles/app.scss';
import { store } from './store';

import { Provider } from 'react-redux';
import Gallary from './pages/Gallary';

function App() {

  return (
    <Provider store={store}>

    <div className="appwrapper">
      
      {/* <LandingPage/> */}
      <Milestones/>
      {/* <Gallary/> */}
      {/* <Footer/> */}

    </div>
    </Provider>
  )
}

export default App
