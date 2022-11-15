function RightSideBarComponent()

// w-[19.5rem] py-10 overflow-y-auto hidden xl:block
// max(0px,calc(50%-45rem))
{
    return (
        <div className="fixed hidden lg:flex lg:w-max select-none top-40 right-[max(0px,calc(50%-45rem))] mr-5">
            <div className="text-2xl pl-6 ml-10 items-center text-slate-100 border-l border-slate-700 ">
                <h1 className="pb-1 text-lg underline decoration-indigo-500 underline-offset-8">Website legend</h1>

                <ul className="text-slate-400 pb-2 m-2 w-fit text-lg font-semibold">
                    <li className="group list"><span className="list-v" >{">"} </span>
                    <a className="my-10" href="#about">About</a></li>

                    <li className="group list"><span className="list-v">{">"} </span>
                    <a className="" href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>

    )

}

export default RightSideBarComponent