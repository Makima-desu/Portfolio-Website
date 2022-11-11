function TopBarComponent()
{
    return (
        <div className=''>
            <div className="border-b border-b-blue-200 rounded-2xl m-auto w-96 py-4 select-none">
                <div className="flex items-center justify-center text-3xl">
                    <img src="/logo.png" width={50} height={10} className='rounded-full animate-bounce mr-2' alt="logo here"></img>
                    <h1 className="text-slate-100 border-r pr-6 border-r-blue-300">mdesu</h1>
                    <h1 className="text-slate-100 ml-6">a website</h1>
                </div>
            </div>
        </div>
    )

}

export default TopBarComponent