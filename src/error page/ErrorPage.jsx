import React from 'react';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F6FBF8]">
        <h1 className="text-9xl font-bold text-[#47BA82]">404</h1>
        <p className="text-2xl text-gray-700 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <a href="/" className="mt-6 text-lg text-[#47BA82] hover:underline">
          Go back to Home
        </a>
      </div>
    );
};

export default ErrorPage;