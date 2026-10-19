// Photo albums for the Moments page, edited in the CMS under "Moments".
// Each album is one JSON file in src/content/albums/ listing image paths in
// public/uploads/gallery/. Albums are shown by their "order" number.

export const MAX_ALBUMS = 5;
export const MAX_PHOTOS_PER_ALBUM = 50;

type AlbumFile = { name?: string; order?: number; photos?: string[] | string };

const files = import.meta.glob("/src/content/albums/*.json", { eager: true, import: "default" }) as Record<
  string,
  AlbumFile
>;

export type Photo = { src: string; album: string; caption: string };
export type Album = { id: string; label: string; photos: Photo[] };

export const albums: Album[] = Object.entries(files)
  .map(([path, a]) => ({ ...a, id: path.split("/").pop()!.replace(/\.json$/, "") }))
  .filter((a) => a.name)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.name!.localeCompare(b.name!))
  .slice(0, MAX_ALBUMS)
  .map((a) => {
    const list = Array.isArray(a.photos) ? a.photos : a.photos ? [a.photos] : [];
    return {
      id: a.id,
      label: a.name!,
      photos: list
        .filter(Boolean)
        .slice(0, MAX_PHOTOS_PER_ALBUM)
        .map((src, i) => ({ src, album: a.id, caption: `${a.name} · photo ${i + 1}` })),
    };
  })
  .filter((a) => a.photos.length > 0);

/** Every photo across all albums, in album order. */
export const photos: Photo[] = albums.flatMap((a) => a.photos);
