import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] h-screen  w-full  bg-black'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl  font-semibold'>Documents</div>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-[13vw] leading-none tracking-tighter text-zinc-900">
         Docs
        </h1>

    </div>
    
    
    </>
  )
}

export default Background
