import React, { useState } from 'react';
import MainArticle from '../../components/MainArticle';
import Sidebar from '../../components/Sidebar';

const App: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState(0);

  const articles = [
    {
      title: 'List of Spices from India',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet',
    },
    {
      title: 'Cost of Saffron in India',
      content: 'Content for Related Article 1.',
    },
    {
      title: 'Cardamom Price in India',
      content: 'Content for Related Article 2.',
    },
    {
      title: 'Elaichi price in India',
      content: 'Content for Related Article 3.',
    },
    {
      title: 'Chilli types in India',
      content: 'Content for Related Article 4.',
    },
    {
      title: 'Types of Chilli in India',
      content: 'Content for Related Article 5.',
    },
    {
      title: 'Best Spice Exporter in India',
      content: 'Content for Related Article 5.',
    },
    {
      title: 'Uncover the Health Benefits of Organic Spices: From Turmeric to Cinnamon',
      content: 'Content for Related Article 5.',
    },
    {
      title: 'Spice Up Your Cooking with Exotic Organic Herbs and Spice Blends',
      content: 'Content for Related Article 5.',
    },
  ];

  const handleArticleChange = (index: number) => {
    setCurrentArticle(index);
  };

  return (
    <>
    <style>{`
    .container {
      display: flex; 
    }
    
    .main {
      flex: 2; 
    }
    
    .sidebar {
      flex: 1;
    }
    `}</style>
    <div className="container mt-3">
      <div className="main">
        <MainArticle title={articles[currentArticle].title} content={articles[currentArticle].content} />
      </div>
      <div className="sidebar">
        <Sidebar articles={articles.slice(0)} onArticleChange={handleArticleChange} />
      </div>
    </div>
    </>
  );
};


export default App;
