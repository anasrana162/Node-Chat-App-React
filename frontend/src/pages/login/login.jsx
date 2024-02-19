import React from 'react'

const Login = () => {
    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 '>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className=' text-blue-500'> ChatApp</span>
                </h1>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
                </div>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </a>

                <button className='btn btn-block btn-sm mt-2'>Login</button>

            </div>
        </div>
    )
}

export default Login



//  Starter code for this file
//const Login = () => {
//     return (
//         <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 '>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//                     <span className=' text-blue-500'> ChatApp</span>
//                 </h1>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//                 </div>

//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     {"Don't"} have an account?
//                 </a>

//                 <button className='btn btn-block btn-sm mt-2'>Login</button>

//             </div>
//         </div>
//     )
// }

// export default Login