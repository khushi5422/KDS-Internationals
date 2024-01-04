import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import styles from "../styles/Home.module.css";


export default function Services() {
    return (
        <>
            <style>{`
        .car{
            background-color: #fffffff7;
            padding: 34px;
            min-height: 300px;
            min-width: 300px;
        }
        .cbody{
            padding: 0;
    text-align: center;
        }
        @media only screen and (max-width: 769px) {
            .mobile{
                flex-direction: column;
            }
          }
        
        `}</style>
            <div className={`${styles.parallaxContainer}`}>
                <div className={`${styles.parallaxCaaard} mt-3`}></div>
                <div className={`${styles.parallaxCard}`}>
                    <div className='d-flex mobile'>
                        <Card className=' car  border-5 border-dark rounded-0 d-flex align-items-center'
                         data-aos="zoom-in-right"
                            data-aos-duration="1000"
                            data-aos-once="true"
                            >
                            <Image src="/truck.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Export</Card.Title>
                                <Card.Text style={{ fontSize: 'medium' }}>
                                    We export finest quality of dehydrated products, Maize, peanuts and other products with superlative value to the international market
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className=' car  border-5 border-dark rounded-0 d-flex align-items-center' 
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        >
                            <Image src="/truck.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Export</Card.Title>
                                <Card.Text style={{ fontSize: 'medium' }}>
                                    We export finest quality of dehydrated products, Maize, peanuts and other products with superlative value to the international market
                                </Card.Text>
                            </Card.Body>
                        </Card >
                        <Card className=' car border-5 border-dark rounded-0 d-flex align-items-center'
                        data-aos="zoom-in-right"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        
                        >
                            <Image src="/truck.webp" width={90} height={90} className='' alt='Image' />
                            <Card.Body className='cbody'>
                                <Card.Title className='text-center'>Export</Card.Title>
                                <Card.Text style={{ fontSize: 'medium' }}>
                                    We export finest quality of dehydrated products, Maize, peanuts and other products with superlative value to the international market
                                </Card.Text>
                            </Card.Body>
                        </Card >

                    </div>
                </div>
            </div>
        </>
    )
}
