import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '@/styles/Admin.module.css'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (data.success) {
        localStorage.setItem('adminToken', data.token)
        router.push('/admin/dashboard')
      } else {
        setError('Username atau password salah')
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login - Portfolio</title>
      </Head>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Admin Login</h1>
          <p className={styles.loginSubtitle}>Masuk untuk mengelola portfolio</p>
          
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Masukkan username"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Masukkan password"
              />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button type="submit" className={styles.loginButton} disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>

          <div className={styles.loginInfo}>
                      <p className={styles.warning}>⚠️ Ganti password di <code>src/pages/api/auth.ts</code></p>
          </div>
        </div>
      </div>
    </>
  )
}
