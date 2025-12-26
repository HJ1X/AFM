import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-background to-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center space-y-6 max-w-2xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Welcome to AFM
        </h1>
        <p className="text-xl text-neutral-400">
          A premium landing page experience built with React, Tailwind, and Shadcn UI.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8">Get Started</Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">Learn More</Button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
