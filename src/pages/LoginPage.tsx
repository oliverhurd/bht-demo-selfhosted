import React, { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn, signUp } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const from = (location.state as any)?.from?.pathname || '/vault'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password)
        setSuccess('Account created! Check your email to confirm, then sign in.')
        setIsSignUp(false)
        setEmail('')
        setPassword('')
      } else {
        await signIn(email, password)
        navigate(from, { replace: true })
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 100%)'
        }}
      />

      <div className="relative z-10 w-full max-width: 420px">
        <div className="bg-bg-card border border-border rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent" />

          {/* Logo */}
          <div className="w-10 h-10 border-2 border-gold mx-auto mb-8 relative flex items-center justify-center">
            <div className="absolute inset-1 border border-gold/30" />
            <span className="font-serif text-gold font-bold text-sm">BHT</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl font-bold text-text-primary text-center mb-2">
            {isSignUp ? 'Create Account' : 'Member Login'}
          </h1>
          <p className="text-text-secondary text-sm text-center mb-8">
            {isSignUp ? 'Join the BHT members vault' : 'Access your courses and content'}
          </p>

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded mb-6 text-sm">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-[9px] tracking-widest uppercase text-text-muted mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-bg-elevated border border-border text-text-primary font-mono text-sm px-4 py-3 outline-none focus:border-gold transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-[9px] tracking-widest uppercase text-text-muted mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-bg-elevated border border-border text-text-primary font-mono text-sm px-4 py-3 outline-none focus:border-gold transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-black font-mono text-[10px] tracking-widest uppercase font-medium py-4 hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="text-center mt-6 text-sm text-text-secondary">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError('')
                setSuccess('')
              }}
              className="text-gold hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </div>

          {/* Back Link */}
          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="font-mono text-[9px] tracking-widest uppercase text-text-muted hover:text-gold transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
