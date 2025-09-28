import React from "react";

const About = ({ theme, setTheme }) => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col theme-bg theme-text group/design-root overflow-x-hidden pt-12"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Header section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="tracking-light text-[32px] font-bold leading-tight theme-text">
                  About Us
                </p>
                <p className="text-sm font-normal leading-normal theme-text-secondary">
                  At Innovatech Solutions, we are passionate about creating
                  innovative software solutions that empower businesses to
                  thrive in the digital age. Our team of talented professionals
                  is dedicated to delivering exceptional products and services
                  that exceed our clients' expectations.
                </p>
              </div>
            </div>

            {/* Our Team section */}
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 theme-text">
              Our Team
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                {
                  name: "Janaka Prasad",
                  role: "Tech Explorer",
                  description:
                    "Forever chasing the next big stack, he makes sure we never get stuck in old tech.",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4l3lSmx_JYS_DqXATjl4S6nFI49B5_2uTi60m5ug-ejRTHe_ZSXQ9MIRpS29NOBgV9seqr9zP0iqHAlZ_gYs1m_a94WBIsfQkPtQN8LwtgEtYFFWctrBYicsA2gPXzkYBssQVjeK5I39RQ9V-G2UjrPVy9zN5102rD7nOdmdvifbSbhSEKLMa5BJpQ4BWr4nFdWIKa5UTvwq8CQilp4vNZIJlvRLJOpeZwSjUEyAM55TEfGn4egfk9QebppVmM-5ksqT-wc717T4",
                },
                {
                  name: "Hasitha Hirushan",
                  role: "ML wizard",
                  description:
                    "Brings ideas to life with data-driven intelligence, always pushing the limits of what's possible with ML.",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHl-N9yuAqHjnpFAlwWqMKqCAc6zS8-ECmhOuTxu0ImR-ldjjv7hCHuLQvqO2EA9CuT5I2Z3isjeSXS0reaNiFVPVSzB7CkS4YkJiZl1zNAoc5VbdAiU_H1neXmJWilvjgK2cRH0Fxny2qFDHOccLvpACVV2BvOl1kKfqFF9vkauxad7FSPe_HBX9FJhaHzwmDV4xjZ1XT7e3EuSrQbY5OpvNdJVjpngdQ-mKxd0zJdZIBnHnilQTWk40dUgZoHCZoaNUVdNEQNHA",
                },
                {
                  name: "Nipun",
                  role: "Idea machine",
                  description:
                    "Fuels the team with forward-thinking ideas, turning bold concepts into impactful digital products.",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuByjUEJgdFSI5G8jB5FfNpO5WrNh4IT4ng5EwWilCrc2AKXp8aIDWzdli1JztECJSwZjTGWIwXQQnWaCNV3vdaGf-YijL7V9-ftV7xaaYRy3CydNxo4tu-tGzkdeezpR3jE5qWnp_R4FuTgzDEpe1HW2OaRE97jOUB3zCRTKjcgvaiMRlQMvqYwQDuzQeQSoMUa7w3juFhuF47DORDDKE80ZOkJ9esV_O_Kb2LRKMts4X1U2vrNGMbFBJfBJSSKOMMhGiqS8ZQQQWg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 text-center pb-3"
                >
                  <div className="px-4">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                      style={{ backgroundImage: `url("${member.image}")` }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-base font-medium leading-normal theme-text">
                      {member.name}
                    </p>
                    <p className="text-sm font-normal leading-normal theme-text-secondary">
                      {member.role}
                    </p>
                    <p className="text-sm font-normal leading-normal theme-text-secondary">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission & Vision section */}
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 theme-text">
              Our Mission & Vision
            </h2>
            <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 theme-text-secondary">
              Our mission is to empower businesses with cutting-edge software
              solutions that drive efficiency, productivity, and growth. We
              envision a future where technology seamlessly integrates into
              every aspect of business, enabling organizations to achieve their
              full potential.
            </p>

            {/* Core Values section */}
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 theme-text">
              Our Core Values
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                    </svg>
                  ),
                  title: "Innovation",
                  description:
                    "We embrace creativity and constantly seek new ways to solve complex problems.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  ),
                  title: "Quality",
                  description:
                    "We are committed to delivering high-quality products and services that meet the highest standards.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                    </svg>
                  ),
                  title: "Trust",
                  description:
                    "We build strong relationships with our clients based on transparency, integrity, and mutual respect.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-1 gap-3 rounded-lg p-4 flex-col theme-bg-card"
                >
                  <div className="theme-text">{value.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-bold leading-tight theme-text">
                      {value.title}
                    </h2>
                    <p className="text-sm font-normal leading-normal theme-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
