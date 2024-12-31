


import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <section className="max-w-2xl mx-auto p-6 lg:p-8 rounded-2xl bg-blue-200 shadow-2xl border-2  border-black my-10 flex justify-center items-center flex-col">
        <h2 className='text-3xl font-extrabold  mb-6 text-left text-cyan-900 underline' data-aos="fade-up">CONTACT US</h2>
        <form>
        <input type="text"  placeholder=" Name" className=' w-full mb-4 p-2 px-4 py-2 border rounded-md' required/>
         
          <input type="email" placeholder="Enter Your Email" className=' w-full p-2 mb-4 px-4 py-2 border rounded-md' required/>
          <input type="text" placeholder=" Your PhoneNumber" className=' w-full p-2 mb-4 px-4 py-2 border rounded-md' required/>
         
       
       <textarea
        placeholder="Enter Your Messaage" rows={4} className=' w-full mb-4 px-4 p-2 py-2 border-black  rounded-md' required>
       </textarea>
       <button type='submit' className='w-full bg-blue-900 hover:bg-cyan-900 text-white font-sans py-2 rounded-md '>SEND</button>
       
        </form>
        <div className="mt-8 flex justify-center space-x-6">
        <Link
          href="http://www.linkedin.com/in/sadia-tariq-51018b324"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-gray-600 hover:text-blue-900 text-3xl transition-colors" />
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-gray-600 hover:text-blue-900 text-3xl transition-colors" />
        </Link>
        <Link
          href="https://github.com/SadiaTariq00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-gray-600 hover:text-blue-900 text-3xl transition-colors" />
        </Link>
      </div>
      </section>
    </div>
  )
}
