import React from "react";
import Netflix from '../assets/netflixscreen.jpg';
import Gpt3 from '../assets/gpt3.jpg';
import Todo from '../assets/todolist.jpg'
function Work(){

    return(
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#000000]'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
        <p  className='py-6'>Check out some of my recent projects</p>
    </div>
    {/* containers for project */}
    <div   
    className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* grid item */}
        <div  style={{ backgroundImage: `url(${Netflix})`}} 
         className="group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
              {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100  ">
                <span className="text-2xl font bold text-white tracking-wider ">
Netflix clone
                </span>
                <div  className="pt-8 text-center ">

                    <a href="https://karthik2056426.github.io/netflix-clone-app/"
                     target="_blank"
                    rel="noreferrer noopener">
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href="https://github.com/Karthik2056426/netflix-clone-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    >
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
        </div>
{/* grid component */}
        <div  style={{ backgroundImage: `url(${Gpt3})` }} 
         className=" group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
              {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
Landing page
                </span>
                <div  className="pt-8 text-center ">

                    <a href="https://karthik2056426.github.io/react-app-build/"  
                    target='_blank'
                    rel='noreferrer noopener' >
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href="https://github.com/Karthik2056426/react-app-build"
                      target='_blank'
                    rel='noreferrer noopener'>
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
        </div>
        {/* grid component above this */}

        {/* grid component */}
        <div  style={{ backgroundImage: `url(${Todo})` }} 
         className=" group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
              {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
To-do-list app
                </span>
                <div  className="pt-8 text-center ">

                    <a href="https://karthik2056426.github.io/to-do-list-app/"  
                    target='_blank'
                    rel='noreferrer noopener' >
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Demo</button>
                    </a>
                    <a href="https://github.com/Karthik2056426/to-do-list-app"
                      target='_blank'
                    rel='noreferrer noopener' >
                        <button   className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                </div>
            </div>
        </div>
        {/* grid component above this */}
    </div>
</div>
        </div>
    )
}
export default Work;