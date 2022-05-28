import React from "react"
import about from "../components/img/about.jpg"
class About extends React.Component{
    render(){
       return(
           <>
            <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={about} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Tour and Travel Guide</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
           {/* <h2 className="font-sans md:font-bold md:text-right md:m-5 md:pr-20 md:pt-10">About</h2>
            <p className="font-sans md:text-right md:m-5 md:pr-20 md:pt-10 md:text-xl" >Hello, costumers ! This is about page. 
                      You can see about our tour and travel guide here</p>
           <img src={about} className="md:justify-end md:w-2/5 md:h-1/5 md:pl-20 md:p" alt="..."/> */}
           </>
       )
    }
}

export default About;