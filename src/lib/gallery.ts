// Photo albums for the Moments page, edited in the CMS under "Moments".
// Albums and photos live in src/content/albums.json; image files in public/uploads/gallery/.
// Albums and photos appear in the order they are arranged in the editor.

import albumsFile from "@/content/albums.json";

export const MAX_ALBUMS = 5;
export const MAX_PHOTOS_PER_ALBUM = 50;

export type Photo = { src: string; album: string; caption: string };
export type Album = { id: string; label: string; photos: Photo[] };

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type AlbumEntry = { name: string; photos?: { image: string; caption?: string }[] };

export const albums: Album[] = (albumsFile.albums as AlbumEntry[])
  .slice(0, MAX_ALBUMS)
  .filter((a) => a.name)
  .map((a, i) => {
    const id = slugify(a.name) || `album-${i + 1}`;
    return {
      id,
      label: a.name,
      photos: (a.photos ?? [])
        .filter((p) => p.image)
        .slice(0, MAX_PHOTOS_PER_ALBUM)
        .map((p) => ({ src: p.image, album: id, caption: p.caption || a.name })),
    };
  })
  .filter((a) => a.photos.length > 0);

/** Every photo across all albums, in album order. */
export const photos: Photo[] = albums.flatMap((a) => a.photos);
