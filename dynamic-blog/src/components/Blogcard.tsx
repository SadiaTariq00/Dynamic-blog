

import React from "react";
import Image from "next/image";  
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function Blogcard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-white text-black" : "text-black bg-white"
      } rounded-lg shadow-lg hover:shadow-xl border border-black transition-shadow duration-300`}
    >
    
      <Image
        src={post.imageUrl}
        alt={post.title}  
        width={600} 
        height={300} 
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="font-bold text-lg text-blue-950 underline mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-start text-sm">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col mt-4">
        <p
          className={`text-md mb-2 ${
            isDarkBackground ? "text-blue-900" : "text-blue-900"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`h-10 w-40 px-10 py-2 text-white bg-blue-600 rounded-3xl hover:bg-blue-500 ${
            isDarkBackground
              ? "bg-black hover:bg-orange-400 "
              : "bg-black hover:bg-orange-400"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
