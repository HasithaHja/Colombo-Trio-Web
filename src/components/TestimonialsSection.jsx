import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://placeholder.pics/svg/300",
      quote:
        "Innovatech Solutions delivered a fantastic product within budget and on time. Highly recommended!",
      author: "Sophia Chen, CEO of RetailCo",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD1X6ebLT2w77_PtY8wL601K5swPC56YHpbRwqXUELyivGaVlz24tT8bvpEXbl47oQUAD7iy-b0GvndwGbXd4N0hRNlpAs5KUJnMJdaRAa6xCaWdTyaIc6kgbN-OKZ3H7pTTqirBIoTUbTg2qyAEHD5L4Yfa4xJNkk1vLy6AXF8nu6IorJd_3RrMEcDXPIMdknTEXld11xUIZppT-p9FZU0QDFWVK2KPoAFKUr4F2IunNCi1pOlZr_7xKFP1P_aoHSSNngwJpdIqm8",
      quote:
        "Their team's expertise and professionalism were exceptional. We're thrilled with the results.",
      author: "Ethan Lee, Founder of FitApp",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3fbLnCXFP30RBo1b2mOPgIsDOAYBAdDdZk56d_V9_dNO9J97VSq64OUruwXsLGJmbkBzEabbhQpfW_LIwmuSvK974cxeTkQWKv564ToZErL49icEjFlBT7axDsPwYXorZ0ws1DDTc0C9f9MRCIejbmz5pA38bIenpKrmrG9ey6aolAbWbQ8utP5gm4JHBPXxxXCM0O4lL7S4REDpPR_QNy3rve7Lg9pt4wakR87ocOu9hkhZQo98uHBEthUjtgHGwYoOkF1dFlY",
      quote:
        "We've seen a significant improvement in our operations thanks to their innovative solutions.",
      author: "Olivia Wong, Operations Manager at CityConnect",
    },
  ];

  return (
    <div className="theme-bg bg-white dark:bg-[#111c22]">
      <h2 className="theme-text text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Testimonials
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
