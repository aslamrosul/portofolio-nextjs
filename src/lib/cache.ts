import fs from 'fs'
import path from 'path'

const CACHE_DIR = path.join(process.cwd(), '.cache')
const CACHE_FILE = path.join(CACHE_DIR, 'portfolio-data.json')

// Ensure cache directory exists
function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
  }
}

// Save data to cache file
export function saveToCache(data: any) {
  try {
    ensureCacheDir()
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), 'utf-8')
    console.log('✅ Data cached successfully')
  } catch (error) {
    console.error('❌ Failed to save cache:', error)
  }
}

// Load data from cache file
export function loadFromCache(): any | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, 'utf-8')
      console.log('✅ Data loaded from cache')
      return JSON.parse(data)
    }
    return null
  } catch (error) {
    console.error('❌ Failed to load cache:', error)
    return null
  }
}

// Check if cache exists
export function cacheExists(): boolean {
  return fs.existsSync(CACHE_FILE)
}
