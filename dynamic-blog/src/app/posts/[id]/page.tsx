

"use client";

import React from "react";
import CommentSection from "@/components/Comment";
import Image from "next/image";


const posts = [
  {
    id: "1",
    title: "Mastering HTML:Foundation of Web Development",
    description:
      "HTML (HyperText Markup Language) is the backbone of web development, providing the foundational structure for creating and displaying content on the internet. As the standard language for web pages, HTML uses a system of tags and attributes to define elements like headings, paragraphs, links, images, tables, and multimedia. These tags organize content hierarchically, allowing browsers to interpret and render it effectively for users. HTML is not a programming language but a markup language, meaning it focuses on structuring content rather than logic or functionality.HTML is essential for building websites, as it works in tandem with CSS (Cascading Style Sheets) for styling and JavaScript for interactivity, creating dynamic and visually appealing web experiences. Over the years, HTML has evolved significantly, with the latest version, HTML5, introducing new features like semantic elements (e.g., <header>, <article>, <footer>), improved multimedia support (e.g., <audio>, <video>), and better integration with modern web technologies. HTML5 also enhances accessibility and performance, ensuring that websites are both user-friendly and efficient. Its simplicity and compatibility across all devices and platforms make HTML a vital skill for developers, enabling them to design everything from basic static pages to complex web applications.",
    image: "/images/blog1.avif",
  },
  {
    id: "2",
    title: "Styling the Web: Unlocking the Power of CSS",
    description: "CSS (Cascading Style Sheets) is a language used to design and control the visual presentation of web pages, working alongside HTML to separate content from styling. It enables developers to style elements such as colors, fonts, backgrounds, borders, spacing, and layouts, giving web pages a polished and professional look. CSS makes it easy to create responsive designs that adapt to different screen sizes and devices using features like media queries. It supports animations, transitions, and transformations, allowing developers to add dynamic effects and interactivity. CSS can be applied in three ways: inline styles (directly within an HTML element), internal styles (within a <style> tag in the HTML file), or external stylesheets (via a linked .css file), making it reusable and easier to maintain. Advanced features like Flexbox and Grid provide powerful tools for creating complex layouts, ensuring modern websites are both functional and visually appealing",
    image: "/images/blog2.jpg",
  },
  {
    id: "3",
    title: "Mastering TypeScript:JavaScript Enhancement",
    description: "TypeScript is a strongly-typed, object-oriented, compiled superset of JavaScript that adds static types to the language. Developed by Microsoft, TypeScript aims to enhance the development process by introducing a static type system that helps detect errors at compile-time rather than during runtime, making code more reliable and maintainable. In TypeScript, developers can explicitly define types for variables, function parameters, and return values, as well as use advanced features like interfaces, enums, tuples, and generics to create more robust and reusable code. TypeScript also fully supports modern JavaScript features, such as ES6 classes, modules, async/await, and arrow functions, while ensuring compatibility with existing JavaScript code. By compiling TypeScript code into standard JavaScript, developers can run it in any browser or JavaScript environment. The language also integrates well with popular code editors like Visual Studio Code, offering features like auto-completion, intellisense, and type inference to improve developer productivity. As TypeScript code scales, its features help improve the organization, readability, and maintainability of large codebases, making it especially valuable for complex, enterprise-level applications.",
    image: "/images/blog3.jpg",
  },
  {
    id: "4",
    title: "JavaScript Unleashed: Powering the Web",
    description: "JavaScript is a versatile, high-level programming language primarily used for creating interactive and dynamic content on the web. Initially developed to add interactivity to web pages, JavaScript has evolved into a powerful language capable of server-side programming, mobile app development, and even desktop applications. As a client-side scripting language, it runs in the user's browser, enabling real-time updates, form validation, animations, and other interactive features without the need for page reloads. JavaScript is event-driven, meaning it responds to user actions like clicks, keystrokes, and mouse movements. It is an asynchronous, non-blocking language, especially useful for handling operations like loading data in the background using techniques like AJAX. JavaScript also supports functional and object-oriented programming paradigms, allowing developers to create reusable and maintainable code. Over the years, with the introduction of modern frameworks and libraries like React, Angular, and Vue.js, JavaScript has become the backbone of front-end development, while environments like Node.js have expanded its capabilities to the server side. Today, JavaScript is one of the most widely used languages, powering the majority of web applications and services.",
    image: "/images/blog4.avif",
  },
  {
    id: "5",
    title: "Next.js: The Future of Web Development",
    description: "Next.js is a popular, open-source framework built on top of React that enables developers to build fast, scalable, and SEO-friendly web applications with ease. It provides a set of features out of the box, such as server-side rendering (SSR), static site generation (SSG), and API routes, which enhance the performance and flexibility of React applications. Next.js simplifies the process of creating universal applications, where the same codebase can be rendered both on the server and the client, improving page load times and enabling better SEO optimization. One of its core strengths is the file-based routing system, where the file structure of the application directly maps to the URL structure, making routing intuitive and simple to implement. Additionally, Next.js supports incremental static regeneration (ISR), which allows for static content to be updated after the initial build, providing a balance between the benefits of static and dynamic rendering. The framework also supports features like automatic code splitting, image optimization, and internationalization (i18n), helping developers to build modern, high-performance websites without having to manually configure these complex setups. With its ease of use, flexibility, and rich ecosystem, Next.js has become a go-to solution for building React-based web applications, from small blogs to large-scale enterprise applications.",
    image: "/images/blog5.png",
  },
  {
    id: "6",
    title: "React.js: Building Dynamic User Interfaces",
    description: "React.js is a widely used, open-source JavaScript library for building user interfaces, particularly for single-page applications (SPAs) where data changes dynamically without requiring full page reloads. Developed by Facebook, React introduced the concept of the virtual DOM, which improves performance by updating only the parts of the page that have changed, rather than re-rendering the entire UI. React's declarative nature allows developers to describe what the UI should look like for any given state, and React takes care of updating the view when the state changes. React's core building blocks are components, which are reusable and can be nested within each other, making it easier to manage complex UIs and keep code organized. The library is also component-driven, meaning that developers can build and compose UI elements as independent, isolated components that can be shared across projects. React uses JSX, a syntax extension that allows you to write HTML-like code directly within JavaScript, providing a more intuitive way to define the UI structure. Additionally, React's strong ecosystem includes tools like React Router for navigation, React Redux for state management, and various community-driven libraries that extend its functionality. With features like hooks for handling state and lifecycle methods, React allows for writing functional components that are both simple and powerful. React's flexibility, extensive community support, and performance optimizations have made it one of the most popular frameworks for building modern web applications",
    image: "/images/blog6.png",
  },
  {
    id: "7",
    title: "Java: Code Once, Run Anywhere",
    description: "Java is a powerful, general-purpose, object-oriented programming language designed to be platform-independent, meaning code written in Java can run on any device or operating system that supports the Java Virtual Machine (JVM). Introduced by Sun Microsystems (now owned by Oracle) in 1995, Java is built on the principle of Write Once, Run Anywhere (WORA), making it a preferred choice for developing CSS-platform applications. Java's syntax is derived from C and C++, which makes it relatively easy to learn for programmers familiar with these languages, while its robust features like automatic garbage collection, memory management, and exception handling reduce the likelihood of errors and improve reliability.Java is fundamentally object-oriented, meaning everything revolves around classes and objects, which promotes code modularity and reusability. It also supports multithreading, allowing programs to perform multiple tasks simultaneously, making it highly efficient for applications requiring concurrent processes. Java is widely used in various domains, from web development with frameworks like Spring and Struts, to mobile app development (it powers most Android applications), and enterprise solutions for large-scale systems. It's also a staple in server-side development for web and cloud-based applications, using tools like Java EE, Hibernate, and Apache Tomcat.Java's extensive standard library (Java API) provides a vast range of utilities for tasks like data manipulation, networking, database access, and cryptography, reducing the need to write complex code from scratch. It also emphasizes security with features like the Java Security Manager and sandboxing, which protect applications from unauthorized access and ensure secure execution of code. Over the years, Java has remained relevant through regular updates, with newer versions introducing modern features like lambda expressions, streams, and record classes, which improve code efficiency and readability. With its strong community support, excellent documentation, and compatibility with a wide range of devices, Java continues to be a cornerstone of modern software development, powering millions of applications globally across industries like finance, healthcare, gaming, and more.",
    image: "/images/blog8.avif",
  },
  {
    id: "8",
    title: "Python: The Language of Simplicity and Power",
    description: "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility, making it one of the most popular languages in the world. Developed by Guido van Rossum and first released in 1991, Python emphasizes clear syntax and an easy-to-learn structure, which reduces the time required to write and maintain code. It supports multiple programming paradigms, including object-oriented, procedural, and functional programming, making it suitable for a wide range of applications. Python's vast standard library provides built-in modules for tasks like file handling, web development, data manipulation, and mathematical computations, while an extensive ecosystem of third-party libraries, such as NumPy, Pandas, TensorFlow, and Django, allows developers to tackle projects in data science, machine learning, web development, automation, and more Python's cross-platform nature means it can run on nearly any operating system, including Windows, macOS, and Linux, further contributing to its flexibility. It is widely used in fields such as artificial intelligence, data analysis, web development, scientific research, and even game development. The language's design philosophy, which values readability and simplicity, is reflected in its motto: There's only one way to do it, encouraging the use of clear and efficient code. Python is also beginner-friendly, making it a favorite for new programmers, while its powerful features, such as dynamic typing, built-in garbage collection, and support for asynchronous programming, make it a tool of choice for professional developers as well. With its robust community support, extensive libraries, and adaptability to emerging technologies, Python continues to play a significant role in shaping the future of software development.",
    image: "/images/blog7.avif",
  },
  {
    id: "9",
    title: "Responsive Design: Adapting for Every Screen",
    description: "Responsive web design (RWD) is a modern web development approach focused on creating websites that provide an optimal viewing and interaction experience across a wide range of devices and screen sizes. With the increasing diversity in devices, from smartphones and tablets to desktops and large monitors, responsive web design ensures that websites automatically adjust their layout, images, and content to fit any screen size. This adaptability is achieved using CSS media queries, flexible grid layouts, and scalable images, which allow developers to define styles based on device characteristics like width, height, orientation, and resolution. By eliminating the need for separate websites for mobile and desktop users, responsive design streamlines maintenance, reduces development costs, and improves the overall user experience.Responsive web design is critical for improving accessibility, ensuring that users can easily navigate and interact with a website regardless of the device they are using. It also plays a significant role in search engine optimization (SEO), as search engines like Google prioritize mobile-friendly sites in search rankings. Techniques like fluid grids, where layout elements are defined in relative units (percentages) instead of fixed units (pixels), and flexbox or CSS Grid, which provide advanced layout control, are commonly used to build responsive designs. Modern tools and frameworks, such as Bootstrap and Tailwind CSS, further simplify the process of creating responsive websites. By embracing responsive web design, businesses and developers can ensure that their websites are accessible, engaging, and future-proof, delivering consistent performance and usability across all devices.",
    image: "/images/blog9.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description?: string) => {
    if (!description) return <p>No description available.</p>;
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5" >
      <h1 className="md:text-4xl text-3xl font-bold text-blue-900 underline  text-center" >
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4 " 
          height={900}
         width={600} 
         
        />
      )}
      <div className="mt-6 text-lg  text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      
    </div>
  );
}
