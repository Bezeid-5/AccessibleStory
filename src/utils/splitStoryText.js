/**
 * Découpe un texte en scènes en séparant sur les doubles retours à la ligne
 * @param {string} rawText - Le texte brut à découper
 * @returns {string[]} Un tableau de chaînes, une par scène
 */
export const splitStoryText = (rawText) => {
  if (!rawText || typeof rawText !== 'string') {
    return []
  }

  // Nettoyer les espaces en début et fin
  const cleaned = rawText.trim()

  if (!cleaned) {
    return []
  }

  // Séparer sur les doubles retours à la ligne ou plus (\n\n+)
  // Utiliser une expression régulière pour gérer plusieurs retours à la ligne consécutifs
  const scenes = cleaned.split(/\n\s*\n+/)
    .map(scene => scene.trim()) // Nettoyer chaque scène
    .filter(scene => scene.length > 0) // Ignorer les blocs vides

  return scenes
}

