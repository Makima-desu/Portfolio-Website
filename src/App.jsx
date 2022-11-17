import Homepage from "./components/homepage"
import TopBar from "./components/topBar"

function App() {

  return (
    <div className='h-screen w-screen bg-slate-900 overflow-auto text-slate-100'>
      <TopBar/>
      {/* Main content */}
      <Homepage/>
      {/* Content Page */}

      {/* Sidebards and footers */}
    </div>

  )
}

export default App
