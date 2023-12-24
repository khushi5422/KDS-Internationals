import React from 'react'

export default function Caard() {
    return (
        <>
        <style>{`
        .background {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: start;
            padding: 80px 32px;
        }
         
        .articles {
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto;
            justify-content: center;
            max-width: 1200px;
            gap: 24px;
        }
         
        .articles article {
            max-width: 320px;
            cursor: pointer;
            position: relative;
            display: block;
            transition: all 0.4s ease-in-out;
            overflow: hidden;
            border-radius: 16px;
        }
        
        .articles article a {
            display: inline-flex;
            color: var(--primary);
            text-decoration: none;
        }
        
        
        .articles article h2 {
            margin: 0 0 18px 0;
            font-size: 1.6rem;
            color: var(--secondary);
            transition: color 0.3s ease-out;
        }
          
          
        .articles article img {
            max-width: 100%;
            transform-origin: center;
            transition: transform 0.4s ease-in-out;
        }
          
        .article-preview {
            padding: 24px;
            background: white;
        }
        
        .articles figure {
            width: 100%;
            height: 200px;
            overflow: hidden;
        }
        
        .articles figure img {
            height: 100%;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            object-fit: cover;
        }
        
        .articles article:hover img {
            transform: scale(1.5); 
        }
        `}</style>
            <div className="background">
                <div className="centering">
                    <div className="articles">
                        <article className='sparkle u-hover--sparkle'>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>

                        <article className='sparkle u-hover--sparkle'>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>

                        <article className='sparkle u-hover--sparkle'>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>

                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>Spice Type1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                    Praesent in mauris eu tortor porttitor accumsan.
                                    
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}
