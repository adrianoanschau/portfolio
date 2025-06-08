export type Project = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  image?: string;
  link?: string;
  status?: 'completed' | 'in_progress' | 'planned';
};

export const Project = {
  async list(): Promise<Project[]> {
    const res = await import('@/entities/data/projects.json');
    return res.default;
  },
};