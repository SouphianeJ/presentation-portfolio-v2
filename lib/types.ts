export type Tag = "Tech" | "Pédagogie" | "Play" | string;

export interface Project {
  slug: string;
  title: string;
  summary: string;     // PAR compact (1–2 lignes)
  metric?: string;     // ex. "-40% T2C"
  tags: Tag[];
}

export interface Skill {
  name: string;
  level: number;       // 1..5
  proof?: string;
  next?: string;
}

export interface PostItem {
  title: string;
  type: "article" | "curation";
  url: string;
  summary?: string;
}
