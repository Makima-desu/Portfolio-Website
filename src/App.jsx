import TopBarComponent from './components/topBar'
import AboutComponent from './components/aboutComponent'
import RightSideBarComponent from './components/RightSideBar'

function App() {

  return (
    <div className='h-screen w-screen bg-slate-900 overflow-x-hidden font-extralight text-slate-100'>
      <TopBarComponent/>
      <RightSideBarComponent/>
      <AboutComponent/>


    </div>

  )
}

export default App
