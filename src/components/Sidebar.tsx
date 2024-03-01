// components/Sidebar.tsx
import React from 'react';
import { useRouter } from 'next/router';
interface SidebarProps {
  articles: { title: string; content: string }[];
}
const Sidebar: React.FC<SidebarProps> = ({ articles }) => {
  const router = useRouter();
  const handleArticleClick = (title: string) => {
    router.push(`/blog/${encodeURIComponent(title)}`);
  };
  return (
    <div>
      <h3>Related Articles</h3>
      <ul className='paint'style={{color : 'pink'}}>
        {articles.map((article, index) => (
          <li key={index}>
            <a onClick={() => handleArticleClick(article.title)}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
