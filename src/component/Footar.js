import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare, AiOutlineGithub, AiFillDribbbleSquare } from "react-icons/ai";


const Footar = () => {
    return (
        <>
            <div className='mzx-w-[1240px] max-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df90] hover:text-white'>REACT.</h1>
                    <p className=' hover:text-[#00df90] py-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae nisl blandit, ultrices lorem a,
                        vulputate nisl. Quisque suscipit faucibus enim, malesuada pellentesque quam pretium ut Quisque suscipit faucibus enim, </p>
                    <div className='flex justify-between md:w-[75%] my-6 ml-8'>
                        <AiOutlineFacebook size={30} />
                        <AiOutlineInstagram size={30} />
                        <AiFillTwitterSquare size={30} />
                        <AiOutlineGithub size={30} />
                        <AiFillDribbbleSquare size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mr-12 ml-6'>
                    <div>
                        <h1 className='font-medium text-gray-400  hover:text-[#00df90]'>Solution</h1>
                        <ul>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Analytist</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Marketing</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Commerce</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-medium text-gray-400'>Support</h1>
                        <ul>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Pricing</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Documentation</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Guids</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-medium text-gray-400'>Company</h1>
                        <ul>
                            <li className='py-2 text-sm hover:text-[#00df90]'>About</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Blog</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Jobs</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Press</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-medium text-gray-400'>Legal</h1>
                        <ul>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Claim</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Policy</li>
                            <li className='py-2 text-sm hover:text-[#00df90]'>Terms</li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footar