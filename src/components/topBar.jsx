function TopBar()
{
    return (
        <div className="sticky flex bg-slate-800 border-b border-b-slate-500 p-4 lg:px-36 xl:px-56 2xl:px-64">
            <div className="flex flex-row items-center gap-2 font-light text-xl lg:text-2xl select-none">
                <img src="/logo.png" className="w-10 md:w-11 lg:w-12 rounded-full"></img>
                <h1 className="border-r pr-2 border-r-slate-400">mdesu</h1>
                <h1 className="">Portfolio website</h1>
            </div>
            {/* Add github link img */}
            <div className="flex flex-row ml-auto w-max items-center">

                {/* Pop up with links when screen is smaller than md */}
                <div className="flex group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-400 md:w-0 group-hover:scale-0 overflow-hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <div className="fixed block scale-0 origin-right top-0 right-0 w-56 md:w-0 h-screen bg-gray-700 group-hover:scale-100 border border-sky-200">
                        <h1 className="m-auto text-center text-xl select-none font-bold p-2 font-mono border-b border-b-slate-900">Personal Links</h1>
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
                    </div>
                </div>
                {/* When screen is bigger than md */}
                <div className="hidden md:flex">
                    <div className="flex flex-row items-center gap-4">
                        <a href="https://github.com/Makima-desu" target="blank" className="" title="GitHub Profile">
                            <svg viewBox="0 0 16 16" className="listMD" fill="currentColor" aria-hidden="true">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/Makima-desu/Portfolio-Website" title="Website Repository" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="listMD">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default TopBar

