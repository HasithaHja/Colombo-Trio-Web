import React from "react";

const Contact = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white text-black dark:bg-[#111c22] dark:text-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-black dark:text-white tracking-light text-[32px] font-bold leading-tight">
                  Contact Us
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                  Get in touch with our team for your project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
