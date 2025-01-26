"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface VideoItem {
  id: string;
  text: string;
}

const items: VideoItem[] = [
  {
    id: "AvHW9svIZ3Y", 
    text: "Hello World from YouTube",
  },
  {
    id: "eofEjIM_vJw", 
    text: "Amazing Nature Documentary",
  },
  {
    id: "JeYr4GZsZuM", 
    text: "Learn React in 1 Hour",
  },
  // Add more video items here
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-2 md:px-6 py-10">
      <div className='flex flex-col justify-center items-center space-y-4 text-white'>
        <h1 className='md:text-8xl text-xl font-bold uppercase'>
          Jumia
        </h1>
        <h2 className='md:text-4xl text-xl font-bold uppercase'>Similar script in Next.js</h2>
        <p className='md:text-2xl text-xl font-bold uppercase'>install guideline</p>
      </div>
      <div className='flex flex-row justify-center mx-auto my-4 max-w-xl gap-4 items-center'>
        <Link
          href="https://jumias.vercel.app"
          className='bg-white text-[] p-4 w-full rounded text-center font-bold'
        >
          DEMO
        </Link>
        <Link
          href="https://jumias.vercel.app/admin"
          className='bg-white text-[] p-4 w-full rounded text-center font-bold'
        >
          ADMIN
        </Link>
      </div>
      <div className='my-4 md:my-10 sticky top-0'>
        <input
          type="text"
          placeholder="Search videos"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 md:p-4 w-full outline-0 rounded"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.filter((item) =>
          item.text.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item) => (
          <div
            key={item.id}
            className="bg-white hover:shadow-xl overflow-hidden rounded-md cursor-pointer"
            onClick={() => handleVideoClick(item.id)}
          >
            <Image
              width={600}
              height={300}
              src={`https://i.ytimg.com/vi/${item.id}/mqdefault.jpg`} 
              alt={item.text}
              className="w-full h-min"
            />
            <p className='p-2 leading-none text-base line-clamp-2'>{item.text}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClosePopup}
        >
          <div className="bg-white rounded-lg p-6">
            {/* YouTube embed here using selectedVideo */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;