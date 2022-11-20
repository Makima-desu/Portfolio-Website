function Homepage()
{
    return (
        <div className="mt-10 md:w-[30rem] md:m-auto lg:w-[40rem] xl:w-[40rem] 2xl:w-[46rem] md:p-4">
            <div className="p-4">
                <h1 className="flex flex-row items-center text-3xl gap-1 font-extrabold underline underline-offset-8 decoration-sky-500">
                About
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </h1>
                <div className="p-2 text-lg text-slate-300 mt-4">
                    <p className="">It's <span className="font-bold">reponsive!</span> meaning that it works on any device and screen.</p>
                    <p className="mt-4">This website is where I showcase any projects I have made.</p>
                    <p className="mt-4">I will also constantly try to improve the looks of the website untill I achieve a look I am satisfied with.</p>
                </div>
            </div>
            {/* Projects element*/}
            <div className="p-4 mt-10 overflow-hidden">
                <h1 className="flex flex-row items-center text-3xl gap-1 font-extrabold underline underline-offset-8 decoration-sky-500">
                My Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                    </svg>
                </h1>
                {/* lg:grid-cols-2 for when its multiple projects */}
                <div className="m-auto w-max grid grid-cols-1 mt-10 gap-10 p-2">
                    <div className="project-container group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-8 w-8 fill-slate-400 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <h1 className="text-center text-2xl pb-3 font-extrabold text-slate-700">Portfolio Website</h1>
                        <div className="inner-project-contianer text-slate-100">
                            <h1 className="p-4 text-xl font-extrabold">About:</h1>
                            <p className="text-center text-slate-300">Personal Website where I show or add any projects I have made or worked on.</p>
                            <h1 className="p-4 text-xl font-extrabold">Created With:</h1>
                            <p className="flex justify-center space-x-4 text-slate-300 font-bold">
                                <span className="rounded-full border-2 border-slate-400 p-2">Tailwind</span>
                                <span className="rounded-full border-2 border-slate-400 p-2">Vite + React</span>
                            </p>
                        </div>
                        <div className="external-project-container select-none">You are currently here</div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="p-4 mt-10">
                <h1 className="flex flex-row items-center text-3xl gap-1 font-extrabold underline underline-offset-8 decoration-sky-500">
                    Strengths
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 fill-yellow-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </h1>
                <div className="p-2 text-lg text-slate-300 mt-4">
                    <p className="font-bold text-center">Note: <span className="font-normal">ranked by category from left to right.</span></p>
                    <div className="p-4 mt-2">
                        <h1 className="font-extrabold text-2xl text-center pb-4">Languages</h1>
                        <ul className="flex flex-row gap-6 justify-center m-4" >
                            <a href="https://www.javascript.com" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">JavaScript</li></a>
                            <a href="https://www.typescriptlang.org" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 transition-all hover:text-blue-300 overflow-hidden">TypeScript</li></a>
                            <a href="https://www.learncpp.com" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">C++</li></a>
                        </ul>
                        <h1 className="font-extrabold text-2xl mt-8 text-center pb-4">Libraries</h1>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 m-4 text-center text-md md:text-lg">
                            <a href="https://reactjs.org" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 transition-all hover:text-blue-300 overflow-hidden">React.js</li></a>
                            <a href="https://tailwindcss.com" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">Tailwind</li></a>
                            <a href="https://nextjs.org" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">Next.js</li></a>
                            <a href="https://angular.io/guide/router-tutorial" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">Angular</li></a>
                            <a href="https://www.electronjs.org" target="blank"><li className="border p-2 rounded-md hover:bg-slate-500 hover:text-blue-300 transition-all overflow-hidden">Electron.js</li></a>
                        </ul>
                    </div>

                </div>
            </div>
            {/* Credits */}
            <div className="p-4 mt-10 pb-14">
                <h1 className="flex flex-row items-center text-3xl gap-1 font-extrabold underline underline-offset-8 decoration-sky-500">
                    Credits
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </h1>
                <div className="p-2 mt-4 text-lg text-slate-300">
                    <p>Made by <a href="https://github.com/Makima-desu" target={"blank"} className="underline text-blue-300 hover:text-blue-100 transition-all">makima-desu</a></p>
                    <p className="mt-4">
                        However, I took inspiration from the <a href="https://tailwindcss.com" target={"blank"} className="underline text-blue-300 hover:text-blue-100 transition-all">Tailwind</a> website.
                        <br></br>
                        As well as <a href="https://youtu.be/b0pkpcD8Ms4" target={"blank"} className="underline text-blue-300 hover:text-blue-100 transition-all">this video</a> by ForrestKnight.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Homepage