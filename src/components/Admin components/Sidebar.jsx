// components/admin/Sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { admin_sidebar_items } from "@/utils/constvalues"
import { motion } from "framer-motion"
// import { Icon } from "@iconify/react"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-brand-400 text-brand-white h-screen shadow-brand-medium">
      <div className="p-6 border-b border-brand-300">
        <h2 className="text-2xl font-bold text-brand-white">MedGames</h2>
        <p className="text-sm text-brand-100">Admin Dashboard</p>
      </div>

      <nav className="mt-4 space-y-1">
        {admin_sidebar_items.map((item) => (
          <motion.div
            key={item.link}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={item.link}
              className={`
                flex items-center space-x-3 px-4 py-3 transition-all duration-300
                ${pathname === item.link
                  ? 'bg-brand-500 text-brand-white'
                  : 'text-brand-50 hover:bg-brand-300 hover:text-brand-white'
                }
              `}
            >
              {/* <Icon 
                icon={item.icon} 
                className="w-5 h-5"
              /> */}
              <span>{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
    </aside>
  )
}
