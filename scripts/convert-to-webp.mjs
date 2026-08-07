import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = path.resolve(__dirname, '..')

// Target directory for conversion
const TARGET_DIR = process.argv[2]
  ? path.resolve(ROOT_DIR, process.argv[2])
  : path.resolve(ROOT_DIR, 'public/docs')

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.bmp', '.tiff'])
const QUALITY = 85

function getFilesRecursively(dir) {
  if (!fs.existsSync(dir)) return []
  let results = []
  const list = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of list) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath))
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (IMAGE_EXTENSIONS.has(ext)) {
        results.push(fullPath)
      }
    }
  }
  return results
}

function convertImages() {
  console.log(`🔍 Scanning directory: ${TARGET_DIR}`)
  const files = getFilesRecursively(TARGET_DIR)

  if (files.length === 0) {
    console.log('✨ No PNG/JPG/JPEG images found to convert.')
    return
  }

  console.log(`🖼️ Found ${files.length} image(s) to convert to WebP...`)

  let successCount = 0
  let totalOriginalSize = 0
  let totalWebpSize = 0

  for (const filePath of files) {
    const dir = path.dirname(filePath)
    const ext = path.extname(filePath)
    const baseName = path.basename(filePath, ext)
    const webpPath = path.join(dir, `${baseName}.webp`)

    const originalStats = fs.statSync(filePath)
    const originalSize = originalStats.size
    totalOriginalSize += originalSize

    console.log(`\n⏳ Converting: ${path.relative(ROOT_DIR, filePath)}`)

    try {
      // Execute cwebp
      execSync(`cwebp -q ${QUALITY} "${filePath}" -o "${webpPath}"`, { stdio: 'inherit' })

      if (fs.existsSync(webpPath)) {
        const webpStats = fs.statSync(webpPath)
        totalWebpSize += webpStats.size
        const savings = (((originalSize - webpStats.size) / originalSize) * 100).toFixed(1)

        console.log(`✅ Converted -> ${path.relative(ROOT_DIR, webpPath)} (${savings}% size reduction)`)

        // Automatically remove original file
        fs.unlinkSync(filePath)
        console.log(`🗑️ Removed original file: ${path.basename(filePath)}`)
        successCount++
      }
    } catch (error) {
      console.error(`❌ Failed to convert ${filePath}:`, error.message)
    }
  }

  const totalSavedKB = ((totalOriginalSize - totalWebpSize) / 1024).toFixed(1)
  console.log(`\n🎉 Done! Converted ${successCount}/${files.length} images. Total saved space: ${totalSavedKB} KB`)
}

convertImages()
