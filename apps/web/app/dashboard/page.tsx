"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-10 h-10 bg-red-500"
        animate={{
          scale: 2,
          transition: { duration: 2 },
        }}
      />
    </div>
  );
}
