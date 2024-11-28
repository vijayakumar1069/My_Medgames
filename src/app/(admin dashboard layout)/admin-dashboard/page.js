// app/admin-dashboard/page.tsx
import { requireAuth } from "@/app/actions/sessionFun"
import { redirect } from "next/navigation"

export default async function AdminDashboardHomePage() {
  try {
    // This will throw an error if not authenticated
    const session = await requireAuth()

    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, {session.email}</p>
        {/* Dashboard content */}
      </div>
    )
  } catch (error) {
    // Redirect to login if not authenticated
    redirect('/admin-login')
  }
}
