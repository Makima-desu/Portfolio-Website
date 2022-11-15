function TopBarComponent()
{
    return (
        <div className='m-auto w-72 font-extralight text-2xl lg:w-96 lg:text-3xl'>
            <div className="border-b border-b-blue-200 rounded-md py-4 select-none">
                <div className="flex items-center justify-center">
                    <img src="/logo.png" className='rounded-full mr-2 w-12 lg:w-14' alt="logo here"></img>
                    <h1 className="text-slate-100 border-r pr-6 border-r-blue-300">mdesu</h1>
                    <h1 className="text-slate-100 ml-6">a website</h1>
                </div>
            </div>
        </div>
    )

}

export default TopBarComponent