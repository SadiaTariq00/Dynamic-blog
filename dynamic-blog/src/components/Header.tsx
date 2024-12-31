"use client"


import React from 'react';
import AOS from 'aos'; 
import { useEffect } from 'react';
import 'aos/dist/aos.css';


export default function Hero() {
useEffect(() => {
  AOS.init ({
    duration :1000,
    once: true,
  });
}, []);
  return (
    <div>
       <section className='hero h-[600px] flex items-center bg-cover bg-center' style={{backgroundImage: "url('/images/hero.jpeg')"}}>
        <div className='pl-0 md:pl-16 text-slate-300 text-center mt-20 relative' >
     <h1 className='text-5xl font-bold drop-shadow-md' data-aos="fade-up">Exploring the Future of Technology in Blogging </h1>
     <p className='text-xl text-center mt-4'>
     &quot;Dive into the innovative world of blogging and discover how technology is reshaping the way we share ideas, connect with audiences, and create content. From AI tools to interactive media, learn what&apos;s driving the future of digital storytelling &quot;. </p>
  
</div>
</section>
    </div>
  )
}

