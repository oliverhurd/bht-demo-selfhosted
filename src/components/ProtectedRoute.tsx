import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-text-secondary font-mono text-sm">Loading...</div>
      </div>
    )
  }

  if (!user) {
    // Redirect to login, save attempted location
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
