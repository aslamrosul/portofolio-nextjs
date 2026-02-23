import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'src/data/portfolio.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Read portfolio data
    try {
      const fileContents = fs.readFileSync(dataFilePath, 'utf8')
      const data = JSON.parse(fileContents)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Failed to read data' })
    }
  } else if (req.method === 'POST') {
    // Update portfolio data
    try {
      const newData = req.body
      fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2))
      res.status(200).json({ message: 'Data updated successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to update data' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
