import React, { useEffect, useState } from 'react'

const AboutUsPage = () => {
    // const handleClick = (name) => {
    //     console.log("My name is" + name);
    // }
    // const handleEvent = (event) => {
    //     console.log('Event', event)
    // }
    const [value, setValue] = useState("")

    useEffect(()=>{
        console.log("This is about us page.")
      },[])


    const handleInputEvent = (event) => {
        setValue("The typed text:" + event)
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-2'>
        {/* <button onClick={() => console.log('Hello!')} className='bg-slate-700 px-4 py-2 rounded-md hover:bg-slate-500 active:bg-slate-300 text-white hover:cursor-pointer'>Click Me!</button>
        <button onClick={() => handleClick(' Dipesh Thing.')} className='bg-slate-700 px-4 py-2 rounded-md hover:bg-slate-500 active:bg-slate-300 text-white hover:cursor-pointer'>Console Name!</button>
        <button onClick={(e) => handleEvent(e)} className='bg-slate-700 px-4 py-2 rounded-md hover:bg-slate-500 active:bg-slate-300 text-white hover:cursor-pointer'>Console Event!</button> */}
        <input onChange={(e) => handleInputEvent(e.target.value)} className="border rounded-md p-4 w-100 focus:outline-none text-2xl" type='text' placeholder='Enter Here'/>
        <p className='text-3xl'>{value}</p>
        {/* <button onClick={() => console.log('Good Morning!')} className='bg-slate-700 px-4 py-2 rounded-md hover:bg-slate-500 active:bg-slate-300 text-white hover:cursor-pointer'>Press Here!</button> */}
    </div>
  )
}

export default AboutUsPage;