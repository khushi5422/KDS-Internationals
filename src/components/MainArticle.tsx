import React from 'react';
interface MainArticleProps {
  title: string;
  content: string;
}
const MainArticle: React.FC<MainArticleProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default MainArticle;
