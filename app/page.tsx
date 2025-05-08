"use client";

// import { toast } from "sonner"; // No longer needed here
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Particles from "@/components/ui/particles";

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
