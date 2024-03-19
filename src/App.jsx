import './App.css'
import { Aboutus } from './comoponents/Aboutus'
import Asgaurd from './comoponents/Asgaurd'
import Backtotop from './comoponents/Backtotop'
import Footersec from './comoponents/Footersec'
import Formsec from './comoponents/Formsec'
import Gamecity from './comoponents/Gamecity'
import Header from './comoponents/Header'
import Ourteam from './comoponents/Ourteam'
import Preloader from './comoponents/Preloader'
import Roadmap from './comoponents/Roadmap'
import Swipesec from './comoponents/Swipesec'
import Xavier from './comoponents/Xavier'
import Xavierfbre from './comoponents/Xavierfbre'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Preloader />
        <Backtotop />
        <Header />
        <Swipesec />
        <Aboutus />
        <Xavier />
        <Xavierfbre />
        <Asgaurd />
        <Ourteam />
        <Gamecity />
        <Roadmap />
        <Formsec />
        <Footersec />
      </div>
    </>
  )
}

export default App
