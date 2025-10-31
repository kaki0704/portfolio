export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  category?: Category;
}

export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
