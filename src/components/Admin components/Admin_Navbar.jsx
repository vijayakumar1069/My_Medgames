// components/admin/Admin_Navbar.tsx
"use client"

import { logoutAction } from "@/app/actions/(Admin)/admin_login_function"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const Admin_Navbar = ({ user }) => {
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push("/admin-login")
  }

  return (
    <nav className="w-full h-20 bg-brand-50 shadow-brand-soft flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Icon 
          icon="solar:dashboard-bold" 
          className="w-6 h-6 text-brand-400"
        />
        <h1 className="text-xl font-semibold text-brand-500">
          Dashboard
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-brand-500">
          <Icon 
            icon="solar:user-bold" 
            className="w-5 h-5"
          />
          <span className="font-medium">{user?.email}</span>
        </div>
        
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-4 py-2 bg-brand-400 text-white 
            rounded-lg shadow-brand-medium 
            hover:bg-brand-500 transition-all
          "
        >
          Logout
        </motion.button>
      </div>
    </nav>
  )
}

export default Admin_Navbar
