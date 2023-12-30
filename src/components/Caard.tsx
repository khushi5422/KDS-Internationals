import React from 'react'

export default function Caard(props :any) {
    return (
        <>
        <style>{`
        .background {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: start;
            padding: 50px 32px;
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
            overflow-wrap: anywhere;
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
                                    src={props.img1}
                                    alt={props.title1}
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>{props.title1}</h2>
                                <p>{props.description1}</p>
                            </div>
                        </article>

                        <article className='sparkle u-hover--sparkle'>
                            <figure>
                                <img
                                    src={props.img2}
                                    alt={props.title2}
                                />
                            </figure>
                            <div className="article-preview">
                            <h2>{props.title2}</h2>
                                <p>{props.description2}</p>
                            </div>
                        </article>

                        <article className='sparkle u-hover--sparkle'>
                            <figure>
                                <img
                                    src={props.img3}
                                    alt={props.title3}
                                />
                            </figure>
                            <div className="article-preview">
                            <h2>{props.title3}</h2>
                                <p>{props.description3}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}
