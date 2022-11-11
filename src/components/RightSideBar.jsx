function RightSideBarComponent()

// w-[19.5rem] py-10 overflow-y-auto hidden xl:block
{
    return (
        <div className="fixed top-40 right-[40rem] ">
            <div className="text-2xl border-l px-6 border-slate-700 text-slate-100">
                <h1 className="pb-2">Website legend</h1> 

                <ul className="text-slate-400 pb-2 m-1 w-fit">
                    <li className="list"><span className="list-v">{">"} </span>
                    <a className="" href="#about">about</a></li>

                    <li className="list"><span className="list-v">{">"} </span>
                    <a className="" href="#about">else</a></li>
                </ul>

            </div>
        </div>

    )

}

export default RightSideBarComponent