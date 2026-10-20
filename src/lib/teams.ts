// Ministry teams for the Our Team page, edited in the CMS under "Our Team".
// Each team is one JSON file in src/content/teams/. Teams are shown by their "order" number.

type TeamFile = {
  name?: string;
  order?: number;
  description?: string;
  members?: { name?: string; role?: string; photo?: string }[];
};

const files = import.meta.glob("/src/content/teams/*.json", { eager: true, import: "default" }) as Record<string, TeamFile>;

export type TeamMember = { name: string; role?: string; photo?: string };
export type Team = { id: string; name: string; description?: string; members: TeamMember[] };

export const teams: Team[] = Object.entries(files)
  .map(([path, t]) => ({ ...t, id: path.split("/").pop()!.replace(/\.json$/, "") }))
  .filter((t) => t.name)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.name!.localeCompare(b.name!))
  .map((t) => ({
    id: t.id,
    name: t.name!,
    description: t.description || undefined,
    members: (t.members ?? [])
      .filter((m) => m?.name)
      .map((m) => ({ name: m.name!, role: m.role || undefined, photo: m.photo || undefined })),
  }));
