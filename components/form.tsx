'use client';

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { toast } from "sonner";
import { FaDiscord } from "react-icons/fa";
interface FormProps {
  email: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({
  email,
  handleEmailChange,
}: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const internalHandleSubmit = async () => {
    setIsLoading(true);
    setMessage("");

    const submissionPromise = new Promise(async (resolve, reject) => {
      try {
        if (!email) {
          reject("el email es requerido.");
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          reject("por favor ingresá un email válido.");
          return;
        }

        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, timestamp: new Date().toISOString() }),
        });

        const result = await response.json();

        if (!response.ok) {
          reject(result.error || 'algo no salió bien.');
        } else {
          resolve(result.message || 'te uniste al waitlist! \\n pronto vas a recibir un mail.');
        }
      } catch (error) {
        console.error("Submit error:", error);
        reject('ocurrió un error. intentalo de nuevo.');
      }
    });

    toast.promise(submissionPromise, {
      loading: 'procesando...',
      success: (successMessage) => {
        setMessage(String(successMessage).replace(/\\n/g, '\n'));
        return String(successMessage).replace(/\\n/g, '\n');
      },
      error: (errorMessage) => {
        setMessage(String(errorMessage));
        return String(errorMessage);
      },
    });

    try {
      await submissionPromise;
    } catch (e) {
      // Errors are handled by toast.promise error handler and setMessage within it.
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={internalHandleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={isLoading}>
          {isLoading ? "Loading..." : "anotate al waitlist"}
        </EnhancedButton>
      </motion.div>
      {message && (
        <motion.p
          variants={itemVariants}
          className={`mt-2 text-sm ${message.includes('te uniste al waitlist!') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </motion.p>
      )}
      <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
         <p>o contactanos por </p>
        <Link
          href="https://discord.com/invite/yGCCUhqtpS"
          rel="noopener noreferrer"
          target="_blank">
          <FaDiscord className="h-4 w-4 transition-all duration-200 ease-linear hover:text-indigo-400" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
