import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PageData {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  content: string;
}

export function getAllPages(): PageData[] {
  const pagesDirectory = path.join(contentDirectory, 'pages');

  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(pagesDirectory);

  const pages = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: data.date || '',
        content,
      };
    });

  return pages;
}

export function getPageBySlug(slug: string): PageData | null {
  const pages = getAllPages();
  return pages.find(page => page.slug === slug) || null;
}

export function getPageSlugs(): string[] {
  const pages = getAllPages();
  return pages.map(page => page.slug);
}
