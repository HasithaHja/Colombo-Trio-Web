import React from "react";

const TestimonialCard = ({ image, quote, author }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          {quote}
        </p>
        <p className="text-[#92b7c9] text-sm font-normal leading-normal">
          {author}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
