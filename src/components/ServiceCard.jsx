import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#92b7c9] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
