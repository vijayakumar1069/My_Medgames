// components/admin/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { admin_sidebar_items } from "@/utils/constvalues";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-gray-200 h-screen shadow-lg">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-3xl font-bold text-gray-100">MedGames</h2>
        <p className="text-sm text-gray-400">Admin Dashboard</p>
      </div>

      <nav className="mt-6 space-y-1">
        {admin_sidebar_items.map((item) => (
          <motion.div
            key={item.link}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="transition-all duration-300"
          >
            <Link
              href={item.link}
              className={`
                flex items-center space-x-4 px-4 py-3 rounded-lg
                ${
                  pathname === item.link
                    ? "bg-gray-700 text-gray-50 shadow-md"
                    : "text-gray-300 hover:bg-gray-700 hover:text-gray-50"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}
