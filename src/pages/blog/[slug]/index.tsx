// pages/blog/[slug]/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { articles } from '../../../data/articles';
import MainArticle from '../../../components/MainArticle';
import Sidebar from '../../../components/Sidebar';

const BlogArticlePage: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const article = articles.find((article) => article.title === slug);

    if (!article) {
        return <div>Article not found</div>;
    }
    return (
        <div className="container container-fluid mt-3">
            <div className="row">
                <div className="col-md-8 ">
                    <MainArticle title={article.title} content={article.content} />
                </div>
                <div className="col-md-4 ">
                    <Sidebar articles={articles.filter((a) => a.title !== slug)} />
                </div>
            </div>
        </div>
    );
};

export default BlogArticlePage;
