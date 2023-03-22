import React from 'react'

const Analytist = () => {
    return (
        <>
            <div className='w-full bg-white py-16 px-4'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='w-[500px] mx-auto my-4' src='https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124097.jpg?size=626&ext=jpg' alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#] text-[#00df90] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytist Centrally</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className='bg-black  w-[200px] rounded-md font-medium my-6  mx-auto py-3 text-[#00df90]'> Get Started</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Analytist