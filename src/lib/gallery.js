import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'

const galleryDirectory = join(process.cwd(), 'public', 'assets', 'img-gallery')

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
        alt: data.alt || data.title || '',
        caption: data.caption || '',
        category: data.category || 'Segurança do Trabalho',
        order: typeof data.order === 'number' ? data.order : 99
      }
    })
    // Ignora arquivos sem imagem definida ou que sejam apenas exemplos
    .filter(p => p.src && !p.src.includes('nome-da-foto'))
    .sort((a, b) => a.order - b.order)

  return photos
}
