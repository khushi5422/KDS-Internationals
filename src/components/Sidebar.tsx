import React from 'react';

interface SidebarProps {
  articles: { title: string; content: string }[];
  onArticleChange: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ articles, onArticleChange }) => {
  return (
    <div>
      <h3>Related Articles</h3>
      <ul>
        {/* <li>
          <button onClick={() => onArticleChange(0)}>{articles[0].title}</button>
        </li> */}
        {articles.map((article, index) => (
          <li key={index}>
            <button onClick={() => onArticleChange(index)}>{article.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
