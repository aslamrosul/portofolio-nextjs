import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Simple query to keep database active
    const hero = await prisma.hero.findFirst()
    
    if (hero) {
      console.log('✅ Database ping successful')
      return res.status(200).json({ 
        status: 'ok', 
        message: 'Database is active',
        timestamp: new Date().toISOString()
      })
    }
    
    return res.status(200).json({ 
      status: 'ok', 
      message: 'Database connected but no data',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Database ping failed:', error)
    return res.status(500).json({ 
      status: 'error', 
      message: 'Database connection failed',
      timestamp: new Date().toISOString()
    })
  }
}
