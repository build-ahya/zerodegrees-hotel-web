export default interface Blog {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  highlighted?: boolean;
  likes: string[];
  views: string[];
  favorites: string[];
  tags: string[];
  slug: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}
