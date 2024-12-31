import React from "react";


import Blogcard from "../components/Blogcard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: " HTML:Foundation of Web Development",
      description: "HTML (HyperText Markup Language) is the standard language used to structure web pages and web applications. It defines the basic framework webpage.HTML uses a system of tags and attributes to define elements like headings, paragraphs, links... ",
      date: "2024-11-29",
      imageUrl: "/images/blog1.avif",
    },

    {
      id: "2",
      title: "Styling the Web: Unlocking the Power of CSS",
      description: "CSS (Cascading Style Sheets) is a language used to design and control the visual presentation of web pages, working alongside HTML to  content from styling. It enables developers to style elements such as colors, fonts,backgrounds, borders, spacing, ",
      date: "2024-11-29",
     imageUrl:"/images/blog2.jpg",
    },
    {
      id: "3",
      title: " TypeScript:A JavaScript Enhancement",
      description: "TypeScript is a strongly-typed, object-oriented, compiled superset of JavaScript that adds static types to the language. Developed by Microsoft, TypeScript aims to enhance the development.process by introducing a static type system that helps detect.... ",
      date: "2024-11-29",
  imageUrl:"/images/blog3.jpg",
    },
    {
      id: "4",
      title: "JavaScript Unleashed: Powering the Web",
      description: "JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on the web. Initially developed to add interactivity to web pages...",
      date: "2024-11-29",
 imageUrl:"/images/blog4.avif",
    },
    {
      id: "5",
      title: "Next.js: The Future of Web Development",
      description: "Next.js is a popular, open-source framework built on top of React that enables developers to build fast, scalable, and SEO-friendly web applications with ease.It provides a set of features out of the box.....",
      date: "2024-11-29",
  imageUrl:"/images/blog5.png",
    },
    {
      id: "6",
      title: "React.js: Building Dynamic User Interfaces",
      description: "React.js is a widely used, open-source JavaScript library for building user interfaces, particularly for single-page applications  where data changes dynamically without requiring full page reloads... ",
      date: "2024-11-29",
      imageUrl: "/images/blog6.png",
    },
    {
      id: "7",
      title: "Java: Code Once, Run Anywhere",
      description: "Java is a powerful, general-purpose, object-oriented programming language designed to be platform-independent, meaning code written in Java can run on any device  that supports the Java ...",
      date: "2024-11-29",
    imageUrl:"/images/blog8.avif",
    },
    {
      id: "8",
      title: "Python: The Language of Simplicity and Power",
      description: "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility, making it one of the most popular languages in the world...",
      date: "2024-11-29",
      imageUrl:"/images/blog7.avif",
    },
    {
      id: "9",
      title: "Responsive Design: Adapting for Every Screen",
      description: "Responsive web design (RWD) is a modern web development approach focused on creating websites that provide an optimal viewing and  experience across a wide range of devices and screen sizes... ",
      date: "2024-11-29",
      imageUrl: "/images/blog9.jpg",
    },
   
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-blue-600 animate-color-change">
        Exploring The Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 " >
        {posts.map((post, index)=>(
          <div className="fade-in " data-aos="fade-up" key={post.id}>
            <div className="blog-card">
          <Blogcard post={post} isDarkBackground ={index % 2 === 0}/>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
