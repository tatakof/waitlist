"use client";

export const runtime = "edge";

// import { toast } from "sonner"; // No longer needed here
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Particles from "@/components/ui/particles";


const DiscordIcon = ({ className = "w-6 h-6", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // Adjusted viewBox to better match the path data.
    // You might need to fine-tune this if the aspect ratio is off.
    // Common original dimensions for this type of logo might be around 256x199 or similar.
    viewBox="0 0 260 200" // Example: Adjust if needed
    fill="currentColor" // This is correct, allows Tailwind text color to apply
    className={className}
    {...props}
  >
    {/* Removed fill="#5865F2" and fill-rule="nonzero" from here */}
    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" />
  </svg>
);





export default function Home() {
  const [email, setEmail] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false); // Removed

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // const isValidEmail = (email: string) => { // Removed
  //   const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const handleSubmit = async () => { // Removed entire function
  //   if (!email) {
  //     toast.error("Please fill in all fields 😠");
  //     return;
  //   }
  //
  //   if (!isValidEmail(email)) {
  //     toast.error("Please enter a valid email address 😠");
  //     return;
  //   }
  //
  //   setLoading(true);
  //
  //   const promise = new Promise(async (resolve, reject) => {
  //     try {
  //       // First, attempt to send the email
  //
  //       // If email sending is successful, proceed to insert into Notion
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  //
  //   toast.promise(promise, {
  //     loading: "Getting you on the waitlist... 🚀",
  //     success: (data) => {
  //       setEmail("");
  //       return "Thank you for joining the waitlist 🎉";
  //     },
  //     error: (error) => {
  //       if (error === "Rate limited") {
  //         return "You're doing that too much. Please try again later";
  //       } else if (error === "Email sending failed") {
  //         return "Failed to send email. Please try again 😢.";
  //       } else if (error === "Notion insertion failed") {
  //         return "Failed to save your details. Please try again 😢.";
  //       }
  //       return "An error occurred. Please try again 😢.";
  //     },
  //   });
  //
  //   promise.finally(() => {
  //     setLoading(false);
  //   });
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-clip">
      <section className="flex flex-col items-center gap-0 px-4 pt-16 sm:px-6 lg:px-8">

        <CTA />

        <Form
          email={email}
          handleEmailChange={handleEmailChange}
          // handleSubmit and loading props were already removed, which is correct
        />
        {/*
        <a
          href="https://discord.com/invite/yGCCUhqtpS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 text-gray-600 hover:text-gray-500 transition-colors"
        >
          <span> contactanos por Discord </span> 
          <DiscordIcon className="w-6 h-6" />
        </a>
        */}

      </section>


      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
