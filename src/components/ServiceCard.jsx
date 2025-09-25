import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3 pb-3 p-3 rounded-lg theme-bg-card bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="theme-text text-gray-900 dark:text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="theme-text-secondary text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
