export type Testimonial = {
  id: string;
  name: string;
  comment: string;
  role?: string;
  company?: string;
  rating?: number;
  avatar?: string;
};

export const Testimonial = {
  async list(): Promise<Testimonial[]> {
    const res = await import('@/entities/data/testimonials.json'); // json com dados, não o schema
    return res.default;
  },
};