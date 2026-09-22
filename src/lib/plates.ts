/**
 * The project data still carries image paths in the "/name.png" form the old
 * site used. Plates are generated per base name, so strip it back to that.
 */
export function plateName(imagePath: string): string {
  return imagePath.replace(/^\//, "").replace(/\.(png|jpe?g)$/i, "");
}
