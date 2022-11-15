function AboutComponent()
{
    return (
        <>
        <div className="">
            <h1 className="text-xl lg:text-2xl border-b-4 border-b-sky-800 rounded-md font-bold text-center pb-4 select-none" id="#about">About</h1>
            <div className="flex justify-center text-md lg:text-lg mt-6 text-white p-4 text-center">
                <p>
                Let's first take a look at how this effect works. 
                It needs to have a group class on the parent element. 
                Then we can add hover classes to children of this 
                group element by using the group-hover: class. 
                Let's try and make a super simple effect, 
                where we have a div with two spans inside. 
                On hover, each span will get its own color.</p>
            </div>
        </div>
        </>
    )

}

export default AboutComponent