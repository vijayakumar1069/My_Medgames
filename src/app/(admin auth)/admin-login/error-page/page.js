// app/admin-login/error/page.tsx
export default function AuthErrorPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Authentication Error</h1>
          <p className="mt-4 text-red-500">
            There was a problem with your login. Please try again.
          </p>
        </div>
      </div>
    )
  }
  