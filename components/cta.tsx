import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col items-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-2 py-1">
              <span>pronto</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo_gradiente.png"
        alt="logo"
        className="mx-auto h-32 w-32"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
        <TextBlur
          className="text-center text-4xl font-medium tracking-tighter sm:text-6xl"
          text="gradienteSur"
        />
        <TextBlur
          className="text-center text-xl font-medium tracking-tighter text-zinc-400 sm:text-2xl"
          text="| general-computing |"
        />
      </motion.div>
    </motion.div>
  );
}
