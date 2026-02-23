import type { NextApiRequest, NextApiResponse } from 'next'

// Simple authentication - GANTI dengan sistem yang lebih aman untuk production
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin123' // GANTI PASSWORD INI!

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      res.status(200).json({ 
        success: true, 
        token: Buffer.from(`${username}:${password}`).toString('base64')
      })
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
