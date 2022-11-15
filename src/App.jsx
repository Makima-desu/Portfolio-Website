import TopBarComponent from './components/topBar'
import AboutComponent from './components/aboutComponent'
import RightSideBarComponent from './components/RightSideBar'
import Projects from './components/projects'

function App() {

  return (
    <div className='h-screen w-screen bg-slate-900 overflow-hidden text-slate-100'>
      <TopBarComponent/>
      {/* Main content */}
      <div className='flex flex-col justify-center items-center my-20 m-auto w-max'>
      {/* Content Page */}
        <div className='w-[30rem] lg:w-[38rem] xl:w-[46rem] 2xl:w-[50rem]'>
          <AboutComponent/>
          <Projects/>
          <RightSideBarComponent/>
        </div>
        {/* Sidebards and footers */}
      </div>
    </div>

  )
}

export default App
