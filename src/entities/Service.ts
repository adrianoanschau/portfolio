export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
};

export const Service = {
  async list(): Promise<Service[]> {
    const res = await import('@/entities/data/services.json'); // json com dados, não o schema
    return res.default;
  },
};