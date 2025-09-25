import React from "react";

const TestimonialCard = ({ image, quote, author }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 p-4 theme-bg-card bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="theme-text text-gray-900 dark:text-white text-base font-medium leading-normal">
          "{quote}"
        </p>
        <p className="theme-text-secondary text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
          — {author}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
