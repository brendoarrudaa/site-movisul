import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'

const galleryDirectory = join(process.cwd(), 'gallery')

export function getAllGalleryPhotos() {
  if (!fs.existsSync(galleryDirectory)) return []

  const files = fs.readdirSync(galleryDirectory).filter(f => f.endsWith('.md'))

  const photos = files
    .map(file => {
      const fullPath = join(galleryDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        src: data.image || '',
        alt: data.alt || '',
        category: data.category || 'Segurança do Trabalho',
        order: data.order ?? 99
      }
    })
    .filter(p => p.src)
    .sort((a, b) => a.order - b.order)

  return photos
}
