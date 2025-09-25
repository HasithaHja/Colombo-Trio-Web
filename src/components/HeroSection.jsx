import React from "react";

const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYvXns3_vZqrdjYmO7Va_l7Cwxc9BIaHDFvW5UGsR6pCXKgS3aNDoJLrOss5JwOk1F0pfLfHekJ3feRRWSYhhoLFVMV3crinf-KgBCY_vvzq7ThmAutXEGbJ1eZGh-d8RIvvcVTWreSAjKk6S7zQjrhQgB2IpkmI_u4jS5-xN_WewjGFW3Nms1v4q96XGByVLixWT21zLFa1_xmm2WPwp2oXoqsrxJJisrMO2pk8P2QnJ-LWYTF3W94kLD1ZPZazyHy0YnZhvw3jQ")',
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              We Build Smart Software for Smarter Businesses
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Transform your business with cutting-edge software solutions
              tailored to your unique needs.
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-blue-600 hover:bg-blue-700
  dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">View Our Projects</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-gray-700 hover:bg-gray-800
  dark:bg-gray-600 dark:hover:bg-gray-700  text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
              <span className="truncate">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
