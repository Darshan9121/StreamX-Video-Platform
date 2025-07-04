import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const VideoUploadForm = () => {
  return (
    <div className="h-fit flex flex-col bg-[#231010] space-y-2 pb-6 ">
      <Navbar isAuthenticated = {true} isAdmin = {false }/>
      <div className=" flex flex-col items-center justify-center pt-20 pb-6 text-white">
        <form className="w-full max-w-2xl mx-auto flex flex-col gap-8">
          {/* Drag and Drop Area */}
          <div className="border-2 border-dashed border-red-400 rounded-xl h-56 flex flex-col items-center justify-center gap-3 bg-[#231010]">
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Drag and drop to upload</div>
              <div className="text-sm text-gray-300 mb-3">Max file size: 50MB</div>
              <label htmlFor="file-upload" className="inline-block bg-[#3a2323] text-white px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-red-600 transition-colors">
                Select File
                <input id="file-upload" type="file" accept="video/*" className="hidden" />
              </label>
            </div>
          </div>
          {/* Title Input */}
          <input
            type="text"
            placeholder="Title"
            className="bg-[#2d1818] border border-red-900 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-base"
          />
          {/* Description Input */}
          <textarea
            placeholder="Description"
            rows={5}
            className="bg-[#2d1818] border border-red-900 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-base resize-none"
          />
          {/* Upload Progress */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-white font-medium">Upload Progress</span>
            <div className="w-full h-2 bg-[#3a2323] rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="text-gray-300 text-sm mt-1">Daily upload limit: 1 per 24 hours</div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default VideoUploadForm; 