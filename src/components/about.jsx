import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I'm, a passionate and detail-oriented front-end web developer.</p>
            </div>
            <div>
              <p>
               As a graduate with a keen eye for design and a love for creating seamless user experiences,
                I am excited to embark on my journey in the ever-evolving world of web development.</p>
                 <br></br>
                  <p>I am always eager to embrace new technologies that enhance the user interface.I believe in the power of collaboration and
                   am open to exciting opportunities to learn and grow in the dynamic field of front-end development.</p>
                   <p><br></br>
                    Whether it's transforming wireframes into pixel-perfect designs or troubleshooting to ensure optimal
                     functionality, I take pride in crafting web experiences that leave a lasting impression.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;