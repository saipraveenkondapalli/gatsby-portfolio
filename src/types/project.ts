import { ReactNode } from "react";

export type Project = {
  name: string;
  imageUrl: string;
  alt: string;
  summary: string;
  link?: string;
  tech: ReactNode[];
};