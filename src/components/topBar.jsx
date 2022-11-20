import { useState, useRef, useEffect } from "react"


function TopBar()
{
    // show visible element of links to repository and profile
    const [showBlock, setShowBlock] = useState(false)
    const [blur, setBlur] = useState(false)

    const block = useRef(null)
    const menuButton = useRef(null)

    // to hide the pop up box
    useEffect( () =>
    {
        // event listener for window
        window.addEventListener('click', (event) => 
        {
            // if menu button contains the click then dont count it
            if (!menuButton.current?.contains(event.target))
            {
                // if the block menu contains the click dont do anything else hide the block menu
                if (!block.current?.contains(event.target))
                {
                    setShowBlock(false)

                }
    
            }

        })

    })



    return (
        // Top Bar
        <div className="sticky flex bg-slate-800 border-b border-b-slate-500 p-4 backdrop-blur-sm bg-indigo-900/5">
            {/* Website Logo element */}
            <div className="flex flex-row items-center gap-2 font-light text-xl lg:text-2xl select-none">
                <img src="/logo.png" className="w-10 md:w-11 lg:w-12 rounded-full"></img>
                <h1 className="border-r pr-2 py-1 border-r-slate-400">mdesu</h1>
                <h1 className="">Portfolio website</h1>
            </div>
            {/* Personal Links in the right corner of the top bar */}
            <div className="flex flex-row ml-auto w-max items-center">

                {/* Pop up with links when screen is smaller than md */}
                <div className="flex">
                    <button ref={menuButton} onClick={() => setShowBlock(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-400 hover:text-slate-500 md:w-0 overflow-hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    {/* If true show block of links content */}
                    {showBlock && (
                    <div ref={block} className="fixed block origin-right right-1 top-1 w-64 md:w-0 h-fit bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-slate-800 m-1 rounded-lg overflow-hidden">
                            <div className="m-auto flex text-xl select-none font-bold p-2 font-mono border-b border-b-slate-900 w-full">
                                <h1 className="py-3 pl-8 font-extrabold text-2xl items-center flex justify-center w-full">Links</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer rounded-full hover:bg-slate-500 transition-all" onClick={() => setShowBlock(false)} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="">
                                <a href="/" className="listSM">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <h1>Homepage</h1>
                                </a>
                                <a href="https://github.com/Makima-desu" target="blank" className="listSM">
                                    <svg viewBox="0 0 16 16" className="w-8 h-8" fill="currentColor" aria-hidden="true">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                    <h1>GitHub Profile</h1>
                                </a>
                                <a href="https://github.com/Makima-desu/Portfolio-Website" target="blank" className="listSM">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                    <h1>Website Repository</h1>
                                </a>
                                <a href="https://www.chess.com/member/alittlebitofchessing" target="blank" className="listSM border-b-0">
                                    <img src="P-white.svg" className="w-8 h-8"></img>
                                    <h1>Chess.com Profile</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    )}
                    
                </div>
                <div className="hidden md:flex px-4 select-none">
                    <a href="/" className="listMD" title="Homepage">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </a>
                </div>
                {/* When screen is bigger than md */}
                <div className="hidden md:flex">
                    <div className="flex flex-row items-center gap-4 border-l pl-4 py-1 border-l-slate-400">
                        <a href="https://github.com/Makima-desu" target="blank" className="" title="GitHub Profile">
                            <svg viewBox="0 0 16 16" className="listMD" fill="currentColor" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/Makima-desu/Portfolio-Website" title="Website Repository" target="blank" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="listMD">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/* Maybe routing */}
        </div>
    )

}

export default TopBar

