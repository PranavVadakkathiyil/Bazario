import React, { useState } from 'react'

const Login = () => {
    const [islogin, setislogin] = useState(true) 
  return (

    <div className='w-full h-[90vh] sm:flex justify-center items-center'>
        
        <div className='max-w-sm sm:border rounded-md sm:shadow-md'>
            <form action="" className='p-8 '>
            <h1 className='text-center text-2xl '>
               {islogin ? "Login" : "Sign Up"}
            </h1>
            {!islogin && (
                <div className='mt-3'>
                <label htmlFor="Name" className=''>Name
                    <span className='text-red-400 text-opacity-[0.7]'> (required)</span>
                </label>
                <input type="text" required name="name" id="name" placeholder='Name' className='border w-full px-4 py-2 outline-none focus:ring-1 rounded-sm'/>
            </div>
            )}
                
                <div className='mt-3'>
                    <label htmlFor="Eamil">Eamil
                    <span className='text-red-400 text-opacity-[0.7]'> (required)</span>
                    </label>
                    <input type="email" required  name="email" id="email" placeholder='Email' className='border w-full  px-4 py-2 outline-none focus:ring-1 rounded-sm'/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="Password">Password
                    <span className='text-red-400 text-opacity-[0.7]'> (required)</span>
                    </label>
                    <input type="password" required name="password" id="password" placeholder='Password' className='border w-full  px-4 py-2 outline-none focus:ring-1 rounded-sm'/>
                </div>
                <div className='place-items-end mt-1'>
                {islogin ? (<p className='text-sm text-gray-500' onClick={()=>setislogin(false)}>Not have an accound ?</p>) : (<p className='text-sm text-gray-500' onClick={()=>setislogin(true)}>Have an accound ?</p>)}
                   


                </div>
                <button className='w-full border py-2 mt-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login