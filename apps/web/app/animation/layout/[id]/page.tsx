"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { items } from "../data";
import Link from "next/link";

export default function LayoutIdDetailPage() {
  const params = useParams();
  const item = items.find((item) => item.id === params.id);
  if (!item) return null;

  const { category, title, id } = item;

  return (
    <div className="relative h-96">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        className="absolute inset-0 bg-black rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div layoutId={`card-container-${id}`} className="bg-white rounded-lg p-6 w-full h-full">
          <motion.div className="title-container" layoutId={`title-container-${id}`}>
            <span className="text-lg text-gray-600">{category}</span>
            <h2 className="text-2xl font-bold">{title}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4"
          ></motion.div>
        </motion.div>
      </div>
      <Link href="/animation/layout" className="absolute inset-0" />
    </div>
  );
}
