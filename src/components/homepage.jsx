function Homepage()
{
    return (
        <div className="mt-10 md:w-[30rem] md:m-auto lg:w-[36rem] xl:w-[40rem] 2xl:w-[46rem] md:mt-10">
            <div className="p-4 md:border-l border-l-slate-500">
                <h1 className="text-3xl font-extrabold underline decoration-sky-500">About</h1>
                <div className="p-2 text-lg text-slate-300">
                    <p className="">This website is where I showcase any projects I have made.</p>
                    <p className="mt-4">I will also constantly try to improve the looks of the website untill I achieve a look I am satisfied with.</p>
                </div>
                {/* Projects */}
                <div className="mt-10">
                    <h1 className="flex flex-row items-center text-3xl gap-1 font-extrabold underline underline-offset-8 decoration-sky-500">
                    Projects
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                        </svg>
                    </h1>
                    <div className="m-auto w-max grid grid-cols-1 lg:grid-cols-2 lg:flex lg:justify-center mt-10 gap-10">
                        <div className="project-container group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-8 w-8 fill-slate-400 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <h1 className="text-center text-2xl pb-3 font-extrabold text-slate-700">Portfolio Project</h1>
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
            </div>
        </div>
    )

}

export default Homepage