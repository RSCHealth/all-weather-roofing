export type CtaClass = "A" | "B" | "C";

export type Size = "sm" | "md" | "lg" | "hero";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  city: string;
  jobType: string;
  date: string; // ISO yyyy-mm-dd
  rating: 1 | 2 | 3 | 4 | 5;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = { question: string; answer: string };

export type Differentiator = {
  title: string;
  description: string;
  icon?: string;
};
