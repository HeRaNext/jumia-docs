"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface VideoItem {
  id: string; // YouTube video ID
  text: string; // Video title or description
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
    <div className="container mx-auto">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search videos"
          value={searchTerm}
          onChange={handleSearch}
          className="ml-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.filter((item) =>
          item.text.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item) => (
          <div
            key={item.id}
            className="bg-white cursor-pointer"
            onClick={() => handleVideoClick(item.id)}
          >
            <Image
              width={600}
              height={300}
              src={`https://i.ytimg.com/vi/${item.id}/mqdefault.jpg`} 
              alt={item.text}
              className=''
            />
            <p>{item.text}</p>
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