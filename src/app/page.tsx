"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-neutral-950 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Hey, I’m <span className="text-indigo-500">Ahmad</span>.
      </motion.h1>
      <p className="mt-4 text-gray-400">
        I build products that connect students and simplify learning.
      </p>
    </main>
  );
}
